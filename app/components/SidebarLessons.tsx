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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


// Menu items
const items = {
  title: "Lekce / Clases",
  content: [
    { title: "Lekce 1", url: `${BASE_URL}/lessons/1` },
    { title: "Lekce 2", url: `${BASE_URL}/lessons/2` },
    { title: "Lekce 3", url: `${BASE_URL}/lessons/3` },
    { title: "Lekce 4", url: `${BASE_URL}/lessons/4` },
    { title: "Lekce 5", url: `${BASE_URL}/lessons/5` },
  ],
};

export function AppSidebar({ closeSheet }: { closeSheet: () => void }) {
  const fullpathname = usePathname();
  const pathname = fullpathname;
  const [isOpen, setIsOpen] = useState(false);
  // Extract the lesson number from the current pathname (e.g., /lessons/1 -> 1)
  const currentLessonNumber = pathname.split("/").pop();
  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the collapsible state
  };
  return (
    <SidebarMenu>
      <Collapsible defaultOpen={false} className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
              <SidebarMenuButton className="group">
      <span className="flex gap-2 items-center justify-between w-full" onClick={handleToggle}>
      <h1 className="text-lg" >
              {items.title}
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
              {items.content.map((item, index) => {
                // Extract the lesson number from the URL (e.g., /lessons/1 -> 1)
                const itemLessonNumber = item.url.split("/").pop();

                // Check if the current lesson matches the item
                const isActive = currentLessonNumber === itemLessonNumber;

                return (
                  <SidebarMenuSubItem key={index}>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-2  dark:hover:text-gray-200 hover:text-gray-800  ${isActive ? "text-blue-500 font-bold" : ""}`}
                      onClick={() => {
                        closeSheet(); // Close the sheet when an item is clicked
                      }}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuSubItem>
                );
              })}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}
