import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TemplateComponent } from './components/template/template.component';

import { DataComponent } from './components/data/data.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TemplateComponent, DataComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
