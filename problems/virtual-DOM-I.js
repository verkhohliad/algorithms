/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
 function virtualize(element) {
  if (typeof element.nodeValue === 'string') return element.nodeValue

  let attributes = {}

  for (let attribute of Array.from(element.attributes)) {
    if (attribute.name === 'class' || attribute.name === 'classname') {
      attributes.className = attribute.value
    } else {
      attributes[attribute.name] = attribute.value
    }
  }

  // could be used this loop to avoid Array.from
  // for (let i = 0; i < element.attributes.length; i++) {
  //   const attribute = element.attributes[i]

  //   if (attribute.name === 'class' || attribute.name === 'classname') {
  //     attributes.className = attribute.value
  //   } else {
  //     attributes[attribute.name] = attribute.value
  //   }
  // }

  const children = []

  for (let i = 0; i < element.childNodes.length; i++) {
    children.push(virtualize(element.childNodes[i]))
  }

  const object = {
    type: element.nodeName.toLowerCase(),
    props: {
      ...attributes,
      children: children.length > 1 ? children : children[0],
    }
  }

  return object
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement} 
 */
function render(obj) {
  if (typeof obj === 'string') return obj

  const element = document.createElement(obj.type)
  
  const { children, ...other } = obj.props

  Object.entries(other).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })

  if (!Array.isArray(children)) {
    element.append(children)
  } else {
    for (let i = 0; i < children.length; i++) {
      const child = render(children[i])

      element.append(child)
    }
  }

  return element
}


const json = {
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        props: {
          children: ' this is '
        }
      },
      {
        type: 'p',
        props: {
          className: 'paragraph',
          children: [
            ' a ',
            {
              type: 'button',
              props: {
                children: ' button '
              }
            },
            ' from ',
            {
              type: 'a',
              props: {
                href: 'https://bfe.dev',
                children: [
                  {
                    type: 'b',
                    props: {
                      children: 'BFE'
                    }
                  },
                  '.dev'
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
const html2 = render(json)
console.log(html2, virtualize(html2))



const html = document.createElement('div')
html.innerHTML = `<h1> this is </h1><p class="paragraph"> a <button> button </button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a></p>`
console.log(virtualize(html))
