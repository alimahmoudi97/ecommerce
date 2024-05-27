import { useState } from "react";
import OtpInput from "react-otp-input";
import { CiEdit } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { checkOtp } from "@/services/authService";
import { useRouter } from "next/navigation";

function SendOtp({ onStep, phoneNumber, setPhoneNumber }) {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await checkOtp({
      phoneNumber,
      otp,
    });
    if (!user.isActive) router.push("/complete-profile");
    console.log("user:", user);
  };

  const handleOtp = (code) => {
    setOtp(code);
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <BsArrowRight
        className="text-secondary-600 cursor-pointer"
        size={30}
        onClick={() => onStep(0)}
      />
      <div className="flex flex-col gap-4">
        <div className="flex">
          <p className="text-3xl">
            <span>کد تائید برای شماره موبایل</span>
            <span className="text-secondary-600 mx-2">{phoneNumber}</span>
            <span>ارسال گردید</span>
          </p>
          <CiEdit
            className="text-primary-900 text-5xl cursor-pointer"
            onClick={() => onStep(0)}
          />
        </div>
        <span className="text-secondary-700 text-2xl cursor-pointer">
          ارسال مجدد کد؟
        </span>
        <span className="text-2xl font-black">کد تائید راوارد کنید</span>
      </div>
      <OtpInput
        value={otp}
        onChange={handleOtp}
        numInputs={6}
        renderSeparator={<span className="text-3xl">-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex flex-row-reverse justify-center gap-3 mt-8"
        inputStyle={{
          width: "4.5rem",
          padding: "1.2rem 0.6rem",
          border: "1px solid rgb(var(--color-primary-400))",
          borderRadius: "0.8rem",
          margin: "0px",
          fontSize: "1.5rem",
        }}
      />
      <button type="submit" className="btn btn--primary">
        تایید
      </button>
    </form>
  );
}
export default SendOtp;
