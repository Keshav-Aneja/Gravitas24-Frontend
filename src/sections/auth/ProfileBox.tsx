"use client";
import { EVENT_PAGE } from "@/constants/routes";
import React, { useState } from "react";
import Button from "@/components/common/Button";

const ProfileBox = ({ handleSignup }: { handleSignup?: any }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 md:gap-8">
      <p className="text-xl text-center md:text-3xl font-auxMono text-black">
        Enter your contact number
      </p>
      <input
        type="number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className="w-[90%] md:w-[50%] p-2 border border-gray-300  font-aldrich py-2 px-4 md:px-6 rounded-none text-xs md:text-sm"
      />
      <Button
        className="z-0 --event-button"
        onClick={() => handleSignup(phoneNumber)}
      >
        <span>SUBMIT</span>
      </Button>
    </div>
  );
};

export default ProfileBox;
