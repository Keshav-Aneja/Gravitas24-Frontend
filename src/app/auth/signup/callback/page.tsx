"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/constants/routes";
import ProfileBox from "@/sections/auth/ProfileBox";

function SignupCallback() {
  const params = useSearchParams();
  const token = params.get("token");
  const router = useRouter();

  const handleSignUp = async (phoneNumber: number) => {
    const response = await axios.post(
      `${BACKEND_URL}/auth/vit/signup`,
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
    router.push("/");
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
