"use client";

import Loading from "@/components/Loading";
import Table from "@/components/Table";
import { useUser } from "@/hooks/useUser";
import {
  toPersianNumbersWithComma,
  toPersianNumbers,
} from "@/utils/toPersianNumbers";
import Stats from "./Stats";

function ProfilePage() {
  const { profile, isLoading } = useUser();

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl">
        <span className="text-primary-900 mx-2">{profile.user.name}</span>
        <span>خوش آمدید</span>
      </h1>
      <Stats />
    </div>
  );
}
export default ProfilePage;
