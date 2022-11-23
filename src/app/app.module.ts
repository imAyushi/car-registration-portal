import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from './shared/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './shared/car.service';
import { DashboardPageComponent } from './component/dashboard-page/dashboard-page.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPipe } from './shared/filter.pipe';
import { AddCarComponent } from './component/add-car/add-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardPageComponent,
    FilterPipe,
    AddCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAlLxJw0kOOov1lRqQu_9fTNQjYmnO7Dxk",
      authDomain: "car-registration-login-portal.firebaseapp.com",
      projectId: "car-registration-login-portal",
      storageBucket: "car-registration-login-portal.appspot.com",
      messagingSenderId: "796125434701",
      appId: "1:796125434701:web:8c99e5f83aff7df04a9d04"
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  providers: [AuthServiceService,CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
