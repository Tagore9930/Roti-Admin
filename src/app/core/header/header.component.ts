import { Router } from '@angular/router';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }


  

  ngOnInit(): void { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  onLogout() {
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }

}
