import { getAllPayments } from "@/services/paymentService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAllPayment() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: getAllPayments,
  });
}

export function useCreatePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPayment,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["payments"]);
    },
  });
}
