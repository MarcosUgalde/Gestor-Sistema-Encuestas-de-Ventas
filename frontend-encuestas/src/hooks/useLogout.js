import { useMutation, useQueryClient } from "react-query";
import { auth } from "../services";
import { useLocation } from "wouter";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const { mutate } = useMutation({
    mutationFn: auth.logout,
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] }) &&
          setLocation("/login");
      }
    },
  });
  return mutate;
};
