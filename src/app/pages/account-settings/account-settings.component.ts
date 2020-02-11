import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { }

  ngOnInit() {
    this.getCheck();
  }

  changeTheme( tema: string, link: any ) {

    this.applyCheck(link);

    this._settings.applyTheme(tema);
  }

  applyCheck(link: any){
    let selectors: any = document.getElementsByClassName('selector');

    for ( let ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  getCheck(){
    let selectors: any = document.getElementsByClassName('selector');

    let theme = this._settings.ajustes.tema;

    for ( let ref of selectors) {
      if ( ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
