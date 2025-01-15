import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarProvider } from '@spotify-social/components';
import { AppSidebar, ThemeProvider } from '@/components';

export const Route = createRootRoute({
    component: () => (
        <>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <SidebarProvider>
                    <AppSidebar />
                    <Outlet />
                </SidebarProvider>
            </ThemeProvider>
            <TanStackRouterDevtools />
        </>
    ),
})