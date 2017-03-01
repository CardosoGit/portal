import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { DatepickerModule } from 'ng2-bootstrap';
import { CommonModule } from '@angular/common';

import { AdminService } from './admin.service';
import { AdminComponent } from './admin.component';
import { routing } from './admin.routing';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [routing, CommonModule, HttpModule, JsonpModule,
        FormsModule, NgaModule, DatepickerModule],
    declarations: [AdminComponent],
    providers: [AdminService]
})

export default class AdminModule {

}