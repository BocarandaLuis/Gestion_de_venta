import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Component } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SignupService {
	url = "http://localhost:8080/GESTION_VENTA/"; 

  constructor(private http: HttpClient) { 
    console.log('Hello HttpProvider Provider');

  }

  signup(user):Observable<any>{
	return this.http.post(`${this.url}/CreateUser`, user, {headers: {'Content-Type': 'application/json'}});
  }

}
