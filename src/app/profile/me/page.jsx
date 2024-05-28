"use client";

import TextField from "@/components/TextField";
import { updateUserProfile } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

function PageInfoProfile() {
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      toast.success("پروفایل با موفقیعت آپدیدت شد!");
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ name, email, biography, phoneNumber });
    const user = await mutateAsync({ name, biography, email, phoneNumber });
  };
  return (
    <div className="container md:max-w-md">
      <h2 className="text-3xl font-bold mb-4">اطلاعات کاربری</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          lable="نام و نام خانوادگی"
          name="name"
          value={name}
          handler={setName}
        />
        <TextField
          lable="بیوگرافی"
          name="biography"
          value={biography}
          handler={setBiography}
        />
        <TextField
          lable="شماره تلفن"
          name="phoneNumber"
          value={phoneNumber}
          handler={setPhoneNumber}
        />
        <TextField
          lable="ایمیل"
          name="email"
          value={email}
          handler={setEmail}
        />
        <button type="submit" className="btn btn--primary">
          ذخیره
        </button>
      </form>
    </div>
  );
}
export default PageInfoProfile;
