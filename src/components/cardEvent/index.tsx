import React from "react"
import dayjs from "dayjs"
import Image from "next/image"
import { Event } from "@/domain/entities"
import { BadgeStatusEvent } from "../badgeStatusEvent"

interface CardEventProps {
  event: Event
}

export const CardEvent = ({ event }: CardEventProps) => {
  return (
    <div className="w-full max-w-[256px] basis-64 bg-white p-1">
      <section className="rounded-md p-2 font-paris2024 shadow-sm">
        <div className="relative flex pt-2">
          <Image
            src={event.discipline_pictogram}
            alt={event.discipline_name}
            width={40}
            height={40}
          />
          <h1 className="ml-2 mt-auto text-lg">{event.discipline_name}</h1>
          <div className="absolute right-0 top-0 font-olympicSans">
            <BadgeStatusEvent status={event.status} />
          </div>
        </div>
        <h2 className="flex-none text-sm">
          {event.detailed_event_name} ({event.gender_code})
        </h2>
      </section>
      <section className="flex justify-between p-2 font-olympicSans">
        <div>
          <h1 className="text-lg font-bold">Start</h1>
          <h2 className="text-sm">
            {dayjs(event.start_date).format("d/mm HH:mm")}
          </h2>
        </div>
        <div>
          <h1 className="ml-auto text-right text-lg font-bold">End</h1>
          <h2 className="text-sm">
            {dayjs(event.end_date).format("d/mm HH:mm")}
          </h2>
        </div>
      </section>
      <section className="flex max-w-full justify-between gap-4 overflow-auto p-2 font-sourceSansPro">
        {event.competitors.map(
          (competitor, i) =>
            competitor.competitor_name && (
              <div
                key={`${event.id}-${competitor.competitor_name}-${competitor.result_mark}`}
                className={`w-fit ${
                  i == 1 && event.competitors.length == 2 ? "text-right" : ""
                }`}
              >
                <h3 className="line-clamp-2 whitespace-nowrap text-sm">
                  {competitor.competitor_name}{" "}
                  {competitor.result_winnerLoserTie === "W" && "🥇"}
                </h3>
                <h3 className="text-sm">
                  {competitor.result_mark ||
                    competitor.result_position ||
                    competitor.position + 1}
                </h3>
                {competitor.country_flag_url && (
                  <Image
                    src={competitor.country_flag_url}
                    alt={competitor.competitor_name}
                    width={180}
                    height={120}
                    className={`h-auto w-full max-w-[24px] ${
                      i == 1 && event.competitors.length == 2 ? "ml-auto" : ""
                    }`}
                  />
                )}
              </div>
            ),
        )}
      </section>
    </div>
  )
}
