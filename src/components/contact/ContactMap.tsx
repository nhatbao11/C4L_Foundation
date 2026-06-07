"use client";

import React from "react";

export default function ContactMap() {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-2 overflow-hidden w-full h-full min-h-[400px] lg:min-h-0 flex flex-col relative">
      <iframe
        src="https://maps.google.com/maps?q=10.827557,106.706786(585/6/21%20Qu%E1%BB%91c%20L%E1%BB%99%2013)&hl=vi&z=17&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Co 4 La Office Map Location"
        className="rounded-2xl w-full flex-1 h-full min-h-[380px] lg:min-h-0"
      ></iframe>
    </div>
  );
}
