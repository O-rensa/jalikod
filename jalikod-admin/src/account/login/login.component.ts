import { Component } from '@angular/core';
import { appModuleAnimation } from '../../shared/animations/router-transition';
import { accountModuleImports } from '../account-module';

@Component({
  selector: 'app-login',
  imports: [...accountModuleImports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [appModuleAnimation()]
})
export class LoginComponent {

}
