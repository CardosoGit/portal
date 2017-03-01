import { Component } from '@angular/core'

@Component({
    selector: 'messages-component',
    templateUrl:'messages.component.html',
    styles:[`.active{
                background: blue;
                padding:10px;
                a {
                    color:white;
                }
            }`]
})

export class MessagesComponent {

}