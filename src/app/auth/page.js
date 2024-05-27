"use client";

import GetOtp from "@/components/GetOtp";
import SendOtp from "@/components/SendOtp";
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
    <div className="w-full md:max-w-[40rem] mx-auto">
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
