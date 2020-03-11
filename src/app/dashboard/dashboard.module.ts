import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { dashBoardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from "../guards/auth-guard.service";


@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashBoardRoutes)
  ],
  providers:[AuthGuardService]
})
export class DashboardModule { }
