import { Injectable } from '@nestjs/common';
import { Voucher } from '../graphql.schema';
import { voucherSeed } from './voucher.seed';

@Injectable()
export class VoucherService {
  private readonly vouchers: Array<Voucher> = voucherSeed;

  findAll(): Voucher[] {
    return this.vouchers;
  }

  findOneById(id: number): Voucher {
    return this.vouchers.find((voucher) => voucher.id === id);
  }
}
