import { Home, Menu, Moon, Search, Settings, SquarePlus, Sun } from "@spotify-social/icons"

import {
    Avatar,
    AvatarImage,
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    Switch,
} from "@spotify-social/components"
import { useTheme } from "./theme-provider"
import { CreateAPost } from "../CreateAPost"
import { useAuth } from "@/context/auth"
import { Link } from "@tanstack/react-router"

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
    const { theme, setTheme } = useTheme();
    const { user, spotify_id } = useAuth()

    function handleThemeChange() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Sidebar className="" >
            <SidebarHeader>
                <Link to={'/$username'} params={{ username: spotify_id ?? '' }}>
                    <Button variant={'ghost'} className={'justify-start py-1 h-fit px-2'}>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.avatar ?? undefined} />
                        </Avatar>
                        <span>{user?.display_name}</span>
                    </Button>
                </Link>
            </SidebarHeader>
            <SidebarContent>

                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link to="/feed">
                                <Button variant={'ghost'} className="w-full justify-start px-2">
                                    <Home />
                                    <span>Home</span>
                                </Button>
                            </Link>
                        </SidebarMenuButton>

                    </SidebarMenuItem>
                    <SidebarMenuItem>

                        <SidebarMenuButton asChild>
                            <Link to="/feed">
                                <Button variant={'ghost'} className="w-full justify-start px-2">
                                    <Search />
                                    <span>Search</span>
                                </Button>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

            </SidebarContent>
            <SidebarFooter className="pb-5">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <Settings />
                                    <span>Settings</span>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className=""
                            >

                                <DropdownMenuItem
                                    className=" flex justify-between items-center"
                                    onSelect={(e) => e.preventDefault()}
                                >
                                    <div className="flex items-center gap-2">
                                        {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                                        <span>Theme</span>
                                    </div>
                                    <Switch

                                        checked={theme === "dark"}
                                        onCheckedChange={handleThemeChange}
                                    />
                                </DropdownMenuItem>


                                <DropdownMenuItem className="">
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