import { useState } from "react";
import OtpInput from "react-otp-input";
import { CiEdit } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { checkOtp } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function SendOtp({ onStep, phoneNumber, setPhoneNumber }) {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const { mutateAsync } = useMutation({
    mutationFn: checkOtp,
    onSuccess: (data) => {
      toast.success(data.message);
      // console.log(data);
    },
    onError: (err) => toast.error(err.response.data.message),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await mutateAsync({
      phoneNumber,
      otp,
    });
    if (!user.isActive) router.push("/complete-profile");
    else router.push("/");
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
        <div className="flex items-center">
          <p className="text-base">
            کد تائید برای شماره موبایل
            <span className="text-secondary-600 mx-2">{phoneNumber}</span>
            ارسال گردید
          </p>
          <CiEdit
            className="text-primary-900 w-9 h-9 cursor-pointer"
            onClick={() => onStep(0)}
          />
        </div>
        <span className="text-secondary-700 text-base cursor-pointer">
          ارسال مجدد کد؟
        </span>
        <span className="text-base font-black">کد تائید راوارد کنید</span>
      </div>
      <OtpInput
        value={otp}
        onChange={handleOtp}
        numInputs={6}
        renderSeparator={<span className="text-xl">-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="otp--container"
        inputStyle="otp--input"
      />
      <button type="submit" className="btn btn--primary bg-red-600">
        تایید
      </button>
    </form>
  );
}
export default SendOtp;

{
  /* <OtpInput
value={otp}
onChange={handleOtp}
numInputs={6}
renderSeparator={<span className="text-xl">-</span>}
renderInput={(props) => <input {...props} />}
containerStyle="flex flex-row-reverse justify-center gap-1 mt-8"
inputStyle={{
  padding: "0.5rem 1rem",
  border: "1px solid rgb(var(--color-primary-400))",
  borderRadius: "0.8rem",
  margin: "0px",
  fontSize: "1rem",
}}
/> */
}
