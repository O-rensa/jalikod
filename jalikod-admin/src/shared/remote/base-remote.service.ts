import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export abstract class BaseRemoteService {
  protected readonly httpClient: HttpClient = inject(HttpClient);
  protected readonly baseUrl: string = "http:localhost/3000/v1";
}