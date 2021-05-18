import { reduce, isEmpty, map, find } from 'lodash/fp';
import { CombinedData } from '../common/declarations/interfaces';
import { Employee, Order, Voucher } from '../graphql.schema';

export const getTotalVoucherAmount = (grouped: CombinedData[]) =>
  map(
    reduce(
      (acc, it) =>
        isEmpty(acc)
          ? { ...it.employee, voucher_amount: it.voucher.amount }
          : { ...acc, voucher_amount: acc.voucher_amount + it.voucher.amount },
      {},
    ),
    grouped,
  );

export const combineEntitiesByOrder = (
  employees: Employee[],
  vouchers: Voucher[],
  orders: Order[],
): CombinedData[] =>
  map((order) => {
    const employee = find(['id', order.employee_id], employees);
    const voucher = find(['id', order.voucher_id], vouchers);

    return { order, employee, voucher };
  }, orders);
