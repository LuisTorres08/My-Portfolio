import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Ejemplo 1',
      technologies: 'Ejemplo 1',
      description: [
        'Ejemplo 1',
        'Ejemplo 1',
        'Ejemplo 1',
      ],
    },
    {
      title: 'Ejemplo 2',
      technologies: 'Ejemplo 2',
      description: [
        'Ejemplo 2',
        'Ejemplo 2',
        'Ejemplo 2',
      ],
    },
    {
      title: 'Ejemplo 3',
      technologies: 'Ejemplo 3',
      description: [
        'Ejemplo 3',
        'Ejemplo 3',
        'Ejemplo 3',
      ],
    },
    {
      title: 'Ejemplo 4',
      technologies: 'Ejemplo 4',
      description: [
        'Ejemplo 4',
        'Ejemplo 4',
        'Ejemplo 4',
      ],
    },
  ]
}
