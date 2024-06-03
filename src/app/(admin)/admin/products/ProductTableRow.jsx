import Table from "@/components/Table";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";
import { useRemoveProduct } from "@/hooks/useProduct";
import Loading from "@/components/Loading";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

function ProductTableRow({ product, index }) {
  const queryClient = useQueryClient();
  const { data, isPending, mutateAsync } = useRemoveProduct();

  const handleClick = async () => {
    try {
      const response = await mutateAsync(product._id);
      toast.success(response.message);
      queryClient.invalidateQueries(["products"]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isPending) return <Loading />;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{product.title} </td>
      <td>{product.category.title}</td>
      <td>{product.price}</td>
      <td>{product.discount}</td>
      <td>{product.offPrice}</td>
      <td>{product.countInStock}</td>
      <td>
        <span className="flex gap-4">
          <button onClick={handleClick}>
            <MdDelete className="w-8 h-8 text-red-500" />
          </button>
          <Link href="#">
            <IoMdEye className="w-8 h-8 text-primary-600" />
          </Link>
          <Link href={`/admin/products/edit/${product._id}`}>
            <CiEdit className="w-8 h-8 text-secondary-500" />
          </Link>
        </span>
      </td>
    </Table.Row>
  );
}
export default ProductTableRow;
