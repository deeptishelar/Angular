import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {

    canDeactivate(component : CreateEmployeeComponent) : boolean
    {
        if(component.createEmployeeForm.dirty)
        {
            confirm("Are you sure?");
        }
        return true;
    }
}