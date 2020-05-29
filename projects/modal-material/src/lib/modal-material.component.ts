import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Modal } from './interfaces/modal';

@Component({
  selector: 'modal-material',
  templateUrl: './modal-material.component.html',
  styleUrls: ['./modal-material.component.scss'],
})

export class ModalMaterialComponent implements OnInit {


  showLog = false;

  @Output() isConfirmed = new EventEmitter<boolean>();

  constructor(private dialogRef: MatDialogRef<ModalMaterialComponent>, @Inject(MAT_DIALOG_DATA) public modal: Modal) {}

  ngOnInit() {}

  closeModal() {
    this.dialogRef.close();
  }

  closeModalConfirm() {
    this.isConfirmed.emit(false);
    this.dialogRef.close();
  }

  acceptModalConfirme() {
    this.isConfirmed.emit(true);
    this.dialogRef.close();
  }
}
