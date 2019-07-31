import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import {Rental} from "../shared/rental.model"

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[] = [];
  
/* Hard code data use when service not created
rentals: any[] = [{
    id: 1,
    title: "Central Apartment",
    city: "New York",
    street: "Times Sqaure",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
}]; */

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    // this.rentals = this.rentalService.getRentals();
    const rentalObservable =this.rentalService.getRentals();
    // Execute with the observer object

    rentalObservable.subscribe(
      //rentals we get from subscribe not rentals array
      (rentals: Rental[]) => {
       this.rentals = rentals;

       /* this.rentals[0]. using this we can get all the property of rentals*/
      },
      (err) =>{},
      () => {
      });
  }

}
