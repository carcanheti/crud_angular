import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavigationComponent } from './template/navigation/navigation.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { HomeComponent } from '../views/home/home.component';
import { AppRoutingModule } from '../app-routing.module';

import { RedDirective } from '../directives/red.directive';
import { PainelDirective } from '../directives/painel.directive';
import { ProductCrudComponent } from '../views/product-crud/product-crud.component';
import { CreateProductComponent } from '../components/products/create-product/create-product.component';
import { CreateCustomerComponent } from '../components/customer/create-customer/create-customer.component';
import { CustomerCrudComponent } from '../views/customer-crud/customer-crud.component';
import { CreateSupplierComponent } from '../components/supplier/create-supplier/create-supplier.component';
import { SupplierCrudComponent } from '../views/supplier-crud/supplier-crud.component';
import { ProductReadComponent } from '../components/products/product-read/product-read.component';
import { ProductUpdateComponent } from '../components/products/product-update/product-update.component';
import { ProductDeleteComponent } from '../components/products/product-delete/product-delete.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, HomeComponent, 
    RedDirective, PainelDirective, CreateProductComponent, ProductCrudComponent,
    CreateCustomerComponent,CustomerCrudComponent, CreateSupplierComponent, SupplierCrudComponent,
    ProductReadComponent, ProductUpdateComponent, ProductDeleteComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [HeaderComponent, FooterComponent, NavigationComponent]
})
export class LayoutModule { }
