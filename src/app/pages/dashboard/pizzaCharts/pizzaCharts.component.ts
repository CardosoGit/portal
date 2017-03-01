import { Component, ViewEncapsulation } from '@angular/core';
import { BaThemeConfigProvider } from '../../../theme';

import { DashboardService } from '../dashboard.service';

@Component({
    selector: "pizza-charts",
    encapsulation: ViewEncapsulation.None,
    styles: [require('./pizzaCharts.scss')],
    template: require('./pizzaCharts.html')
})

export class PizzaCharts {


    dataAtendimentos = {
        simplePieData: {
            labels: [],
            series: []
        },
        simplePieOptions: {
            fullWidth: true,
            height: '300px',
            weight: '300px',
            chartPadding: 40,
            labelOffset: 90,
            labelDirection: 'explode',
            labelInterpolationFnc: function (value) {
                return value;
            }
        }
    };
    dataCallTypes = {
        simplePieData: {
            labels: [],
            series: []
        },
        simplePieOptions: {
            fullWidth: true,
            height: '300px',
            weight: '300px',
            chartPadding: 40,
            labelOffset: 90,
            labelDirection: 'explode',
            labelInterpolationFnc: function (value) {
                return value;
            }
        }
    };
    dataTimeToResolution = {
        simplePieData: {
            labels: [],
            series: []
        },
        simplePieOptions: {
            fullWidth: true,
            height: '300px',
            weight: '300px',
            chartPadding: 40,
            labelOffset: 90,
            labelDirection: 'explode',
            labelInterpolationFnc: function (value) {
                return value;
            }
        }
    };
    dataByService = {
        simplePieData: {
            labels: [],
            series: []
        },
        simplePieOptions: {
            fullWidth: true,
            height: '300px',
            weight: '300px',
            chartPadding: 40,
            labelOffset: 90,
            labelDirection: 'explode',
            labelInterpolationFnc: function (value) {
                return value;
            }
        }
    };
    constructor(private _baConfig: BaThemeConfigProvider, private service: DashboardService) { }

    public ngOnInit() {
        this.initAtendimentos();
        this.initdataTypeService();
        this.initTimeToResolution();
        this.initCallTypes();
    }

    private initCallTypes() {
        let data: any[] = this.service.getTypeAtendimentos();
        data.forEach((value, index) => {
            this.dataCallTypes.simplePieData.labels.push(value.desc);
            this.dataCallTypes.simplePieData.series.push(value.qtd);
        })
    }
    private initAtendimentos() {
        let data: any[] = this.service.getTypeSuport();
        data.forEach((value, index) => {
            this.dataAtendimentos.simplePieData.labels.push(value.desc);
            this.dataAtendimentos.simplePieData.series.push(value.qtd);
        })
    }

    private initdataTypeService() {
        let data: any[] = this.service.getTypeServices();
        data.forEach((value, index) => {
            this.dataByService.simplePieData.labels.push(value.desc);
            this.dataByService.simplePieData.series.push(value.qtd);
        })
    }

    private initTimeToResolution() {
        let data: any[] = this.service.getTimeToResolution();
        data.forEach((value, index) => {
            this.dataTimeToResolution.simplePieData.labels.push('Até ' + value.desc + ' hora');
            this.dataTimeToResolution.simplePieData.series.push(value.qtd);
        })
    }

    public getResponsive(padding, offset) {
        return [
            ['screen and (min-width: 1550px)', {
                chartPadding: padding,
                labelOffset: offset,
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value;
                }
            }],
            ['screen and (max-width: 1200px)', {
                chartPadding: padding,
                labelOffset: offset,
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value;
                }
            }],
            ['screen and (max-width: 600px)', {
                chartPadding: padding,
                labelOffset: offset,
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }]
        ];
    }

}
