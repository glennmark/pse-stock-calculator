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
  computeBrokersCommission() {
    return 0.0025 * this.computeGrossTransactionAmount()
  }
  computeVATonBrokersCommission() {
    return 0.12 * this.computeBrokersCommission();
  }
  computeSCCPFee() {
    return 0.0001 * this.computeGrossTransactionAmount();
  }
  computePSETransactionFee() {
    return 0.00005 * this.computeGrossTransactionAmount();
  }
  totalFees() {
    return this.computeBrokersCommission() + this.computeVATonBrokersCommission() + this.computeSCCPFee() + this.computePSETransactionFee();
  }
  totalBuyingTransactionCost() {
    return this.computeGrossTransactionAmount() + this.computeBrokersCommission() + this.computeVATonBrokersCommission() + this.computeSCCPFee() + this.computePSETransactionFee();
  }

  constructor() { }

}
