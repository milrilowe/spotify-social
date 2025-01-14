import { Home, Inbox, Search, Settings } from "@spotify-social/icons"

import {
    Avatar,
    AvatarImage,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@spotify-social/components"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Messages",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title: "Profile",
        url: "#",
        icon: () => (
            <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
        )
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup className="flex gap-8">
                    <SidebarGroupLabel>Spotify Social</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="flex gap-2">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="py-6">
                                        <a href={item.url}>
                                            <div className="h-8 w-8 flex items-center">
                                                <item.icon />
                                            </div>
                                            <span className="text-xl">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}