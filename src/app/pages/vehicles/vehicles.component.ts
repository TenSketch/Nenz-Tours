import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Import RouterModule
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {
  vehicles = [
    { id: 1, name: 'Toyota Innova', type: 'SUV', image: 'innova.png', price: 3000 },
    { id: 2, name: 'Maruti Swift', type: 'Hatchback', image: 'swift.png', price: 1500 },
    { id: 3, name: 'Mercedes Benz', type: 'Luxury', image: 'benz.png', price: 8000 }
  ];
}
