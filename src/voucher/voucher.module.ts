import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { OrderModule } from '../order/order.module';
import { PartnerRevenueResolver } from './partner-revenue.resolver';

@Module({
  imports: [OrderModule],
  providers: [VoucherService, PartnerRevenueResolver],
  exports: [VoucherService],
})
export class VoucherModule {}
