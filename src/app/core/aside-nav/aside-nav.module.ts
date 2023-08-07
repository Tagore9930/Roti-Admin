import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav.component';
import { MaterialExModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    AsideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialExModule
  ],
  exports: [
    AsideNavComponent,
  ]
})
export class AsideNavModule { }
