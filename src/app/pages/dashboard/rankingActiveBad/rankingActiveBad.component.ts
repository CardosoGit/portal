import { Component, ViewEncapsulation } from '@angular/core';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'rank-active-bad',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./rankingActiveBad.scss')],
  template: require('./rankingActiveBad.html')
})
export class RankingActiveBad {

  public list: any[];
  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.list = this.service.getRankingActiveBad();
  }

}
