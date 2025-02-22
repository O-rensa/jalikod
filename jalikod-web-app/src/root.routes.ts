import { Routes } from "@angular/router";

export const ROOT_ROUTES: Routes = [
  {
    path: "app",
    loadChildren: () => import("./app/app.routes").then(m => m.APP_ROUTES),
  }
]