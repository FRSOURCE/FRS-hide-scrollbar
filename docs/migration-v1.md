# Migration from version 1

*[Back to menu](/FRS-hide-scrollbar)*

## Importing the package to your project

The `@frsource/frs-hide-scrollbar` version 2 is a CSS-only package. That means that the main entry point of the package is not a JS but a CSS file from now on!

You can import it into your project either from within your JS file:

```javascript
import '@frsource/frs-hide-scrollbar';
// or
require('@frsource/frs-hide-scrollbar');
```

or SCSS:

```scss
@import '~@frsource/frs-hide-scrollbar';
```

or (as in the previous version) via HTML (either from local installation or from [unpkg](https://unpkg.com/#/) [CDN](https://en.wikipedia.org/wiki/Content_delivery_network)):

```html
<script type="text/javascript" src="node_modules/@frsource/frs-hide-scrollbar/dist/frs-hide-scrollbar.css"></script>

<!-- or -->

<script type="text/javascript" src="https://unpkg.com/@frsource/frs-hide-scrollbar"></script>
```

## Configuring the package

Previously, you could've configure the package via JS. Now, because there is no need for a JS API anymore you can configure the classname (the only thing that is configurable) via SCSS variable `$frs-hide-scroll-classname`:

```scss
$frs-hide-scroll-classname: 'whatever';
@import '~@frsource/frs-hide-scrollbar';

// now the package styling will be avaiable under ".whatever" class name
```

By default the variable's value is `frs-hide-scroll`, so if you don't overwrite it - that's the class name which you would need to use in your templates.

## Using the package in your templates

Last but not least - in the version 2 there is no need for double-wrappping of your content! 🚀 In the version 1 you always needed at least two elements (as in the example below, two divs) to make the library working:

```html
<div class="frs-hide-scroll-wrapper">
  <div class="frs-hide-scroll">
    <!-- you content here -->
  </div>
</div>
```

But, in the version 2 you need only one element-wrapper (the one you have your `overflow:auto` styling on):

```html
<div class="frs-hide-scroll">
  <!-- you content here -->
</div>
```

So, the most important part of the migration here would be to either remove elements with `frs-hide-scroll-wrapper` class completely from your codebase, or to simply remove the class name from them.

And that's it. Now you can learn more about [the usage of the `@frsource/frs-hide-scrollbar` version 2](/FRS-hide-scrollbar/usage)!
