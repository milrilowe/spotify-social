import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { zodValidator } from '@tanstack/zod-adapter'
import { Callback } from '@/modules/Auth/pages'

const authCallbackSearchSchema = z.object({
    code: z.string(),
    state: z.string(),
})

export const Route = createFileRoute('/callback')({
    validateSearch: zodValidator(authCallbackSearchSchema),
    component: RouteComponent,
})

function RouteComponent() {
    return <Callback />
}
