import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TheatersComponent } from './pages/theaters/theaters.component';
import { RegisterComponent } from './pages/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    TheatersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
