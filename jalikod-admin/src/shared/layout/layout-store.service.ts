import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, map, Observable } from "rxjs";
import { LayoutConfig } from "./layout-config";

@Injectable({
  "providedIn": "root"
})
export class LayoutStoreService {
  public readonly config$: Observable<LayoutConfig>;
  private readonly initialLayoutConfig: LayoutConfig = { sidebarExpanded: false };
  private configSource: BehaviorSubject<LayoutConfig>;

  constructor() {
    this.configSource = new BehaviorSubject(this.initialLayoutConfig);
    this.config$ = this.configSource.asObservable();
  }

  get sidebarExpanded(): Observable<boolean> {
    return this.config$.pipe(
      map(x => x.sidebarExpanded || false),
      distinctUntilChanged()
    ) as Observable<boolean>;
  }

  public setSidebarExpanded(value: boolean): void {
    this.configSource.next( Object.assign(this.configSource.value, { sidebarExpanded: value }));
  }
}