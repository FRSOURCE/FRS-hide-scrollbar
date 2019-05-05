let FRSHideScrollbar = window.FRSHideScrollbar || {}
const CONFIG = FRSHideScrollbar.config = FRSHideScrollbar.config || {}
let CONFIG_OLD

export default FRSHideScrollbar

FRSHideScrollbar.refreshScrollWidth = refreshScrollWidth
FRSHideScrollbar.createNewChild = createNewChild
FRSHideScrollbar.updateStyles = updateStyles

CONFIG.className = CONFIG.className || 'frs-hide-scroll'
CONFIG.wrapperClassName = CONFIG.wrapperClassName || 'frs-hide-scroll-wrapper'
CONFIG.styleElement = CONFIG.styleElement ||
  document.getElementsByTagName('style')[0] ||
  createNewChild('style', document.head)
CONFIG.autoInit = CONFIG.autoInit === void 0 ? true : CONFIG.autoInit

if (CONFIG.autoInit) {
  initHandlers()
}

//

function initHandlers () {
  if (!document.readyState || document.readyState === 'loading') {
    window.addEventListener('load', refreshScrollWidth, {passive: true})
  } else {
    refreshScrollWidth()
  }

  window.addEventListener('resize', refreshScrollWidth, {passive: true})
}

function refreshScrollWidth () {
  const _el = createNewChild('div', document.body)
  _el.style.position = 'absolute'
  _el.style['z-index'] = '-1'
  _el.style.width = '100px'
  _el.style.overflow = 'scroll'

  const scrollWidth = _el.offsetWidth - _el.clientWidth

  document.body.removeChild(_el)

  if (scrollWidth !== CONFIG.scrollWidth) {
    CONFIG.scrollWidth = scrollWidth
    updateStyles()
  }

  return scrollWidth
}

function createNewChild (_tagName, _parent) {
  return _parent.appendChild(document.createElement(_tagName))
}

function updateStyles (_styleElement = CONFIG.styleElement, _cfgOld = CONFIG_OLD) {
  if (_cfgOld) {
    const styleElementOld = _cfgOld.styleElement
    const lio = styleElementOld.innerText
      .lastIndexOf('.' + _cfgOld.className + '{margin-right:-')

    styleElementOld.innerText = styleElementOld.innerText.substring(0, lio)
  }

  if (CONFIG.scrollWidth === 0) {
    return
  }

  CONFIG_OLD = Object.assign({}, CONFIG) // copying the current CONFIG object
  _styleElement.innerText += '.' + CONFIG.className +
    '{margin-right:-' +
    // additional 0.5px because of chrome rounding bug
    (CONFIG.scrollWidth + .5) +
    'px;height:calc(100% + ' +
    CONFIG.scrollWidth + 'px)}'
}
