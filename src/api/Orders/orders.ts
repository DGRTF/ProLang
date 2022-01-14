import { CreateOrderModel } from "../../components/OrderForm/OrderForm";
import { Orders } from "../generate/Orders";
import { queryProvider } from "../queryProider";

export async function createOrder(order: CreateOrderModel): Promise<void> {
    await queryProvider(Orders).ordersCreateOrder({...order});
}