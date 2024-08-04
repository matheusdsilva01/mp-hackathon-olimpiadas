"use client"
import { useGetListEvent } from "@/hooks"

const Home = () => {
  const { data } = useGetListEvent({
    page: 1,
  })
  console.log(data?.meta)
  return (
    <div>
      Hello world
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Home
