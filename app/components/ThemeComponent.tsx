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
  dark: string;
  light: string;
  themeText: string;
}

import { Sun, Moon } from "lucide-react";

export function ThemeComponent({ closeSheet }: { closeSheet: () => void }) {
  const fullpathname = usePathname();
  const pathname = fullpathname;
  const [isOpen, setIsOpen] = useState(false);
  const currentLessonNumber = pathname.split("/").pop();
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
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
                <h1 className="text-base">Vzhled / Apariencia</h1>
                {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {/* Opravená struktura seznamu */}
              <ul>
                <SidebarMenuSubItem>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div
                      className="flex justify-between w-full cursor-pointer dark:hover:text-gray-200 hover:text-gray-800"
                      onClick={() => {
                        setTheme("light");
                        closeSheet();
                      }}
                    >
                      Světlý / Claro <Sun size={16} />
                    </div>
                    <div
                      className="flex justify-between w-full cursor-pointer dark:hover:text-gray-200 hover:text-gray-800"
                      onClick={() => {
                        setTheme("dark");
                        closeSheet();
                      }}
                    >
                      Tmavý / Oscuro <Moon size={16} />
                    </div>
                  </div>
                </SidebarMenuSubItem>
              </ul>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}
