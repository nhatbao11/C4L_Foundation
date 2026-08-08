"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageContext";
import type { Student } from "@/types";

export default function StudentTable() {
  const { lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Raw mock database of students
  const rawStudents: Student[] = useMemo(() => [
    { id: "SV001", name: "Nguyễn Thị A", birthYear: 2004, gender: "Nữ", province: "Quảng Nam", university: "ĐH Khoa học Tự nhiên", gpa: "3.8", status: "Đang nhận bảo trợ" },
    { id: "SV002", name: "Trần Văn B", birthYear: 2003, gender: "Nam", province: "Quảng Nam", university: "ĐH Bách Khoa", gpa: "3.5", status: "Đang nhận bảo trợ" },
    { id: "QTN001", name: "Phùng Thị C", birthYear: 2005, gender: "Nữ", province: "Quảng Nam", university: "ĐH Kinh tế Luật", gpa: "3.2", status: "Chấm dứt bảo trợ" },
    { id: "QTN002", name: "Trần Thị D", birthYear: 2004, gender: "Nữ", province: "Quảng Nam", university: "ĐH Y Dược TP.HCM", gpa: "3.9", status: "Đang nhận bảo trợ" },
    { id: "QTN003", name: "Trần Văn E", birthYear: 2003, gender: "Nam", province: "Quảng Nam", university: "ĐH Sư phạm Kỹ thuật", gpa: "3.4", status: "Đang nhận bảo trợ" },
    { id: "QTN004", name: "Nguyễn Thị F", birthYear: 2005, gender: "Nữ", province: "Hà Tĩnh", university: "ĐH Ngoại Thương", gpa: "3.7", status: "Đang nhận bảo trợ" },
    { id: "QTN005", name: "Nguyễn Thị G", birthYear: 2006, gender: "Nữ", province: "Hà Tĩnh", university: "ĐH Kinh tế Quốc dân", gpa: "3.6", status: "Đang nhận bảo trợ" },
    { id: "QTN006", name: "Nguyễn Thị H", birthYear: 2004, gender: "Nữ", province: "Hà Tĩnh", university: "ĐH Bách Khoa", gpa: "3.1", status: "Hoàn thành bảo trợ" },
    { id: "QTN007", name: "Nguyễn Thị I", birthYear: 2005, gender: "Nữ", province: "Hà Tĩnh", university: "ĐH Khoa học Tự nhiên", gpa: "3.8", status: "Đang nhận bảo trợ" },
    { id: "QTN008", name: "Nguyễn Văn J", birthYear: 2003, gender: "Nam", province: "Hà Tĩnh", university: "ĐH Xây dựng", gpa: "2.9", status: "Chấm dứt bảo trợ" },
    { id: "QTN009", name: "Trần Thị K", birthYear: 2004, gender: "Nữ", province: "Quảng Nam", university: "ĐH Y Dược Huế", gpa: "3.5", status: "Hoàn thành bảo trợ" },
    { id: "QTN010", name: "Trần Thị L", birthYear: 2005, gender: "Nữ", province: "Quảng Nam", university: "ĐH Sư phạm", gpa: "3.3", status: "Đang nhận bảo trợ" },
    { id: "QTN011", name: "Trần Văn M", birthYear: 2006, gender: "Nam", province: "Quảng Nam", university: "ĐH Bách Khoa", gpa: "2.8", status: "Chấm dứt bảo trợ" },
    { id: "QTN012", name: "Lê Văn N", birthYear: 2003, gender: "Nam", province: "Quảng Trị", university: "ĐH Bách Khoa", gpa: "3.4", status: "Hoàn thành bảo trợ" },
    { id: "QTN013", name: "Lê Văn O", birthYear: 2004, gender: "Nam", province: "Quảng Trị", university: "ĐH Giao thông Vận tải", gpa: "3.2", status: "Hoàn thành bảo trợ" },
    { id: "QTN014", name: "Dương Thị P", birthYear: 2005, gender: "Nữ", province: "Thừa Thiên Huế", university: "ĐH Kinh tế", gpa: "3.6", status: "Đang nhận bảo trợ" },
    { id: "QTN015", name: "Dương Thị Q", birthYear: 2006, gender: "Nữ", province: "Thừa Thiên Huế", university: "ĐH Luật", gpa: "3.5", status: "Đang nhận bảo trợ" },
    { id: "QTN016", name: "Lê Văn R", birthYear: 2004, gender: "Nam", province: "Thừa Thiên Huế", university: "ĐH Bách Khoa", gpa: "3.1", status: "Đang nhận bảo trợ" },
    { id: "QTN017", name: "Lê Thị S", birthYear: 2005, gender: "Nữ", province: "Thừa Thiên Huế", university: "ĐH Sư phạm", gpa: "3.0", status: "Chấm dứt bảo trợ" },
    { id: "QTN018", name: "Đỗ Văn T", birthYear: 2003, gender: "Nam", province: "Quảng Bình", university: "ĐH Kiến trúc", gpa: "3.3", status: "Đang nhận bảo trợ" },
    { id: "QTN019", name: "Đặng Văn U", birthYear: 2005, gender: "Nam", province: "Quảng Bình", university: "ĐH Khoa học Tự nhiên", gpa: "3.7", status: "Đang nhận bảo trợ" },
    { id: "QTN020", name: "Đoàn Văn V", birthYear: 2004, gender: "Nam", province: "Quảng Bình", university: "ĐH Nông Lâm", gpa: "3.4", status: "Hoàn thành bảo trợ" },
    { id: "SV003", name: "Trịnh Văn W", birthYear: 2004, gender: "Nam", province: "TP. Hồ Chí Minh", university: "ĐH Bách Khoa", gpa: "3.8", status: "Đang nhận bảo trợ" },
    { id: "SV004", name: "Lâm Thị X", birthYear: 2005, gender: "Nữ", province: "TP. Hồ Chí Minh", university: "ĐH Quốc Tế", gpa: "3.9", status: "Hoàn thành bảo trợ" }
  ], []);

  // Distinct Provinces for Dropdown
  const provinces = useMemo(() => {
    const list = new Set(rawStudents.map((s) => s.province));
    return ["All", ...Array.from(list)].sort((a, b) => a.localeCompare(b, "vi"));
  }, [rawStudents]);

  // Filter Logic
  const filteredStudents = useMemo(() => {
    return rawStudents.filter((student) => {
      const matchSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchProvince = selectedProvince === "All" || student.province === selectedProvince;

      let matchStatus = true;
      if (selectedStatus !== "All") {
        if (selectedStatus === "Active") matchStatus = student.status === "Đang nhận bảo trợ";
        if (selectedStatus === "Completed") matchStatus = student.status === "Hoàn thành bảo trợ";
        if (selectedStatus === "Terminated") matchStatus = student.status === "Chấm dứt bảo trợ";
      }

      return matchSearch && matchProvince && matchStatus;
    });
  }, [rawStudents, searchTerm, selectedProvince, selectedStatus]);

  // Pagination Logic
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;
  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredStudents.slice(start, start + itemsPerPage);
  }, [filteredStudents, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getStatusText = (status: Student["status"]) => {
    if (lang === "en") {
      if (status === "Đang nhận bảo trợ") return "Active Sponsorship";
      if (status === "Hoàn thành bảo trợ") return "Completed";
      if (status === "Chấm dứt bảo trợ") return "Terminated";
    }
    return status;
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mt-8 pb-28">
      {/* Filters bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search bar */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder={lang === "vi" ? "Tìm tên hoặc mã hồ sơ..." : "Search by name or student ID..."}
            className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] text-slate-800 text-sm shadow-sm transition-all"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Select Dropdown: Province */}
        <div className="relative min-w-[200px]">
          <select
            value={selectedProvince}
            onChange={(e) => {
              setSelectedProvince(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-4 pr-10 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] text-slate-700 text-sm shadow-sm transition-all appearance-none font-medium cursor-pointer"
          >
            <option value="All">{lang === "vi" ? "Tất cả tỉnh thành" : "All Provinces"}</option>
            {provinces
              .filter((p) => p !== "All")
              .map((prov, idx) => (
                <option key={idx} value={prov}>
                  {prov}
                </option>
              ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Select Dropdown: Status */}
        <div className="relative min-w-[200px]">
          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-4 pr-10 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-[#15803D] text-slate-700 text-sm shadow-sm transition-all appearance-none font-medium cursor-pointer"
          >
            <option value="All">{lang === "vi" ? "Tất cả trạng thái" : "All Statuses"}</option>
            <option value="Active">{lang === "vi" ? "Đang nhận bảo trợ" : "Active Sponsorship"}</option>
            <option value="Completed">{lang === "vi" ? "Hoàn thành bảo trợ" : "Completed"}</option>
            <option value="Terminated">{lang === "vi" ? "Chấm dứt bảo trợ" : "Terminated"}</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50 text-[10px] md:text-xs font-bold text-slate-400 tracking-wider uppercase">
                <th className="py-4 px-6 font-semibold">{lang === "vi" ? "Mã HS" : "ID"}</th>
                <th className="py-4 px-6 font-semibold">{lang === "vi" ? "Họ và tên sinh viên" : "Full Name"}</th>
                <th className="py-4 px-6 font-semibold">{lang === "vi" ? "Trường" : "University"}</th>
                <th className="py-4 px-6 font-semibold text-center">GPA</th>
                <th className="py-4 px-6 font-semibold text-center">{lang === "vi" ? "Trạng thái" : "Status"}</th>
                <th className="py-4 px-6 font-semibold text-right">{lang === "vi" ? "Hồ sơ" : "Profile"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 text-xs md:text-sm">
              {paginatedStudents.length > 0 ? (
                paginatedStudents.map((student, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors duration-150">
                    <td className="py-4 px-6 font-mono font-bold text-emerald-800">{student.id}</td>
                    <td className="py-4 px-6 font-semibold text-slate-900">{student.name}</td>
                    <td className="py-4 px-6 font-medium text-slate-600">{student.university}</td>
                    <td className="py-4 px-6 text-center font-bold text-slate-800">{student.gpa}</td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border transition-colors ${
                          student.status === "Đang nhận bảo trợ"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200/50"
                            : student.status === "Hoàn thành bảo trợ"
                            ? "bg-blue-50 text-blue-700 border-blue-200/50"
                            : "bg-red-50 text-red-700 border-red-200/50"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0 ${
                            student.status === "Đang nhận bảo trợ"
                              ? "bg-emerald-500"
                              : student.status === "Hoàn thành bảo trợ"
                              ? "bg-blue-500"
                              : "bg-red-500"
                          }`}
                        ></span>
                        {getStatusText(student.status)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={`/pdfs/${student.id}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-800 px-3 py-1.5 rounded-lg transition-colors border border-emerald-200"
                      >
                        {lang === "vi" ? "Chi tiết" : "View"}
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-400 font-medium">
                    {lang === "vi" ? "Không tìm thấy hồ sơ sinh viên phù hợp." : "No student files match the filters."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination bar */}
        {totalPages > 1 && (
          <div className="py-4 px-6 border-t border-slate-200 bg-slate-50/30 flex items-center justify-between gap-4">
            <span className="text-xs font-medium text-slate-500">
              {lang === "vi"
                ? `Hiển thị ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(
                    currentPage * itemsPerPage,
                    filteredStudents.length
                  )} trên tổng số ${filteredStudents.length} kết quả`
                : `Showing ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(
                    currentPage * itemsPerPage,
                    filteredStudents.length
                  )} of ${filteredStudents.length} results`}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => handlePageChange(p)}
                  className={`w-9 h-9 rounded-lg border font-bold text-xs transition-colors ${
                    currentPage === p
                      ? "bg-[#15803D] border-[#15803D] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
