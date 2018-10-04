const tap     = require('tap');
const jsdom   = require('jsdom');
const {JSDOM} = jsdom;

tap.test('FRSHideScrollbar.js', function (t) {
  tap.test('without <style> element in DOM new one', function (ct) {
    const {document, FRSHideScrollBar} = initializeModuleInDOM('./FRSHideScrollbar');
    const styleEls                     = document.getElementsByTagName('style');

    ct.is(styleEls.length, 1, 'should be created');
    ct.is(styleEls[0], FRSHideScrollBar.config.styleElement, 'should be visible under config.styleElement');

    ct.end();
  });

  tap.test('onload', {timeout: 3000}, function (ct) {
    const {FRSHideScrollBar} = initializeModuleInDOM('./FRSHideScrollbar');

    window.addEventListener('load', onLoad, {passive: true});

    function onLoad () {
      ct.isNot(typeof FRSHideScrollBar.config.scrollWidth, 'undefined',
        'scrollWidth should be recalculated (will NOT be undef)');
      ct.is(FRSHideScrollBar.refreshScrollWidth(), FRSHideScrollBar.config.scrollWidth,
        'scrollWidth should be the same as refreshScrollWidth return value');
      ct.end();
    }
  });

  t.end();
});

function initializeModuleInDOM (module) {
  const {window}  = new JSDOM('');
  global.window   = window;
  global.document = window.document;

  return {window: window, FRSHideScrollBar: require(module), document: window.document};
}