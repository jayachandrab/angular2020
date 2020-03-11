import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent }  from "./home/home.component";
import { AuthGuardService } from "../guards/auth-guard.service";
export const dashBoardRoutes:Routes =[
  {
  path: 'dashboard',
  component: LayoutComponent,
  canActivate:[AuthGuardService],
  children:[
    {path: '',redirectTo: 'home', pathMatch:'full'},
    {path:'home',component:HomeComponent},

  ]
}
]
