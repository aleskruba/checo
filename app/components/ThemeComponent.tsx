"use client"

import { ChevronDown, ChevronRight } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";

interface DropDownProps {
  settings: string;
  dark:string;
  light:string;
  themeText:string;
}
import { Sun, Moon } from "lucide-react";



export function ThemeComponent({ closeSheet }: { closeSheet: () => void }) {
  const fullpathname = usePathname();
  const pathname = fullpathname;
  const [isOpen, setIsOpen] = useState(false);
  // Extract the lesson number from the current pathname (e.g., /lessons/1 -> 1)
  const currentLessonNumber = pathname.split("/").pop();
  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the collapsible state
  };

  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  return (
    <SidebarMenu>
      <Collapsible defaultOpen={false} className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
              <SidebarMenuButton className="group">
      <span className="flex items-center gap-2 justify-between w-full" onClick={handleToggle}>
      <h1 className="text-lg" >
            Vzhled / Apariencia
            </h1>
          {/* ChevronDown shows when Collapsible is open */}
          {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
      </span>
    </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
         
                  <SidebarMenuSubItem >
                    <div className="flex flex-col justify-start items-start gap-1">
                        <div className="flex gap-1 cursor-pointer dark:hover:text-gray-200 hover:text-gray-800 " 
                        onClick={() => {setTheme("light") ;  closeSheet() }}>          <Sun size={16} style={{ marginRight: "8px" }} /> 
                        Světlý / Claro</div>
                        <div className="flex gap-1 cursor-pointer dark:hover:text-gray-200 hover:text-gray-800 " 
                        onClick={() => {setTheme("dark") ;  closeSheet() }}
                        ><Moon size={16} style={{ marginRight: "8px" }} />Tmavý / Oscuro</div>
                    </div>
                 
                  </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}
