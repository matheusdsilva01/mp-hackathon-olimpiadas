import React from "react"
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react"
import { Pagination as PaginationType } from "@/domain/types"
import { PaginationButton } from "../paginationButton"

type PaginationProps = {
  // eslint-disable-next-line no-unused-vars
  onChange: (page: number) => void
} & Partial<Omit<PaginationType, "data">>

const placeholderPagination = [
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
  {
    label: <LoaderCircle size={16} className="animate-spin" />,
    active: false,
  },
]

export const Pagination = ({ links, meta, onChange }: PaginationProps) => {
  const metaLinks =
    meta?.links.filter(({ label }) =>
      label === "..." ? true : !!Number(label),
    ) || placeholderPagination
  const responsiveMetaLinks = metaLinks.slice(0, 3)

  return (
    <div className="flex items-center gap-4">
      <button
        className="flex select-none items-center gap-2 rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => onChange(meta!.current_page - 1)}
        disabled={!links?.prev}
      >
        <ArrowLeft size={24} />
        Previous
      </button>
      {/* responsive pagination */}
      {meta ? (
        <div className="flex items-center gap-2 xl:hidden">
          <PaginationButton
            onClick={() => onChange(1)}
            active={meta?.current_page === 1}
            value={1}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              1
            </span>
          </PaginationButton>
          {meta?.current_page !== 1 &&
            meta?.current_page !== meta?.last_page && (
              <div className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  {meta?.current_page}
                </span>
              </div>
            )}
          <PaginationButton
            onClick={() => onChange(meta!.last_page)}
            active={meta?.current_page === meta?.last_page}
            value={meta?.last_page}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {meta?.last_page}
            </span>
          </PaginationButton>
        </div>
      ) : (
        responsiveMetaLinks?.map(({ label, active }, i) => (
          <PaginationButton
            key={i}
            active={active}
            onClick={() => label !== "..." && onChange(Number(label))}
            value={label as unknown as number}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {label}
            </span>
          </PaginationButton>
        ))
      )}
      {/* responsive pagination */}
      <div className="hidden items-center gap-2 xl:flex">
        {metaLinks?.map(({ label, active }, i) => (
          <PaginationButton
            key={i}
            onClick={() => label !== "..." && onChange(Number(label))}
            active={active}
            value={Number(label)}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {label}
            </span>
          </PaginationButton>
        ))}
      </div>
      <button
        className="flex select-none items-center gap-2 rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => onChange(meta!.current_page + 1)}
        disabled={!links?.next}
      >
        Next
        <ArrowRight size={24} />
      </button>
    </div>
  )
}
