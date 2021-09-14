// last version
class EventEmitter {
  events = new Map()

  subscribe(eventName, callback) {
    if (!this.events.has(eventName))
      this.events.set(eventName, new Map())

    const subscriptionId = Symbol()

    this.events.get(eventName).set(subscriptionId, callback)

    return {
      release: () => {
        this.events.get(eventName).delete(subscriptionId)
      }
    }
  }
  
  emit(eventName, ...args) {
      if (!this.events.has(eventName)) return

    this.events.get(eventName).forEach(callback => {
      callback(...args)
    })
  }
}


// second version
class EventEmitter {
  events = {}

  subscribe(eventName, callback) {
    const subscriptionId = Symbol();

  	this.events[eventName] = {
      ...this.events[eventName],
      [subscriptionId]: callback,
    }

    return {
      release: () => {
        delete this.events[eventName][subscriptionId]
      }
    }
  }
  
  emit(eventName, ...args) {

  	const callbacksKeys = Object.getOwnPropertySymbols(this.events?.[eventName] ?? [])
    console.log(callbacksKeys)

    for (let i = 0; i < callbacksKeys.length; i++) {
      this.events[eventName][callbacksKeys[i]](...args)
    }
  }
}


// first version:
class EventEmitter {
  events = {}

  subscribe(eventName, callback) {
    const subscriptionId = (this.events[eventName]?.length ?? 0) + 1

  	this.events[eventName] = [
      ...this.events[eventName] ?? [],
      {
        func: callback,
        id: subscriptionId,
      },
    ]

    return {
      release: () => {
        const subscribtions = this.events[eventName];

        this.events[eventName] = []
        
        for (let i = 0; i < subscribtions.length; i++) {
          if (subscribtions[i].id !== subscriptionId) {
            this.events[eventName].push(subscribtions[i])
          }
        }
      }
    }
  }
  
  emit(eventName, ...args) {
  	for (let i = 0; i < this.events[eventName]?.length; i++) {
      this.events[eventName][i].func(...args);
    }
  }
}