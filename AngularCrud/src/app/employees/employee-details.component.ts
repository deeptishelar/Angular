import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  id: number;
  constructor(private _router: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _route: Router) { }

  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.employee = this._employeeService.getEmployee(this.id);
    })
    }
  viewNextEmployee() {
    if (this.id < 3) {
      this.id = this.id+1;
      this._route.navigate(['/employee', this.id]);
    }
    else
      this.id = 1;
  }

}
