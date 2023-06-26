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
export declare function createElement(option: any): HTMLElement | HTMLElement[];
