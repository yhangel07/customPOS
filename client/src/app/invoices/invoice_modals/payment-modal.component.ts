import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }

  showModal():void {
    $('#paymentModal').modal('show');
    
  }

  hideModal():void {
    $("#paymentModal").modal('hide');
  }
}
