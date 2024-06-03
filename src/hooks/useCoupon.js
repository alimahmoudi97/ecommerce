import { addCoupon, getCoupons } from "@/services/couponService";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetCoupons() {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: getCoupons,
  });
}

export function useAddCoupon() {
  return useMutation({
    mutationFn: addCoupon,
  });
}
