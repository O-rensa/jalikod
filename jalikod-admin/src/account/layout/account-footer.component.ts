import { Component } from '@angular/core';
import { DateTime } from "luxon";

@Component({
  selector: 'account-footer',
  imports: [],
  templateUrl: './account-footer.component.html',
  styleUrl: './account-footer.component.css'
})
export class AccountFooterComponent {
  currentYear: number;
  versionNumber: number;

  constructor() {
    this.currentYear = DateTime.now().year;
    this.versionNumber = 1;
  }
}
