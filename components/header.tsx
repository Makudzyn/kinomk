"use client"

import Link from "next/link"
import { Film, Search, User, ChevronDown } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Film className="size-6 text-primary" />
              <span className="text-xl font-bold">MovieMK</span>
            </Link>

            <nav className="hidden md:flex space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent">
                  Other pages
                  <ChevronDown className="ml-1 size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      TV Shows
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative w-full max-w-[200px] md:max-w-[300px]">
              <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search movies..." className="pl-8" />
            </div>
            <ModeToggle />
            <button className="p-2 rounded-full hover:bg-accent">
              <User className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

