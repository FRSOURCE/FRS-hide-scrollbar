var CONFIG_OLD;
var FRSHideScrollBar = exports = exports || {};

FRSHideScrollBar.refreshScrollWidth = refreshScrollWidth;
FRSHideScrollBar.createNewChild     = createNewChild;
FRSHideScrollBar.updateStyles       = updateStyles;
FRSHideScrollBar.config             = FRSHideScrollBar.config || {};

FRSHideScrollBar.config.className        = FRSHideScrollBar.config.className || 'frs-hide-scroll';
FRSHideScrollBar.config.wrapperClassName = FRSHideScrollBar.config.wrapperClassName || 'frs-hide-scroll-wrapper';
FRSHideScrollBar.config.styleElement     = FRSHideScrollBar.config.styleElement ||
                                           document.getElementsByTagName('style')[0] ||
                                           createNewChild('style', document.head);

window.addEventListener('load', refreshScrollWidth, {passive: true});
window.addEventListener('resize', refreshScrollWidth, {passive: true});

//

function refreshScrollWidth () {
  _el                  = createNewChild('div', document.body);
  _el.style.position   = 'absolute';
  _el.style['z-index'] = '-1';
  _el.style.width      = '100px';
  _el.style.overflow   = 'scroll';

  var scrollWidth = _el.offsetWidth - _el.clientWidth;

  document.body.removeChild(_el);

  if (scrollWidth !== FRSHideScrollBar.config.scrollWidth) {
    FRSHideScrollBar.config.scrollWidth = scrollWidth;
    updateStyles();
  }

  return _el.scrollWidth;
}

function createNewChild (_tagName, _parent) {
  return _parent.appendChild(document.createElement(_tagName));
}

function updateStyles (_styleElement, _cfgOld) {
  _styleElement = _styleElement || FRSHideScrollBar.config.styleElement;
  _cfgOld       = _cfgOld || CONFIG_OLD;

  if (_cfgOld) {
    var styleElementOld       = _cfgOld.styleElement;
    var lio                   = styleElementOld.innerText.lastIndexOf('.' + _cfgOld.className +
                                                                      '{margin-right:-');
    styleElementOld.innerText = styleElementOld.innerText.substring(0, lio);
  }

  if (FRSHideScrollBar.config.scrollWidth === 0) {
    return;
  }

  CONFIG_OLD = FRSHideScrollBar.config;
  _styleElement.innerText += '.' + FRSHideScrollBar.config.className +
                             '{margin-right:-' +
                             (FRSHideScrollBar.config.scrollWidth + .5) + // additional 0.5px because of chrome
                             // rounding bug
                             'px;height:calc(100% + ' +
                             FRSHideScrollBar.config.scrollWidth + 'px)}';
}
