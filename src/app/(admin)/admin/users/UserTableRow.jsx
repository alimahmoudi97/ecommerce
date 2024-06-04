"use client";

import Table from "@/components/Table";
import { useUser } from "@/hooks/useUser";

function UserTableRow({ user, index }) {
  //   console.log("user profile:", user.profile.user);
  return (
    <Table.Row>
      <td className="table__td">{index + 1}</td>
      <td className="table__td whitespace-nowrap">{user.name} </td>
      <td className="table__td font-bold">{user.email}</td>
      <td className="table__td">{user.phoneNumber}</td>
      <td className="table__td">
        {new Date(user.createdAt).toLocaleDateString("fa-IR")}
      </td>
      <td className="table__td">
        {user.isActive === true ? (
          <span className="badge badge--success">فعال</span>
        ) : (
          <span className="badge badge--error">غیرفعال</span>
        )}
      </td>
      <td className="table__td">جزئیات</td>
    </Table.Row>
  );
}
export default UserTableRow;
