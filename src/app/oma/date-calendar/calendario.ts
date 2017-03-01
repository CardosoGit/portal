import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'calendario',
    template: `
      <label>{{label}}</label>
      <input value="{{dateModel?.getTime() | date:'mediumDate'}}" class="form-control"     (focus)="showPopup()" />
      <datepicker class="popup" *ngIf="showDatepicker" [(ngModel)]="dateModel" (blur)="hiPopup()" [showWeeks]="true" (selectionDone)="hidePopup($event)" ></datepicker>
  `,
    styles: [`
    .popup {
      position: absolute;
      background-color: black;
      border-radius: 3px;
      border: 1px solid #ddd;
      height: 251px;
      z-index:999;
    }
  `],
})

export class Calendario {
    @Input()
    dateModel: Date;
    @Input()
    label: string;
    @Output()
    dateModelChange: any = new EventEmitter();
    private showDatepicker: boolean = false;

    showPopup() {
        this.showDatepicker = true;
    }

    hiPopup(){
        this.showDatepicker = false;
    }

    hidePopup(event) {
        this.showDatepicker = false;
        this.dateModel = event;
        this.dateModelChange.emit(event)
    }
}