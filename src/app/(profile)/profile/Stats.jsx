import Loading from "@/components/Loading";
import Stat from "@/components/Stat";
import { useUser } from "@/hooks/useUser";
import { totalPricePayment } from "@/utils/totalPricePayment";
import { AiOutlineProduct } from "react-icons/ai";
import { BsBag, BsCalendar2Date } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

function Stats() {
  const { profile, isLoading } = useUser();

  if (isLoading) return <Loading />;

  console.log("user:", profile);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat
        color="green"
        title=" خرید ها"
        icon={<BsBag size={80} />}
        value={profile?.payments.length}
      />
      <Stat
        color="orange"
        title="مبلغ خرید"
        icon={<FiUsers size={80} />}
        value={totalPricePayment(profile?.payments)}
      />
      <Stat
        color="primary"
        title="تاریخ پیوستن "
        icon={<BsCalendar2Date size={80} />}
        value={new Date(profile.user.createdAt).toLocaleDateString("fa-IR")}
      />
    </div>
  );
}
export default Stats;
