import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  readonly menu = [
    {
      path: 'home',
      label: 'Inicio'
    },
    {
      path: 'article/create',
      label: 'Crear artículo'
    },
    {
      path: 'article/list',
      label: 'Artículos'
    }
  ]

  ngOnInit(): void {
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
