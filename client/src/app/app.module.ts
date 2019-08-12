import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './dashboard/navigation.component';
import { HeaderComponent } from './dashboard/header.component';
import { FooterComponent } from './dashboard/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PurchaseOrdersComponent } from './purchaseOrders/purchase-orders.component';
import { ProductsComponent } from './product/products.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { AddProductComponent } from './product/add/add-product.component';
import { AddPurchaseOrderComponent } from './purchaseOrders/addPO/add-purchase-order.component';
import { AddInvoiceComponent } from './invoices/addInvoice/add-invoice.component';
import { PaymentModalComponent } from './invoices/invoice_modals/payment-modal.component';
import { DeliveryModalComponent } from './invoices/invoice_modals/delivery-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    InvoicesComponent,
    PurchaseOrdersComponent,
    ProductsComponent,
    DeliveriesComponent,
    AddProductComponent,
    AddPurchaseOrderComponent,
    AddInvoiceComponent,
    PaymentModalComponent,
    DeliveryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
