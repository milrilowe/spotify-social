import { api } from "@/utils/trpc";
import { Button } from "@spotify-social/components";

export default function Login() {

    const spotifyLogin = api.auth.login.useQuery()

    function handleLogin() {
        if (spotifyLogin.data) {
            sessionStorage.setItem('SPOTIFY_AUTH_STATE_KEY', spotifyLogin.data.state)
            window.location.href = spotifyLogin.data.url
        }
    }

    return (
        <Button onClick={handleLogin} disabled={spotifyLogin.isLoading}>Login with Spotify</Button>
    )
}