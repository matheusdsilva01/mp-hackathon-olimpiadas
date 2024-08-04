import Image from "next/image"
import { olympicLogo } from "@/assets/icons"

const Home = () => {
  return (
    <div className="flex w-full">
      <div className="m-auto">
        <h1 className="font-olympicHeadlineRegular text-3xl">
          Welcome to OlympicStats
        </h1>
        <p className="text-lg">
          This is a application to show the OlympicGames
          <Image
            src={olympicLogo}
            alt="Olympic Games"
            className="mx-1 inline"
            width={50}
            height={50}
          />
          statistics
        </p>
        <p>
          Use the lateral sidebar to navigate in the application and see the
          some statistics of the Olympic Games in Paris 2024.
        </p>
      </div>
    </div>
  )
}

export default Home
