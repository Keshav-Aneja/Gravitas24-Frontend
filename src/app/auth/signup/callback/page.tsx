"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

function SignupCallback() {
  const params = useSearchParams();
  const token = params.get("token");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  // useEffect(() => {}, [token]);
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleSignUp = async () => {
    const response = await axios.post(
      "http://localhost:8000/auth/vit/signup",
      {
        phoneNumber,
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
  return (
    <main className="bg-base w-full pb-6">
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button onClick={handleSignUp}>Sign up finally</button>
    </main>
  );
}

export default function SignupCallbackWrapper() {
  return (
    <Suspense>
      <SignupCallback />
    </Suspense>
  );
}
