"use client";
import { EVENT_PAGE } from "@/constants/routes";
import React, { useState } from "react";
import Button from "@/components/common/Button";

const ProfileBox = ({ handleSignup }: { handleSignup: any }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <p className="text-3xl font-auxMono">Enter your contact number</p>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        className=" w-[50%] p-2 border border-gray-300  font-aldrich py-2 px-6 rounded-none"
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
