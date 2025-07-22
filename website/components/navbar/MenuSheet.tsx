"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Footer from "@/sections/Footer";
import { RemoveScroll } from "react-remove-scroll";

const navItems = [
  { name: "Teams", href: "/teams" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Company", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Join", href: "/join" },
];

function isCurrent(pathname: string, href: string) {
  return pathname === href;
}

export interface MenuSheetProps {
  open?: boolean;
  onOpenChange?: (o: boolean) => void;
}

export function MenuSheet({ open, onOpenChange }: MenuSheetProps) {
  const pathname = usePathname();

  return (
    <div className="sheet-under-header">
      <RemoveScroll enabled={open}>
        <Sheet open={open} onOpenChange={onOpenChange} modal={false}>
          <SheetTrigger asChild>
            <button
              className="relative rounded-md p-2 sm:hover:bg-gray-100 sm:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Image
                src="/menu.svg"
                alt="Open Menu"
                width={22}
                height={22}
                draggable={false}
                className={
                  open ? "hover:cursor-pointer hidden" : "hover:cursor-pointer"
                }
              />
              <Image
                src="/cross.svg"
                alt="Close Menu"
                width={22}
                height={22}
                draggable={false}
                className={
                  open ? "hover:cursor-pointer" : "hover:cursor-pointer hidden"
                }
              />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[min(100vw,640px)] top-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto pt-0"
            overlayClassName="top-[var(--header-height)] h-[calc(100vh-var(--header-height))]"
            hideCloseButton={true}
          >
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>

            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onOpenChange?.(false)}
                  className={`border-b border-b-gray-200 w-full flex items-center ${
                    isCurrent(pathname, item.href) ? "text-orange-500" : ""
                  } h-16 xxs:h-20 xs:h-24 text-[16px]`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <Footer />
            </div>
          </SheetContent>
        </Sheet>
      </RemoveScroll>
    </div>
  );
}

// Responsive Wrapper: Hides sheet when viewport grows past mobile size
export function MenuSheetResponsive(
  props: Omit<MenuSheetProps, "open" | "onOpenChange">
) {
  const isMobile = useMediaQuery({ max: 640 });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  return <MenuSheet {...props} open={open} onOpenChange={setOpen} />;
}
