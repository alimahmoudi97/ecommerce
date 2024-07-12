import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function SkeltonLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array(3)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              className="border border-secondary-100 border-opacity-50 rounded-2xl col-span-1 p-2  shadow-lg flex flex-col gap-4"
              key={index}
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
export default SkeltonLoading;
