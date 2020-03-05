import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-employee-display',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee : Employee;

  

  constructor() { }

  ngOnInit(): void {
  }

  getHeader() : string
  {
    console.log("clicked");
    return this.employee.fullName;
  }
}
