(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(l) {
    const o = {};
    return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
  }

  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o)
  }
})();

function Nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ta = {
    exports: {}
  },
  fl = {},
  na = {
    exports: {}
  },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = Symbol.for("react.element"),
  Sc = Symbol.for("react.portal"),
  Cc = Symbol.for("react.fragment"),
  Ec = Symbol.for("react.strict_mode"),
  Pc = Symbol.for("react.profiler"),
  zc = Symbol.for("react.provider"),
  Lc = Symbol.for("react.context"),
  _c = Symbol.for("react.forward_ref"),
  Mc = Symbol.for("react.suspense"),
  Tc = Symbol.for("react.memo"),
  bc = Symbol.for("react.lazy"),
  Ui = Symbol.iterator;

function Rc(e) {
  return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ra = {
    isMounted: function() {
      return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  },
  la = Object.assign,
  oa = {};

function xn(e, t, n) {
  this.props = e, this.context = t, this.refs = oa, this.updater = n || ra
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
};
xn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ia() {}
ia.prototype = xn.prototype;

function qo(e, t, n) {
  this.props = e, this.context = t, this.refs = oa, this.updater = n || ra
}
var Ko = qo.prototype = new ia;
Ko.constructor = qo;
la(Ko, xn.prototype);
Ko.isPureReactComponent = !0;
var Hi = Array.isArray,
  sa = Object.prototype.hasOwnProperty,
  Yo = {
    current: null
  },
  aa = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function ua(e, t, n) {
  var r, l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) sa.call(t, r) && !aa.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
    l.children = u
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: sr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Yo.current
  }
}

function Ic(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}

function Xo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr
}

function Dc(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n]
  })
}
var Vi = /\/+/g;

function zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dc("" + e.key) : t.toString(36)
}

function _r(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case sr:
        case Sc:
          i = !0
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + zl(i, 0) : r, Hi(l) ? (n = "", e != null && (n = e.replace(Vi, "$&/") + "/"), _r(l, t, n, "", function(d) {
    return d
  })) : l != null && (Xo(l) && (l = Ic(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Vi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Hi(e))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + zl(o, a);
      i += _r(o, t, n, u, l)
    } else if (u = Rc(e), typeof u == "function")
      for (e = u.call(e), a = 0; !(o = e.next()).done;) o = o.value, u = r + zl(o, a++), i += _r(o, t, n, u, l);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i
}

function fr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return _r(e, r, "", "", function(o) {
    return t.call(n, o, l++)
  }), r
}

function Oc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
    }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var pe = {
    current: null
  },
  Mr = {
    transition: null
  },
  Fc = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: Yo
  };

function ca() {
  throw Error("act(...) is not supported in production builds of React.")
}
b.Children = {
  map: fr,
  forEach: function(e, t, n) {
    fr(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return fr(e, function() {
      t++
    }), t
  },
  toArray: function(e) {
    return fr(e, function(t) {
      return t
    }) || []
  },
  only: function(e) {
    if (!Xo(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
b.Component = xn;
b.Fragment = Cc;
b.Profiler = Pc;
b.PureComponent = qo;
b.StrictMode = Ec;
b.Suspense = Mc;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc;
b.act = ca;
b.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = la({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Yo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) sa.call(t, u) && !aa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var d = 0; d < u; d++) a[d] = arguments[d + 2];
    r.children = a
  }
  return {
    $$typeof: sr,
    type: e.type,
    key: l,
    ref: o,
    props: r,
    _owner: i
  }
};
b.createContext = function(e) {
  return e = {
    $$typeof: Lc,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: zc,
    _context: e
  }, e.Consumer = e
};
b.createElement = ua;
b.createFactory = function(e) {
  var t = ua.bind(null, e);
  return t.type = e, t
};
b.createRef = function() {
  return {
    current: null
  }
};
b.forwardRef = function(e) {
  return {
    $$typeof: _c,
    render: e
  }
};
b.isValidElement = Xo;
b.lazy = function(e) {
  return {
    $$typeof: bc,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: Oc
  }
};
b.memo = function(e, t) {
  return {
    $$typeof: Tc,
    type: e,
    compare: t === void 0 ? null : t
  }
};
b.startTransition = function(e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e()
  } finally {
    Mr.transition = t
  }
};
b.unstable_act = ca;
b.useCallback = function(e, t) {
  return pe.current.useCallback(e, t)
};
b.useContext = function(e) {
  return pe.current.useContext(e)
};
b.useDebugValue = function() {};
b.useDeferredValue = function(e) {
  return pe.current.useDeferredValue(e)
};
b.useEffect = function(e, t) {
  return pe.current.useEffect(e, t)
};
b.useId = function() {
  return pe.current.useId()
};
b.useImperativeHandle = function(e, t, n) {
  return pe.current.useImperativeHandle(e, t, n)
};
b.useInsertionEffect = function(e, t) {
  return pe.current.useInsertionEffect(e, t)
};
b.useLayoutEffect = function(e, t) {
  return pe.current.useLayoutEffect(e, t)
};
b.useMemo = function(e, t) {
  return pe.current.useMemo(e, t)
};
b.useReducer = function(e, t, n) {
  return pe.current.useReducer(e, t, n)
};
b.useRef = function(e) {
  return pe.current.useRef(e)
};
b.useState = function(e) {
  return pe.current.useState(e)
};
b.useSyncExternalStore = function(e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n)
};
b.useTransition = function() {
  return pe.current.useTransition()
};
b.version = "18.3.1";
na.exports = b;
var _ = na.exports;
const $c = Nc(_);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ac = _,
  Bc = Symbol.for("react.element"),
  Uc = Symbol.for("react.fragment"),
  Hc = Object.prototype.hasOwnProperty,
  Vc = Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function da(e, t, n) {
  var r, l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Hc.call(t, r) && !Wc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Bc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Vc.current
  }
}
fl.Fragment = Uc;
fl.jsx = da;
fl.jsxs = da;
ta.exports = fl;
var s = ta.exports,
  fa = {
    exports: {}
  },
  Se = {},
  pa = {
    exports: {}
  },
  ma = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(S, z) {
    var M = S.length;
    S.push(z);
    e: for (; 0 < M;) {
      var F = M - 1 >>> 1,
        B = S[F];
      if (0 < l(B, z)) S[F] = z, S[M] = B, M = F;
      else break e
    }
  }

  function n(S) {
    return S.length === 0 ? null : S[0]
  }

  function r(S) {
    if (S.length === 0) return null;
    var z = S[0],
      M = S.pop();
    if (M !== z) {
      S[0] = M;
      e: for (var F = 0, B = S.length, Re = B >>> 1; F < Re;) {
        var He = 2 * (F + 1) - 1,
          Ht = S[He],
          Ve = He + 1,
          Ge = S[Ve];
        if (0 > l(Ht, M)) Ve < B && 0 > l(Ge, Ht) ? (S[F] = Ge, S[Ve] = M, F = Ve) : (S[F] = Ht, S[He] = M, F = He);
        else if (Ve < B && 0 > l(Ge, M)) S[F] = Ge, S[Ve] = M, F = Ve;
        else break e
      }
    }
    return z
  }

  function l(S, z) {
    var M = S.sortIndex - z.sortIndex;
    return M !== 0 ? M : S.id - z.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now()
    }
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function() {
      return i.now() - a
    }
  }
  var u = [],
    d = [],
    m = 1,
    h = null,
    g = 3,
    y = !1,
    k = !1,
    N = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function p(S) {
    for (var z = n(d); z !== null;) {
      if (z.callback === null) r(d);
      else if (z.startTime <= S) r(d), z.sortIndex = z.expirationTime, t(u, z);
      else break;
      z = n(d)
    }
  }

  function v(S) {
    if (N = !1, p(S), !k)
      if (n(u) !== null) k = !0, Pe(w);
      else {
        var z = n(d);
        z !== null && Xe(v, z.startTime - S)
      }
  }

  function w(S, z) {
    k = !1, N && (N = !1, f(P), P = -1), y = !0;
    var M = g;
    try {
      for (p(z), h = n(u); h !== null && (!(h.expirationTime > z) || S && !T());) {
        var F = h.callback;
        if (typeof F == "function") {
          h.callback = null, g = h.priorityLevel;
          var B = F(h.expirationTime <= z);
          z = e.unstable_now(), typeof B == "function" ? h.callback = B : h === n(u) && r(u), p(z)
        } else r(u);
        h = n(u)
      }
      if (h !== null) var Re = !0;
      else {
        var He = n(d);
        He !== null && Xe(v, He.startTime - z), Re = !1
      }
      return Re
    } finally {
      h = null, g = M, y = !1
    }
  }
  var j = !1,
    C = null,
    P = -1,
    A = 5,
    L = -1;

  function T() {
    return !(e.unstable_now() - L < A)
  }

  function V() {
    if (C !== null) {
      var S = e.unstable_now();
      L = S;
      var z = !0;
      try {
        z = C(!0, S)
      } finally {
        z ? ne() : (j = !1, C = null)
      }
    } else j = !1
  }
  var ne;
  if (typeof c == "function") ne = function() {
    c(V)
  };
  else if (typeof MessageChannel < "u") {
    var Ee = new MessageChannel,
      ie = Ee.port2;
    Ee.port1.onmessage = V, ne = function() {
      ie.postMessage(null)
    }
  } else ne = function() {
    O(V, 0)
  };

  function Pe(S) {
    C = S, j || (j = !0, ne())
  }

  function Xe(S, z) {
    P = O(function() {
      S(e.unstable_now())
    }, z)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
    S.callback = null
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, Pe(w))
  }, e.unstable_forceFrameRate = function(S) {
    0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < S ? Math.floor(1e3 / S) : 5
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u)
  }, e.unstable_next = function(S) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = g
    }
    var M = g;
    g = z;
    try {
      return S()
    } finally {
      g = M
    }
  }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(S, z) {
    switch (S) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        S = 3
    }
    var M = g;
    g = S;
    try {
      return z()
    } finally {
      g = M
    }
  }, e.unstable_scheduleCallback = function(S, z, M) {
    var F = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? F + M : F) : M = F, S) {
      case 1:
        var B = -1;
        break;
      case 2:
        B = 250;
        break;
      case 5:
        B = 1073741823;
        break;
      case 4:
        B = 1e4;
        break;
      default:
        B = 5e3
    }
    return B = M + B, S = {
      id: m++,
      callback: z,
      priorityLevel: S,
      startTime: M,
      expirationTime: B,
      sortIndex: -1
    }, M > F ? (S.sortIndex = M, t(d, S), n(u) === null && S === n(d) && (N ? (f(P), P = -1) : N = !0, Xe(v, M - F))) : (S.sortIndex = B, t(u, S), k || y || (k = !0, Pe(w))), S
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(S) {
    var z = g;
    return function() {
      var M = g;
      g = z;
      try {
        return S.apply(this, arguments)
      } finally {
        g = M
      }
    }
  }
})(ma);
pa.exports = ma;
var Qc = pa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qc = _,
  Ne = Qc;

function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ha = new Set,
  Vn = {};

function Bt(e, t) {
  fn(e, t), fn(e + "Capture", t)
}

function fn(e, t) {
  for (Vn[e] = t, e = 0; e < t.length; e++) ha.add(t[e])
}
var rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  eo = Object.prototype.hasOwnProperty,
  Kc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wi = {},
  Qi = {};

function Yc(e) {
  return eo.call(Qi, e) ? !0 : eo.call(Wi, e) ? !1 : Kc.test(e) ? Qi[e] = !0 : (Wi[e] = !0, !1)
}

function Xc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}

function Gc(e, t, n, r) {
  if (t === null || typeof t > "u" || Xc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t
  }
  return !1
}

function me(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  oe[e] = new me(e, 0, !1, e, null, !1, !1)
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function(e) {
  var t = e[0];
  oe[t] = new me(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  oe[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  oe[e] = new me(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  oe[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  oe[e] = new me(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
  oe[e] = new me(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  oe[e] = new me(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
  oe[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Go = /[\-:]([a-z])/g;

function Zo(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(Go, Zo);
  oe[t] = new me(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Go, Zo);
  oe[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Go, Zo);
  oe[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
oe.xlinkHref = new me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Jo(e, t, n, r) {
  var l = oe.hasOwnProperty(t) ? oe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gc(t, n, l, r) && (n = null), r || l === null ? Yc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var st = qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = Symbol.for("react.element"),
  qt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  ei = Symbol.for("react.strict_mode"),
  to = Symbol.for("react.profiler"),
  ga = Symbol.for("react.provider"),
  ya = Symbol.for("react.context"),
  ti = Symbol.for("react.forward_ref"),
  no = Symbol.for("react.suspense"),
  ro = Symbol.for("react.suspense_list"),
  ni = Symbol.for("react.memo"),
  ct = Symbol.for("react.lazy"),
  va = Symbol.for("react.offscreen"),
  qi = Symbol.iterator;

function jn(e) {
  return e === null || typeof e != "object" ? null : (e = qi && e[qi] || e["@@iterator"], typeof e == "function" ? e : null)
}
var K = Object.assign,
  Ll;

function Mn(e) {
  if (Ll === void 0) try {
    throw Error()
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ll = t && t[1] || ""
  }
  return `
` + Ll + e
}
var _l = !1;

function Ml(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
          throw Error()
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error()
          }
        }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (d) {
          var r = d
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (d) {
          r = d
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (d) {
        r = d
      }
      e()
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var l = d.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a];) a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if (i--, a--, 0 > a || l[i] !== o[a]) {
                var u = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
              } while (1 <= i && 0 <= a);
          break
        }
    }
  } finally {
    _l = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : ""
}

function Zc(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ml(e.type, !1), e;
    case 11:
      return e = Ml(e.type.render, !1), e;
    case 1:
      return e = Ml(e.type, !0), e;
    default:
      return ""
  }
}

function lo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case qt:
      return "Portal";
    case to:
      return "Profiler";
    case ei:
      return "StrictMode";
    case no:
      return "Suspense";
    case ro:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ya:
      return (e.displayName || "Context") + ".Consumer";
    case ga:
      return (e._context.displayName || "Context") + ".Provider";
    case ti:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ni:
      return t = e.displayName || null, t !== null ? t : lo(e.type) || "Memo";
    case ct:
      t = e._payload, e = e._init;
      try {
        return lo(e(t))
      } catch {}
  }
  return null
}

function Jc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return lo(t);
    case 8:
      return t === ei ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t
  }
  return null
}

function St(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}

function xa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function ed(e) {
  var t = xa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get,
      o = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function() {
        return l.call(this)
      },
      set: function(i) {
        r = "" + i, o.call(this, i)
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function() {
        return r
      },
      setValue: function(i) {
        r = "" + i
      },
      stopTracking: function() {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}

function mr(e) {
  e._valueTracker || (e._valueTracker = ed(e))
}

function ka(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = xa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ur(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}

function oo(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}

function Ki(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = St(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}

function wa(e, t) {
  t = t.checked, t != null && Jo(e, "checked", t, !1)
}

function io(e, t) {
  wa(e, t);
  var n = St(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? so(e, t.type, n) : t.hasOwnProperty("defaultValue") && so(e, t.type, St(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Yi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function so(e, t, n) {
  (t !== "number" || Ur(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Tn = Array.isArray;

function on(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + St(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return
      }
      t !== null || e[l].disabled || (t = e[l])
    }
    t !== null && (t.selected = !0)
  }
}

function ao(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}

function Xi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(x(92));
      if (Tn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = {
    initialValue: St(n)
  }
}

function ja(e, t) {
  var n = St(t.value),
    r = St(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Gi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Na(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function uo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Na(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var hr, Sa = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l)
    })
  } : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hr = hr || document.createElement("div"), hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
    for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var In = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  td = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function(e) {
  td.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e]
  })
});

function Ca(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px"
}

function Ea(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ca(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
    }
}
var nd = K({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function co(e, t) {
  if (t) {
    if (nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62))
  }
}

function fo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0
  }
}
var po = null;

function ri(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var mo = null,
  sn = null,
  an = null;

function Zi(e) {
  if (e = cr(e)) {
    if (typeof mo != "function") throw Error(x(280));
    var t = e.stateNode;
    t && (t = yl(t), mo(e.stateNode, e.type, t))
  }
}

function Pa(e) {
  sn ? an ? an.push(e) : an = [e] : sn = e
}

function za() {
  if (sn) {
    var e = sn,
      t = an;
    if (an = sn = null, Zi(e), t)
      for (e = 0; e < t.length; e++) Zi(t[e])
  }
}

function La(e, t) {
  return e(t)
}

function _a() {}
var Tl = !1;

function Ma(e, t, n) {
  if (Tl) return e(t, n);
  Tl = !0;
  try {
    return La(e, t, n)
  } finally {
    Tl = !1, (sn !== null || an !== null) && (_a(), za())
  }
}

function Qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n
}
var ho = !1;
if (rt) try {
  var Nn = {};
  Object.defineProperty(Nn, "passive", {
    get: function() {
      ho = !0
    }
  }), window.addEventListener("test", Nn, Nn), window.removeEventListener("test", Nn, Nn)
} catch {
  ho = !1
}

function rd(e, t, n, r, l, o, i, a, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d)
  } catch (m) {
    this.onError(m)
  }
}
var Dn = !1,
  Hr = null,
  Vr = !1,
  go = null,
  ld = {
    onError: function(e) {
      Dn = !0, Hr = e
    }
  };

function od(e, t, n, r, l, o, i, a, u) {
  Dn = !1, Hr = null, rd.apply(ld, arguments)
}

function id(e, t, n, r, l, o, i, a, u) {
  if (od.apply(this, arguments), Dn) {
    if (Dn) {
      var d = Hr;
      Dn = !1, Hr = null
    } else throw Error(x(198));
    Vr || (Vr = !0, go = d)
  }
}

function Ut(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return;) t = t.return;
  else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function Ta(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
  }
  return null
}

function Ji(e) {
  if (Ut(e) !== e) throw Error(x(188))
}

function sd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ut(e), t === null) throw Error(x(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t;;) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue
      }
      break
    }
    if (l.child === o.child) {
      for (o = l.child; o;) {
        if (o === n) return Ji(l), e;
        if (o === r) return Ji(l), t;
        o = o.sibling
      }
      throw Error(x(188))
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, a = l.child; a;) {
        if (a === n) {
          i = !0, n = l, r = o;
          break
        }
        if (a === r) {
          i = !0, r = l, n = o;
          break
        }
        a = a.sibling
      }
      if (!i) {
        for (a = o.child; a;) {
          if (a === n) {
            i = !0, n = o, r = l;
            break
          }
          if (a === r) {
            i = !0, r = o, n = l;
            break
          }
          a = a.sibling
        }
        if (!i) throw Error(x(189))
      }
    }
    if (n.alternate !== r) throw Error(x(190))
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t
}

function ba(e) {
  return e = sd(e), e !== null ? Ra(e) : null
}

function Ra(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Ra(e);
    if (t !== null) return t;
    e = e.sibling
  }
  return null
}
var Ia = Ne.unstable_scheduleCallback,
  es = Ne.unstable_cancelCallback,
  ad = Ne.unstable_shouldYield,
  ud = Ne.unstable_requestPaint,
  X = Ne.unstable_now,
  cd = Ne.unstable_getCurrentPriorityLevel,
  li = Ne.unstable_ImmediatePriority,
  Da = Ne.unstable_UserBlockingPriority,
  Wr = Ne.unstable_NormalPriority,
  dd = Ne.unstable_LowPriority,
  Oa = Ne.unstable_IdlePriority,
  pl = null,
  Ke = null;

function fd(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function") try {
    Ke.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128)
  } catch {}
}
var $e = Math.clz32 ? Math.clz32 : hd,
  pd = Math.log,
  md = Math.LN2;

function hd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (pd(e) / md | 0) | 0
}
var gr = 64,
  yr = 4194304;

function bn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}

function Qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? r = bn(a) : (o &= i, o !== 0 && (r = bn(o)))
  } else i = n & ~l, i !== 0 ? r = bn(i) : o !== 0 && (r = bn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;) n = 31 - $e(t), l = 1 << n, r |= e[n], t &= ~l;
  return r
}

function gd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1
  }
}

function yd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
    var i = 31 - $e(o),
      a = 1 << i,
      u = l[i];
    u === -1 ? (!(a & n) || a & r) && (l[i] = gd(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a
  }
}

function yo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Fa() {
  var e = gr;
  return gr <<= 1, !(gr & 4194240) && (gr = 64), e
}

function bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function ar(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $e(t), e[t] = n
}

function vd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var l = 31 - $e(n),
      o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
  }
}

function oi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - $e(n),
      l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l
  }
}
var I = 0;

function $a(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Aa, ii, Ba, Ua, Ha, vo = !1,
  vr = [],
  gt = null,
  yt = null,
  vt = null,
  qn = new Map,
  Kn = new Map,
  ft = [],
  xd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function ts(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId)
  }
}

function Sn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: o,
    targetContainers: [l]
  }, t !== null && (t = cr(t), t !== null && ii(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function kd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return gt = Sn(gt, e, t, n, r, l), !0;
    case "dragenter":
      return yt = Sn(yt, e, t, n, r, l), !0;
    case "mouseover":
      return vt = Sn(vt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return qn.set(o, Sn(qn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Kn.set(o, Sn(Kn.get(o) || null, e, t, n, r, l)), !0
  }
  return !1
}

function Va(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ta(n), t !== null) {
          e.blockedOn = t, Ha(e.priority, function() {
            Ba(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}

function Tr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      po = r, n.target.dispatchEvent(r), po = null
    } else return t = cr(n), t !== null && ii(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}

function ns(e, t, n) {
  Tr(e) && n.delete(t)
}

function wd() {
  vo = !1, gt !== null && Tr(gt) && (gt = null), yt !== null && Tr(yt) && (yt = null), vt !== null && Tr(vt) && (vt = null), qn.forEach(ns), Kn.forEach(ns)
}

function Cn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, wd)))
}

function Yn(e) {
  function t(l) {
    return Cn(l, e)
  }
  if (0 < vr.length) {
    Cn(vr[0], e);
    for (var n = 1; n < vr.length; n++) {
      var r = vr[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (gt !== null && Cn(gt, e), yt !== null && Cn(yt, e), vt !== null && Cn(vt, e), qn.forEach(t), Kn.forEach(t), n = 0; n < ft.length; n++) r = ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ft.length && (n = ft[0], n.blockedOn === null);) Va(n), n.blockedOn === null && ft.shift()
}
var un = st.ReactCurrentBatchConfig,
  qr = !0;

function jd(e, t, n, r) {
  var l = I,
    o = un.transition;
  un.transition = null;
  try {
    I = 1, si(e, t, n, r)
  } finally {
    I = l, un.transition = o
  }
}

function Nd(e, t, n, r) {
  var l = I,
    o = un.transition;
  un.transition = null;
  try {
    I = 4, si(e, t, n, r)
  } finally {
    I = l, un.transition = o
  }
}

function si(e, t, n, r) {
  if (qr) {
    var l = xo(e, t, n, r);
    if (l === null) Hl(e, t, r, Kr, n), ts(e, r);
    else if (kd(l, e, t, n, r)) r.stopPropagation();
    else if (ts(e, r), t & 4 && -1 < xd.indexOf(e)) {
      for (; l !== null;) {
        var o = cr(l);
        if (o !== null && Aa(o), o = xo(e, t, n, r), o === null && Hl(e, t, r, Kr, n), o === l) break;
        l = o
      }
      l !== null && r.stopPropagation()
    } else Hl(e, t, r, null, n)
  }
}
var Kr = null;

function xo(e, t, n, r) {
  if (Kr = null, e = ri(r), e = Mt(e), e !== null)
    if (t = Ut(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
    if (e = Ta(t), e !== null) return e;
    e = null
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null
  } else t !== e && (e = null);
  return Kr = e, null
}

function Wa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (cd()) {
        case li:
          return 1;
        case Da:
          return 4;
        case Wr:
        case dd:
          return 16;
        case Oa:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var mt = null,
  ai = null,
  br = null;

function Qa() {
  if (br) return br;
  var e, t = ai,
    n = t.length,
    r, l = "value" in mt ? mt.value : mt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return br = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Rr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function xr() {
  return !0
}

function rs() {
  return !1
}

function Ce(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? xr : rs, this.isPropagationStopped = rs, this
  }
  return K(t.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xr)
    },
    stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xr)
    },
    persist: function() {},
    isPersistent: xr
  }), t
}
var kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  ui = Ce(kn),
  ur = K({}, kn, {
    view: 0,
    detail: 0
  }),
  Sd = Ce(ur),
  Rl, Il, En, ml = K({}, ur, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ci,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Rl = e.screenX - En.screenX, Il = e.screenY - En.screenY) : Il = Rl = 0, En = e), Rl)
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Il
    }
  }),
  ls = Ce(ml),
  Cd = K({}, ml, {
    dataTransfer: 0
  }),
  Ed = Ce(Cd),
  Pd = K({}, ur, {
    relatedTarget: 0
  }),
  Dl = Ce(Pd),
  zd = K({}, kn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Ld = Ce(zd),
  _d = K({}, kn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
  }),
  Md = Ce(_d),
  Td = K({}, kn, {
    data: 0
  }),
  os = Ce(Td),
  bd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  Rd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  Id = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function Dd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Id[e]) ? !!t[e] : !1
}

function ci() {
  return Dd
}
var Od = K({}, ur, {
    key: function(e) {
      if (e.key) {
        var t = bd[e.key] || e.key;
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress" ? (e = Rr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rd[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ci,
    charCode: function(e) {
      return e.type === "keypress" ? Rr(e) : 0
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
      return e.type === "keypress" ? Rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
  }),
  Fd = Ce(Od),
  $d = K({}, ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  is = Ce($d),
  Ad = K({}, ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ci
  }),
  Bd = Ce(Ad),
  Ud = K({}, kn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Hd = Ce(Ud),
  Vd = K({}, ml, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Wd = Ce(Vd),
  Qd = [9, 13, 27, 32],
  di = rt && "CompositionEvent" in window,
  On = null;
rt && "documentMode" in document && (On = document.documentMode);
var qd = rt && "TextEvent" in window && !On,
  qa = rt && (!di || On && 8 < On && 11 >= On),
  ss = " ",
  as = !1;

function Ka(e, t) {
  switch (e) {
    case "keyup":
      return Qd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function Ya(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Yt = !1;

function Kd(e, t) {
  switch (e) {
    case "compositionend":
      return Ya(t);
    case "keypress":
      return t.which !== 32 ? null : (as = !0, ss);
    case "textInput":
      return e = t.data, e === ss && as ? null : e;
    default:
      return null
  }
}

function Yd(e, t) {
  if (Yt) return e === "compositionend" || !di && Ka(e, t) ? (e = Qa(), br = ai = mt = null, Yt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return qa && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var Xd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xd[e.type] : t === "textarea"
}

function Xa(e, t, n, r) {
  Pa(r), t = Yr(t, "onChange"), 0 < t.length && (n = new ui("onChange", "change", null, n, r), e.push({
    event: n,
    listeners: t
  }))
}
var Fn = null,
  Xn = null;

function Gd(e) {
  su(e, 0)
}

function hl(e) {
  var t = Zt(e);
  if (ka(t)) return e
}

function Zd(e, t) {
  if (e === "change") return t
}
var Ga = !1;
if (rt) {
  var Ol;
  if (rt) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var cs = document.createElement("div");
      cs.setAttribute("oninput", "return;"), Fl = typeof cs.oninput == "function"
    }
    Ol = Fl
  } else Ol = !1;
  Ga = Ol && (!document.documentMode || 9 < document.documentMode)
}

function ds() {
  Fn && (Fn.detachEvent("onpropertychange", Za), Xn = Fn = null)
}

function Za(e) {
  if (e.propertyName === "value" && hl(Xn)) {
    var t = [];
    Xa(t, Xn, e, ri(e)), Ma(Gd, t)
  }
}

function Jd(e, t, n) {
  e === "focusin" ? (ds(), Fn = t, Xn = n, Fn.attachEvent("onpropertychange", Za)) : e === "focusout" && ds()
}

function ef(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return hl(Xn)
}

function tf(e, t) {
  if (e === "click") return hl(t)
}

function nf(e, t) {
  if (e === "input" || e === "change") return hl(t)
}

function rf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Be = typeof Object.is == "function" ? Object.is : rf;

function Gn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!eo.call(t, l) || !Be(e[l], t[l])) return !1
  }
  return !0
}

function fs(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function ps(e, t) {
  var n = fs(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = fs(n)
  }
}

function Ja(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ja(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function eu() {
  for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ur(e.document)
  }
  return t
}

function fi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function lf(e) {
  var t = eu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ja(n.ownerDocument.documentElement, n)) {
    if (r !== null && fi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ps(n, o);
        var i = ps(n, r);
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var of = rt && "documentMode" in document && 11 >= document.documentMode, Xt = null, ko = null, $n = null, wo = !1;

function ms(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wo || Xt == null || Xt !== Ur(r) || (r = Xt, "selectionStart" in r && fi(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }), $n && Gn($n, r) || ($n = r, r = Yr(ko, "onSelect"), 0 < r.length && (t = new ui("onSelect", "select", null, t, n), e.push({
    event: t,
    listeners: r
  }), t.target = Xt)))
}

function kr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Gt = {
    animationend: kr("Animation", "AnimationEnd"),
    animationiteration: kr("Animation", "AnimationIteration"),
    animationstart: kr("Animation", "AnimationStart"),
    transitionend: kr("Transition", "TransitionEnd")
  },
  $l = {},
  tu = {};
rt && (tu = document.createElement("div").style, "AnimationEvent" in window || (delete Gt.animationend.animation, delete Gt.animationiteration.animation, delete Gt.animationstart.animation), "TransitionEvent" in window || delete Gt.transitionend.transition);

function gl(e) {
  if ($l[e]) return $l[e];
  if (!Gt[e]) return e;
  var t = Gt[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in tu) return $l[e] = t[n];
  return e
}
var nu = gl("animationend"),
  ru = gl("animationiteration"),
  lu = gl("animationstart"),
  ou = gl("transitionend"),
  iu = new Map,
  hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Et(e, t) {
  iu.set(e, t), Bt(t, [e])
}
for (var Al = 0; Al < hs.length; Al++) {
  var Bl = hs[Al],
    sf = Bl.toLowerCase(),
    af = Bl[0].toUpperCase() + Bl.slice(1);
  Et(sf, "on" + af)
}
Et(nu, "onAnimationEnd");
Et(ru, "onAnimationIteration");
Et(lu, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(ou, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  uf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));

function gs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, id(r, t, void 0, e), e.currentTarget = null
}

function su(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            d = a.currentTarget;
          if (a = a.listener, u !== o && l.isPropagationStopped()) break e;
          gs(l, a, d), o = u
        } else
          for (i = 0; i < r.length; i++) {
            if (a = r[i], u = a.instance, d = a.currentTarget, a = a.listener, u !== o && l.isPropagationStopped()) break e;
            gs(l, a, d), o = u
          }
    }
  }
  if (Vr) throw e = go, Vr = !1, go = null, e
}

function U(e, t) {
  var n = t[Eo];
  n === void 0 && (n = t[Eo] = new Set);
  var r = e + "__bubble";
  n.has(r) || (au(t, e, 2, !1), n.add(r))
}

function Ul(e, t, n) {
  var r = 0;
  t && (r |= 4), au(n, e, r, t)
}
var wr = "_reactListening" + Math.random().toString(36).slice(2);

function Zn(e) {
  if (!e[wr]) {
    e[wr] = !0, ha.forEach(function(n) {
      n !== "selectionchange" && (uf.has(n) || Ul(n, !1, e), Ul(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wr] || (t[wr] = !0, Ul("selectionchange", !1, t))
  }
}

function au(e, t, n, r) {
  switch (Wa(t)) {
    case 1:
      var l = jd;
      break;
    case 4:
      l = Nd;
      break;
    default:
      l = si
  }
  n = l.bind(null, t, n, e), l = void 0, !ho || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
    capture: !0,
    passive: l
  }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
    passive: l
  }) : e.addEventListener(t, n, !1)
}

function Hl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var a = r.stateNode.containerInfo;
      if (a === l || a.nodeType === 8 && a.parentNode === l) break;
      if (i === 4)
        for (i = r.return; i !== null;) {
          var u = i.tag;
          if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
          i = i.return
        }
      for (; a !== null;) {
        if (i = Mt(a), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = o = i;
          continue e
        }
        a = a.parentNode
      }
    }
    r = r.return
  }
  Ma(function() {
    var d = o,
      m = ri(n),
      h = [];
    e: {
      var g = iu.get(e);
      if (g !== void 0) {
        var y = ui,
          k = e;
        switch (e) {
          case "keypress":
            if (Rr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Fd;
            break;
          case "focusin":
            k = "focus", y = Dl;
            break;
          case "focusout":
            k = "blur", y = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            y = Dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = ls;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ed;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Bd;
            break;
          case nu:
          case ru:
          case lu:
            y = Ld;
            break;
          case ou:
            y = Hd;
            break;
          case "scroll":
            y = Sd;
            break;
          case "wheel":
            y = Wd;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Md;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = is
        }
        var N = (t & 4) !== 0,
          O = !N && e === "scroll",
          f = N ? g !== null ? g + "Capture" : null : g;
        N = [];
        for (var c = d, p; c !== null;) {
          p = c;
          var v = p.stateNode;
          if (p.tag === 5 && v !== null && (p = v, f !== null && (v = Qn(c, f), v != null && N.push(Jn(c, v, p)))), O) break;
          c = c.return
        }
        0 < N.length && (g = new y(g, k, null, n, m), h.push({
          event: g,
          listeners: N
        }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", g && n !== po && (k = n.relatedTarget || n.fromElement) && (Mt(k) || k[lt])) break e;
        if ((y || g) && (g = m.window === m ? m : (g = m.ownerDocument) ? g.defaultView || g.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = d, k = k ? Mt(k) : null, k !== null && (O = Ut(k), k !== O || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = d), y !== k)) {
          if (N = ls, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (N = is, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), O = y == null ? g : Zt(y), p = k == null ? g : Zt(k), g = new N(v, c + "leave", y, n, m), g.target = O, g.relatedTarget = p, v = null, Mt(m) === d && (N = new N(f, c + "enter", k, n, m), N.target = p, N.relatedTarget = O, v = N), O = v, y && k) t: {
            for (N = y, f = k, c = 0, p = N; p; p = Vt(p)) c++;
            for (p = 0, v = f; v; v = Vt(v)) p++;
            for (; 0 < c - p;) N = Vt(N),
            c--;
            for (; 0 < p - c;) f = Vt(f),
            p--;
            for (; c--;) {
              if (N === f || f !== null && N === f.alternate) break t;
              N = Vt(N), f = Vt(f)
            }
            N = null
          }
          else N = null;
          y !== null && ys(h, g, y, N, !1), k !== null && O !== null && ys(h, O, k, N, !0)
        }
      }
      e: {
        if (g = d ? Zt(d) : window, y = g.nodeName && g.nodeName.toLowerCase(), y === "select" || y === "input" && g.type === "file") var w = Zd;
        else if (us(g))
          if (Ga) w = nf;
          else {
            w = ef;
            var j = Jd
          }
        else(y = g.nodeName) && y.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (w = tf);
        if (w && (w = w(e, d))) {
          Xa(h, w, n, m);
          break e
        }
        j && j(e, g, d),
        e === "focusout" && (j = g._wrapperState) && j.controlled && g.type === "number" && so(g, "number", g.value)
      }
      switch (j = d ? Zt(d) : window, e) {
        case "focusin":
          (us(j) || j.contentEditable === "true") && (Xt = j, ko = d, $n = null);
          break;
        case "focusout":
          $n = ko = Xt = null;
          break;
        case "mousedown":
          wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wo = !1, ms(h, n, m);
          break;
        case "selectionchange":
          if (of) break;
        case "keydown":
        case "keyup":
          ms(h, n, m)
      }
      var C;
      if (di) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e
        }
        P = void 0
      }
      else Yt ? Ka(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (qa && n.locale !== "ko" && (Yt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Yt && (C = Qa()) : (mt = m, ai = "value" in mt ? mt.value : mt.textContent, Yt = !0)), j = Yr(d, P), 0 < j.length && (P = new os(P, e, null, n, m), h.push({
        event: P,
        listeners: j
      }), C ? P.data = C : (C = Ya(n), C !== null && (P.data = C)))),
      (C = qd ? Kd(e, n) : Yd(e, n)) && (d = Yr(d, "onBeforeInput"), 0 < d.length && (m = new os("onBeforeInput", "beforeinput", null, n, m), h.push({
        event: m,
        listeners: d
      }), m.data = C))
    }
    su(h, t)
  })
}

function Jn(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}

function Yr(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Qn(e, n), o != null && r.unshift(Jn(e, o, l)), o = Qn(e, t), o != null && r.push(Jn(e, o, l))), e = e.return
  }
  return r
}

function Vt(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function ys(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r;) {
    var a = n,
      u = a.alternate,
      d = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && d !== null && (a = d, l ? (u = Qn(n, o), u != null && i.unshift(Jn(n, u, a))) : l || (u = Qn(n, o), u != null && i.push(Jn(n, u, a)))), n = n.return
  }
  i.length !== 0 && e.push({
    event: t,
    listeners: i
  })
}
var cf = /\r\n?/g,
  df = /\u0000|\uFFFD/g;

function vs(e) {
  return (typeof e == "string" ? e : "" + e).replace(cf, `
`).replace(df, "")
}

function jr(e, t, n) {
  if (t = vs(t), vs(e) !== t && n) throw Error(x(425))
}

function Xr() {}
var jo = null,
  No = null;

function So(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Co = typeof setTimeout == "function" ? setTimeout : void 0,
  ff = typeof clearTimeout == "function" ? clearTimeout : void 0,
  xs = typeof Promise == "function" ? Promise : void 0,
  pf = typeof queueMicrotask == "function" ? queueMicrotask : typeof xs < "u" ? function(e) {
    return xs.resolve(null).then(e).catch(mf)
  } : Co;

function mf(e) {
  setTimeout(function() {
    throw e
  })
}

function Vl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Yn(t);
          return
        }
        r--
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l
  } while (n);
  Yn(t)
}

function xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null
    }
  }
  return e
}

function ks(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var wn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + wn,
  er = "__reactProps$" + wn,
  lt = "__reactContainer$" + wn,
  Eo = "__reactEvents$" + wn,
  hf = "__reactListeners$" + wn,
  gf = "__reactHandles$" + wn;

function Mt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[lt] || n[qe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = ks(e); e !== null;) {
          if (n = e[qe]) return n;
          e = ks(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}

function cr(e) {
  return e = e[qe] || e[lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33))
}

function yl(e) {
  return e[er] || null
}
var Po = [],
  Jt = -1;

function Pt(e) {
  return {
    current: e
  }
}

function H(e) {
  0 > Jt || (e.current = Po[Jt], Po[Jt] = null, Jt--)
}

function $(e, t) {
  Jt++, Po[Jt] = e.current, e.current = t
}
var Ct = {},
  ce = Pt(Ct),
  ye = Pt(!1),
  Dt = Ct;

function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function ve(e) {
  return e = e.childContextTypes, e != null
}

function Gr() {
  H(ye), H(ce)
}

function ws(e, t, n) {
  if (ce.current !== Ct) throw Error(x(168));
  $(ce, t), $(ye, n)
}

function uu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t)) throw Error(x(108, Jc(e) || "Unknown", l));
  return K({}, n, r)
}

function Zr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ct, Dt = ce.current, $(ce, e), $(ye, ye.current), !0
}

function js(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? (e = uu(e, t, Dt), r.__reactInternalMemoizedMergedChildContext = e, H(ye), H(ce), $(ce, e)) : H(ye), $(ye, n)
}
var Je = null,
  vl = !1,
  Wl = !1;

function cu(e) {
  Je === null ? Je = [e] : Je.push(e)
}

function yf(e) {
  vl = !0, cu(e)
}

function zt() {
  if (!Wl && Je !== null) {
    Wl = !0;
    var e = 0,
      t = I;
    try {
      var n = Je;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null)
      }
      Je = null, vl = !1
    } catch (l) {
      throw Je !== null && (Je = Je.slice(e + 1)), Ia(li, zt), l
    } finally {
      I = t, Wl = !1
    }
  }
  return null
}
var en = [],
  tn = 0,
  Jr = null,
  el = 0,
  ze = [],
  Le = 0,
  Ot = null,
  et = 1,
  tt = "";

function Lt(e, t) {
  en[tn++] = el, en[tn++] = Jr, Jr = e, el = t
}

function du(e, t, n) {
  ze[Le++] = et, ze[Le++] = tt, ze[Le++] = Ot, Ot = e;
  var r = et;
  e = tt;
  var l = 32 - $e(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - $e(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, et = 1 << 32 - $e(t) + l | n << l | r, tt = o + e
  } else et = 1 << o | n << l | r, tt = e
}

function pi(e) {
  e.return !== null && (Lt(e, 1), du(e, 1, 0))
}

function mi(e) {
  for (; e === Jr;) Jr = en[--tn], en[tn] = null, el = en[--tn], en[tn] = null;
  for (; e === Ot;) Ot = ze[--Le], ze[Le] = null, tt = ze[--Le], ze[Le] = null, et = ze[--Le], ze[Le] = null
}
var je = null,
  we = null,
  W = !1,
  Fe = null;

function fu(e, t) {
  var n = _e(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ns(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, we = xt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ot !== null ? {
        id: et,
        overflow: tt
      } : null, e.memoizedState = {
        dehydrated: t,
        treeContext: n,
        retryLane: 1073741824
      }, n = _e(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, we = null, !0) : !1;
    default:
      return !1
  }
}

function zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Lo(e) {
  if (W) {
    var t = we;
    if (t) {
      var n = t;
      if (!Ns(e, t)) {
        if (zo(e)) throw Error(x(418));
        t = xt(n.nextSibling);
        var r = je;
        t && Ns(e, t) ? fu(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, je = e)
      }
    } else {
      if (zo(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, W = !1, je = e
    }
  }
}

function Ss(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  je = e
}

function Nr(e) {
  if (e !== je) return !1;
  if (!W) return Ss(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !So(e.type, e.memoizedProps)), t && (t = we)) {
    if (zo(e)) throw pu(), Error(x(418));
    for (; t;) fu(e, t), t = xt(t.nextSibling)
  }
  if (Ss(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = xt(e.nextSibling);
              break e
            }
            t--
          } else n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      we = null
    }
  } else we = je ? xt(e.stateNode.nextSibling) : null;
  return !0
}

function pu() {
  for (var e = we; e;) e = xt(e.nextSibling)
}

function mn() {
  we = je = null, W = !1
}

function hi(e) {
  Fe === null ? Fe = [e] : Fe.push(e)
}
var vf = st.ReactCurrentBatchConfig;

function Pn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var a = l.refs;
        i === null ? delete a[o] : a[o] = i
      }, t._stringRef = o, t)
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e))
  }
  return e
}

function Sr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Cs(e) {
  var t = e._init;
  return t(e._payload)
}

function mu(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c)
    }
  }

  function n(f, c) {
    if (!e) return null;
    for (; c !== null;) t(f, c), c = c.sibling;
    return null
  }

  function r(f, c) {
    for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f
  }

  function l(f, c) {
    return f = Nt(f, c), f.index = 0, f.sibling = null, f
  }

  function o(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
  }

  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f
  }

  function a(f, c, p, v) {
    return c === null || c.tag !== 6 ? (c = Zl(p, f.mode, v), c.return = f, c) : (c = l(c, p), c.return = f, c)
  }

  function u(f, c, p, v) {
    var w = p.type;
    return w === Kt ? m(f, c, p.props.children, v, p.key) : c !== null && (c.elementType === w || typeof w == "object" && w !== null && w.$$typeof === ct && Cs(w) === c.type) ? (v = l(c, p.props), v.ref = Pn(f, c, p), v.return = f, v) : (v = Br(p.type, p.key, p.props, null, f.mode, v), v.ref = Pn(f, c, p), v.return = f, v)
  }

  function d(f, c, p, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Jl(p, f.mode, v), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c)
  }

  function m(f, c, p, v, w) {
    return c === null || c.tag !== 7 ? (c = It(p, f.mode, v, w), c.return = f, c) : (c = l(c, p), c.return = f, c)
  }

  function h(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Zl("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case pr:
          return p = Br(c.type, c.key, c.props, null, f.mode, p), p.ref = Pn(f, null, c), p.return = f, p;
        case qt:
          return c = Jl(c, f.mode, p), c.return = f, c;
        case ct:
          var v = c._init;
          return h(f, v(c._payload), p)
      }
      if (Tn(c) || jn(c)) return c = It(c, f.mode, p, null), c.return = f, c;
      Sr(f, c)
    }
    return null
  }

  function g(f, c, p, v) {
    var w = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return w !== null ? null : a(f, c, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case pr:
          return p.key === w ? u(f, c, p, v) : null;
        case qt:
          return p.key === w ? d(f, c, p, v) : null;
        case ct:
          return w = p._init, g(f, c, w(p._payload), v)
      }
      if (Tn(p) || jn(p)) return w !== null ? null : m(f, c, p, v, null);
      Sr(f, p)
    }
    return null
  }

  function y(f, c, p, v, w) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(p) || null, a(c, f, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case pr:
          return f = f.get(v.key === null ? p : v.key) || null, u(c, f, v, w);
        case qt:
          return f = f.get(v.key === null ? p : v.key) || null, d(c, f, v, w);
        case ct:
          var j = v._init;
          return y(f, c, p, j(v._payload), w)
      }
      if (Tn(v) || jn(v)) return f = f.get(p) || null, m(c, f, v, w, null);
      Sr(c, v)
    }
    return null
  }

  function k(f, c, p, v) {
    for (var w = null, j = null, C = c, P = c = 0, A = null; C !== null && P < p.length; P++) {
      C.index > P ? (A = C, C = null) : A = C.sibling;
      var L = g(f, C, p[P], v);
      if (L === null) {
        C === null && (C = A);
        break
      }
      e && C && L.alternate === null && t(f, C), c = o(L, c, P), j === null ? w = L : j.sibling = L, j = L, C = A
    }
    if (P === p.length) return n(f, C), W && Lt(f, P), w;
    if (C === null) {
      for (; P < p.length; P++) C = h(f, p[P], v), C !== null && (c = o(C, c, P), j === null ? w = C : j.sibling = C, j = C);
      return W && Lt(f, P), w
    }
    for (C = r(f, C); P < p.length; P++) A = y(C, f, P, p[P], v), A !== null && (e && A.alternate !== null && C.delete(A.key === null ? P : A.key), c = o(A, c, P), j === null ? w = A : j.sibling = A, j = A);
    return e && C.forEach(function(T) {
      return t(f, T)
    }), W && Lt(f, P), w
  }

  function N(f, c, p, v) {
    var w = jn(p);
    if (typeof w != "function") throw Error(x(150));
    if (p = w.call(p), p == null) throw Error(x(151));
    for (var j = w = null, C = c, P = c = 0, A = null, L = p.next(); C !== null && !L.done; P++, L = p.next()) {
      C.index > P ? (A = C, C = null) : A = C.sibling;
      var T = g(f, C, L.value, v);
      if (T === null) {
        C === null && (C = A);
        break
      }
      e && C && T.alternate === null && t(f, C), c = o(T, c, P), j === null ? w = T : j.sibling = T, j = T, C = A
    }
    if (L.done) return n(f, C), W && Lt(f, P), w;
    if (C === null) {
      for (; !L.done; P++, L = p.next()) L = h(f, L.value, v), L !== null && (c = o(L, c, P), j === null ? w = L : j.sibling = L, j = L);
      return W && Lt(f, P), w
    }
    for (C = r(f, C); !L.done; P++, L = p.next()) L = y(C, f, P, L.value, v), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? P : L.key), c = o(L, c, P), j === null ? w = L : j.sibling = L, j = L);
    return e && C.forEach(function(V) {
      return t(f, V)
    }), W && Lt(f, P), w
  }

  function O(f, c, p, v) {
    if (typeof p == "object" && p !== null && p.type === Kt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case pr:
          e: {
            for (var w = p.key, j = c; j !== null;) {
              if (j.key === w) {
                if (w = p.type, w === Kt) {
                  if (j.tag === 7) {
                    n(f, j.sibling), c = l(j, p.props.children), c.return = f, f = c;
                    break e
                  }
                } else if (j.elementType === w || typeof w == "object" && w !== null && w.$$typeof === ct && Cs(w) === j.type) {
                  n(f, j.sibling), c = l(j, p.props), c.ref = Pn(f, j, p), c.return = f, f = c;
                  break e
                }
                n(f, j);
                break
              } else t(f, j);
              j = j.sibling
            }
            p.type === Kt ? (c = It(p.props.children, f.mode, v, p.key), c.return = f, f = c) : (v = Br(p.type, p.key, p.props, null, f.mode, v), v.ref = Pn(f, c, p), v.return = f, f = v)
          }
          return i(f);
        case qt:
          e: {
            for (j = p.key; c !== null;) {
              if (c.key === j)
                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                  n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                  break e
                } else {
                  n(f, c);
                  break
                }
              else t(f, c);
              c = c.sibling
            }
            c = Jl(p, f.mode, v),
            c.return = f,
            f = c
          }
          return i(f);
        case ct:
          return j = p._init, O(f, c, j(p._payload), v)
      }
      if (Tn(p)) return k(f, c, p, v);
      if (jn(p)) return N(f, c, p, v);
      Sr(f, p)
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = Zl(p, f.mode, v), c.return = f, f = c), i(f)) : n(f, c)
  }
  return O
}
var hn = mu(!0),
  hu = mu(!1),
  tl = Pt(null),
  nl = null,
  nn = null,
  gi = null;

function yi() {
  gi = nn = nl = null
}

function vi(e) {
  var t = tl.current;
  H(tl), e._currentValue = t
}

function _o(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return
  }
}

function cn(e, t) {
  nl = e, gi = nn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ge = !0), e.firstContext = null)
}

function Te(e) {
  var t = e._currentValue;
  if (gi !== e)
    if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, nn === null) {
      if (nl === null) throw Error(x(308));
      nn = e, nl.dependencies = {
        lanes: 0,
        firstContext: e
      }
    } else nn = nn.next = e;
  return t
}
var Tt = null;

function xi(e) {
  Tt === null ? Tt = [e] : Tt.push(e)
}

function gu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, xi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ot(e, r)
}

function ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var dt = !1;

function ki(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}

function yu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  })
}

function nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ot(e, n)
  }
  return l = r.interleaved, l === null ? (t.next = t, xi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ot(e, n)
}

function Ir(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, oi(e, n)
  }
}

function Es(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null,
      o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        o === null ? l = o = i : o = o.next = i, n = n.next
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t
    } else l = o = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function rl(e, t, n, r) {
  var l = e.updateQueue;
  dt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      d = u.next;
    u.next = null, i === null ? o = d : i.next = d, i = u;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, a = m.lastBaseUpdate, a !== i && (a === null ? m.firstBaseUpdate = d : a.next = d, m.lastBaseUpdate = u))
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, m = d = u = null, a = o;
    do {
      var g = a.lane,
        y = a.eventTime;
      if ((r & g) === g) {
        m !== null && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var k = e,
            N = a;
          switch (g = t, y = n, N.tag) {
            case 1:
              if (k = N.payload, typeof k == "function") {
                h = k.call(y, h, g);
                break e
              }
              h = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = N.payload, g = typeof k == "function" ? k.call(y, h, g) : k, g == null) break e;
              h = K({}, h, g);
              break e;
            case 2:
              dt = !0
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [a] : g.push(a))
      } else y = {
        eventTime: y,
        lane: g,
        tag: a.tag,
        payload: a.payload,
        callback: a.callback,
        next: null
      }, m === null ? (d = m = y, u = h) : m = m.next = y, i |= g;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null) break;
        g = a, a = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null
      }
    } while (!0);
    if (m === null && (u = h), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do i |= l.lane, l = l.next; while (l !== t)
    } else o === null && (l.shared.lanes = 0);
    $t |= i, e.lanes = i, e.memoizedState = h
  }
}

function Ps(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(x(191, l));
        l.call(r)
      }
    }
}
var dr = {},
  Ye = Pt(dr),
  tr = Pt(dr),
  nr = Pt(dr);

function bt(e) {
  if (e === dr) throw Error(x(174));
  return e
}

function wi(e, t) {
  switch ($(nr, t), $(tr, e), $(Ye, dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uo(t, e)
  }
  H(Ye), $(Ye, t)
}

function gn() {
  H(Ye), H(tr), H(nr)
}

function vu(e) {
  bt(nr.current);
  var t = bt(Ye.current),
    n = uo(t, e.type);
  t !== n && ($(tr, e), $(Ye, n))
}

function ji(e) {
  tr.current === e && (H(Ye), H(tr))
}
var Q = Pt(0);

function ll(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var Ql = [];

function Ni() {
  for (var e = 0; e < Ql.length; e++) Ql[e]._workInProgressVersionPrimary = null;
  Ql.length = 0
}
var Dr = st.ReactCurrentDispatcher,
  ql = st.ReactCurrentBatchConfig,
  Ft = 0,
  q = null,
  Z = null,
  ee = null,
  ol = !1,
  An = !1,
  rr = 0,
  xf = 0;

function se() {
  throw Error(x(321))
}

function Si(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0
}

function Ci(e, t, n, r, l, o) {
  if (Ft = o, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Dr.current = e === null || e.memoizedState === null ? Nf : Sf, e = n(r, l), An) {
    o = 0;
    do {
      if (An = !1, rr = 0, 25 <= o) throw Error(x(301));
      o += 1, ee = Z = null, t.updateQueue = null, Dr.current = Cf, e = n(r, l)
    } while (An)
  }
  if (Dr.current = il, t = Z !== null && Z.next !== null, Ft = 0, ee = Z = q = null, ol = !1, t) throw Error(x(300));
  return e
}

function Ei() {
  var e = rr !== 0;
  return rr = 0, e
}

function Qe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return ee === null ? q.memoizedState = ee = e : ee = ee.next = e, ee
}

function be() {
  if (Z === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null
  } else e = Z.next;
  var t = ee === null ? q.memoizedState : ee.next;
  if (t !== null) ee = t, Z = e;
  else {
    if (e === null) throw Error(x(310));
    Z = e, e = {
      memoizedState: Z.memoizedState,
      baseState: Z.baseState,
      baseQueue: Z.baseQueue,
      queue: Z.queue,
      next: null
    }, ee === null ? q.memoizedState = ee = e : ee = ee.next = e
  }
  return ee
}

function lr(e, t) {
  return typeof t == "function" ? t(e) : t
}

function Kl(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i
    }
    r.baseQueue = l = o, n.pending = null
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var a = i = null,
      u = null,
      d = o;
    do {
      var m = d.lane;
      if ((Ft & m) === m) u !== null && (u = u.next = {
        lane: 0,
        action: d.action,
        hasEagerState: d.hasEagerState,
        eagerState: d.eagerState,
        next: null
      }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var h = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (a = u = h, i = r) : u = u.next = h, q.lanes |= m, $t |= m
      }
      d = d.next
    } while (d !== null && d !== o);
    u === null ? i = r : u.next = a, Be(r, t.memoizedState) || (ge = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do o = l.lane, q.lanes |= o, $t |= o, l = l.next; while (l !== e)
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function Yl(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do o = e(o, i.action), i = i.next; while (i !== l);
    Be(o, t.memoizedState) || (ge = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
  }
  return [o, r]
}

function xu() {}

function ku(e, t) {
  var n = q,
    r = be(),
    l = t(),
    o = !Be(r.memoizedState, l);
  if (o && (r.memoizedState = l, ge = !0), r = r.queue, Pi(Nu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ee !== null && ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, or(9, ju.bind(null, n, r, l, t), void 0, null), te === null) throw Error(x(349));
    Ft & 30 || wu(n, t, l)
  }
  return l
}

function wu(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = q.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ju(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Su(t) && Cu(e)
}

function Nu(e, t, n) {
  return n(function() {
    Su(t) && Cu(e)
  })
}

function Su(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n)
  } catch {
    return !0
  }
}

function Cu(e) {
  var t = ot(e, 1);
  t !== null && Ae(t, e, 1, -1)
}

function zs(e) {
  var t = Qe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: lr,
    lastRenderedState: e
  }, t.queue = e, e = e.dispatch = jf.bind(null, q, e), [t.memoizedState, e]
}

function or(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = q.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Eu() {
  return be().memoizedState
}

function Or(e, t, n, r) {
  var l = Qe();
  q.flags |= e, l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r)
}

function xl(e, t, n, r) {
  var l = be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (o = i.destroy, r !== null && Si(r, i.deps)) {
      l.memoizedState = or(t, n, o, r);
      return
    }
  }
  q.flags |= e, l.memoizedState = or(1 | t, n, o, r)
}

function Ls(e, t) {
  return Or(8390656, 8, e, t)
}

function Pi(e, t) {
  return xl(2048, 8, e, t)
}

function Pu(e, t) {
  return xl(4, 2, e, t)
}

function zu(e, t) {
  return xl(4, 4, e, t)
}

function Lu(e, t) {
  if (typeof t == "function") return e = e(), t(e),
    function() {
      t(null)
    };
  if (t != null) return e = e(), t.current = e,
    function() {
      t.current = null
    }
}

function _u(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xl(4, 4, Lu.bind(null, t, e), n)
}

function zi() {}

function Mu(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Tu(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Si(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function bu(e, t, n) {
  return Ft & 21 ? (Be(n, t) || (n = Fa(), q.lanes |= n, $t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ge = !0), e.memoizedState = n)
}

function kf(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t()
  } finally {
    I = n, ql.transition = r
  }
}

function Ru() {
  return be().memoizedState
}

function wf(e, t, n) {
  var r = jt(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Iu(e)) Du(t, n);
  else if (n = gu(e, t, n, r), n !== null) {
    var l = fe();
    Ae(n, e, r, l), Ou(n, t, r)
  }
}

function jf(e, t, n) {
  var r = jt(e),
    l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Iu(e)) Du(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState,
        a = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = a, Be(a, i)) {
        var u = t.interleaved;
        u === null ? (l.next = l, xi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return
      }
    } catch {} finally {}
    n = gu(e, t, l, r), n !== null && (l = fe(), Ae(n, e, r, l), Ou(n, t, r))
  }
}

function Iu(e) {
  var t = e.alternate;
  return e === q || t !== null && t === q
}

function Du(e, t) {
  An = ol = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ou(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, oi(e, n)
  }
}
var il = {
    readContext: Te,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1
  },
  Nf = {
    readContext: Te,
    useCallback: function(e, t) {
      return Qe().memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: Te,
    useEffect: Ls,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null, Or(4194308, 4, Lu.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
      return Or(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
      return Or(4, 2, e, t)
    },
    useMemo: function(e, t) {
      var n = Qe();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer: function(e, t, n) {
      var r = Qe();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = wf.bind(null, q, e), [r.memoizedState, e]
    },
    useRef: function(e) {
      var t = Qe();
      return e = {
        current: e
      }, t.memoizedState = e
    },
    useState: zs,
    useDebugValue: zi,
    useDeferredValue: function(e) {
      return Qe().memoizedState = e
    },
    useTransition: function() {
      var e = zs(!1),
        t = e[0];
      return e = kf.bind(null, e[1]), Qe().memoizedState = e, [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
      var r = q,
        l = Qe();
      if (W) {
        if (n === void 0) throw Error(x(407));
        n = n()
      } else {
        if (n = t(), te === null) throw Error(x(349));
        Ft & 30 || wu(r, t, n)
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return l.queue = o, Ls(Nu.bind(null, r, o, e), [e]), r.flags |= 2048, or(9, ju.bind(null, r, o, n, t), void 0, null), n
    },
    useId: function() {
      var e = Qe(),
        t = te.identifierPrefix;
      if (W) {
        var n = tt,
          r = et;
        n = (r & ~(1 << 32 - $e(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = rr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
      } else n = xf++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  },
  Sf = {
    readContext: Te,
    useCallback: Mu,
    useContext: Te,
    useEffect: Pi,
    useImperativeHandle: _u,
    useInsertionEffect: Pu,
    useLayoutEffect: zu,
    useMemo: Tu,
    useReducer: Kl,
    useRef: Eu,
    useState: function() {
      return Kl(lr)
    },
    useDebugValue: zi,
    useDeferredValue: function(e) {
      var t = be();
      return bu(t, Z.memoizedState, e)
    },
    useTransition: function() {
      var e = Kl(lr)[0],
        t = be().memoizedState;
      return [e, t]
    },
    useMutableSource: xu,
    useSyncExternalStore: ku,
    useId: Ru,
    unstable_isNewReconciler: !1
  },
  Cf = {
    readContext: Te,
    useCallback: Mu,
    useContext: Te,
    useEffect: Pi,
    useImperativeHandle: _u,
    useInsertionEffect: Pu,
    useLayoutEffect: zu,
    useMemo: Tu,
    useReducer: Yl,
    useRef: Eu,
    useState: function() {
      return Yl(lr)
    },
    useDebugValue: zi,
    useDeferredValue: function(e) {
      var t = be();
      return Z === null ? t.memoizedState = e : bu(t, Z.memoizedState, e)
    },
    useTransition: function() {
      var e = Yl(lr)[0],
        t = be().memoizedState;
      return [e, t]
    },
    useMutableSource: xu,
    useSyncExternalStore: ku,
    useId: Ru,
    unstable_isNewReconciler: !1
  };

function De(e, t) {
  if (e && e.defaultProps) {
    t = K({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}

function Mo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var kl = {
  isMounted: function(e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = jt(e),
      o = nt(r, l);
    o.payload = t, n != null && (o.callback = n), t = kt(e, o, l), t !== null && (Ae(t, e, l, r), Ir(t, e, l))
  },
  enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = jt(e),
      o = nt(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = kt(e, o, l), t !== null && (Ae(t, e, l, r), Ir(t, e, l))
  },
  enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = jt(e),
      l = nt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = kt(e, l, r), t !== null && (Ae(t, e, r, n), Ir(t, e, r))
  }
};

function _s(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Gn(n, r) || !Gn(l, o) : !0
}

function Fu(e, t, n) {
  var r = !1,
    l = Ct,
    o = t.contextType;
  return typeof o == "object" && o !== null ? o = Te(o) : (l = ve(t) ? Dt : ce.current, r = t.contextTypes, o = (r = r != null) ? pn(e, l) : Ct), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Ms(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && kl.enqueueReplaceState(t, t.state, null)
}

function To(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ki(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Te(o) : (o = ve(t) ? Dt : ce.current, l.context = pn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Mo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && kl.enqueueReplaceState(l, l.state, null), rl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function yn(e, t) {
  try {
    var n = "",
      r = t;
    do n += Zc(r), r = r.return; while (r);
    var l = n
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack
  }
  return {
    value: e,
    source: t,
    stack: l,
    digest: null
  }
}

function Xl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  }
}

function bo(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function() {
      throw n
    })
  }
}
var Ef = typeof WeakMap == "function" ? WeakMap : Map;

function $u(e, t, n) {
  n = nt(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function() {
    al || (al = !0, Ho = r), bo(e, t)
  }, n
}

function Au(e, t, n) {
  n = nt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l)
    }, n.callback = function() {
      bo(e, t)
    }
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    bo(e, t), typeof r != "function" && (wt === null ? wt = new Set([this]) : wt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: i !== null ? i : ""
    })
  }), n
}

function Ts(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ef;
    var l = new Set;
    r.set(t, l)
  } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
  l.has(n) || (l.add(n), e = Af.bind(null, e, t, n), t.then(e, e))
}

function bs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return
  } while (e !== null);
  return null
}

function Rs(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = nt(-1, 1), t.tag = 2, kt(n, t, 1))), n.lanes |= 1), e)
}
var Pf = st.ReactCurrentOwner,
  ge = !1;

function de(e, t, n, r) {
  t.child = e === null ? hu(t, null, n, r) : hn(t, e.child, n, r)
}

function Is(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return cn(t, l), r = Ci(e, t, n, r, o, l), n = Ei(), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, it(e, t, l)) : (W && n && pi(t), t.flags |= 1, de(e, t, r, l), t.child)
}

function Ds(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Di(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Bu(e, t, o, r, l)) : (e = Br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Gn, n(i, r) && e.ref === t.ref) return it(e, t, l)
  }
  return t.flags |= 1, e = Nt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Bu(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Gn(o, r) && e.ref === t.ref)
      if (ge = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ge = !0);
      else return t.lanes = e.lanes, it(e, t, l)
  }
  return Ro(e, t, n, r, l)
}

function Uu(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, $(ln, ke), ke |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, $(ln, ke), ke |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, $(ln, ke), ke |= r
    }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(ln, ke), ke |= r;
  return de(e, t, l, n), t.child
}

function Hu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ro(e, t, n, r, l) {
  var o = ve(n) ? Dt : ce.current;
  return o = pn(t, o), cn(t, l), n = Ci(e, t, n, r, o, l), r = Ei(), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, it(e, t, l)) : (W && r && pi(t), t.flags |= 1, de(e, t, n, l), t.child)
}

function Os(e, t, n, r, l) {
  if (ve(n)) {
    var o = !0;
    Zr(t)
  } else o = !1;
  if (cn(t, l), t.stateNode === null) Fr(e, t), Fu(t, n, r), To(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      d = n.contextType;
    typeof d == "object" && d !== null ? d = Te(d) : (d = ve(n) ? Dt : ce.current, d = pn(t, d));
    var m = n.getDerivedStateFromProps,
      h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== d) && Ms(t, i, r, d), dt = !1;
    var g = t.memoizedState;
    i.state = g, rl(t, r, i, l), u = t.memoizedState, a !== r || g !== u || ye.current || dt ? (typeof m == "function" && (Mo(t, n, m, r), u = t.memoizedState), (a = dt || _s(t, n, a, r, g, u, d)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = d, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
  } else {
    i = t.stateNode, yu(e, t), a = t.memoizedProps, d = t.type === t.elementType ? a : De(t.type, a), i.props = d, h = t.pendingProps, g = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Te(u) : (u = ve(n) ? Dt : ce.current, u = pn(t, u));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== h || g !== u) && Ms(t, i, r, u), dt = !1, g = t.memoizedState, i.state = g, rl(t, r, i, l);
    var k = t.memoizedState;
    a !== h || g !== k || ye.current || dt ? (typeof y == "function" && (Mo(t, n, y, r), k = t.memoizedState), (d = dt || _s(t, n, d, r, g, k, u) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = u, r = d) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return Io(e, t, n, r, o, l)
}

function Io(e, t, n, r, l, o) {
  Hu(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && js(t, n, !1), it(e, t, o);
  r = t.stateNode, Pf.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = hn(t, e.child, null, o), t.child = hn(t, null, a, o)) : de(e, t, a, o), t.memoizedState = r.state, l && js(t, n, !0), t.child
}

function Vu(e) {
  var t = e.stateNode;
  t.pendingContext ? ws(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ws(e, t.context, !1), wi(e, t.containerInfo)
}

function Fs(e, t, n, r, l) {
  return mn(), hi(l), t.flags |= 256, de(e, t, n, r), t.child
}
var Do = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function Oo(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}

function Wu(e, t, n) {
  var r = t.pendingProps,
    l = Q.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(Q, l & 1), e === null) return Lo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
    mode: "hidden",
    children: i
  }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Nl(i, r, 0, null), e = It(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Oo(n), t.memoizedState = Do, e) : Li(t, i));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return zf(e, t, i, r, a, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
    var u = {
      mode: "hidden",
      children: r.children
    };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Nt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = Nt(a, o) : (o = It(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Oo(n) : {
      baseLanes: i.baseLanes | n,
      cachePool: null,
      transitions: i.transitions
    }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Do, r
  }
  return o = e.child, e = o.sibling, r = Nt(o, {
    mode: "visible",
    children: r.children
  }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Li(e, t) {
  return t = Nl({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function Cr(e, t, n, r) {
  return r !== null && hi(r), hn(t, e.child, null, n), e = Li(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function zf(e, t, n, r, l, o, i) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Xl(Error(x(422))), Cr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Nl({
    mode: "visible",
    children: r.children
  }, l, 0, null), o = It(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && hn(t, e.child, null, i), t.child.memoizedState = Oo(i), t.memoizedState = Do, o);
  if (!(t.mode & 1)) return Cr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(x(419)), r = Xl(o, r, void 0), Cr(e, t, i, r)
  }
  if (a = (i & e.childLanes) !== 0, ge || a) {
    if (r = te, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, ot(e, l), Ae(r, e, l, -1))
    }
    return Ii(), r = Xl(Error(x(421))), Cr(e, t, i, r)
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, we = xt(l.nextSibling), je = t, W = !0, Fe = null, e !== null && (ze[Le++] = et, ze[Le++] = tt, ze[Le++] = Ot, et = e.id, tt = e.overflow, Ot = t), t = Li(t, r.children), t.flags |= 4096, t)
}

function $s(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _o(e.return, t, n)
}

function Gl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: l
  } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function Qu(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if (de(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && $s(e, n, t);
      else if (e.tag === 19) $s(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    r &= 1
  }
  if ($(Q, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && ll(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Gl(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null;) {
        if (e = l.alternate, e !== null && ll(e) === null) {
          t.child = l;
          break
        }
        e = l.sibling, l.sibling = n, n = l, l = e
      }
      Gl(t, !0, n, null, o);
      break;
    case "together":
      Gl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null
  }
  return t.child
}

function Fr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function it(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), $t |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Nt(e, e.pendingProps), n.return = t;
    n.sibling = null
  }
  return t.child
}

function Lf(e, t, n) {
  switch (t.tag) {
    case 3:
      Vu(t), mn();
      break;
    case 5:
      vu(t);
      break;
    case 1:
      ve(t.type) && Zr(t);
      break;
    case 4:
      wi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      $(tl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? ($(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wu(e, t, n) : ($(Q, Q.current & 1), e = it(e, t, n), e !== null ? e.sibling : null);
      $(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Qu(e, t, n);
        t.flags |= 128
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(Q, Q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Uu(e, t, n)
  }
  return it(e, t, n)
}
var qu, Fo, Ku, Yu;
qu = function(e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
Fo = function() {};
Ku = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, bt(Ye.current);
    var o = null;
    switch (n) {
      case "input":
        l = oo(e, l), r = oo(e, r), o = [];
        break;
      case "select":
        l = K({}, l, {
          value: void 0
        }), r = K({}, r, {
          value: void 0
        }), o = [];
        break;
      case "textarea":
        l = ao(e, l), r = ao(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xr)
    }
    co(n, r);
    var i;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var a = l[d];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
        } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Vn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (a = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== a && (u != null || a != null))
        if (d === "style")
          if (a) {
            for (i in a) !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i])
          } else n || (o || (o = []), o.push(d, n)), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Vn.hasOwnProperty(d) ? (u != null && d === "onScroll" && U("scroll", e), o || a === u || (o = [])) : (o = o || []).push(d, u))
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4)
  }
};
Yu = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function zn(e, t) {
  if (!W) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
  }
}

function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function _f(e, t, n) {
  var r = t.pendingProps;
  switch (mi(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ae(t), null;
    case 1:
      return ve(t.type) && Gr(), ae(t), null;
    case 3:
      return r = t.stateNode, gn(), H(ye), H(ce), Ni(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fe !== null && (Qo(Fe), Fe = null))), Fo(e, t), ae(t), null;
    case 5:
      ji(t);
      var l = bt(nr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ku(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ae(t), null
        }
        if (e = bt(Ye.current), Nr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[qe] = t, r[er] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Rn.length; l++) U(Rn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Ki(r, o), U("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!o.multiple
              }, U("invalid", r);
              break;
            case "textarea":
              Xi(r, o), U("invalid", r)
          }
          co(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && jr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && jr(r.textContent, a, e), l = ["children", "" + a]) : Vn.hasOwnProperty(i) && a != null && i === "onScroll" && U("scroll", r)
            } switch (n) {
            case "input":
              mr(r), Yi(r, o, !0);
              break;
            case "textarea":
              mr(r), Gi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xr)
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Na(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
            is: r.is
          }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[qe] = t, e[er] = r, qu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = fo(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Rn.length; l++) U(Rn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                Ki(e, r), l = oo(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, l = K({}, r, {
                  value: void 0
                }), U("invalid", e);
                break;
              case "textarea":
                Xi(e, r), l = ao(e, r), U("invalid", e);
                break;
              default:
                l = r
            }
            co(n, l),
            a = l;
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style" ? Ea(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Sa(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Wn(e, u) : typeof u == "number" && Wn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vn.hasOwnProperty(o) ? u != null && o === "onScroll" && U("scroll", e) : u != null && Jo(e, o, u, i))
              } switch (n) {
              case "input":
                mr(e), Yi(e, r, !1);
                break;
              case "textarea":
                mr(e), Gi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? on(e, !!r.multiple, o, !1) : r.defaultValue != null && on(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Xr)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) Yu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (n = bt(nr.current), bt(Ye.current), Nr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[qe] = t, (o = r.nodeValue !== n) && (e = je, e !== null)) switch (e.tag) {
            case 3:
              jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0)
          }
          o && (t.flags |= 4)
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qe] = t, t.stateNode = r
      }
      return ae(t), null;
    case 13:
      if (H(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && we !== null && t.mode & 1 && !(t.flags & 128)) pu(), mn(), t.flags |= 98560, o = !1;
        else if (o = Nr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[qe] = t
          } else mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ae(t), o = !1
        } else Fe !== null && (Qo(Fe), Fe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? J === 0 && (J = 3) : Ii())), t.updateQueue !== null && (t.flags |= 4), ae(t), null);
    case 4:
      return gn(), Fo(e, t), e === null && Zn(t.stateNode.containerInfo), ae(t), null;
    case 10:
      return vi(t.type._context), ae(t), null;
    case 17:
      return ve(t.type) && Gr(), ae(t), null;
    case 19:
      if (H(Q), o = t.memoizedState, o === null) return ae(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r) zn(o, !1);
        else {
          if (J !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (i = ll(e), i !== null) {
                for (t.flags |= 128, zn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), n = n.sibling;
                return $(Q, Q.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null && X() > vn && (t.flags |= 128, r = !0, zn(o, !1), t.lanes = 4194304)
        }
      else {
        if (!r)
          if (e = ll(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), zn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return ae(t), null
          } else 2 * X() - o.renderingStartTime > vn && n !== 1073741824 && (t.flags |= 128, r = !0, zn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = X(), t.sibling = null, n = Q.current, $(Q, r ? n & 1 | 2 : n & 1), t) : (ae(t), null);
    case 22:
    case 23:
      return Ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t), null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(x(156, t.tag))
}

function Mf(e, t) {
  switch (mi(t), t.tag) {
    case 1:
      return ve(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gn(), H(ye), H(ce), Ni(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ji(t), null;
    case 13:
      if (H(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(x(340));
        mn()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Q), null;
    case 4:
      return gn(), null;
    case 10:
      return vi(t.type._context), null;
    case 22:
    case 23:
      return Ri(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var Er = !1,
  ue = !1,
  Tf = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;

function rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function") try {
      n(null)
    } catch (r) {
      Y(e, t, r)
    } else n.current = null
}

function $o(e, t, n) {
  try {
    n()
  } catch (r) {
    Y(e, t, r)
  }
}
var As = !1;

function bf(e, t) {
  if (jo = qr, e = eu(), fi(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset,
          o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType
        } catch {
          n = null;
          break e
        }
        var i = 0,
          a = -1,
          u = -1,
          d = 0,
          m = 0,
          h = e,
          g = null;
        t: for (;;) {
          for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (a = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (u = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (y = h.firstChild) !== null;) g = h, h = y;
          for (;;) {
            if (h === e) break t;
            if (g === n && ++d === l && (a = i), g === o && ++m === r && (u = i), (y = h.nextSibling) !== null) break;
            h = g, g = h.parentNode
          }
          h = y
        }
        n = a === -1 || u === -1 ? null : {
          start: a,
          end: u
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (No = {
      focusedElem: e,
      selectionRange: n
    }, qr = !1, E = t; E !== null;)
    if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
    else
      for (; E !== null;) {
        t = E;
        try {
          var k = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (k !== null) {
                var N = k.memoizedProps,
                  O = k.memoizedState,
                  f = t.stateNode,
                  c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? N : De(t.type, N), O);
                f.__reactInternalSnapshotBeforeUpdate = c
              }
              break;
            case 3:
              var p = t.stateNode.containerInfo;
              p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(x(163))
          }
        } catch (v) {
          Y(t, t.return, v)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, E = e;
          break
        }
        E = t.return
      }
  return k = As, As = !1, k
}

function Bn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && $o(t, n, o)
      }
      l = l.next
    } while (l !== r)
  }
}

function wl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}

function Ao(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}

function Xu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Xu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qe], delete t[er], delete t[Eo], delete t[hf], delete t[gf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Gu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Bs(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Gu(e.return)) return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}

function Bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xr));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Bo(e, t, n), e = e.sibling; e !== null;) Bo(e, t, n), e = e.sibling
}

function Uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Uo(e, t, n), e = e.sibling; e !== null;) Uo(e, t, n), e = e.sibling
}
var re = null,
  Oe = !1;

function ut(e, t, n) {
  for (n = n.child; n !== null;) Zu(e, t, n), n = n.sibling
}

function Zu(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function") try {
    Ke.onCommitFiberUnmount(pl, n)
  } catch {}
  switch (n.tag) {
    case 5:
      ue || rn(n, t);
    case 6:
      var r = re,
        l = Oe;
      re = null, ut(e, t, n), re = r, Oe = l, re !== null && (Oe ? (e = re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null && (Oe ? (e = re, n = n.stateNode, e.nodeType === 8 ? Vl(e.parentNode, n) : e.nodeType === 1 && Vl(e, n), Yn(e)) : Vl(re, n.stateNode));
      break;
    case 4:
      r = re, l = Oe, re = n.stateNode.containerInfo, Oe = !0, ut(e, t, n), re = r, Oe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && $o(n, t, i), l = l.next
        } while (l !== r)
      }
      ut(e, t, n);
      break;
    case 1:
      if (!ue && (rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
      } catch (a) {
        Y(n, t, a)
      }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, ut(e, t, n), ue = r) : ut(e, t, n);
      break;
    default:
      ut(e, t, n)
  }
}

function Us(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tf), t.forEach(function(r) {
      var l = Uf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l))
    })
  }
}

function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              re = a.stateNode, Oe = !1;
              break e;
            case 3:
              re = a.stateNode.containerInfo, Oe = !0;
              break e;
            case 4:
              re = a.stateNode.containerInfo, Oe = !0;
              break e
          }
          a = a.return
        }
        if (re === null) throw Error(x(160));
        Zu(o, i, l), re = null, Oe = !1;
        var u = l.alternate;
        u !== null && (u.return = null), l.return = null
      } catch (d) {
        Y(l, t, d)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) Ju(t, e), t = t.sibling
}

function Ju(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ie(t, e), We(e), r & 4) {
        try {
          Bn(3, e, e.return), wl(3, e)
        } catch (N) {
          Y(e, e.return, N)
        }
        try {
          Bn(5, e, e.return)
        } catch (N) {
          Y(e, e.return, N)
        }
      }
      break;
    case 1:
      Ie(t, e), We(e), r & 512 && n !== null && rn(n, n.return);
      break;
    case 5:
      if (Ie(t, e), We(e), r & 512 && n !== null && rn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Wn(l, "")
        } catch (N) {
          Y(e, e.return, N)
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && o.type === "radio" && o.name != null && wa(l, o), fo(a, i);
          var d = fo(a, o);
          for (i = 0; i < u.length; i += 2) {
            var m = u[i],
              h = u[i + 1];
            m === "style" ? Ea(l, h) : m === "dangerouslySetInnerHTML" ? Sa(l, h) : m === "children" ? Wn(l, h) : Jo(l, m, h, d)
          }
          switch (a) {
            case "input":
              io(l, o);
              break;
            case "textarea":
              ja(l, o);
              break;
            case "select":
              var g = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var y = o.value;
              y != null ? on(l, !!o.multiple, y, !1) : g !== !!o.multiple && (o.defaultValue != null ? on(l, !!o.multiple, o.defaultValue, !0) : on(l, !!o.multiple, o.multiple ? [] : "", !1))
          }
          l[er] = o
        } catch (N) {
          Y(e, e.return, N)
        }
      }
      break;
    case 6:
      if (Ie(t, e), We(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o
        } catch (N) {
          Y(e, e.return, N)
        }
      }
      break;
    case 3:
      if (Ie(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Yn(t.containerInfo)
      } catch (N) {
        Y(e, e.return, N)
      }
      break;
    case 4:
      Ie(t, e), We(e);
      break;
    case 13:
      Ie(t, e), We(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ti = X())), r & 4 && Us(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (d = ue) || m, Ie(t, e), ue = d) : Ie(t, e), We(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1)
          for (E = e, m = e.child; m !== null;) {
            for (h = E = m; E !== null;) {
              switch (g = E, y = g.child, g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bn(4, g, g.return);
                  break;
                case 1:
                  rn(g, g.return);
                  var k = g.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    r = g, n = g.return;
                    try {
                      t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount()
                    } catch (N) {
                      Y(r, n, N)
                    }
                  }
                  break;
                case 5:
                  rn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Vs(h);
                    continue
                  }
              }
              y !== null ? (y.return = g, E = y) : Vs(h)
            }
            m = m.sibling
          }
        e: for (m = null, h = e;;) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, u = h.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Ca("display", i))
              } catch (N) {
                Y(e, e.return, N)
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = d ? "" : h.memoizedProps
            } catch (N) {
              Y(e, e.return, N)
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue
          }
          if (h === e) break e;
          for (; h.sibling === null;) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), h = h.return
          }
          m === h && (m = null), h.sibling.return = h.return, h = h.sibling
        }
      }
      break;
    case 19:
      Ie(t, e), We(e), r & 4 && Us(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), We(e)
  }
}

function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (Gu(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(x(160))
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wn(l, ""), r.flags &= -33);
          var o = Bs(e);
          Uo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Bs(e);
          Bo(e, a, i);
          break;
        default:
          throw Error(x(161))
      }
    }
    catch (u) {
      Y(e, e.return, u)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function Rf(e, t, n) {
  E = e, ec(e)
}

function ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null;) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Er;
      if (!i) {
        var a = l.alternate,
          u = a !== null && a.memoizedState !== null || ue;
        a = Er;
        var d = ue;
        if (Er = i, (ue = u) && !d)
          for (E = l; E !== null;) i = E, u = i.child, i.tag === 22 && i.memoizedState !== null ? Ws(l) : u !== null ? (u.return = i, E = u) : Ws(l);
        for (; o !== null;) E = o, ec(o), o = o.sibling;
        E = l, Er = a, ue = d
      }
      Hs(e)
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Hs(e)
  }
}

function Hs(e) {
  for (; E !== null;) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ue || wl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue)
              if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : De(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
              } var o = t.updateQueue;
            o !== null && Ps(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode
              }
              Ps(t, i, n)
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src)
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var d = t.alternate;
              if (d !== null) {
                var m = d.memoizedState;
                if (m !== null) {
                  var h = m.dehydrated;
                  h !== null && Yn(h)
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(x(163))
        }
        ue || t.flags & 512 && Ao(t)
      } catch (g) {
        Y(t, t.return, g)
      }
    }
    if (t === e) {
      E = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, E = n;
      break
    }
    E = t.return
  }
}

function Vs(e) {
  for (; E !== null;) {
    var t = E;
    if (t === e) {
      E = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, E = n;
      break
    }
    E = t.return
  }
}

function Ws(e) {
  for (; E !== null;) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wl(4, t)
          } catch (u) {
            Y(t, n, u)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount()
            } catch (u) {
              Y(t, l, u)
            }
          }
          var o = t.return;
          try {
            Ao(t)
          } catch (u) {
            Y(t, o, u)
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ao(t)
          } catch (u) {
            Y(t, i, u)
          }
      }
    } catch (u) {
      Y(t, t.return, u)
    }
    if (t === e) {
      E = null;
      break
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, E = a;
      break
    }
    E = t.return
  }
}
var If = Math.ceil,
  sl = st.ReactCurrentDispatcher,
  _i = st.ReactCurrentOwner,
  Me = st.ReactCurrentBatchConfig,
  R = 0,
  te = null,
  G = null,
  le = 0,
  ke = 0,
  ln = Pt(0),
  J = 0,
  ir = null,
  $t = 0,
  jl = 0,
  Mi = 0,
  Un = null,
  he = null,
  Ti = 0,
  vn = 1 / 0,
  Ze = null,
  al = !1,
  Ho = null,
  wt = null,
  Pr = !1,
  ht = null,
  ul = 0,
  Hn = 0,
  Vo = null,
  $r = -1,
  Ar = 0;

function fe() {
  return R & 6 ? X() : $r !== -1 ? $r : $r = X()
}

function jt(e) {
  return e.mode & 1 ? R & 2 && le !== 0 ? le & -le : vf.transition !== null ? (Ar === 0 && (Ar = Fa()), Ar) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wa(e.type)), e) : 1
}

function Ae(e, t, n, r) {
  if (50 < Hn) throw Hn = 0, Vo = null, Error(x(185));
  ar(e, n, r), (!(R & 2) || e !== te) && (e === te && (!(R & 2) && (jl |= n), J === 4 && pt(e, le)), xe(e, r), n === 1 && R === 0 && !(t.mode & 1) && (vn = X() + 500, vl && zt()))
}

function xe(e, t) {
  var n = e.callbackNode;
  yd(e, t);
  var r = Qr(e, e === te ? le : 0);
  if (r === 0) n !== null && es(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && es(n), t === 1) e.tag === 0 ? yf(Qs.bind(null, e)) : cu(Qs.bind(null, e)), pf(function() {
      !(R & 6) && zt()
    }), n = null;
    else {
      switch ($a(r)) {
        case 1:
          n = li;
          break;
        case 4:
          n = Da;
          break;
        case 16:
          n = Wr;
          break;
        case 536870912:
          n = Oa;
          break;
        default:
          n = Wr
      }
      n = ac(n, tc.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}

function tc(e, t) {
  if ($r = -1, Ar = 0, R & 6) throw Error(x(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = Qr(e, e === te ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = rc();
    (te !== e || le !== t) && (Ze = null, vn = X() + 500, Rt(e, t));
    do try {
      Ff();
      break
    } catch (a) {
      nc(e, a)
    }
    while (!0);
    yi(), sl.current = o, R = l, G !== null ? t = 0 : (te = null, le = 0, t = J)
  }
  if (t !== 0) {
    if (t === 2 && (l = yo(e), l !== 0 && (r = l, t = Wo(e, l))), t === 1) throw n = ir, Rt(e, 0), pt(e, r), xe(e, X()), n;
    if (t === 6) pt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Df(l) && (t = cl(e, r), t === 2 && (o = yo(e), o !== 0 && (r = o, t = Wo(e, o))), t === 1)) throw n = ir, Rt(e, 0), pt(e, r), xe(e, X()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          _t(e, he, Ze);
          break;
        case 3:
          if (pt(e, r), (r & 130023424) === r && (t = Ti + 500 - X(), 10 < t)) {
            if (Qr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              fe(), e.pingedLanes |= e.suspendedLanes & l;
              break
            }
            e.timeoutHandle = Co(_t.bind(null, e, he, Ze), t);
            break
          }
          _t(e, he, Ze);
          break;
        case 4:
          if (pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r;) {
            var i = 31 - $e(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
          }
          if (r = l, r = X() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * If(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Co(_t.bind(null, e, he, Ze), r);
            break
          }
          _t(e, he, Ze);
          break;
        case 5:
          _t(e, he, Ze);
          break;
        default:
          throw Error(x(329))
      }
    }
  }
  return xe(e, X()), e.callbackNode === n ? tc.bind(null, e) : null
}

function Wo(e, t) {
  var n = Un;
  return e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256), e = cl(e, t), e !== 2 && (t = he, he = n, t !== null && Qo(t)), e
}

function Qo(e) {
  he === null ? he = e : he.push.apply(he, e)
}

function Df(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Be(o(), l)) return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}

function pt(e, t) {
  for (t &= ~Mi, t &= ~jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - $e(t),
      r = 1 << n;
    e[n] = -1, t &= ~r
  }
}

function Qs(e) {
  if (R & 6) throw Error(x(327));
  dn();
  var t = Qr(e, 0);
  if (!(t & 1)) return xe(e, X()), null;
  var n = cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yo(e);
    r !== 0 && (t = r, n = Wo(e, r))
  }
  if (n === 1) throw n = ir, Rt(e, 0), pt(e, t), xe(e, X()), n;
  if (n === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, _t(e, he, Ze), xe(e, X()), null
}

function bi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t)
  } finally {
    R = n, R === 0 && (vn = X() + 500, vl && zt())
  }
}

function At(e) {
  ht !== null && ht.tag === 0 && !(R & 6) && dn();
  var t = R;
  R |= 1;
  var n = Me.transition,
    r = I;
  try {
    if (Me.transition = null, I = 1, e) return e()
  } finally {
    I = r, Me.transition = n, R = t, !(R & 6) && zt()
  }
}

function Ri() {
  ke = ln.current, H(ln)
}

function Rt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ff(n)), G !== null)
    for (n = G.return; n !== null;) {
      var r = n;
      switch (mi(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Gr();
          break;
        case 3:
          gn(), H(ye), H(ce), Ni();
          break;
        case 5:
          ji(r);
          break;
        case 4:
          gn();
          break;
        case 13:
          H(Q);
          break;
        case 19:
          H(Q);
          break;
        case 10:
          vi(r.type._context);
          break;
        case 22:
        case 23:
          Ri()
      }
      n = n.return
    }
  if (te = e, G = e = Nt(e.current, null), le = ke = t, J = 0, ir = null, Mi = jl = $t = 0, he = Un = null, Tt !== null) {
    for (t = 0; t < Tt.length; t++)
      if (n = Tt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i
        }
        n.pending = r
      } Tt = null
  }
  return e
}

function nc(e, t) {
  do {
    var n = G;
    try {
      if (yi(), Dr.current = il, ol) {
        for (var r = q.memoizedState; r !== null;) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next
        }
        ol = !1
      }
      if (Ft = 0, ee = Z = q = null, An = !1, rr = 0, _i.current = null, n === null || n.return === null) {
        J = 1, ir = t, G = null;
        break
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (t = le, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u,
            m = a,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var g = m.alternate;
            g ? (m.updateQueue = g.updateQueue, m.memoizedState = g.memoizedState, m.lanes = g.lanes) : (m.updateQueue = null, m.memoizedState = null)
          }
          var y = bs(i);
          if (y !== null) {
            y.flags &= -257, Rs(y, i, a, o, t), y.mode & 1 && Ts(o, d, t), t = y, u = d;
            var k = t.updateQueue;
            if (k === null) {
              var N = new Set;
              N.add(u), t.updateQueue = N
            } else k.add(u);
            break e
          } else {
            if (!(t & 1)) {
              Ts(o, d, t), Ii();
              break e
            }
            u = Error(x(426))
          }
        } else if (W && a.mode & 1) {
          var O = bs(i);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Rs(O, i, a, o, t), hi(yn(u, a));
            break e
          }
        }
        o = u = yn(u, a),
        J !== 4 && (J = 2),
        Un === null ? Un = [o] : Un.push(o),
        o = i;do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = $u(o, u, t);
              Es(o, f);
              break e;
            case 1:
              a = u;
              var c = o.type,
                p = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (wt === null || !wt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Au(o, a, t);
                Es(o, v);
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      oc(n)
    } catch (w) {
      t = w, G === n && n !== null && (G = n = n.return);
      continue
    }
    break
  } while (!0)
}

function rc() {
  var e = sl.current;
  return sl.current = il, e === null ? il : e
}

function Ii() {
  (J === 0 || J === 3 || J === 2) && (J = 4), te === null || !($t & 268435455) && !(jl & 268435455) || pt(te, le)
}

function cl(e, t) {
  var n = R;
  R |= 2;
  var r = rc();
  (te !== e || le !== t) && (Ze = null, Rt(e, t));
  do try {
    Of();
    break
  } catch (l) {
    nc(e, l)
  }
  while (!0);
  if (yi(), R = n, sl.current = r, G !== null) throw Error(x(261));
  return te = null, le = 0, J
}

function Of() {
  for (; G !== null;) lc(G)
}

function Ff() {
  for (; G !== null && !ad();) lc(G)
}

function lc(e) {
  var t = sc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? oc(e) : G = t, _i.current = null
}

function oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Mf(n, t), n !== null) {
        n.flags &= 32767, G = n;
        return
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        J = 6, G = null;
        return
      }
    } else if (n = _f(n, t, ke), n !== null) {
      G = n;
      return
    }
    if (t = t.sibling, t !== null) {
      G = t;
      return
    }
    G = t = e
  } while (t !== null);
  J === 0 && (J = 5)
}

function _t(e, t, n) {
  var r = I,
    l = Me.transition;
  try {
    Me.transition = null, I = 1, $f(e, t, n, r)
  } finally {
    Me.transition = l, I = r
  }
  return null
}

function $f(e, t, n, r) {
  do dn(); while (ht !== null);
  if (R & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (vd(e, o), e === te && (G = te = null, le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = !0, ac(Wr, function() {
      return dn(), null
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Me.transition, Me.transition = null;
    var i = I;
    I = 1;
    var a = R;
    R |= 4, _i.current = null, bf(e, n), Ju(n, e), lf(No), qr = !!jo, No = jo = null, e.current = n, Rf(n), ud(), R = a, I = i, Me.transition = o
  } else e.current = n;
  if (Pr && (Pr = !1, ht = e, ul = l), o = e.pendingLanes, o === 0 && (wt = null), fd(n.stateNode), xe(e, X()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
      componentStack: l.stack,
      digest: l.digest
    });
  if (al) throw al = !1, e = Ho, Ho = null, e;
  return ul & 1 && e.tag !== 0 && dn(), o = e.pendingLanes, o & 1 ? e === Vo ? Hn++ : (Hn = 0, Vo = e) : Hn = 0, zt(), null
}

function dn() {
  if (ht !== null) {
    var e = $a(ul),
      t = Me.transition,
      n = I;
    try {
      if (Me.transition = null, I = 16 > e ? 16 : e, ht === null) var r = !1;
      else {
        if (e = ht, ht = null, ul = 0, R & 6) throw Error(x(331));
        var l = R;
        for (R |= 4, E = e.current; E !== null;) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var d = a[u];
                for (E = d; E !== null;) {
                  var m = E;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, m, o)
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, E = h;
                  else
                    for (; E !== null;) {
                      m = E;
                      var g = m.sibling,
                        y = m.return;
                      if (Xu(m), m === d) {
                        E = null;
                        break
                      }
                      if (g !== null) {
                        g.return = y, E = g;
                        break
                      }
                      E = y
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var N = k.child;
                if (N !== null) {
                  k.child = null;
                  do {
                    var O = N.sibling;
                    N.sibling = null, N = O
                  } while (N !== null)
                }
              }
              E = o
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
          else e: for (; E !== null;) {
            if (o = E, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Bn(9, o, o.return)
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, E = f;
              break e
            }
            E = o.return
          }
        }
        var c = e.current;
        for (E = c; E !== null;) {
          i = E;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, E = p;
          else e: for (i = c; E !== null;) {
            if (a = E, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  wl(9, a)
              }
            } catch (w) {
              Y(a, a.return, w)
            }
            if (a === i) {
              E = null;
              break e
            }
            var v = a.sibling;
            if (v !== null) {
              v.return = a.return, E = v;
              break e
            }
            E = a.return
          }
        }
        if (R = l, zt(), Ke && typeof Ke.onPostCommitFiberRoot == "function") try {
          Ke.onPostCommitFiberRoot(pl, e)
        } catch {}
        r = !0
      }
      return r
    } finally {
      I = n, Me.transition = t
    }
  }
  return !1
}

function qs(e, t, n) {
  t = yn(n, t), t = $u(e, t, 1), e = kt(e, t, 1), t = fe(), e !== null && (ar(e, 1, t), xe(e, t))
}

function Y(e, t, n) {
  if (e.tag === 3) qs(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        qs(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wt === null || !wt.has(r))) {
          e = yn(n, e), e = Au(t, e, 1), t = kt(t, e, 1), e = fe(), t !== null && (ar(t, 1, e), xe(t, e));
          break
        }
      }
      t = t.return
    }
}

function Af(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, te === e && (le & n) === n && (J === 4 || J === 3 && (le & 130023424) === le && 500 > X() - Ti ? Rt(e, 0) : Mi |= n), xe(e, t)
}

function ic(e, t) {
  t === 0 && (e.mode & 1 ? (t = yr, yr <<= 1, !(yr & 130023424) && (yr = 4194304)) : t = 1);
  var n = fe();
  e = ot(e, t), e !== null && (ar(e, t, n), xe(e, n))
}

function Bf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ic(e, n)
}

function Uf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314))
  }
  r !== null && r.delete(t), ic(e, n)
}
var sc;
sc = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ge = !1, Lf(e, t, n);
      ge = !!(e.flags & 131072)
    }
  else ge = !1, W && t.flags & 1048576 && du(t, el, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fr(e, t), e = t.pendingProps;
      var l = pn(t, ce.current);
      cn(t, n), l = Ci(null, t, r, e, l, n);
      var o = Ei();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (o = !0, Zr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ki(t), l.updater = kl, t.stateNode = l, l._reactInternals = t, To(t, r, e, n), t = Io(null, t, r, !0, o, n)) : (t.tag = 0, W && o && pi(t), de(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Vf(r), e = De(r, e), l) {
          case 0:
            t = Ro(null, t, r, e, n);
            break e;
          case 1:
            t = Os(null, t, r, e, n);
            break e;
          case 11:
            t = Is(null, t, r, e, n);
            break e;
          case 14:
            t = Ds(null, t, r, De(r.type, e), n);
            break e
        }
        throw Error(x(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Ro(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Os(e, t, r, l, n);
    case 3:
      e: {
        if (Vu(t), e === null) throw Error(x(387));r = t.pendingProps,
        o = t.memoizedState,
        l = o.element,
        yu(e, t),
        rl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions
            }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = yn(Error(x(423)), t), t = Fs(e, t, r, n, l);
            break e
          } else if (r !== l) {
          l = yn(Error(x(424)), t), t = Fs(e, t, r, n, l);
          break e
        } else
          for (we = xt(t.stateNode.containerInfo.firstChild), je = t, W = !0, Fe = null, n = hu(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (mn(), r === l) {
            t = it(e, t, n);
            break e
          }
          de(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return vu(t), e === null && Lo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, So(r, l) ? i = null : o !== null && So(r, o) && (t.flags |= 32), Hu(e, t), de(e, t, i, n), t.child;
    case 6:
      return e === null && Lo(t), null;
    case 13:
      return Wu(e, t, n);
    case 4:
      return wi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hn(t, null, r, n) : de(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Is(e, t, r, l, n);
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(tl, r._currentValue), r._currentValue = i, o !== null)
          if (Be(o.value, i)) {
            if (o.children === l.children && !ye.current) {
              t = it(e, t, n);
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null;) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null;) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      u = nt(-1, n & -n), u.tag = 2;
                      var d = o.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var m = d.pending;
                        m === null ? u.next = u : (u.next = m.next, m.next = u), d.pending = u
                      }
                    }
                    o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), _o(o.return, n, t), a.lanes |= n;
                    break
                  }
                  u = u.next
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null) throw Error(x(341));
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), _o(i, n, t), i = o.sibling
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null;) {
                  if (i === t) {
                    i = null;
                    break
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break
                  }
                  i = i.return
                }
              o = i
            }
        de(e, t, l.children, n),
        t = t.child
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, cn(t, n), l = Te(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = De(r, t.pendingProps), l = De(r.type, l), Ds(e, t, r, l, n);
    case 15:
      return Bu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Fr(e, t), t.tag = 1, ve(r) ? (e = !0, Zr(t)) : e = !1, cn(t, n), Fu(t, r, l), To(t, r, l, n), Io(null, t, r, !0, e, n);
    case 19:
      return Qu(e, t, n);
    case 22:
      return Uu(e, t, n)
  }
  throw Error(x(156, t.tag))
};

function ac(e, t) {
  return Ia(e, t)
}

function Hf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function _e(e, t, n, r) {
  return new Hf(e, t, n, r)
}

function Di(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function Vf(e) {
  if (typeof e == "function") return Di(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ti) return 11;
    if (e === ni) return 14
  }
  return 2
}

function Nt(e, t) {
  var n = e.alternate;
  return n === null ? (n = _e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Br(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Di(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Kt:
      return It(n.children, l, o, t);
    case ei:
      i = 8, l |= 8;
      break;
    case to:
      return e = _e(12, n, t, l | 2), e.elementType = to, e.lanes = o, e;
    case no:
      return e = _e(13, n, t, l), e.elementType = no, e.lanes = o, e;
    case ro:
      return e = _e(19, n, t, l), e.elementType = ro, e.lanes = o, e;
    case va:
      return Nl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ga:
          i = 10;
          break e;
        case ya:
          i = 9;
          break e;
        case ti:
          i = 11;
          break e;
        case ni:
          i = 14;
          break e;
        case ct:
          i = 16, r = null;
          break e
      }
      throw Error(x(130, e == null ? e : typeof e, ""))
  }
  return t = _e(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function It(e, t, n, r) {
  return e = _e(7, e, r, t), e.lanes = n, e
}

function Nl(e, t, n, r) {
  return e = _e(22, e, r, t), e.elementType = va, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e
}

function Zl(e, t, n) {
  return e = _e(6, e, null, t), e.lanes = n, e
}

function Jl(e, t, n) {
  return t = _e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, t
}

function Wf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bl(0), this.expirationTimes = bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Oi(e, t, n, r, l, o, i, a, u) {
  return e = new Wf(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = _e(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, ki(o), e
}

function Qf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}

function uc(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(x(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return uu(e, n, t)
  }
  return t
}

function cc(e, t, n, r, l, o, i, a, u) {
  return e = Oi(n, r, !0, e, l, o, i, a, u), e.context = uc(null), n = e.current, r = fe(), l = jt(n), o = nt(r, l), o.callback = t ?? null, kt(n, o, l), e.current.lanes = l, ar(e, l, r), xe(e, r), e
}

function Sl(e, t, n, r) {
  var l = t.current,
    o = fe(),
    i = jt(l);
  return n = uc(n), t.context === null ? t.context = n : t.pendingContext = n, t = nt(o, i), t.payload = {
    element: e
  }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kt(l, t, i), e !== null && (Ae(e, l, i, o), Ir(e, l, i)), i
}

function dl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}

function Ks(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}

function Fi(e, t) {
  Ks(e, t), (e = e.alternate) && Ks(e, t)
}

function qf() {
  return null
}
var dc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
};

function $i(e) {
  this._internalRoot = e
}
Cl.prototype.render = $i.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Sl(e, t, null, null)
};
Cl.prototype.unmount = $i.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    At(function() {
      Sl(null, e, null, null)
    }), t[lt] = null
  }
};

function Cl(e) {
  this._internalRoot = e
}
Cl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ua();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < ft.length && t !== 0 && t < ft[n].priority; n++);
    ft.splice(n, 0, e), n === 0 && Va(e)
  }
};

function Ai(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function El(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ys() {}

function Kf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = dl(i);
        o.call(d)
      }
    }
    var i = cc(t, r, e, 0, null, !1, !1, "", Ys);
    return e._reactRootContainer = i, e[lt] = i.current, Zn(e.nodeType === 8 ? e.parentNode : e), At(), i
  }
  for (; l = e.lastChild;) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var d = dl(u);
      a.call(d)
    }
  }
  var u = Oi(e, 0, !1, null, null, !1, !1, "", Ys);
  return e._reactRootContainer = u, e[lt] = u.current, Zn(e.nodeType === 8 ? e.parentNode : e), At(function() {
    Sl(t, u, n, r)
  }), u
}

function Pl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var u = dl(i);
        a.call(u)
      }
    }
    Sl(t, i, e, l)
  } else i = Kf(n, t, e, l, r);
  return dl(i)
}
Aa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = bn(t.pendingLanes);
        n !== 0 && (oi(t, n | 1), xe(t, X()), !(R & 6) && (vn = X() + 500, zt()))
      }
      break;
    case 13:
      At(function() {
        var r = ot(e, 1);
        if (r !== null) {
          var l = fe();
          Ae(r, e, 1, l)
        }
      }), Fi(e, 1)
  }
};
ii = function(e) {
  if (e.tag === 13) {
    var t = ot(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ae(t, e, 134217728, n)
    }
    Fi(e, 134217728)
  }
};
Ba = function(e) {
  if (e.tag === 13) {
    var t = jt(e),
      n = ot(e, t);
    if (n !== null) {
      var r = fe();
      Ae(n, e, t, r)
    }
    Fi(e, t)
  }
};
Ua = function() {
  return I
};
Ha = function(e, t) {
  var n = I;
  try {
    return I = e, t()
  } finally {
    I = n
  }
};
mo = function(e, t, n) {
  switch (t) {
    case "input":
      if (io(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(x(90));
            ka(r), io(r, l)
          }
        }
      }
      break;
    case "textarea":
      ja(e, n);
      break;
    case "select":
      t = n.value, t != null && on(e, !!n.multiple, t, !1)
  }
};
La = bi;
_a = At;
var Yf = {
    usingClientEntryPoint: !1,
    Events: [cr, Zt, yl, Pa, za, bi]
  },
  Ln = {
    findFiberByHostInstance: Mt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  Xf = {
    bundleType: Ln.bundleType,
    version: Ln.version,
    rendererPackageName: Ln.rendererPackageName,
    rendererConfig: Ln.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: st.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = ba(e), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ln.findFiberByHostInstance || qf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber) try {
    pl = zr.inject(Xf), Ke = zr
  } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yf;
Se.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ai(t)) throw Error(x(200));
  return Qf(e, t, null, n)
};
Se.createRoot = function(e, t) {
  if (!Ai(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = dc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Oi(e, 1, !1, null, null, n, !1, r, l), e[lt] = t.current, Zn(e.nodeType === 8 ? e.parentNode : e), new $i(t)
};
Se.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = ba(t), e = e === null ? null : e.stateNode, e
};
Se.flushSync = function(e) {
  return At(e)
};
Se.hydrate = function(e, t, n) {
  if (!El(t)) throw Error(x(200));
  return Pl(null, e, t, !0, n)
};
Se.hydrateRoot = function(e, t, n) {
  if (!Ai(e)) throw Error(x(405));
  var r = n != null && n.hydratedSources || null,
    l = !1,
    o = "",
    i = dc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = cc(t, null, e, 1, n ?? null, l, !1, o, i), e[lt] = t.current, Zn(e), r)
    for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
  return new Cl(t)
};
Se.render = function(e, t, n) {
  if (!El(t)) throw Error(x(200));
  return Pl(null, e, t, !1, n)
};
Se.unmountComponentAtNode = function(e) {
  if (!El(e)) throw Error(x(40));
  return e._reactRootContainer ? (At(function() {
    Pl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[lt] = null
    })
  }), !0) : !1
};
Se.unstable_batchedUpdates = bi;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!El(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Pl(e, t, n, !1, r)
};
Se.version = "18.3.1-next-f1338f8080-20240426";

function fc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)
  } catch (e) {
    console.error(e)
  }
}
fc(), fa.exports = Se;
var Gf = fa.exports,
  pc, Xs = Gf;
pc = Xs.createRoot, Xs.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jf = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
  D = (e, t) => {
    const n = _.forwardRef(({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: u,
      ...d
    }, m) => _.createElement("svg", {
      ref: m,
      ...Zf,
      width: l,
      height: l,
      stroke: r,
      strokeWidth: i ? Number(o) * 24 / Number(l) : o,
      className: ["lucide", `lucide-${Jf(e)}`, a].join(" "),
      ...d
    }, [...t.map(([h, g]) => _.createElement(h, g)), ...Array.isArray(u) ? u : [u]]));
    return n.displayName = `${e}`, n
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = D("AlertCircle", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
  }],
  ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = D("ArrowRight", [
  ["path", {
    d: "M5 12h14",
    key: "1ays0h"
  }],
  ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = D("ArrowUp", [
  ["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
  }],
  ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = D("Award", [
  ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
  }],
  ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = D("Beef", [
  ["circle", {
    cx: "12.5",
    cy: "8.5",
    r: "2.5",
    key: "9738u8"
  }],
  ["path", {
    d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",
    key: "o0f6za"
  }],
  ["path", {
    d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
    key: "k7p6i0"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = D("CheckCircle", [
  ["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
  }],
  ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = D("Check", [
  ["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = D("ChevronLeft", [
  ["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = D("ChevronRight", [
  ["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = D("Clock", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = D("Coffee", [
  ["path", {
    d: "M17 8h1a4 4 0 1 1 0 8h-1",
    key: "jx4kbh"
  }],
  ["path", {
    d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",
    key: "1bxrl0"
  }],
  ["line", {
    x1: "6",
    x2: "6",
    y1: "2",
    y2: "4",
    key: "1cr9l3"
  }],
  ["line", {
    x1: "10",
    x2: "10",
    y1: "2",
    y2: "4",
    key: "170wym"
  }],
  ["line", {
    x1: "14",
    x2: "14",
    y1: "2",
    y2: "4",
    key: "1c5f70"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = D("Facebook", [
  ["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = D("Instagram", [
  ["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
  }],
  ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
  }],
  ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = D("Leaf", [
  ["path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    key: "nnexq3"
  }],
  ["path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
    key: "mt58a7"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = D("Mail", [
  ["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
  }],
  ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = D("MapPin", [
  ["path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
    key: "2oe9fu"
  }],
  ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = D("Menu", [
  ["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
  }],
  ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
  }],
  ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = D("Moon", [
  ["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = D("Phone", [
  ["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = D("Pizza", [
  ["path", {
    d: "M15 11h.01",
    key: "rns66s"
  }],
  ["path", {
    d: "M11 15h.01",
    key: "k85uqc"
  }],
  ["path", {
    d: "M16 16h.01",
    key: "1f9h7w"
  }],
  ["path", {
    d: "m2 16 20 6-6-20A20 20 0 0 0 2 16",
    key: "e4slt2"
  }],
  ["path", {
    d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",
    key: "rerf8f"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = D("Send", [
  ["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
  }],
  ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = D("ShoppingBag", [
  ["path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
    key: "hou9p0"
  }],
  ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
  }],
  ["path", {
    d: "M16 10a4 4 0 0 1-8 0",
    key: "1ltviw"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = D("Sun", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
  }],
  ["path", {
    d: "M12 2v2",
    key: "tus03m"
  }],
  ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
  }],
  ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
  }],
  ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
  }],
  ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
  }],
  ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
  }],
  ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
  }],
  ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = D("ThumbsUp", [
  ["path", {
    d: "M7 10v12",
    key: "1qc93n"
  }],
  ["path", {
    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
    key: "y3tblf"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = D("Twitter", [
  ["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = D("UtensilsCrossed", [
  ["path", {
    d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
    key: "n7qcjb"
  }],
  ["path", {
    d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
    key: "d0u48b"
  }],
  ["path", {
    d: "m2.1 21.8 6.4-6.3",
    key: "yn04lh"
  }],
  ["path", {
    d: "m19 5-7 7",
    key: "194lzd"
  }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = D("X", [
    ["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }],
    ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]
  ]),
  xc = _.createContext(void 0),
  kc = () => {
    const e = _.useContext(xc);
    if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return e
  },
  vp = ({
    children: e
  }) => {
    const [t, n] = _.useState("dark");
    _.useEffect(() => {
      const l = localStorage.getItem("theme");
      l ? n(l) : (n("dark"), localStorage.setItem("theme", "dark"))
    }, []), _.useEffect(() => {
      t === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), localStorage.setItem("theme", t)
    }, [t]);
    const r = () => {
      n(t === "light" ? "dark" : "light")
    };
    return s.jsx(xc.Provider, {
      value: {
        theme: t,
        toggleTheme: r
      },
      children: e
    })
  },
  wc = _.createContext(void 0),
  Ue = () => {
    const e = _.useContext(wc);
    if (e === void 0) throw new Error("useLanguage must be used within a LanguageProvider");
    return e
  },
  xp = ({
    children: e
  }) => {
    const [t, n] = _.useState("es");
    _.useEffect(() => {
      const l = localStorage.getItem("language");
      l && n(l)
    }, []), _.useEffect(() => {
      localStorage.setItem("language", t), document.documentElement.lang = t
    }, [t]);
    const r = () => {
      n(t === "es" ? "en" : "es")
    };
    return s.jsx(wc.Provider, {
      value: {
        language: t,
        toggleLanguage: r
      },
      children: e
    })
  },
  at = {
    es: {
      nav: {
        home: "Inicio",
        menu: "Menú",
        specialties: "Especialidades",
        about: "Nosotros",
        location: "Ubicación",
        contact: "Contacto"
      },
      hero: {
        title: "Auténticas Hamburguesas Artesanales",
        subtitle: "Sabor inigualable desde 2010",
        cta: "Ver Menú",
        bookTable: "Reservar Mesa"
      },
      menu: {
        title: "Nuestro Menú",
        subtitle: "Descubre nuestra variedad de hamburguesas artesanales y acompañamientos",
        categories: {
          burgers: "Hamburguesas",
          sides: "Acompañamientos",
          drinks: "Bebidas",
          desserts: "Postres"
        },
        items: {
          burgers: {
            "classic-burger": {
              name: "Clásica",
              description: "Carne 100% de res, queso cheddar, lechuga, tomate, cebolla y nuestra salsa especial."
            },
            "cheese-lover": {
              name: "Cheese Lover",
              description: "Doble carne, triple queso (cheddar, gouda y azul), cebolla caramelizada y salsa especial."
            },
            "mexican-burger": {
              name: "Mexicana",
              description: "Carne de res, guacamole, jalapeños, queso manchego, pico de gallo y salsa de chipotle."
            },
            "bbq-burger": {
              name: "BBQ Lovers",
              description: "Carne de res, salsa BBQ casera, cebolla crispy, tocino, queso cheddar y pepinillos."
            },
            "veggie-burger": {
              name: "Veggie",
              description: "Hamburguesa de garbanzos y espinacas, guacamole, tomate, brotes y mayonesa vegana."
            },
            "truffle-burger": {
              name: "Truffle Deluxe",
              description: "Carne premium, queso brie, rúcula, champiñones salteados y mayonesa de trufa."
            }
          },
          sides: {
            "french-fries": {
              name: "Papas Fritas",
              description: "Crujientes papas fritas con sal de mar y hierbas frescas."
            },
            "onion-rings": {
              name: "Aros de Cebolla",
              description: "Aros de cebolla crujientes con nuestra mezcla especial de especias."
            },
            "sweet-potato-fries": {
              name: "Papas de Camote",
              description: "Deliciosas papas de camote con un toque de canela y azúcar morena."
            }
          },
          drinks: {
            "artisanal-lemonade": {
              name: "Limonada Artesanal",
              description: "Limonada casera con menta fresca y un toque de jengibre."
            },
            "craft-beer": {
              name: "Cerveza Artesanal",
              description: "Selección de cervezas artesanales locales."
            },
            milkshake: {
              name: "Milkshake",
              description: "Cremoso milkshake en varios sabores con topping a elección."
            }
          },
          desserts: {
            brownie: {
              name: "Brownie con Helado",
              description: "Brownie casero caliente con helado de vainilla y salsa de chocolate."
            },
            cheesecake: {
              name: "Cheesecake",
              description: "Cheesecake cremoso con salsa de frutos rojos."
            },
            "apple-pie": {
              name: "Pie de Manzana",
              description: "Tradicional pie de manzana con canela y helado de vainilla."
            }
          }
        }
      },
      specialties: {
        title: "Nuestras Especialidades",
        subtitle: "Creaciones únicas que definen nuestra esencia",
        orderNow: "Pedir Ahora",
        items: {
          premium: {
            name: "La Premium",
            description: "Doble carne Angus, queso gouda madurado, tocino ahumado, champiñones portobello y aioli de trufa en pan brioche."
          },
          bestseller: {
            name: "La Favorita",
            description: "Carne premium, queso americano, tocino crujiente, cebolla caramelizada, lechuga, tomate y salsa especial en pan artesanal."
          },
          limited: {
            name: "Edición Limitada",
            description: "Cambia cada mes. Actualmente: Carne de res, queso de cabra, mermelada de cebolla, rúcula y mayonesa de ajo negro."
          }
        }
      },
      about: {
        title: "Sobre Nosotros",
        historyTitle: "Nuestra Historia",
        historyText1: "MazaBurguer nació en 2015 como un pequeño emprendimiento familiar con una gran pasión por las hamburguesas artesanales. Lo que comenzó como un foodtruck ahora es uno de los restaurantes más queridos de la ciudad.",
        historyText2: "Nuestra filosofía se basa en ofrecer hamburguesas de la más alta calidad, preparadas con ingredientes frescos y locales. Cada hamburguesa es elaborada a mano y cocinada al momento para garantizar la mejor experiencia.",
        features: {
          freshIngredients: "Ingredientes frescos y locales",
          grassFedBeef: "Carne 100% de res alimentada con pasto",
          freshBread: "Panes horneados diariamente",
          homemadeSauces: "Salsas y aderezos caseros"
        },
        satisfiedCustomers: "Clientes satisfechos",
        values: {
          quality: {
            title: "Calidad",
            description: "Buscamos la excelencia en cada ingrediente y en cada preparación."
          },
          tradition: {
            title: "Tradición",
            description: "Recetas transmitidas por generaciones y perfeccionadas con el tiempo."
          },
          sustainability: {
            title: "Sustentabilidad",
            description: "Comprometidos con el medio ambiente y proveedores locales."
          }
        }
      },
      location: {
        title: "Ubicaciones",
        subtitle: "Visítanos en nuestras sucursales",
        directions: "Cómo Llegar",
        hours: {
          monThu: "Lun-Jue: 12:00-22:00",
          friSun: "Vie-Dom: 12:00-00:00",
          daily: "Lun-Dom: 13:00-23:00"
        }
      },
      contact: {
        title: "Reserva una Mesa",
        subtitle: "Asegura tu lugar y disfruta de la mejor experiencia",
        form: {
          fullName: "Nombre completo*",
          email: "Email*",
          phone: "Teléfono*",
          people: "Número de personas*",
          select: "Seleccionar",
          date: "Fecha*",
          time: "Hora*",
          message: "Mensaje o peticiones especiales",
          submit: "Enviar Reserva",
          processing: "Procesando...",
          requiredFields: "* Campos obligatorios. Te contactaremos para confirmar la disponibilidad."
        },
        validation: {
          nameRequired: "El nombre es obligatorio",
          emailRequired: "El email es obligatorio",
          emailInvalid: "Email inválido",
          phoneRequired: "El teléfono es obligatorio",
          peopleRequired: "Selecciona el número de personas",
          dateRequired: "Selecciona una fecha",
          timeRequired: "Selecciona una hora"
        },
        success: {
          title: "¡Reserva Recibida!",
          message: "Hemos recibido tu solicitud de reserva. Te contactaremos pronto para confirmar los detalles.",
          newReservation: "Hacer otra reserva"
        }
      },
      footer: {
        description: "Disfruta de las mejores hamburguesas artesanales con ingredientes frescos y de alta calidad.",
        quickLinks: "Enlaces Rápidos",
        contactUs: "Contáctanos",
        hours: "Horarios",
        schedule: {
          monThu: "Lunes - Jueves: 12:00 - 22:00",
          friSat: "Viernes - Sábado: 12:00 - 00:00",
          sun: "Domingo: 12:00 - 22:00"
        },
        bookNow: "Reservar Ahora",
        rights: "Todos los derechos reservados.",
        termsConditions: "Términos y Condiciones",
        privacyPolicy: "Política de Privacidad"
      },
      theme: {
        light: "Cambiar a modo oscuro",
        dark: "Cambiar a modo claro"
      },
      language: {
        switch: "Switch to English",
        label: "Idioma:"
      }
    },
    en: {
      nav: {
        home: "Home",
        menu: "Menu",
        specialties: "Specialties",
        about: "About",
        location: "Location",
        contact: "Contact"
      },
      hero: {
        title: "Authentic Handcrafted Burgers",
        subtitle: "Unmatched flavor since 2010",
        cta: "View Menu",
        bookTable: "Book a Table"
      },
      menu: {
        title: "Our Menu",
        subtitle: "Discover our variety of artisanal burgers and sides",
        categories: {
          burgers: "Burgers",
          sides: "Sides",
          drinks: "Drinks",
          desserts: "Desserts"
        },
        items: {
          burgers: {
            "classic-burger": {
              name: "Classic",
              description: "100% beef meat, cheddar cheese, lettuce, tomato, onion and our special sauce."
            },
            "cheese-lover": {
              name: "Cheese Lover",
              description: "Double meat, triple cheese (cheddar, gouda and blue cheese), caramelized onions and special sauce."
            },
            "mexican-burger": {
              name: "Mexican",
              description: "Beef meat, guacamole, jalapeños, manchego cheese, pico de gallo and chipotle sauce."
            },
            "bbq-burger": {
              name: "BBQ Lovers",
              description: "Beef meat, homemade BBQ sauce, crispy onions, bacon, cheddar cheese and pickles."
            },
            "veggie-burger": {
              name: "Veggie",
              description: "Chickpea and spinach meat, guacamole, tomato, sprouts and vegan mayo."
            },
            "truffle-burger": {
              name: "Truffle Deluxe",
              description: "Premium beef, brie cheese, arugula, sauteed mushrooms and truffle mayo."
            }
          },
          sides: {
            "french-fries": {
              name: "French Fries",
              description: "Crispy french fries with sea salt and fresh herbs."
            },
            "onion-rings": {
              name: "Onion Rings",
              description: "Crispy onion rings with our special blend of spices."
            },
            "sweet-potato-fries": {
              name: "Sweet Potato Fries",
              description: "Delicious sweet potato fries with a touch of cinnamon and brown sugar."
            }
          },
          drinks: {
            "artisanal-lemonade": {
              name: "Artisanal Lemonade",
              description: "Homemade lemonade with fresh mint and a touch of ginger."
            },
            "craft-beer": {
              name: "Craft Beer",
              description: "Selection of local craft beers."
            },
            milkshake: {
              name: "Milkshake",
              description: "Creamy milkshake in various flavors with your choice of topping."
            }
          },
          desserts: {
            brownie: {
              name: "Brownie with Ice Cream",
              description: "Warm homemade brownie with vanilla ice cream and chocolate sauce."
            },
            cheesecake: {
              name: "Cheesecake",
              description: "Creamy cheesecake with mixed berry sauce."
            },
            "apple-pie": {
              name: "Apple Pie",
              description: "Traditional apple pie with cinnamon and vanilla ice cream."
            }
          }
        }
      },
      specialties: {
        title: "Our Specialties",
        subtitle: "Unique creations that define our essence",
        orderNow: "Order Now",
        items: {
          premium: {
            name: "The Premium",
            description: "Double Angus beef meat, aged gouda cheese, smoked bacon, portobello mushrooms and truffle aioli on brioche bun."
          },
          bestseller: {
            name: "The Favorite",
            description: "Premium beef meat, American cheese, crispy bacon, caramelized onion, lettuce, tomato and special sauce on artisan bread."
          },
          limited: {
            name: "Limited Edition",
            description: "Changes every month. Currently: Beef meat, goat cheese, onion jam, arugula and black garlic mayo."
          }
        }
      },
      about: {
        title: "About Us",
        historyTitle: "Our History",
        historyText1: "MazaBurguer was born in 2015 as a small family venture with a great passion for artisanal burgers. What started as a food truck is now one of the most beloved restaurants in the city.",
        historyText2: "Our philosophy is based on offering the highest quality burgers, prepared with fresh, local ingredients. Each burger is handcrafted and cooked to order to ensure the best experience.",
        features: {
          freshIngredients: "Fresh and local ingredients",
          grassFedBeef: "100% grass-fed beef",
          freshBread: "Daily baked buns",
          homemadeSauces: "Homemade sauces and dressings"
        },
        satisfiedCustomers: "Satisfied customers",
        values: {
          quality: {
            title: "Quality",
            description: "We seek excellence in every ingredient and preparation."
          },
          tradition: {
            title: "Tradition",
            description: "Recipes passed down through generations and perfected over time."
          },
          sustainability: {
            title: "Sustainability",
            description: "Committed to the environment and local suppliers."
          }
        }
      },
      location: {
        title: "Locations",
        subtitle: "Visit us at our branches",
        directions: "Get Directions",
        hours: {
          monThu: "Mon-Thu: 12:00-22:00",
          friSun: "Fri-Sun: 12:00-00:00",
          daily: "Mon-Sun: 13:00-23:00"
        }
      },
      contact: {
        title: "Book a Table",
        subtitle: "Secure your spot and enjoy the best experience",
        form: {
          fullName: "Full Name*",
          email: "Email*",
          phone: "Phone*",
          people: "Number of People*",
          select: "Select",
          date: "Date*",
          time: "Time*",
          message: "Message or special requests",
          submit: "Send Reservation",
          processing: "Processing...",
          requiredFields: "* Required fields. We will contact you to confirm availability."
        },
        validation: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Invalid email",
          phoneRequired: "Phone is required",
          peopleRequired: "Please select number of people",
          dateRequired: "Please select a date",
          timeRequired: "Please select a time"
        },
        success: {
          title: "Reservation Received!",
          message: "We have received your reservation request. We will contact you soon to confirm the details.",
          newReservation: "Make another reservation"
        }
      },
      footer: {
        description: "Enjoy the best artisanal burgers with fresh, high-quality ingredients.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        hours: "Hours",
        schedule: {
          monThu: "Monday - Thursday: 12:00 - 22:00",
          friSat: "Friday - Saturday: 12:00 - 00:00",
          sun: "Sunday: 12:00 - 22:00"
        },
        bookNow: "Book Now",
        rights: "All rights reserved.",
        termsConditions: "Terms & Conditions",
        privacyPolicy: "Privacy Policy"
      },
      theme: {
        light: "Switch to dark mode",
        dark: "Switch to light mode"
      },
      language: {
        switch: "Cambiar a Español",
        label: "Language:"
      }
    }
  },
  Js = () => s.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 750 500",
    className: "h-full w-full",
    children: [s.jsx("rect", {
      width: "750",
      height: "500",
      fill: "#c60b1e"
    }), s.jsx("rect", {
      width: "750",
      height: "250",
      fill: "#ffc400",
      y: "125"
    })]
  }),
  ea = () => s.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 60 30",
    className: "h-full w-full",
    children: [s.jsx("clipPath", {
      id: "s",
      children: s.jsx("path", {
        d: "M0,0 v30 h60 v-30 z"
      })
    }), s.jsx("clipPath", {
      id: "t",
      children: s.jsx("path", {
        d: "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"
      })
    }), s.jsxs("g", {
      clipPath: "url(#s)",
      children: [s.jsx("path", {
        d: "M0,0 v30 h60 v-30 z",
        fill: "#012169"
      }), s.jsx("path", {
        d: "M0,0 L60,30 M60,0 L0,30",
        stroke: "#fff",
        strokeWidth: "6"
      }), s.jsx("path", {
        d: "M0,0 L60,30 M60,0 L0,30",
        clipPath: "url(#t)",
        stroke: "#C8102E",
        strokeWidth: "4"
      }), s.jsx("path", {
        d: "M30,0 v30 M0,15 h60",
        stroke: "#fff",
        strokeWidth: "10"
      }), s.jsx("path", {
        d: "M30,0 v30 M0,15 h60",
        stroke: "#C8102E",
        strokeWidth: "6"
      })]
    })]
  }),
  jc = "./assets/logo-CVLKJofU.svg",
  kp = ({
    scrolled: e
  }) => {
    const [t, n] = _.useState(!1), {
      theme: r,
      toggleTheme: l
    } = kc(), {
      language: o,
      toggleLanguage: i
    } = Ue(), a = at[o], u = [{
      name: a.nav.home,
      href: "#hero"
    }, {
      name: a.nav.menu,
      href: "#menu"
    }, {
      name: a.nav.specialties,
      href: "#specialties"
    }, {
      name: a.nav.about,
      href: "#about"
    }, {
      name: a.nav.location,
      href: "#location"
    }, {
      name: a.nav.contact,
      href: "#contact"
    }], d = () => {
      n(!t)
    }, m = () => {
      n(!1)
    };
    return s.jsxs("header", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-secondary/95 dark:bg-dark/95 shadow-md py-3":"bg-transparent py-5"}`,
      style: {
        height: "98px"
      },
      children: [s.jsxs("div", {
        className: "container-custom flex items-center justify-between h-full",
        children: [s.jsxs("a", {
          href: "#hero",
          className: "flex items-center",
          children: [" ", s.jsx("img", {
            src: jc,
            alt: "MazaBurguer Logo",
            className: `h-[46px] w-auto ${e?"scale-90":"scale-100"} transition-transform duration-300`
          }), s.jsx("span", {
            className: "ml-2 text-xl md:text-2xl font-heading font-bold text-tertiary dark:text-secondary",
            children: "MazaBurguer"
          })]
        }), " ", s.jsxs("nav", {
          className: "hidden lg:flex items-center space-x-4 lg:space-x-8",
          children: [u.map(h => s.jsx("a", {
            href: h.href,
            className: "nav-link animated-underline font-heading text-tertiary dark:text-secondary hover:text-primary dark:hover:text-accent transition-colors duration-200 text-sm lg:text-base",
            children: h.name
          }, h.name)), " ", s.jsx("button", {
            onClick: i,
            className: "p-0 rounded-full w-8 h-8 lg:w-10 lg:h-10 overflow-hidden relative hover:ring-2 hover:ring-primary dark:hover:ring-accent transition-all ml-1 lg:ml-0",
            "aria-label": a.language.switch,
            children: s.jsxs("div", {
              className: "absolute inset-0 overflow-hidden",
              children: [s.jsx("div", {
                className: `absolute inset-0 transition-transform duration-500 ${o==="es"?"translate-y-0":"translate-y-full"}`,
                children: s.jsx(Js, {})
              }), s.jsx("div", {
                className: `absolute inset-0 transition-transform duration-500 ${o==="en"?"translate-y-0":"-translate-y-full"}`,
                children: s.jsx(ea, {})
              })]
            })
          }), s.jsx("button", {
            onClick: l,
            className: "p-1 lg:p-2 rounded-full hover:bg-tertiary/10 dark:hover:bg-light/10 transition-colors hidden lg:inline-flex ml-1",
            "aria-label": r === "dark" ? a.theme.dark : a.theme.light,
            children: r === "dark" ? s.jsx(Zs, {
              className: "h-5 w-5 text-accent"
            }) : s.jsx(Gs, {
              className: "h-5 w-5 text-tertiary"
            })
          })]
        }), " ", s.jsx("div", {
          className: "flex items-center lg:hidden",
          children: s.jsx("button", {
            onClick: d,
            className: "p-2 rounded-md hover:bg-tertiary/10 dark:hover:bg-light/10 transition-colors",
            "aria-label": "Toggle menu",
            children: t ? s.jsx(vc, {
              className: "h-6 w-6 text-tertiary dark:text-secondary"
            }) : s.jsx(dp, {
              className: "h-6 w-6 text-tertiary dark:text-secondary"
            })
          })
        })]
      }), " ", " ", s.jsxs("div", {
        className: `fixed inset-0 z-40 bg-secondary dark:bg-dark transform transition-transform duration-300 ease-in-out ${t?"translate-x-0":"translate-x-full"} lg:hidden md:w-auto md:right-0 md:shadow-lg`,
        style: {
          top: "98px"
        },
        children: [" ", s.jsxs("nav", {
          className: "flex flex-col h-full py-8 px-6 space-y-6",
          children: [u.map(h => s.jsx("a", {
            href: h.href,
            onClick: m,
            className: "nav-link text-xl font-heading text-tertiary dark:text-secondary py-2 border-b border-light-gray dark:border-dark-content hover:text-primary dark:hover:text-accent transition-colors",
            children: h.name
          }, h.name)), s.jsxs("div", {
            className: "flex pt-4",
            children: [s.jsx("span", {
              className: "text-tertiary dark:text-secondary opacity-70 mr-auto",
              children: o === "es" ? "Idioma:" : "Language:"
            }), s.jsx("div", {
              className: "flex items-center",
              children: s.jsxs("button", {
                onClick: i,
                className: "flex items-center p-2 rounded-md hover:bg-tertiary/10 dark:hover:bg-light/10 transition-colors",
                children: [" ", s.jsxs("div", {
                  className: "w-8 h-8 rounded-full overflow-hidden relative mr-2",
                  children: [s.jsx("div", {
                    className: `absolute inset-0 transition-transform duration-500 ${o==="es"?"translate-y-0":"translate-y-full"}`,
                    children: s.jsx(Js, {})
                  }), s.jsx("div", {
                    className: `absolute inset-0 transition-transform duration-500 ${o==="en"?"translate-y-0":"-translate-y-full"}`,
                    children: s.jsx(ea, {})
                  })]
                }), " ", s.jsx("span", {
                  className: "text-tertiary dark:text-secondary text-base",
                  children: o === "es" ? "Español" : "English"
                })]
              })
            })]
          }), s.jsxs("div", {
            className: "flex pt-4",
            children: [s.jsx("span", {
              className: "text-tertiary dark:text-secondary opacity-70 mr-auto",
              children: r === "dark" ? a.theme.dark : a.theme.light
            }), s.jsxs("button", {
              onClick: l,
              className: "flex items-center p-2 rounded-md hover:bg-tertiary/10 dark:hover:bg-light/10 transition-colors",
              "aria-label": r === "dark" ? a.theme.dark : a.theme.light,
              children: [r === "dark" ? s.jsx(Zs, {
                className: "h-5 w-5 text-accent"
              }) : s.jsx(Gs, {
                className: "h-5 w-5 text-tertiary"
              }), s.jsx("span", {
                className: "ml-2 text-tertiary dark:text-secondary text-base",
                children: r === "dark" ? a.theme.dark : a.theme.light
              })]
            })]
          })]
        })]
      })]
    })
  },
  wp = "./assets/background-video-DrvxSQPD.mp4",
  jp = () => {
    const [e, t] = _.useState(0), {
      language: n
    } = Ue(), r = at[n];
    _.useEffect(() => {
      const y = () => {
        t(window.pageYOffset)
      };
      return window.addEventListener("scroll", y), () => {
        window.removeEventListener("scroll", y)
      }
    }, []);
    const l = ["https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
      [o, i] = _.useState(0),
      [a, u] = _.useState(!1),
      [d, m] = _.useState(!0);
    _.useEffect(() => {
      if (a) return;
      const y = setInterval(() => {
        m(!1), setTimeout(() => {
          i(k => k === l.length - 1 ? 0 : k + 1), m(!0)
        }, 300)
      }, 3500);
      return () => clearInterval(y)
    }, [a, l.length]);
    const h = () => {
        m(!1), setTimeout(() => {
          i(y => y === 0 ? l.length - 1 : y - 1), m(!0)
        }, 300)
      },
      g = () => {
        m(!1), setTimeout(() => {
          i(y => y === l.length - 1 ? 0 : y + 1), m(!0)
        }, 300)
      };
    return s.jsxs("section", {
      id: "hero",
      className: "relative h-screen flex items-center justify-center bg-secondary dark:bg-dark overflow-hidden",
      children: [s.jsxs("video", {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0,
        className: "absolute inset-0 w-full h-full object-cover z-0 opacity-20",
        style: {
          transform: `translateY(${e*.5}px)`
        },
        children: [s.jsx("source", {
          src: wp,
          type: "video/mp4"
        }), "Tu navegador no soporta videos HTML5."]
      }), " ", s.jsx("div", {
        className: "container-custom relative z-10 py-16 md:py-24 h-full flex items-center justify-center",
        children: s.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full",
          children: [" ", s.jsxs("div", {
            className: "animate-fade-in space-y-6 mx-auto text-center lg:text-left lg:mx-0",
            style: {
              marginTop: "5vh"
            },
            children: [s.jsxs("h1", {
              className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-tertiary dark:text-secondary",
              children: [r.hero.title, " ", s.jsx("span", {
                className: "text-primary dark:text-accent",
                children: "Premium"
              })]
            }), s.jsx("p", {
              className: "text-xl md:text-2xl text-tertiary/80 dark:text-secondary/80 max-w-xl mx-auto lg:mx-0",
              children: r.hero.subtitle
            }), s.jsxs("div", {
              className: "flex flex-wrap gap-6 pt-4 justify-center lg:justify-start",
              children: [s.jsx("a", {
                href: "#menu",
                className: "btn-primary animate-beat",
                children: r.hero.cta
              }), s.jsxs("a", {
                href: "#contact",
                className: "btn-secondary group flex items-center",
                children: [r.hero.bookTable, s.jsx(ep, {
                  className: "ml-2 group-hover:translate-x-1 transition-transform"
                })]
              })]
            })]
          }), " ", " ", s.jsxs("div", {
            className: "hidden lg:flex relative justify-center items-center self-center flex-grow flex-shrink-0 h-full",
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            style: {
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5vh"
            },
            children: [s.jsx("button", {
              type: "button",
              onClick: h,
              className: "absolute left-4 top-1/2 -translate-y-1/2 bg-white-80 dark:bg-dark-80 rounded-full p-3 shadow-md hover:bg-white dark:hover:bg-dark transition-colors z-10",
              "aria-label": "Imagen anterior",
              children: s.jsx("svg", {
                width: "24",
                height: "24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-chevron-left text-tertiary dark:text-secondary",
                children: s.jsx("polyline", {
                  points: "15 18 9 12 15 6"
                })
              })
            }), " ", s.jsxs("div", {
              className: "relative flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-full",
              children: [s.jsx("img", {
                src: l[o],
                alt: `Hamburguesa premium MazaBurguer ${o+1}`,
                className: `rounded-lg shadow-xl w-full h-auto object-cover transition-opacity duration-500 ${d?"opacity-100":"opacity-0"}`,
                style: {
                  aspectRatio: "1/1",
                  maxHeight: "612px",
                  margin: "auto"
                }
              }), s.jsx("div", {
                className: "flex gap-2 mt-6 mb-2 justify-center",
                children: l.map((y, k) => s.jsx("span", {
                  className: `w-3 h-3 rounded-full border border-white ${k===o?"bg-primary dark:bg-accent":"bg-gray-300 dark:bg-gray-600"} inline-block transition-colors`
                }, k))
              })]
            }), s.jsx("button", {
              type: "button",
              onClick: g,
              className: "absolute right-4 top-1/2 -translate-y-1/2 bg-white-80 dark:bg-dark-80 rounded-full p-3 shadow-md hover:bg-white dark:hover:bg-dark transition-colors z-10",
              "aria-label": "Imagen siguiente",
              children: s.jsx("svg", {
                width: "24",
                height: "24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-chevron-right text-tertiary dark:text-secondary",
                children: s.jsx("polyline", {
                  points: "9 18 15 12 9 6"
                })
              })
            })]
          })]
        })
      }), s.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary dark:from-dark to-transparent"
      })]
    })
  },
  _n = {
    burgers: [{
      id: "classic-burger",
      name: "Clásica",
      description: "Carne 100% de res, queso cheddar, lechuga, tomate, cebolla y nuestra salsa especial.",
      price: 9.99,
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Bestseller", "Clásica"]
    }, {
      id: "cheese-lover",
      name: "Cheese Lover",
      description: "Doble carne, triple queso (cheddar, gouda y azul), cebolla caramelizada y salsa especial.",
      price: 12.99,
      image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Especial", "Picante"]
    }, {
      id: "mexican-burger",
      name: "Mexicana",
      description: "Carne de res, guacamole, jalapeños, queso manchego, pico de gallo y salsa de chipotle.",
      price: 11.99,
      image: "https://images.pexels.com/photos/10831651/pexels-photo-10831651.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Picante", "Especial"]
    }, {
      id: "bbq-burger",
      name: "BBQ Lovers",
      description: "Carne de res, salsa BBQ casera, cebolla crispy, tocino, queso cheddar y pepinillos.",
      price: 12.99,
      image: "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Bestseller", "BBQ"]
    }, {
      id: "veggie-burger",
      name: "Veggie",
      description: "Hamburguesa de garbanzos y espinacas, guacamole, tomate, brotes y mayonesa vegana.",
      price: 10.99,
      image: "https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Vegetariana", "Saludable"]
    }, {
      id: "truffle-burger",
      name: "Truffle Deluxe",
      description: "Carne premium, queso brie, rúcula, champiñones salteados y mayonesa de trufa.",
      price: 14.99,
      image: "https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Premium", "Gourmet"]
    }],
    sides: [{
      id: "french-fries",
      name: "Papas Fritas",
      description: "Crujientes papas fritas con sal de mar y hierbas frescas.",
      price: 3.99,
      image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Clásico"]
    }, {
      id: "onion-rings",
      name: "Aros de Cebolla",
      description: "Aros de cebolla crujientes con nuestra mezcla especial de especias.",
      price: 4.99,
      image: "https://images.pexels.com/photos/263049/pexels-photo-263049.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Crujientes"]
    }, {
      id: "sweet-potato-fries",
      name: "Papas de Camote",
      description: "Deliciosas papas de camote con un toque de canela y azúcar morena.",
      price: 4.99,
      image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555/free-photo-of-patatas-fritas-de-camote-en-un-tazon.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Especial", "Dulce y Salado"]
    }],
    drinks: [{
      id: "artisanal-lemonade",
      name: "Limonada Artesanal",
      description: "Limonada casera con menta fresca y un toque de jengibre.",
      price: 3.49,
      image: "https://images.pexels.com/photos/616840/pexels-photo-616840.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Refrescante"]
    }, {
      id: "craft-beer",
      name: "Cerveza Artesanal",
      description: "Selección de cervezas artesanales locales.",
      price: 5.99,
      image: "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Alcohol"]
    }, {
      id: "milkshake",
      name: "Milkshake",
      description: "Cremoso milkshake en varios sabores con topping a elección.",
      price: 4.99,
      image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Dulce"]
    }],
    desserts: [{
      id: "brownie",
      name: "Brownie con Helado",
      description: "Brownie casero caliente con helado de vainilla y salsa de chocolate.",
      price: 5.99,
      image: "https://images.pexels.com/photos/27359377/pexels-photo-27359377.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Caliente y Frío"]
    }, {
      id: "cheesecake",
      name: "Cheesecake",
      description: "Cheesecake cremoso con salsa de frutos rojos.",
      price: 5.49,
      image: "https://images.pexels.com/photos/14107/pexels-photo-14107.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Cremoso"]
    }, {
      id: "apple-pie",
      name: "Pie de Manzana",
      description: "Tradicional pie de manzana con canela y helado de vainilla.",
      price: 4.99,
      image: "https://images.pexels.com/photos/6148194/pexels-photo-6148194.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Tradicional"]
    }]
  },
  Bi = ({
    isOpen: e,
    onClose: t,
    title: n,
    children: r
  }) => {
    const {
      theme: l
    } = kc(), o = _.useRef(null);
    return _.useEffect(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
      document.body.style.overflow = ""
    }), [e]), _.useEffect(() => {
      const i = a => {
        o.current && !o.current.contains(a.target) && t()
      };
      return e && document.addEventListener("mousedown", i), () => {
        document.removeEventListener("mousedown", i)
      }
    }, [e, t]), _.useEffect(() => {
      const i = a => {
        a.key === "Escape" && t()
      };
      return e && document.addEventListener("keydown", i), () => {
        document.removeEventListener("keydown", i)
      }
    }, [e, t]), e ? s.jsx("div", {
      className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-tertiary/50 dark:bg-dark/70 backdrop-blur-sm overflow-y-auto transition-opacity duration-300 ${e?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,
      children: s.jsxs("div", {
        ref: o,
        className: `w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl transition-all duration-300 transform ${l==="dark"?"bg-dark-content text-secondary":"bg-light text-tertiary"} ${e?"scale-100 opacity-100":"scale-95 opacity-0"}`,
        children: [s.jsxs("div", {
          className: "sticky top-0 z-10 flex justify-between items-center p-4 border-b border-tertiary/10 dark:border-secondary/10 bg-inherit",
          children: [s.jsx("h3", {
            className: "text-xl font-heading font-bold",
            children: n
          }), s.jsx("button", {
            onClick: t,
            className: `rounded-full p-1 hover:bg-tertiary/10 dark:hover:bg-secondary/10 transition-colors ${l==="dark"?"text-secondary":"text-tertiary"}`,
            "aria-label": "Cerrar",
            children: s.jsx(vc, {
              className: "h-5 w-5"
            })
          })]
        }), s.jsx("div", {
          className: "p-6",
          children: r
        })]
      })
    }) : null
  },
  Np = ({
    isOpen: e,
    onClose: t,
    item: n,
    category: r,
    onPrev: l,
    onNext: o
  }) => {
    const {
      language: i
    } = Ue(), a = at[i];
    if (!n) return null;
    const u = a.menu.items && a.menu.items[r] && a.menu.items[r][n.id] ? {
        name: a.menu.items[r][n.id].name,
        description: a.menu.items[r][n.id].description
      } : {
        name: n.name,
        description: n.description
      },
      d = () => {
        alert(`¡Has ordenado: ${u.name}!`)
      };
    return s.jsx(Bi, {
      isOpen: e,
      onClose: t,
      title: u.name,
      children: s.jsxs("div", {
        className: "flex flex-col",
        children: [s.jsxs("div", {
          className: "relative",
          children: [s.jsx("img", {
            src: n.image,
            alt: u.name,
            className: "w-full h-64 object-cover rounded-lg mb-4"
          }), s.jsx("button", {
            onClick: l,
            className: "absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-dark/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-dark transition-colors",
            "aria-label": "Anterior plato",
            children: s.jsx(lp, {
              className: "h-6 w-6 text-tertiary dark:text-secondary"
            })
          }), s.jsx("button", {
            onClick: o,
            className: "absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-dark/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-dark transition-colors",
            "aria-label": "Siguiente plato",
            children: s.jsx(op, {
              className: "h-6 w-6 text-tertiary dark:text-secondary"
            })
          })]
        }), s.jsxs("div", {
          className: "mt-2 mb-6",
          children: [s.jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [s.jsx("h3", {
              className: "text-xl font-bold",
              children: u.name
            }), s.jsxs("span", {
              className: "text-lg font-semibold text-primary dark:text-accent",
              children: ["$", n.price.toFixed(2)]
            })]
          }), s.jsx("p", {
            className: "text-tertiary/70 dark:text-secondary/70 mb-4",
            children: u.description
          }), " ", n.tags && s.jsx("div", {
            className: "mb-6 flex flex-wrap gap-2",
            children: n.tags.map((m, h) => s.jsx("span", {
              className: `text-xs px-2 py-1 rounded-full transition-colors duration-300 ${m.toLowerCase().includes("bestseller")?"bg-amber-200 text-amber-800 hover:bg-amber-300 dark:bg-amber-800 dark:text-amber-200 dark:hover:bg-amber-700":m.toLowerCase().includes("especial")?"bg-blue-200 text-blue-800 hover:bg-blue-300 dark:bg-blue-800 dark:text-blue-200 dark:hover:bg-blue-700":m.toLowerCase().includes("picante")?"bg-red-200 text-red-800 hover:bg-red-300 dark:bg-red-800 dark:text-red-200 dark:hover:bg-red-700":m.toLowerCase().includes("vegetariana")||m.toLowerCase().includes("saludable")?"bg-green-200 text-green-800 hover:bg-green-300 dark:bg-green-800 dark:text-green-200 dark:hover:bg-green-700":m.toLowerCase().includes("premium")||m.toLowerCase().includes("gourmet")?"bg-purple-200 text-purple-800 hover:bg-purple-300 dark:bg-purple-800 dark:text-purple-200 dark:hover:bg-purple-700":m.toLowerCase().includes("tradicional")?"bg-orange-200 text-orange-800 hover:bg-orange-300 dark:bg-orange-800 dark:text-orange-200 dark:hover:bg-orange-700":h%4===0?"bg-teal-200 text-teal-800 hover:bg-teal-300 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700":h%4===1?"bg-pink-200 text-pink-800 hover:bg-pink-300 dark:bg-pink-800 dark:text-pink-200 dark:hover:bg-pink-700":h%4===2?"bg-indigo-200 text-indigo-800 hover:bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-200 dark:hover:bg-indigo-700":"bg-cyan-200 text-cyan-800 hover:bg-cyan-300 dark:bg-cyan-800 dark:text-cyan-200 dark:hover:bg-cyan-700"}`,
              children: m
            }, m))
          })]
        }), s.jsxs("button", {
          onClick: d,
          className: "w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-lg flex items-center justify-center gap-2 transition-colors",
          children: [s.jsx(mp, {
            className: "h-5 w-5"
          }), s.jsx("span", {
            children: i === "es" ? "Pedir ahora" : "Order now"
          })]
        })]
      })
    })
  },
  Qt = {
    light: "text-primary",
    dark: "dark:text-accent"
  },
  Sp = () => {
    const [e, t] = _.useState("burgers"), {
      language: n
    } = Ue(), r = at[n], [l, o] = _.useState([]), [i, a] = _.useState({}), u = $c.useRef({
      title: null,
      subtitle: null,
      categories: null,
      items: null
    }), [d, m] = _.useState(!1), [h, g] = _.useState(null), y = c => {
      g(c), m(!0)
    }, k = () => {
      m(!1), g(null)
    }, N = () => {
      if (h === null) return;
      const c = _n[e];
      g((h - 1 + c.length) % c.length)
    }, O = () => {
      if (h === null) return;
      const c = _n[e];
      g((h + 1) % c.length)
    }, f = (c, p) => {
      if (!p) return !1;
      const v = p.getBoundingClientRect(),
        w = 20,
        j = {
          left: v.left - w,
          right: v.right + w,
          top: v.top - w,
          bottom: v.bottom + w
        },
        C = c.x + c.size / 2,
        P = c.y + c.size / 2;
      return C >= j.left && C <= j.right && P >= j.top && P <= j.bottom
    };
    return _.useEffect(() => {
      const p = [s.jsx(np, {
          size: 70,
          className: `${Qt.light} ${Qt.dark}`
        }), s.jsx(fp, {
          size: 70,
          className: `${Qt.light} ${Qt.dark}`
        }), s.jsx(ip, {
          size: 70,
          className: `${Qt.light} ${Qt.dark}`
        })],
        v = () => {
          const P = Math.random() * (window.innerWidth - 70),
            A = Math.random() * (window.innerHeight - 70),
            L = Math.random() * 2 * Math.PI,
            T = .3 + Math.random() * .7,
            V = Math.cos(L) * T,
            ne = Math.sin(L) * T,
            Ee = p[Math.floor(Math.random() * p.length)];
          return {
            x: P,
            y: A,
            dx: V,
            dy: ne,
            icon: Ee,
            speed: T,
            size: 70,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - .5) * 2,
            pulsePhase: Math.random() * 2 * Math.PI,
            pulseSpeed: .5 + Math.random() * 1.5
          }
        },
        w = Array.from({
          length: 17
        }, v);
      o(w);
      let j;
      const C = () => {
        const P = {
          title: !1,
          subtitle: !1,
          categories: !1,
          items: !1
        };
        o(A => {
          const L = A.map(T => {
            let V = T.x + T.dx,
              ne = T.y + T.dy,
              Ee = T.dx,
              ie = T.dy;
            const Pe = T.size || 70;
            (V < 0 || V > window.innerWidth - Pe) && (Ee = -Ee, V = V < 0 ? 0 : window.innerWidth - Pe), (ne < 0 || ne > window.innerHeight - Pe) && (ie = -ie, ne = ne < 0 ? 0 : window.innerHeight - Pe);
            const Xe = (T.rotation + T.rotationSpeed) % 360,
              S = (T.pulsePhase + T.pulseSpeed / 60) % (2 * Math.PI);
            return {
              ...T,
              x: V,
              y: ne,
              dx: Ee,
              dy: ie,
              rotation: Xe,
              pulsePhase: S,
              hasCollided: !1
            }
          });
          for (let T = 0; T < L.length; T++) {
            const V = L[T],
              ne = V.size || 70;
            for (let Ee = T + 1; Ee < L.length; Ee++) {
              const ie = L[Ee],
                Pe = ie.size || 70,
                Xe = ie.x - V.x,
                S = ie.y - V.y,
                z = Math.sqrt(Xe * Xe + S * S),
                M = (ne + Pe) / 2;
              if (z < M) {
                V.hasCollided = !0, ie.hasCollided = !0;
                const F = M - z,
                  B = Xe / z || 0,
                  Re = S / z || 0,
                  He = ne + Pe,
                  Ht = Pe / He,
                  Ve = ne / He;
                V.x -= B * F * Ht, V.y -= Re * F * Ht, ie.x += B * F * Ve, ie.y += Re * F * Ve;
                const Ge = V.dx * B + V.dy * Re - ie.dx * B - ie.dy * Re;
                V.dx -= Ge * B, V.dy -= Ge * Re, ie.dx += Ge * B, ie.dy += Ge * Re
              }
            }
          }
          return L.forEach(T => {
            f(T, u.current.title) && (P.title = !0), f(T, u.current.subtitle) && (P.subtitle = !0), f(T, u.current.categories) && (P.categories = !0), f(T, u.current.items) && (P.items = !0)
          }), L
        }), a(P), j = requestAnimationFrame(C)
      };
      return j = requestAnimationFrame(C), () => {
        cancelAnimationFrame(j)
      }
    }, []), s.jsxs("section", {
      id: "menu",
      className: "section bg-light dark:bg-dark-content relative overflow-hidden",
      children: [" ", s.jsxs("div", {
        className: "absolute top-0 left-0 w-full h-full",
        children: [s.jsx("div", {
          className: "hidden",
          children: s.jsx("p", {
            className: "text-sm font-medium text-tertiary dark:text-secondary",
            children: "Iconos con animación independiente"
          })
        }), l.map((c, p) => s.jsx("div", {
          className: "absolute pointer-events-none",
          style: {
            transform: `translate(${c.x}px, ${c.y}px) 
                         rotate(${c.rotation||0}deg) 
                         scale(${c.pulsePhase?.9+.2*Math.sin(c.pulsePhase):1})`,
            opacity: 1,
            transition: "transform 0.1s linear"
          },
          children: c.icon
        }, p))]
      }), " ", s.jsxs("div", {
        className: "container-custom relative z-10",
        children: [s.jsxs("div", {
          className: "section-title",
          children: [s.jsx("h2", {
            ref: c => u.current.title = c,
            className: `text-tertiary dark:text-secondary transition-colors duration-300 ${i.title?"text-accent dark:text-primary mask-text":""}`,
            children: r.menu.title
          }), s.jsx("p", {
            ref: c => u.current.subtitle = c,
            className: `text-center text-tertiary/70 dark:text-secondary/70 mt-4 transition-colors duration-300 ${i.subtitle?"text-accent dark:text-primary mask-text":""}`,
            children: r.menu.subtitle
          })]
        }), s.jsx("div", {
          ref: c => u.current.categories = c,
          className: "flex flex-wrap justify-center gap-2 md:gap-4 mb-8",
          children: Object.keys(_n).map(c => s.jsx("button", {
            onClick: () => t(c),
            className: `px-4 py-2 rounded-full font-heading text-sm md:text-base transition-all duration-300 ${e===c?"bg-primary text-white shadow-md":"bg-secondary dark:bg-dark hover:bg-primary/20 dark:hover:bg-primary/20 text-tertiary dark:text-secondary"} ${i.categories?"masked-element":""}`,
            children: r.menu.categories[c]
          }, c))
        }), s.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
          children: _n[e].map((c, p) => {
            const v = r.menu.items && r.menu.items[e],
              w = v && Object.prototype.hasOwnProperty.call(v, c.id) ? v[c.id] : void 0;
            return s.jsxs("div", {
              className: "card p-4 animate-slide-up cursor-pointer",
              style: {
                animationDelay: `${p*.1}s`
              },
              onClick: () => y(p),
              children: [s.jsx("div", {
                className: "aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-lg",
                children: s.jsx("img", {
                  src: c.image,
                  alt: w ? w.name : c.name,
                  className: "w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                })
              }), s.jsxs("div", {
                className: "flex justify-between items-start",
                children: [s.jsx("h3", {
                  className: "text-xl font-bold text-tertiary dark:text-secondary",
                  children: w ? w.name : c.name
                }), s.jsxs("span", {
                  className: "text-lg font-semibold text-primary dark:text-accent",
                  children: ["$", c.price.toFixed(2)]
                })]
              }), s.jsx("p", {
                className: "mt-2 text-tertiary/70 dark:text-secondary/70",
                children: w ? w.description : c.description
              }), c.tags && s.jsx("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: c.tags.map((j, C) => s.jsx("span", {
                  className: `text-xs px-2 py-1 rounded-full transition-colors duration-300 ${j.toLowerCase().includes("bestseller")?"bg-amber-200 text-amber-800 hover:bg-amber-300 dark:bg-amber-800 dark:text-amber-200 dark:hover:bg-amber-700":j.toLowerCase().includes("especial")?"bg-blue-200 text-blue-800 hover:bg-blue-300 dark:bg-blue-800 dark:text-blue-200 dark:hover:bg-blue-700":j.toLowerCase().includes("picante")?"bg-red-200 text-red-800 hover:bg-red-300 dark:bg-red-800 dark:text-red-200 dark:hover:bg-red-700":j.toLowerCase().includes("vegetariana")||j.toLowerCase().includes("saludable")?"bg-green-200 text-green-800 hover:bg-green-300 dark:bg-green-800 dark:text-green-200 dark:hover:bg-green-700":j.toLowerCase().includes("premium")||j.toLowerCase().includes("gourmet")?"bg-purple-200 text-purple-800 hover:bg-purple-300 dark:bg-purple-800 dark:text-purple-200 dark:hover:bg-purple-700":j.toLowerCase().includes("tradicional")?"bg-orange-200 text-orange-800 hover:bg-orange-300 dark:bg-orange-800 dark:text-orange-200 dark:hover:bg-orange-700":C%4===0?"bg-teal-200 text-teal-800 hover:bg-teal-300 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700":C%4===1?"bg-pink-200 text-pink-800 hover:bg-pink-300 dark:bg-pink-800 dark:text-pink-200 dark:hover:bg-pink-700":C%4===2?"bg-indigo-200 text-indigo-800 hover:bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-200 dark:hover:bg-indigo-700":"bg-cyan-200 text-cyan-800 hover:bg-cyan-300 dark:bg-cyan-800 dark:text-cyan-200 dark:hover:bg-cyan-700"}`,
                  children: j
                }, j))
              })]
            }, c.id)
          })
        }), h !== null && s.jsx(Np, {
          isOpen: d,
          onClose: k,
          item: _n[e][h],
          category: e,
          onPrev: N,
          onNext: O
        })]
      })]
    })
  },
  Cp = () => {
    const {
      language: e
    } = Ue(), t = at[e], n = [{
      id: "premium",
      image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 16.99,
      icon: s.jsx(mc, {
        className: "h-8 w-8 text-primary dark:text-accent"
      })
    }, {
      id: "bestseller",
      image: "https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 14.99,
      icon: s.jsx(hp, {
        className: "h-8 w-8 text-primary dark:text-accent"
      })
    }, {
      id: "limited",
      image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 15.99,
      icon: s.jsx(hc, {
        className: "h-8 w-8 text-primary dark:text-accent"
      })
    }];
    return s.jsx("section", {
      id: "specialties",
      className: "section bg-secondary dark:bg-dark py-20",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [s.jsxs("div", {
          className: "section-title",
          children: [s.jsx("h2", {
            className: "text-tertiary dark:text-secondary",
            children: t.specialties.title
          }), s.jsx("p", {
            className: "text-center text-tertiary/70 dark:text-secondary/70 mt-4",
            children: t.specialties.subtitle
          })]
        }), s.jsx("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12",
          children: n.map(r => s.jsxs("div", {
            className: "card animate-fade-in",
            children: [s.jsxs("div", {
              className: "relative overflow-hidden",
              children: [s.jsx("img", {
                src: r.image,
                alt: t.specialties.items && t.specialties.items[r.id] ? t.specialties.items[r.id].name : r.id,
                className: "w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
              }), s.jsxs("div", {
                className: "absolute top-4 right-4 bg-primary dark:bg-accent text-white dark:text-tertiary font-heading font-bold py-1 px-3 rounded-full",
                children: ["$", r.price]
              })]
            }), s.jsxs("div", {
              className: "p-6",
              children: [s.jsxs("div", {
                className: "flex items-center gap-3 mb-3",
                children: [r.icon, s.jsx("h3", {
                  className: "text-xl font-bold text-tertiary dark:text-secondary",
                  children: t.specialties.items && t.specialties.items[r.id] ? t.specialties.items[r.id].name : r.id
                })]
              }), s.jsx("p", {
                className: "text-tertiary/70 dark:text-secondary/70",
                children: t.specialties.items && t.specialties.items[r.id] ? t.specialties.items[r.id].description : ""
              }), s.jsx("button", {
                className: "btn-primary mt-4 w-full",
                children: t.specialties.orderNow
              })]
            })]
          }, r.id))
        })]
      })
    })
  },
  Ep = () => {
    const {
      language: e
    } = Ue(), t = at[e], n = [{
      icon: s.jsx(Lr, {
        className: "h-5 w-5 text-primary dark:text-accent"
      }),
      text: t.about.features.freshIngredients
    }, {
      icon: s.jsx(Lr, {
        className: "h-5 w-5 text-primary dark:text-accent"
      }),
      text: t.about.features.grassFedBeef
    }, {
      icon: s.jsx(Lr, {
        className: "h-5 w-5 text-primary dark:text-accent"
      }),
      text: t.about.features.freshBread
    }, {
      icon: s.jsx(Lr, {
        className: "h-5 w-5 text-primary dark:text-accent"
      }),
      text: t.about.features.homemadeSauces
    }], r = [{
      icon: s.jsx(yp, {
        className: "h-8 w-8 text-white"
      }),
      title: t.about.values.quality.title,
      description: t.about.values.quality.description
    }, {
      icon: s.jsx(mc, {
        className: "h-8 w-8 text-white"
      }),
      title: t.about.values.tradition.title,
      description: t.about.values.tradition.description
    }, {
      icon: s.jsx(up, {
        className: "h-8 w-8 text-white"
      }),
      title: t.about.values.sustainability.title,
      description: t.about.values.sustainability.description
    }];
    return s.jsx("section", {
      id: "about",
      className: "section bg-light dark:bg-dark-content",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [s.jsx("div", {
          className: "section-title",
          children: s.jsx("h2", {
            className: "text-tertiary dark:text-secondary",
            children: t.about.title
          })
        }), s.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          children: [s.jsxs("div", {
            className: "order-2 lg:order-1 animate-slide-up",
            children: [s.jsx("h3", {
              className: "text-3xl font-bold mb-4 text-tertiary dark:text-secondary",
              children: t.about.historyTitle
            }), s.jsx("p", {
              className: "mb-4 text-tertiary/80 dark:text-secondary/80",
              children: t.about.historyText1
            }), s.jsx("p", {
              className: "mb-6 text-tertiary/80 dark:text-secondary/80",
              children: t.about.historyText2
            }), s.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",
              children: n.map((l, o) => s.jsxs("div", {
                className: "flex items-center gap-2",
                children: [l.icon, s.jsx("span", {
                  className: "text-tertiary dark:text-secondary",
                  children: l.text
                })]
              }, o))
            })]
          }), s.jsx("div", {
            className: "order-1 lg:order-2 animate-fade-in",
            children: s.jsxs("div", {
              className: "relative",
              children: [s.jsx("img", {
                src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Equipo de MazaBurguer",
                className: "rounded-lg shadow-xl w-full h-auto"
              }), s.jsxs("div", {
                className: "absolute -bottom-10 -left-10 bg-white dark:bg-dark-content p-4 rounded-lg shadow-lg hidden md:block",
                children: [s.jsx("p", {
                  className: "text-tertiary dark:text-secondary font-heading font-bold",
                  children: "+10,000"
                }), s.jsx("p", {
                  className: "text-tertiary/70 dark:text-secondary/70 text-sm",
                  children: t.about.satisfiedCustomers
                })]
              })]
            })
          })]
        }), s.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-16",
          children: r.map((l, o) => s.jsxs("div", {
            className: "bg-primary dark:bg-tertiary rounded-lg p-6 text-center animate-slide-up",
            style: {
              animationDelay: `${o*.1}s`
            },
            children: [s.jsx("div", {
              className: "inline-flex items-center justify-center bg-tertiary dark:bg-primary rounded-full p-3 mb-4",
              children: l.icon
            }), s.jsx("h4", {
              className: "text-xl font-bold text-white mb-2",
              children: l.title
            }), s.jsx("p", {
              className: "text-white/80",
              children: l.description
            })]
          }, o))
        })]
      })
    })
  },
  Pp = () => {
    const {
      language: e
    } = Ue(), t = at[e].location, n = [{
      id: "centro",
      name: "MazaBurguer Centro",
      address: "Av. Principal 123, Centro",
      phone: "+34 55 1234 5678",
      hours: t.hours.monThu + ", " + t.hours.friSun,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661095969867!2d-99.16869722474951!3d19.426976941808777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1701434821037!5m2!1ses-419!2smx"
    }, {
      id: "norte",
      name: "MazaBurguer Norte",
      address: "Blvd. Norte 456, Polanco",
      phone: "+34 55 2345 6789",
      hours: t.hours.daily,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.198326349215!2d-99.20162842474898!3d19.444235441144366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2020285aa7cfd%3A0x3cbcc1cdb3968f8d!2sMuseo%20Soumaya!5e0!3m2!1ses-419!2smx!4v1701434940198!5m2!1ses-419!2smx"
    }];
    return s.jsx("section", {
      id: "location",
      className: "section bg-secondary dark:bg-dark",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [s.jsxs("div", {
          className: "section-title",
          children: [s.jsx("h2", {
            className: "text-tertiary dark:text-secondary",
            children: t.title
          }), s.jsx("p", {
            className: "text-center text-tertiary/70 dark:text-secondary/70 mt-4",
            children: t.subtitle
          })]
        }), s.jsx("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: n.map(r => s.jsxs("div", {
            className: "card overflow-hidden shadow-lg animate-fade-in",
            children: [s.jsx("div", {
              className: "h-64 w-full",
              children: s.jsx("iframe", {
                src: r.map,
                width: "100%",
                height: "100%",
                style: {
                  border: 0
                },
                allowFullScreen: !0,
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                title: `Mapa de ${r.name}`
              })
            }), s.jsxs("div", {
              className: "p-6",
              children: [s.jsxs("h3", {
                className: "text-2xl font-bold mb-4 text-tertiary dark:text-secondary",
                children: [r.name, " "]
              }), s.jsxs("div", {
                className: "space-y-3",
                children: [s.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [s.jsx(gc, {
                    className: "h-5 w-5 text-primary dark:text-accent shrink-0 mt-0.5"
                  }), s.jsx("p", {
                    className: "text-tertiary/80 dark:text-secondary/80",
                    children: r.address
                  })]
                }), s.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [s.jsx(yc, {
                    className: "h-5 w-5 text-primary dark:text-accent shrink-0 mt-0.5"
                  }), s.jsx("p", {
                    className: "text-tertiary/80 dark:text-secondary/80",
                    children: r.phone
                  })]
                }), s.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [s.jsx(hc, {
                    className: "h-5 w-5 text-primary dark:text-accent shrink-0 mt-0.5"
                  }), s.jsx("p", {
                    className: "text-tertiary/80 dark:text-secondary/80",
                    children: r.hours
                  })]
                })]
              }), s.jsxs("a", {
                href: `https://maps.google.com/?q=${r.address}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-secondary mt-6 inline-block",
                children: [t.directions, " "]
              })]
            })]
          }, r.id))
        })]
      })
    })
  },
  zp = () => {
    const {
      language: e
    } = Ue(), t = at[e].contact, [n, r] = _.useState({
      name: "",
      email: "",
      phone: "",
      people: "",
      date: "",
      time: "",
      message: ""
    }), [l, o] = _.useState({}), [i, a] = _.useState(!1), [u, d] = _.useState(!1), m = y => {
      const {
        name: k,
        value: N
      } = y.target;
      r({
        ...n,
        [k]: N
      }), l[k] && o({
        ...l,
        [k]: ""
      })
    }, h = () => {
      const y = {};
      if (n.name.trim() || (y.name = t.validation.nameRequired), n.email.trim() ? /\S+@\S+\.\S+/.test(n.email) || (y.email = t.validation.emailInvalid) : y.email = t.validation.emailRequired, n.phone.trim() ? /^\+?\d{7,15}$/.test(n.phone.replace(/\s+/g, "")) || (y.phone = e === "es" ? "Teléfono inválido" : "Invalid phone number") : y.phone = t.validation.phoneRequired, n.people ? /^([1-6]\+?)$/.test(n.people) || (y.people = e === "es" ? "Selecciona un valor válido" : "Select a valid value") : y.people = t.validation.peopleRequired, !n.date) y.date = t.validation.dateRequired;
      else {
        const k = new Date;
        new Date(n.date) < new Date(k.getFullYear(), k.getMonth(), k.getDate()) && (y.date = e === "es" ? "La fecha no puede ser pasada" : "Date cannot be in the past")
      }
      return n.time || (y.time = t.validation.timeRequired), o(y), Object.keys(y).length === 0
    }, g = y => {
      y.preventDefault(), h() && (d(!0), setTimeout(() => {
        d(!1), a(!0), r({
          name: "",
          email: "",
          phone: "",
          people: "",
          date: "",
          time: "",
          message: ""
        })
      }, 1500))
    };
    return s.jsx("section", {
      id: "contact",
      className: "section bg-light dark:bg-dark-content",
      children: s.jsxs("div", {
        className: "container-custom",
        children: [s.jsxs("div", {
          className: "section-title",
          children: [s.jsxs("h2", {
            className: "text-tertiary dark:text-secondary",
            children: [t.title, " "]
          }), s.jsxs("p", {
            className: "text-center text-tertiary/70 dark:text-secondary/70 mt-4",
            children: [t.subtitle, " "]
          })]
        }), s.jsx("div", {
          className: "max-w-3xl mx-auto mt-8",
          children: i ? s.jsxs("div", {
            className: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6 text-center animate-fade-in",
            children: [s.jsx(rp, {
              className: "h-16 w-16 text-green-500 mx-auto mb-4"
            }), s.jsxs("h3", {
              className: "text-2xl font-bold text-green-800 dark:text-green-300 mb-2",
              children: [t.success.title, " "]
            }), s.jsxs("p", {
              className: "text-green-700 dark:text-green-400 mb-4",
              children: [t.success.message, " "]
            }), s.jsxs("button", {
              onClick: () => a(!1),
              className: "px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
              children: [t.success.newReservation, " "]
            })]
          }) : s.jsxs("form", {
            onSubmit: g,
            className: "bg-white dark:bg-dark-content rounded-lg shadow-lg p-6 md:p-8 animate-fade-in",
            children: [s.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [s.jsxs("div", {
                children: [s.jsxs("label", {
                  htmlFor: "name",
                  className: "block text-tertiary dark:text-secondary font-medium mb-1",
                  children: [t.form.fullName, " "]
                }), s.jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  value: n.name,
                  onChange: m,
                  className: `w-full px-4 py-2 rounded-lg border ${l.name?"border-red-500 dark:border-red-400":"border-light-gray dark:border-gray-600"} bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-tertiary dark:text-secondary`
                }), l.name && s.jsxs("p", {
                  className: "text-red-500 dark:text-red-400 text-sm mt-1 flex items-center",
                  children: [s.jsx(Wt, {
                    className: "h-4 w-4 mr-1"
                  }), " ", l.name]
                })]
              }), s.jsxs("div", {
                children: [s.jsxs("label", {
                  htmlFor: "email",
                  className: "block text-tertiary dark:text-secondary font-medium mb-1",
                  children: [t.form.email, " "]
                }), s.jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  value: n.email,
                  onChange: m,
                  className: `w-full px-4 py-2 rounded-lg border ${l.email?"border-red-500 dark:border-red-400":"border-light-gray dark:border-gray-600"} bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-tertiary dark:text-secondary`
                }), l.email && s.jsxs("p", {
                  className: "text-red-500 dark:text-red-400 text-sm mt-1 flex items-center",
                  children: [s.jsx(Wt, {
                    className: "h-4 w-4 mr-1"
                  }), " ", l.email]
                })]
              }), s.jsxs("div", {
                children: [s.jsxs("label", {
                  htmlFor: "phone",
                  className: "block text-tertiary dark:text-secondary font-medium mb-1",
                  children: [t.form.phone, " "]
                }), s.jsx("input", {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  value: n.phone,
                  onChange: m,
                  className: `w-full px-4 py-2 rounded-lg border ${l.phone?"border-red-500 dark:border-red-400":"border-light-gray dark:border-gray-600"} bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-tertiary dark:text-secondary`
                }), l.phone && s.jsxs("p", {
                  className: "text-red-500 dark:text-red-400 text-sm mt-1 flex items-center",
                  children: [s.jsx(Wt, {
                    className: "h-4 w-4 mr-1"
                  }), " ", l.phone]
                })]
              }), s.jsxs("div", {
                children: [s.jsxs("label", {
                  htmlFor: "people",
                  className: "block text-tertiary dark:text-secondary font-medium mb-1",
                  children: [t.form.people, " "]
                }), s.jsxs("select", {
                  id: "people",
                  name: "people",
                  value: n.people,
                  onChange: m,
                  className: `w-full px-4 py-2 rounded-lg border ${l.people?"border-red-500 dark:border-red-400":"border-light-gray dark:border-gray-600"} bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-tertiary dark:text-secondary`,
                  children: [s.jsx("option", {
                    value: "",
                    children: t.form.select
                  }), " ", s.jsx("option", {
                    value: "1",
                    children: "1 persona"
                  }), s.jsx("option", {
                    value: "2",
                    children: "2 personas"
                  }), s.jsx("option", {
                    value: "3",
                    children: "3 personas"
                  }), s.jsx("option", {
                    value: "4",
                    children: "4 personas"
                  }), s.jsx("option", {
                    value: "5",
                    children: "5 personas"
                  }), s.jsx("option", {
                    value: "6+",
                    children: "6+ personas"
                  })]
                }), l.people && s.jsxs("p", {
                  className: "text-red-500 dark:text-red-400 text-sm mt-1 flex items-center",
                  children: [s.jsx(Wt, {
                    className: "h-4 w-4 mr-1"
                  }), " ", l.people]
                })]
              }), s.jsxs("div", {
                children: [s.jsxs("label", {
                  htmlFor: "date",
                  className: "block text-tertiary dark:text-secondary font-medium mb-1",
                  children: [t.form.date, " "]
                }), s.jsx("input", {
                  type: "date",
                  id: "date",
                  name: "date",
                  value: n.date,
                  onChange: m,
                  className: `w-full px-4 py-2 rounded-lg border ${l.date?"border-red-500 dark:border-red-400":"border-light-gray dark:border-gray-600"} bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-tertiary dark:text-secondary`,
                  min: new Date().toISOString().split("T")[0]
                }), l.date && s.jsxs("p", {
                  className: "text-red-500 dark:text-red-400 text-sm mt-1 flex items-center",
                  children: [s.jsx(Wt, {
                    className: "h-4 w-4 mr-1"
                  }), " ", l.date]
                })]
              }), s.jsxs("div", {
                children: [s.jsxs("label", {
                  htmlFor: "time",
                  className: "block text-tertiary dark:text-secondary font-medium mb-1",
                  children: [t.form.time, " "]
                }), s.jsxs("select", {
                  id: "time",
                  name: "time",
                  value: n.time,
                  onChange: m,
                  className: `w-full px-4 py-2 rounded-lg border ${l.time?"border-red-500 dark:border-red-400":"border-light-gray dark:border-gray-600"} bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-tertiary dark:text-secondary`,
                  children: [s.jsx("option", {
                    value: "",
                    children: t.form.select
                  }), " ", s.jsx("option", {
                    value: "12:00",
                    children: "12:00"
                  }), s.jsx("option", {
                    value: "13:00",
                    children: "13:00"
                  }), s.jsx("option", {
                    value: "14:00",
                    children: "14:00"
                  }), s.jsx("option", {
                    value: "15:00",
                    children: "15:00"
                  }), s.jsx("option", {
                    value: "18:00",
                    children: "18:00"
                  }), s.jsx("option", {
                    value: "19:00",
                    children: "19:00"
                  }), s.jsx("option", {
                    value: "20:00",
                    children: "20:00"
                  }), s.jsx("option", {
                    value: "21:00",
                    children: "21:00"
                  })]
                }), l.time && s.jsxs("p", {
                  className: "text-red-500 dark:text-red-400 text-sm mt-1 flex items-center",
                  children: [s.jsx(Wt, {
                    className: "h-4 w-4 mr-1"
                  }), " ", l.time]
                })]
              })]
            }), s.jsxs("div", {
              className: "mt-6",
              children: [s.jsxs("label", {
                htmlFor: "message",
                className: "block text-tertiary dark:text-secondary font-medium mb-1",
                children: [t.form.message, " "]
              }), s.jsx("textarea", {
                id: "message",
                name: "message",
                rows: 4,
                value: n.message,
                onChange: m,
                className: "w-full px-4 py-2 rounded-lg border border-light-gray dark:border-gray-600 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent text-tertiary dark:text-secondary"
              })]
            }), s.jsx("div", {
              className: "mt-6",
              children: s.jsx("button", {
                type: "submit",
                disabled: u,
                className: `btn-primary w-full flex items-center justify-center ${u?"opacity-70 cursor-not-allowed":""}`,
                children: u ? s.jsxs("span", {
                  className: "flex items-center",
                  children: [s.jsxs("svg", {
                    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [s.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4"
                    }), s.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })]
                  }), t.form.processing, " "]
                }) : s.jsxs("span", {
                  className: "flex items-center",
                  children: [s.jsx(pp, {
                    className: "mr-2 h-5 w-5"
                  }), " ", t.form.submit, " "]
                })
              })
            }), s.jsxs("p", {
              className: "text-tertiary/60 dark:text-secondary/60 text-sm mt-4",
              children: [t.form.requiredFields, " "]
            })]
          })
        })]
      })
    })
  },
  Lp = ({
    isOpen: e,
    onClose: t
  }) => {
    const {
      language: n
    } = Ue(), r = {
      es: s.jsxs(s.Fragment, {
        children: [s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "1. Aceptación de los Términos"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Al acceder y utilizar los servicios de MazaBurguer, usted acepta cumplir y estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice nuestros servicios."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "2. Uso del Servicio"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Nuestros servicios están destinados a mayores de edad. Al realizar una reserva, usted confirma que los datos proporcionados son correctos y acepta recibir comunicaciones relacionadas con su reserva."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "3. Política de Reservas"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Las reservas están sujetas a disponibilidad. Nos reservamos el derecho a cancelar o modificar reservas en caso de circunstancias imprevistas, comprometiéndonos a notificar al cliente con la mayor antelación posible."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "4. Contenido del Sitio"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logos, imágenes, audio, video y software, está protegido por las leyes de propiedad intelectual y pertenece a MazaBurguer o a sus proveedores de contenido."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "5. Limitación de Responsabilidad"
        }), s.jsx("p", {
          className: "mb-4",
          children: "MazaBurguer no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "6. Modificaciones a los Términos"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuo de nuestros servicios después de cualquier cambio constituye la aceptación de dichas modificaciones."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "7. Ley Aplicable"
        }), s.jsx("p", {
          children: "Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes locales, sin consideración a sus disposiciones sobre conflicto de leyes."
        })]
      }),
      en: s.jsxs(s.Fragment, {
        children: [s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "1. Acceptance of Terms"
        }), s.jsx("p", {
          className: "mb-4",
          children: "By accessing and using MazaBurguer services, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any of these terms, we recommend that you do not use our services."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "2. Service Usage"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Our services are intended for adults. When making a reservation, you confirm that the provided information is correct and agree to receive communications related to your reservation."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "3. Reservation Policy"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Reservations are subject to availability. We reserve the right to cancel or modify reservations in case of unforeseen circumstances, committing to notify the customer as far in advance as possible."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "4. Website Content"
        }), s.jsx("p", {
          className: "mb-4",
          children: "All content on this website, including text, graphics, logos, images, audio, video, and software, is protected by intellectual property laws and belongs to MazaBurguer or its content providers."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "5. Limitation of Liability"
        }), s.jsx("p", {
          className: "mb-4",
          children: "MazaBurguer shall not be liable for direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "6. Modifications to the Terms"
        }), s.jsx("p", {
          className: "mb-4",
          children: "We reserve the right to modify these terms at any time. Modifications will take effect immediately after being posted on the website. Continued use of our services after any changes constitutes acceptance of such modifications."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "7. Applicable Law"
        }), s.jsx("p", {
          children: "These terms and conditions shall be governed and construed in accordance with local laws, without regard to their conflict of law provisions."
        })]
      })
    };
    return s.jsx(Bi, {
      isOpen: e,
      onClose: t,
      title: n === "es" ? "Términos y Condiciones" : "Terms and Conditions",
      children: s.jsx("div", {
        className: "terms-content",
        children: r[n]
      })
    })
  },
  _p = ({
    isOpen: e,
    onClose: t
  }) => {
    const {
      language: n
    } = Ue(), r = {
      es: s.jsxs(s.Fragment, {
        children: [s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "Introducción"
        }), s.jsx("p", {
          className: "mb-4",
          children: "En MazaBurguer nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información personal que usted nos proporciona."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "1. Información que Recopilamos"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Podemos recopilar la siguiente información personal cuando realiza una reserva o se suscribe a nuestro boletín:"
        }), s.jsxs("ul", {
          className: "list-disc pl-6 mb-4",
          children: [s.jsx("li", {
            children: "Nombre y apellidos"
          }), s.jsx("li", {
            children: "Información de contacto, incluyendo dirección de correo electrónico y número telefónico"
          }), s.jsx("li", {
            children: "Información demográfica como preferencias y intereses"
          }), s.jsx("li", {
            children: "Otra información relevante para encuestas de clientes y/u ofertas"
          })]
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "2. Uso de la Información"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Utilizamos esta información para:"
        }), s.jsxs("ul", {
          className: "list-disc pl-6 mb-4",
          children: [s.jsx("li", {
            children: "Gestionar sus reservas y proporcionar un mejor servicio"
          }), s.jsx("li", {
            children: "Comunicarnos con usted sobre su reserva"
          }), s.jsx("li", {
            children: "Enviar promociones y ofertas especiales (si ha dado su consentimiento)"
          }), s.jsx("li", {
            children: "Mejorar nuestros productos y servicios"
          })]
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "3. Seguridad"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Estamos comprometidos con garantizar que su información esté segura. Para evitar el acceso o divulgación no autorizados, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar la información que recopilamos en línea."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "4. Cookies"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Nuestro sitio web utiliza cookies para mejorar su experiencia. Las cookies son pequeños archivos que se almacenan en el disco duro de su computadora para identificar sus preferencias y mejorar nuestra web."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "5. Enlaces a Otros Sitios Web"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Nuestro sitio web puede contener enlaces a otros sitios. Sin embargo, una vez que utilice estos enlaces para salir de nuestro sitio, no tenemos control sobre ese sitio web. Por lo tanto, no podemos ser responsables de la protección y privacidad de cualquier información que proporcione al visitar dichos sitios."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "6. Control de su Información Personal"
        }), s.jsx("p", {
          children: "Puede restringir la recopilación o el uso de su información personal contactando directamente con nosotros. Tiene derecho a solicitar una copia de la información personal que tenemos sobre usted y a solicitar su corrección o eliminación."
        })]
      }),
      en: s.jsxs(s.Fragment, {
        children: [s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "Introduction"
        }), s.jsx("p", {
          className: "mb-4",
          children: "At MazaBurguer, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect the personal information you provide to us."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "1. Information We Collect"
        }), s.jsx("p", {
          className: "mb-4",
          children: "We may collect the following personal information when you make a reservation or subscribe to our newsletter:"
        }), s.jsxs("ul", {
          className: "list-disc pl-6 mb-4",
          children: [s.jsx("li", {
            children: "Name and surname"
          }), s.jsx("li", {
            children: "Contact information including email address and phone number"
          }), s.jsx("li", {
            children: "Demographic information such as preferences and interests"
          }), s.jsx("li", {
            children: "Other information relevant to customer surveys and/or offers"
          })]
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "2. Use of Information"
        }), s.jsx("p", {
          className: "mb-4",
          children: "We use this information to:"
        }), s.jsxs("ul", {
          className: "list-disc pl-6 mb-4",
          children: [s.jsx("li", {
            children: "Manage your reservations and provide better service"
          }), s.jsx("li", {
            children: "Communicate with you about your reservation"
          }), s.jsx("li", {
            children: "Send promotions and special offers (if you have given consent)"
          }), s.jsx("li", {
            children: "Improve our products and services"
          })]
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "3. Security"
        }), s.jsx("p", {
          className: "mb-4",
          children: "We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have implemented suitable physical, electronic, and managerial procedures to safeguard the information we collect online."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "4. Cookies"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Our website uses cookies to enhance your experience. Cookies are small files stored on your computer's hard drive to identify your preferences and improve our website."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "5. Links to Other Websites"
        }), s.jsx("p", {
          className: "mb-4",
          children: "Our website may contain links to other sites. However, once you use these links to leave our site, we do not have control over that website. Therefore, we cannot be responsible for the protection and privacy of any information you provide while visiting such sites."
        }), s.jsx("h4", {
          className: "font-bold text-lg mb-3",
          children: "6. Control of Your Personal Information"
        }), s.jsx("p", {
          children: "You may restrict the collection or use of your personal information by contacting us directly. You have the right to request a copy of the personal information we hold about you and to request correction or deletion of this information."
        })]
      })
    };
    return s.jsx(Bi, {
      isOpen: e,
      onClose: t,
      title: n === "es" ? "Política de Privacidad" : "Privacy Policy",
      children: s.jsx("div", {
        className: "privacy-content",
        children: r[n]
      })
    })
  },
  Mp = () => {
    const e = new Date().getFullYear(),
      {
        language: t
      } = Ue(),
      n = at[t],
      [r, l] = _.useState(!1),
      [o, i] = _.useState(!1),
      a = d => {
        d.preventDefault(), l(!0)
      },
      u = d => {
        d.preventDefault(), i(!0)
      };
    return s.jsxs("footer", {
      className: "bg-tertiary text-secondary py-12 w-full",
      children: [s.jsxs("div", {
        className: "container-custom",
        children: [s.jsxs("div", {
          className: "footer-blocks",
          children: [s.jsxs("div", {
            className: "flex flex-col items-center md:items-start space-y-4 flex-1 min-w-0",
            children: [s.jsxs("div", {
              className: "flex items-center",
              children: [s.jsx("img", {
                src: jc,
                alt: "MazaBurguer Logo",
                className: "h-10 w-auto"
              }), s.jsx("span", {
                className: "ml-2 text-xl font-heading font-bold",
                children: "MazaBurguer"
              })]
            }), s.jsx("p", {
              className: "text-secondary/80 text-center md:text-left w-full break-words",
              children: n.footer.description
            }), s.jsxs("div", {
              className: "flex space-x-4 justify-center md:justify-start",
              children: [s.jsx("a", {
                href: "#",
                className: "text-secondary hover:text-accent transition-colors",
                "aria-label": "Facebook",
                children: s.jsx(sp, {
                  className: "h-5 w-5"
                })
              }), s.jsx("a", {
                href: "#",
                className: "text-secondary hover:text-accent transition-colors",
                "aria-label": "Instagram",
                children: s.jsx(ap, {
                  className: "h-5 w-5"
                })
              }), s.jsx("a", {
                href: "#",
                className: "text-secondary hover:text-accent transition-colors",
                "aria-label": "Twitter",
                children: s.jsx(gp, {
                  className: "h-5 w-5"
                })
              })]
            })]
          }), s.jsxs("div", {
            className: "flex flex-col items-center md:items-start flex-1 min-w-0",
            children: [s.jsx("h4", {
              className: "font-heading font-bold text-xl mb-4",
              style: {
                color: document.documentElement.classList.contains("dark") ? void 0 : "#ffc300"
              },
              children: n.footer.contactUs
            }), s.jsxs("ul", {
              className: "space-y-4",
              children: [s.jsxs("li", {
                className: "flex items-start",
                children: [s.jsx(gc, {
                  className: "h-5 w-5 text-accent shrink-0 mt-0.5 mr-2"
                }), s.jsx("span", {
                  className: "text-secondary/80",
                  children: "Av. Principal 123, Centro"
                })]
              }), s.jsxs("li", {
                className: "flex items-start",
                children: [s.jsx(yc, {
                  className: "h-5 w-5 text-accent shrink-0 mt-0.5 mr-2"
                }), s.jsx("span", {
                  className: "text-secondary/80",
                  children: "+52 55 1234 5678"
                })]
              }), s.jsxs("li", {
                className: "flex items-start",
                children: [s.jsx(cp, {
                  className: "h-5 w-5 text-accent shrink-0 mt-0.5 mr-2"
                }), s.jsx("span", {
                  className: "text-secondary/80",
                  children: "info@mazaburguer.com"
                })]
              })]
            })]
          }), s.jsxs("div", {
            className: "flex flex-col items-center md:items-start flex-1 min-w-0",
            children: [s.jsx("h4", {
              className: "font-heading font-bold text-xl mb-4",
              style: {
                color: document.documentElement.classList.contains("dark") ? void 0 : "#ffc300"
              },
              children: n.footer.hours
            }), s.jsxs("ul", {
              className: "space-y-2",
              children: [s.jsx("li", {
                className: "text-secondary/80",
                children: n.footer.schedule.monThu
              }), s.jsx("li", {
                className: "text-secondary/80",
                children: n.footer.schedule.friSat
              }), s.jsx("li", {
                className: "text-secondary/80",
                children: n.footer.schedule.sun
              })]
            }), s.jsx("a", {
              href: "#contact",
              className: "inline-block mt-4 px-5 py-2 bg-primary text-white rounded-lg font-heading text-sm uppercase hover:bg-opacity-90 transition-colors",
              children: n.footer.bookNow
            })]
          })]
        }), s.jsxs("div", {
          className: "border-t border-secondary/20 mt-12 pt-6 flex flex-col md:flex-row md:justify-between items-center",
          children: [s.jsxs("p", {
            className: "text-secondary/60 text-sm",
            children: ["© ", e, " MazaBurguer. ", n.footer.rights]
          }), s.jsxs("div", {
            className: "mt-4 md:mt-0",
            children: [s.jsx("a", {
              href: "#",
              onClick: a,
              className: "text-secondary/60 hover:text-accent text-sm mr-4 transition-colors",
              children: n.footer.termsConditions
            }), s.jsx("a", {
              href: "#",
              onClick: u,
              className: "text-secondary/60 hover:text-accent text-sm transition-colors",
              children: n.footer.privacyPolicy
            })]
          })]
        })]
      }), s.jsx(Lp, {
        isOpen: r,
        onClose: () => l(!1)
      }), s.jsx(_p, {
        isOpen: o,
        onClose: () => i(!1)
      })]
    })
  },
  Tp = () => {
    const [e, t] = _.useState(!1);
    _.useEffect(() => {
      const r = () => {
        window.pageYOffset > 300 ? t(!0) : t(!1)
      };
      return window.addEventListener("scroll", r), () => window.removeEventListener("scroll", r)
    }, []);
    const n = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    };
    return s.jsx("button", {
      className: `fixed bottom-6 right-6 p-3 rounded-full bg-primary dark:bg-accent text-white dark:text-tertiary shadow-lg transition-all duration-300 z-30 ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,
      onClick: n,
      "aria-label": "Volver arriba",
      children: s.jsx(tp, {
        className: "h-5 w-5"
      })
    })
  };

function bp() {
  const [e, t] = _.useState(!1);
  return _.useEffect(() => {
    const n = () => {
      const r = window.scrollY > 50;
      r !== e && t(r)
    };
    return window.addEventListener("scroll", n), () => {
      window.removeEventListener("scroll", n)
    }
  }, [e]), s.jsx(vp, {
    children: s.jsx(xp, {
      children: s.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [s.jsx(kp, {
          scrolled: e
        }), s.jsxs("main", {
          children: [s.jsx(jp, {}), s.jsx(Sp, {}), s.jsx(Cp, {}), s.jsx(Ep, {}), s.jsx(Pp, {}), s.jsx(zp, {})]
        }), s.jsx(Mp, {}), s.jsx(Tp, {})]
      })
    })
  })
}
pc(document.getElementById("root")).render(s.jsx(_.StrictMode, {
  children: s.jsx(bp, {})
}));
