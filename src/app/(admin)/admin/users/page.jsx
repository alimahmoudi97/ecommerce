import Table from "@/components/Table";
import UserTableRow from "./UserTableRow";

function page() {
  return (
    <div>
      <h1 className="text-3xl mb-4">اطلاعات کاربران</h1>
      <div>
        <Table>
          <Table.Header>
            <th>#</th>
            <th>نام </th>
            <th>ایمیل</th>
            <th>شماره موبایل</th>
            <th>تاریخ پیوستن</th>
            <th>وضعیت</th>
            <th>مشاهده</th>
          </Table.Header>
          <Table.Body>
            <UserTableRow />
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default page;
