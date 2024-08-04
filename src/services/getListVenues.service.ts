import { GetListVenues } from "@/domain/usecases"
import { apiRequestHelper } from "@/util"

export async function getListVenuesService(
  params: GetListVenues.Params,
): Promise<GetListVenues.Response> {
  try {
    const response = await apiRequestHelper<GetListVenues.Response>({
      method: "GET",
      url: "/venues",
      params,
    })
    return response
  } catch (error: any) {
    throw new Error(error.response?.data || error.message)
  }
}
