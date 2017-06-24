import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { UsersComponent } from "app/components/users/users.component";
import { HomeComponent } from "app/components/home/home.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);