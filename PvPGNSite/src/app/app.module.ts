import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { GenericDataService } from "app/generics/generic-data.service";
import { AppRoutes } from "app/app.routes";
import { GenericTableComponent } from './generics/generic-table/generic-table.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GenericTableComponent,
    NavComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    OrderModule
  ],
  providers: [
    GenericDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
