import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchStopComponent } from './pages/search-stop/search-stop.component';
import { ShowStopComponent } from './pages/show-stop/show-stop.component';

const routes: Routes = [
  {
    path: '',
    component: SearchStopComponent,
  },
  {
    path: 'stop',
    redirectTo: ''
  },
  {
    path: 'stop/:id',
    component: ShowStopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
