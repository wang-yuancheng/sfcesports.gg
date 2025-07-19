"use client"
import { useEffect } from "react"
import { useInitialMediaQuery } from "@/hooks/useInitialMediaQuery"

export function InitialFontWrapper({ children }: { children: React.ReactNode }) {
  const isDesktop = useInitialMediaQuery({ min: 1500 })

  useEffect(() => {
    const body = document.body
    if (isDesktop) {
      body.classList.add("initial-font-desktop")
      body.classList.remove("initial-font-mobile")
    } else {
      body.classList.add("initial-font-mobile")
      body.classList.remove("initial-font-desktop")
    }
  }, [isDesktop])

  return <>{children}</>
}
