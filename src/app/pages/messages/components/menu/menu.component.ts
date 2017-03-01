import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'menu-comp',
    templateUrl: 'menu.component.html',
    styleUrls:['menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input() items: any[];
    constructor() { }

    ngOnInit() { }
}