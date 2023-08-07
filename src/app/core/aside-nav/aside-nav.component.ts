import { Component, HostListener, OnInit } from '@angular/core';
import { Menu } from 'src/app/services/nav.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  /////////////////////////////// SJPS CODE ////////////////////////////////////////////

  public menuItems: Menu[] | undefined;
  itemsList: any = [];
  dropdown: any = "dropdown";


  constructor(private router: Router) { }

  MENUITEMS: Menu[] =
    [
      {
        "nodeName": "Dashboard",
        "type": "link",
        "nodeIcon": "fa fa-home",
        // "permissions": [

        //   {
        //     "permissionName": "Data fields",
        //     "path": "/user",
        //     "type": "link"
        //   },
        //   {
        //     "permissionName": "Locations",
        //     "path": "/location",
        //     "type": "link"
        //   },
        //   {
        //     "permissionName": "Visit Schedules",
        //     "path": "/visit-schedules",
        //     "type": "link"
        //   },
        //   {
        //     "permissionName": "Reserved Day",
        //     "path": "/reserved-days",
        //     "type": "link"
        //   },

        // ]
      },

      {
        "nodeName": "Orders",
        "type": "sub",
        "nodeIcon": "fa fa-shopping-cart",

        "permissions": [
          {
            "permissionName": "All Orders",
            "path": "/user",
            "type": "link"
          },
          {
            "permissionName": "Pending Orders",
            "path": "/PendingOrders",
            "type": "link"
          },
          {
            "permissionName": "Progress Orders",
            "path": "/ProgressOrders",
            "type": "link"
          },
          {
            "permissionName": "Delivered Orders",
            "path": "/PendingOrders",
            "type": "link"
          },
          {
            "permissionName": "Completed Orders",
            "path": "/CompletedOrders",
            "type": "link"
          },
          {
            "permissionName": "Declined Orders",
            "path": "/PendingOrders",
            "type": "link"
          },
          {
            "permissionName": "Cash On Delivery",
            "path": "/CompletedOrders",
            "type": "link"
          },
        ]
      },

      {
        "nodeName": "Devices",
        "type": "sub",
        "nodeIcon": "fa fa-th-large",
        "permissions": [
          {
            "permissionName": "Doors",
            "path": "/doors",
            "type": "link"
          },
          {
            "permissionName": "Eithernet I/O",
            "path": "/ethernet",
            "type": "link"
          },
          {
            "permissionName": "QR Readers",
            "path": "/qr-readers",
            "type": "link"
          },
        ]
      },

      {
        "nodeName": "Settings",
        "type": "sub",
        "nodeIcon": "fa fa-cogs",
        "permissions": [

          {
            "permissionName": "Data Retention",
            "path": "/smtp",
            "type": "link"
          },
          {
            "permissionName": "SMTP",
            "path": "/smtp",
            "type": "link"
          },
          {
            "permissionName": "QR Codes",
            "path": "/qr-codes",
            "type": "link"
          },

        ]
      },

      {
        "nodeName": "Reports",
        "type": "sub",
        "nodeIcon": "fa fa-flag",
        "permissions": [
          {
            "permissionName": "Visit Access Logs",
            "path": "/visitor-log",
            "type": "link"
          },
          {
            "permissionName": "Visit Access Request",
            "path": "/visitor-request",
            "type": "link"
          },
          {
            "permissionName": "Monthly-traffic",
            "path": "/monthly-traffic",
            "type": "link"
          },
        ]
      },

    ]

  ngOnInit(): void {
    this.itemsList = this.MENUITEMS;
  }

  async routes(item: any, ListIndex: any) {
    // var linkTagList;

    document.getElementById(ListIndex)?.classList.remove("h-0");

    var linkTagList = document.querySelectorAll('[data-bs-toggle="collapse"]');

    linkTagList.forEach(async (e: any, i: any) => {
      if (e.getAttribute("href") === "#" + ListIndex && e.attributes[2].nodeValue === "true") {}
      else {
        var hideDropdown: any = document.getElementById("DropdownList" + i);
        hideDropdown.classList.remove("show");
        e.attributes[2].nodeValue = false;
      }
    });


    if (item.type == "link") this.router.navigateByUrl(item.path);
  }

  // ngOnDestroy(): void {
  // }
}
