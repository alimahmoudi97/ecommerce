import {
  addProduct,
  getProductById,
  getProducts,
  removeProduct,
  updateProduct,
} from "@/services/productService";
import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";

export function useGetProducts() {
  return useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });
}

export function useGetProductById(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    refetchOnWindowFocus: true,
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
