import { addProduct, getProducts } from "@/services/productService";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

export function useAddProduct() {
  return useMutation({
    mutationFn: addProduct,
  });
}
