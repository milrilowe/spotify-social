import { Auth } from '@/modules'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Auth />
}
