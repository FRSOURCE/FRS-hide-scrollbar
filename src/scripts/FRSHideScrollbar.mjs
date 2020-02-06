const windowFRSHideScrollbar = window.FRSHideScrollbar && window.FRSHideScrollbar.FRSHideScrollbar
const CONFIG = Object.assign(
  {
    className: 'frs-hide-scroll',
    wrapperClassName: 'frs-hide-scroll-wrapper',
    autoInit: true
  },
  (windowFRSHideScrollbar && windowFRSHideScrollbar.config) || {}
)
export const FRSHideScrollbar = {
  refreshScrollWidth,
  update,
  config: CONFIG
}
CONFIG.styleElement = CONFIG.styleElement || createNewChild('style', document.head)
let CONFIG_OLD = { ...CONFIG }

if (CONFIG.autoInit) {
  initHandlers()
}

//

function initHandlers () {
  const refreshScrollWidth = function () { return FRSHideScrollbar.refreshScrollWidth() }
  if (!document.readyState || document.readyState === 'loading') {
    window.addEventListener('load', refreshScrollWidth, { passive: true })
  } else {
    refreshScrollWidth()
  }

  window.addEventListener('resize', refreshScrollWidth, { passive: true })
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
    FRSHideScrollbar.update()
  }
}

function createNewChild (_tagName, _parent) {
  return _parent.appendChild(document.createElement(_tagName))
}

function update (config = CONFIG, cfgOld = CONFIG_OLD) {
  if (cfgOld) {
    const styleElementOld = cfgOld.styleElement
    const lio = styleElementOld.textContent
      .lastIndexOf('.' + cfgOld.wrapperClassName + '{overflow:hidden;height:100%}')

    styleElementOld.textContent = styleElementOld.textContent.substring(0, lio)
  }

  Object.assign(CONFIG, config)

  let elementStyle = 'height:'
  const scrollWidth = CONFIG.scrollWidth

  if (scrollWidth === 0) {
    elementStyle += '100%'
  } else {
    elementStyle += 'calc(100% + ' + scrollWidth + 'px);' +
    'margin-right:-' +
    // additional 0.5px because of chrome rounding bug
    (scrollWidth + 0.5) + 'px'
  }

  CONFIG_OLD = { ...CONFIG } // copying the current CONFIG object
  CONFIG.styleElement.textContent +=
  '.' + CONFIG.wrapperClassName +
  '{overflow:hidden;height:100%}' +
  '.' + CONFIG.className +
    '{overflow:scroll;' + elementStyle + '}'
}
