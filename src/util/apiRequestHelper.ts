import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export interface ApiRequestHelperProps {
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE"
  params?: any
}
export async function apiRequestHelper<T>({
  url,
  method,
  params,
}: ApiRequestHelperProps): Promise<T> {
  const apiHost = process.env.NEXT_PUBLIC_API_HOST
  const config: AxiosRequestConfig = {
    url,
    headers: {
      "Content-Type": "application/json",
    },
  }

  try {
    const response: AxiosResponse<T> = await axios.request<T>({
      url,
      baseURL: apiHost,
      method,
      params: params,
      ...config,
    })

    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data || error.message)
  }
}
