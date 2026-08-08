import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyHero from "@/components/students/ApplyHero";
import StudentStats from "@/components/students/StudentStats";
import StudentTable from "@/components/students/StudentTable";

export default function Apply() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      <ApplyHero />

      <StudentStats />

      <StudentTable />

      <Footer />
    </div>
  );
}
