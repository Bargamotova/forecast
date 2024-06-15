import { useQuery } from "@tanstack/react-query";
import { getRandomBurger } from "../services/apiBurgers";

export function useBurger() {
  const { isLoading, data } = useQuery({
    queryKey: ['burger'],
    queryFn: getRandomBurger,
  });
  return { isLoading, data };
}
