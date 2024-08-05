export const LocalsEventsListFallback = () => {
  return (
    <div className="flex flex-col gap-8">
      {Array(10)
        .fill(null)
        ?.map((_, index) => (
          <div key={index} className="flex">
            <div className="h-[180.88px] w-[320px] animate-pulse border bg-gray-300" />
            <div className="px-4 py-2">
              <div className="h-4 w-44 animate-pulse rounded-md bg-gradient-to-r from-gray-500 to-gray-300 text-xl font-bold" />
              <span className="mt-5 block h-[34px] w-36 animate-pulse rounded border bg-gradient-to-b from-gray-300 to-gray-200 py-1 hover:bg-gray-300"></span>
            </div>
          </div>
        ))}
    </div>
  )
}
