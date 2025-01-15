import { Route } from "@/routes/callback";
import { api } from "@/utils/trpc";
import { useEffect } from "react";
import { router } from "@/main";

export default function Callback() {

    const { code, state } = Route.useSearch()
    const storedState = window.sessionStorage.getItem('SPOTIFY_AUTH_STATE_KEY')

    const callbackMutation = api.auth.callback.useMutation({
        onSuccess: () => {
            sessionStorage.removeItem('SPOTIFY_AUTH_STATE_KEY')
            router.navigate({ to: '/' })
        }
    });

    useEffect(() => {
        if (code && state && state === storedState) {
            callbackMutation.mutate({ code, state })
        }
    }, [code, state])

    if (callbackMutation.isPending) {
        return <div>Logging you in...</div>;
    }

    if (callbackMutation.isError) {
        return <div>Error logging in</div>;
    }

    return <div>Hello "/callback"!</div>;
}