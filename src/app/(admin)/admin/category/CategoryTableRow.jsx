"use client";

import Table from "@/components/Table";
import { useRemoveCategory } from "@/hooks/useCategory";
import Link from "next/link";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function CategoryTableRow({ category, index }) {
  const { data, isPending, mutateAsync } = useRemoveCategory(category._id);

  const handleClick = async () => {
    try {
      const res = await mutateAsync();
      toast.success(res.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Table.Row>
      <td className="table__td">{index + 1}</td>
      <td className="table__td font-bold">{category.title} </td>
      <td className="table__td">{category.description}</td>
      <td className="table__td">{category.englishTitle}</td>
      <td className="table__td">{category.type}</td>
      <td className="table__td">
        <span className="flex gap-4">
          <button onClick={handleClick}>
            <MdDelete className="w-6 h-6 text-red-700" />
          </button>
          <Link href="#">
            <IoMdEye className="w-6 h-6 text-primary-900" />
          </Link>
          <Link href={`/admin/category/edit/${category._id}`}>
            <CiEdit className="w-6 h-6 text-secondary-700" />
          </Link>
        </span>
      </td>
    </Table.Row>
  );
}
export default CategoryTableRow;
