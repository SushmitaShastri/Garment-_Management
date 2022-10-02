import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
const routes: Routes = 
[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'vendor',
    component:VendorComponent
  },
  {
    path:'editvendor',
    component:EditVendorComponent
  },
  {
    path:'addVendor',
    component:AddVendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
