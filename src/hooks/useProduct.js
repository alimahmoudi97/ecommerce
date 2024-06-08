import {
  addProduct,
  getProductById,
  getProducts,
  removeProduct,
  updateProduct,
} from "@/services/productService";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetProducts(qs = "") {
  console.log("qs:", qs);
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(qs),
  });
}

export function useGetProductById(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
}

export function useAddProduct() {
  return useMutation({
    mutationFn: addProduct,
  });
}

export function useRemoveProduct() {
  return useMutation({
    mutationFn: removeProduct,
  });
}

export function useUpdateProduct(id) {
  return useMutation({
    mutationFn: (data) => updateProduct({ id, data }),
  });
}
