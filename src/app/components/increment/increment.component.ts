import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @ViewChild('progress', {static: false}) progress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';

  @Input('progreso') porcentaje: number = 50;

  @Output() changeValues: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda:', this.leyenda);
    console.log('Porcentaje:', this.porcentaje);
  }

  ngOnInit() {
    console.log('Leyenda:', this.leyenda);
    console.log('Porcentaje:', this.porcentaje);
  }

  onChange( newValue: number ) {

    // const elemHTML: any = document.getElementsByName('porcentaje')[0];

    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    this.progress.nativeElement.value = this.porcentaje;

    this.changeValues.emit( this.porcentaje );
  }

  changeValue( value: number ) {

    if ( this.porcentaje >= 100 && value > 0) {
      this.porcentaje = 100;
      return;
    }

    if ( this.porcentaje <= 0 && value < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + value;
    this.changeValues.emit( this.porcentaje );
    this.progress.nativeElement.focus();
  }

}
