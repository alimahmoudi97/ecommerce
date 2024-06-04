"use client";

import Table from "@/components/Table";
import CouponTableRow from "./CouponTableRow";
import { useCategory } from "@/hooks/useCategory";
import Loading from "@/components/Loading";
import { useGetCoupons } from "@/hooks/useCoupon";
import Link from "next/link";

function CouponsPage() {
  const { data, isLoading } = useGetCoupons();

  if (!data) return <Loading />;

  return (
    <div>
      <header className="flex justify-between">
        <h1 className="text-3xl mb-4"> کد تخفیف</h1>
        <span className="text-primary-900 text-xl mb-4">
          <Link href="coupons/add">افزودن کد تخفیف جدید</Link>
        </span>
      </header>
      <div>
        <Table>
          <Table.Header>
            <th className="table__th">#</th>
            <th className="table__th">کد</th>
            <th className="table__th"> نوع </th>
            <th className="table__th">مقدار</th>
            <th className="table__th">شامل محصولات </th>
            <th className="table__th"> مقدار مصرفی </th>
            <th className="table__th">ظرفیت</th>
            <th className="table__th">تاریخ انقضا</th>
            <th className="table__th">عملیات</th>
          </Table.Header>
          <Table.Body>
            {data.coupons.map((coupon, index) => {
              return (
                <CouponTableRow
                  key={coupon._id}
                  coupon={coupon}
                  index={index}
                />
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default CouponsPage;
