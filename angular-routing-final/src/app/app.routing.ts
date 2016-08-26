import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { AboutComponent }    from './about/about.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home'}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);