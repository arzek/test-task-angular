import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchStopComponent } from './pages/search-stop/search-stop.component';
import { ShowStopComponent } from './pages/show-stop/show-stop.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchStopComponent,
    ShowStopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
