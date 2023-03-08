import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  myData: string[][] = [
    ['Name', 'Luis Torres'],
    ['DOB', '08/10/2000'],
    ['Work Exp', '6 Month'],
    ['Education', 'CUC'],
    ['Interests', 'Web Development']
  ];

  aboutMe: string[] = [
    'Ingeniero de sistemas con una sólida formación en valores, responsable, con facilidad de adaptación al cambio, y con muchas ganas de aprender y adquirir más conocimientos.',
    'Brindar soluciones a partir de los conocimientos ya adquiridos, así como también aportar nuevos conocimientos a los demas.',
  ];

  constructor() {}

  ngOnInit(): void {}

}
