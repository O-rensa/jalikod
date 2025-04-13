import { Component, OnInit } from '@angular/core';
import { LayoutStoreService } from '../../shared/layout/layout-store.service';

@Component({
  selector: 'app-header-left-navbar',
  imports: [],
  templateUrl: './header-left-navbar.component.html',
  styleUrl: './header-left-navbar.component.css'
})
export class HeaderLeftNavbarComponent implements OnInit {
  sidebarExpanded!: boolean;

  constructor(private readonly _layoutStore: LayoutStoreService) {}

  ngOnInit(): void {
    this._layoutStore.sidebarExpanded.subscribe((value) => this.sidebarExpanded = value);
  }

  toggleSidebar(): void {
    this._layoutStore.setSidebarExpanded(!this.sidebarExpanded);
  }
}

