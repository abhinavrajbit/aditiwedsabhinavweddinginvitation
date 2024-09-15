import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  joinUsForm: FormGroup;
  formVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.joinUsForm = this.fb.group({
      name: ['', Validators.required],
      attendance: ['', Validators.required],
      joiningDate: ['', Validators.required],
      familyMembers: ['', [Validators.required, Validators.min(1)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  toggleForm() {
    this.formVisible = !this.formVisible;
  }

  onSubmit() {
    if (this.joinUsForm.valid) {
      console.log('Form Submitted:', this.joinUsForm.value);
      // Handle form submission here
    }
  }
}
