import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-links">
          <a routerLink="/privacy-policy" class="footer-link">Privacy Policy</a>
          <a routerLink="/terms-of-service" class="footer-link"
            >Terms of Service</a
          >
          <a routerLink="/contact" class="footer-link">Contact Us</a>
        </div>
        <div class="footer-copyright">
          &copy; {{ currentYear }} Peirasmos Platform. All rights reserved.
        </div>
      </div>
      <!-- <div class="footer-branding"> Peirasmos</div> -->
    </footer>
  `,
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
