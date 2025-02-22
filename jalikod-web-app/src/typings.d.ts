// event bus
declare namespace AppEvent {
  export function on(eventName: string, callback: () => void);
  export function off(eventName: string, callback: () => void);
  export function trigger(eventName: string);
}