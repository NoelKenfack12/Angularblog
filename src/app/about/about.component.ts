import { Component, OnInit } from '@angular/core';
import * as anim from '../../assets/js/coustom.js';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anim.animatecontent();
  }

}
