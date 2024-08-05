import { useInfiniteQuery } from "@tanstack/react-query"
import { GetMedalsList } from "@/domain/usecases"
import { getMedalsListService } from "@/services"

export async function getMedalsList(params: GetMedalsList.Params) {
  const response = await getMedalsListService(params)
  return response
}

export const useGetMedalsList = (props: GetMedalsList.Params) => {
  return useInfiniteQuery({
    queryKey: ["getMedalsList", Object.entries(props).flat()],
    queryFn: async page =>
      await getMedalsList({
        page: page.pageParam,
      }),
    getNextPageParam: lastPage => {
      return lastPage.links.next ? lastPage.meta.current_page + 1 : undefined
    },
    initialPageParam: 1,
  })
}
