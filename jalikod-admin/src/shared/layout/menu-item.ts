export class MenuItem {
  id: number = 0;
  parentId: number = 0;
  label: string;
  route: string;
  icon: string;
  isActive: boolean | undefined;
  isCollapsed: boolean | undefined;
  children: MenuItem[] | null;

  constructor(label: string, route: string, icon: string, children: MenuItem[] | null = null) {
    this.label = label;
    this.route = route;
    this.icon = icon;
    this.children = children;
  }
}