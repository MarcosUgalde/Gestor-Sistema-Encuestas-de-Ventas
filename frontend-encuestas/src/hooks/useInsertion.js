import { useMutation } from "react-query";
import { useLocation } from "wouter";
import { encuestas } from "../services";

export const useInsertion = () => {
  const [, setLocation] = useLocation();

  const { mutate: insertEncuesta } = useMutation({
    mutationFn: encuestas.addEncuesta,
    onSuccess: (data) => {
      if (data.success) setLocation("/");
      console.info("Encuesta insertada");
    },
  });

  return insertEncuesta;
};
