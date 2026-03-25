import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { projects } from '../../shared/data/content.data';

@Component({
  selector: 'app-project-detail-page',
  imports: [RouterLink],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.scss'
})
export default class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);

  readonly project = projects.find((item) => item.slug === this.route.snapshot.paramMap.get('slug'));
}
