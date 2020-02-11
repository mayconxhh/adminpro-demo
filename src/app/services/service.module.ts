import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SharedService,
  SidebarService
} from './service.index';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],
  declarations: [],
})
export class ServiceModule { }
