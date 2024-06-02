"use client";

import TextField from "@/components/TextField";
import { useCompleteProfile } from "@/hooks/useUser";
import { useState } from "react";

function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { mutateAsync } = useCompleteProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await mutateAsync({ name, email });
  };

  return (
    <div className="w-full md:max-w-[40rem] mx-auto">
      <form onSubmit={handleSubmit}>
        <TextField name="name" lable="نام و نام خانوادگی" handler={setName} />
        <TextField name="email" lable="ایمیل" handler={setEmail} />
        <button className="btn btn--primary">ارسال کد تایید</button>
      </form>
    </div>
  );
}
export default CompleteProfile;
