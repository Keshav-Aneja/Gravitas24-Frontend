import { BACKEND_URL } from "@/constants/routes";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-base w-full pb-6">
      <Link href={`${BACKEND_URL}/auth/vit/google`}>
        Sign in with VIT Google
      </Link>
    </main>
  );
}
