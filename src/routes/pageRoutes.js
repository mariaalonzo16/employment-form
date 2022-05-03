import { Application } from "../pages/Application";
import { Confirmation } from "../pages/Confirmation";
import { Home } from "../pages/Home";
import { OpenRoles } from "../pages/OpenRoles";

export const pageRoutes = [
    {
        name: "Home",
        path: "/",
        element: <Home />
    },

    {
        name: "Open Roles",
        path: "/open-roles",
        element: <OpenRoles />
    },
    {
        name: "Application",
        path: "/application",
        element: <Application />
    },
    {
        name: "Confirmation",
        path: "/confirmation",
        element: <Confirmation />
    },
]
