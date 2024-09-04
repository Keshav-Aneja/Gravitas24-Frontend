"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Cookie from "js-cookie";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { BACKEND_URL } from "@/constants/routes";
import { useGlobalContext } from "@/context/GlobalContext";

function LoginCallback() {
  const params = useSearchParams();
  const router = useRouter();
  const redirect_token = params.get("token");
  const { setIsLoggedin } = useGlobalContext();

  useEffect(() => {
    const getAuthTokens = async () => {
      if (redirect_token) {
        try {
          const response = await axios.get(`${BACKEND_URL}/auth/vit/login`, {
            headers: {
              Authorization: `Bearer ${redirect_token}`,
            },
          });
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
      }
    };
    getAuthTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirect_token, router]);

  return (
    <main className="bg-base w-full pb-6 flex items-center justify-center h-[70vh] text-xl font-auxMono">
      {/* {Array.from(params.entries()).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))} */}
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
