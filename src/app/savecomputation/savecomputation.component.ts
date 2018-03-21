import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ComputeTransactionService } from '../compute-transaction.service';
import { FormGroup } from '@angular/forms';
import { DisplaySaveComputationComponent } from '../display-save-computation/display-save-computation.component';


@Component({
  selector: 'app-savecomputation',
  templateUrl: './savecomputation.component.html',
  styleUrls: ['./savecomputation.component.css']
})
export class SavecomputationComponent implements OnInit {
  
  @Input() public formGroup: FormGroup;

  constructor(private _computeTransaction: ComputeTransactionService, private _componentDisplaySaveComputation: DisplaySaveComputationComponent) { }

  saveComputation() {
     this._computeTransaction.saveComputation();
     this._componentDisplaySaveComputation.loadSavedComputation();
     console.log('data 2 is: ' + this._componentDisplaySaveComputation.savedData2)
  }
  clearSavedComputation() {
    localStorage.clear();
    this._componentDisplaySaveComputation.clearSavedComputation();
    this._computeTransaction.counter = 0;
  }

  ngOnInit() {
  }



}
