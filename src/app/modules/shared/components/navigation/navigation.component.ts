import { Component, OnInit } from '@angular/core';
import { HomeMenu } from 'src/app/modules/home/home-routing.module';
import { QuickReferenceMenu } from 'src/app/modules/quick-references/quick-reference-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  constructor() {}
  public menu = [];

  public ngOnInit() {
    this.menu.push(
      ...HomeMenu,
      ...QuickReferenceMenu
      );
  }
}
