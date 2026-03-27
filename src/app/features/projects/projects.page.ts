import { Component, signal } from '@angular/core';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { projects } from '../../shared/data/content.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent, RevealOnScrollDirective],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.scss'
})
export default class ProjectsPage {
  readonly projects = projects;
  readonly categories = ['All', ...new Set(projects.map((project) => project.category))];
  readonly activeCategory = signal('All');

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  get filteredProjects() {
    return this.activeCategory() === 'All'
      ? this.projects
      : this.projects.filter((project) => project.category === this.activeCategory());
  }
}
