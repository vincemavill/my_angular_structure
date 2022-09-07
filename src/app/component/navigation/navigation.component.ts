import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() title: string = 'Angular Web App';
  navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Login', href: '/login', current: false },
    { name: 'About', href: '/about/thegroupname', current: false },
    { name: 'Data', href: '/data', current: false },
    { name: 'Redux', href: '/redux', current: false },
  ];
  handleClickNavigation(name: string) {
    this.title = name;
  }
}
