import React from "react"

interface BadgeStatusEventProps {
  status: "Finished" | "Scheduled"
}

export const BadgeStatusEvent = ({ status }: BadgeStatusEventProps) => {
  return (
    <span
      className={`rounded-full p-0.5 text-xs font-medium uppercase ${
        status === "Finished"
          ? "bg-green-500 text-white"
          : "bg-gray-500 text-white"
      }`}
    >
      {status}
    </span>
  )
}
