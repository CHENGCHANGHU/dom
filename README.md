# #golden-tiger/dom

## `query(queryString)`

Query HTML element and cache queried elements.

## `createElement(option)`

Recursively create HTML element from option. A falsy option will create nothing. A HTML element option will just return it. A array option will create a HTML element array.

- `option.tag` element tag string (a falsy tag will create a template element)
- `option.text` element text string
- `option.html` element inner html string
- `option.children` element children array
- `option.attributes` element attributes object (classes is a key in option.attributes for element class, which is set in format of string or array of string)
- `option.events` element events object
- `option.lifecycle` element lifecycle

## `createHTMLString(options)`

Create HTML string from options.
