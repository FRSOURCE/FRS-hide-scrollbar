# Usage
*[Back to main menu](/FRS-hide-scrollbar)*

Simply require the package:

```javascript
require('frs-hide-scrollbar');
```

or include it locally:

_**Important** - FRS-hide-scrollbar comes shipped in 2 versions: bundler-supportive and vanilla (without any additional bundler-based code), please use the file which fits better your use-case._

```html
<script type="text/javascript" src="node_modules/frs-hide-scrollbar/dist/FRS-hide-scrollbar.vanilla.js"></script>
```

or from [unpkg](https://unpkg.com/#/) [CDN](https://en.wikipedia.org/wiki/Content_delivery_network):

```html
<script type="text/javascript" src="https://unpkg.com/frs-hide-scrollbar"></script>
```

To hide element scrollbar just add `frs-hide-scroll` class on it and `frs-hide-scroll-wrapper` on it`s container, like this:

```html
<div class="frs-hide-scroll-wrapper">
  <div class="frs-hide-scroll">
    <!-- you content here -->
  </div>
</div>
```

And that's it! Now FRSHideScrollbar library will detect if hiding of a scrollbar is needed and will apply correct styling/html changes.

To see more real-life usage example check out out [example page](/FRS-hide-scrollbar/example).

#### Note
There is possibility to change class names (and other options - see example below) to custom ones if needed. Simply add proper configuration block **before** loading of `frs-hide-scrollbar` code:

```html
<script>
window.FRSHideScrollBar = {
  config: {
    /* element class name: */
    className        : 'frs-hide-scroll',
    /* parent element class name */
    wrapperClassName : 'frs-hide-scroll-wrapper',
    /* <style> element to which FRS-hide-scrollbar styling will be appended */
    styleElement     : document.getElementsByTagName('style')[0]
  }
};
</script>

<!-- FRS-hide-scrollbar needs to be added AFTER custom configuration -->
<script type="text/javascript" src="https://unpkg.com/frs-hide-scrollbar"></script>
```

