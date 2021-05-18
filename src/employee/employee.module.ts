import { Module } from '@nestjs/common';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeLeftBenefitsResolver } from './employee-left-benefits.resolver';
import { EmployeeService } from './employee.service';
import { OrderModule } from '../order/order.module';
import { VoucherModule } from '../voucher/voucher.module';

@Module({
  imports: [OrderModule, VoucherModule],
  providers: [EmployeeService, EmployeeResolver, EmployeeLeftBenefitsResolver],
})
export class EmployeeModule {}
