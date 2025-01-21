import { Auth } from '@/modules'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

const loginSearchSchema = z.object({
  redirect: z.string(),
})

function RouteComponent() {
  return <Auth />
}
