import { GetListDisciplines } from "@/domain/usecases"
import { apiRequestHelper } from "@/util"

export async function getListDisciplinesService(
  params: GetListDisciplines.Params,
): Promise<GetListDisciplines.Response> {
  try {
    const response = await apiRequestHelper<GetListDisciplines.Response>({
      method: "GET",
      url: "/disciplines",
      params,
    })
    return response
  } catch (error: any) {
    throw new Error(error.response?.data || error.message)
  }
}
