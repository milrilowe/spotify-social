import { AppSidebar } from '@/components'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
    beforeLoad: ({ context, location }) => {
        if (!context.auth.isAuthenticated) {
            throw redirect({
                to: '/login',
                search: {
                    redirect: location.pathname
                }
            })
        }
    },
    component: () => {

        return (
            <main className=' mx-auto'>
                <div className=' flex max-w-5xl justify-center relative'>
                    <AppSidebar />
                    <div className="w-full p-2 flex justify-center">
                        <Outlet />
                    </div>
                </div>
            </main >
        )
    }
})


