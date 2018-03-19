import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComputeTransactionService } from '../compute-transaction.service';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {
  @Input() public formGroup: FormGroup;
  outputSellingPrice = '';

  constructor(private _computeTransaction: ComputeTransactionService) { }

  private computeStockTransactionTax() {
    return this._computeTransaction.computeStockTransactionTax();
  }
  private totalSellingFees() {
    return this._computeTransaction.totalSellingFees();
  }
  private totalSellingTransactionCost() {
    return this._computeTransaction.totalSellingTransactionCost();
  }
  private netProfit() {
    return this._computeTransaction.netProfit();
  }
  

  ngOnInit() {
    this.formGroup.get('sellingPrice').valueChanges.subscribe(nValue => {
      this.outputSellingPrice = nValue;
      this._computeTransaction.setSellingPrice(nValue);
    });
  }

}
