import Loading from "@/components/Loading";
import RadioButton from "@/components/RadioButton";
import { useCategory } from "@/hooks/useCategory";
import { getCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

function SideBar() {
  const { data, isLoading } = useCategory();

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col space-y-4">
      {/* TODO:create categories component and fetch categories inside that */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold">دسته بندی</h2>
        <ul>
          {console.log("categories", data.categories)}
          {data.categories.map((category) => {
            return (
              <li key={category._id} className="flex items-center gap-2">
                <input id={category.type} type="checkbox" />
                <label htmlFor={category.type}> {category.title}</label>
              </li>
            );
          })}
        </ul>
      </div>
      {/* TODO:crate sort component and customize it */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold">مرتب سازی</h2>
        <ul>
          <li>
            <RadioButton name="sort" id="latest" label="جدید ترین" />
          </li>
          <li>
            <RadioButton name="sort" id="earlest" label="قدیمی ترین" />
          </li>
          <li>
            <RadioButton name="sort" id="most" label="محبوب ترین" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;
