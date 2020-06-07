import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/layout/template/header/header.service';

@Component({
  selector: 'app-supplier-crud',
  templateUrl: './supplier-crud.component.html',
  styleUrls: ['./supplier-crud.component.css']
})
export class SupplierCrudComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) { 
    headerService.headerData = {
      title: 'Cadastro de Fornecedor',
      icon: 'people',
      routeUrl: '/suppliers'
    }
  }
  ngOnInit(): void {
  }

  navigateToSupplierCreate(): void{
      this.router.navigate(['suppliers/create']);
  }
}
