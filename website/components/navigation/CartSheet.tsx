"use client";

import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { CartSheetProps } from "@/lib/types";
import { useCart } from "@/hooks/useCart";

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
  const { isOpen, setOpen, items } = useCart();
  const itemCount = items?.length || 0;

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {trigger ?? (
          <button
            type="button"
            title="Cart"
            aria-label="Open cart"
            className="relative rounded-md p-2 sm:hover:bg-gray-100"
            suppressHydrationWarning={true}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              {/* Clipboard Outline */}
              <path
                d="M6 6H2a1 1 0 00-1 1v12a2 2 0 002 2h14a2 2 0 002-2V7a1 1 0 00-1-1h-4M6 6V3a2 2 0 012-2h4a2 2 0 012 2v3M6 6h8"
                stroke="currentColor"
                strokeWidth="2"
              />

              {/* Dynamic Number */}
              <text
                x="50%"
                y="14"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="sans-serif"
                fontSize="14px"
                fill="currentColor"
                stroke="none"
              >
                {itemCount > 0 ? itemCount : ""}
              </text>
            </svg>
          </button>
        )}
      </SheetTrigger>

      <SheetContent
        side={side}
        className={contentClassName}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>Your Bag</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {children ? (
          children
        ) : (
          <div className="mt-6 flex flex-col items-center text-center">
            <div className="w-full mb-4">{emptyMessage}</div>
            <SheetClose asChild>
              <Button asChild className="w-full">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export function CartSheetResponsive(props: Omit<CartSheetProps, "side">) {
  const isSmall = useMediaQuery({ max: 640 });
  const side = isSmall ? "bottom" : "right";
  return <CartSheet side={side} {...props} />;
}
