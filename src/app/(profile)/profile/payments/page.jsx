"use client";

import Loading from "@/components/Loading";
import Table from "@/components/Table";
import { useUser } from "@/hooks/useUser";
import { persianDate } from "@/utils/persianDate";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";

function PaymentsPage() {
  const { profile, isLoading } = useUser();

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1 className=" text-2xl font-bold">
        <span className="text-lg text-primary-700 mx-2">
          {profile.user.name}
        </span>
        خوش آمدید!
      </h1>
      <span className="text-xl">
        تاریخ پیوستن:
        {persianDate(profile.user.createdAt)}
      </span>

      <div className="shadow-sm overflow-auto">
        <Table>
          <Table.Header>
            <th className="table__th">#</th>
            <th className="table__th">شماره فاکتور</th>
            <th className="table__th">توضیحات</th>
            <th className="table__th">محصولات</th>
            <th className="table__th">مبلغ</th>
            <th className="table__th">تاریخ</th>
            <th className="table__th">وضعیت</th>
          </Table.Header>
          <Table.Body>
            {profile.payments.map((item, index) => {
              return (
                <Table.Row key={item._id}>
                  <td className="table__td">{index + 1}</td>
                  <td className="table__td">
                    {toPersianNumbers(item.invoiceNumber)}
                  </td>
                  <td className="table__td truncate max-w-72">
                    {item.description}
                  </td>
                  <td className="table__td">
                    <div className="flex flex-col gap-y-2 items-start">
                      {item.cart.productDetail.map((product) => {
                        return (
                          <span
                            key={product._id}
                            className="badge badge--secondary"
                          >
                            {product.title}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                  <td className="table__td font-bold text-lg">
                    {toPersianNumbersWithComma(item.amount)}
                  </td>
                  <td className="table__td">
                    {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="table__td">
                    {item.status === "COMPLETED" ? (
                      <span className="badge badge--success">موفق</span>
                    ) : (
                      <span className="badge badge--error">ناموفق</span>
                    )}
                  </td>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default PaymentsPage;
