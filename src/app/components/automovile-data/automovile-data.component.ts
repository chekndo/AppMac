import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-automovile-data',
  templateUrl: './automovile-data.component.html',
  styleUrls: ['./automovile-data.component.scss']
})
export class AutomovileDataComponent implements OnInit {

  @Input() automovilData:{}

  public subtitle = 'datos vehículo'

  constructor() { }

  ngOnInit() {
  }

}
