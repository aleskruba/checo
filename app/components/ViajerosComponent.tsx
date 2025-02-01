import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
  title: "Checo para viajeros",
  content: [
    { title: "Frases básicas I", url: `${BASE_URL}/viajeros/1` },
    { title: "Frases básicas II", url: `${BASE_URL}/viajeros/2` },
    { title: 'Frases en el restaurante"', url: `${BASE_URL}/viajeros/3` },

    
  ],
};

function ViajerosComponent({ closeSheet }: { closeSheet: () => void }) {
  return (
    <SidebarMenu>
       <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
    </SidebarMenu>
  )
}

export default ViajerosComponent