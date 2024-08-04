import { Event } from "../entities"
import { GenderCode } from "../enums"
import { Pagination } from "../types"

export namespace GetListEvent {
  export type Params = {
    country?: string
    discipline?: string
    gender?: GenderCode
    venue?: string
    date?: string
    competitor?: string
    page: number
  }
  export type Response = Pagination<Event[]>
}
