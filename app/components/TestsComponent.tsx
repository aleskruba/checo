import { ChevronDown, ChevronRight, Home, Inbox, Calendar, Search, Settings } from "lucide-react";

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

// Menu items.
const items = {
  title: "Testy/Tests",
  content: [
    {
      title: "Test 1",
      url: "#",

    },
    {
        title: "Test 2",
      url: "#",
     
    },
    {
        title: "Test 3",
      url: "#",

    },
    {
        title: "Test 4",
      url: "#",

    },
    {
        title: "Test 5",
      url: "#",

    },
  ],
};

export function TestsComponent() {
  return (
    <SidebarMenu>
      <Collapsible defaultOpen={false} className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <span className="flex items-center justify-between w-full">
                  <h1 className="text-xl">{items.title}</h1>  
                <ChevronDown className="w-4 h-4 group-open:hidden" />
                <ChevronRight className="w-4 h-4 hidden group-open:block" />
              </span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {items.content.map((item, index) => (
                <SidebarMenuSubItem key={index}>
                  <a href={item.url} className="flex items-center gap-2">
                               <span>{item.title}</span>
                  </a>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}
