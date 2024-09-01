"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Cookie from "js-cookie";
import axiosInstance from "@/config/axios";
import axios from "axios";

function LoginCallback() {
  const params = useSearchParams();
  const router = useRouter();
  const redirect_token = params.get("token");

  useEffect(() => {
    const getAuthTokens = async () => {
      if (redirect_token) {
        const response = await axios.get(
          "http://localhost:8000/auth/vit/login",
          {
            headers: {
              Authorization: `Bearer ${redirect_token}`,
            },
          }
        );
        const access_token = response.data.token;
        const refesh_token = response.data.refresh_token;
        Cookie.set("access_token", access_token);
        Cookie.set("refresh_token", refesh_token);
        router.push("/");
      }
    };
    getAuthTokens();
  }, [redirect_token, router]);

  return (
    <main className="bg-base w-full pb-6">
      {Array.from(params.entries()).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      You are being redirected..
    </main>
  );
}

export default function LoginCallbackWrapper() {
  return (
    <Suspense>
      <LoginCallback />
    </Suspense>
  );
}
