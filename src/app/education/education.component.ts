import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educationList: Education[] = [
    {
      institute: 'Institución Educativa Diversificada Oriental - Santo Tomás',
      course: 'Estudios Secundarios',
      duration: '2012-2017',
      score: '95%'
    },
    {
      institute: 'SENA',
      course: 'Diseño y administración de sitios web ',
      duration: '2016',
      score: '98%'
    },
    {
      institute: 'Universidad de la Costa',
      course: 'Ingeniería de sistemas',
      duration: '2018 - 2023',
      score: '100%'
    }
  ]

}
