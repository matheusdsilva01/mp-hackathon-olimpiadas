import React from "react"
import Image from "next/image"
import Link from "next/link"
import { getListDisciplines } from "@/hooks"

export const DisciplinesList = async () => {
  const response = await getListDisciplines({})

  return (
    <ul className="font-olympicSans mt-10 flex flex-col flex-wrap gap-x-8 gap-y-4">
      {response?.data?.map(discipline => (
        <li key={discipline.id}>
          <Link
            className="bg-card-discipline flex max-w-sm items-center rounded-md border-2 border-zinc-400 p-2"
            href={`/events?discipline=${discipline.id}`}
          >
            <Image
              src={discipline.pictogram_url_dark}
              alt={discipline.name}
              width={40}
              height={40}
            />
            <p className="ml-4 text-xl text-zinc-50">{discipline.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
