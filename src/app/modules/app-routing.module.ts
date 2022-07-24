import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserFormComponent } from '../components/create-user-form/create-user-form.component';
import { Error404Component } from '../components/error404/error404.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { PageEightComponent } from '../components/page-eight/page-eight.component';
import { PageFiveComponent } from '../components/page-five/page-five.component';
import { PageFourComponent } from '../components/page-four/page-four.component';
import { PageNineComponent } from '../components/page-nine/page-nine.component';
import { PageSevenComponent } from '../components/page-seven/page-seven.component';
import { PageSixComponent } from '../components/page-six/page-six.component';
import { PageTenComponent } from '../components/page-ten/page-ten.component';
import { PageThreeComponent } from '../components/page-three/page-three.component';
import { PageTwoComponent } from '../components/page-two/page-two.component';
import { AllowLoadingGuard } from '../guards/allow-loading.guard';
import { CheckFormGuard } from '../guards/check-form.guard';
import { LoginGuard } from '../guards/login-permission.guard';
import { PermissionGuard } from '../guards/permission.guard';
import { CarResolver } from '../resolvers/car.resolver';
import { UserResolver } from '../resolvers/user.resolver';

const routes: Routes = [
  { path: "" , redirectTo: "home" , pathMatch: "full" },
  { path: "home" , component: HomeComponent  },
  { path: "2nd-page" , component: PageTwoComponent , resolve : { users_data : UserResolver , cars_data : CarResolver }  },
  { path: "3nd-page" , component: PageThreeComponent , canActivate : [PermissionGuard] , canActivateChild: [LoginGuard] , children : [
    { path : "login" , component : LoginFormComponent  },
  ]},
  { path: "4nd-page" , component: PageFourComponent , children : [
    { path : "" , component : CreateUserFormComponent , canDeactivate : [CheckFormGuard] }
  ] },
  { path: "5nd-page" , component: PageFiveComponent },
  { path: "6nd-page" , component: PageSixComponent  },
  { path: "7nd-page" , component: PageSevenComponent  },
  { path: "8nd-page" , component: PageEightComponent  },
  { path: "9nd-page" , component: PageNineComponent  },
  { path: "10nd-page" , component: PageTenComponent  },
  {
    path: "new",
    loadChildren : () => import("./new.module").then((m)=>m.NewModule),
    canLoad : [AllowLoadingGuard]
  },
  {
    path: "another",
    loadChildren : () => import("./another.module").then((m)=>m.AnotherModule)
  },
  { path: "**" , component: Error404Component  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
