import Table from "@/components/Table";
import UserTableRow from "./UserTableRow";

function page() {
  return (
    <div>
      <h1 className="text-3xl mb-4">اطلاعات کاربران</h1>
      <div>
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
            <UserTableRow />
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default page;
