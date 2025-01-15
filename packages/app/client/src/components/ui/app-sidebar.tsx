import { Home, Menu, Moon, Search, SquarePlus, Sun } from "@spotify-social/icons"

import {
    Avatar,
    AvatarImage,
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    Switch,
} from "@spotify-social/components"
import { useState } from "react"
import { useTheme } from "./theme-provider"
import { CreateAPost } from "../CreateAPost"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Search",
        url: "/search",
        icon: Search,
    },
    {
        title: "Profile",
        url: "/profile",
        icon: () => (
            <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
        )
    }
]

export function AppSidebar() {
    const [isAppearanceExpanded, setIsAppearanceExpanded] = useState(false)
    const { theme, setTheme } = useTheme();

    function handleThemeChange() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

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

                            <SidebarMenuItem>

                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="py-6">
                                    <div className="h-8 w-8 flex items-center">
                                        <Menu size={24} />
                                    </div>
                                    <span className="text-xl">More</span>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem
                                    className="py-4"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setIsAppearanceExpanded(!isAppearanceExpanded)
                                    }}
                                >
                                    {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
                                    <span>Switch appearance</span>
                                </DropdownMenuItem>

                                {isAppearanceExpanded && (
                                    <div className="border-t border-gray-200 dark:border-gray-800">
                                        <DropdownMenuItem
                                            className="py-4 pl-12 flex justify-between items-center"
                                            onSelect={(e) => e.preventDefault()}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Moon className="mr-2" size={20} />
                                                <span>Dark mode</span>
                                            </div>
                                            <Switch
                                                checked={theme === "dark"}
                                                onCheckedChange={handleThemeChange}
                                            />
                                        </DropdownMenuItem>
                                    </div>
                                )}

                                <DropdownMenuItem className="py-4">
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}