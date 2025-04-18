import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';
import { appSharedModuleImports } from '../../app-shared-module';

export interface InputValidationError {
  name: string;
  errorMessage: string;
  propertyKey?: string;
}

@Component({
  standalone: true,
  selector: 'app-input-validator',
  imports: [...appSharedModuleImports],
  templateUrl: './input-validator.component.html',
})
export class InputValidatorComponent implements OnInit {
  defaultValidationErrors: InputValidationError[] = [
    {
      name: "required",
      errorMessage: "This Field is Required",
    },
    {
      name: "minlength",
      errorMessage: "Please Enter At Least N Character",
      propertyKey: "requiredLength",
    },
    {
      name: "maxlength",
      errorMessage: "Please Enter No More Than N Character",
      propertyKey: "requiredLength",
    },
  ]
  validationErrors = this.defaultValidationErrors;
  @Input() control!: NgModel;
  @Input() controlEl?: HTMLInputElement;
  
  constructor(public readonly renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.controlEl) {
      if (this.control.valueChanges) {
        this.control.valueChanges.subscribe(() => {
          if (this.control.valid && (this.control.dirty || this.control.touched)) {
            this.renderer.removeClass(this.controlEl, "is-invalid");
          }
        })
      }
    }
  }

  getValidationErrorMessage(err: InputValidationError): string {
    if (this.controlEl) {
      this.renderer.addClass(this.controlEl, "is-invalid")
    }

    if (this.control.errors && err.propertyKey) {
      const propertyValue = this.control.errors[err.name][err.propertyKey]
      return !!propertyValue ? 
        err.errorMessage.replace("N", propertyValue) :
        err.errorMessage;
    } else {
      return err.errorMessage; 
    }

  }
}
