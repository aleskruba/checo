import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
  title: "Dialogy / Diálogos ",
  content: [
    { title: "Presentación", url: `${BASE_URL}/dialog/1` },
    { title: "Diálogo corto", url: `${BASE_URL}/dialog/2` },
    { title: "En el café", url: `${BASE_URL}/dialog/3` },
    { title: "En la tienda", url: `${BASE_URL}/dialog/4` },
    { title: "¿Dónde está la estación ...", url: `${BASE_URL}/dialog/5` },
    { title: "En el aeropuerto", url: `${BASE_URL}/dialog/6` },
  ],
};

export function DialogComponent({ closeSheet }: { closeSheet: () => void }) {
  return (
    <SidebarMenu>
      {/* Use SidebarMenuSection component for each section */}
      <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
    </SidebarMenu>
  );
}
