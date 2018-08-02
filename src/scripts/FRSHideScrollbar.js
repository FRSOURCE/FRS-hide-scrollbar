window.FRSHideScrollBar             = FRSHideScrollBar;
FRSHideScrollBar.refreshScrollWidth = refreshScrollWidth;
FRSHideScrollBar.config             = {
  className       : 'frs-hide-scroll',
  wrapperClassName: 'frs-hide-scroll-wrapper',
  scrollWidth     : void 0,
  styleElement    : document.getElementsByTagName('style')[0] || createNewElement('style', document.head)
};

window.addEventListener('load', refreshScrollWidth);

//

function FRSHideScrollBar (_elements) {
  _elements = _elements.length ? Array.prototype.slice.apply(_elements) : [_elements];

  return _elements.map(function (_el) {
    var children = Array.prototype.slice.apply(_el.children);
    var inner    = createNewElement('div', _el);

    _el.classList.add(FRSHideScrollBar.config.wrapperClassName);
    inner.classList.add(FRSHideScrollBar.config.className);
    children.forEach(function (_el) {
      inner.appendChild(_el)
    });
  });
}

function refreshScrollWidth () {
  _el                  = createNewElement('div', document.body);
  _el.style.position   = 'absolute';
  _el.style['z-index'] = '-1';
  _el.style.width      = '100px';
  _el.style.overflow   = 'scroll';

  var scrollWidth = _el.offsetWidth - _el.clientWidth;

  document.body.removeChild(_el);

  if (scrollWidth !== FRSHideScrollBar.config.scrollWidth) {
    FRSHideScrollBar.config.scrollWidth = scrollWidth;
    updateStyles(FRSHideScrollBar.config.styleElement);
  }

  return _el.scrollWidth;
}

function createNewElement (_tagName, _parent) {
  return _parent.appendChild(document.createElement(_tagName));
}

function updateStyles (_styleElement) {
  _styleElement.innerText += '.' + FRSHideScrollBar.config.className + '{overflow:scroll;margin-right:-' +
                             FRSHideScrollBar.config.scrollWidth + 'px;height:calc(100% + ' +
                             FRSHideScrollBar.config.scrollWidth + 'px);}';
}
