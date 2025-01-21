import { Auth } from '@/modules'
import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'

const loginSearchSchema = z.object({
    redirect: z.string()
})

export const Route = createFileRoute('/login')({
    validateSearch: zodValidator(loginSearchSchema),
    component: RouteComponent,
})

function RouteComponent() {
    return <Auth />
}
