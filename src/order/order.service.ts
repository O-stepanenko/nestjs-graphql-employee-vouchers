import { Injectable } from '@nestjs/common';
import { Order } from '../graphql.schema';
import { orderSeed } from './order.seed';

@Injectable()
export class OrderService {
  private readonly orders: Array<Order> = orderSeed;

  findAll(): Order[] {
    return this.orders;
  }

  findOneById(id: number): Order {
    return this.orders.find((order) => order.id === id);
  }

  findAllByDate(date: string): Order[] {
    return this.orders.filter(
      (order) => order.order_date.getTime() === new Date(date).getTime(),
    );
  }
}
