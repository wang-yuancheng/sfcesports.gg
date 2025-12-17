"use client";

import Link from "next/link";
import Image from "next/image";
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
import LucideShoppingBag from "@/assets/icons/shopping-bag.svg";
import { CartSheetProps } from "@/lib/types";

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
            title="Search Button"
            aria-label="Open cart"
            className="relative rounded-md p-2 sm:hover:bg-gray-100"
            suppressHydrationWarning={true}
          >
            <Image
              src={LucideShoppingBag}
              alt="Shopping Bag"
              width={22}
              height={22}
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

// Responsive wrapper
export function CartSheetResponsive(props: Omit<CartSheetProps, "side">) {
  const isSmall = useMediaQuery({ max: 640 });
  const side = isSmall ? "bottom" : "right";
  return <CartSheet side={side} {...props} />;
}
