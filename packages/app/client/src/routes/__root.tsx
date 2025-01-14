import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarProvider } from '@spotify-social/components';
import { AppSidebar } from '@/components';

export const Route = createRootRoute({
    component: () => (
        <>
            <SidebarProvider>
                <AppSidebar />
                <Outlet />
            </SidebarProvider>
            <TanStackRouterDevtools />
        </>
    ),
})