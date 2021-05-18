import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { DateScalar } from '../common/scalars/date.scalar';

@Module({
  providers: [OrderService, DateScalar],
  exports: [OrderService],
})
export class OrderModule {}
