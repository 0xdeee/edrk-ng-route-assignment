import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmPasswordValidator } from '../helpers/password-match.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveFormObj: FormGroup;
  reactiveForm: any;
  isSubmitted = false;
  isFormValid = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveFormObj = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        city: ['', Validators.required],
        phoneNo: ['', [Validators.required, Validators.minLength(10)]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        passwordConfirm: ['', Validators.required],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }

  get f(): any {
    return this.reactiveFormObj.controls;
  }

  onSubmit(): void {
    console.log(this.reactiveFormObj);
    this.isSubmitted = true;
    if (this.reactiveFormObj.invalid) {
      return;
    } else {
      this.isFormValid = this.reactiveFormObj.valid ? true : false;
    }
    this.reactiveForm = this.reactiveFormObj.value;
    console.table(this.reactiveForm);
  }
  onClear(): void {
    this.isSubmitted = false;
    this.reactiveFormObj.reset();
  }
  goBack(): void {
    this.isFormValid = false;
  }
}
