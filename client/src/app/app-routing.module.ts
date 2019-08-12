import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './dashboard/navigation.component';
import { HeaderComponent } from './dashboard/header.component';
import { FooterComponent } from './dashboard/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PurchaseOrdersComponent } from './purchaseOrders/purchase-orders.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { ProductsComponent } from './product/products.component';
import { AddProductComponent } from './product/add/add-product.component';
import { AddPurchaseOrderComponent } from './purchaseOrders/addPO/add-purchase-order.component';
import { AddInvoiceComponent } from './invoices/addInvoice/add-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    outlet: "navigation"
  },
  {
    path: '',
    component: HeaderComponent,
    outlet: "header"
  },
  {
    path: '',
    component: FooterComponent,
    outlet: "footer"
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'deliveries', component: DeliveriesComponent },
  { path: 'invoices', component:  InvoicesComponent },
  { path: 'purchaseOrders', component: PurchaseOrdersComponent },
  { path: 'products' , component: ProductsComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'purchaseOrders/add', component: AddPurchaseOrderComponent },
  { path: 'invoices/add', component: AddInvoiceComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
