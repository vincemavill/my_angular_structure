import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title: string | null = null;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('params');
  }
}
