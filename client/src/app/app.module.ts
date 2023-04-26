import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  // provides 2-way binding between user input in html and the component .ts code
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()      
  ],
  providers: [], //in earlier version of angular, when we created a service we needed to add the service here in providers[] 
                 //but now it happens automatically with the providedIn metadata in service class 
  bootstrap: [AppComponent]
})
export class AppModule { }
