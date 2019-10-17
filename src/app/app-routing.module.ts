import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlComponent } from './pages/html/html.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';

const routes: Routes = [
  { path: 'html', component: HtmlComponent },
  { path: 'ts', component: TypescriptComponent },
  { path: 'dynamic', component: DynamicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
