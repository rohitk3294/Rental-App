import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { HttpClient } from '@angular/common/http';


import {Rental} from "../shared/rental.model"

@Injectable()
export class RentalService {  

constructor(private http: HttpClient){}
public getRentalById(rentalId: string): Observable<any> {
  return this.http.get('/api/v1/rentals/' + rentalId);
}
 
 
     
  public getRentals(): Observable<any>{

    return this.http.get('/api/v1/rentals')
  }





}
   











































































/* when we happ no api data
  private  rentals: Rental[] = [{
        id: "1",
        title: "Central Apartment",
        city: "Noida",
        street: "Times Sqaure",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "2",
        title: "Central Apartment 2",
        city: "Delhi",
        street: "Main street",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 12,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: "3",
        title: "Central Apartment 3",
        city: "Agra",
        street: "Hlavna",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: "4",
        title: "Central Apartment 4",
        city: "Mumbai",
        street: "Haupt strasse",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 9,
        description: "Very nice apartment",
        dailyRate: 33,
        shared: true,
        createdAt: "24/12/2017"
    }]; */


/*     public getRentalById(rentalId: string): Observable<Rental> {
     return  new Observable((observer) => {
            setTimeout(() =>{
              const foundRental= this.rentals.find((rental)=> {
              return rental.id == rentalId;
                }); 
                observer.next(foundRental);       
            }, 500);
        });
      }

     public getRentals(): Observable<Rental[]>{
     return new Observable<Rental[]>((observer) => {
        Here we call Asyncrounous Function with Defining observers to understand Observer
        setTimeout(() =>{
            observer.next(this.rentals);
        }, 1000);
 */

    /* For only learning purpose   
       setTimeout(() =>{
            observer.error("Error");
        }, 2000);
        setTimeout(() =>{
            observer.complete();
        }, 3000);
     

    });
    //   return rentalObservable;
    }*/


