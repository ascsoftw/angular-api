import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '../../_services/general.service';
import { Patient } from '../../_models/patient';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {


  patient: Patient;
  patientId: number;

  constructor(
    private _generalService: GeneralService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.patientId = +this._route.snapshot.paramMap.get('id');
    this.getDetail();
  }

  getDetail() {
    this._generalService.get('patients/' + this.patientId)
      .subscribe(response => {
        this.patient = response;
      },
        (error) => {
          this._router.navigate(['/patients']);
        });
  }
}
