"use client";

import { useState } from "react";
import GetOtp from "./GetOtp";
import SendOtp from "./SendOtp";

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
    <div className="w-full lg:max-w-[30rem] mx-auto p-8 border rounded-xl shadow-md">
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
