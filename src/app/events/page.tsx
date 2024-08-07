"use client"
import React from "react"
import { CardEvent, Pagination } from "@/components"
import { useGetListDisciplines, useGetListEvent } from "@/hooks"

interface PageProps {
  params: {}
  searchParams: {
    discipline?: string
  }
}
const page = (props: PageProps) => {
  const paramFilter = props.searchParams.discipline
  const [disciplineFilter, setDisciplineFilter] = React.useState(
    paramFilter || "",
  )
  const [currentPage, setCurrentPage] = React.useState(1)
  const { data: disciplines } = useGetListDisciplines({})
  const { data } = useGetListEvent({
    page: currentPage,
    discipline: disciplineFilter || undefined,
  })

  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-center font-paris2024 text-xl font-bold">
        Paris 2024 Events
      </h1>
      {disciplines?.data && (
        <div className="mr-auto mt-5 flex">
          <h3 className="mr-2">Filter by discipline: </h3>
          <div className="relative w-72 min-w-[150px]">
            <select
              onChange={e => setDisciplineFilter(e.target.value)}
              value={disciplineFilter}
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-[7px] border bg-transparent px-3 py-1 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:outline-0 disabled:border-0"
            >
              <option value="">All</option>
              {disciplines?.data?.map(discipline => (
                <option key={discipline.name} value={discipline.id}>
                  {discipline.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div className="mx-auto my-5">
        <Pagination
          onChange={page => setCurrentPage(page)}
          links={data?.links}
          meta={data?.meta}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {data?.data?.map((event, index) => (
          <CardEvent key={index} event={event} />
        ))}
      </div>
    </div>
  )
}

export default page
