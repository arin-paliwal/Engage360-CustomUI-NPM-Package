import Fe, { useState as te, useEffect as vr } from "react";
var ne = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function pr() {
  if (we)
    return M;
  we = 1;
  var g = Fe, y = Symbol.for("react.element"), x = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, w = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(S, f, P) {
    var v, _ = {}, O = null, d = null;
    P !== void 0 && (O = "" + P), f.key !== void 0 && (O = "" + f.key), f.ref !== void 0 && (d = f.ref);
    for (v in f)
      E.call(f, v) && !A.hasOwnProperty(v) && (_[v] = f[v]);
    if (S && S.defaultProps)
      for (v in f = S.defaultProps, f)
        _[v] === void 0 && (_[v] = f[v]);
    return { $$typeof: y, type: S, key: O, ref: d, props: _, _owner: w.current };
  }
  return M.Fragment = x, M.jsx = j, M.jsxs = j, M;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function gr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Fe, y = Symbol.for("react.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), S = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), h = Symbol.iterator, m = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = h && e[h] || e[m];
      return typeof r == "function" ? r : null;
    }
    var C = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, De = !1, Ie = !1, $e = !1, We = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === A || We || e === w || e === P || e === v || $e || e === d || Ae || De || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === _ || e.$$typeof === j || e.$$typeof === S || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Be(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case x:
          return "Portal";
        case A:
          return "Profiler";
        case w:
          return "StrictMode";
        case P:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return oe(r) + ".Consumer";
          case j:
            var t = e;
            return oe(t._context) + ".Provider";
          case f:
            return Be(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case O: {
            var i = e, s = i._payload, o = i._init;
            try {
              return T(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, W = 0, ie, se, ue, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Me() {
      {
        if (W === 0) {
          ie = console.log, se = console.info, ue = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ne() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ie
            }),
            info: F({}, e, {
              value: se
            }),
            warn: F({}, e, {
              value: ue
            }),
            error: F({}, e, {
              value: le
            }),
            group: F({}, e, {
              value: ce
            }),
            groupCollapsed: F({}, e, {
              value: fe
            }),
            groupEnd: F({}, e, {
              value: de
            })
          });
        }
        W < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = C.ReactCurrentDispatcher, G;
    function L(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var X = !1, V;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Le();
    }
    function pe(e, r) {
      if (!e || X)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = K.current, K.current = null, Me();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, l = p.length - 1; u >= 1 && l >= 0 && a[u] !== p[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== p[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== p[l]) {
                    var R = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, R), R;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        X = !1, K.current = s, Ne(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", k = I ? L(I) : "";
      return typeof e == "function" && V.set(e, k), k;
    }
    function Ve(e, r, t) {
      return pe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ue(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case P:
          return L("Suspense");
        case v:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ve(e.render);
          case _:
            return U(e.type, r, t);
          case O: {
            var n = e, i = n._payload, s = n._init;
            try {
              return U(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ge = {}, be = C.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var s = Function.call.bind(Y);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (J(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), J(null)), a instanceof Error && !(a.message in ge) && (ge[a.message] = !0, J(i), c("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function ye(e) {
      if (Ge(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), he(e);
    }
    var B = C.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, me, H;
    H = {};
    function ze(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var t = T(B.current.type);
        H[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(B.current.type), e.ref), H[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          me || (me = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (ye(t), a = "" + t), He(r) && (ye(r.key), a = "" + r.key), ze(r) && (p = r.ref, Ze(r, i));
        for (s in r)
          Y.call(r, s) && !Xe.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, l), p && er(o, l);
        }
        return rr(e, a, p, i, n, B.current, o);
      }
    }
    var Z = C.ReactCurrentOwner, Re = C.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function _e() {
      {
        if (Z.current) {
          var e = T(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ce = {};
    function ar(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + T(e._owner.type) + "."), D(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && xe(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = $(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              ee(o.value) && xe(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var i = T(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Se = {};
    function Oe(e, r, t, n, i, s) {
      {
        var o = Ye(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = nr(i);
          p ? a += p : a += _e();
          var u;
          e === null ? u = "null" : z(e) ? u = "array" : e !== void 0 && e.$$typeof === y ? (u = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = tr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var R = r.children;
          if (R !== void 0)
            if (n)
              if (z(R)) {
                for (var I = 0; I < R.length; I++)
                  Te(R[I], e);
                Object.freeze && Object.freeze(R);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(R, e);
        }
        if (Y.call(r, "key")) {
          var k = T(e), b = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), re = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[k + re]) {
            var fr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, k, fr, k), Se[k + re] = !0;
          }
        }
        return e === E ? ir(l) : or(l), l;
      }
    }
    function sr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var lr = ur, cr = sr;
    N.Fragment = E, N.jsx = lr, N.jsxs = cr;
  }()), N;
}
process.env.NODE_ENV === "production" ? ne.exports = pr() : ne.exports = gr();
var q = ne.exports;
const hr = ({
  children: g,
  variant: y = "primary",
  onClick: x
}) => {
  const E = "flex items-center gap-2 text-sm px-4 py-[.6rem] rounded-lg ", w = {
    primary: "bg-[#3C41E9] text-white hover:opacity-90",
    secondary: "bg-[#F3F4F6] text-[#3C41E9] hover:bg-[#E5E7EB]"
  };
  return /* @__PURE__ */ q.jsx("button", { className: `${E} ${w[y]}`, onClick: x, children: g });
}, yr = ({ placeholder: g, type: y = "text", value: x, onChange: E }) => /* @__PURE__ */ q.jsx(
  "input",
  {
    type: y,
    placeholder: g,
    value: x,
    onChange: E,
    className: "border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
  }
), je = [
  "#A3D5FF",
  "#FFD4A3",
  "#C2E8C2",
  "#FFB5B5",
  "#D9CFE8",
  "#C8B8A6",
  "#F5CCDA",
  "#E0E0E0",
  "#E3EAB3",
  "#A6F2F2",
  "#FFD4C2",
  "#F9B3B3",
  "#D7A6A6",
  "#AD94A3",
  "#B5C2E0",
  "#B5E0CC",
  "#A6D3E8",
  "#D3A6E8",
  "#FFC9A3",
  "#E8BFA6"
], Er = ({ name: g, size: y, borderRadius: x }) => {
  g == "" && (g = "Anonymous");
  const [E, w] = te(), [A, j] = te(), [S, f] = te(), P = (d) => {
    let h = 0;
    for (let m = 0; m < d.length; m++)
      h = d.charCodeAt(m) + ((h << 5) - h);
    return Math.abs(h % je.length);
  }, v = (d, h) => {
    const m = d.replace("#", ""), $ = Math.max(0, parseInt(m.substring(0, 2), 16) - h), C = Math.max(0, parseInt(m.substring(2, 4), 16) - h), c = Math.max(0, parseInt(m.substring(4, 6), 16) - h);
    return `#${((1 << 24) + ($ << 16) + (C << 8) + c).toString(16).slice(1)}`;
  }, _ = (d) => {
    switch (d) {
      case "none":
        return "0";
      case "sm":
        return "0.125rem";
      case "md":
        return "0.375rem";
      case "lg":
        return "0.5rem";
      case "xl":
        return "1rem";
      case "2xl":
        return "1.5rem";
      case "3xl":
        return "2rem";
      case "full":
        return "9999px";
      default:
        return "0";
    }
  };
  vr(() => {
    if (!g)
      return;
    const d = g.split(" ").map((C) => C.charAt(0).toUpperCase() + C.slice(1));
    w(d.length > 1 ? d[0][0] + d[1][0] : d[0][0]);
    const h = P(g), m = je[h];
    j(m);
    const $ = v(m, 60);
    f($);
  }, [g]);
  const O = _(x);
  return /* @__PURE__ */ q.jsx(
    "div",
    {
      className: `flex items-center justify-center 
        ${y === "sm" ? "w-8 h-8" : "w-10 h-10"} rounded-${x}`,
      style: { backgroundColor: A, borderRadius: O },
      children: /* @__PURE__ */ q.jsx(
        "p",
        {
          className: `font-semibold ${y === "sm" ? "text-sm" : "text-base"}`,
          style: { color: S },
          children: E
        }
      )
    }
  );
};
export {
  Er as Avatar,
  hr as Button,
  yr as Input
};
