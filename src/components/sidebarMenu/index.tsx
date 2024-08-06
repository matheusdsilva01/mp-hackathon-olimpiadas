"use client"
import React, { useEffect, useState } from "react"
import {
  Calendar,
  Dumbbell,
  MapPinned,
  Medal,
  Menu,
  Sidebar,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { olympicLogo } from "@/assets/icons"

export const SidebarMenu = () => {
  return (
    <>
      <div className="hidden h-screen w-full max-w-xs flex-col bg-zinc-50 md:flex">
        <div className="flex h-5 px-4  py-2">
          <Link href="/" className="font-olympicHeadlineRegular">
            OlympicStats
            <Image
              src={olympicLogo}
              className="ml-4 inline"
              alt="OlympicStats"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <ul className="m-auto flex flex-col gap-4 font-paris2024 text-sm font-medium">
          <li>
            <Link href="/events" className="flex w-full">
              <Calendar size={18} className="inline" />
              <p className="ml-2">Eventos</p>
            </Link>
          </li>
          <li>
            <Link href="/medals" className="flex w-full">
              <Medal size={18} className="inline" />
              <p className="ml-2">Quadro de medalhas</p>
            </Link>
          </li>
          <li>
            <Link href="/disciplines" className="flex w-full">
              <Dumbbell size={18} className="inline" />
              <p className="ml-2">Modalidades</p>
            </Link>
          </li>
          <li>
            <Link href="/locals-events" className="flex w-full">
              <MapPinned size={18} className="inline" />
              <p className="ml-2">Locais dos eventos</p>
            </Link>
          </li>
        </ul>
      </div>
      <ResponsiveSidebarMenu />
    </>
  )
}

const ResponsiveSidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div className="absolute z-50 flex h-screen w-full max-w-xs flex-col bg-zinc-50 md:hidden">
          <div className="flex h-5 px-4 py-2">
            <Link href="/" className="font-olympicHeadlineRegular">
              OlympicStats
              <Image
                src={olympicLogo}
                className="ml-4 inline"
                alt="OlympicStats"
                width={40}
                height={40}
              />
            </Link>
            <button
              className="ml-auto md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Sidebar size={24} />}
            </button>
          </div>
          <ul className="m-auto flex flex-col gap-4 font-paris2024 text-sm font-medium">
            <li>
              <Link href="/events" className="flex w-full">
                <Calendar size={18} className="inline" />
                <p className="ml-2">Eventos</p>
              </Link>
            </li>
            <li>
              <Link href="/medals" className="flex w-full">
                <Medal size={18} className="inline" />
                <p className="ml-2">Quadro de medalhas</p>
              </Link>
            </li>
            <li>
              <Link href="/disciplines" className="flex w-full">
                <Dumbbell size={18} className="inline" />
                <p className="ml-2">Modalidades</p>
              </Link>
            </li>
            <li>
              <Link href="/locals-events" className="flex w-full">
                <MapPinned size={18} className="inline" />
                <p className="ml-2">Locais dos eventos</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="bg-red h-fit w-full md:hidden">
        <div className="flex px-4 py-2">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <Menu size={24} />
          </button>
          {!isOpen && (
            <Link href="/" className="ml-auto font-olympicHeadlineRegular">
              OlympicStats
              <Image
                src={olympicLogo}
                className="ml-4 inline"
                alt="OlympicStats"
                width={40}
                height={40}
              />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
