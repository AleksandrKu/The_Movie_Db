import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { AccountComponent } from './components/account/account.component';
import { FilmComponent } from './components/film/film.component';

import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    AccountComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [ HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
