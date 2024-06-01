import { getUserProfile } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

export function useUser(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfile,
  });
  const profile = data?.data || {};

  return { profile, isLoading };
}
