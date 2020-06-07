import { SupplierService } from './../supplier.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  constructor(private supplierService: SupplierService,
    private router: Router) { }

  ngOnInit(): void {
  }


  createSupplier(): void{
      this.supplierService.showMessage("Fornecedor criado com sucesso !!!");
  }

  cancel(): void{
      this.router.navigate(['/suppliers'])
  }

}
