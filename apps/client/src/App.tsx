import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "./context/auth";
import { router } from "./main";

export default function App() {
    const auth = useAuth();

    return (
        <RouterProvider router={router} context={{ auth }} />
    )

}