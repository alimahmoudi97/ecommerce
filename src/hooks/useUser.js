import { completeProfile } from "@/services/authService";
import {
  getUserProfile,
  getUsers,
  updateUserProfile,
} from "@/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
  return useMutation({
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

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}
