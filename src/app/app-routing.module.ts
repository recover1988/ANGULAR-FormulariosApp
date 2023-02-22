import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'template', loadChildren: () => import('./template/template.module').then(t => t.TemplateModule) },
  { path: 'reactive', loadChildren: () => import('./reactive/reactive.module').then(r => r.ReactiveModule) },
  { path: '**', redirectTo: 'template' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
