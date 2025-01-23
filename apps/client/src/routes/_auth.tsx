import { AppSidebar } from '@/components'
import { useAuth } from '@/context/auth'
import { UserProvider } from '@/context/user'
import { createFileRoute, Navigate, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
    loader: async ({ context, location }) => {
        const session = await context.auth.getSession()

        if (!session.isAuthenticated) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.pathname
                }
            })
        }
    },
    component: () => {

        return (
            <UserProvider>
                <main className=' mx-auto'>
                    <div className=' flex max-w-5xl justify-center relative'>
                        <AppSidebar />
                        <div className="w-full p-2 flex justify-center">
                            <Outlet />
                        </div>
                    </div>
                </main >
            </UserProvider>
        )
    }
})


