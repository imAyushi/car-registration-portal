import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  brand!: number;
  model!: string;
  km!: number;
  year!: number;
  shift!: string;
  fuel!: string;
  color!: string;
  car_type!: string;
  e_car!: boolean;
  public alterEgo?: string
  public stepper!: Stepper;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  values: any[] = []
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.values.push({ problem: "", cost: "" })
  }

  next() {
    this.stepper.next();
  }
  addForm() {
    this.values.push({ problem: "", cost: "" })
  }

}
