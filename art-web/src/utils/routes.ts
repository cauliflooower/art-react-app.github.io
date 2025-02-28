import {PROFILE_ROUTE, HOME_ROUTE} from "./consts";
import Profile from "../pages/Profile/Profile"
import Home from "../pages/Home/Home"

export const authRoutes = [
    {
        path: PROFILE_ROUTE + '/:name',
        Component: Profile
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PROFILE_ROUTE + '/:name',
        Component: Profile
    },
]