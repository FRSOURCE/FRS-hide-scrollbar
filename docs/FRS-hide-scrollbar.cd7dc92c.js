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
      }, p.cache = {};
      var l = r[n] = new u.Module(n);
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
  'yrAj'        : [function (require, module, exports) {
    var e, l = exports = exports || {};

    function t () {
      _el = i('div',
        document.body), _el.style.position = 'absolute', _el.style['z-index'] = '-1', _el.style.width = '100px', _el.style.overflow = 'scroll';
      var e = _el.offsetWidth - _el.clientWidth;
      return document.body.removeChild(_el), e !== l.config.scrollWidth &&
                                             (l.config.scrollWidth = e, n()), _el.scrollWidth
    }

    function i (e, l) {
      return l.appendChild(document.createElement(e))
    }

    function n (t, i) {
      if (t = t || l.config.styleElement, i = i || e) {
        var n       = i.styleElement, s = n.innerText.lastIndexOf('.' + i.className + '{margin-right:-');
        n.innerText = n.innerText.substring(0, s)
      }
      0 !== l.config.scrollWidth &&
      (e = l.config, t.innerText += '.' + l.config.className + '{margin-right:-' + (l.config.scrollWidth + .5) +
                                    'px;height:calc(100% + ' + l.config.scrollWidth + 'px)}')
    }

    l.refreshScrollWidth = t, l.createNewChild = i, l.updateStyles = n, l.config = l.config ||
                                                                                   {}, l.config.className = l.config.className ||
                                                                                                            'frs-hide-scroll', l.config.wrapperClassName = l.config.wrapperClassName ||
                                                                                                                                                           'frs-hide-scroll-wrapper', l.config.styleElement = l.config.styleElement ||
                                                                                                                                                                                                              document.getElementsByTagName(
                                                                                                                                                                                                                'style')[0] ||
                                                                                                                                                                                                              i('style',
                                                                                                                                                                                                                document.head), window.addEventListener(
      'load', t, {passive: !0}), window.addEventListener('resize', t, {passive: !0});
  }, {}], 'H3yJ': [function (require, module, exports) {

  }, {}], 'yKCJ': [function (require, module, exports) {
    require('./scripts/FRSHideScrollbar.js'), require('./styles/FRSHideScrollbar.scss');
  }, {'./scripts/FRSHideScrollbar.js': 'yrAj', './styles/FRSHideScrollbar.scss': 'H3yJ'}]
}, {}, ['yKCJ'], null);
//# sourceMappingURL=/FRS-hide-scrollbar/FRS-hide-scrollbar.cd7dc92c.map