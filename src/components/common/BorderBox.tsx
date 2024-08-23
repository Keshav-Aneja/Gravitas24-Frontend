import { cn } from "@/lib/utils";
import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
};
const BorderBox = ({ children, className }: Props) => {
  return (
    <div className={cn("border-[1px] border-outline p-2 relative", className)}>
      {children}
      <span className="w-[6px] h-[6px] bg-outline absolute -top-[3px] -right-[3px]"></span>
      <span className="w-[6px] h-[6px] bg-outline absolute -top-[3px] -left-[3px]"></span>
      <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -right-[3px]"></span>
      <span className="w-[6px] h-[6px] bg-outline absolute -bottom-[3px] -left-[3px]"></span>
    </div>
  );
};

export default BorderBox;
