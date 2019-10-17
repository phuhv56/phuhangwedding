import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRouterModule } from "./app.routes";
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRouterModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HeaderComponent, 
    ContentComponent, FooterComponent, 
    PageNotFoundComponent, LoginComponent, 
    HomeComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
