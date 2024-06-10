"use client";

import Loading from "@/components/Loading";
import TextField from "@/components/TextField";
import { useCompleteProfile } from "@/hooks/useUser";
import { useState } from "react";

function CompleteProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });
  const { isPending, mutateAsync } = useCompleteProfile();

  const handleProfile = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await mutateAsync(profile);
    // console.log(profile);
  };

  if (isPending) return <Loading />;

  return (
    <div className="w-full md:max-w-[40rem] mx-auto">
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          lable="نام و نام خانوادگی"
          onChange={handleProfile}
        />
        <TextField name="email" lable="ایمیل" onChange={handleProfile} />
        <button className="btn btn--primary"> تایید</button>
      </form>
    </div>
  );
}
export default CompleteProfile;
