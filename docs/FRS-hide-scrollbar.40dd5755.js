parcelRequire = function (e, r, n, t) {
  var i = 'function' == typeof parcelRequire && parcelRequire, o = 'function' == typeof require && require;

  function u (n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = 'function' == typeof parcelRequire && parcelRequire;
        if (!t && f) {
          return f(n, !0);
        }
        if (i) {
          return i(n, !0);
        }
        if (o && 'string' == typeof n) {
          return o(n);
        }
        var c = new Error('Cannot find module \'' + n + '\'');
        throw c.code = 'MODULE_NOT_FOUND', c
      }
      p.resolve = function (r) {
        return e[n][1][r] || r
      };
      var l     = r[n] = new u.Module(n);
      e[n][0].call(l.exports, p, l, l.exports, this)
    }
    return r[n].exports;

    function p (e) {
      return u(p.resolve(e))
    }
  }

  u.isParcelRequire = !0, u.Module = function (e) {
    this.id = e, this.bundle = u, this.exports = {}
  }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
    e[r] = [function (e, r) {
      r.exports = n
    }, {}]
  };
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = c :
    'function' == typeof define && define.amd ? define(function () {
      return c
    }) : t && (this[t] = c)
  }
  return u
}({
  '757W'        : [function (require, module, exports) {
    var e;

    function l () {
      _el = r('div',
        document.body), _el.style.position = 'absolute', _el.style['z-index'] = '-1', _el.style.width = '100px', _el.style.overflow = 'scroll';
      var e = _el.offsetWidth - _el.clientWidth;
      return document.body.removeChild(_el), e !== FRSHideScrollBar.config.scrollWidth &&
                                             (FRSHideScrollBar.config.scrollWidth = e, i()), _el.scrollWidth
    }

    function r (e, l) {
      return l.appendChild(document.createElement(e))
    }

    function i (l, r) {
      if (l = l || FRSHideScrollBar.config.styleElement, r = r || e) {
        var i       = r.styleElement, o = i.innerText.lastIndexOf('.' + r.className + '{margin-right:-');
        i.innerText = i.innerText.substring(0, o)
      }
      0 !== FRSHideScrollBar.config.scrollWidth &&
      (e = FRSHideScrollBar.config, l.innerText += '.' + FRSHideScrollBar.config.className + '{margin-right:-' +
                                                   (FRSHideScrollBar.config.scrollWidth + .5) +
                                                   'px;height:calc(100% + ' + FRSHideScrollBar.config.scrollWidth +
                                                   'px)}')
    }

    window.FRSHideScrollBar = window.FRSHideScrollBar ||
                              {}, FRSHideScrollBar.refreshScrollWidth = l, FRSHideScrollBar.createNewChild = r, FRSHideScrollBar.updateStyles = i, FRSHideScrollBar.config = FRSHideScrollBar.config ||
                                                                                                                                                                             {}, FRSHideScrollBar.config.className = FRSHideScrollBar.config.className ||
                                                                                                                                                                                                                     'frs-hide-scroll', FRSHideScrollBar.config.wrapperClassName = FRSHideScrollBar.config.wrapperClassName ||
                                                                                                                                                                                                                                                                                   'frs-hide-scroll-wrapper', FRSHideScrollBar.config.styleElement = FRSHideScrollBar.config.styleElement ||
                                                                                                                                                                                                                                                                                                                                                     document.getElementsByTagName(
                                                                                                                                                                                                                                                                                                                                                       'style')[0] ||
                                                                                                                                                                                                                                                                                                                                                     r('style',
                                                                                                                                                                                                                                                                                                                                                       document.head), window.addEventListener(
      'load', l, {passive: !0}), window.addEventListener('resize', l, {passive: !0});
  }, {}], 'NEft': [function (require, module, exports) {

  }, {}], 'GZcb': [function (require, module, exports) {
    require('./scripts/FRSHideScrollbar.js'), require('./styles/FRSHideScrollbar.scss');
  }, {'./scripts/FRSHideScrollbar.js': '757W', './styles/FRSHideScrollbar.scss': 'NEft'}]
}, {}, ['GZcb'], null);
//# sourceMappingURL=/FRS-hide-scrollbar/FRS-hide-scrollbar.40dd5755.map