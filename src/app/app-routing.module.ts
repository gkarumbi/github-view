import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from '../app/components/main/main.component';

import {RepositoryComponent} from '../app/components/repository/repository.component';


const routes: Routes = [
{path:"", component:MainComponent},
{path:"repo/:id",component:RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
