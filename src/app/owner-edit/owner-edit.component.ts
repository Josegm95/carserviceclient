import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnersService } from '../shared/owners/owners.service';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {
  private owner: any = {};
  private title: string = '';
  private cars: any[];

  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnersService,
    private router: Router,
    private carService: CarService
  ) {}

  ngOnInit() {
    const dni: string = this.route.snapshot.params.dni;

    if (dni) {
      this.ownerService.getId(dni).subscribe(data => {
        this.ownerService.get(data[0].id).subscribe((owner: any) => {
          this.owner = owner;
          this.owner.href = owner._links.self.href;
        });
      });
      this.title = 'Edit Owner';
    } else {
      this.title = 'Create Owner';
    }

    this.carService.getAllHref().subscribe((cars: any) => {
      this.cars = cars._embedded.cars;
    });
  }

  goList() {
    this.router.navigate(['/owner-list']);
  }

  saveOwner(form: NgForm) {
    this.ownerService.save(form).subscribe(data => {
      this.goList();
    });
  }

  deleteOwner(href: string) {
    this.ownerService.remove(href).subscribe(data => {
      this.goList();
      this.cars.forEach((car: any) => {
        if (car.ownerDni === this.owner.dni) {
          const carSave: any = {};
          carSave.href = car._links.self.href;
          carSave.name = car.name;
          carSave.ownerDni = null;
          this.carService.save(carSave).subscribe();
        }
      });
    });
  }
}
