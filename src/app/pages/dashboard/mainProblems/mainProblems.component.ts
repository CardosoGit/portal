import { SmartTablesService } from '../../tables/components/smartTables/smartTables.service';
import { Component, ViewEncapsulation } from '@angular/core';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'main-problems',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./mainProblems.scss')],
  template: require('./mainProblems.html')
})
export class MainProblems {
  public list: any[];
  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.list = this.service.getMainProblems();
  }

}
