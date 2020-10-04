import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEndpointService } from 'src/app/endpoints/user-endpoint.service';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user.service';

enum LoginFields {
  email = 'email',
  password = 'password'
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private route: Router, private userEndpoint: UserEndpointService, private userService: UserService) { }
  readonly loginFields = LoginFields;
  readonly form: FormGroup = new FormGroup({
    [LoginFields.email]: new FormControl('', { validators: [Validators.required, Validators.email] }),
    [LoginFields.password]: new FormControl('', { validators: Validators.required })
  });

  ngOnInit(): void {
  }

  login(): void {
    if (this.form.valid) {
      const loginData: Partial<User> = this.form.getRawValue();
      this.userEndpoint.login(loginData).subscribe(result => {
        this.userService.user = result.user;
        this.userService.accesToken = result.accessToken
        this.route.navigate(['/home'])
      }, err => {
        debugger
      })
    } else {
      alert('WIKI JOSEP NO TE CONOCE xd')
    }

  }

  navigateToRegister(): void {
    this.route.navigate(['/register'])
  }

}
