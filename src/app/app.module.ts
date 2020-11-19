import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: ":type", component: TypeComponent }
  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent,  TypeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
