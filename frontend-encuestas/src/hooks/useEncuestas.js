import { useQuery } from "react-query";
import { encuestas } from "../services";

export const useEncuestas = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all"],
    queryFn: encuestas.getEncuestas,
  });
  console.log("hook response: ", data);
  return { data, isLoading };
};
