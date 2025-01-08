import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmniSistemComponent } from './alarmni-sistem/alarmni-sistem.component';

const routes: Routes = [
  { path: '', redirectTo: 'alarmni-sistem', pathMatch: 'full' },
  { path: 'alarmni-sistem', component: AlarmniSistemComponent },
  { path: '**', redirectTo: 'alarmni-sistem', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
