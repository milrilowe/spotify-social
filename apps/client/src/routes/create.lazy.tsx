import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/create"!</div>
}
