"use client";

import Table from "@/components/Table";
import { useUser } from "@/hooks/useUser";

function UserTableRow() {
  const user = useUser();

  const userInfo = user.profile.user;

  //   console.log("user profile:", user.profile.user);
  return (
    <Table.Row>
      <td>0</td>
      <td>{userInfo.name} </td>
      <td>{userInfo.email}</td>
      <td>{userInfo.phoneNumber}</td>
      <td>{new Date(userInfo.createdAt).toLocaleDateString("fa-IR")}</td>
      <td>{userInfo.isActive === true ? "فعال" : "غیرفعال"}</td>
      <td>جزئیات</td>
    </Table.Row>
  );
}
export default UserTableRow;
