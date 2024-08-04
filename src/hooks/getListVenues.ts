import { useQuery } from "@tanstack/react-query"
import { GetListVenues } from "@/domain/usecases"
import { getListVenuesService } from "@/services"

export async function getListVenues(params: GetListVenues.Params) {
  const response = await getListVenuesService(params)
  return response
}

export const useGetListVenues = (props: GetListVenues.Params) => {
  return useQuery({
    queryKey: ["getListVenues", Object.entries(props).flat()],
    queryFn: () => getListVenues(props),
  })
}
