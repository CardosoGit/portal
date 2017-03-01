import { BaThemeSpinner } from '../../theme/services/baThemeSpinner';
import { DashboardService } from './dashboard.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {
  isMostrar = false;
  constructor(private service: DashboardService, private _spinner: BaThemeSpinner) {
    this._spinner.show();
    this.service.isRecebido.subscribe(status => {
      if (status) {
        this.isMostrar = true;
        this._spinner.hide();
        
      }
    })

  }

}
