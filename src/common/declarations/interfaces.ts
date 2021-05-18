import { Employee, Order, Voucher } from '../../graphql.schema';

export interface CombinedData {
  employee: Employee;
  order: Order;
  voucher: Voucher;
}
