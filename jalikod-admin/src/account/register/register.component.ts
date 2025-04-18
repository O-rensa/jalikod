import { Component, OnInit } from '@angular/core';
import { accountModuleImports } from '../account-module';
import { appModuleAnimation } from '../../shared/animations/router-transition';

@Component({
  selector: 'app-register',
  imports: [...accountModuleImports],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  animations:[appModuleAnimation()]
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
