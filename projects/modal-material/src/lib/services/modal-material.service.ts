import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ModalType } from './../interfaces/modal-type';
import { ModalMaterialComponent } from './../modal-material/modal-material.component';
import { Observable, of } from 'rxjs';
import { ModalTemplate, ModalTemplateLog, ModalTemplateConfirm, ModalManual, ModalManualLog, ModalManualConfirm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ModalMaterialService {

constructor(private dialog: MatDialog) { }

  mTSuccess(modalT: ModalTemplate): void {
    this.dialog.open(ModalMaterialComponent, {
      width: modalT.width,
      height: modalT.height,
      disableClose: modalT.disableClose,
      data: {
        controlType: ModalType.tSuccess,
        title: modalT.title,
        description: modalT.description,
        btnCloseTitle: modalT.btnCloseTitle
      }
    });
  }

  mTSuccessLog(modalTL: ModalTemplateLog): void {
    this.dialog.open(ModalMaterialComponent, {
      width: modalTL.width,
      height: modalTL.height,
      disableClose: modalTL.disableClose,
      data: {
        controlType: ModalType.tSuccessLog,
        title: modalTL.title,
        description: modalTL.description,
        btnLogTitle: modalTL.btnLogTitle,
        btnCloseTitle: modalTL.btnCloseTitle,
        log: modalTL.log
      }
    });
  }

  mTSuccessConfirm(modalTC: ModalTemplateConfirm): Observable<boolean> {
    const response = this.dialog.open(ModalMaterialComponent, {
      width: modalTC.width,
      height: modalTC.height,
      disableClose: modalTC.disableClose,
      data: {
        controlType: ModalType.tSuccessConfirm,
        title: modalTC.title,
        description: modalTC.description,
        btnCloseTitle: modalTC.btnCloseTitle,
        btnConfirmTitle: modalTC.btnConfirmTitle,
      }
    });
    return response.componentInstance.isConfirmed;
  }

  mTAlert(modalT: ModalTemplate): void {
    this.dialog.open(ModalMaterialComponent, {
      width: modalT.width,
      height: modalT.height,
      disableClose: modalT.disableClose,
      data: {
        controlType: ModalType.tAlert,
        title: modalT.title,
        description: modalT.description,
        btnCloseTitle: modalT.btnCloseTitle
      }
    });
  }

  mTAlertLog(modalTL: ModalTemplateLog): void {
    this.dialog.open(ModalMaterialComponent, {
      width: modalTL.width,
      height: modalTL.height,
      disableClose: modalTL.disableClose,
      data: {
        controlType: ModalType.tAlertLog,
        title: modalTL.title,
        description: modalTL.description,
        btnLogTitle: modalTL.btnLogTitle,
        btnCloseTitle: modalTL.btnCloseTitle,
        log: modalTL.log
      }
    });
  }

  mTAlertConfirm(modalTC: ModalTemplateConfirm): Observable<boolean> {
    const response = this.dialog.open(ModalMaterialComponent, {
      width: modalTC.width,
      height: modalTC.height,
      disableClose: modalTC.disableClose,
      data: {
        controlType: ModalType.tAlertConfirm,
        title: modalTC.title,
        description: modalTC.description,
        btnCloseTitle: modalTC.btnCloseTitle,
        btnConfirmTitle: modalTC.btnConfirmTitle,
      }
    });
    return response.componentInstance.isConfirmed;
  }

  mTError(modalT: ModalTemplate): void {
    this.dialog.open(ModalMaterialComponent, {
      width: modalT.width,
      height: modalT.height,
      disableClose: modalT.disableClose,
      data: {
        controlType: ModalType.tError,
        title: modalT.title,
        description: modalT.description,
        btnCloseTitle: modalT.btnCloseTitle
      }
    });
  }

  mTErrorLog(modalTL: ModalTemplateLog): void {
    this.dialog.open(ModalMaterialComponent, {
      width: modalTL.width,
      height: modalTL.height,
      disableClose: modalTL.disableClose,
      data: {
        controlType: ModalType.tErrorLog,
        title: modalTL.title,
        description: modalTL.description,
        btnLogTitle: modalTL.btnLogTitle,
        btnCloseTitle: modalTL.btnCloseTitle,
        log: modalTL.log
      }
    });
  }

  mTErrorConfirm(modalTC: ModalTemplateConfirm): Observable<boolean> {
    const response = this.dialog.open(ModalMaterialComponent, {
      width: modalTC.width,
      height: modalTC.height,
      disableClose: modalTC.disableClose,
      data: {
        controlType: ModalType.tErrorConfirm,
        title: modalTC.title,
        description: modalTC.description,
        btnCloseTitle: modalTC.btnCloseTitle,
        btnConfirmTitle: modalTC.btnConfirmTitle,
      }
    });
    return response.componentInstance.isConfirmed;
  }

  mManualBasic(modalMB: ModalManual): void {
    this.dialog.open(ModalMaterialComponent, {
      width: modalMB.width,
      height: modalMB.height,
      disableClose: modalMB.disableClose,
      data: {
        controlType: ModalType.mBasic,
        title: modalMB.title,
        description: modalMB.description,
        btnCloseTitle: modalMB.btnCloseTitle,
        icon: modalMB.icon,
        mBackgroundColorIcon: modalMB.mBackgroundColorIcon,
        useMatIcon: modalMB.useMatIcon
      }
    });
  }

  mManualLog(modalML: ModalManualLog): void {
    this.dialog.open(ModalMaterialComponent, {
      width: modalML.modalMB.width,
      height: modalML.modalMB.height,
      disableClose: modalML.modalMB.disableClose,
      data: {
        controlType: ModalType.mLog,
        title: modalML.modalMB.title,
        description: modalML.modalMB.description,
        btnLogTitle: modalML.btnLogTitle,
        btnCloseTitle: modalML.modalMB.btnCloseTitle,
        log: modalML.log,
        icon: modalML.modalMB.icon,
        mBackgroundColorIcon: modalML.modalMB.mBackgroundColorIcon,
        useMatIcon: modalML.modalMB.useMatIcon
      }
    });
  }

  mManualConfirm(modalMC: ModalManualConfirm): Observable<boolean> {
    const response = this.dialog.open(ModalMaterialComponent, {
      width: modalMC.modalMB.width,
      height: modalMC.modalMB.height,
      disableClose: modalMC.modalMB.disableClose,
      data: {
        controlType: ModalType.mConfirm,
        title: modalMC.modalMB.title,
        description: modalMC.modalMB.description,
        btnCloseTitle: modalMC.modalMB.btnCloseTitle,
        btnConfirmTitle: modalMC.btnConfirmTitle,
        icon: modalMC.modalMB.icon,
        mBackgroundColorIcon: modalMC.modalMB.mBackgroundColorIcon,
        useMatIcon: modalMC.modalMB.useMatIcon
      }
    });
    return response.componentInstance.isConfirmed;
  }
}
