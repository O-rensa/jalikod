import { animate, state, style, transition, trigger } from "@angular/animations";

export function appModuleAnimation() {
  return slideFromBotton();
}
 
export function slideFromBotton() {
  return trigger("routerTransition", [
    state("void", style({
      "padding-top": "20px",
      opacity: "0"
    })),
    state("*", style({
      "padding-top": "0px",
      opacity: "1"
    })),
    transition(":enter", [
      animate("0.33s ease-out", style({
        opacity: "1",
        "padding-top": "0px"
      }))
    ])
  ]);
}