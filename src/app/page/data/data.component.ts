import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    const heroName = this.route.snapshot.paramMap.get('hero_name');
    alert(heroName)
  }
}
