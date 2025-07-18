"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useMediaQuery } from "@/app/hooks/useMediaQuery"
import { Button } from "@/app/components/ui/shadcn/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/app/components/ui/shadcn/sheet"

type SheetSide = "top" | "bottom" | "left" | "right"

interface CartSheetProps {
  side?: SheetSide
  description?: React.ReactNode
  emptyMessage?: React.ReactNode
  ctaHref?: string
  ctaLabel?: React.ReactNode
  trigger?: React.ReactNode
  children?: React.ReactNode
  contentClassName?: string
}

export function CartSheet({
  side = "right",
  description = null,
  emptyMessage = "Your bag is empty",
  ctaHref = "/shop",
  ctaLabel = "Continue Shopping",
  trigger,
  children,
  contentClassName,
}: CartSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            title="Cart Button"
            aria-label="Open cart"
            className="relative rounded-md p-2 hover:bg-gray-100"
          >
            <Image
              src="/cart.svg"
              alt="Cart"
              width={22}
              height={22}
              className="min-w-[22px]"
            />
          </button>
        )}
      </SheetTrigger>

      <SheetContent side={side} className={contentClassName}>
        <SheetHeader>
          <SheetTitle>Your Bag</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>

        {children ? (
          children
        ) : (
          <div className="mt-6 flex flex-col items-center text-center">
            <div className="w-full mb-4">{emptyMessage}</div>
            <Button asChild className="w-full">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

// Responsive wrapper
export function CartSheetResponsive(props: Omit<CartSheetProps, "side">) {
  const isSmall = useMediaQuery({ max: 640 }) 
  const side = isSmall ? "bottom" : "right"
  return <CartSheet side={side} {...props} />
}
