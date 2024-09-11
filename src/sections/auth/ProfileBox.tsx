"use client";
import { EVENT_PAGE } from "@/constants/routes";
import React, { useState } from "react";
import Button from "@/components/common/Button";

const ProfileBox = ({
  handleSignup,
  external,
}: {
  handleSignup?: any;
  external?: boolean;
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleConditionsToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 md:gap-8">
      <p className="text-xl text-center md:text-3xl font-auxMono text-black">
        Enter your contact number
      </p>
      <div className="flex flex-row gap-4 w-[90%] md:w-[50%]">
        <select
          id="country code"
          className="w-fit p-2 border border-gray-300  font-aldrich py-2 px-4 md:px-6 rounded-none text-xs md:text-sm"
        >
          <option defaultChecked value={"+91"}>
            &#x1f1ee;&#x1f1f3; +91
          </option>
        </select>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="w-full p-2 border border-gray-300  font-aldrich py-2 px-4 md:px-6 rounded-none text-xs md:text-sm"
        />
      </div>

      {external && (
        <div className="flex flex-row gap-2">
          <input
            type="checkbox"
            id="terms&conditions"
            onChange={handleConditionsToggle}
          />
          <label htmlFor="terms&conditions">I confirm that I am a college or university student. I understand that if I am not, and I purchase an event, I will not be eligible for a refund {external || false}</label>
        </div>
      )}
      {external ? (
        <Button
          className="z-0 --event-button"
          disabled={!isChecked}
          onClick={() => handleSignup(phoneNumber, true)}
          title={isChecked ? "" : "Please agree to the terms and conditions"}
        >
          <span>SUBMIT</span>
        </Button>
      ) : (
        <Button
          className="z-0 --event-button"
          onClick={() => handleSignup(phoneNumber)}
        >
          <span>SUBMIT</span>
        </Button>
      )}
    </div>
  );
};

export default ProfileBox;
