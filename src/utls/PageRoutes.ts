interface IPageRoutes {
    home: string,
    login: string,
    signUp: string,
    info: string,
    admin: string,
    adminOrder: string,
    adminProduct: string
}

export const PageRoutes: IPageRoutes = {
    home: "/",
    login: "/login",
    signUp: "/sign-up",
    info: "/info",
    admin: "/admin/sales",
    adminOrder: "/admin/orders",
    adminProduct: "/admin/productInfo"
} 