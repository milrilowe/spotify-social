import { api } from "@/utils/trpc";
import { createContext, ReactNode, useContext } from "react";

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
    } | null
    refetchSession: () => void
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const session = api.auth.getSession.useQuery();

    async function refetchSession() {
        await session.refetch();
    }

    const value: AuthContext = {
        refetchSession,
        user: session.data?.user || null,
        isAuthenticated: session.data?.isAuthenticated || false,
        spotify_id: session.data?.spotify_id || null
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