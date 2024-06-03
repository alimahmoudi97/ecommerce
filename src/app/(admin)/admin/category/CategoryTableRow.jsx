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
      <td>{index + 1}</td>
      <td>{category.title} </td>
      <td>{category.description}</td>
      <td>{category.englishTitle}</td>
      <td>{category.type}</td>
      <td>
        <span className="flex gap-4">
          <button onClick={handleClick}>
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
