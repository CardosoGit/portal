import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-bootstrap';

import { Calendario } from './date-calendar/calendario';
const COMPONENTS = [
    Calendario
]
@NgModule({
    imports: [DatepickerModule, CommonModule, FormsModule],
    declarations: [...COMPONENTS],
    providers: [],
    exports: [...COMPONENTS]
})

export class OmaModule { }