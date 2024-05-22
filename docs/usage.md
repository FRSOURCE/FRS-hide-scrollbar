# Usage

_[Back to menu](/FRS-hide-scrollbar)_

Simply require the package:

Via SCSS:

```scss
@import '~@frsource/frs-hide-scrollbar';
```

Via JavaScript:

```javascript
import '@frsource/frs-hide-scrollbar';
// or
require('@frsource/frs-hide-scrollbar');
```

include it in your HTML from local npm installation:

```html
<script
  type="text/javascript"
  src="node_modules/@frsource/frs-hide-scrollbar/dist/frs-hide-scrollbar.css"
></script>
```

or from [unpkg](https://unpkg.com/#/) [CDN](https://en.wikipedia.org/wiki/Content_delivery_network):

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@frsource/frs-hide-scrollbar"
></script>
```

To hide element's scrollbar just add a `frs-hide-scroll` class to it.

```html
<div class="frs-hide-scroll">
  <!-- you content here -->
</div>
```

And that's it!

> _Note:_ There is possibility to change class name to custom one if needed. Simply change the SCSS variable **before** importing `@frsource/frs-hide-scrollbar` code:

```scss
$frs-hide-scroll-classname: 'whatever';
@import '~@frsource/frs-hide-scrollbar';

// now the package styling will be avaiable under ".whatever" class name
```

To see more real-life usage example let's jump to the [example page](/FRS-hide-scrollbar/example).
