import Link from "next/link";
export default function Auth() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <p className="text-2xl md:text-3xl font-auxMono text-center">
        Select Your Affiliation
      </p>
      <div className="flex flex-col items-center gap-2 w-full">
        <Link
          href={"/auth/internal"}
          className=" font-auxMono text-sm md:text-[1rem] px-6 py-2 w-[80%] text-center md:w-[70%] bg-primary text-white hover:bg-[#eb4b01]"
        >
          VIT Vellore Student
        </Link>{" "}
        <Link
          href={"/auth/external"}
          className=" font-auxMono text-sm md:text-[1rem] px-6 py-2 w-[80%] text-center md:w-[70%] bg-white text-primary border-[1px] border-primary hover:bg-primary hover:text-white"
        >
          External Student
        </Link>
      </div>
    </div>
  );
}
