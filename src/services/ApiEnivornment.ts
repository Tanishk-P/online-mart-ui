export const BASE_URL = "http://192.168.1.2:3000";

interface IApiEnvironment {
    register: string;
    login: string;
    getUserDetails: string;
}

export const apiEnviornment: IApiEnvironment = {
    register: "/signup",
    login: "/login",
    getUserDetails: "/user/getUserDetails",
}
