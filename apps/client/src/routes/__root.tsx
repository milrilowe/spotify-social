import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarProvider } from '@spotify-social/components';
import { AppSidebar, ThemeProvider } from '@/components';
import type { AuthContext } from '@/context/auth';
import { QueryClient } from '@tanstack/react-query';

export interface RouterContext {
    auth: AuthContext
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()(
    {

        component: () => (
            <>
                <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <SidebarProvider>
                        <Outlet />
                    </SidebarProvider>
                </ThemeProvider>
                <TanStackRouterDevtools />
            </>
        ),
    })