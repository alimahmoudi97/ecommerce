import { addToCart } from "@/services/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddToCart(id) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      toast.success("به سبد محصولات اضافه شد");
      queryClient.invalidateQueries(["user"]);
    },
  });
}
