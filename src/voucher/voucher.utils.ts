import {
  groupBy,
  find,
  pipe,
  map,
  entries,
  get,
  multiply,
  reduce,
  findIndex,
} from 'lodash/fp';
import { Order, PartnerRevenue, Voucher } from '../graphql.schema';

interface RevenuePerOrderByVoucher {
  voucher_id: number;
  revenue_per_order: number;
}

const calcRevenuePerOrder = (
  groupedByVoucherId: [string, Order[]],
  vouchers: Voucher[],
) =>
  pipe(
    find(['id', parseInt(groupedByVoucherId[0])]),
    get('amount'),
    multiply(groupedByVoucherId[1].length),
  )(vouchers);

export const calcRevenuePerOrderByVoucher = (
  orders: Order[],
  vouchers: Voucher[],
): RevenuePerOrderByVoucher[] =>
  pipe(
    groupBy('voucher_id'),
    entries,
    map((it) => ({
      voucher_id: parseInt(it[0]),
      revenue_per_order: calcRevenuePerOrder(it, vouchers),
    })),
  )(orders);

const buildNewPartnerRevenue = (
  voucher: Voucher,
  order_amount: RevenuePerOrderByVoucher,
) => ({
  id: voucher.partner_id,
  name: voucher.partner_name,
  total_revenue: order_amount.revenue_per_order,
});

const buildPartnerRevenue = (
  partner: PartnerRevenue,
  order_amount: RevenuePerOrderByVoucher,
) => ({
  ...partner,
  total_revenue: partner.total_revenue + order_amount.revenue_per_order,
});

export const getPartnerRevenue = (
  vouchers: Voucher[],
  orders_amount_list: RevenuePerOrderByVoucher[],
) =>
  reduce(
    (acc, order_amount) => {
      const voucher = find(['id', order_amount.voucher_id], vouchers);
      const partnerIndex = findIndex(['id', voucher.partner_id], acc);

      if (partnerIndex < 0) {
        return [...acc, buildNewPartnerRevenue(voucher, order_amount)];
      }

      acc[partnerIndex] = buildPartnerRevenue(acc[partnerIndex], order_amount);

      return acc;
    },
    [],
    orders_amount_list,
  );
