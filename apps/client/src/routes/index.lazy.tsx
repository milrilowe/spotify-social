import { Button } from '@spotify-social/components'
import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {

    return (
        <div>
            <h2>Welcome to social spotify</h2>
            <Link to='/feed'><Button>Go to feed</Button></Link>
        </div>
    )
}