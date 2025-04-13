import { Component } from '@angular/core';
import { HeaderLeftNavbarComponent } from "./header-left-navbar.component";

@Component({
  selector: 'app-header',
  imports: [HeaderLeftNavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
