import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CategorySkelton() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 p-4">
      {Array(16)
        .fill(0)
        .map((_, index) => {
          return <Skeleton key={index} />;
        })}
    </div>
  );
}
export default CategorySkelton;
