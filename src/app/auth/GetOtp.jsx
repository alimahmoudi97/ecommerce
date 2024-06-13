"use client";

import TextField from "@/components/TextField";
import { getOtp } from "@/services/authService";

function GetOtp({ onStep, phoneNumber, setPhoneNumber }) {
  // const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onStep(1);
    getOtp(phoneNumber);
  };
  return (
    <form className="flex flex-col mx-auto" onSubmit={handleSubmit}>
      <h2 className="mb-4 font-bold">ورود | ثبت نام</h2>
      <span>سلام !</span>
      <span className="mb-4">لطفا شماره تلفن خود را وارد کنید</span>
      <TextField
        name="phoneNumber"
        lable="شماره تلفن"
        value={phoneNumber}
        onChange={handlePhoneNumber}
      />
      <button className="btn btn--primary bg-red-600" onClick={handleSubmit}>
        ارسال کد تایید
      </button>
    </form>
  );
}
export default GetOtp;
