import { getProducts } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export function useProduct() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
