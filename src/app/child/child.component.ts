import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childName:string;
  @Output() eventClick = new EventEmitter;
  // Template Variables
  someChildValue = "Some Value";

  constructor() { }

  ngOnInit() {
  }

  handleClickMe() {
    console.log('clicked');
    this.eventClick.emit('foo');
  }


  logFoo() {
    console.log('foo');
  }



}
