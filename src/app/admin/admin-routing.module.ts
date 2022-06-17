import { FileComponent } from './components/file/file.component';
import { LogsComponent } from './components/logs/logs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'admin', component: LogsComponent},
  { path: 'file/:fileName', component: FileComponent},
  { path: 'logs', component: LogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
