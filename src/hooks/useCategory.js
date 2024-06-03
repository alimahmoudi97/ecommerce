import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addCategory,
  getCategories,
  getCategoryById,
  removeCategory,
  updateCategory,
} from "@/services/categoryService";

export function useCategory() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}

export function useAddCategory() {
  return useMutation({
    mutationFn: addCategory,
  });
}

export function useGetCategoryById(id) {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoryById(id),
  });
}

export function useUpdateCategory(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateCategory({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries(["category", id]);
    },
  });
}

export function useRemoveCategory(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => removeCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["category", id]);
    },
  });
}
