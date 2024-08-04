import { useQuery } from "@tanstack/react-query"
import { GetListDisciplines } from "@/domain/usecases"
import { getListDisciplinesService } from "@/services"

export async function getListDisciplines(params: GetListDisciplines.Params) {
  const response = await getListDisciplinesService(params)
  return response
}
export const useGetListDisciplines = (props: GetListDisciplines.Params) => {
  return useQuery({
    queryKey: ["getListDisciplines", Object.entries(props).flat()],
    queryFn: () => getListDisciplines(props),
  })
}
