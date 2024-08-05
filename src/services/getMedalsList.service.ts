import { GetMedalsList } from "@/domain/usecases"
import { apiRequestHelper } from "@/util"

export async function getMedalsListService(
  params: GetMedalsList.Params,
): Promise<GetMedalsList.Response> {
  try {
    const response = await apiRequestHelper<GetMedalsList.Response>({
      method: "GET",
      url: "/countries",
      params,
    })
    return response
  } catch (error: any) {
    throw new Error(error.response?.data || error.message)
  }
}
