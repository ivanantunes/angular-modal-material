import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ModalType } from './../interfaces/modal-type';
import { ModalMaterialComponent } from './../modal-material/modal-material.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalMaterialService {

constructor(private dialog: MatDialog) { }

  mTSuccess(
    title: string,
    description: string,
    btnCloseTitle: string,
    width: string,
    height: string,
    disableClose: boolean
  ): void {
    this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tSuccess,
        title,
        description,
        btnCloseTitle
      }
    });
  }

  mTSuccessLog(
    title: string,
    description: string,
    btnCloseTitle: string,
    btnLogTitle: string,
    log: string,
    width: string,
    height: string,
    disableClose: boolean
  ): void {
    this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tSuccessLog,
        title,
        description,
        btnLogTitle,
        btnCloseTitle,
        log
      }
    });
  }

  mTSuccessConfirm(
    title: string,
    description: string,
    btnCloseTitle: string,
    btnConfirmTitle: string,
    width: string,
    height: string,
    disableClose: boolean
  ): Observable<boolean> {
    const response = this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tSuccessConfirm,
        title,
        description,
        btnCloseTitle,
        btnConfirmTitle,
      }
    });
    return response.componentInstance.isConfirmed;
  }

  mTAlert(
    title: string,
    description: string,
    btnCloseTitle: string,
    width: string,
    height: string,
    disableClose: boolean
  ): void {
    this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tAlert,
        title,
        description,
        btnCloseTitle
      }
    });
  }

  mTAlertLog(
    title: string,
    description: string,
    btnCloseTitle: string,
    btnLogTitle: string,
    log: string,
    width: string,
    height: string,
    disableClose: boolean
  ): void {
    this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tAlertLog,
        title,
        description,
        btnLogTitle,
        btnCloseTitle,
        log
      }
    });
  }

  mTAlertConfirm(
    title: string,
    description: string,
    btnCloseTitle: string,
    btnConfirmTitle: string,
    width: string,
    height: string,
    disableClose: boolean
  ): Observable<boolean> {
    const response = this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tAlertConfirm,
        title,
        description,
        btnCloseTitle,
        btnConfirmTitle,
      }
    });
    return response.componentInstance.isConfirmed;
  }

  mTError(
    title: string,
    description: string,
    btnCloseTitle: string,
    width: string,
    height: string,
    disableClose: boolean
  ): void {
    this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tError,
        title,
        description,
        btnCloseTitle
      }
    });
  }

  mTErrorLog(
    title: string,
    description: string,
    btnCloseTitle: string,
    btnLogTitle: string,
    log: string,
    width: string,
    height: string,
    disableClose: boolean
  ): void {
    this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tErrorLog,
        title,
        description,
        btnLogTitle,
        btnCloseTitle,
        log
      }
    });
  }

  mTErrorConfirm(
    title: string,
    description: string,
    btnCloseTitle: string,
    btnConfirmTitle: string,
    width: string,
    height: string,
    disableClose: boolean
  ): Observable<boolean> {
    const response = this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.tErrorConfirm,
        title,
        description,
        btnCloseTitle,
        btnConfirmTitle,
      }
    });
    return response.componentInstance.isConfirmed;
  }

  mManualBasic(
    title: string,
    description: string,
    btnCloseTitle: string,
    icon: string,
    mBackgroundColorIcon: string,
    useMatIcon: boolean,
    width: string,
    height: string,
    disableClose: boolean
  ): void {
    this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.mBasic,
        title,
        description,
        btnCloseTitle,
        icon,
        mBackgroundColorIcon,
        useMatIcon
      }
    });
  }

  mManualLog(
    title: string,
    description: string,
    btnCloseTitle: string,
    btnLogTitle: string,
    icon: string,
    mBackgroundColorIcon: string,
    useMatIcon: boolean,
    log: string,
    width: string,
    height: string,
    disableClose: boolean
  ): void {
    this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.mLog,
        title,
        description,
        btnLogTitle,
        btnCloseTitle,
        log,
        icon,
        mBackgroundColorIcon,
        useMatIcon
      }
    });
  }

  mManualConfirm(
    title: string,
    description: string,
    btnCloseTitle: string,
    btnConfirmTitle: string,
    icon: string,
    mBackgroundColorIcon: string,
    useMatIcon: boolean,
    width: string,
    height: string,
    disableClose: boolean
  ): Observable<boolean> {
    const response = this.dialog.open(ModalMaterialComponent, {
      width,
      height,
      disableClose,
      data: {
        controlType: ModalType.mConfirm,
        title,
        description,
        btnCloseTitle,
        btnConfirmTitle,
        icon,
        mBackgroundColorIcon,
        useMatIcon
      }
    });
    return response.componentInstance.isConfirmed;
  }
}
