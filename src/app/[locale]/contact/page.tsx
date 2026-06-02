import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden pt-0">
      <Navbar />

      <ContactHero />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7 h-full">
            <ContactMap />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
