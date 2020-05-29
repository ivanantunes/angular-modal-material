import { ModalType } from './modal-type';

export interface Modal {
  controlType: ModalType;
  title: string;
  description: string;
  btnCloseTitle: string;
  btnConfirmTitle?: string;
  btnLogTitle?: string;
  icon?: string;
  mBackgroundColorIcon?: string;
  useMatIcon?: boolean;
  log?: string;
}
