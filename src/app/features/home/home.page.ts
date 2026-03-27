import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';
import { aboutHighlights, heroSlides, projects, services } from '../../shared/data/content.data';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, HeroComponent, ProjectCardComponent, RevealOnScrollDirective],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export default class HomePage {
  readonly heroSlides = heroSlides;
  readonly highlights = aboutHighlights;
  readonly featuredProjects = projects.slice(0, 3);
  readonly featuredServices = services;
}
