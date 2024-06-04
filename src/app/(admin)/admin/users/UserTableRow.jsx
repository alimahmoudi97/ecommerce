"use client";

import Table from "@/components/Table";
import { useUser } from "@/hooks/useUser";

function UserTableRow() {
  const user = useUser();

  const userInfo = user.profile.user;

  //   console.log("user profile:", user.profile.user);
  return (
    <Table.Row>
      <td className="table__td">0</td>
      <td className="table__td">{userInfo.name} </td>
      <td className="table__td font-bold">{userInfo.email}</td>
      <td className="table__td">{userInfo.phoneNumber}</td>
      <td className="table__td">
        {new Date(userInfo.createdAt).toLocaleDateString("fa-IR")}
      </td>
      <td className="table__td">
        {userInfo.isActive === true ? (
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
