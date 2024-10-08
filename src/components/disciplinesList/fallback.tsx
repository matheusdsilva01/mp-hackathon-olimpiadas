import React from "react"

export const DisciplinesListFallback = () => {
  return (
    <ul className="mt-10 flex flex-col flex-wrap gap-y-4">
      {Array(15)
        .fill(null)
        .map((_, index) => (
          <li
            key={index}
            className="flex max-w-sm animate-pulseSlow items-center rounded-md border-2 border-zinc-400 bg-card-discipline p-2"
          >
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300" />
            <div className="ml-4 h-5 w-52 animate-pulse bg-zinc-50/75"></div>
          </li>
        ))}
    </ul>
  )
}
