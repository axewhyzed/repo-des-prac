import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkAreaComponent } from './work-area/work-area.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkAreaComponent,
    RibbonComponent,
    StatusBarComponent,
    NavigationPanelComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
