import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentName = 'Boris';

  constructor() { }

  ngOnInit() {
  }

  handleEventClicked(data) {
    console.log('recieved:', data);
  }

}
