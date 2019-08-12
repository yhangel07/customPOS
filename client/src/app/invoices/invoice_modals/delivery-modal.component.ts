import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-delivery-modal',
  templateUrl: './delivery-modal.component.html',
  styleUrls: ['./delivery-modal.component.css']
})
export class DeliveryModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showDeliveryModal() : void{
    $('#deliveryModal').modal('show');
  }

  hideDeliveryModal() : void {
    $('#deliveryModal').modal('hide');
  }
}
