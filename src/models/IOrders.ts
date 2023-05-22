export interface IOrders {
    productId: string,
    quantity: number,
    totalAmount: number,
    productName: string,
    orderStatus?: string,
    userId?: string,
    name: string,
    createdAt: string,
    completedAT?: string
}