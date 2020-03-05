import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService
{
    employees : Employee [] =
    [{
        id: 1,
        fullName: 'Mark',
        gender: 'Male',
        contactPreference: 'Email',
        email: 'mark@pragimtech.com',
        dateOfBirth: new Date('10/25/1988'),
        department: '2',
        isActive: true,
        photoPath: '/assets/images/mark1.jpg',
        password : 'a',
        confirmPassword : 'a'
      },
      {
        id: 2,
        fullName: 'Mary',
        gender: 'Female',
        contactPreference: 'Phone',
        phoneNumber: 2345978640,
        dateOfBirth: new Date('11/20/1979'),
        department: '1',
        isActive: true,
        photoPath: '/assets/images/mary1.jpg',
        password : 'a',
        confirmPassword : 'a'
      },
      {
        id: 3,
        fullName: 'John',
        gender: 'Male',
        contactPreference: 'Phone',
        phoneNumber: 5432978640,
        dateOfBirth: new Date('3/25/1976'),
        department: '1',
        isActive: false,
        photoPath: '/assets/images/john1.jpg',
        password : 'a',
        confirmPassword : 'a'
      }];

      getEmployees() : Employee[] {
          return this.employees;
      }
      getEmployee(id : number) {
        return this.employees.find(e=> e.id === id);
      }

      save(employee : Employee)  {
          this.employees.push(employee);
      }
}