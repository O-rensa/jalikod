import { Injectable } from "@angular/core";
import { BaseRemoteService } from "../base-remote.service";
import { Observable } from "rxjs";
import { RegisterRequest, RegisterResponse } from "../models/register-user.model";

@Injectable({
  providedIn: "root"
})
export class RegisterUserService extends BaseRemoteService {
  private readonly serviceUrl: string = this.baseUrl + "/auth/register";
  public request: RegisterRequest = new RegisterRequest();

  constructor() {
    super();
  }

  registerUser(): Observable<RegisterResponse> {
    const payload = this.request;
    return this.httpClient.post<RegisterResponse>(this.serviceUrl, payload);
  }
}