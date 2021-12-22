import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE, DATE_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    SOME_ROUTE, VIDEO_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Some from "./pages/Some";
import InfoVideo from "./pages/InfoVideo";
import Calendar from "./pages/Calendar";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: DATE_ROUTE,
        Component: Calendar
    },
    {
        path: SOME_ROUTE,
        Component: Some
    },
    {
        path: VIDEO_ROUTE,
        Component: InfoVideo
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]
