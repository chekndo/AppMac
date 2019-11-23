import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-data',
  templateUrl: './insurance-data.component.html',
  styleUrls: ['./insurance-data.component.scss']
})
export class InsuranceDataComponent implements OnInit {

  @Input() insuranceData:{};

  public subtitle = 'datos seguro'

  constructor() { }

  ngOnInit() {
  }

}
