// NgModule
import { NgModule } from '@angular/core';

// Base
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

// Component
import { ModalMaterialComponent } from './modal-material.component';

// Service
import { ModalMaterialService } from './modal-material.service';

@NgModule({
  declarations: [
    ModalMaterialComponent
  ],
  imports: [
    // Base
    CommonModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    ModalMaterialComponent
  ],
  providers: [
    ModalMaterialService
  ],
  entryComponents: [
    ModalMaterialComponent
  ]
})
export class ModalMaterialModule { }
