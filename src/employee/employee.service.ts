import { Injectable } from '@nestjs/common';
import { Employee } from '../graphql.schema';
import { employeeSeed } from './employee.seed';

@Injectable()
export class EmployeeService {
  private readonly employees: Array<Employee> = employeeSeed;

  findAll(): Employee[] {
    return this.employees;
  }

  findOneById(id: number): Employee {
    return this.employees.find((employee) => employee.id === id);
  }
}
