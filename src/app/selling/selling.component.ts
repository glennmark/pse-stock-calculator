import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {
  @Input() public formGroup: FormGroup;
  outputSellingPrice = '';

  constructor() { }

  ngOnInit() {
    this.formGroup.get('sellingPrice').valueChanges.subscribe(nValue => {
      this.outputSellingPrice = nValue;
    });
  }

}
