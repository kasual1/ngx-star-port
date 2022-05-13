import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { MasterComponent } from './components/master/master.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'master'
  },
  {
    path: 'master',
    component: MasterComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
