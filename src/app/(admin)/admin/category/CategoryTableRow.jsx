import Table from "@/components/Table";

function CategoryTableRow({ category, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{category.title} </td>
      <td>{category.description}</td>
      <td>{category.englishTitle}</td>
      <td>{category.type}</td>
      <td>عملیات</td>
    </Table.Row>
  );
}
export default CategoryTableRow;
