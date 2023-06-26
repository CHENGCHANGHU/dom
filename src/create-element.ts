/**
 * Recursively create HTML element from option.
 * A falsy option will create nothing.
 * A HTML element option will just return it.
 * A array option will create a HTML element array.
 * @param {string} option.tag element tag string
 * (a falsy tag will create a template element)
 * @param {string} option.text element text string
 * @param {string} option.html element inner html string
 * @param {array} option.children element children array
 * @param {object} option.attributes element attributes object
 * (classes is a key in option.attributes for element class,
 * which is set in format of string or array of string)
 * @param {object} option.events element events object
 * @param {object} option.lifecycle element lifecycle
 * @returns 
 */
 export function createElement(option: any): HTMLElement | HTMLElement[] {
  if (!option) { return; }

  if (option instanceof HTMLElement) {
    return option;
  }

  if (Array.isArray(option)) {
    return option.map(o => createElement(o)) as HTMLElement[];
  }

  const { tag, text, html, children, attributes, events, lifecycle }: any = {
    lifecycle: {},
    ...option
  };
  const { created } = lifecycle || {};

  if (!tag) {
    return document.createElement('template');
  }

  let domElement: HTMLElement = null;

  if (['svg', 'path'].includes(tag)) {
    // svg element need to use createElementNS
    domElement = document.createElementNS('http://www.w3.org/2000/svg', tag);
  } else {
    domElement = document.createElement(tag);
  }

  if (html) {
    // falsy html will not be set
    domElement.innerHTML = html;
  }

  if (text || text === 0 || text === '') {
    // undefined and null will not be set to element text
    domElement.innerText = text;
  }

  if (attributes) {
    Object.keys(attributes)
      .forEach(attributeKey => {
        if (attributeKey === 'classes'
          && Array.isArray(attributes[attributeKey])
        ) {
          domElement.className = attributes[attributeKey].join(' ');
        } else {
          domElement.setAttribute(attributeKey === 'classes' ? 'class' : attributeKey, attributes[attributeKey]);
        };
      });
  }

  if (events) {
    Object.keys(events)
      .forEach(eventKey => {
        domElement.addEventListener(eventKey, events[eventKey].bind(option));
      });
  }

  if (children) {
    domElement.append(...children.filter(Boolean).map(createElement));
  }

  if (created && typeof created === 'function') {
    created(domElement, option);
  }

  return domElement;
};
