import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../_services/general.service';

import { Patient } from '../../_models/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Patient[];

  constructor(
    private _generalService: GeneralService
  ) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this._generalService.get('patients')
      .subscribe(response => {
        this.patients = response;
      });
  }

}
