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
    function e (l) {
      return (l = l.length ? Array.prototype.slice.apply(l) : [l]).map(function (l) {
        var o = Array.prototype.slice.apply(l.children), i = t('div', l);
        l.classList.add(e.config.wrapperClassName), i.classList.add(e.config.className), o.forEach(function (e) {
          i.appendChild(e)
        })
      })
    }

    function l () {
      _el = t('div',
        document.body), _el.style.position = 'absolute', _el.style['z-index'] = '-1', _el.style.width = '100px', _el.style.overflow = 'scroll';
      var l = _el.offsetWidth - _el.clientWidth;
      return document.body.removeChild(_el), l !== e.config.scrollWidth &&
                                             (e.config.scrollWidth = l, o(e.config.styleElement)), _el.scrollWidth
    }

    function t (e, l) {
      return l.appendChild(document.createElement(e))
    }

    function o (l) {
      l.innerText += '.' + e.config.className + '{overflow:scroll;margin-right:-' + e.config.scrollWidth +
                     'px;height:calc(100% + ' + e.config.scrollWidth + 'px);}'
    }

    window.FRSHideScrollBar = e, e.refreshScrollWidth = l, e.config = {
      className   : 'frs-hide-scroll', wrapperClassName: 'frs-hide-scroll-wrapper', scrollWidth: void 0,
      styleElement: document.getElementsByTagName('style')[0] || t('style', document.head)
    }, window.addEventListener('load', l);
  }, {}], 'NEft': [function (require, module, exports) {

  }, {}], 'GZcb': [function (require, module, exports) {
    require('./scripts/FRSHideScrollbar.js'), require('./styles/FRSHideScrollbar.scss');
  }, {'./scripts/FRSHideScrollbar.js': '757W', "./styles/FRSHideScrollbar.scss": "NEft"}]
}, {}, ["GZcb"], null);
//# sourceMappingURL=/FRS-hide-scrollbar/FRS-hide-scrollbar.4505b8b4.map