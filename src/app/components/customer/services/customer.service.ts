import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void{
     this.snackBar.open(msg, 'x', {
       duration: 3000,
       horizontalPosition: "right",
       verticalPosition: "top",
     })
  }
}
