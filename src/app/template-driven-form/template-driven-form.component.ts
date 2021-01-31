import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  model: any;
  isSubmitted = false;
  constructor() {
    this.model = {
      fullName: '',
      email: '',
      phoneNo: '',
      password: '',
      confirmPassword: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.model);
    this.isSubmitted = true;
  }

  goBack(): void {
    this.isSubmitted = false;
  }
}
