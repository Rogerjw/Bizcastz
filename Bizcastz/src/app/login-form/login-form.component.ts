import { Component } from '@angular/core';
import { Router } from '@angular/router';
import DashboardData from '../../assets/DashboardData.json';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})



export class LoginFormComponent {
  LoginData = DashboardData.Login; 
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) { }
  
  login() {
    for (let user of this.LoginData) {
      if (user.username === this.username && user.password === this.password) {
        // Redirect the user to the dashboard page
        this.router.navigate(['/dashboard']);
        return;
      }
    }
    alert('Invalid username or password')
    this.username = this.password = '';
  }
}






