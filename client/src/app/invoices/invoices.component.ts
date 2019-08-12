import { Component, OnInit } from '@angular/core';
import { PaymentModalComponent } from './invoice_modals/payment-modal.component';
import { DeliveryModalComponent } from './invoice_modals/delivery-modal.component';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

    paymentModal = new PaymentModalComponent();
    deliveryModal = new DeliveryModalComponent();

  constructor() { }

  ngOnInit() {
  }

  showPaymentModal(): void {
    this.paymentModal.showModal();
  }

  showDeliveryModal(): void{
    this.deliveryModal.showDeliveryModal();
  }
}
