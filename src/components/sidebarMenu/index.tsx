import React from "react"
import Link from "next/link"

export const SidebarMenu = () => {
  return (
    <div className="flex w-full max-w-xs flex-col bg-zinc-50">
      <div className="h-5 px-4 py-2">
        <Link href="/" className="font-olympicHeadlineRegular">
          OlympicStats
        </Link>
      </div>
      <ul className="font-rubik font-paris2024 m-auto flex flex-col gap-4 text-sm font-medium">
        <li>
          <Link href="/events" className="block w-full">
            Eventos
          </Link>
        </li>
        <li>
          <Link href="/medals" className="block w-full">
            Quadro de medalhas
          </Link>
        </li>
        <li>
          <Link href="/disciplines" className="block w-full">
            Modalidades
          </Link>
        </li>
        <li>
          <Link href="/locals-events" className="block w-full">
            Locais dos eventos
          </Link>
        </li>
      </ul>
    </div>
  )
}
