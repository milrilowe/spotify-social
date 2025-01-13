import { Button } from '@spotify-social/components'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
    component: About,
})

function About() {
    return (
        <div className="p-2">
            <Button variant="destructive">Button</Button>
        </div>
    )
}