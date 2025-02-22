declare namespace TestFunc {
  export function myAlert(message: string): void;
}

declare namespace AppEvent {
  export function on(eventName: string, callback: () => void);
  export function off(eventName: string, callback: () => void);
  export function trigger(eventName: string);
}