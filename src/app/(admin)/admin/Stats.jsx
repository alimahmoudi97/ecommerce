"use client";

import Loading from "@/components/Loading";
import Stat from "@/components/Stat";
import { useGetProducts } from "@/hooks/useProduct";
import { useUsers } from "@/hooks/useUser";
import { AiOutlineProduct } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

function Stats() {
  const { data: products, isLoading } = useGetProducts();
  const { data: users } = useUsers();

  if (isLoading) return <Loading />;

  console.log("products:", users);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        color="orange"
        title="تعداد کاربران"
        icon={<FiUsers className="w-12 h-12" />}
        value={users?.users.length || 0}
      />
      <Stat
        color="primary"
        title="تعداد محصولات"
        icon={<AiOutlineProduct className="w-12 h-12" />}
        value={products?.products.length || 0}
      />
      <Stat
        color="green"
        title="تعداد تراکنش ها"
        icon={<BsBag className="w-12 h-12" />}
        value={50}
      />
    </div>
  );
}
export default Stats;
