import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  constructor(private router: Router) {}
  
    navigateToSales(event?: Event) {
      if (event) event.stopPropagation(); // prevent click bubbling
      this.router.navigate(['contact',]);
    }
  
}
