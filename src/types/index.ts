// Shared types used across multiple components

export type Language = "vi" | "en";

export interface Post {
  id: number;
  titleVi: string;
  titleEn: string;
  tagVi: string;
  tagEn: string;
  dateVi: string;
  dateEn: string;
  excerptVi: string;
  excerptEn: string;
  contentVi?: string;
  contentEn?: string;
  imageType:
    | "placeholder"
    | "vietnam-map"
    | "table-list-1"
    | "table-list-2"
    | "daklak"
    | "round-16"
    | "hanam";
}

export interface Student {
  id: string;
  name: string;
  birthYear: number;
  gender: "Nam" | "Nữ";
  province: string;
  university: string;
  gpa: string;
  status: "Đang nhận bảo trợ" | "Hoàn thành bảo trợ" | "Chấm dứt bảo trợ";
}

export interface Report {
  month: number;
  year: number;
  category: "Thu chi" | "Hoạt động" | "Khác";
  totalIncome: string;
  totalExpense: string;
  onlineAccount: string;
  cashAccount: string;
  closingBalance: string;
  incomeDescVi: string;
  incomeDescEn: string;
  expenseDescVi: string;
  expenseDescEn: string;
}
