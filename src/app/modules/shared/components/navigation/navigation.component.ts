import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HomeMenu } from 'src/app/modules/home/home-routing.module';
import { QuickReferenceMenu } from 'src/app/modules/quick-references/quick-reference-routing.module';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() {}
  public menu = [];

  public ngOnInit() {
    this.menu.push(
      ...HomeMenu,
      ...QuickReferenceMenu
      );
  }

  public ngAfterViewInit() {}

  public openMenu(): void {
    this.trigger.openMenu();
  }

  public closeMenu(): void {
    this.trigger.closeMenu();
  }
}
