import {SidebarMenu,} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
// Menu items.

const items = {
  title: "Testy / Tests",
  content: [
    {
      title: "Quiz para principiantes 1",
        url: `${BASE_URL}/test/1` 

    },
    {
        title: "Quiz para principiantes 2",
        url: `${BASE_URL}/test/2` 
     
    },
    {
      title: "Quiz para principiantes 3",
        url: `${BASE_URL}/test/3` 

    },
    {
      title: "Quiz para principiantes 4",
        url: `${BASE_URL}/test/4` 

    },
    {
      title: "Quiz para principiantes 5",
        url: `${BASE_URL}/test/5` 

    },
    {
      title: "Quiz para principiantes 6",
        url: `${BASE_URL}/test/6` 

    },
  ],
};export function TestComponent({ closeSheet }: { closeSheet: () => void }) {

  return (
    <SidebarMenu>
      {/* Use SidebarMenuSection component for each section */}
      <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
    </SidebarMenu>
  );
}