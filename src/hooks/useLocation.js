import { useQuery } from "@tanstack/react-query";
import { getMyPosition } from "../services/apiGeocoding";

export function useLocation() {
  const { isLoading, data, onError } = useQuery({
    queryKey: ["address"],
    queryFn: getMyPosition,

  });
  return { isLoading, data, onError };
}
