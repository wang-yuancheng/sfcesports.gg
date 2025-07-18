"use client";

import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface MenuSheetProps {
  title?: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (o: boolean) => void;
}

export function MenuSheet({ className, open, onOpenChange }: MenuSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          className="relative rounded-md p-2 hover:bg-gray-100 sm:hidden"
          aria-label="Open menu"
        >
          <Image src="/menu.svg" alt="Menu" width={22} height={22} />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className={className}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        {/* CUSTOM CONTENT */}
        <div id="menu-content" className="mt-4">
          Content
        </div>
        {/* END CUSTOM CONTENT */}
      </SheetContent>
    </Sheet>
  );
}

// Responsive Wrapper: Hides sheet when viewport grows past mobile size
export function MenuSheetResponsive(
  props: Omit<MenuSheetProps, "open" | "onOpenChange">
) {
  const isMobile = useMediaQuery({ max: 640 });
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  return <MenuSheet {...props} open={open} onOpenChange={setOpen} />;
}
