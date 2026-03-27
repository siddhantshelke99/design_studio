import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/content.model';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  readonly imageLoaded = signal(false);

  markLoaded(): void {
    this.imageLoaded.set(true);
  }
}
