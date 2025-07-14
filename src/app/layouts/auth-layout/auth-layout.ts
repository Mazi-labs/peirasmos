import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-auth-layout',
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [':host { display: block; }'],
  standalone: true,
  imports: [RouterModule, Header, Footer],
})
export class AuthLayout {}
