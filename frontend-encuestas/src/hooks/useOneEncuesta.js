import { useQuery } from "react-query";
import { encuestas } from "../services";

export const useOneEncuesta = (props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["encuesta", props?.encuestaId],
    queryFn: encuestas.getOneEncuesta(props?.encuestaId),
  });
  console.log("hook response: ", data?.content);
  return { data, isLoading };
};
