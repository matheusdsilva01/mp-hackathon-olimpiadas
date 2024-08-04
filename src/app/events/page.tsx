import React from "react"
interface PageProps {
  params: {}
  searchParams: {
    discipline?: string
  }
}
const page = (props: PageProps) => {
  console.log(props)
  return <div>events</div>
}

export default page
