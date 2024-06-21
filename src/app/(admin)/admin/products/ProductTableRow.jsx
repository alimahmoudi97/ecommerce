import Table from "@/components/Table";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";
import { useRemoveProduct } from "@/hooks/useProduct";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "@/components/Modal";

function ProductTableRow({ product, index }) {
  const queryClient = useQueryClient();
  const { mutateAsync } = useRemoveProduct();
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteProduct = async () => {
    try {
      const response = await mutateAsync(product._id);
      toast.success(response.message);
      queryClient.invalidateQueries(["products"]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Table.Row>
      <td className="table__td">{index + 1}</td>
      <td className="table__td font-bold">{product?.title} </td>
      <td className="table__td">{product?.category?.title}</td>
      <td className="table__td">{product?.price}</td>
      <td className="table__td">{product?.discount}</td>
      <td className="table__td">{product?.offPrice}</td>
      <td className="table__td">{product?.countInStock}</td>
      <td className="table__td">
        <span className="flex gap-4">
          <button
            // onClick={handleDeleteProduct}
            onClick={() => setOpenModal(true)}
          >
            <Modal
              open={openModal}
              title={`آیا از حذف ${product?.title} مطمئن هستید؟`}
              onClose={() => setOpenModal(false)}
            >
              <div className="flex items-center justify-between gap-4">
                <button
                  className="btn p-2 mt-0 border border-rose-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenModal(false);
                  }}
                >
                  خیر
                </button>
                <button
                  className="btn p-2 mt-0 bg-rose-500 text-white"
                  onClick={handleDeleteProduct}
                >
                  بله
                </button>
              </div>
            </Modal>
            <MdDelete className="w-6 h-6 text-rose-500" />
          </button>
          <Link href="#">
            <IoMdEye className="w-6 h-6 text-primary-900" />
          </Link>
          <Link href={`/admin/products/edit/${product?._id}`}>
            <CiEdit className="w-6 h-6 text-secondary-700" />
          </Link>
        </span>
      </td>
    </Table.Row>
  );
}
export default ProductTableRow;
