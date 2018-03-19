import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComputeTransactionService } from '../compute-transaction.service';


@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  
  @Input() public formGroup: FormGroup;
  

  outputBuyingPrice = '';
  
  constructor(private _computeTransaction: ComputeTransactionService) { }

  private computeGrossTransactionAmount(){
    return this._computeTransaction.computeGrossTransactionAmount();
  }
  private computeBrokersCommission_Buying() {
    return this._computeTransaction.computeBrokersCommission_Buying();
  }
  private computeVATonBrokersCommission() {
    return this._computeTransaction.computeVATonBrokersCommission();
  }
  private computeSCCPFee() {
    return this._computeTransaction.computeSCCPFee();
  }
  private computePSETransactionFee() {
    return this._computeTransaction.computePSETransactionFee();
  }
  private totalBuyingTransactionCost() {
    return this._computeTransaction.totalBuyingTransactionCost();
  }
  private totalBuyingFees() {
    return this._computeTransaction.totalBuyingFees();
  }
  private breakEven() {
    return this._computeTransaction.breakEven();
  }
  
  

  ngOnInit() {
    this.formGroup.get('buyingPrice').valueChanges.subscribe(nValue => {
      this.outputBuyingPrice = nValue;
      this._computeTransaction.setBuyingPrice(nValue);
    });

  }

}
