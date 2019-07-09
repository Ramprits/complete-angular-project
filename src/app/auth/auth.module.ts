import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([{
      path: "login", component: LoginComponent
    },
    { path: 'register', component: RegisterComponent }
    ])
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService]
})
export class AuthModule { }