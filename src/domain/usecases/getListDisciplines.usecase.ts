import { Discipline } from "../entities"

export namespace GetListDisciplines {
  export type Params = {}
  export type Response = {
    data: Discipline[]
  }
}
