import { ModalDirective } from 'ng2-bootstrap';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'novo-call',
    templateUrl: 'novo-call.component.html',
    styles: [`.modal-content{
                background-color: #10638c;
                
             }
             .hoverview{
                 display:none;
                 padding:10px 10px;
                 max-width:300px;
             }
        `]
})

export class NovoCallComponent {
    dt: any;
    d: any = { title: '' };
    @ViewChild('childModal') childModal: ModalDirective;
    @ViewChild('hoverView') hoverView: ElementRef;
    data: any = {
        equipamento: '',
        problema: ''
    };
    public calendarConfiguration: any = {
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2016-03-08',
        selectable: true,
        selectHelper: true,
        editable: true,
        eventLimit: true,
        events: [
            {
                title: 'All Day Event',
                start: '2016-03-01',
                color: 'red'
            },
            {
                title: 'Long Event',
                start: '2016-03-07',
                end: '2016-03-10',
                color: 'red'
            },
            {
                title: 'Dinner',
                start: '2016-03-14T20:00:00',
                color: 'red'
            },
            {
                title: 'Birthday Party',
                start: '2016-04-01T07:00:00',
                color: 'red'
            }
        ]
    };
    private _calendar: Object;
    constructor() {
        this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
        this.calendarConfiguration.eventClick = (calEvent, jsEvent, view) => this._eventClick(calEvent, jsEvent, view);
        this.calendarConfiguration.eventMouseover = (event, jsEvent, view) => this._onMouseOver(event, jsEvent, view);
        this.calendarConfiguration.eventMouseout = (event, jsEvent, view) => this._onMouseout(event, jsEvent, view);
    }
    public onCalendarReady(calendar): void {
        this._calendar = calendar;
    }

    private _eventClick(calEvent, jsEvent, view) {
        // alert('Event: ' + calEvent.title);
        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        // alert('View: ' + view.name);
        this.data.calEvent = calEvent;
        this.data.jsEvent = jsEvent;
        this.data.vew = view;
        this.data.equipamento = calEvent.equipamento;
        this.data.problema = calEvent.title;
        this.showChildModal();
    }

    private _onMouseOver(event, jsEvent, view) {
        if (event.title) {
            this.d.title = event.title;
            jQuery(this.hoverView.nativeElement).css({
                'left': jsEvent.pageX - 50,
                'top': jsEvent.pageY - 80
            }).fadeIn("slow");
        }
    }

    private _onMouseout(event, jsEvent, view) {
        jQuery(this.hoverView.nativeElement).fadeOut('slow');
    }

    private _onSelect(start, end): void {
        this.clearData();
        if (this._calendar != null) {
            this.data.calEvent = {
                id: Math.floor((Math.random() * 1000) + 1),
                start: start,
                end: end
            };
            //jQuery(this._calendar).fullCalendar('unselect');
        }
        this.childModal.show();
    }

    showChildModal(): void {
        this.childModal.show();
    }

    salvar() {
        this.data.calEvent.title = this.data.equipamento + ' ' + this.data.problema;
        this.data.calEvent.equipamento = this.data.equipamento;
        jQuery(this._calendar).fullCalendar('renderEvent', this.data.calEvent, true);
        this.childModal.hide();
    }

    deletar() {
        jQuery(this._calendar).fullCalendar('removeEvents', this.data.calEvent.id);
        this.childModal.hide();
    }

    hideChildModal(): void {
        this.childModal.hide();
    }

    private clearData() {
        this.data.equipamento = '';
        this.data.problema = '';
    }
}