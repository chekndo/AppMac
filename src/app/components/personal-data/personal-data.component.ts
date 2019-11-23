import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  @Input() personalData: {}

  public subtitle = 'datos personales'

  constructor() { }

  ngOnInit() {
  }

}
