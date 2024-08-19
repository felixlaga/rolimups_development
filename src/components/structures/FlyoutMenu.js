// components/FlyoutMenu.js
"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MenuIcon, HomeIcon, BriefcaseIcon, InfoIcon, MailIcon } from '@/components/Icons'

export function FlyoutMenu({ open, setOpen }) {
  return (
    <div className="relative">
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 bg-background p-6">
        <nav className="grid gap-4 lg:px-3 py-4 flex items-center justify-between">
          <Link
            href="/landingpage"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <BriefcaseIcon className="h-5 w-5" />
            Services
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <InfoIcon className="h-5 w-5" />
            About
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <MailIcon className="h-5 w-5" />
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
    </div>
  )
}