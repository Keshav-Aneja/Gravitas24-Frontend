"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/constants/routes";
import ProfileBox from "@/sections/auth/ProfileBox";
import { useGlobalContext } from "@/context/GlobalContext";
import { toast } from "@/hooks/use-toast";

function SignupCallback() {
  const params = useSearchParams();
  const token = params.get("token");
  const isVIT = params.get("isVIT");
  const router = useRouter();
  const { setIsLoggedin } = useGlobalContext();

  const handleSignUp = async (phoneNumber: number) => {
    if (!token || !phoneNumber || !isVIT) {
      return;
    }
    const url = JSON.parse(isVIT)
      ? `${BACKEND_URL}/auth/vit/signup`
      : `${BACKEND_URL}/auth/common/signup`;
    try {
      const response = await axios.post(
        url,
        {
          phoneNumber: phoneNumber.toString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const access_token = response.data.token;
      const refesh_token = response.data.refresh_token;
      Cookie.set("access_token", access_token);
      Cookie.set("refresh_token", refesh_token);
      setIsLoggedin(true);
      router.push("/");
    } catch (err: any) {
      if (err.response.data.message) {
        toast({
          title: "Error",
          description: err.response.data.message,
          variant: "destructive",
        });
      }
    }
  };
  return <ProfileBox handleSignup={handleSignUp} />;
}

export default function SignupCallbackWrapper() {
  return (
    <Suspense>
      <SignupCallback />
    </Suspense>
  );
}
