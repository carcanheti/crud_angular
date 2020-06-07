import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/layout/template/header/header.service';

@Component({
  selector: 'app-customer-crud',
  templateUrl: './customer-crud.component.html',
  styleUrls: ['./customer-crud.component.css']
})
export class CustomerCrudComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) { 
    headerService.headerData = {
      title: 'Cadastro de Cliente',
      icon: 'people',
      routeUrl: '/customers'
    }
  }
  ngOnInit(): void {
  }

  navigateToCustomerCreate(): void{
      this.router.navigate(['customer/create']);
  }
}
