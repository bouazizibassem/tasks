import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-horizontal',
  templateUrl: './stepper-horizontal.component.html',
  styleUrls: ['./stepper-horizontal.component.scss']
})
export class StepperHorizontalComponent implements OnInit {

  isLinear = false;
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}


  ngOnInit(): void {
  }

}
