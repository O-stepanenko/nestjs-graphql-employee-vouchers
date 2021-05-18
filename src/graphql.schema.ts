
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    employees(): Employee[] | Promise<Employee[]>;
    employee(id: string): Employee | Promise<Employee>;
    left_benefits(date: string): LeftBenefits[] | Promise<LeftBenefits[]>;
    vouchers(): Voucher[] | Promise<Voucher[]>;
    voucher(id: string): Voucher | Promise<Voucher>;
    partner_revenue(): PartnerRevenue[] | Promise<PartnerRevenue[]>;
}

export interface Employee {
    id?: number;
    name?: string;
    monthly_budget?: number;
    company_id?: number;
    company_title?: string;
}

export interface LeftBenefits {
    company?: string;
    employees?: Employee[];
}

export interface Order {
    id?: number;
    order_date?: Date;
    employee_id?: number;
    voucher_id?: number;
}

export interface Voucher {
    id?: number;
    amount?: number;
    partner_id?: number;
    partner_name?: string;
}

export interface PartnerRevenue {
    id?: number;
    name?: string;
    total_revenue?: number;
}
