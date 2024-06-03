"use client";

import Loading from "@/components/Loading";
import Table from "@/components/Table";
import { useGetAllPayment } from "@/hooks/usePayment";
import { useUser } from "@/hooks/useUser";
import {
  toPersianNumbersWithComma,
  toPersianNumbers,
} from "@/utils/toPersianNumbers";

function ProfilePage() {
  const { profile, isLoading } = useUser();

  const { data, isLoading: loadingPayments } = useGetAllPayment();

  const handleClick = () => {
    // console.log(profile);
  };

  if (isLoading || loadingPayments) return <Loading />;

  return (
    <div>
      <h1 className="text-2xl font-bold">
        <span className="text-lg text-primary-700 mx-2">
          {profile.user.name}
        </span>
        خوش آمدید!
      </h1>
      <span className="text-xl">
        تاریخ پیوستن:
        {new Date(profile.user.createdAt).toLocaleDateString("fa-IR")}
      </span>
      <button className="btn btn--primary" onClick={handleClick}>
        get User
      </button>

      <div className="max-h-dvh overflow-y-scroll">
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
            {data.payments.map((item, index) => {
              return (
                <Table.Row key={item._id}>
                  <td>{index}</td>
                  <td> {toPersianNumbers(item.invoiceNumber)}</td>
                  <td>{item.description}</td>
                  <td>
                    {item.cart.productDetail.map((product) => {
                      return <span key={product._id}>{product.title}</span>;
                    })}
                  </td>
                  <td>{toPersianNumbersWithComma(item.amount)}</td>
                  <td>
                    {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="success">{item.status}</td>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default ProfilePage;
