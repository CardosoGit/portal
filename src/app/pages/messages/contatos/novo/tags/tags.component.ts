import { MessagesService } from '../../../messages.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'tags',
    templateUrl: 'tags.component.html',
    styleUrls: ['tags.component.scss']
})

export class TagsComponent implements OnInit {

    typedTag: string;
    selectedTag: any;
    tags: any[] = [];
    listOfTags: any[] = [];
    @Input() modelTags: any;
    @Output() modelTagsChange: any = new EventEmitter();

    constructor(private serv: MessagesService) { }

    ngOnInit() {
        this.serv.buscarTags().subscribe(tags => {
            this.tags = tags;
        })
    }

    keyUp() {
        if (this.typedTag != '')
            this.listOfTags = this.tags.filter((value, index) => value.toLowerCase().indexOf(this.typedTag.toLowerCase()) > -1)
        else
            this.listOfTags = [];
    }
    selectClient(tag) {
        this.typedTag = tag;
        this.selectedTag = tag;
        this.listOfTags = [];
        this.modelTags = tag;
        this.modelTagsChange.emit(tag);
    }
}