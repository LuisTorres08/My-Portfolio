import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 85,
    },
    {
      name: 'HTML5, CSS3, JavaScript',
      level: 'Intermidiate',
      rating: 90
    },
    {
      name: 'Node.js',
      level: 'Intermidiate',
      rating: 80
    },
    {
      name: 'AWS',
      level: 'Intermidiate',
      rating: 70
    },
    {
      name: 'Git',
      level: 'Intermidiate',
      rating: 90
    },

  ];

}
