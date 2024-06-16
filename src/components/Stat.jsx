import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[4.6rem_1fr] lg:grid-cols-[5.4rem_1fr] gap-4">
      <div
        className={`row-span-2 flex items-center justify-center p-1 lg:p-4 rounded-full ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-lg self-center">
        {title}
      </h5>
      <p className="text-xl font-bold text-secondary-900">
        {toPersianNumbersWithComma(value)}
      </p>
    </div>
  );
}
export default Stat;
