import React from "react"
import Image from "next/image"
import Link from "next/link"
import { getListVenues } from "@/hooks"
import { eventsLocalsImgs } from "@/util"

const page = async () => {
  const response = await getListVenues({})

  return (
    <div className="p-8">
      <h1 className="font-paris2024 text-xl font-bold not-italic">
        Venues Paris Olympics 2024
      </h1>
      <h3 className="mt-4 font-sourceSansPro text-lg">
        Check out the venues that will host the Paris 2024 Olympics.
      </h3>
      <div className="flex flex-col gap-8">
        {response?.data.map((venue, index) => (
          <div key={venue.id} className="flex">
            <Image
              src={eventsLocalsImgs[index].url_img}
              width={960}
              height={540}
              className="h-auto max-w-xs border border-gray-300"
              alt={venue.name}
            />
            <div className="px-4 py-2">
              <h2 className="font-olympicSans text-xl font-bold">
                {venue.name}
              </h2>
              <Link
                href={venue.url}
                target="_blank"
                className="mt-5 block w-36 rounded border border-gray-600 bg-gray-200 py-1 transition-colors hover:bg-gray-300"
              >
                <p className="text-center">More details</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
