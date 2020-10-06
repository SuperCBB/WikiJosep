import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private translateService: TranslateService) {
    this.translateService.setDefaultLang('es');
    this.translateService.getLangs();
    this.translateService.get('test').subscribe(
      (resutl) => {},
      (error) => {}
    );
  }

  ngOnInit(): void {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
