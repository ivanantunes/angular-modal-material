import { Component } from '@angular/core';
import { ModalMaterialService } from 'modal-material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modal: ModalMaterialService) {
    modal.mTSuccess('Teste', 'Teste de Descricao', 'Fechar', 'auto', 'auto', true);
  }

  title = 'angular-modal-material';

}
