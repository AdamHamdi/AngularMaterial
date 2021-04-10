import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';




const materials= [
  CommonModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule


]

@NgModule({

  imports: [
    materials
   ],
   exports: [
    materials
   ]
})
export class MaterialModule { }
