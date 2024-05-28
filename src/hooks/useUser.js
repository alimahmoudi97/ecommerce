import { useQuery } from "@tanstack/react-query";

export function useUser(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    // queryFn: getUserProfile,
  });
  const user = data?.data.user || {};

  return { user, isLoading };
}
