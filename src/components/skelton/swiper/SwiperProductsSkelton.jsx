import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SwiperProductsSkelton() {
  return (
    <div className="container p-4 rounded-xl w-full flex overflow-x-scroll gap-4 bg-secondary-50/20">
      {Array(6)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="border border-secondary-100 border-opacity-50 rounded-2xl col-span-1 p-2  shadow-lg flex flex-col gap-4 min-w-56"
            >
              <Skeleton className="h-40" />
              <Skeleton className="h-8" />
              <Skeleton className="h-8" />
              <Skeleton className="h-8" />
            </div>
          );
        })}
    </div>
  );
}
export default SwiperProductsSkelton;
