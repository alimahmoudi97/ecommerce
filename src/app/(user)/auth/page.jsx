"use client";

import GetOtp from "@/app/auth/GetOtp";
import SendOtp from "@/app/auth/SendOtp";
import { useState } from "react";

function AuthPage() {
  const [step, setStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleStep = (step) => {
    setStep(step);
  };

  const handlePhoneNumber = (data) => {
    setPhoneNumber(data);
  };

  return (
    <div className="w-full md:max-w-[30rem] mx-auto">
      {step == 0 ? (
        <GetOtp
          onStep={handleStep}
          phoneNumber={phoneNumber}
          setPhoneNumber={handlePhoneNumber}
        />
      ) : (
        <SendOtp
          onStep={handleStep}
          phoneNumber={phoneNumber}
          setPhoneNumber={handlePhoneNumber}
        />
      )}
    </div>
  );
}
export default AuthPage;