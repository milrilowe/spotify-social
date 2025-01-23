import { api, RouterOutputs } from "@/utils/trpc";
import { createContext, ReactNode, useContext } from "react";
import { useAuth } from "./auth";

export interface UserContext {
    user: RouterOutputs['user']['me']
}

const UserContext = createContext<UserContext | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuth();
    const user = api.user.me.useQuery(undefined, { enabled: isAuthenticated })

    const value: UserContext = {
        user: user.data
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within an UserProvider')
    }
    return context
}