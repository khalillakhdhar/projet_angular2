import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.component.html',
  styleUrls: ['./calcule.component.css']
})
export class CalculeComponent implements OnInit {
  sb = 0;
  sn = 0;
  taxe=0
  constructor() { }

  ngOnInit(): void {
  }
  calculer() {
    this.taxe = this.sb * 0.12;
    this.sn = this.sb * 0.88;





  }

}
