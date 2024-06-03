import Table from "@/components/Table";

function ProductTableRow({ product, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{product.title} </td>
      <td>{product.category.title}</td>
      <td>{product.price}</td>
      <td>{product.discount}</td>
      <td>{product.offPrice}</td>
      <td>{product.countInStock}</td>
      <td>جزئیات</td>
    </Table.Row>
  );
}
export default ProductTableRow;
