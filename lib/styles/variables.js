// ===================================================
// using the postcss custom-propererties loader these vars
// get loaded into any .css/.scss files in canvas/.
// in order to see a change, make sure you rerun webpack
// and/or restart webpack-watch if you are using that
// ===================================================

exports.variables = {
  /* ============ */
  /* render sizes */
  /* ============ */

  'box-size-medium': '5rem',
  'box-size-large': '15rem',

  /* ===== */
  /* fonts */
  /* ===== */

  'helvetica-list': `HelveticaNeue-Medium, HelveticaNeue-bold, Helvetica Neue Medium,
                      Helvetica Neue bold, Helvetica Neue, Helvetica, sans-serif`,
  'helvetica-list-light': `HelveticaNeue-Light, HelveticaNeue-Medium, HelveticaNeue-bold,
                            Helvetica Neue Medium, Helvetica Neue bold, Helvetica Neue, Helvetica, sans-serif`,
  // we should replace this with Lato 2.0 at some point
  // and host it ourselves
  'font-family': 'Lato, sans-serif',

  'font-weight-light': '100',
  'font-weight-medium-bold': '600',
  'font-weight-bold': '800',
  'font-weight-normal': '400',

  'base-line-height': '1.5',

  'font-size-xxs': '0.625rem',
  'font-size-xs': '0.75rem',
  'font-size-sm': '0.875rem',
  'font-size-md': '1.1rem',
  'font-size-mdlg': '1.35rem',
  'font-size-lg': '1.5rem',
  'font-size-xl': '1.8rem',
  'font-size-xxl': '2.3rem',
  'font-size-jumbo': '9rem',
  'font-size-huge': '20rem',

  'line-height-tight': '1.0',
  'line-height-squeezed': '1.25',
  'line-height-normal': 'var(--base-line-height)',
  'line-height-large': '2.0',

  /* =================== */
  /* padding and margins */
  /* =================== */

  'small-padding': '0.25rem',
  'standard-padding': '0.5rem',
  'large-padding': '1rem',
  'extra-large-padding': '1.5rem',
  'xxl-padding': '2.5rem',
  'jumbo-padding': '5rem',

  'tiny-margin': '0.1rem',
  'small-margin': '0.25rem',
  'standard-margin': '0.5rem',
  'large-margin': '1rem',
  'extra-large-margin': '2rem',
  'jumbo-margin': '5rem',

  /* ====== */
  /* colors */
  /* ====== */

  /* main scheme */
  'primary-color': '#008ee2',
  'secondary-color': '#bbd9ef',

  'header-gray': '#7a8492',
  'content-backround-gray': '#f1f2f4',

  /* standard colors */
  'white': 'white',
  // error-red matches inst-ui
  'error-red': '#892e47',
  'red': '#ee0612',
  'light-red': '#fff3f3',
  'yellow': '#f9c34f',
  'orange': '#fc5e13',
  'green': '#00ac18',
  'light-green': '#f2fbf4',

  /* functional colors */
  'alert-color': 'var(--red)',
  'warning-color': 'var(--orange)',
  'info-color': 'var(--primary-color)',
  'success-color': 'var(--primary-color)',

  /* grayscale */
  'darkest-gray': '#333',
  'even-darker-gray': '#424242',
  'darker-gray': '#969696',
  'dark-gray': '#d4d4d4',
  'medium-gray': '#ebebeb',
  'light-gray': '#eee',
  'lightest-gray': '#f7f7f7',

  /* ======= */
  /* borders */
  /* ======= */

  'standard-border-width': '1px',
  'strong-border-width': '2px',

  'base-border-radius': '4px',

  'border-radius-sm': '1px',
  'border-radius-md': 'var(--base-border-radius)',
  'border-radius-lg': '5px',
  'border-radius-xl': '30px',

  'dark-border-color': 'var(--medium-gray)',
  'light-border-color': 'var(--lightest-gray)',
  'dnd-highlight': 'solid 2px',

  'main-box-shadow': '2px 2px 12px 1px #ddd',
  'slight-box-shadow': '2px 2px 3px #ddd',

  /* ======= */
  /* opacity */
  /* ======= */

  'standard-see-through': '0.6',

  /* ========= */
  /* z indices */
  /* ========= */

  'medium-high-content-z-index': '2222',
  'high-content-z-index': '3333',
  'header-z-index': '4444',
  'sidebar-z-index': '5555',
  'popover-z-index': '6666',
  'alert-z-index': '7777',
  'modal-z-index': '8888',

  /* ============= */
  /* assorted vals */
  /* ============= */

  'header-height': '3.5rem',
  'sidebar-width-open': '22rem',
  'sidebar-width-closed': '3.5rem',
  'max-content-width': '55rem',
  'min-content-width': '10rem',
  'title-wrapper-height': '5.625rem'
}

/* =========== */
/* breakpoints */
/* =========== */

exports.media = {
  'phone-break-point': 'only screen and (max-width: 48rem)',
  'tablet-break-point': 'only screen and (max-width: 64rem)'
}
