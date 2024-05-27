"use client";

import TextField from "@/components/TextField";
import { completeProfile } from "@/services/authService";
import { useState } from "react";

function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
    });
    completeProfile({ name, email });
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
