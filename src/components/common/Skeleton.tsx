import { ReactNode } from "react";

export default function Skeleton({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200 animate-pulse rounded-md">
      <div className="opacity-0">{children}</div>
    </div>
  );
}
