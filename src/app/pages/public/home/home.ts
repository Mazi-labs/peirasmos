import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Validate Your Skills. Advance Your Career.</h1>
          <p class="hero-subtitle">
            The standard for professional skill assessment. Test your expertise, get certified, and unlock new opportunities.
          </p>
          <div class="hero-cta">
            <a routerLink="/signup" class="btn btn-primary">Get Started</a>
            <a routerLink="/login" class="btn btn-secondary">Login</a>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2 class="section-title">How It Works</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">1</div>
            <h3 class="feature-title">Choose Your Test</h3>
            <p>Select from our extensive library of industry-relevant skill assessments.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">2</div>
            <h3 class="feature-title">Prove Your Skills</h3>
            <p>Take a comprehensive, timed exam designed by experts to challenge your knowledge.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">3</div>
            <h3 class="feature-title">Earn Your Certificate</h3>
            <p>Receive a shareable, verifiable certificate to showcase your achievement.</p>
          </div>
        </div>
      </section>

      <!-- Skill Categories Section -->
      <section class="skills-section">
        <h2 class="section-title">Explore Our Assessments</h2>
        <div class="skills-grid">
          <div *ngFor="let skill of skills" class="skill-card">
            <div class="skill-card-content">
              <h3 class="skill-title">{{ skill.name }}</h3>
              <p class="skill-description">{{ skill.description }}</p>
              <a href="#" class="skill-link">View Tests &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section class="final-cta-section">
        <h2 class="section-title">Ready to Prove Your Expertise?</h2>
        <a routerLink="/signup" class="btn btn-primary">Sign Up Now</a>
      </section>
    </div>
  `,
  styleUrls: ['./home.scss']
})
export class Home {
  skills = [
    {
      name: 'Adobe Creative Suite',
      description: 'Validate your mastery in Photoshop, Illustrator, InDesign, and more.'
    },
    {
      name: 'Bash Scripting',
      description: 'Test your ability to automate tasks and manage systems with shell scripting.'
    },
    {
      name: 'Accounting Principles',
      description: 'Certify your knowledge in financial accounting, bookkeeping, and analysis.'
    },
    {
      name: 'C# & .NET',
      description: 'Prove your skills in building robust applications with the .NET framework.'
    },
    {
      name: 'Artificial Intelligence',
      description: 'Showcase your expertise in machine learning, neural networks, and data science.'
    },
    {
      name: 'Cloud Computing',
      description: 'Demonstrate your proficiency with platforms like AWS, Azure, and Google Cloud.'
    }
  ];
}
