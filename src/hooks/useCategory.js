import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/categoryService";

export function useCategory() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
