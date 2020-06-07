import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { CustomerCrudComponent } from './views/customer-crud/customer-crud.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { CreateSupplierComponent } from './components/supplier/create-supplier/create-supplier.component';
import { SupplierCrudComponent } from './views/supplier-crud/supplier-crud.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component:CreateProductComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "customers",
    component: CustomerCrudComponent
  },
  {
    path: "customer/create",
    component: CreateCustomerComponent
  },
  {
    path: "suppliers",
    component: SupplierCrudComponent
  },
  {
    path: "suppliers/create",
    component: CreateSupplierComponent
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
