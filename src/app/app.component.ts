import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnChanges } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ComputeTransactionService } from './compute-transaction.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string;
  nightMode:boolean = false;



  stockForm: FormGroup;
  constructor(fb: FormBuilder,
    private _computeTransaction: ComputeTransactionService
  ) {
    this.stockForm = fb.group({

      'selectedBroker': [null, Validators.required],
      'numOfShares': [null, Validators.compose([Validators.required, Validators.min(1)])],
      'buyingPrice': [null, Validators.required],
      'sellingPrice': [null, Validators.required]
    });
  }


  ngOnInit() {
    //this.title = this.ComputeTransactionService.enterSampleText();
    

  }

  //functions here
  toggleNightMode() {
    this.nightMode = !this.nightMode;
    console.log('nightMode is: ' + this.nightMode);
  }



}

