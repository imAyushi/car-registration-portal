import { Component, HostListener, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/shared/car.model';
import { CarService } from 'src/app/shared/car.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
carDetails: CarDetails[] = [];
page = 1;
cars: CarDetails[] = [];
filterString:string='';

  constructor(private carService:CarService) { }

  ngOnInit(): void {
   
    this.carService.getCarDetail().subscribe((data:CarDetails[])=>{
      this.carDetails=data;
    })
  }
  onScroll(): void {
    this.carService
      .getCarDetail()
      .subscribe((data:CarDetails[]) => {
        this.carDetails.push(...data);
      });
  }
}
