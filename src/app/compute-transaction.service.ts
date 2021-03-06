import { Injectable } from '@angular/core';

@Injectable()
export class ComputeTransactionService {

  private numOfShares: number;
  private buyingPrice: number;
  private sellingPrice: number;
  private specificBroker: number;
  private brokerCommission: number;

  public counter:number = 0;

  public saveData_1 = null;
  public saveData_2 = null;
  public saveData_3 = null;
  public saveData_4 = null;
  public saveData_5 = null;

  getNumShares() {
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
    //at initial load the buyingPrice is undefined so we need to make it 0
    if (this.buyingPrice == undefined) {
      this.buyingPrice = 0;
    } else {
      return this.numOfShares * this.buyingPrice;
    }
    
  }
  computeBrokersCommission_Buying() {
    if (this.getSpecificBrokerID() == 1) {
      this.brokerCommission = 0.0024555;
    } else {
      this.brokerCommission = 0.0025;
    }
    let checkBrokersCommission = this.brokerCommission * this.computeGrossTransactionAmount();
    if (checkBrokersCommission <= 20) {
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
    if (this.computeSCCPFee() != 0 && this.computePSETransactionFee() != 0) {
      return this.computeBrokersCommission_Buying() + this.computeVATonBrokersCommission() + this.computeSCCPFee() + this.computePSETransactionFee();
      
    }
    

  }
  totalBuyingTransactionCost() {
    if (this.computeSCCPFee() != 0 && this.computePSETransactionFee() != 0) {
      return this.computeGrossTransactionAmount() + this.computeBrokersCommission_Buying() + this.computeVATonBrokersCommission() + this.computeSCCPFee() + this.computePSETransactionFee();
    }
  }
  breakEven() {
    return this.buyingPrice * 1.011;
  }

  //selling
  computeGrossTransactionAmount_Selling() {
    return this.numOfShares * this.sellingPrice;
  }
  computeBrokersCommission_Selling() {
    if (this.getSpecificBrokerID() == 1) {
      this.brokerCommission = 0.0024555;
    } else {
      this.brokerCommission = 0.0025;
    }
    let checkBrokersCommission = this.brokerCommission * this.computeGrossTransactionAmount_Selling();
    if (checkBrokersCommission <= 20) {
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
    if (this.computeSCCPFee() != 0 && this.computePSETransactionFee() != 0) {
      return this.computeBrokersCommission_Selling() + this.computeVATonBrokersCommission() + this.computeSCCPFee() + this.computePSETransactionFee() + this.computeStockTransactionTax();
    }
    

  }
  totalSellingTransactionCost() {
    if (this.computeSCCPFee() != 0 && this.computePSETransactionFee() != 0) {
      return this.computeGrossTransactionAmount_Selling() - this.computeBrokersCommission_Selling() - this.computeVATonBrokersCommission() - this.computeSCCPFee() - this.computePSETransactionFee() - this.computeStockTransactionTax();
    }
    
  }

  netProfit() {
    return this.totalSellingTransactionCost() - this.totalBuyingTransactionCost();
  }
  netProfitInPercentage() {
    let nValue = (this.netProfit() / this.totalBuyingTransactionCost()) * 100;
    if (isNaN(nValue)) return 0;
    return nValue.toFixed(2);
  }


  //loss
  loss_1() {

    let nValue = this.buyingPrice * .981
    return nValue.toFixed(2);
  }
  loss_2() {
    let nValue = this.buyingPrice * .96;
    return nValue.toFixed(2);
  }
  loss_3() {
    let nValue = this.buyingPrice * .93;
    return nValue.toFixed(2);
  }
  loss_4() {
    let nValue = this.buyingPrice * .91;
    return nValue.toFixed(2);
  }
  loss_5() {
    let nValue = this.buyingPrice * .859;
    return nValue.toFixed(2);
  }

  //gain
  gain_1() {
    let nValue = this.buyingPrice * 1.041;
    return nValue.toFixed(2);
  }
  gain_2() {
    let nValue = this.buyingPrice * 1.061;
    return nValue.toFixed(2);
  }
  gain_3() {
    let nValue = this.buyingPrice * 1.092;
    return nValue.toFixed(2);
  }
  gain_4() {
    let nValue = this.buyingPrice * 1.112;
    return nValue.toFixed(2);
  }
  gain_5() {
    let nValue = this.buyingPrice * 1.163;
    return nValue.toFixed(2);
  }

  //saving
  saveComputation() {
    this.counter += 1;
    let computation = {
      "numOfShares":this.numOfShares,
      "buyingPrice":(this.buyingPrice).toFixed(2),
      "sellingPrice":(this.sellingPrice).toFixed(2),
      "buyingAmount":(this.totalBuyingTransactionCost()).toFixed(2),
      "sellingAmount":(this.totalSellingTransactionCost()).toFixed(2),
      "breakEven":(this.breakEven()).toFixed(2),
      "netProfit":(this.netProfit()).toFixed(2),
      "netProfitInPercentage":this.netProfitInPercentage()
      };
      if (this.counter > 5) {
        return false;
      } else {
        localStorage.setItem("computation_savedData_" + this.counter, JSON.stringify(computation));
        this.loadSavedComputation();

      }
      
  }

  loadSavedComputation() {

    let s1 = localStorage.getItem("computation_savedData_1");
    let s2 = localStorage.getItem("computation_savedData_2");
    let s3 = localStorage.getItem("computation_savedData_3");
    let s4 = localStorage.getItem("computation_savedData_4");
    let s5 = localStorage.getItem("computation_savedData_5");

    if(s1)  {
      this.saveData_1 = JSON.parse(s1);
    }
    if(s2)  {
      this.saveData_2 = JSON.parse(s2);
    }
    if(s3)  {
      this.saveData_3 = JSON.parse(s3);
    }
    if(s4)  {
      this.saveData_4 = JSON.parse(s4);
    }
    if(s5)  {
      this.saveData_5 = JSON.parse(s5);
    }

    
    
    
  }


  constructor() { }

}
