import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToSales(event?: Event) {
    if (event) event.stopPropagation(); // prevent click bubbling
    this.router.navigate(['solutions/corporate/sales',]);
  }

  navigateToMindsetSkills(event?: Event) {
    if (event) event.stopPropagation(); // prevent click bubbling
    this.router.navigate(['solutions/corporate/mindset-skills',]);
  }

  navigateToOneOnOne(event?: Event) {
    if (event) event.stopPropagation(); // prevent click bubbling
    this.router.navigate(['solutions/personal/one-on-one',]);
  }

}