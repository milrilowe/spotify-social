import { Button } from '@spotify-social/components'
import { createLazyFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {

    return (
        <Outlet />
    )
}