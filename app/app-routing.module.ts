import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatsComponent} from "./cats/cats.component";
import {DogsComponent} from "./dogs/dogs.component";
import {CatDetailsComponent} from './cat-details/cat-details.component';
const routes: Routes = [
{path: 'cats', component: CatsComponent},
{path: 'dogs', component: DogsComponent},
{ path: '', redirectTo: '/cats', pathMatch: 'full' },
{path: 'details/:id',component:CatDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
