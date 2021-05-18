import { Voucher } from '../graphql.schema';

export const voucherSeed: Voucher[] = [
  {
    id: 1,
    amount: 10,
    partner_id: 1,
    partner_name: 'Atlantik Inc.',
  },
  {
    id: 2,
    amount: 20,
    partner_id: 1,
    partner_name: 'Atlantik Inc.',
  },
  {
    id: 3,
    amount: 15,
    partner_id: 2,
    partner_name: 'Pacific Inc.',
  },
  {
    id: 4,
    amount: 30,
    partner_id: 2,
    partner_name: 'Pacific Inc.',
  },
  {
    id: 5,
    amount: 22,
    partner_id: 2,
    partner_name: 'Pacific Inc.',
  },
  {
    id: 6,
    amount: 44,
    partner_id: 2,
    partner_name: 'Pacific Inc.',
  },
];
