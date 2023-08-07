import { MaterialExModule } from './../shared/material.module';
import { AsideNavModule } from './../core/aside-nav/aside-nav.module';
import { MasterLayoutComponent } from './../core/layout/master-layout/master-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { HeaderModule } from "../core/header/header.module";


@NgModule({
    declarations: [MasterLayoutComponent],
    imports: [
        CommonModule,
        MasterRoutingModule,
        AsideNavModule,
        MaterialExModule,
        HeaderModule
    ]
})
export class MasterModule { }
