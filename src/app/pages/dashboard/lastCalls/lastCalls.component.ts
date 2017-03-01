import { Component, ViewEncapsulation } from '@angular/core';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'last-calls',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./lastCalls.scss')],
  template: require('./lastCalls.html')
})
export class LastCalls {

  public list: any[];
  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.list = this.service.getLastCalls();
  }
}
