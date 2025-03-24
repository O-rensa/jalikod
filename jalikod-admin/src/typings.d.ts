declare namespace webapp {
  namespace event {
    export function on(eventName: string, callback: (...args: any[]) => void): void;
    export function off(eventName: string, callback: (...args: any[]) => void): void;
    export function trigger(eventName: string, ...args: any[]): void;
  }
}