class Observable {
  setup = null
  
  constructor(setup) {
    this.setup = setup
  }
 
  subscribe(subscriber) {
    const subscriberWrapper = {
      unsubscribed: false,
      next(value) {
        if (this.unsubscribed) return

        if (typeof subscriber === 'function')
          subscriber(value)
        else
          subscriber?.next?.(value)
      },
      error(error) {
        if(this.unsubscribed) return

        subscriber?.error?.(error)
        this.unsubscribe()
      },
      complete() {
        if(this.unsubscribed) return

        subscriber?.complete?.()
        this.unsubscribe()
      },
      unsubscribe() {
        this.unsubscribed = true
      }
    }

    this.setup(subscriberWrapper)

    return subscriberWrapper
  }
}

const observer = {
  next: (value) => {
     console.log('we got a value', value)
  },
  error: (error) => {
    console.log('we got an error', error)
  },
  complete: () => {
    console.log('ok, no more values')
  }
}

const observable = new Observable((subscriber)=> {
  subscriber.next(1)
  subscriber.next(2)
  setTimeout(() => {
    subscriber.next(3)
    subscriber.next(4)
    subscriber.complete()
  }, 100)
})

const sub = observable.subscribe(observer)
// we got a value 1
// we got a value 2

// we got a value 3
// we got a value 4
// ok, no more values