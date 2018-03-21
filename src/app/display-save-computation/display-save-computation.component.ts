import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe,NgIf } from '@angular/common';
import { ComputeTransactionService } from '../compute-transaction.service';

@Component({
  selector: 'app-display-save-computation',
  templateUrl: './display-save-computation.component.html',
  styleUrls: ['./display-save-computation.component.css']
})
export class DisplaySaveComputationComponent implements OnInit {
  
  
  savedData1 = null;
  savedData2 = null;
  savedData3 = null;
  savedData4 = null;
  savedData5 = null;

   loadSavedComputation() {
    this._computeTransaction.loadSavedComputation();
    console.log('initializing loadSavedComputation function')
    if(this._computeTransaction.saveData_1){
      this.savedData1 = Object.keys(this._computeTransaction.saveData_1);
    }
    if(this._computeTransaction.saveData_2){
      this.savedData2 = Object.keys(this._computeTransaction.saveData_2);
    }
    if(this._computeTransaction.saveData_3){
      this.savedData3 = Object.keys(this._computeTransaction.saveData_3);
    }
    if(this._computeTransaction.saveData_4){
      this.savedData4 = Object.keys(this._computeTransaction.saveData_4);
    }
    if(this._computeTransaction.saveData_5){
      this.savedData5 = Object.keys(this._computeTransaction.saveData_5);
    }
  }

  clearSavedComputation() {
    this._computeTransaction.saveData_1 = null;
    this._computeTransaction.saveData_2 = null;
    this._computeTransaction.saveData_3 = null;
    this._computeTransaction.saveData_4 = null;
    this._computeTransaction.saveData_5 = null;
    this.savedData1 = null;
    this.savedData2 = null;
    this.savedData3 = null;
    this.savedData4 = null;
    this.savedData5 = null;
  }
  
    constructor(private _computeTransaction: ComputeTransactionService) { }
  
    

    
  
    ngOnInit() {
      this.loadSavedComputation();
    }
  
    
  
  }


