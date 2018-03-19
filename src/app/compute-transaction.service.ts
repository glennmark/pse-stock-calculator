import { Injectable } from '@angular/core';

@Injectable()
export class ComputeTransactionService {

  private numOfShares: number;
  private buyingPrice: number;
  private sellingPrice:number;
  private specificBroker:number;
  private brokerCommission:number;

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
  getSellingPrice() {
    return this.sellingPrice;
  }
  setSellingPrice(i: number) {
    this.sellingPrice = i;
  }
  getSpecificBroker(i: number) {
    this.specificBroker = i;
  }
  getSpecificBrokerID() {
   return this.specificBroker;
  }


  //buying
  computeGrossTransactionAmount() {
    return this.numOfShares * this.buyingPrice;
  }
  computeBrokersCommission_Buying() {
    if(this.getSpecificBrokerID() == 0) {
      this.brokerCommission = 0.0024555;
    } else {
      this.brokerCommission = 0.0025;
    }
    let checkBrokersCommission = this.brokerCommission * this.computeGrossTransactionAmount();
    if(checkBrokersCommission<= 20) {
      return 20;
    } else {
      return this.brokerCommission * this.computeGrossTransactionAmount();
    }
  }
  computeVATonBrokersCommission() {
    return 0.12 * this.computeBrokersCommission_Buying();
  }
  computeSCCPFee() {
    return 0.0001 * this.computeGrossTransactionAmount();
  }
  computePSETransactionFee() {
    return 0.00005 * this.computeGrossTransactionAmount();
  }
  totalBuyingFees() {
    /*console.log("add broker commisssion:" + this.computeBrokersCommission_Buying());
    console.log("add vat:" + this.computeVATonBrokersCommission());
    console.log("add sccp fee:" + this.computeSCCPFee());
    console.log("add pse fee:" + this.computePSETransactionFee());
    console.log("===========");*/
    return this.computeBrokersCommission_Buying() + this.computeVATonBrokersCommission() + this.computeSCCPFee() + this.computePSETransactionFee();
    
  }
  totalBuyingTransactionCost() {
    return this.computeGrossTransactionAmount() + this.computeBrokersCommission_Buying() + this.computeVATonBrokersCommission() + this.computeSCCPFee() + this.computePSETransactionFee();
  }

  //selling
  computeGrossTransactionAmount_Selling() {
    return this.numOfShares * this.sellingPrice;
  }
  computeBrokersCommission_Selling() {
    if(this.getSpecificBrokerID() == 0) {
      this.brokerCommission = 0.0024555;
    } else {
      this.brokerCommission = 0.0025;
    }
    let checkBrokersCommission = this.brokerCommission * this.computeGrossTransactionAmount_Selling();
    if(checkBrokersCommission<= 20) {
      return 20;
    } else {
      return this.brokerCommission * this.computeGrossTransactionAmount_Selling();
    }
  }
  computeStockTransactionTax() {
    return 0.005 * this.computeGrossTransactionAmount_Selling();
  }
  totalSellingFees() {
    /*console.log("less broker commisssion:" + this.computeBrokersCommission_Selling());
    console.log("less vat:" + this.computeVATonBrokersCommission());
    console.log("less sccp fee:" + this.computeSCCPFee());
    console.log("less pse fee:" + this.computePSETransactionFee());
    console.log("less transaction tax:" + this.computeStockTransactionTax());
    console.log("===========");*/
    return this.computeBrokersCommission_Selling() + this.computeVATonBrokersCommission() + this.computeSCCPFee() + this.computePSETransactionFee() + this.computeStockTransactionTax();
    
  }
  totalSellingTransactionCost() {
    return this.computeGrossTransactionAmount_Selling() - this.computeBrokersCommission_Selling() - this.computeVATonBrokersCommission() - this.computeSCCPFee() - this.computePSETransactionFee() - this.computeStockTransactionTax();
  }
  
  netProfit() {
    return this.totalSellingTransactionCost() - this.totalBuyingTransactionCost();
  }


  constructor() { }

}
