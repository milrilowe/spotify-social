import { Route } from "@/routes/callback";
import { api } from "@/utils/trpc";
import { useEffect, useRef } from "react";
import { router } from "@/main";
import { useAuth } from "@/context/auth";

export default function Callback() {

    const { getSession } = useAuth()
    const { code, state } = Route.useSearch()
    const storedState = window.sessionStorage.getItem('SPOTIFY_AUTH_STATE_KEY')
    const hasCalledMutation = useRef(false);

    const callbackMutation = api.auth.callback.useMutation({
        onSuccess: async () => {
            const { redirect } = await JSON.parse(decodeURIComponent(storedState!))
            await getSession()
            router.navigate({ to: redirect || '/' })
            sessionStorage.removeItem('SPOTIFY_AUTH_STATE_KEY')
        }
    });

    useEffect(() => {
        if (code &&
            state &&
            state === storedState &&
            !callbackMutation.isLoading &&
            !hasCalledMutation.current
        ) {
            hasCalledMutation.current = true;
            callbackMutation.mutate({ code, state });
        }
    }, [code, state, storedState, callbackMutation]);

    if (callbackMutation.isLoading) {
        return <div>Logging you in...</div>;
    }

    if (callbackMutation.isError) {

        return <div>Error logging in: {callbackMutation.error.message}</div>;
    }

    return <div></div>;
}