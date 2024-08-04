import { useQuery } from "@tanstack/react-query"
import { GetListEvent } from "@/domain/usecases/getListEvent.usecase"
import { getListEventService } from "@/services"

export async function getListEvent(params: GetListEvent.Params) {
  const response = await getListEventService(params)
  return response
}

export const useGetListEvent = (props: GetListEvent.Params) => {
  return useQuery({
    queryKey: ["getListEvent", Object.entries(props).flat()],
    queryFn: () => getListEvent(props),
  })
}
