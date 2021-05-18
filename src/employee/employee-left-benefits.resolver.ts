import { groupBy, pipe, filter, values, map, entries } from 'lodash/fp';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { OrderService } from '../order/order.service';
import { VoucherService } from '../voucher/voucher.service';
import {
  combineEntitiesByOrder,
  getTotalVoucherAmount,
} from './employee.utils';

@Resolver('Employee')
export class EmployeeLeftBenefitsResolver {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly orderService: OrderService,
    private readonly voucherService: VoucherService,
  ) {}

  @Query('left_benefits')
  async getLeftBenefits(@Args('date') date: string) {
    const employees = this.employeeService.findAll();
    const vouchers = this.voucherService.findAll();
    const orders = this.orderService.findAllByDate(date);

    const combinedData = combineEntitiesByOrder(employees, vouchers, orders);

    return pipe(
      groupBy('employee.id'),
      values,
      getTotalVoucherAmount,
      filter((it) => Math.abs(it.monthly_budget - it.voucher_amount) >= 10),
      groupBy('company_title'),
      entries,
      map((it) => ({ company: it[0], employees: it[1] })),
    )(combinedData);
  }
}
