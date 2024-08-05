import Image from "next/image"
import Link from "next/link"
import { getListVenues } from "@/hooks"
import { eventsLocalsImgs } from "@/util"

export const LocalsEventsList = async () => {
  const response = await getListVenues({})

  return (
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
            <h2 className="font-olympicSans text-xl font-bold">{venue.name}</h2>
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
  )
}
