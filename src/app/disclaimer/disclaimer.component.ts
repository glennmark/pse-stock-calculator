import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  showDisclaimer:boolean = false; 

  constructor(public dialog: MatDialog) { }

  openDialogDisclaimer() {
    this.dialog.open(DialogDataDisclaimer, {
      data: {
        entryText: 'This calculator is just a rough estimate. The formula is based on this table'
      }
    });
  }

  

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-data-disclaimer',
  templateUrl: 'dialog-data-disclaimer.html',
})
export class DialogDataDisclaimer {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
