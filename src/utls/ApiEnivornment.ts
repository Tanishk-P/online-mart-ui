export const BASE_URL = "http://192.168.1.4:3000";

interface IApiEnvironment {
    register: string;
    login: string;
}

export const apiEnviornment: IApiEnvironment = {
    register: "/signup",
    login: "/login",
}
