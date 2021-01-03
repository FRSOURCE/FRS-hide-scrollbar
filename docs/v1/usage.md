# Usage

*[Back to menu](/FRS-hide-scrollbar/v1)*

Simply require the package:

```javascript
const {FRSHideScrollbar} = require('frs-hide-scrollbar');
```

ES6 import it:

```javascript
import { FRSHideScrollbar } from 'frs-hide-scrollbar';
```

include it locally:

```html
<script type="text/javascript" src="node_modules/frs-hide-scrollbar/dist/FRS-hide-scrollbar.umd.js"></script>
```

or from [unpkg](https://unpkg.com/#/) [CDN](https://en.wikipedia.org/wiki/Content_delivery_network):

```html
<script type="text/javascript" src="https://unpkg.com/frs-hide-scrollbar@^1.0.0/dist/FRS-hide-scrollbar.umd.js"></script>

```

To hide element scrollbar just add on it a `frs-hide-scroll` class and a `frs-hide-scroll-wrapper` on it`s container, like this:

```html
<div class="frs-hide-scroll-wrapper">
  <div class="frs-hide-scroll">
    <!-- you content here -->
  </div>
</div>
```

And that's it! Now FRSHideScrollbar library will detect if hiding of a scrollbar is needed and will apply correct styling changes.

> *Note:* There is possibility to change class names to custom ones if needed (and other options - see example below). Simply add proper configuration block **before** loading of `frs-hide-scrollbar` code:

```html
<script>
window.FRSHideScrollBar = {
  FRSHideScrollBar: {
    /* default values written in object below */
    config: {
      /* element class name: */
      className        : 'frs-hide-scroll',
      /* parent element class name */
      wrapperClassName : 'frs-hide-scroll-wrapper',
      /* whether FRSHideScrollbar should initialize on DOm load & respond on window resize events */
      autoInit         : true,
      /* <style> element to which FRS-hide-scrollbar styling will be appended */
      styleElement     : document.head.appendChild(document.createElement('style'))
    }
  }
};
</script>

<!-- Some script loading FRS-hide-scrollbar package -->

```

> *Note:* or change options dynamically via `update` method (you can change same options as above):

```js
import {FRSHideScrollbar} from 'frs-hide-scrollbar';

FRSHideScrollbar.update({
  className: 'newClassName'
})
```

To see more real-life usage example let's jump to the [example page](/FRS-hide-scrollbar/v1/example).
