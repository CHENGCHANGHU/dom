export interface CreateOptions {
  indentationToken?: string;
  beautify?: boolean;
}

const DefaultCreateOptions: CreateOptions = {
  indentationToken: '  ',
  beautify: true,
};

/**
 * Create HTML string from options.
 * @param options 
 * @param createOptions 
 * @returns 
 */
export function createHTMLString(options: any, createOptions?: CreateOptions): string {
  if (!options) return '';

  if (options instanceof HTMLElement) return options.outerHTML;

  if (Array.isArray(options)) return options.map(o => createHTMLString(o, createOptions)).join('\n');

  const { tag, text, html, children, attributes, depth }: any = {
    depth: 0,
    ...options
  };

  if (!tag) return '';

  const { indentationToken, beautify } = {
    ...DefaultCreateOptions,
    ...createOptions,
  };

  const indentationText = Array(depth).fill(indentationToken).join('');
  let elementString = `${indentationText}<${tag} `;

  if (attributes) {
    Object.keys(attributes)
      .forEach(attributeKey => {
        if (attributeKey === 'classes'
          && Array.isArray(attributes[attributeKey])
        ) {
          elementString += `class="${attributes[attributeKey].join(' ')}" `;
        } else {
          elementString += `${attributeKey === 'classes' ? 'class' : attributeKey}="${attributes[attributeKey]}" `;
        };
      });
  }
  elementString = elementString.slice(0, -1);
  elementString += `>${beautify ? '\n' : ''}`;

  if (html) {
    elementString += indentationText + indentationToken + html + (beautify ? '\n' : '');
  } else if (text || text === 0 || text === '') {
    elementString += indentationText + indentationToken + text + (beautify ? '\n' : '');
  } else if (children) {
    children.forEach((child: any) => {
      elementString += createHTMLString({
        ...child,
        depth: depth + 1,
      }, createOptions) + (beautify ? '\n' : '');
    });
  }

  elementString += indentationText + `</${tag}>`;

  return elementString;
}