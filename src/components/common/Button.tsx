import { cn } from "@/lib/utils";
import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: any;
  disabled?: boolean;
  title?: string;
};
const Button = ({
  children,
  className,
  type = "button",
  onClick,
  disabled,
  title,
}: Props) => {
  return (
    <button
      type={type}
      className={cn(
        "px-4 py-2 bg-primary transition-all duration-100 ease-linear text-white font-auxMono relative",
        className,
        !disabled && "hover:bg-[#ff7438]"
      )}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
