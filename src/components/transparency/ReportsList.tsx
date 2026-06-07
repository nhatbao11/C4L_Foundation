"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageContext";
import type { Report } from "@/types";

export default function ReportsList() {
  const { lang } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const reports: Report[] = useMemo(() => [
    {
      month: 4,
      year: 2026,
      totalIncome: "53.218.413.304 ₫",
      totalExpense: "26.097.973.095 ₫",
      onlineAccount: "26.500.000.000 ₫",
      cashAccount: "620.440.209 ₫",
      closingBalance: "27.120.440.209 ₫",
      incomeDescVi: "Thu trong tháng 04/2026: Nhận quyên góp từ các Mạnh thường quân (MTQ) trong nước và quốc tế từ ngày 01/04/2026 đến 30/04/2026.",
      incomeDescEn: "Received donations from domestic and international sponsors (MTQs) from April 1 to April 30, 2026.",
      expenseDescVi: "Chi trong tháng 04/2026: Chi trả học bổng cho 225 sinh viên: 378.458.000 VNĐ; Hoàn thiện ký túc xá Cỏ 4 Lá đợt 2.",
      expenseDescEn: "Disbursed scholarship grants to 225 active students: 378,458,000 VND; completed Co 4 La dormitory phase 2 works."
    },
    {
      month: 3,
      year: 2026,
      totalIncome: "52.843.441.471 ₫",
      totalExpense: "25.471.254.645 ₫",
      onlineAccount: "26.500.000.000 ₫",
      cashAccount: "872.186.826 ₫",
      closingBalance: "27.372.186.826 ₫",
      incomeDescVi: "Thu trong tháng 03/2026: Nhận quyên góp định kỳ thông qua cổng thanh toán tự động VietQR và tài khoản ngân hàng chính thức.",
      incomeDescEn: "Received recurring donations via VietQR instant banking gateway and official bank transfers.",
      expenseDescVi: "Chi trong tháng 03/2026: Chi trả học bổng cho 222 sinh viên: 373.748.000 VNĐ; Tài trợ chi phí dụng cụ học tập.",
      expenseDescEn: "Disbursed scholarship grants to 222 active students: 373,748,000 VND; subsidized learning supplies."
    },
    {
      month: 2,
      year: 2026,
      totalIncome: "52.421.019.368 ₫",
      totalExpense: "24.984.972.706 ₫",
      onlineAccount: "26.500.000.000 ₫",
      cashAccount: "936.046.662 ₫",
      closingBalance: "27.436.046.662 ₫",
      incomeDescVi: "Thu trong tháng 02/2026: Đóng góp Tết từ cộng đồng cựu sinh viên Cỏ 4 Lá và các doanh nghiệp đối tác đồng hành.",
      incomeDescEn: "Lunar New Year drive sponsorships from Co 4 La alumni networks and partner enterprises.",
      expenseDescVi: "Chi trong tháng 02/2026: Chi trả học bổng cho 223 sinh viên: 375.748.000 VNĐ; Tổ chức rèn luyện kỹ năng thực chiến.",
      expenseDescEn: "Disbursed scholarship grants to 223 active students: 375,748,000 VND; funded practical lab workshops."
    },
    {
      month: 1,
      year: 2026,
      totalIncome: "51.715.442.403 ₫",
      totalExpense: "24.368.806.529 ₫",
      onlineAccount: "26.500.000.000 ₫",
      cashAccount: "846.635.874 ₫",
      closingBalance: "27.346.635.874 ₫",
      incomeDescVi: "Thu trong tháng 01/2026: Nhận tài trợ năm mới từ quỹ hợp tác chiến lược và các MTQ đăng ký bảo trợ dài hạn.",
      incomeDescEn: "Received New Year grants from strategic funding organizations and long-term program sponsors.",
      expenseDescVi: "Chi trong tháng 01/2026: Chi trả học bổng cho 190 sinh viên: 381.568.000 VNĐ; Thanh toán chi phí phòng ở ký túc xá.",
      expenseDescEn: "Disbursed scholarship grants to 190 active students: 381,568,000 VND; paid monthly student dormitory rent."
    },
    {
      month: 12,
      year: 2025,
      totalIncome: "51.250.754.102 ₫",
      totalExpense: "23.789.916.812 ₫",
      onlineAccount: "26.500.000.000 ₫",
      cashAccount: "960.837.290 ₫",
      closingBalance: "27.460.837.290 ₫",
      incomeDescVi: "Thu trong tháng 12/2025: Chiến dịch quyên góp Giáng Sinh và tổng kết năm của Ban liên lạc học viên Cỏ 4 Lá.",
      incomeDescEn: "Christmas fund drive and end-of-year contributions gathered by the Co 4 La student liaison committee.",
      expenseDescVi: "Chi trong tháng 12/2025: Chi hỗ trợ cho 240 trẻ: 409.408.000 VNĐ; Hỗ trợ y tế khẩn cấp và bổ sung dinh dưỡng.",
      expenseDescEn: "Disbursed support to 240 children: 409,408,000 VND; funded emergency healthcare and nutritional support."
    },
    {
      month: 11,
      year: 2025,
      totalIncome: "49.595.661.640 ₫",
      totalExpense: "23.191.210.729 ₫",
      onlineAccount: "25.500.000.000 ₫",
      cashAccount: "906.826.911 ₫",
      closingBalance: "26.404.450.911 ₫",
      incomeDescVi: "Thu trong tháng 11/2025: Đóng góp chào mừng Ngày Nhà Giáo Việt Nam và hỗ trợ từ quỹ đối tác công nghệ.",
      incomeDescEn: "Received donations honoring Teachers' Day and developer sponsorships from tech partners.",
      expenseDescVi: "Chi trong tháng 11/2025: Chi trả học bổng cho 242 sinh viên: 411.567.000 VNĐ; Gia hạn bản quyền phần mềm phục vụ học tập.",
      expenseDescEn: "Disbursed scholarship grants to 242 active students: 411,567,000 VND; renewed learning software licenses."
    },
    {
      month: 10,
      year: 2025,
      totalIncome: "48.210.450.000 ₫",
      totalExpense: "22.560.120.000 ₫",
      onlineAccount: "25.000.000.000 ₫",
      cashAccount: "650.330.000 ₫",
      closingBalance: "25.650.330.000 ₫",
      incomeDescVi: "Thu trong tháng 10/2025: Tài trợ định kỳ của MTQ qua MB Bank và đóng góp của cộng đồng Mentor.",
      incomeDescEn: "Recurring donor transfers received via MB Bank and funding contributions from Co 4 La mentors.",
      expenseDescVi: "Chi trong tháng 10/2025: Chi trả bảo trợ học phí kỳ I và hoạt động rèn luyện tư duy thực chiến.",
      expenseDescEn: "Disbursed Semester I tuition support grants and funded practical logic training workshops."
    },
    {
      month: 12,
      year: 2024,
      totalIncome: "42.150.300.000 ₫",
      totalExpense: "19.820.400.000 ₫",
      onlineAccount: "22.000.000.000 ₫",
      cashAccount: "329.900.000 ₫",
      closingBalance: "22.329.900.000 ₫",
      incomeDescVi: "Thu trong tháng 12/2024: Tổng kết chiến dịch tài trợ mùa đông hỗ trợ sinh viên khó khăn vượt khó học tốt.",
      incomeDescEn: "Sponsorship proceeds from the Winter drive assisting underfunded students in achieving scholastic milestones.",
      expenseDescVi: "Chi trong tháng 12/2024: Trao học bổng đợt cuối năm và nâng cấp cơ sở vật chất khu sinh hoạt chung.",
      expenseDescEn: "Disbursed year-end scholarship stipends and upgraded common room equipment in dormitories."
    }
  ], []);

  const filteredReports = useMemo(() => {
    if (selectedYear === "All") return reports;
    return reports.filter((r) => r.year === parseInt(selectedYear));
  }, [reports, selectedYear]);

  const years = useMemo(() => {
    const list = new Set(reports.map((r) => r.year));
    return ["All", ...Array.from(list)].sort((a, b) => b.toString().localeCompare(a.toString()));
  }, [reports]);

  return (
    <section className="max-w-7xl mx-auto px-6 mt-10 pb-28">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-5">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="font-display font-extrabold text-base md:text-lg text-slate-900 uppercase tracking-wide">
            {lang === "vi" ? `Danh sách báo cáo (${reports.length})` : `Report List (${reports.length})`}
          </h2>
        </div>

        {/* Year Select Pills */}
        <div className="flex flex-wrap gap-2">
          {years.map((year) => (
            <button
              key={year.toString()}
              onClick={() => setSelectedYear(year.toString())}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                selectedYear === year.toString()
                  ? "bg-[#15803D] border-[#15803D] text-white shadow-sm"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {year === "All" ? (lang === "vi" ? "Tất cả" : "All") : (lang === "vi" ? `Năm ${year}` : `Year ${year}`)}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Report Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {filteredReports.map((report) => (
          <div
            key={`${report.year}-${report.month}`}
            className="bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Header Image with Slanted Green Accent Card */}
              <div className="relative h-[132px] w-full bg-slate-100 flex overflow-hidden">
                {/* Left Side: Photo illustration */}
                <div
                  style={{ backgroundImage: "url('/report_header.png')" }}
                  className="absolute inset-y-0 left-0 w-[60%] bg-cover bg-center"
                ></div>

                {/* Right Side Slanted Brand Color Card */}
                <div
                  style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)" }}
                  className="absolute inset-y-0 right-0 w-[46%] bg-[#15803D] flex flex-col justify-center pl-6 pr-3 text-white z-10"
                >
                  <span className="font-display font-black text-[11px] md:text-[12px] tracking-wide uppercase leading-tight">
                    {lang === "vi" ? "BÁO CÁO THU CHI" : "BALANCE SHEET"}
                  </span>
                  <span className="text-[10px] text-emerald-200 mt-1 font-bold">
                    {lang === "vi"
                      ? `Tháng ${report.month.toString().padStart(2, "0")}.${report.year}`
                      : `Month ${report.month.toString().padStart(2, "0")}.${report.year}`}
                  </span>
                </div>

                {/* Top-Right Month Stamp Badge */}
                <span className="absolute top-3 right-3 z-20 bg-blue-600/90 text-white font-black text-[9px] uppercase px-2 py-0.5 rounded-full tracking-wider">
                  {lang === "vi" ? `Tháng ${report.month}/${report.year}` : `Month ${report.month}/${report.year}`}
                </span>
              </div>

              {/* Card Financial Summaries */}
              <div className="p-5 md:p-6 pb-2">
                <div className="flex gap-3">
                  {/* Income pill */}
                  <div className="flex-1 bg-emerald-50 border border-emerald-100/50 rounded-xl px-3 py-2 text-emerald-800">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600/80 flex items-center gap-1">
                      <span>↗</span> {lang === "vi" ? "Tổng thu" : "Total Income"}
                    </div>
                    <div className="text-xs md:text-sm font-extrabold mt-1 font-mono tracking-tight">
                      {report.totalIncome}
                    </div>
                  </div>
                  {/* Expense pill */}
                  <div className="flex-1 bg-red-50 border border-red-100/50 rounded-xl px-3 py-2 text-red-800">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-red-600/80 flex items-center gap-1">
                      <span>↘</span> {lang === "vi" ? "Tổng chi" : "Total Expense"}
                    </div>
                    <div className="text-xs md:text-sm font-extrabold mt-1 font-mono tracking-tight">
                      {report.totalExpense}
                    </div>
                  </div>
                </div>

                {/* Financial Breakdown Table */}
                <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 flex flex-col gap-2.5 mt-4 text-xs font-semibold text-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">{lang === "vi" ? "TK Online" : "Online Account"}</span>
                    <span className="font-mono text-slate-800">{report.onlineAccount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">{lang === "vi" ? "Tiền mặt" : "Cash Ledger"}</span>
                    <span className="font-mono text-slate-800">{report.cashAccount}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-200/80 pt-2 text-blue-700 font-bold text-sm md:text-[15px]">
                    <span>{lang === "vi" ? "Tồn cuối kỳ" : "Ending Balance"}</span>
                    <span className="font-mono">{report.closingBalance}</span>
                  </div>
                </div>

                {/* Monthly Descriptions */}
                <div className="text-[11px] md:text-xs text-slate-500 leading-relaxed font-medium mt-4 flex flex-col gap-2 line-clamp-4">
                  <div className="flex gap-1.5 items-start">
                    <span className="text-emerald-500 mt-0.5 text-xs flex-shrink-0">✔</span>
                    <p>{lang === "vi" ? report.incomeDescVi : report.incomeDescEn}</p>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <span className="text-amber-500 mt-0.5 text-xs flex-shrink-0">🔸</span>
                    <p>{lang === "vi" ? report.expenseDescVi : report.expenseDescEn}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="px-5 md:px-6 pb-5">
              <button className="w-full border border-emerald-800 text-emerald-800 hover:bg-emerald-50/50 py-2.5 rounded-xl text-xs font-bold transition-colors duration-200 flex items-center justify-center gap-1.5 uppercase tracking-wider">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                </svg>
                <span>{lang === "vi" ? "Tải báo cáo chi tiết" : "Download PDF report"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
