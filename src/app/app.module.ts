import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageFourComponent } from './components/page-four/page-four.component';
import { PageTwoService } from './services/page-two-service.service';
import { UserResolver } from './resolvers/user.resolver';
import { CarResolver } from './resolvers/car.resolver';
import { CarService } from './services/car.service';
import { PermissionGuard } from './guards/permission.guard';
import { PermissionService } from './services/permission.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginService } from './services/login.service';
import { LoginGuard } from './guards/login-permission.guard';
import { PageFiveComponent } from './components/page-five/page-five.component';
import { PageSixComponent } from './components/page-six/page-six.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    TopNavComponent,
    FooterComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    LoginFormComponent,
    PageFiveComponent,
    PageSixComponent,
    CreateUserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [PageTwoService , UserResolver , CarResolver , CarService , PermissionGuard , PermissionService , LoginService , LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
