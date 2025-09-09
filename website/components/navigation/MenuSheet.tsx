"use client";

import { useEffect, useState } from "react";
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
import Menu from "@/assets/icons/menu.svg";
import X from "@/assets/icons/x.svg";
import MenuDropdown from "./MenuDropdown";
import Image from "next/image";
import { MenuSheetProps } from "@/lib/types";
import { navItems, navTeams } from "@/lib/constants";


function isCurrent(pathname: string, href: string) {
  return pathname === href;
}

export function MenuSheet({ open, onOpenChange }: MenuSheetProps) {
  const pathname = usePathname();

  return (
    <div className="sheet-under-header">
      <RemoveScroll enabled={open}>
        <Sheet open={open} onOpenChange={onOpenChange} modal={false}>
          <SheetTrigger asChild>
            <button
              className="relative rounded-md p-2 md:hover:bg-gray-100 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <Image
                  src={X}
                  alt="Close"
                  width={24}
                  height={24}
                  className="hover:cursor-pointer"
                />
              ) : (
                <Image
                  src={Menu}
                  alt="Menu"
                  width={24}
                  height={24}
                  className="hover:cursor-pointer"
                />
              )}
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[min(100vw,768px)] top-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto py-0"
            overlayClassName="top-[var(--header-height)] h-[calc(100vh-var(--header-height))]"
            hideCloseButton={true}
          >
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>

            <div className="flex flex-col">
              <MenuDropdown
                heading="Teams"
                viewAllHref="/teams"
                items={navTeams}
                onItemClick={() => onOpenChange?.(false)}
              />

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-b-gray-200 w-full flex items-center ${
                    isCurrent(pathname, item.href) ? "text-pink-bright" : ""
                  } h-16 text-[16px]`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="">
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
  const isMobile = useMediaQuery({ max: 768 });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  return <MenuSheet {...props} open={open} onOpenChange={setOpen} />;
}
