import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalMaterialService {

constructor(private dialog: MatDialog) { }

  modalTemplateSuccess(): void {}

}
