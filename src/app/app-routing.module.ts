import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './_layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from './_layouts/login-layout/login-layout.component';

import { LoginComponent } from './components/login/login.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';

import { AuthGuard } from './_guard/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', redirectTo: '/patients', pathMatch: 'full', canActivate: [AuthGuard] },
			{ path: 'patients', component: PatientsComponent, canActivate: [AuthGuard] },
			{ path: 'patient/:id', component: PatientDetailComponent, canActivate: [AuthGuard] },
		]
	},
	{
		path: '',
		component: LoginLayoutComponent,
		children: [
			{ path: 'login', component: LoginComponent }
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [AuthGuard]
})
export class AppRoutingModule { }
