import {Component, OnInit} from '@angular/core';
import {RadionOptions} from '../shared/radio/radion.options';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadionOptions[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
