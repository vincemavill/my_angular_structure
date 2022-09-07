import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AboutComponent } from './page/about/about.component';
import { DataComponent } from './page/data/data.component';
import { ReduxComponent } from './page/redux/redux.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about/:params', component: AboutComponent },
  { path: 'data', component: DataComponent },
  { path: 'redux', component: ReduxComponent },
  { path: '**', component: NotFoundPageComponent, data: [] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
