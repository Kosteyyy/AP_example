import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'paToggleView',
    templateUrl: 'toggleView.component.html'
})

export class ToggleViewComponent implements OnInit {
    showContent: boolean = true;
    
    constructor() { }

    ngOnInit() { }
}