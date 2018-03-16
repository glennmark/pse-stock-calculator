import { Injectable } from '@angular/core';

@Injectable()
export class ComputeTransactionService {

  private numOfShares: number;
  private buyingPrice: number;

  getNumShares(){
    return this.numOfShares;
  }

  setNumShares(i: number) {
    this.numOfShares = i; 
  }

  getBuyingPrice() {
    return this.buyingPrice;
  }
  setBuyingPrice(i: number) {
    this.buyingPrice = i;
  }
  computeGrossTransactionAmount() {
    return this.numOfShares * this.buyingPrice;
  }

  constructor() { }

}
