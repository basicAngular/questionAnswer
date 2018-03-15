import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponentComponent } from './search-component/search-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { QuestionFormComponentComponent } from './question-form-component/question-form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    QuestionFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
