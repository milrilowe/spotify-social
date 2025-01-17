import { Route } from "@/routes/callback";
import { api } from "@/utils/trpc";
import { useEffect, useRef } from "react";
import { router } from "@/main";

export default function Callback() {

    const { code, state } = Route.useSearch()
    const storedState = window.sessionStorage.getItem('SPOTIFY_AUTH_STATE_KEY')
    const hasCalledMutation = useRef(false);

    const callbackMutation = api.auth.callback.useMutation({
        onSuccess: () => {
            sessionStorage.removeItem('SPOTIFY_AUTH_STATE_KEY')
            router.navigate({ to: '/' })
        }
    });

    useEffect(() => {
        if (code &&
            state &&
            state === storedState &&
            !callbackMutation.isPending &&
            !hasCalledMutation.current
        ) {
            hasCalledMutation.current = true;
            callbackMutation.mutate({ code, state });
        }
    }, [code, state, storedState, callbackMutation]);

    if (callbackMutation.isPending) {
        return <div>Logging you in...</div>;
    }

    if (callbackMutation.isError) {

        return <div>Error logging in: {callbackMutation.error.message}</div>;
    }

    return <div>Hello "/callback"!</div>;
}