import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formConfig } from '@app/configs/form-config';
import { FormField } from '@app/interfaces/formField';
import { ValidationRules } from '@app/interfaces/validationRules';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './app-dynamic-form.component.html',
  styleUrl: './app-dynamic-form.component.css',
})
export class AppDynamicFormComponent implements OnInit {
  form!: FormGroup;
  formConfig: FormField[] = formConfig;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const group: any = {};
    this.formConfig.forEach((field: FormField) => {
      let control = this.fb.control('', this.mapValidators(field.validations));
      group[field.name] = control;
    });

    this.form = this.fb.group(group);
  }

  mapValidators(validations: ValidationRules) {
    const validators = [];

    if (validations.required) validators.push(Validators.required);
    if (validations.min) validators.push(Validators.min(validations.min));
    if (validations.max) validators.push(Validators.max(validations.max));

    return validators;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted: ', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
