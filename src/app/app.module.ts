import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {DecoratorsComponent} from "./decorators/decorators.component";
import {DecoratorsModule} from "./decorators/decorators.module";
import {ObservablesComponent} from "./observables/observables.component";
import {ObservablesModule} from "./observables/observables.module";


const routes:Routes = [
  {
    path: '',
    redirectTo: '/decorators',
    pathMatch: 'full'
  },
  {
    path: 'decorators',
    component: DecoratorsComponent
  },
  {
    path: 'observables',
    component: ObservablesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DecoratorsModule,
    ObservablesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
