import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

    dateMessage: string;


    constructor() {

        setInterval(() => {
            let dateString = new Date();
            this.dateMessage = dateString.toDateString() + ' ' + dateString.toLocaleTimeString()
        }, 1000);


    }

    ngOnInit() {
    }

}
