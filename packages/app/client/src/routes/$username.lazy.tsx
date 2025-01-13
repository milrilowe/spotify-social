import { createLazyFileRoute } from '@tanstack/react-router'
import { Profile } from '@/modules'

export const Route = createLazyFileRoute('/$username')({
  component: RouteComponent,
})

function RouteComponent() {
  const username = Route.useParams().username;


  return <Profile username={username} />
}
