import React, { ReactNode } from "react"
interface PaginationButtonProps {
  active: boolean
  children: ReactNode
  value: number | string
  onClick: () => void
}
export const PaginationButton = ({
  active,
  children,
  onClick,
  value,
}: PaginationButtonProps) => {
  return (
    <button
      className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase ${
        active
          ? "bg-gray-900 text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          : "text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      }`}
      type="button"
      onClick={() => onClick()}
      disabled={active || value === "..."}
    >
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {children}
      </span>
    </button>
  )
}
