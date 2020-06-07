import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../model/products.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };
  
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe( () => {
      this.productService.showMessage('Operação executada com sucesso !!!')
      this.router.navigate(['/products']);
    })
   
      }

  cancel(): void{
    this.router.navigate(['/products']);
  }
  
  
}
