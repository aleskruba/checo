import { ChevronDown, ChevronRight } from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SidebarMenuSectionProps = {
  title: string;
  content: { title: string;  url: string }[];

  closeSheet: () => void;
};

const SidebarMenuSection = ({ title, content, closeSheet }: SidebarMenuSectionProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

 

  const handleToggle = () => setIsOpen((prev) => !prev); // Toggle the collapsible state

  return (
    <SidebarMenuItem>
   <Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger asChild>
    <SidebarMenuButton>
      <span className="flex gap-2 items-center justify-between w-full">
        <h1 className="text-base">{title}</h1>
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
      {content.map((item, index) => {
        const isActive = new URL(item.url).pathname === pathname;
        return (
          <SidebarMenuSubItem key={index}>
            <Link
              href={item.url}
              className={`flex items-center gap-2 hover:text-blue-500 ${
                isActive ? "text-blue-500 font-bold" : ""
              }`}
              onClick={closeSheet}
            >
              <span>{item.title}</span>
              
          
            </Link>
          </SidebarMenuSubItem>
        );
      })}
    </SidebarMenuSub>
  </CollapsibleContent>
</Collapsible>
    </SidebarMenuItem>
  );
};

export default SidebarMenuSection;
