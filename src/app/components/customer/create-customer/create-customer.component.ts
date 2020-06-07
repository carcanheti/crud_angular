import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createCustomer(){
    this.customerService.showMessage("Cliente criado com sucesso !!! ");
  }

  cancel(): void{
    this.router.navigate(['/customers'])
  }
}
