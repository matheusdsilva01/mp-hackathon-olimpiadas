import { Suspense } from "react"
import { LocalsEventsList } from "@/components"
import { LocalsEventsListFallback } from "@/components/localsEventsList/fallback"

const page = () => {
  return (
    <div>
      <h1 className="font-paris2024 text-xl font-bold not-italic">
        Venues Paris Olympics 2024
      </h1>
      <h3 className="mt-4 font-sourceSansPro text-lg">
        Check out the venues that will host the Paris 2024 Olympics.
      </h3>
      <Suspense fallback={<LocalsEventsListFallback />}>
        <LocalsEventsList />
      </Suspense>
    </div>
  )
}

export default page
