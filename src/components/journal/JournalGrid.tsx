"use client";

import React from "react";
import JournalCard from "./JournalCard";
import { useLanguage } from "@/components/LanguageContext";
import type { Post } from "@/types";

interface JournalGridProps {
  searchTerm: string;
  selectedCategory: string;
}

export default function JournalGrid({ searchTerm, selectedCategory }: JournalGridProps) {
  const { lang } = useLanguage();

  const posts: Post[] = [
    {
      id: 1,
      titleVi: "QUỸ CỎ BỐN LÁ CẦN TÌM ĐỒNG ĐỘI",
      titleEn: "CO 4 LA FOUNDATION HIRING ANNOUNCEMENT",
      tagVi: "Tuyển dụng",
      tagEn: "Recruitment",
      dateVi: "1 tháng 5, 2026",
      dateEn: "May 1, 2026",
      excerptVi: "Quỹ Cỏ Bốn Lá cần tìm ứng viên phù hợp cho vị trí Giám đốc Điều hành để quản lý vận hành hoạt động tài trợ học tập và kết nối các thế hệ sinh viên.",
      excerptEn: "Co 4 La Foundation is actively recruiting for the Executive Director role to lead program sponsorships and align alumni connections.",
      imageType: "placeholder"
    },
    {
      id: 2,
      titleVi: "VÒNG 2 - ĐỢT XÉT DUYỆT 18",
      titleEn: "ROUND 2 - SPONSORSHIP EVALUATION 18",
      tagVi: "Thông báo",
      tagEn: "Announcement",
      dateVi: "24 tháng 3, 2026",
      dateEn: "March 24, 2026",
      excerptVi: "CHÚC MỪNG 132 HỒ SƠ VƯỢT QUA VÒNG 01 - BƯỚC TIẾP VÀO VÒNG 02 ĐỂ TIẾN HÀNH THẨM ĐỊNH HOÀN CẢNH VÀ XÁC MINH CHI TIẾT.",
      excerptEn: "CONGRATULATIONS TO 132 CANDIDATES PASSING ROUND 01 - PROCEEDING TO DETAILED ROUND 02 HOME VISITS AND VALUE VERIFICATION.",
      imageType: "placeholder"
    },
    {
      id: 3,
      titleVi: "CHÚC MỪNG 91 HỒ SƠ VƯỢT QUA VÒNG 1 – TIẾN VÀO VÒNG 2",
      titleEn: "CONGRATULATIONS TO 91 STUDENTS PASSING ROUND 1",
      tagVi: "Danh sách",
      tagEn: "Student List",
      dateVi: "9 tháng 1, 2026",
      dateEn: "January 9, 2026",
      excerptVi: "Danh sách 91 sinh viên xuất sắc vượt qua vòng lọc hồ sơ đợt 18, phân bố chủ yếu tại các tỉnh miền Trung như Quảng Nam, Quảng Ngãi, Bình Định.",
      excerptEn: "Official list of 91 students passing the preliminary review for round 18, mainly distributed in Central Vietnam provinces.",
      imageType: "vietnam-map"
    },
    {
      id: 4,
      titleVi: "CHÚC MỪNG 37 EM NHỎ TRONG ĐỢT XÉT DUYỆT 17",
      titleEn: "CONGRATULATIONS TO 37 SPONSORED CHILDREN IN ROUND 17",
      tagVi: "Danh sách",
      tagEn: "Student List",
      dateVi: "9 tháng 1, 2026",
      dateEn: "January 9, 2026",
      excerptVi: "Quỹ Cỏ Bốn Lá vui mừng công bố danh sách 37 em học sinh có hoàn cảnh đặc biệt khó khăn được phê duyệt nhận học bổng bảo trợ trọn đời đợt 17.",
      excerptEn: "Co 4 La Foundation is pleased to announce 37 sponsored students approved to join our lifetime learning support initiative in Round 17.",
      imageType: "table-list-1"
    },
    {
      id: 5,
      titleVi: "HÀNH TRÌNH 05 NĂM YÊU THƯƠNG & TRƯỞNG THÀNH",
      titleEn: "5 YEARS OF LOVE & SCHOLASTIC GROWTH",
      tagVi: "Sự kiện",
      tagEn: "Event",
      dateVi: "21 tháng 10, 2025",
      dateEn: "October 21, 2025",
      excerptVi: "Tổng kết chặng đường 5 năm kết nối, gieo mầm hy vọng cho tương lai sinh viên vượt khó tự lực vươn lên thành công trong cuộc sống.",
      excerptEn: "Reflecting on a 5-year journey offering mentorship and resources for self-reliant students to achieve life goals.",
      imageType: "placeholder"
    },
    {
      id: 6,
      titleVi: "GIEO YÊU THƯƠNG GIỮA ĐẠI NGÀN ĐẮK LẮK 🌿 💛",
      titleEn: "PLANTING SEEDS OF LOVE IN DAK LAK HIGHLANDS 🌿 💛",
      tagVi: "Hoạt động",
      tagEn: "Activity",
      dateVi: "27 tháng 7, 2025",
      dateEn: "July 27, 2025",
      excerptVi: "Chuyến thực tế của ban chủ nhiệm và tình nguyện viên đến trực tiếp nhà các học sinh tại buôn làng Đắk Lắk để trao kinh phí bảo trợ học tập.",
      excerptEn: "A field trip by our directors and volunteers visiting student homes in Dak Lak villages to directly hand over sponsorship packages.",
      imageType: "daklak"
    },
    {
      id: 7,
      titleVi: "🎉 CHÚC MỪNG 28 TRẺ ĐƯỢC BẢO TRỢ - ĐỢT XÉT DUYỆT 17",
      titleEn: "🎉 SPONSORSHIP GRANTED TO 28 CHILDREN - ROUND 17",
      tagVi: "Thông báo",
      tagEn: "Announcement",
      dateVi: "23 tháng 6, 2025",
      dateEn: "June 23, 2025",
      excerptVi: "Quyết định phê duyệt chính thức nhận đỡ đầu học phí và sinh hoạt phí cho 28 em học sinh nghèo hiếu học vượt khó.",
      excerptEn: "Official decree endorsing school fee and living allowance stipends to 28 scholastic children from low-income families.",
      imageType: "table-list-2"
    },
    {
      id: 8,
      titleVi: "BUỔI GẶP MẶT MÙA HÈ CỦA QUỸ CÙNG CÁC TRẺ BẢO TRỢ",
      titleEn: "SUMMER MEETUP WITH SPONSORED STUDENTS",
      tagVi: "Sự kiện",
      tagEn: "Event",
      dateVi: "21 tháng 6, 2025",
      dateEn: "June 21, 2025",
      excerptVi: "Họp mặt hè khu vực phía Nam để sinh hoạt kỹ năng mềm, truyền cảm hứng và chia sẻ khó khăn với ban điều hành cùng các Mentor đồng hành.",
      excerptEn: "Southern summer camp focusing on soft-skills development, peer support, and open exchanges with strategic Mentors.",
      imageType: "placeholder"
    },
    {
      id: 9,
      titleVi: "THÔNG TIN ĐỢT XÉT DUYỆT 16",
      titleEn: "ROUND 16 SPONSORSHIP DRIVE DETAILS",
      tagVi: "Thông báo",
      tagEn: "Announcement",
      dateVi: "18 tháng 5, 2025",
      dateEn: "May 18, 2025",
      excerptVi: "Cập nhật các mốc thời gian quan trọng, hướng dẫn hồ sơ xin học bổng và quy tắc xét duyệt minh bạch đợt 16.",
      excerptEn: "Latest milestones timeline, application requirements, and transparency regulations for our Round 16 drive.",
      imageType: "round-16"
    },
    {
      id: 10,
      titleVi: "BUỔI SINH HOẠT TRẺ HÀ NAM",
      titleEn: "STUDENT CONVOCATION IN HA NAM",
      tagVi: "Hoạt động",
      tagEn: "Activity",
      dateVi: "10 tháng 5, 2025",
      dateEn: "May 10, 2025",
      excerptVi: "Sinh hoạt chuyên đề cùng các học sinh tại Hà Nam nhằm nâng cao tinh thần tự lực vượt khó, rèn luyện kỹ năng thực chiến.",
      excerptEn: "Local seminar with sponsored students in Ha Nam to foster self-reliance and build practical application skills.",
      imageType: "hanam"
    }
  ];

  const filteredPosts = posts.filter((post) => {
    const title = lang === "vi" ? post.titleVi : post.titleEn;
    const excerpt = lang === "vi" ? post.excerptVi : post.excerptEn;
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedCategory === "all") {
      return matchesSearch;
    }

    // Map selectedCategory to tagEn
    const categoryMap: { [key: string]: string } = {
      announcement: "Announcement",
      recruitment: "Recruitment",
      list: "Student List",
      event: "Event",
      activity: "Activity",
    };

    const targetTag = categoryMap[selectedCategory];
    const matchesCategory = post.tagEn === targetTag;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 text-slate-400 bg-white border border-slate-100 rounded-3xl p-8 max-w-lg mx-auto shadow-sm">
          <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
          <span className="text-sm font-bold text-slate-500 block">
            {lang === "vi" ? "Không tìm thấy bài viết nào phù hợp." : "No matching posts found."}
          </span>
          <span className="text-xs text-slate-400 mt-1 block">
            {lang === "vi" ? "Thử thay đổi từ khóa hoặc bộ lọc của bạn." : "Try changing your keywords or filters."}
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Latest/First post rendered as Featured (full-width banner) */}
          <JournalCard post={filteredPosts[0]} lang={lang} isFeatured={true} />
          
          {/* Remaining posts in 2-column layout */}
          {filteredPosts.slice(1).map((post) => (
            <JournalCard key={post.id} post={post} lang={lang} isFeatured={false} />
          ))}
        </div>
      )}
    </section>
  );
}
