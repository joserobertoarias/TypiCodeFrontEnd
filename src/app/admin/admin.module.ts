import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LogsComponent } from './components/logs/logs.component';
import { FileComponent } from './components/file/file.component';


@NgModule({
  declarations: [
    AdminComponent,
    LogsComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
