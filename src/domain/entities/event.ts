import { GenderCode } from "../enums"

export interface Event {
  id: Number
  day: string
  discipline_name: string
  discipline_pictogram: string
  name: null | string
  venue_name: string
  event_name: string
  detailed_event_name: string
  start_date: string
  end_date: string
  status: "Finished"
  is_medal_event: number
  is_live: number
  gender_code: GenderCode
  competitors: Competitor[]
}

export interface Competitor {
  country_id: string
  country_flag_url: string
  competitor_name: string
  position: number
  result_position: string
  result_winnerLoserTie: "L" | "W"
  result_mark: string
}
