import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HtmlComponent } from './pages/html/html.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HtmlComponent,
    TypescriptComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
