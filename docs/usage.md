# Usage

Simply require the package:

```javascript
require('frs-hide-scrollbar');
```

or include it locally:

```html
<script type="text/javascript" src="node_modules/frs-hide-scrollbar/dist/FRS-hide-scrollbar.vanilla.js"></script>
```

or from [unpkg](https://unpkg.com/#/) [CDN](https://en.wikipedia.org/wiki/Content_delivery_network):

```html
<script type="text/javascript" src="https://unpkg.com/frs-hide-scrollbar"></script>
```

To make the scrollbar of your element/s hidden just initialize FRSHideScrollbar library on it/them:

```javascript
new FRSHideScrollBar(/* <element>|<array of elements> */);
```

And that's it! Now FRSHideScrollbar library will detect if hiding of a scrollbar is needed and will apply correct styling/html changes.

To see more please check out out [example page](/FRS-hide-scrollbar/example).