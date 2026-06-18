// app.routes.ts

import { Routes } from '@angular/router';
import { Appointments } from './components/appointments/appointments';
import { Doctors } from './components/doctors/doctors';
import { Patients } from './components/patients/patients';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'appointments',
        pathMatch: 'full',
    },
    {
        path: 'appointments',
        component: Appointments,
    },
    {
        path: 'doctors',
        component: Doctors,
    },
    {
        path: 'patients',
        component: Patients,
    },
];