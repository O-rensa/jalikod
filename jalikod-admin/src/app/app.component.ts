import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header.component";
import { SidebarComponent } from "./layout/sidebar.component";

@Component({
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private readonly renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, "sidebar-mini");
  }
}
