import { Query, Resolver } from '@nestjs/graphql';
import { OrderService } from '../order/order.service';
import { VoucherService } from './voucher.service';
import {
  getPartnerRevenue,
  calcRevenuePerOrderByVoucher,
} from './voucher.utils';

@Resolver('Voucher')
export class PartnerRevenueResolver {
  constructor(
    private readonly orderService: OrderService,
    private readonly voucherService: VoucherService,
  ) {}

  @Query('partner_revenue')
  async getPartnerRevenue() {
    const vouchers = this.voucherService.findAll();
    const orders = this.orderService.findAll();

    const revenueByVoucher = calcRevenuePerOrderByVoucher(orders, vouchers);

    return getPartnerRevenue(vouchers, revenueByVoucher);
  }
}
