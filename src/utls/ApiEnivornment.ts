export const BASE_URL = "http://192.168.1.3:3000";

interface IApiEnvironment {
    register: string;
    login: string;
}

export const apiEnviornment: IApiEnvironment = {
    register: "/signUp",
    login: "/login",
}
