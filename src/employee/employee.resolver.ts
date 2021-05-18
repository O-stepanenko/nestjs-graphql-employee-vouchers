import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Employee } from '../graphql.schema';
import { EmployeeService } from './employee.service';

@Resolver('Employee')
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query('employees')
  async getEmployees() {
    return this.employeeService.findAll();
  }

  @Query('employee')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Employee> {
    return this.employeeService.findOneById(id);
  }
}
