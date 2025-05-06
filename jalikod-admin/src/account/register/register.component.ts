import { Component, OnInit } from '@angular/core';
import { accountModuleImports } from '../account-module';
import { appModuleAnimation } from '../../shared/animations/router-transition';
import { allowedPasswordPattern, allowedUsernamePattern } from '../../shared/consts/allowed-characters.const';
import * as _ from "lodash";
import { InputValidatorComponent } from "../../shared/components/input-validator/input-validator.component";
import { RegisterUserService } from '../../shared/remote/services/register-user.service';
import { RegisterRequest } from '../../shared/remote/models/register-user.model';

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
  confirmPassword: string = "";

  constructor(private readonly registerService: RegisterUserService) {
  }

  ngOnInit(): void {
  }

  get request(): RegisterRequest {
    return this.registerService.request
  }

  checkForNotAllowedCharacters(): void {
    if (!_.isEmpty(this.request.username) || !_.isEmpty(this.request.password)) {
      const usernameIsAllowed = !!this.request.username ? allowedUsernamePattern.test(this.request.username) : true;
      const passwordIsAllowed = !!this.request.password ? allowedPasswordPattern.test(this.request.password) : true;
      this.showNotAllowedCharacters = !(usernameIsAllowed && passwordIsAllowed);
      this.disableRegisterButton = !(usernameIsAllowed && passwordIsAllowed);
    } else {
      this.showNotAllowedCharacters = false;
      this.disableRegisterButton = false;
    }
  }

  checkIfPasswordMatches(): void {
    const isMatched: boolean = this.request.password === this.confirmPassword;
    this.disableRegisterButton = !isMatched;
    this.passwordMatched = isMatched;
  }

  registerUser(): void {
    if (this.disableRegisterButton) return;
    this.registerService.registerUser()
      .subscribe((response) => {
        console.log(response);
      })
  }
}
