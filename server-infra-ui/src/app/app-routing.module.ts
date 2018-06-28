import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerListComponent } from './components/server-list/server-list.component';
import { ServerRegistrationComponent } from './components/server-registration/server-registration.component';
import {NewServerComponent} from './components/new-server/new-server.component';

const routes: Routes = [{
  path: '',
  component: ServerListComponent
},
  {
    path: 'server/view/:id',
    component: ServerRegistrationComponent
  },
  {
    path: 'new-server',
    component: NewServerComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
