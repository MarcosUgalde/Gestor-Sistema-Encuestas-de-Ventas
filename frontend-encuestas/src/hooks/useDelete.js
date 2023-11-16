import { useQueryClient, useMutation } from "react-query";
import { encuestas } from "../services";

export const useDelete = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation((id) => encuestas.eliminateEncuesta(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("encuestas");
    },
  });

  const deleteEcuesta = (id) => {
    deleteMutation.mutate(id);
  };

  return deleteEcuesta;
};
