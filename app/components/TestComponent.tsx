import {SidebarMenu,} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
// Menu items.

const items = {
  title: "Testy / Tests",
  content: [
    {
      title: "Test 1",
        url: `${BASE_URL}/test/1` 

    },
    {
        title: "Test 2",
        url: `${BASE_URL}/test/2` 
     
    },
    {
        title: "Test 3",
        url: `${BASE_URL}/test/3` 

    },
    {
        title: "Test 4",
        url: `${BASE_URL}/test/4` 

    },
    {
        title: "Test 5",
        url: `${BASE_URL}/test/5` 

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