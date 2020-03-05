import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  
  previewPhoto : boolean = false;
  @ViewChild('employeeForm') public createEmployeeForm : NgForm;
  employee : Employee  = {
    id: null,
    fullName : null,
    dateOfBirth : null,
    email : null,
    gender: null,
    phoneNumber : null,
    department:"-11",
    isActive:null,
    photoPath: null,
    contactPreference : null,
    password : null,
    confirmPassword: null
  };

  departments : Department [] = 
  [{id : 1, name : "Help Desk"},
  {id : 2, name : "Payroll"},
  {id : 3, name : "IT"},
  {id : 4, name : "Sales"},
  {id : 5, name : "Finance"},
];
  constructor(private _employeeService : EmployeeService,
              private _router : Router) { }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit(): void {
  }

  saveEmployee () :void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list'])
  }

}
