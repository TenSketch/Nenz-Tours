import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add FormsModule in imports
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = ''; // Define the errorMessage property

  // Add a register method
  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
    } else {
      this.errorMessage = ''; // Clear the error message if validation passes
      console.log('User registered:', this.name, this.email);
    }
  }
}
