import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Mycomponent/about/about.component';
import { TodoComponent } from './Mycomponent/todo/todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
