import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getWeather } from "../services/apiWeather";
import toast from "react-hot-toast";


export function useWeather() {
  const { isLoading: isWeatherDataLoading, data: weather } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather(),
  })
  return { weather, isWeatherDataLoading }
}


export function useUpdateWeather() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: uploadNewWeather } = useMutation({
    queryKey: ['weather'],
    mutationFn: (location) => getWeather(location),

    onSuccess: (data) => {
      // eslint-disable-next-line no-unused-vars
      queryClient.setQueryData(['weather'], (old) => {
        //  if (!old) return;
        if (data === null) return { ...data };
        return { ...data }
      })
    },
    onError: () => toast.error('There was an error, an incorrect name of the city. Please, try again')
  });

  return { isLoading, uploadNewWeather };
}
