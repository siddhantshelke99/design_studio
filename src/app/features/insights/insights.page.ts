import { Component } from '@angular/core';

@Component({
  selector: 'app-insights-page',
  imports: [],
  templateUrl: './insights.page.html',
  styleUrl: './insights.page.scss'
})
export default class InsightsPage {
  readonly posts = [
    {
      title: 'Why Physical Clay Still Matters In 2026',
      excerpt: 'Digital speed is critical, but tactile validation still reveals proportion and surface truth.',
      tag: 'Process'
    },
    {
      title: 'From Sketch To Prototype In 4 Iterations',
      excerpt: 'A practical sprint model to reduce rework and keep design intent intact across teams.',
      tag: 'Workflow'
    },
    {
      title: 'Design Academy Notes: Building A Strong Portfolio',
      excerpt: 'What reviewers look for in transportation design portfolios and how to structure your narrative.',
      tag: 'Academy'
    }
  ];
}
