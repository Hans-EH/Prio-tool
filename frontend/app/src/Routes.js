
/**
 *  ROUTES.JS contains all the project
 *  routes, so it is easy to update or add 
 *  new routes to the application.
 */


// Route Components
import ActivityLogPage from "./components/ActivityLogPage/ActivityLogPage";
import OverviewPage from "./components/OverviewPage/OverviewPage";
import PageLogin from "./components/PageLogin/PageLogin";
import PageLogout from "./components/PageLogout/PageLogout";
import PageRegister from "./components/PageRegister/PageRegister";
import ManagerPage from "./components/ManagerPage/ManagerPage.js";
import SettingsPage from "./components/SettingsPage/SettingsPage.js";
import ProductSearchPage from "./components/ProductSearchPage/ProductSearchPage";
import RepairListPage from "./components/RepairListPage/RepairListPage";
import RepairDetailPage from "./components/RepairDetailPage/RepairDetailPage";
import UserSettingsPage from "./components/UserSettingsPage/UserSettingsPage";
import ProductAddPage from "./components/ProductAddPage/ProductAddPage";
import WriteoffListPage from "./components/WriteoffListPage/WriteoffListPage";
import WriteoffDetailPage from "./components/WriteoffDetailPage/WriteoffDetailPage";
import ProductDetailPage from "./components/ProductDetailPage/ProductDetailPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Updating from  "./components/ManagerPage/Updating";


export const Routes = [{
    path: "/login",
    exact: true,
    component: PageLogin
}, {
    path: "/register",
    exact: true,
    component: PageRegister
}, {
    path: "/error",
    exact: true,
    component: ErrorPage
}];


export const AuthRoutes = [{
    path: "/",
    exact: true,
    component: OverviewPage
}, {
    path: "/products",
    exact: true,
    component: ProductSearchPage
}, {
    path: "/products/add",
    exact: true,
    component: ProductAddPage
}, {
    path:"/products/:id",
    exact: false,
    component: ProductDetailPage
}, {
    path: "/repairs",
    exact: true,
    component: RepairListPage
}, {
    path: "/repairs/:id",
    exact: false,
    component: RepairDetailPage
}, {
    path: "/activity/:id",
    exact: false,
    component: ActivityLogPage
}, {
    path: "/settings/:id",
    exact: false,
    component: UserSettingsPage
}, {
    path: "/writeoffs/",
    exact: true,
    component: WriteoffListPage
}, {
    path: "/writeoffs/:id",
    exact: true,
    component: WriteoffDetailPage
}, {
    path: "/admin",
    exact: false,
    component: ManagerPage
}, 
{
    path: "/updating",
    exact: false,
    component: Updating
},
{
    path: "/settings",
    exact: false,
    component: SettingsPage
}, {
    path: "/logout",
    exact: true,
    component: PageLogout
}];