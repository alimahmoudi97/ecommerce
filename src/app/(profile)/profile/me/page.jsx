"use client";

import TextField from "@/components/TextField";
import { useUpdateProfile } from "@/hooks/useUser";
import { useState } from "react";

function PageInfoProfile() {
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const { mutateAsync } = useUpdateProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutateAsync({ name, biography, email, phoneNumber });
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
