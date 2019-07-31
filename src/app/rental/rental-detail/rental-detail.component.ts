import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  currentId: string;

  rental: Rental;

  constructor(private activatedRoute: ActivatedRoute,  private rentalService: RentalService,) { }

  ngOnInit() {

    // this.rental = new Rental();
    /* Avtivated route service in angular that gives you access current route and its parameter */
    this.activatedRoute.params.subscribe((params) =>{
      /* here we difine Id which define under router path that is rentalId */
    // this.currentId = params['rentalId'];
    this.getRental(params['rentalId']);
    })
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      });
  }

}


