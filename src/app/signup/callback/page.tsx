'use client'

import { useSearchParams } from "next/navigation";

export default function Home() {
  const params = useSearchParams();
  return (
    <main className="bg-base w-full pb-6">
      {Array.from(params.entries()).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </main>
  );
}