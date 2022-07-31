import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CheckFormGuard } from './guards/check-form.guard';
import { ConfirmationBoxComponent } from './components/confirmation-box/confirmation-box.component';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { PageSevenComponent } from './components/page-seven/page-seven.component';
import { PageNineComponent } from './components/page-nine/page-nine.component';
import { PageTenComponent } from './components/page-ten/page-ten.component';
import { SwitchElDelayDirective } from './directives/switch-el-delay.directive';
import { PageEightComponent } from './components/page-eight/page-eight.component';
import { PageElevenComponent } from './components/page-eleven/page-eleven.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';



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
    ConfirmationBoxComponent,
    ReverseStringPipe,
    PageSevenComponent,
    PageEightComponent,
    PageNineComponent,
    PageTenComponent,
    SwitchElDelayDirective,
    PageElevenComponent,
    ChildComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PageTwoService , UserResolver , CarResolver , CarService , PermissionGuard , PermissionService , LoginService , LoginGuard , CheckFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
