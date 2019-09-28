import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PofileComponent} from './pofile/pofile.component';

const routes: Routes = [
  {path: 'profile',component: PofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
