import React, { Suspense } from "react"
import { DisciplinesList } from "@/components"
import { DisciplinesListFallback } from "@/components/disciplinesList/fallback"

const page = () => {
  return (
    <div>
      <h1 className="font-paris2024 text-xl font-bold not-italic">
        Disciplines Paris Olympics 2024
      </h1>
      <h3 className="mt-4 font-sourceSansPro text-lg">
        Select a discipline to see the events and athletes that will compete in
        the Paris 2024 Olympics.
      </h3>
      <Suspense fallback={<DisciplinesListFallback />}>
        <DisciplinesList />
      </Suspense>
    </div>
  )
}

export default page
