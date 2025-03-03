"use client";

import { NavMain } from "@/components/layouts/dash/nav-main";
import { NavUser } from "@/components/layouts/dash/nav-user";
import { TeamSwitcher } from "@/components/layouts/dash/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Map,
  Command,
  Frame,
  GalleryVerticalEnd,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { useRouter } from "next/navigation";

const data = {
  user: {
    name: "Aaron Paredes Cabrera",
    email: "aaron@expedium.com",
    avatar: "/logo.png",
  },
  teams: [
    {
      name: "Estudio Jurídico Hidalgo Vidal",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Estudio Jurídico Ochoa Maldonado.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Estudio Jurídico Paredes Romero",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Expedientes",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Bitácoras",
          url: "#",
        },
        {
          title: "Auditoría",
          url: "#",
        },
      ],
    },
    {
      title: "Sami BOT",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentación",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introducción",
          url: "#",
        },
        {
          title: "Empecemos",
          url: "#",
        },
        {
          title: "Tutoriales",
          url: "#",
        },
        {
          title: "Retos",
          url: "#",
        },
      ],
    },
    {
      title: "Configuración",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Expedientes",
          url: "#",
        },
        {
          title: "Equipos",
          url: "#",
        },
        {
          title: "Planes",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const onLogOut = () => {
    router.push("/iniciar-sesion");
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          {/* <NavProjects projects={data.projects} /> */}
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} onLogOut={onLogOut} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      {children}
    </SidebarProvider>
  );
};

export default DashLayout;
