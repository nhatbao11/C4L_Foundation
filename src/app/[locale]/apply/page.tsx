import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyHero from "@/components/apply/ApplyHero";
import StudentStats from "@/components/apply/StudentStats";
import StudentTable from "@/components/apply/StudentTable";
import RecruitmentFormSection from "@/components/apply/RecruitmentFormSection";

export default function Apply() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      <ApplyHero />

      <StudentStats />

      <StudentTable />

      <RecruitmentFormSection />

      <Footer />
    </div>
  );
}
