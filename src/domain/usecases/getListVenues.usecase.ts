import { Venue } from "../entities"

export namespace GetListVenues {
  export type Params = {}
  export type Response = {
    data: Venue[]
  }
}
