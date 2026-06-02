"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface NewsCardProps {
  image: string;
  tag: string;
  title: string;
  excerpt: string;
  href: string;
  actionText: string;
}

export default function NewsCard({ image, tag, title, excerpt, href, actionText }: NewsCardProps) {
  return (
    <Link
      href={href}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100/80 transition-all duration-300 flex flex-col h-full group"
    >
      {/* Card Image Wrapper */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100" style={{ position: "relative" }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Soft dark overlay on top for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
        {/* Floating Tag over image */}
        <span className="absolute top-4 left-4 text-[9px] font-black tracking-widest text-emerald-800 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm uppercase font-mono">
          {tag}
        </span>
      </div>

      {/* Card Content Wrapper */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-display font-extrabold text-base md:text-lg text-slate-900 leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-3 line-clamp-2 font-normal">
            {excerpt}
          </p>
        </div>

        {/* Read More link */}
        <div className="flex items-center text-xs font-black text-emerald-700 font-mono mt-6 uppercase tracking-wider group-hover:text-emerald-600 transition-colors">
          <span>{actionText}</span>
        </div>
      </div>
    </Link>
  );
}
