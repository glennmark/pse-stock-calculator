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
  public testInput = "banana";
  brokers = [
    { id: 0, name: "BDO Nomura" },
    { id: 1, name: "BPITrade" },
    { id: 1, name: "ColFinancial" },
    { id: 0, name: "FirstMetroSec" },
    { id: 1, name: "MakeTrade" },
    { id: 1, name: "PhilStocks" },
    { id: 0, name: "Others" }
  ];
  outputSelectedBroker = '';
  outputNumOfShares = '';
  constructor(private _computeTransaction: ComputeTransactionService) { }

  

  ngOnInit() {
    this.formGroup.get('selectedBroker').valueChanges.subscribe(nValue => {
      this.outputSelectedBroker = nValue
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
