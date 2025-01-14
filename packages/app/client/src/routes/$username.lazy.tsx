import { createLazyFileRoute } from '@tanstack/react-router'
import { Profile } from '@/modules'

export const Route = createLazyFileRoute('/$username')({
  component: RouteComponent,
})

function RouteComponent() {
  const username = Route.useParams().username;


  return (
    <div className="px-2 w-full flex justify-center my-8">
      <Profile username={username} />
    </div>
  )
}
