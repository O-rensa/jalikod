import { RegisterFailureEnum } from "../../enums/register-failure.enum";

export interface IRegisterRequest {
  firstName: string;
  middleInitial?: string;
  surname: string;
  nameExtension?: string;
  username: string;
  password: string;
}

export class RegisterRequest implements IRegisterRequest {
  firstName: string;
  middleInitial?: string;
  surname: string;
  nameExtension?: string;
  username: string;
  password: string;

  constructor() {
    this.firstName = "";
    this.surname = "";
    this.username = "";
    this.password = "";
  }
}

export interface IRegisterResponse {
  status: "success" | "fail";
  failMessage: RegisterFailureEnum[];
  errorMessage?: string;
}

export class RegisterResponse implements IRegisterResponse {
  status: "success" | "fail";
  failMessage: RegisterFailureEnum[];
  errorMessage?: string;

  constructor() {
    this.status = "success";
    this.failMessage = [];
  }
}