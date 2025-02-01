import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  vehicleId: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.vehicleId = this.route.snapshot.paramMap.get('vehicleId');
  }

  confirmBooking() {
    this.router.navigate(['/payment']);
  }
}
