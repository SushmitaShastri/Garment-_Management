import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    const isloggedin = sessionStorage.getItem("isloggedin");
    if(isloggedin!="true")
    {
      alert("you are not logged in!");
      this.router.navigateByUrl('');
    }
  }
  logout () {
    sessionStorage.removeItem("isloggedin");
    this.router.navigateByUrl('');
  }
}
