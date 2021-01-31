import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveFormObj: any;
  reactiveForm: any;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveFormObj = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      phoneNo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordConfirm: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.reactiveFormObj);
    this.reactiveForm = this.reactiveFormObj.value;
    console.table(this.reactiveForm);
    this.isSubmitted = true;
  }

  goBack(): void {
    this.isSubmitted = false;
  }
}
