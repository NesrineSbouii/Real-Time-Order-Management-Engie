import { Order } from "./order.model";

export interface Analytics {
    category: string;
    products: Record<string, Order[]>
}