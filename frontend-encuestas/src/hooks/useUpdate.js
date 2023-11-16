import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { encuestas } from "../services";

export const useUpdate = () => {
  const [, setLocation] = useLocation();

  const { mutate: updateEncuesta } = useMutation({
    mutationFn: encuestas.updateEncuesta,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("> Encuesta update completed: ", data);
    },
  });

  return updateEncuesta;
};
