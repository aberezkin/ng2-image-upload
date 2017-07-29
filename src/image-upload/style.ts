/**
 * @internal
 */
export type StyleProps = { [key: string]: string }
/**
 * @whatItDoes Represents custom style for various elements and controls.
 */
export interface Style {
    /**
    * Sets custom style for select button.
    *
    * ```
    * selectButton: {
    *   "background-color": "#800080",    
    *    "color": "#FFF"
    * }
    * ```
    */
    selectButton?: StyleProps;
    /**
    * Sets custom style for clear button.
    *
    * ```    
    * clearButton: {
    *    "background-color": "#FFFF00",
    *    "color": "#FFF"
    * }
    * ```
    */
    clearButton?: StyleProps;
    /**
    * Sets custom style for entire layout.
    *
    * ```    
    * layout: {
    *    "border": "#d0d0d0 dashed 1px",
    *    "margin": "5px"
    * }
    * ```
    */
    layout?: StyleProps;
    /**
    * Sets custom style for entire layout.
    *
    * ```    
    * previewPanel: {    
    *    "background-color": "#FFFF00",
    *    "padding": "5px"
    * }
    * ```
    */
    previewPanel?: StyleProps;
}