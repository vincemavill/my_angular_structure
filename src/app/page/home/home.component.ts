import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hide: boolean = true;
  constructor(private router: Router) {}
  ngOnInit() {
    // alert("home")
  }
  handleGoLogin() {
    this.router.navigate(['/login']);
  }
  handleHideShow() {
    if (this.hide) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }
  handleGoData() {
    this.router.navigate(['/data', { hero_name: "Batman" }]);
  }
}
