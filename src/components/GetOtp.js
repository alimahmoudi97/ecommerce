import { getOtp } from "@/services/authService";
import TextField from "./TextField";
import { useState } from "react";

function GetOtp({ onStep, phoneNumber, setPhoneNumber }) {
  // const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onStep(1);
    getOtp(phoneNumber);
  };
  return (
    <form className="mx-auto" onSubmit={handleSubmit}>
      <TextField
        name="phoneNumber"
        lable="شماره تلفن"
        value={phoneNumber}
        handler={setPhoneNumber}
      />
      <button className="btn btn--primary" onClick={handleSubmit}>
        ارسال کد تایید
      </button>
    </form>
  );
}
export default GetOtp;
