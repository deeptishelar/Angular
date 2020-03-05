import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import {Employee} from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { DisplayEmployeeComponent } from './display-employee.component';
import { Router } from '@angular/router';
@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  dataFromChild : Employee;
  childComponent : DisplayEmployeeComponent;
  @Input() employees : Employee[]; 
  
  constructor(private _employeeService : EmployeeService,
     private _router: Router) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }
  
  onClick(employeeId: number) {
    this._router.navigate(['/employee', employeeId]);
  }
}
