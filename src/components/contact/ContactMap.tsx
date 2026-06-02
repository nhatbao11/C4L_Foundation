"use client";

import React from "react";

export default function ContactMap() {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-2 overflow-hidden w-full min-h-[500px] lg:min-h-[600px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7876008779953!2d106.70678627583877!3d10.827556758253102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b3cd1f1c7d%3A0x6331a91e5d774fcf!2zNTk1LzYvMjEgUUwxMywgSGnhu4dwIELDrG5oIFBoxrDhu5tjLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1717248479590!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="C4L Office Map Location"
        className="rounded-2xl w-full h-full min-h-[500px] lg:min-h-[600px]"
      ></iframe>
    </div>
  );
}
