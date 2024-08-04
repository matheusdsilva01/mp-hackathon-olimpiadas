import { GetListEvent } from "@/domain/usecases/getListEvent.usecase"
import { apiRequestHelper } from "@/util"

export async function getListEventService(
  params: GetListEvent.Params,
): Promise<GetListEvent.Response> {
  try {
    const response = await apiRequestHelper<GetListEvent.Response>({
      method: "GET",
      url: "/events",
      params,
    })
    return response
  } catch (error: any) {
    throw new Error(error.response?.data || error.message)
  }
}
