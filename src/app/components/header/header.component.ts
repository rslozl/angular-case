import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var dt = new Date();
    var a = dt.toLocaleString();


    // @ts-ignore
    document.getElementById('date-time').innerHTML=a;

  }

}
