import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEndpointService } from 'src/app/endpoints/user-endpoint.service';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass'],
})
export class UserInfoComponent implements OnInit {
  constructor(private userService: UserService) {}

  user$: Observable<User>;
  displayLogout = false;

  ngOnInit(): void {
    this.user$ = this.userService.user$;
  }

  toggleLogout(): void {
    this.displayLogout = !this.displayLogout;
  }

  logout(): void {
    this.userService.logout();
    this.displayLogout = false;
  }
}
