"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname,useRouter } from "next/navigation";
interface DropDownProps {
  settings: string;
  dark:string;
  light:string;
  themeText:string;
}
import { Sun, Moon, Monitor } from "lucide-react";
function DropDownSettingComponents({ settings, dark,light,themeText }: DropDownProps) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname(); // Get the current path
  const router = useRouter();

  const changeLanguage = (newLang: string) => {
    // Split the current pathname into segments and remove the first two
    const path = pathname.split("/").slice(2).join("/")
    router.push(`/${newLang}/${[path]}`)
  };
  
  
  // Ensure component is only rendered after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until mounted

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Settings />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Nastavení</DropdownMenuLabel>
          <DropdownMenuSeparator />

       

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Vzhled</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun size={16} style={{ marginRight: "8px" }} />
                  Světlá
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon size={16} style={{ marginRight: "8px" }} />
                  Tmavá
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor size={16} style={{ marginRight: "8px" }} />
                  System
                </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDownSettingComponents;