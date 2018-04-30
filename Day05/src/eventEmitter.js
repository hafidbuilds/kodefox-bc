//Simon's answer
// @flow
type EventList = Set<Function>;
type EventMap = Map<string, EventList>;

class EventEmitter {
  events: EventMap = new Map();

  addListener(eventName: string, eventListener: Function) {
    let eventList = this.events.get(eventName);
    if (eventList == null) {
      eventList = new Set();
      this.events.set(eventName, eventList);
    }
    eventList.add(eventListener);
    return [eventName, eventListener];
  }

  removeListenerByID(id: Object) {
    let [eventName, eventListener] = id;
    let eventList = this.events.get(eventName);
    if (eventList) {
      eventList.delete(eventListener);
    }
  }

  removeListener(eventName: string, eventListener: Function) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      eventList.delete(eventListener);
    }
  }

  emit(eventName: string) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      for (let eventHandler of eventList) {
        eventHandler();
      }
    }
  }
}

export default EventEmitter;