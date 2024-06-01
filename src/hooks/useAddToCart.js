import { addToCart } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";

export function useAddToCart(id) {
  const { data, mutateAsync } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => queryClient.invalidateQueries(["product"]),
  });
}
