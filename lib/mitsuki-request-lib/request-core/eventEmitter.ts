const eventNames = ["beforeRequest","responseBody"] as const
type EventNames = (typeof eventNames)[number]

class EventEmitter {
    private listeners: Record<EventNames, Set<Function>> = {
        "beforeRequest": new Set(),
        "responseBody": new Set()
    }
    on(eventName: EventNames, listener: Function) {
        this.listeners[eventName].add(listener)
    }
    async emit<T = any>(eventName: EventNames, ...args: any[]): Promise<T | undefined> {
        for (const listener of this.listeners[eventName]) {
          const res = await listener(...args);
          if (res !== undefined) return res as T;
        }
        return undefined;
    }
    remove(eventName: EventNames, listener:Function) {
        this.listeners[eventName].delete(listener)
    }
}

export default new EventEmitter()
