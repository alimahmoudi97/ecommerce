import Table from "@/components/Table";

function CouponTableRow({ coupon, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{coupon.code} </td>
      <td>{coupon.type} </td>
      <td>{coupon.amount}</td>
      <td>
        {coupon.productIds.map((product) => {
          return <span key={product._id}>{product.title}</span>;
        })}
      </td>
      <td>{coupon.usageCount}</td>
      <td>{coupon.usageLimit}</td>
      <td>{new Date(coupon.expireDate).toLocaleDateString("fa-IR")}</td>
      <td>عملیات</td>
    </Table.Row>
  );
}
export default CouponTableRow;
