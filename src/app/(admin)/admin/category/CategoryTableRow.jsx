import Table from "@/components/Table";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function CategoryTableRow({ category, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{category.title} </td>
      <td>{category.description}</td>
      <td>{category.englishTitle}</td>
      <td>{category.type}</td>
      <td>
        <span className="flex gap-4">
          <button>
            <MdDelete className="w-8 h-8 text-red-500" />
          </button>
          <Link href="#">
            <IoMdEye className="w-8 h-8 text-primary-600" />
          </Link>
          <Link href={`/admin/category/edit/${category._id}`}>
            <CiEdit className="w-8 h-8 text-secondary-500" />
          </Link>
        </span>
      </td>
    </Table.Row>
  );
}
export default CategoryTableRow;
