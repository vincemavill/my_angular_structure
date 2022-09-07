import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// ----------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ----------------------
import { MenuModule, TransitionModule} from 'ngx-headlessui';
// ----------------------
import { NavigationComponent } from './component/navigation/navigation.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DataComponent } from './page/data/data.component';
import { ReduxComponent } from './page/redux/redux.component';
// ----------------------
import { StoreModule } from '@ngrx/store';
import { counterReducer  } from './redux/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    NotFoundPageComponent,
    DataComponent,
    ReduxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
