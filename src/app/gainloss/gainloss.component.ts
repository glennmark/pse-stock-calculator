import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComputeTransactionService } from '../compute-transaction.service';

@Component({
  selector: 'app-gainloss',
  templateUrl: './gainloss.component.html',
  styleUrls: ['./gainloss.component.css']
})
export class GainlossComponent implements OnInit {
  @Input() public formGroup: FormGroup;

  constructor(private _computeTransaction: ComputeTransactionService) { }

  loss_Instance1() {
    return this._computeTransaction.loss_1();
  }
  loss_Instance2() {
    return this._computeTransaction.loss_2();
  }
  loss_Instance3() {
    return this._computeTransaction.loss_3();
  }
  loss_Instance4() {
    return this._computeTransaction.loss_4();
  }
  loss_Instance5() {
    return this._computeTransaction.loss_5();
  }

  gain_Instance1() {
    return this._computeTransaction.gain_1();
  }
  gain_Instance2() {
    return this._computeTransaction.gain_2();
  }
  gain_Instance3() {
    return this._computeTransaction.gain_3();
  }
  gain_Instance4() {
    return this._computeTransaction.gain_4();
  }
  gain_Instance5() {
    return this._computeTransaction.gain_5();
  }


  ngOnInit() {
  }

}
