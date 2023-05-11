import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoretableComponent } from './storetable/storetable.component';
import { MenuComponent } from './menu/menu.component';
import { FormfactorComponent } from './formfactor/formfactor.component';
import { SelectformfactorComponent } from './selectformfactor/selectformfactor.component';
import { SelectedformComponent } from './selectedform/selectedform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationsTableComponent } from './locations-table/locations-table.component';
import { LoginFormComponent } from './login-form/login-form.component';
@NgModule({
  declarations: [
    AppComponent,
    StoretableComponent,
    MenuComponent,
    FormfactorComponent,
    SelectformfactorComponent,
    SelectedformComponent,
    DashboardComponent,
    LocationListComponent,
    LocationsTableComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
