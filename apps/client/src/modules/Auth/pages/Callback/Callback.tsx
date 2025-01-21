import { Route } from "@/routes/callback";
import { api } from "@/utils/trpc";
import { useEffect, useRef } from "react";
import { router } from "@/main";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useAuth } from "@/context/auth";

export default function Callback() {

    const { refetchSession } = useAuth()
    const { code, state } = Route.useSearch()
    const storedState = window.sessionStorage.getItem('SPOTIFY_AUTH_STATE_KEY')
    const hasCalledMutation = useRef(false);

    const callbackMutation = api.auth.callback.useMutation({
        onSuccess: async () => {
            const { redirect } = await JSON.parse(decodeURIComponent(storedState!))
            await refetchSession
            // router.navigate({ to: redirect || '/' })
            sessionStorage.removeItem('SPOTIFY_AUTH_STATE_KEY')
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

    return <div></div>;
}