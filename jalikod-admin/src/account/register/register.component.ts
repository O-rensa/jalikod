import { Component, OnInit } from '@angular/core';
import { accountModuleImports } from '../account-module';
import { appModuleAnimation } from '../../shared/animations/router-transition';
import { allowedCharactersPattern } from '../../shared/consts/allowed-characters.const';
import * as _ from "lodash";
import { InputValidatorComponent } from "../../shared/components/input-validator/input-validator.component";

@Component({
  selector: 'app-register',
  imports: [...accountModuleImports, InputValidatorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  animations:[appModuleAnimation()]
})
export class RegisterComponent implements OnInit {
  showUsernameAlreadyExists: boolean = false;
  showNotAllowedCharacters: boolean = false;
  disableRegisterButton: boolean = false;
  passwordMatched: boolean = false;
  fName: string = "";
  mName?: string;
  sName: string = "";
  extension?: string;
  username: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  checkForNotAllowedCharacters(value: string): void {
    if (!_.isEmpty(value)) {
      const isAllowed = allowedCharactersPattern.test(value);
      this.showNotAllowedCharacters = !isAllowed;
      this.disableRegisterButton = !isAllowed;
    } else {
      this.showNotAllowedCharacters = false;
      this.disableRegisterButton = false;
    }
  }

  checkIfPasswordMatches(): void {
    const isMatched: boolean = this.password === this.confirmPassword;
    this.disableRegisterButton = !isMatched;
    this.passwordMatched = isMatched;
  }

  registerUser(): void {
  }
}
