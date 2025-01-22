import { router } from "@/main";
import { api, RouterOutputs } from "@/utils/trpc";
import { getQueryKey } from "@trpc/react-query";
import { createContext, ReactNode, useContext, useEffect } from "react";

export interface AuthContext {
    isAuthenticated: boolean;
    spotify_id: string | null;
    user: {
        id: number;
        spotify_id: string;
        display_name: string;
        email: string;
        avatar: string | null;
        country: string | null;
    } | null,
    isLoading: boolean;
    getSession: () => Promise<RouterOutputs['auth']['getSession']>
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const session = api.auth.getSession.useMutation({ mutationKey: getQueryKey(api.auth.getSession) });

    async function getSession() {
        return await session.mutateAsync();
    }

    const value: AuthContext = {
        getSession,
        user: session.data?.user || null,
        isAuthenticated: session.data?.isAuthenticated || false,
        spotify_id: session.data?.spotify_id || null,
        isLoading: session.isLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}