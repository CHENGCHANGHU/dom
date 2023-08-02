export interface CreateOptions {
    indentationToken?: string;
    beautify?: boolean;
}
/**
 * Create HTML string from options.
 * @param options
 * @param createOptions
 * @returns
 */
export declare function createHTMLString(options: any, createOptions?: CreateOptions): string;
