import Loading from "@/components/Loading";
import Table from "@/components/Table";
import { useRemoveCoupon } from "@/hooks/useCoupon";
import { persianDate } from "@/utils/persianDate";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function CouponTableRow({ coupon, index }) {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useRemoveCoupon(coupon._id);

  const handleDeleteCoupon = async () => {
    try {
      const response = await mutateAsync();
      toast.success(response.message);
      queryClient.invalidateQueries(["coupons"]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isPending) return <Loading />;

  return (
    <Table.Row>
      <td className="table__td">{index + 1}</td>
      <td className="table__td font-bold whitespace-nowrap">{coupon.code} </td>
      <td className="table__td">{coupon.type} </td>
      <td className="table__td">{coupon.amount}</td>
      <td className="table__td">
        {coupon.productIds.map((product) => {
          return <span key={product._id}>{product.title}</span>;
        })}
      </td>
      <td className="table__td">{coupon.usageCount}</td>
      <td className="table__td">{coupon.usageLimit}</td>
      <td className="table__td">{persianDate(coupon.expireDate)}</td>
      <td className="table__td">
        <span className="flex gap-4">
          <button onClick={handleDeleteCoupon}>
            <MdDelete className="w-6 h-6 text-rose-500" />
          </button>
          <Link href="#">
            <IoMdEye className="w-6 h-6 text-primary-900" />
          </Link>
          <Link href={`/admin/coupons/edit/${coupon._id}`}>
            <CiEdit className="w-6 h-6 text-secondary-700" />
          </Link>
        </span>
      </td>
    </Table.Row>
  );
}
export default CouponTableRow;
