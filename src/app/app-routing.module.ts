import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: '' ,component: ResourcesComponent},
  {path: 'reactive-form' ,component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
