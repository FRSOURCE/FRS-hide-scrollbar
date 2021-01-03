# Usage

*[Back to menu](/FRS-hide-scrollbar)*

Simply require the package:

Via SCSS:

```scss
@import '~frs-hide-scrollbar';
```

Via JavaScript:

```javascript
import 'frs-hide-scrollbar';
// or
require('frs-hide-scrollbar');
```

include it in your HTML from local npm installation:

```html
<script type="text/javascript" src="node_modules/frs-hide-scrollbar/dist/frs-hide-scrollbar.css"></script>
```

or from [unpkg](https://unpkg.com/#/) [CDN](https://en.wikipedia.org/wiki/Content_delivery_network):

```html
<script type="text/javascript" src="https://unpkg.com/frs-hide-scrollbar/dist/frs-hide-scrollbar.css"></script>
```

To hide element's scrollbar just add a `frs-hide-scroll` class to it.

```html
<div class="frs-hide-scroll">
  <!-- you content here -->
</div>
```

And that's it!

> *Note:* There is possibility to change class name to custom one if needed. Simply change the SCSS variable **before** importing `frs-hide-scrollbar` code:

```scss
$frs-hide-scroll-classname: 'whatever';
@import '~frs-hide-scrollbar';

// now the package styling will be avaiable under ".whatever" class name
```

To see more real-life usage example let's jump to the [example page](/FRS-hide-scrollbar/example).
