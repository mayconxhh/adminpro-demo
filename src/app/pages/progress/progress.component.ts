import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 20;
  porcentaje2: number = 50;

  constructor() { }

  ngOnInit() {
  }

  // changeValue( value: number ) {

  //   if ( this.porcentaje >= 100 && value > 0) {
  //     this.porcentaje = 100;
  //     return;
  //   }

  //   if ( this.porcentaje <= 0 && value < 0) {
  //     this.porcentaje = 0;
  //     return;
  //   }

  //   this.porcentaje = this.porcentaje + value;

  // }
}
