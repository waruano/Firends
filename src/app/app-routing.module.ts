import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'report-form', loadChildren: './report-form/report-form.module#ReportFormPageModule' },
  { path: 'encounter', loadChildren: './encounter/encounter.module#EncounterPageModule' },
  { path: 'contactto', loadChildren: './contactto/contactto.module#ContacttoPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
