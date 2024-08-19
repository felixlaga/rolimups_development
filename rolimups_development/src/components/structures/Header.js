// components/Header.js
"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FlyoutMenu } from './FlyoutMenu'
import { Button } from "@/components/ui/button";
import { MountainIcon, MenuIcon } from '@/components/Icons'
import Link from "next/link"


export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link href="/landingpage" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-8 w-8" />
          <span className="text-xl font-bold">Rolimups Development</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
        <FlyoutMenu open={open} setOpen={setOpen} />
        </nav>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
  )
}