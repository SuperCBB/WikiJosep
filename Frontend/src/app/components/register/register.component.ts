import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEndpointService } from 'src/app/endpoints/user-endpoint.service';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user.service';
enum UserFields {
  name = 'name',
  surname = 'surname',
  email = 'email',
  password = 'password',
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private userEndpoint: UserEndpointService,
    private router: Router,
    private userService: UserService
  ) {}

  readonly userFields = UserFields;
  readonly form: FormGroup = new FormGroup({
    [UserFields.email]: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    [UserFields.password]: new FormControl(null, { validators: Validators.required }),
    [UserFields.name]: new FormControl(null, { validators: Validators.required }),
    [UserFields.surname]: new FormControl(null, { validators: Validators.required }),
  });

  ngOnInit(): void {}

  createUser(): void {
    if (this.form.valid) {
      const user: User = this.form.getRawValue();
      this.userEndpoint.create(user).subscribe(
        (user) => {
          alert('WIKI JOSEP TE DA EL OK');
          this.userService.user = user;
          this.router.navigate(['/home']);
        },
        (err) => {}
      );
    } else {
      alert('A WIKI JOSEP NO LE GUSTA ESO >.<');
    }
  }
}
