"use client";

import Table from "@/components/Table";
import UserTableRow from "./UserTableRow";
import { useUsers } from "@/hooks/useUser";
import Loading from "@/components/Loading";

function UsersPage() {
  const { data, isLoading } = useUsers();

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="text-3xl mb-4">اطلاعات کاربران</h1>
      <div className="overflow-auto">
        <Table>
          <Table.Header>
            <th className="table__th">#</th>
            <th className="table__th">نام </th>
            <th className="table__th">ایمیل</th>
            <th className="table__th">شماره موبایل</th>
            <th className="table__th">تاریخ پیوستن</th>
            <th className="table__th">وضعیت</th>
            <th className="table__th">مشاهده</th>
          </Table.Header>
          <Table.Body>
            {data.users.map((user, index) => (
              <UserTableRow key={user._id} user={user} index={index} />
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default UsersPage;
