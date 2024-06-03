import { completeProfile } from "@/services/authService";
import { getUserProfile, updateUserProfile } from "@/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUser(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfile,
  });
  const profile = data?.data || {};

  return { profile, isLoading };
}

export function useCompleteProfile() {
  const router = useRouter();
  useMutation({
    mutationFn: completeProfile,
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/");
    },
    onError: (err) => toast.error(err.response.data.message),
  });
}

export function useUpdateProfile() {
  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      toast.success("پروفایل با موفقیعت آپدیدت شد!");
    },
  });
}