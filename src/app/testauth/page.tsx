import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-base w-full pb-6">
      <Link href="http://localhost:8000/auth/vit/google"> 
        Sign in with VIT Google
      </Link>
    </main>
  );
}
