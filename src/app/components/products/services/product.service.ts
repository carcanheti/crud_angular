import { Product } from './../model/products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // baseURL = "http://localhost:8081/products";
  baseURL = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = true): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-sucess'] : ['msg-error'],
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  errorHandler(error: any): Observable<any> {
    if ( error.status){
      console.log(error.status)
      this.showMessage('Ocorreu um erro !!!', true)
    }
    this.showMessage('Ocorreu um erro !!!', true)
    return EMPTY
  }
}
