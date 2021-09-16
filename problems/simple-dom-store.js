// normal solution
class NodeStore {
  store = {}

  set(node, value) {
    node.__nodeStoreKey__ = Symbol()

    this.store[node.__nodeStoreKey__] = value
  }

  get(node) {
    return this.store[node.__nodeStoreKey__]
  }
  
  has(node) {
    return !!this.store[node.__nodeStoreKey__]
  }
}


// first solution
class NodeStore {
  store = {}

  getNodePath(node) {
    let path = node.nodeName
    let parent = node.parentNode

    while(parent) {
      path = ${parent.nodeName}/${path}
      parent = parent.parentNode
    }

    return path
  }

  set(node, value) {
    this.store = {
      ...this.store,
      [this.getNodePath(node)]: value
    }
  }

  get(node) {
    return this.store[this.getNodePath(node)]
  }
  
  has(node) {
    return !!this.get(node)
  }
}