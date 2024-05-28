"use client";

import TextField from "@/components/TextField";
import { completeProfile } from "@/services/authService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationKey: ["user"],
    mutationFn: completeProfile,
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/");
    },
    onError: (err) => toast.error(err.response.data.message),
  });

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
