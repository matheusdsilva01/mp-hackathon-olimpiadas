import { Country } from "../entities"
import { Pagination } from "../types"

export namespace GetMedalsList {
  export type Params = {
    page: number
  }
  export type Response = Pagination<Country[]>
}
