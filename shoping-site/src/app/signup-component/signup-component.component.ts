import { Component } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent {
  email: string='';
  password: string='';
  username: string='';

  constructor(private toastr: ToastrService) {}

  signup() {
    if (this.email && this.password && this.username) {
      axios.post(`http://localhost:8080/user/signup`)
      .then(response => {
        console.log(response.data);
        this.toastr.success('Login successful!', 'Success');
      })
      .catch(error => {
        console.log(error);
        this.toastr.error(error, 'Login failed!');
      });
    }
  }
}
