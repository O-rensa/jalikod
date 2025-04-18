import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountHeaderComponent } from "./layout/account-header.component";
import { AccountFooterComponent } from "./layout/account-footer.component";

@Component({
  imports: [RouterOutlet, AccountHeaderComponent, AccountFooterComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {

  constructor(private readonly renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, "login-page");
  }
}
