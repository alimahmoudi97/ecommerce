"use client";

import Table from "@/components/Table";
import { useUser } from "@/hooks/useUser";
import { getUserProfile } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function ProfilePage() {
  const { user, isLoading } = useUser();

  const handleClick = () => {
    console.log(user);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1 className="text-2xl font-bold">سلام ! خوش آمدید!</h1>
      <span className="text-xl">تاریخ پیوستن</span>
      {/* Table sections */}

      <Table>
        <Table.Header>
          <th>#</th>
          <th>شماره فاکتور</th>
          <th>توضیحات</th>
          <th>محصولات</th>
          <th>مبلغ</th>
          <th>تاریخ</th>
          <th>وضعیت</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>1</td>
            <td> 1548651548</td>
            <td>خرید PS5</td>
            <td>PS5</td>
            <td>5/000/000</td>
            <td>1403/02/15</td>
            <td>موفق</td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td> 1548651548</td>
            <td>خرید PS5</td>
            <td>PS5</td>
            <td>5/000/000</td>
            <td>1403/02/15</td>
            <td>موفق</td>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}
export default ProfilePage;
