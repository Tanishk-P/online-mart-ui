export interface ICustomResponse<T> {
    success: boolean;
    data: T;
    error: any
}