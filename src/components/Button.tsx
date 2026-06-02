import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "pill" | "text";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  className = "",
  children,
  type = "button",
}: ButtonProps) {
  const baseStyle = "inline-block text-center font-bold uppercase transition-all duration-300 tracking-wider";

  const variants = {
    primary: "px-8 py-4 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs shadow-md hover:scale-[1.02] active:scale-[0.98]",
    outline: "px-8 py-4 rounded-xl bg-white border border-[#15803D] text-[#15803D] hover:bg-slate-50 text-xs shadow-sm hover:scale-[1.02] active:scale-[0.98]",
    pill: "px-8 py-3.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-xs shadow-md hover:scale-[1.03] active:scale-[0.98]",
    text: "text-xs text-[#15803D] hover:underline self-start p-0 shadow-none hover:scale-100",
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
