import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})

export class MasterLayoutComponent implements OnInit {
  mobile: any = window.matchMedia("(max-width: 991px)");
  sideBarOpen: boolean | undefined;

  ngOnInit() {
    (this.mobile.matches) ? this.sideBarOpen = false : this.sideBarOpen = true;
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    if (this.sideBarOpen) {
      $('.overlay').css('display', 'block');
      console.log("fkjffffffffffffffffffff");

    } else {
      $('.overlay').css('display', 'none');
    }
  }
}
