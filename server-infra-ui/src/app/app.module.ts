import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerInfraAppService } from './services/server-infra-app.service';
import { ServerListComponent } from './components/server-list/server-list.component';
import { ServerRegistrationComponent } from './components/server-registration/server-registration.component';
import { NewServerComponent } from './components/new-server/new-server.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    ServerRegistrationComponent,
    NewServerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ServerInfraAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
