import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [BrowserModule, AuthModule, FormsModule, RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' }
  ])],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
