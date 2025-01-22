import { Route } from "@/routes/login";
import { api } from "@/utils/trpc";
import { Button } from "@spotify-social/components";

export default function Login() {
    const { redirect } = Route.useSearch()

    const spotifyLogin = api.auth.login.useMutation({
        onSuccess: (data) => {
            sessionStorage.setItem('SPOTIFY_AUTH_STATE_KEY', data.state)
            window.location.href = data.url
        }
    })

    function handleLogin() {
        spotifyLogin.mutate({ redirect })
    }

    return (
        <Button onClick={handleLogin} disabled={spotifyLogin.isLoading}>Login with Spotify</Button>
    )
}