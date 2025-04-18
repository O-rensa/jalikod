import { Routes } from '@angular/router';

export const ROOTROUTES: Routes = [
  {
    path: "account",
    loadChildren: () => import("./account/account.route").then(m => m.ACCOUNTROUTES)
  },
  {
  path: "app",
  loadChildren: () => import("./app/app.routes").then(m => m.APPROUTES)
  },
  {
    path: "",
    redirectTo: "app",
    pathMatch: "full"
  },
  {
    path: "*",
    redirectTo: "app",
    pathMatch: "full"
  }
];
