import { useQueryClient, useMutation } from "react-query";
import { useLocation } from "wouter";
import { encuestas } from "../services";

export const useDelete = () => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const deleteMutation = useMutation((id) => encuestas.eliminateEncuesta(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("encuestas") && setLocation("/");
    },
  });

  const deleteEcuesta = (id) => {
    deleteMutation.mutate(id);
  };

  return deleteEcuesta;
};
