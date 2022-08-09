import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    fName: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.warn(this.form.getRawValue());

  }

  get f() {
    return this.form.controls;
  }

}
