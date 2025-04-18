import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AccountComponent } from "./account.component";

export const ACCOUNTROUTES: Routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      }
    ]
  },
];

