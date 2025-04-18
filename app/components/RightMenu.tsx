"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const handleNavigate = (href: string) => {
    setOpen(false) // zavře menu
    router.push(href) // navigace bez <Link>
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">info</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-3 hidden md:block dark:bg-gray-800 bg-gray-100">
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem onCheckedChange={setShowStatusBar}>
          <span className="cursor-pointer dark:hover:text-gray-200 hover:text-blue-900" onClick={() => handleNavigate("/")}>Sobre mí / O mně</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onCheckedChange={setShowActivityBar}>
          <span className="cursor-pointer dark:hover:text-gray-200 hover:text-blue-900" onClick={() => handleNavigate("/contact")}>Contacto / Kontakt</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onCheckedChange={setShowPanel}>
          <span className="cursor-pointer dark:hover:text-gray-200 hover:text-blue-900" onClick={() => handleNavigate("/faq")}>FAQ</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
