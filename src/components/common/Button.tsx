import { cn } from "@/lib/utils";
import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};
const Button = ({ children, className, type = "button" }: Props) => {
  return (
    <button
      type={type}
      className={cn(
        "px-4 py-2 bg-primary hover:bg-[#ff7438] transition-all duration-100 ease-linear text-white font-auxMono relative",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
