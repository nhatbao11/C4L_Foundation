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
  const baseStyle = "inline-flex items-center justify-center text-center font-bold uppercase transition-all duration-300 tracking-wider relative overflow-hidden group select-none";

  const variants = {
    primary: "px-8 py-4 rounded-full bg-[#15803D] text-white text-xs shadow-md hover:shadow-[0_8px_24px_rgba(21,128,61,0.25)] hover:scale-[1.03] active:scale-[0.97] border border-[#15803D]",
    outline: "px-8 py-4 rounded-full bg-white border border-[#15803D] text-[#15803D] hover:bg-[#15803D] hover:text-white text-xs shadow-sm hover:shadow-[0_8px_24px_rgba(21,128,61,0.2)] hover:scale-[1.03] active:scale-[0.97]",
    pill: "px-8 py-3.5 rounded-full bg-[#15803D] text-white text-xs shadow-md hover:shadow-[0_8px_24px_rgba(21,128,61,0.25)] hover:scale-[1.03] active:scale-[0.97] border border-[#15803D]",
    text: "text-xs text-[#15803D] hover:underline self-start p-0 shadow-none hover:scale-100",
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  const renderContent = () => (
    <>
      {/* Button Text wrapped to sit above glare effect */}
      <span className="relative z-10 flex items-center justify-center gap-1.5">{children}</span>
      
      {/* Glare/Shimmer reflection effect for primary/pill buttons */}
      {(variant === "primary" || variant === "pill") && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-0"></span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {renderContent()}
    </button>
  );
}
