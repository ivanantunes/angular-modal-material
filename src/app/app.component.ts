import { Component, OnInit } from '@angular/core';
import { ModalMaterialService } from 'modal-material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private modal: ModalMaterialService) {}

  ngOnInit() {}


  mTSuccess() {
    this.modal.mTSuccess(
      'Test Alert Success', // Alert Title
      'Test Description',  // Alert Description
      'Close', // Close Alert Button Title
      'auto',  // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    );
  }

  mTSuccessLog() {
    this.modal.mTSuccessLog(
      'Test Alert Success Log', // Alert Title
      'Test Description Log', // Alert Description
      'Close', // Close Alert Button Title
      'Details', // Details button title.
      'Careful it looks like the system is getting overloaded.', // Log
      'auto', // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    );
  }

  mTSuccessConfirm() {
    this.modal.mTSuccessConfirm(
      'Test Alert Success', // Alert Title
      'Test Description', // Alert Description
      'Close', // Close Alert Button Title
      'Confirm', // Confirmation Button title.
      'auto', // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    ).subscribe((res) => {
      if (res) {
        console.log('Confirmed!');
      } else {
        console.log('Canceled');
      }
    });
  }

  mTAlert() {
    this.modal.mTAlert(
      'Test Alert', // Alert Title
      'Test Description',  // Alert Description
      'Close', // Close Alert Button Title
      'auto',  // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true
    );
  }

  mTAlertLog() {
    this.modal.mTAlertLog(
      'Test Alert Log', // Alert Title
      'Test Description Log', // Alert Description
      'Close', // Close Alert Button Title
      'Details', // Details button title.
      'Congratulations you have just used the alert log service', // Log
      'auto', // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    );
  }

  mTAlertConfirm() {
    this.modal.mTAlertConfirm(
      'Test Alert', // Alert Title
      'Test Description', // Alert Description
      'Close', // Close Alert Button Title
      'Confirm', // Confirmation Button title.
      'auto', // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    ).subscribe((res) => {
      if (res) {
        console.log('Confirmed!');
      } else {
        console.log('Canceled');
      }
    });
  }

  mTError() {
    this.modal.mTError(
      'Test Alert Error', // Alert Title
      'Test Description',  // Alert Description
      'Close', // Close Alert Button Title
      'auto',  // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true
    );
  }

  mTErrorLog() {
    this.modal.mTErrorLog(
      'Test Alert Error Log', // Alert Title
      'Test Description Log', // Alert Description
      'Close', // Close Alert Button Title
      'Details', // Details button title.
      'Error failed to bring user from database.', // Log
      'auto', // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    );
  }

  mTErrorConfirm() {
    this.modal.mTErrorConfirm(
      'Test Alert Error', // Alert Title
      'Test Description', // Alert Description
      'Close', // Close Alert Button Title
      'Confirm', // Confirmation Button title.
      'auto', // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    ).subscribe((res) => {
      if (res) {
        console.log('Confirmed!');
      } else {
        console.log('Canceled');
      }
    });
  }

  mManualBasic() {
    this.modal.mManualBasic(
      'Test Alert', // Alert Title
      'Test Description',  // Alert Description
      'Close', // Close Alert Button Title
      'fab fa-npm', // Put the icon class if it is https://fontawesome.com/
      // if not just put the icon name if you are going to use https://material.io/
      'green', // Background color that will be behind the icon when the modal appears.
      false, // If using https://material.io/ leave true if using https://fontawesome.com/ leave false.
      'auto', // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    );
  }

  mManualLog() {
    this.modal.mManualLog(
      'Title Alert', // Alert Title
      'Title Description', // Alert Description
      'Close', // Close Alert Button Title
      'Details', // Details button title.
      'person', // Put the icon class if it is https://fontawesome.com/
      // if not just put the icon name if you are going to use https://material.io/
      'red', // Background color that will be behind the icon when the modal appears.
      true,  // If using https://material.io/ leave true if using https://fontawesome.com/ leave false.
      'Failed to add person.', // Log
      'auto',  // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    );
  }

  mManualConfirm() {
    this.modal.mManualConfirm(
      'Test Alert', // Alert Title
      'Test Description', // Alert Description
      'Close', // Close Alert Button Title
      'Confirm', // Confirmation Button title.
      'warning', // Put the icon class if it is https://fontawesome.com/
      // if not just put the icon name if you are going to use https://material.io/
      'yellow', // Background color that will be behind the icon when the modal appears.
      true,  // If using https://material.io/ leave true if using https://fontawesome.com/ leave false.
      'auto',  // Alert Width. Example 100px, 100%.
      'auto', // Alert height. Example 100px, 100%.
      true // When you click outside the modal it will close itself. True case it does not close.
    ).subscribe((res) => {
      if (res) {
        console.log('Confirmed!');
      } else {
        console.log('Canceled');
      }
    });
  }
}
