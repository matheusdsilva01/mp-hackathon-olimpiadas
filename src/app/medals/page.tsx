"use client"
import React from "react"
import { LoaderCircle } from "lucide-react"
import { MedalsTable } from "@/components"
import { useGetMedalsList } from "@/hooks"

const page = () => {
  const { data, isLoading, fetchNextPage, isFetching, hasNextPage } =
    useGetMedalsList({
      page: 1,
    })

  const list = data?.pages.map(page => page.data).flat()

  return (
    <div className="w-full">
      <h1 className="text-center font-paris2024 text-xl font-bold">
        Paris 2024 Medals
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex w-full flex-col py-8">
          <MedalsTable data={list!} />
          <button
            disabled={isFetching || isLoading || !hasNextPage}
            className="mx-auto mt-4 flex w-full max-w-xs rounded-md bg-zinc-900 py-2 text-white disabled:opacity-50"
            onClick={() => fetchNextPage()}
          >
            <p className="mx-auto flex">
              Show More
              {isFetching && (
                <LoaderCircle size={16} className="my-auto ml-1 animate-spin" />
              )}
            </p>
          </button>
        </div>
      )}
    </div>
  )
}

export default page
