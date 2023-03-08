import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  workExpList: WorkExperience[] = [
    {
      role: 'IT Development Intern',
      company: 'City Lending Colombia S A S',
      duration: 'Aug 2022 - Feb 2023',
      description: [
        'Diseño y desarrollo de nuevas aplicaciones e interfaces.',
        'Respaldar aplicaciones existentes.',
        'Realizar despliegues.',
      ],
    },
    {
      role: 'Ejemplo',
      company: 'Ejemplo',
      duration: 'Ejemplo',
      description: [
        'Ejemplo',
        'Ejemplo',
        'Ejemplo',
      ],
    },
  ]

}
