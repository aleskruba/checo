// Server Component - DashboardLinks

import { DashboardLinksClient } from "./DashboardLinksClient";



export async function DashboardLinks() {
  // Fetch translations on the server side

  // Define the dashboard links with correct icon components
  const dashboardLinks = [
    {
      id: 0,
      name: 'first',
      href: "/dashboard" as "/dashboard", // Cast href to the correct union type
      icon: "HomeIcon",

    },
    {
      id: 1,
      name: 'first',
      href: "/dashboard/myskills" as "/dashboard/myskills", // Cast href to the correct union type
      icon: "Code",
   
    },
    {
      id: 2,
      name: 'first',
      href: "/dashboard/projects" as "/dashboard/projects", // Cast href to the correct union type
      icon: "Files",
   
    },
    {
      id: 3,
      name: 'first',
      href: "/dashboard/certificates" as "/dashboard/certificates", // Cast href to the correct union type
      icon: "FileUser",
    },
    {
      id: 4,
      name: 'first',
      href: "/dashboard/contact" as "/dashboard/contact", // Cast href to the correct union type
      icon: "User2",
    },
  ];

  // Pass the translations and links to the client component
  return (
    <div>
      <DashboardLinksClient dashboardLinks={dashboardLinks} />
    </div>
  );
}