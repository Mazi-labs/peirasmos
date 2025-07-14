import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  template: `
    <h1>Welcome to {{ title() }}!</h1>

    <router-outlet />
    <app-footer>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('peirasmos');
}
