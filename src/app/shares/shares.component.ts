import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComputeTransactionService } from '../compute-transaction.service';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css']
})
export class SharesComponent implements OnInit {
  @Input() public formGroup: FormGroup;
  brokers = [
    { value: 1, label: "BDO Nomura" },
    { value: 2, label: "BPITrade" },
    { value: 2, label: "ColFinancial" },
    { value: 1, label: "FirstMetroSec" },
    { value: 2, label: "MakeTrade" },
    { value: 2, label: "PhilStocks" },
    { value: 1, label: "Others" }
  ];
  outputSelectedBroker = '';
  outputNumOfShares = '';
  constructor(private _computeTransaction: ComputeTransactionService) { }

  

  ngOnInit() {
    this.formGroup.get('selectedBroker').valueChanges.subscribe(nValue => {
      this.outputSelectedBroker = nValue;
      this._computeTransaction.getSpecificBroker(nValue);
    });
    this.formGroup.get('numOfShares').valueChanges.subscribe(nValue => {
      // this.outputNumOfShares = nValue;
      this._computeTransaction.setNumShares(nValue);
      console.log(this.outputNumOfShares);
      //this is the old value
      //console.log(this.formGroup.value.numOfShares);
    });
    this.formGroup.get('buyingPrice').valueChanges.subscribe(nValue => {
      this._computeTransaction.setBuyingPrice(nValue);
    });

  }



}
