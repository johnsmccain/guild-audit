import {
  a as S,
  b as rr,
  c as Ee,
  d as Rr,
  e as Qa,
  f as An,
  g as xe,
  h as ns,
  i as rs,
  j as Oe,
  k as Gt,
  l as qi,
  m as oe,
  n as B,
  o as N,
  p as Ki,
  q as dt,
  r as ht,
  s as le,
  t as A,
  u as it,
  v as cn,
  w as Re,
  x as k,
  y as se,
} from "./chunk-KQLRTPKK.mjs";
import { a as Wm, b as Ke, c as M } from "./chunk-ELYU6EKT.mjs";
var MC = Object.create,
  Cf = Object.defineProperty,
  LC = Object.getOwnPropertyDescriptor,
  pg = Object.getOwnPropertyNames,
  OC = Object.getPrototypeOf,
  DC = Object.prototype.hasOwnProperty,
  AC = (e, t, n) =>
    t in e
      ? Cf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  dn = (e, t) =>
    function () {
      return (
        t || (0, e[pg(e)[0]])((t = { exports: {} }).exports, t),
        t.exports
      );
    },
  VC = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of pg(t))
        !DC.call(e, i) &&
          i !== n &&
          Cf(e, i, {
            get: () => t[i],
            enumerable: !(r = LC(t, i)) || r.enumerable,
          });
    return e;
  },
  jn = (e, t, n) => (
    (n = e != null ? MC(OC(e)) : {}),
    VC(
      t || !e || !e.__esModule
        ? Cf(n, "default", { value: e, enumerable: !0 })
        : n,
      e,
    )
  ),
  R = (e, t, n) => (AC(e, typeof t != "symbol" ? t + "" : t, n), n),
  Tf = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  ue = (e, t, n) => (
    Tf(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  Kt = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  Ef = (e, t, n, r) => (
    Tf(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Vt = (e, t, n) => (Tf(e, t, "access private method"), n),
  BC = dn({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return (r[i] === void 0 && (r[i] = n(i)), r[i]);
        };
      }
      e.default = t;
    },
  }),
  $C = dn({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
      e,
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(o) {
        return o && typeof o == "object" && "default" in o ? o.default : o;
      }
      var n = t(BC()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  Hn = xe({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  bs = xe({}),
  io = xe(null),
  dl = typeof document < "u",
  Lr = dl ? ht : N,
  hl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  zC = "framerAppearId",
  pl = "data-" + hl(zC),
  ml = { skipAnimations: !1, useManualTiming: !1 },
  vl = xe({}),
  ms = xe({}),
  mt = (e) => e,
  oo = mt,
  qt = mt,
  mg = xe({ strict: !1 });
function NC(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    o = new WeakSet(),
    s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    (o.has(c) && (l.schedule(c), e()), c(s));
  }
  let l = {
    schedule: (c, u = !1, f = !1) => {
      let h = f && r ? t : n;
      return (u && o.add(c), h.has(c) || h.add(c), c);
    },
    cancel: (c) => {
      (n.delete(c), o.delete(c));
    },
    process: (c) => {
      if (((s = c), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(c)));
    },
  };
  return l;
}
var ss = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  HC = 40;
function vg(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = ss.reduce((p, m) => ((p[m] = NC(o)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: u,
      render: f,
      postRender: d,
    } = s,
    h = () => {
      let p = ml.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, HC), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    y = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: ss.reduce((p, m) => {
      let v = s[m];
      return (
        (p[m] = (x, C = !1, w = !1) => (n || y(), v.schedule(x, C, w))),
        p
      );
    }, {}),
    cancel: (p) => {
      for (let m = 0; m < ss.length; m++) s[ss[m]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
var { schedule: Rf, cancel: i$ } = vg(queueMicrotask, !1);
function Qi(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
var Um = !1;
function jC(e, t, n, r, i) {
  let { visualElement: o } = B(bs),
    s = B(mg),
    a = B(io),
    l = B(Hn).reducedMotion,
    c = A();
  ((r = r || s.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      })));
  let u = c.current,
    f = B(vl);
  (u &&
    !u.projection &&
    i &&
    (u.type === "html" || u.type === "svg") &&
    UC(c.current, n, i, f),
    dt(() => {
      u && u.update(n, a);
    }));
  let d = A(!!(n[pl] && !M.HandoffComplete));
  return (
    Lr(() => {
      u &&
        (u.updateFeatures(),
        Rf.render(u.render),
        d.current && u.animationState && u.animationState.animateChanges());
    }),
    N(() => {
      u &&
        (!d.current && u.animationState && u.animationState.animateChanges(),
        d.current && ((d.current = !1), Um || ((Um = !0), queueMicrotask(WC))));
    }),
    u
  );
}
function WC() {
  M.HandoffComplete = !0;
}
function UC(e, t, n, r) {
  let {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : gg(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Qi(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    }));
}
function gg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : gg(e.parent);
}
function XC(e, t, n) {
  return oe(
    (r) => {
      (r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Qi(n) && (n.current = r)));
    },
    [t],
  );
}
function vs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function gs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
var Pf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  _f = ["initial", ...Pf];
function gl(e) {
  return gs(e.animate) || _f.some((t) => vs(e[t]));
}
function yg(e) {
  return !!(gl(e) || e.variants);
}
function YC(e, t) {
  if (gl(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || vs(n) ? n : void 0,
      animate: vs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function GC(e) {
  let { initial: t, animate: n } = YC(e, B(bs));
  return le(() => ({ initial: t, animate: n }), [Xm(t), Xm(n)]);
}
function Xm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var Ym = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  to = {};
for (let e in Ym) to[e] = { isEnabled: (t) => Ym[e].some((n) => !!t[n]) };
function qC(e) {
  for (let t in e) to[t] = { ...to[t], ...e[t] };
}
var If = Symbol.for("motionComponentSymbol");
function bg({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && qC(e);
  function o(a, l) {
    let c,
      u = { ...B(Hn), ...a, layoutId: KC(a) },
      { isStatic: f } = u,
      d = GC(a),
      h = r(a, f);
    if (!f && dl) {
      QC(u, e);
      let y = ZC(u);
      ((c = y.MeasureLayout),
        (d.visualElement = jC(i, h, u, t, y.ProjectionNode)));
    }
    return se(bs.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? k(c, { visualElement: d.visualElement, ...u })
          : null,
        n(i, a, XC(h, d.visualElement, l), h, f, d.visualElement),
      ],
    });
  }
  let s = Oe(o);
  return ((s[If] = i), s);
}
function KC({ layoutId: e }) {
  let t = B(ms).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function QC(e, t) {
  let n = B(mg).strict;
}
function ZC(e) {
  let { drag: t, layout: n } = to;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var ol = {};
function Ff(e) {
  Object.assign(ol, e);
}
var Fe = (e) => !!(e && e.getVelocity),
  xs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Or = new Set(xs),
  JC = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  eT = xs.length;
function xg(e, t, n) {
  let r = "";
  for (let i = 0; i < eT; i++) {
    let o = xs[i];
    if (e[o] !== void 0) {
      let s = JC[o] || o;
      r += `${s}(${e[o]}) `;
    }
  }
  return ((r = r.trim()), n ? (r = n(e, t ? "" : r)) : t && (r = "none"), r);
}
var or = (e, t, n) => (n > t ? t : n < e ? e : n),
  cs = (e) => Math.round(e * 1e5) / 1e5,
  Mf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  tT =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  nT =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function ws(e) {
  return typeof e == "string";
}
function rT(e) {
  return e == null;
}
var Ss = (e) => ({
    test: (t) => ws(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Pr = Ss("deg"),
  Vn = Ss("%"),
  K = Ss("px"),
  iT = Ss("vh"),
  oT = Ss("vw"),
  Gm = {
    ...Vn,
    parse: (e) => Vn.parse(e) / 100,
    transform: (e) => Vn.transform(e * 100),
  },
  sT = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
function no(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    sT.has(e)
  );
}
var wg = (e) => !no(e);
function Sg(e) {
  e && (wg = (t) => (t.startsWith("on") ? !no(t) : e(t)));
}
try {
  Sg($C().default);
} catch {}
function kg(e, t, n) {
  let r = {};
  for (let i in e)
    (i === "values" && typeof e.values == "object") ||
      ((wg(i) ||
        (n === !0 && no(i)) ||
        (!t && !no(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
var rf = (e) => Array.isArray(e),
  aT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  lT = (e) => (rf(e) ? e[e.length - 1] || 0 : e);
function xt(e) {
  let t = Fe(e) ? e.get() : e;
  return aT(t) ? t.toValue() : t;
}
function qm(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((n, r) => {
      ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
    }),
    t
  );
}
function Lf(e, t, n, r) {
  if (typeof t == "function") {
    let [i, o] = qm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    let [i, o] = qm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function lr(e) {
  let t = A(null);
  return (t.current === null && (t.current = e()), t.current);
}
var Cg = new Set(["opacity", "clipPath", "filter", "transform"]);
function Tg(e) {
  if (Or.has(e)) return "transform";
  if (Cg.has(e)) return hl(e);
}
function yl(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ks(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function cT([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
function uT(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  o,
  s,
  a,
) {
  let l = { latestValues: dT(i, o, s, a ? !1 : e, t), renderState: n() };
  return (r && (l.mount = (c) => r(i, c, l)), l);
}
var bl = (e) => (t, n) => {
  let r = B(bs),
    i = B(io),
    o = () => uT(e, t, r, i, n);
  return n ? o() : lr(o);
};
function fT(e, t) {
  let n = Tg(t);
  n && yl(e, n);
}
function Km(e, t, n) {
  let r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    let o = Lf(e, r[i]);
    if (o) {
      let { transitionEnd: s, transition: a, ...l } = o;
      n(l, s);
    }
  }
}
function dT(e, t, n, r, i) {
  var o;
  let s = {},
    a = [],
    l =
      r &&
      ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) ===
        void 0,
    c = i(e, {});
  for (let b in c) s[b] = xt(c[b]);
  let { initial: u, animate: f } = e,
    d = gl(e),
    h = yg(e);
  t &&
    h &&
    !d &&
    e.inherit !== !1 &&
    (u === void 0 && (u = t.initial), f === void 0 && (f = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || u === !1;
  let g = y ? f : u;
  return (
    g &&
      typeof g != "boolean" &&
      !gs(g) &&
      Km(e, g, (b, p) => {
        for (let m in b) {
          let v = b[m];
          if (Array.isArray(v)) {
            let x = y ? v.length - 1 : 0;
            v = v[x];
          }
          v !== null && (s[m] = v);
        }
        for (let m in p) s[m] = p[m];
      }),
    l &&
      (f &&
        u !== !1 &&
        !gs(f) &&
        Km(e, f, (b) => {
          for (let p in b) fT(a, p);
        }),
      a.length && (s.willChange = a.join(","))),
    s
  );
}
var {
    schedule: G,
    cancel: _t,
    state: Ne,
    steps: el,
  } = vg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : mt, !0),
  Eg = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function xl(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
var Rg = (e) => (t) => Eg(t) && e(t, xl(t));
function ir(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Bn(e, t, n, r) {
  return ir(e, t, Rg(n), r);
}
var hT = (e, t) => (n) => t(e(n)),
  $n = (...e) => e.reduce(hT);
function Pg(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var Qm = Pg("dragHorizontal"),
  Zm = Pg("dragVertical");
function _g(e) {
  let t = !1;
  if (e === "y") t = Zm();
  else if (e === "x") t = Qm();
  else {
    let n = Qm(),
      r = Zm();
    n && r
      ? (t = () => {
          (n(), r());
        })
      : (n && n(), r && r());
  }
  return t;
}
function Of() {
  let e = _g(!0);
  return e ? (e(), !1) : !0;
}
var so = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  us = { ...so, transform: (e) => or(0, 1, e) },
  Za = { ...so, default: 1 },
  Df = (e, t) => (n) =>
    !!(
      (ws(n) && nT.test(n) && n.startsWith(e)) ||
      (t && !rT(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Ig = (e, t, n) => (r) => {
    if (!ws(r)) return r;
    let [i, o, s, a] = r.match(Mf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  pT = (e) => or(0, 255, e),
  Wu = { ...so, transform: (e) => Math.round(pT(e)) },
  vi = {
    test: Df("rgb", "red"),
    parse: Ig("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Wu.transform(e) +
      ", " +
      Wu.transform(t) +
      ", " +
      Wu.transform(n) +
      ", " +
      cs(us.transform(r)) +
      ")",
  };
function mT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var of = { test: Df("#"), parse: mT, transform: vi.transform },
  Zi = {
    test: Df("hsl", "hue"),
    parse: Ig("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Vn.transform(cs(t)) +
      ", " +
      Vn.transform(cs(n)) +
      ", " +
      cs(us.transform(r)) +
      ")",
  },
  pt = {
    test: (e) => vi.test(e) || of.test(e) || Zi.test(e),
    parse: (e) =>
      vi.test(e) ? vi.parse(e) : Zi.test(e) ? Zi.parse(e) : of.parse(e),
    transform: (e) =>
      ws(e) ? e : e.hasOwnProperty("red") ? vi.transform(e) : Zi.transform(e),
  };
function vT(e) {
  var t, n;
  return (
    isNaN(e) &&
    ws(e) &&
    (((t = e.match(Mf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(tT)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var Fg = "number",
  Mg = "color",
  gT = "var",
  yT = "var(",
  Jm = "${}",
  bT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ys(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    o = 0,
    a = t
      .replace(
        bT,
        (l) => (
          pt.test(l)
            ? (r.color.push(o), i.push(Mg), n.push(pt.parse(l)))
            : l.startsWith(yT)
              ? (r.var.push(o), i.push(gT), n.push(l))
              : (r.number.push(o), i.push(Fg), n.push(parseFloat(l))),
          ++o,
          Jm
        ),
      )
      .split(Jm);
  return { values: n, split: a, indexes: r, types: i };
}
function Lg(e) {
  return ys(e).values;
}
function Og(e) {
  let { split: t, types: n } = ys(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        let a = n[s];
        a === Fg
          ? (o += cs(i[s]))
          : a === Mg
            ? (o += pt.transform(i[s]))
            : (o += i[s]);
      }
    return o;
  };
}
var xT = (e) => (typeof e == "number" ? 0 : e);
function wT(e) {
  let t = Lg(e);
  return Og(e)(t.map(xT));
}
var sr = { test: vT, parse: Lg, createTransformer: Og, getAnimatableNone: wT },
  zn = (e) => e * 1e3,
  Nn = (e) => e / 1e3;
function Af(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var ST = 5;
function Dg(e, t, n) {
  let r = Math.max(t - ST, 0);
  return Af(n - e(r), t - r);
}
var Uu = 0.001,
  kT = 0.01,
  ev = 10,
  CT = 0.05,
  TT = 1;
function ET({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  oo(e <= zn(ev), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  ((s = or(CT, TT, s)),
    (e = or(kT, ev, Nn(e))),
    s < 1
      ? ((i = (c) => {
          let u = c * s,
            f = u * e,
            d = u - n,
            h = sf(c, s),
            y = Math.exp(-f);
          return Uu - (d / h) * y;
        }),
        (o = (c) => {
          let f = c * s * e,
            d = f * n + n,
            h = Math.pow(s, 2) * Math.pow(c, 2) * e,
            y = Math.exp(-f),
            g = sf(Math.pow(c, 2), s);
          return ((-i(c) + Uu > 0 ? -1 : 1) * ((d - h) * y)) / g;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Uu + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        })));
  let a = 5 / e,
    l = PT(i, o, a);
  if (((e = zn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
var RT = 12;
function PT(e, t, n) {
  let r = n;
  for (let i = 1; i < RT; i++) r = r - e(r) / t(r);
  return r;
}
function sf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var _T = ["duration", "bounce"],
  IT = ["stiffness", "damping", "mass"];
function tv(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function FT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!tv(e, IT) && tv(e, _T)) {
    let n = ET(e);
    ((t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0));
  }
  return t;
}
function Cs({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = FT({ ...r, velocity: -Nn(r.velocity || 0) }),
    h = f || 0,
    y = l / (2 * Math.sqrt(a * c)),
    g = o - i,
    b = Nn(Math.sqrt(a / c)),
    p = Math.abs(g) < 5;
  (n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5));
  let m;
  if (y < 1) {
    let v = sf(b, y);
    m = (x) => {
      let C = Math.exp(-y * b * x);
      return (
        o - C * (((h + y * b * g) / v) * Math.sin(v * x) + g * Math.cos(v * x))
      );
    };
  } else if (y === 1) m = (v) => o - Math.exp(-b * v) * (g + (h + b * g) * v);
  else {
    let v = b * Math.sqrt(y * y - 1);
    m = (x) => {
      let C = Math.exp(-y * b * x),
        w = Math.min(v * x, 300);
      return (
        o - (C * ((h + y * b * g) * Math.sinh(w) + v * g * Math.cosh(w))) / v
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (v) => {
      let x = m(v);
      if (d) s.done = v >= u;
      else {
        let C = h;
        v !== 0 && (y < 1 ? (C = Dg(m, v, x)) : (C = 0));
        let w = Math.abs(C) <= n,
          E = Math.abs(o - x) <= t;
        s.done = w && E;
      }
      return ((s.value = s.done ? o : x), s);
    },
  };
}
var Ag = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  MT = 1e-7,
  LT = 12;
function OT(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (o = Ag(s, r, i) - e), o > 0 ? (n = s) : (t = s));
  while (Math.abs(o) > MT && ++a < LT);
  return s;
}
function ao(e, t, n, r) {
  if (e === t && n === r) return mt;
  let i = (o) => OT(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Ag(i(o), t, r));
}
var Vg = ao(0.42, 0, 1, 1),
  Bg = ao(0, 0, 0.58, 1),
  Vf = ao(0.42, 0, 0.58, 1),
  Bf = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  $f = (e) => (t) => 1 - e(1 - t),
  wl = (e) => 1 - Math.sin(Math.acos(e)),
  zf = $f(wl),
  $g = Bf(wl),
  Nf = ao(0.33, 1.53, 0.69, 0.99),
  Sl = $f(Nf),
  zg = Bf(Sl),
  Ng = (e) =>
    (e *= 2) < 1 ? 0.5 * Sl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Mr = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Pe = (e, t, n) => e + (t - e) * n;
function Xu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function DT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Xu(l, a, e + 1 / 3)), (o = Xu(l, a, e)), (s = Xu(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function sl(e, t) {
  return (n) => (n > 0 ? t : e);
}
var Yu = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  AT = [of, vi, Zi],
  VT = (e) => AT.find((t) => t.test(e));
function nv(e) {
  let t = VT(e);
  if (
    (oo(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === Zi && (n = DT(n)), n);
}
var rv = (e, t) => {
    let n = nv(e),
      r = nv(t);
    if (!n || !r) return sl(e, t);
    let i = { ...n };
    return (o) => (
      (i.red = Yu(n.red, r.red, o)),
      (i.green = Yu(n.green, r.green, o)),
      (i.blue = Yu(n.blue, r.blue, o)),
      (i.alpha = Pe(n.alpha, r.alpha, o)),
      vi.transform(i)
    );
  },
  Hg = (e) => (t) => typeof t == "string" && t.startsWith(e),
  jg = Hg("--"),
  BT = Hg("var(--"),
  Hf = (e) => (BT(e) ? $T.test(e.split("/*")[0].trim()) : !1),
  $T =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  af = new Set(["none", "hidden"]);
function zT(e, t) {
  return af.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function NT(e, t) {
  return (n) => Pe(e, t, n);
}
function jf(e) {
  return typeof e == "number"
    ? NT
    : typeof e == "string"
      ? Hf(e)
        ? sl
        : pt.test(e)
          ? rv
          : WT
      : Array.isArray(e)
        ? Wg
        : typeof e == "object"
          ? pt.test(e)
            ? rv
            : HT
          : sl;
}
function Wg(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((o, s) => jf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function HT(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = jf(e[i])(e[i], t[i]));
  return (i) => {
    for (let o in r) n[o] = r[o](i);
    return n;
  };
}
function jT(e, t) {
  var n;
  let r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    let s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[o] = l), i[s]++);
  }
  return r;
}
var WT = (e, t) => {
  let n = sr.createTransformer(t),
    r = ys(e),
    i = ys(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (af.has(e) && !i.values.length) || (af.has(t) && !r.values.length)
      ? zT(e, t)
      : $n(Wg(jT(r, i), i.values), n)
    : (oo(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
      ),
      sl(e, t));
};
function Wf(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Pe(e, t, n)
    : jf(e)(e, t);
}
function UT(e, t, n) {
  let r = [],
    i = n || Wf,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[s] || mt : t;
      a = $n(l, a);
    }
    r.push(a);
  }
  return r;
}
function lo(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (qt(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = UT(t, r, i),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = Mr(e[u], e[u + 1], c);
      return s[u](f);
    };
  return n ? (c) => l(or(e[0], e[o - 1], c)) : l;
}
var XT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  iv = (e) => e === so || e === K,
  ov = (e, t) => parseFloat(e.split(", ")[t]),
  sv =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return ov(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? ov(o[1], e) : 0;
      }
    },
  YT = new Set(["x", "y", "z"]),
  GT = xs.filter((e) => !YT.has(e));
function qT(e) {
  let t = [];
  return (
    GT.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
var ro = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: sv(4, 13),
  y: sv(5, 14),
};
ro.translateX = ro.x;
ro.translateY = ro.y;
var gi = new Set(),
  lf = !1,
  cf = !1;
function Ug() {
  if (cf) {
    let e = Array.from(gi).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      let i = qT(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        let i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && M.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((cf = !1), (lf = !1), gi.forEach((e) => e.complete()), gi.clear());
}
function Xg() {
  gi.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (cf = !0));
  });
}
function KT() {
  (Xg(), Ug());
}
var Uf = class {
  constructor(e, t, n, r, i, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = t),
      (this.name = n),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (gi.add(this), lf || ((lf = !0), G.read(Xg), G.resolveKeyframes(Ug)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
    for (let i = 0; i < e.length; i++)
      if (e[i] === null)
        if (i === 0) {
          let o = r?.get(),
            s = e[e.length - 1];
          if (o !== void 0) e[0] = o;
          else if (n && t) {
            let a = n.readValue(t, s);
            a != null && (e[0] = a);
          }
          (e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]));
        } else e[i] = e[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      gi.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), gi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
};
function av({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    h = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    y = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
          ? a
          : l,
    g = n * t,
    b = f + g,
    p = s === void 0 ? b : s(b);
  p !== b && (g = p - f);
  let m = (T) => -g * Math.exp(-T / r),
    v = (T) => p + m(T),
    x = (T) => {
      let F = m(T),
        _ = v(T);
      ((d.done = Math.abs(F) <= c), (d.value = d.done ? p : _));
    },
    C,
    w,
    E = (T) => {
      h(d.value) &&
        ((C = T),
        (w = Cs({
          keyframes: [d.value, y(d.value)],
          velocity: Dg(v, T, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let F = !1;
        return (
          !w && C === void 0 && ((F = !0), x(T), E(T)),
          C !== void 0 && T >= C ? w.next(T - C) : (!F && x(T), d)
        );
      },
    }
  );
}
var Yg = (e) => Array.isArray(e) && typeof e[0] != "number",
  lv = {
    linear: mt,
    easeIn: Vg,
    easeInOut: Vf,
    easeOut: Bg,
    circIn: wl,
    circInOut: $g,
    circOut: zf,
    backIn: Sl,
    backInOut: zg,
    backOut: Nf,
    anticipate: Ng,
  },
  uf = (e) => {
    if (Array.isArray(e)) {
      qt(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
      );
      let [t, n, r, i] = e;
      return ao(t, n, r, i);
    } else if (typeof e == "string")
      return (qt(lv[e] !== void 0, `Invalid easing type '${e}'`), lv[e]);
    return e;
  };
function Gg(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Mr(0, t, r);
    e.push(Pe(n, 1, i));
  }
}
function Xf(e) {
  let t = [0];
  return (Gg(t, e.length - 1), t);
}
function QT(e, t) {
  return e.map((n) => n * t);
}
function ZT(e, t) {
  return e.map(() => t || Vf).splice(0, e.length - 1);
}
function al({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  let i = Yg(r) ? r.map(uf) : uf(r),
    o = { done: !1, value: t[0] },
    s = QT(n && n.length === t.length ? n : Xf(t), e),
    a = lo(s, t, { ease: Array.isArray(i) ? i : ZT(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
var ll = { current: !1 },
  cv = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (sr.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function JT(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function eE(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  let o = e[e.length - 1],
    s = cv(i, t),
    a = cv(o, t);
  return (
    oo(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`,
    ),
    !s || !a ? !1 : JT(e) || (n === "spring" && r)
  );
}
var tE = (e) => e !== null;
function kl(e, { repeat: t, repeatType: n = "loop" }, r) {
  let i = e.filter(tE),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
var qg = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o = "loop",
      ...s
    }) {
      ((this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: o,
          ...s,
        }),
        this.updateFinishedPromise());
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && KT(),
        this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      this.hasAttemptedResolve = !0;
      let {
        name: n,
        type: r,
        velocity: i,
        delay: o,
        onComplete: s,
        onUpdate: a,
        isGenerator: l,
      } = this.options;
      if (!l && !eE(e, n, r, i))
        if (ll.current || !o) {
          (a?.(kl(e, this.options, t)), s?.(), this.resolveFinishedPromise());
          return;
        } else this.options.duration = 0;
      let c = this.initPlayback(e, t);
      c !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  ff = 2e4;
function Kg(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < ff; ) ((t += n), (r = e.next(t)));
  return t >= ff ? 1 / 0 : t;
}
var tl;
function nE() {
  tl = void 0;
}
var Fr = {
    now: () => (
      tl === void 0 &&
        Fr.set(
          Ne.isProcessing || ml.useManualTiming
            ? Ne.timestamp
            : performance.now(),
        ),
      tl
    ),
    set: (e) => {
      ((tl = e), queueMicrotask(nE));
    },
  },
  rE = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => G.update(t, !0),
      stop: () => _t(t),
      now: () => (Ne.isProcessing ? Ne.timestamp : Fr.now()),
    };
  },
  iE = { decay: av, inertia: av, tween: al, keyframes: al, spring: Cs },
  oE = (e) => e / 100,
  Cl = class extends qg {
    constructor({ KeyframeResolver: e = Uf, ...t }) {
      (super(t),
        (this.holdTime = null),
        (this.startTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          let { onStop: s } = this.options;
          s && s();
        }));
      let { name: n, motionValue: r, keyframes: i } = this.options,
        o = (s, a) => this.onKeyframesResolved(s, a);
      (n && r && r.owner
        ? (this.resolver = r.owner.resolveKeyframes(i, o, n, r))
        : (this.resolver = new e(i, o, n, r)),
        this.resolver.scheduleResolve());
    }
    initPlayback(e) {
      let {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        s = iE[t] || al,
        a,
        l;
      s !== al &&
        typeof e[0] != "number" &&
        ((a = $n(oE, Wf(e[0], e[1]))), (e = [0, 100]));
      let c = s({ ...this.options, keyframes: e });
      (i === "mirror" &&
        (l = s({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        c.calculatedDuration === null && (c.calculatedDuration = Kg(c)));
      let { calculatedDuration: u } = c,
        f = u + r,
        d = f * (n + 1) - r;
      return {
        generator: c,
        mirroredGenerator: l,
        mapPercentToKeyframes: a,
        calculatedDuration: u,
        resolvedDuration: f,
        totalDuration: d,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      (this.play(),
        this.pendingPlayState === "paused" || !e
          ? this.pause()
          : (this.state = this.pendingPlayState));
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: E } = this.options;
        return { done: !0, value: E[E.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: s,
        keyframes: a,
        calculatedDuration: l,
        totalDuration: c,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: f,
        repeat: d,
        repeatType: h,
        repeatDelay: y,
        onUpdate: g,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime !== null
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = Math.round(e - this.startTime) * this.speed));
      let b = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
        p = this.speed >= 0 ? b < 0 : b > c;
      ((this.currentTime = Math.max(b, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c));
      let m = this.currentTime,
        v = i;
      if (d) {
        let E = Math.min(this.currentTime, c) / u,
          T = Math.floor(E),
          F = E % 1;
        (!F && E >= 1 && (F = 1),
          F === 1 && T--,
          (T = Math.min(T, d + 1)),
          !!(T % 2) &&
            (h === "reverse"
              ? ((F = 1 - F), y && (F -= y / u))
              : h === "mirror" && (v = o)),
          (m = or(0, 1, F) * u));
      }
      let x = p ? { done: !1, value: a[0] } : v.next(m);
      s && (x.value = s(x.value));
      let { done: C } = x;
      !p &&
        l !== null &&
        (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      let w =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && C));
      return (
        w && r !== void 0 && (x.value = kl(a, this.options, r)),
        g && g(x.value),
        w && this.finish(),
        x
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Nn(e.calculatedDuration) : 0;
    }
    get time() {
      return Nn(this.currentTime);
    }
    set time(e) {
      ((e = zn(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      ((this.playbackSpeed = e), t && (this.time = Nn(this.currentTime)));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let { driver: e = rE, onPlay: t } = this.options;
      (this.driver || (this.driver = e((r) => this.tick(r))), t && t());
      let n = this.driver.now();
      (this.holdTime !== null
        ? (this.startTime = n - this.holdTime)
        : (!this.startTime || this.state === "finished") &&
          (this.startTime = n),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start());
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      ((this.state = "paused"),
        (this.holdTime =
          (e = this.currentTime) !== null && e !== void 0 ? e : 0));
    }
    complete() {
      (this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null));
    }
    finish() {
      (this.teardown(), (this.state = "finished"));
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      (this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise());
    }
    teardown() {
      ((this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel());
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
  };
function Yf(e) {
  return new Cl(e);
}
var Qg = (e) => /^0[^.\s]+$/u.test(e);
function sE(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Qg(e)
      : !0;
}
var Zg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  aE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lE(e) {
  let t = aE.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var cE = 4;
function Jg(e, t, n = 1) {
  qt(
    n <= cE,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
  );
  let [r, i] = lE(e);
  if (!r) return;
  let o = M.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let s = o.trim();
    return Zg(s) ? parseFloat(s) : s;
  }
  return Hf(i) ? Jg(i, t, n + 1) : i;
}
var ey = (e) => (t) => t.test(e),
  uE = { test: (e) => e === "auto", parse: (e) => e },
  ty = [so, K, Vn, Pr, oT, iT, uE],
  uv = (e) => ty.find(ey(e)),
  fE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function dE(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [r] = n.match(Mf) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    o = fE.has(t) ? 1 : 0;
  return (r !== n && (o *= 100), t + "(" + o + i + ")");
}
var hE = /\b([a-z-]*)\(.*?\)/gu,
  df = {
    ...sr,
    getAnimatableNone: (e) => {
      let t = e.match(hE);
      return t ? t.map(dE).join(" ") : e;
    },
  },
  fv = { ...so, transform: Math.round },
  ny = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    radius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    size: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    rotate: Pr,
    rotateX: Pr,
    rotateY: Pr,
    rotateZ: Pr,
    scale: Za,
    scaleX: Za,
    scaleY: Za,
    scaleZ: Za,
    skew: Pr,
    skewX: Pr,
    skewY: Pr,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: us,
    originX: Gm,
    originY: Gm,
    originZ: K,
    zIndex: fv,
    backgroundPositionX: K,
    backgroundPositionY: K,
    fillOpacity: us,
    strokeOpacity: us,
    numOctaves: fv,
  },
  pE = {
    ...ny,
    color: pt,
    backgroundColor: pt,
    outlineColor: pt,
    fill: pt,
    stroke: pt,
    borderColor: pt,
    borderTopColor: pt,
    borderRightColor: pt,
    borderBottomColor: pt,
    borderLeftColor: pt,
    filter: df,
    WebkitFilter: df,
  },
  Gf = (e) => pE[e];
function ry(e, t) {
  let n = Gf(e);
  return (
    n !== df && (n = sr),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var mE = new Set(["auto", "none", "0"]);
function vE(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let o = e[r];
    (typeof o == "string" && !mE.has(o) && ys(o).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let o of t) e[o] = ry(n, i);
}
var iy = class extends Uf {
  constructor(e, t, n, r) {
    super(e, t, n, r, r?.owner, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this;
    if (!t.current) return;
    super.readKeyframes();
    for (let a = 0; a < e.length; a++) {
      let l = e[a];
      if (typeof l == "string" && ((l = l.trim()), Hf(l))) {
        let c = Jg(l, t.current);
        (c !== void 0 && (e[a] = c),
          a === e.length - 1 && (this.finalKeyframe = l));
      }
    }
    if ((this.resolveNoneKeyframes(), !XT.has(n) || e.length !== 2)) return;
    let [r, i] = e,
      o = uv(r),
      s = uv(i);
    if (o !== s)
      if (iv(o) && iv(s))
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          typeof l == "string" && (e[a] = parseFloat(l));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = [];
    for (let r = 0; r < e.length; r++) sE(e[r]) && n.push(r);
    n.length && vE(e, n, t);
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this;
    if (!e.current) return;
    (n === "height" && (this.suspendedScrollY = M.pageYOffset),
      (this.measuredOrigin = ro[n](
        e.measureViewportBox(),
        M.getComputedStyle(e.current),
      )),
      (t[0] = this.measuredOrigin));
    let r = t[t.length - 1];
    r !== void 0 && e.getValue(n, r).jump(r, !1);
  }
  measureEndState() {
    var e;
    let { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t.current) return;
    let i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    let o = r.length - 1,
      s = r[o];
    ((r[o] = ro[n](t.measureViewportBox(), M.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([a, l]) => {
          t.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes());
  }
};
function oy(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var sy = (e) => Array.isArray(e) && typeof e[0] == "number";
function ay(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in qf) ||
    sy(e) ||
    (Array.isArray(e) && e.every(ay))
  );
}
var as = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  qf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: as([0, 0.65, 0.55, 1]),
    circOut: as([0.55, 0, 1, 0.45]),
    backIn: as([0.31, 0.01, 0.66, -0.59]),
    backOut: as([0.33, 1.53, 0.69, 0.99]),
  };
function gE(e) {
  return ly(e) || qf.easeOut;
}
function ly(e) {
  if (e) return sy(e) ? as(e) : Array.isArray(e) ? e.map(gE) : qf[e];
}
function yE(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {},
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = ly(a);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
var bE = oy(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  cl = 10,
  xE = 2e4;
function wE(e) {
  return e.type === "spring" || !ay(e.ease);
}
function SE(e, t) {
  let n = new Cl({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    o = 0;
  for (; !r.done && o < xE; ) ((r = n.sample(o)), i.push(r.value), (o += cl));
  return { times: void 0, keyframes: i, duration: o - cl, ease: "linear" };
}
var hf = class extends qg {
    constructor(e) {
      super(e);
      let { name: t, motionValue: n, keyframes: r } = this.options;
      ((this.resolver = new iy(
        r,
        (i, o) => this.onKeyframesResolved(i, o),
        t,
        n,
      )),
        this.resolver.scheduleResolve());
    }
    initPlayback(e, t) {
      var n;
      let {
        duration: r = 300,
        times: i,
        ease: o,
        type: s,
        motionValue: a,
        name: l,
      } = this.options;
      if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
      if (wE(this.options)) {
        let { onComplete: u, onUpdate: f, motionValue: d, ...h } = this.options,
          y = SE(e, h);
        ((e = y.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (r = y.duration),
          (i = y.times),
          (o = y.ease),
          (s = "keyframes"));
      }
      let c = yE(a.owner.current, l, e, {
        ...this.options,
        duration: r,
        times: i,
        ease: o,
      });
      return (
        (c.startTime = Fr.now()),
        this.pendingTimeline
          ? ((c.timeline = this.pendingTimeline),
            (this.pendingTimeline = void 0))
          : (c.onfinish = () => {
              let { onComplete: u } = this.options;
              (a.set(kl(e, this.options, t)),
                u && u(),
                this.cancel(),
                this.resolveFinishedPromise());
            }),
        { animation: c, duration: r, times: i, type: s, ease: o, keyframes: e }
      );
    }
    get duration() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { duration: t } = e;
      return Nn(t);
    }
    get time() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { animation: t } = e;
      return Nn(t.currentTime || 0);
    }
    set time(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.currentTime = zn(e);
    }
    get speed() {
      let { resolved: e } = this;
      if (!e) return 1;
      let { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      let { resolved: e } = this;
      if (!e) return "idle";
      let { animation: t } = e;
      return t.playState;
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
        let { resolved: t } = this;
        if (!t) return mt;
        let { animation: n } = t;
        ((n.timeline = e), (n.onfinish = null));
      }
      return mt;
    }
    play() {
      if (this.isStopped) return;
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      (t.playState === "finished" && this.updateFinishedPromise(), t.play());
    }
    pause() {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
      )
        return;
      let { resolved: e } = this;
      if (!e) return;
      let {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: o,
        times: s,
      } = e;
      if (t.playState === "idle" || t.playState === "finished") return;
      if (this.time) {
        let { motionValue: l, onUpdate: c, onComplete: u, ...f } = this.options,
          d = new Cl({
            ...f,
            keyframes: n,
            duration: r,
            type: i,
            ease: o,
            times: s,
            isGenerator: !0,
          }),
          h = zn(this.time);
        l.setWithVelocity(d.sample(h - cl).value, d.sample(h).value, cl);
      }
      let { onStop: a } = this.options;
      (a && a(), this.cancel());
    }
    complete() {
      let { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      let { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      let {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: o,
        type: s,
      } = e;
      return (
        bE() &&
        n &&
        Cg.has(n) &&
        t &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate &&
        !r &&
        i !== "mirror" &&
        o !== 0 &&
        s !== "inertia"
      );
    }
  },
  Kf = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return (yl(this.subscriptions, e), () => ks(this.subscriptions, e));
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  dv = 30,
  kE = (e) => !isNaN(parseFloat(e)),
  fs = { current: void 0 },
  Ts = class {
    constructor(e, t = {}) {
      ((this.version = "11.3.9"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = Fr.now();
          (this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = Fr.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = kE(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new Kf());
      let n = this.events[e].add(t);
      return e === "change"
        ? () => {
            (n(),
              G.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
      return (fs.current && fs.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = Fr.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > dv
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, dv);
      return Af(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function He(e, t) {
  return new Ts(e, t);
}
var CE = class extends Ts {
  constructor() {
    (super(...arguments), (this.output = []), (this.counts = new Map()));
  }
  add(e) {
    let t = Tg(e);
    if (!t) return;
    let n = this.counts.get(t) || 0;
    (this.counts.set(t, n + 1),
      n === 0 && (this.output.push(t), this.update()));
    let r = !1;
    return () => {
      if (r) return;
      r = !0;
      let i = this.counts.get(t) - 1;
      (this.counts.set(t, i), i === 0 && (ks(this.output, t), this.update()));
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
};
function Tl(e, t, n) {
  let r = e.getProps();
  return Lf(r, t, n !== void 0 ? n : r.custom, e);
}
var TE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  EE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  RE = { type: "keyframes", duration: 0.8 },
  PE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  _E = (e, { keyframes: t }) =>
    t.length > 2
      ? RE
      : Or.has(e)
        ? e.startsWith("scale")
          ? EE(t[1])
          : TE
        : PE;
function IE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function Qf(e, t) {
  return e[t] || e.default || e;
}
function FE(e, t) {
  let n,
    r = () => {
      let { currentTime: i } = t,
        s = (i === null ? 0 : i.value) / 100;
      (n !== s && e(s), (n = s));
    };
  return (G.update(r, !0), () => _t(r));
}
var ME = oy(() => M.ScrollTimeline !== void 0),
  Zf = class {
    constructor(e) {
      ((this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean)));
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((n) => {
        if (ME() && n.attachTimeline) n.attachTimeline(e);
        else
          return (
            n.pause(),
            FE((r) => {
              n.time = n.duration * r;
            }, e)
          );
      });
      return () => {
        t.forEach((n, r) => {
          (n && n(), this.animations[r].stop());
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  },
  Jf =
    (e, t, n, r = {}, i, o, s) =>
    (a) => {
      let l = Qf(r, e) || {},
        c = l.delay || r.delay || 0,
        { elapsed: u = 0 } = r;
      u = u - zn(c);
      let f = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (h) => {
          (t.set(h), l.onUpdate && l.onUpdate(h));
        },
        onComplete: () => {
          (a(), l.onComplete && l.onComplete(), s && s());
        },
        onStop: s,
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      (IE(l) || (f = { ...f, ..._E(e, f) }),
        f.duration && (f.duration = zn(f.duration)),
        f.repeatDelay && (f.repeatDelay = zn(f.repeatDelay)),
        f.from !== void 0 && (f.keyframes[0] = f.from));
      let d = !1;
      if (
        ((f.type === !1 || (f.duration === 0 && !f.repeatDelay)) &&
          ((f.duration = 0), f.delay === 0 && (d = !0)),
        (ll.current || ml.skipAnimations) &&
          ((d = !0), (f.duration = 0), (f.delay = 0)),
        d && !o && t.get() !== void 0)
      ) {
        let h = kl(f.keyframes, l);
        if (h !== void 0)
          return (
            G.update(() => {
              (f.onUpdate(h), f.onComplete());
            }),
            new Zf([])
          );
      }
      return !o && hf.supports(f) ? new hf(f) : new Cl(f);
    };
function LE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, He(n));
}
function ed(e, t) {
  let n = Tl(e, t),
    { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (let s in o) {
    let a = lT(o[s]);
    LE(e, s, a);
  }
}
function cy(e) {
  return e.getProps()[pl];
}
function OE(e) {
  return !!(Fe(e) && e.add);
}
function pf(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new CE("auto")), e.addValue("willChange", r)),
    OE(r))
  )
    return r.add(t);
}
function DE({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function td(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  let c = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (let f in l) {
    let d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null,
      ),
      h = l[f];
    if (h === void 0 || (u && DE(u, f))) continue;
    let y = { delay: n, elapsed: 0, ...Qf(s || {}, f) },
      g = !1;
    if (M.HandoffAppearAnimations) {
      let p = cy(e);
      if (p) {
        let m = M.HandoffAppearAnimations(p, f, d, G);
        m !== null && ((y.elapsed = m), (g = !0));
      }
    }
    d.start(
      Jf(
        f,
        d,
        h,
        e.shouldReduceMotion && Or.has(f) ? { type: !1 } : y,
        e,
        g,
        pf(e, f),
      ),
    );
    let b = d.animation;
    b && c.push(b);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        G.update(() => {
          a && ed(e, a);
        });
      }),
    c
  );
}
function mf(e, t, n = {}) {
  var r;
  let i = Tl(
      e,
      t,
      n.type === "exit"
        ? (r = e.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0,
    ),
    { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  let s = i ? () => Promise.all(td(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            let {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return AE(e, t, u + c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function AE(e, t, n = 0, r = 0, i = 1, o) {
  let s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(VE)
      .forEach((c, u) => {
        (c.notify("AnimationStart", t),
          s.push(
            mf(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(s)
  );
}
function VE(e, t) {
  return e.sortNodePosition(t);
}
function nd(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => mf(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = mf(e, t, n);
  else {
    let i = typeof t == "function" ? Tl(e, t, n.custom) : t;
    r = Promise.all(td(e, i, n));
  }
  return r.then(() => {
    G.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
function uy(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var BE = [...Pf].reverse(),
  $E = Pf.length;
function zE(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => nd(e, n, r)));
}
function NE(e) {
  let t = zE(e),
    n = hv(),
    r = !0,
    i = (l) => (c, u) => {
      var f;
      let d = Tl(
        e,
        u,
        l === "exit"
          ? (f = e.presenceContext) === null || f === void 0
            ? void 0
            : f.custom
          : void 0,
      );
      if (d) {
        let { transition: h, transitionEnd: y, ...g } = d;
        c = { ...c, ...g, ...y };
      }
      return c;
    };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    let c = e.getProps(),
      u = e.getVariantContext(!0) || {},
      f = [],
      d = new Set(),
      h = {},
      y = 1 / 0;
    for (let b = 0; b < $E; b++) {
      let p = BE[b],
        m = n[p],
        v = c[p] !== void 0 ? c[p] : u[p],
        x = vs(v),
        C = p === l ? m.isActive : null;
      C === !1 && (y = b);
      let w = v === u[p] && v !== c[p] && x;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (m.protectedKeys = { ...h }),
        (!m.isActive && C === null) ||
          (!v && !m.prevProp) ||
          gs(v) ||
          typeof v == "boolean")
      )
        continue;
      let T =
          HE(m.prevProp, v) ||
          (p === l && m.isActive && !w && x) ||
          (b > y && x),
        F = !1,
        _ = Array.isArray(v) ? v : [v],
        $ = _.reduce(i(p), {});
      C === !1 && ($ = {});
      let { prevResolvedValues: D = {} } = m,
        q = { ...D, ...$ },
        W = (H) => {
          ((T = !0),
            d.has(H) && ((F = !0), d.delete(H)),
            (m.needsAnimating[H] = !0));
          let U = e.getValue(H);
          U && (U.liveStyle = !1);
        };
      for (let H in q) {
        let U = $[H],
          ee = D[H];
        if (h.hasOwnProperty(H)) continue;
        let te = !1;
        (rf(U) && rf(ee) ? (te = !uy(U, ee)) : (te = U !== ee),
          te
            ? U != null
              ? W(H)
              : d.add(H)
            : U !== void 0 && d.has(H)
              ? W(H)
              : (m.protectedKeys[H] = !0));
      }
      ((m.prevProp = v),
        (m.prevResolvedValues = $),
        m.isActive && (h = { ...h, ...$ }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!w || F) &&
          f.push(..._.map((H) => ({ animation: H, options: { type: p } }))));
    }
    if (d.size) {
      let b = {};
      (d.forEach((p) => {
        let m = e.getBaseTarget(p),
          v = e.getValue(p);
        (v && (v.liveStyle = !0), (b[p] = m ?? null));
      }),
        f.push({ animation: b }));
    }
    let g = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    ((u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var h;
        return (h = d.animationState) === null || h === void 0
          ? void 0
          : h.setActive(l, c);
      }),
      (n[l].isActive = c));
    let f = s(l);
    for (let d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = hv()), (r = !0));
    },
  };
}
function HE(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !uy(t, e) : !1;
}
function di(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function hv() {
  return {
    animate: di(!0),
    whileInView: di(),
    whileHover: di(),
    whileTap: di(),
    whileDrag: di(),
    whileFocus: di(),
    exit: di(),
  };
}
var Dr = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  },
  jE = class extends Dr {
    constructor(e) {
      (super(e), e.animationState || (e.animationState = NE(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      gs(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      (this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this));
    }
  },
  WE = 0,
  UE = class extends Dr {
    constructor() {
      (super(...arguments), (this.id = WE++));
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
        { isPresent: n } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === n) return;
      let r = this.node.animationState.setActive("exit", !e);
      t && !e && r.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  rd = { animation: { Feature: jE }, exit: { Feature: UE } },
  vf = (e, t) => Math.abs(e - t);
function fy(e, t) {
  let n = vf(e.x, t.x),
    r = vf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var dy = 1e-4,
  XE = 1 - dy,
  YE = 1 + dy,
  hy = 0.01,
  GE = 0 - hy,
  qE = 0 + hy;
function At(e) {
  return e.max - e.min;
}
function KE(e, t, n) {
  return Math.abs(e - t) <= n;
}
function pv(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Pe(t.min, t.max, e.origin)),
    (e.scale = At(n) / At(t)),
    (e.translate = Pe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= XE && e.scale <= YE) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= GE && e.translate <= qE) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function ds(e, t, n, r) {
  (pv(e.x, t.x, n.x, r ? r.originX : void 0),
    pv(e.y, t.y, n.y, r ? r.originY : void 0));
}
function mv(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + At(t)));
}
function QE(e, t, n) {
  (mv(e.x, t.x, n.x), mv(e.y, t.y, n.y));
}
function vv(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + At(t)));
}
function hs(e, t, n) {
  (vv(e.x, t.x, n.x), vv(e.y, t.y, n.y));
}
var gv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ji = () => ({ x: gv(), y: gv() }),
  yv = () => ({ min: 0, max: 0 }),
  ze = () => ({ x: yv(), y: yv() });
function id() {
  let e = B(io);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = Ki();
  return (N(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]);
}
var ZE = (e, t) => e.depth - t.depth,
  py = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (yl(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (ks(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(ZE),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function my(e, t) {
  let n = Fr.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (_t(r), e(o - t));
    };
  return (G.read(r, !0), () => _t(r));
}
var ar = new WeakMap(),
  ul = { current: null },
  od = { current: !1 };
function vy() {
  if (((od.current = !0), !!dl))
    if (M.matchMedia) {
      let e = M.matchMedia("(prefers-reduced-motion)"),
        t = () => (ul.current = e.matches);
      (e.addListener(t), t());
    } else ul.current = !1;
}
function JE(e, t, n) {
  for (let r in t) {
    let i = t[r],
      o = n[r];
    if (Fe(i)) e.addValue(r, i);
    else if (Fe(o)) e.addValue(r, He(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        let s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        let s = e.getStaticValue(r);
        e.addValue(r, He(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var eR = [...ty, pt, sr],
  tR = (e) => eR.find(ey(e)),
  bv = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  nR = _f.length,
  gy = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: o,
      },
      s = {},
    ) {
      ((this.applyWillChange = !1),
        (this.resolveKeyframes = (f, d, h, y) =>
          new this.KeyframeResolver(f, d, h, y, this)),
        (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Uf),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          ((this.isRenderScheduled = !1),
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection,
              )));
        }),
        (this.isRenderScheduled = !1),
        (this.scheduleRender = () => {
          this.isRenderScheduled ||
            ((this.isRenderScheduled = !0), G.render(this.render, !1, !0));
        }));
      let { latestValues: a, renderState: l } = o;
      ((this.latestValues = a),
        (this.baseTarget = { ...a }),
        (this.initialValues = t.initial ? { ...a } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = s),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = gl(t)),
        (this.isVariantNode = yg(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: c, ...u } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let f in u) {
        let d = u[f];
        a[f] !== void 0 && Fe(d) && d.set(a[f], !1);
      }
    }
    mount(e) {
      ((this.current = e),
        ar.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
        od.current || vy(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
              ? !0
              : ul.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (ar.delete(this.current),
        this.projection && this.projection.unmount(),
        _t(this.notifyUpdate),
        _t(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      let n = Or.has(e),
        r = t.on("change", (o) => {
          ((this.latestValues[e] = o),
            this.props.onUpdate && G.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0));
        }),
        i = t.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(e, () => {
        (r(), i(), t.owner && t.stop());
      });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = "animation";
      for (e in to) {
        let t = to[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let i = this.features[e];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : ze();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let n = 0; n < bv.length; n++) {
        let r = bv[n];
        this.propEventSubscriptions[r] &&
          (this.propEventSubscriptions[r](),
          delete this.propEventSubscriptions[r]);
        let i = "on" + r,
          o = e[i];
        o && (this.propEventSubscriptions[r] = this.on(r, o));
      }
      ((this.prevMotionValues = JE(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    getVariantContext(e = !1) {
      if (e) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        let n = this.parent ? this.parent.getVariantContext() || {} : {};
        return (
          this.props.initial !== void 0 && (n.initial = this.props.initial),
          n
        );
      }
      let t = {};
      for (let n = 0; n < nR; n++) {
        let r = _f[n],
          i = this.props[r];
        (vs(i) || i === !1) && (t[r] = i);
      }
      return t;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = He(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
              n !== void 0
            ? n
            : this.readValueFromInstance(this.current, e, this.options);
      return (
        r != null &&
          (typeof r == "string" && (Zg(r) || Qg(r))
            ? (r = parseFloat(r))
            : !tR(r) && sr.test(t) && (r = ry(e, t)),
          this.setBaseTarget(e, Fe(r) ? r.get() : r)),
        Fe(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      let { initial: n } = this.props,
        r;
      if (typeof n == "string" || typeof n == "object") {
        let o = Lf(
          this.props,
          n,
          (t = this.presenceContext) === null || t === void 0
            ? void 0
            : t.custom,
        );
        o && (r = o[e]);
      }
      if (n && r !== void 0) return r;
      let i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !Fe(i)
        ? i
        : this.initialValues[e] !== void 0 && r === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new Kf()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  };
function yy(e) {
  function t(r, i = {}) {
    return bg(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  let n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
var rR = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function sd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(rR.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function by(e, { layout: t, layoutId: n }) {
  return (
    Or.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ol[e] || e === "opacity"))
  );
}
var iR = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function ad(e, t, n) {
  let { style: r, vars: i, transform: o, transformOrigin: s } = e,
    a = !1,
    l = !1,
    c = !0;
  for (let u in t) {
    let f = t[u];
    if (jg(u)) {
      i[u] = f;
      continue;
    }
    let d = ny[u],
      h = iR(f, d);
    if (Or.has(u)) {
      if (((a = !0), (o[u] = h), !c)) continue;
      f !== (d.default || 0) && (c = !1);
    } else u.startsWith("origin") ? ((l = !0), (s[u] = h)) : (r[u] = h);
  }
  if (
    (t.transform ||
      (a || n
        ? (r.transform = xg(e.transform, c, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    let { originX: u = "50%", originY: f = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${u} ${f} ${d}`;
  }
}
var ld = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function xy(e, t, n) {
  for (let r in t) !Fe(t[r]) && !by(r, n) && (e[r] = t[r]);
}
function oR({ transformTemplate: e }, t) {
  return le(() => {
    let n = ld();
    return (ad(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function sR(e, t) {
  let n = e.style || {},
    r = {};
  return (xy(r, n, e), Object.assign(r, oR(e, t)), r);
}
function aR(e, t) {
  let n = {},
    r = sR(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function xv(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function lR(e, t, n) {
  let r = xv(t, e.x, e.width),
    i = xv(n, e.y, e.height);
  return `${r} ${i}`;
}
var cR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  uR = { offset: "strokeDashoffset", array: "strokeDasharray" };
function fR(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? cR : uR;
  e[o.offset] = K.transform(-r);
  let s = K.transform(t),
    a = K.transform(n);
  e[o.array] = `${s} ${a}`;
}
function cd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
) {
  if ((ad(e, c, f), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: h, dimensions: y } = e;
  (d.transform && (y && (h.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || h.transform) &&
      (h.transformOrigin = lR(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && fR(d, s, a, l, !1));
}
var wy = () => ({ ...ld(), attrs: {} }),
  ud = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function dR(e, t, n, r) {
  let i = le(() => {
    let o = wy();
    return (
      cd(o, t, ud(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    (xy(o, e.style, e), (i.style = { ...o, ...i.style }));
  }
  return i;
}
function hR(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    let l = (sd(n) ? dR : aR)(r, o, s, n),
      c = kg(r, typeof n == "string", e),
      u = n !== Rr ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      d = le(() => (Fe(f) ? f.get() : f), [f]);
    return ns(n, { ...u, children: d });
  };
}
function Sy(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var ky = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Cy(e, t, n, r) {
  Sy(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(ky.has(i) ? i : hl(i), t.attrs[i]);
}
function fd(e, t, n) {
  var r;
  let { style: i } = e,
    o = {};
  for (let s in i)
    (Fe(i[s]) ||
      (t.style && Fe(t.style[s])) ||
      by(s, e) ||
      ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (o[s] = i[s]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1),
    o
  );
}
function Ty(e, t, n) {
  let r = fd(e, t, n);
  for (let i in e)
    if (Fe(e[i]) || Fe(t[i])) {
      let o =
        xs.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
var pR = {
    useVisualState: bl({
      scrapeMotionValuesFromProps: Ty,
      createRenderState: wy,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        (G.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          G.render(() => {
            (cd(n, r, ud(t.tagName), e.transformTemplate), Cy(t, n));
          }));
      },
    }),
  },
  mR = {
    useVisualState: bl({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: fd,
      createRenderState: ld,
    }),
  };
function Ey(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(sd(e) ? pR : mR),
    preloadedFeatures: n,
    useRender: hR(t),
    createVisualElement: r,
    Component: e,
  };
}
function wv(e, t) {
  let n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Of()) return;
      let a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      let l = a[r];
      l && G.postRender(() => l(o, s));
    };
  return Bn(e.current, n, i, { passive: !e.getProps()[r] });
}
var vR = class extends Dr {
    mount() {
      this.unmount = $n(wv(this.node, !0), wv(this.node, !1));
    }
    unmount() {}
  },
  gR = class extends Dr {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = $n(
        ir(this.node.current, "focus", () => this.onFocus()),
        ir(this.node.current, "blur", () => this.onBlur()),
      );
    }
    unmount() {}
  },
  Ry = (e, t) => (t ? (e === t ? !0 : Ry(e, t.parentElement)) : !1);
function Gu(e, t) {
  if (!t) return;
  let n = new PointerEvent("pointer" + e);
  t(n, xl(n));
}
var yR = class extends Dr {
    constructor() {
      (super(...arguments),
        (this.removeStartListeners = mt),
        (this.removeEndListeners = mt),
        (this.removeAccessibleListeners = mt),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = Bn(
              M,
              "pointerup",
              (s, a) => {
                if (!this.checkPressEnd()) return;
                let {
                    onTap: l,
                    onTapCancel: c,
                    globalTapTarget: u,
                  } = this.node.getProps(),
                  f = !u && !Ry(this.node.current, s.target) ? c : l;
                f && G.update(() => f(s, a));
              },
              { passive: !(n.onTap || n.onPointerUp) },
            ),
            o = Bn(M, "pointercancel", (s, a) => this.cancelPress(s, a), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          ((this.removeEndListeners = $n(i, o)), this.startPress(e, t));
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              let o = (s) => {
                s.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  Gu("up", (a, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && G.postRender(() => c(a, l));
                  });
              };
              (this.removeEndListeners(),
                (this.removeEndListeners = ir(this.node.current, "keyup", o)),
                Gu("down", (s, a) => {
                  this.startPress(s, a);
                }));
            },
            t = ir(this.node.current, "keydown", e),
            n = () => {
              this.isPressing && Gu("cancel", (i, o) => this.cancelPress(i, o));
            },
            r = ir(this.node.current, "blur", n);
          this.removeAccessibleListeners = $n(t, r);
        }));
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      (r &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        n && G.postRender(() => n(e, t)));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !Of()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && G.postRender(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = Bn(
          e.globalTapTarget ? M : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) },
        ),
        n = ir(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = $n(t, n);
    }
    unmount() {
      (this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners());
    }
  },
  gf = new WeakMap(),
  qu = new WeakMap(),
  bR = (e) => {
    let t = gf.get(e.target);
    t && t(e);
  },
  xR = (e) => {
    e.forEach(bR);
  };
function wR({ root: e, ...t }) {
  let n = e || document;
  qu.has(n) || qu.set(n, {});
  let r = qu.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(xR, { root: e, ...t })),
    r[i]
  );
}
function SR(e, t, n) {
  let r = wR(t);
  return (
    gf.set(e, n),
    r.observe(e),
    () => {
      (gf.delete(e), r.unobserve(e));
    }
  );
}
var kR = { some: 0, all: 1 },
  CR = class extends Dr {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = "some", once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == "number" ? r : kR[r],
        },
        s = (a) => {
          let { isIntersecting: l } = a;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          (l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l));
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(a);
        };
      return SR(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: t } = this.node;
      ["amount", "margin", "root"].some(TR(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function TR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Py = {
    inView: { Feature: CR },
    tap: { Feature: yR },
    focus: { Feature: gR },
    hover: { Feature: vR },
  },
  _y = class {
    constructor(
      e,
      t,
      {
        transformPagePoint: n,
        contextWindow: r,
        dragSnapToOrigin: i = !1,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = M),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let u = Qu(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = fy(u.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          let { point: h } = u,
            { timestamp: y } = Ne;
          this.history.push({ ...h, timestamp: y });
          let { onStart: g, onMove: b } = this.handlers;
          (f ||
            (g && g(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            b && b(this.lastMoveEvent, u));
        }),
        (this.handlePointerMove = (u, f) => {
          ((this.lastMoveEvent = u),
            (this.lastMoveEventInfo = Ku(f, this.transformPagePoint)),
            G.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (u, f) => {
          this.end();
          let { onEnd: d, onSessionEnd: h, resumeAnimation: y } = this.handlers;
          if (
            (this.dragSnapToOrigin && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let g = Qu(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Ku(f, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && d && d(u, g), h && h(u, g));
        }),
        !Eg(e))
      )
        return;
      ((this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || M));
      let o = xl(e),
        s = Ku(o, this.transformPagePoint),
        { point: a } = s,
        { timestamp: l } = Ne;
      this.history = [{ ...a, timestamp: l }];
      let { onSessionStart: c } = t;
      (c && c(e, Qu(s, this.history)),
        (this.removeListeners = $n(
          Bn(this.contextWindow, "pointermove", this.handlePointerMove),
          Bn(this.contextWindow, "pointerup", this.handlePointerUp),
          Bn(this.contextWindow, "pointercancel", this.handlePointerUp),
        )));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(), _t(this.updatePoint));
    }
  };
function Ku(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Sv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Qu({ point: e }, t) {
  return {
    point: e,
    delta: Sv(e, Iy(t)),
    offset: Sv(e, ER(t)),
    velocity: RR(t, 0.1),
  };
}
function ER(e) {
  return e[0];
}
function Iy(e) {
  return e[e.length - 1];
}
function RR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Iy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > zn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = Nn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function PR(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Pe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Pe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function kv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function _R(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: kv(e.x, n, i), y: kv(e.y, t, r) };
}
function Cv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function IR(e, t) {
  return { x: Cv(e.x, t.x), y: Cv(e.y, t.y) };
}
function FR(e, t) {
  let n = 0.5,
    r = At(e),
    i = At(t);
  return (
    i > r
      ? (n = Mr(t.min, t.max - r, e.min))
      : r > i && (n = Mr(e.min, e.max - i, t.min)),
    or(0, 1, n)
  );
}
function MR(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var yf = 0.35;
function LR(e = yf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = yf),
    { x: Tv(e, "left", "right"), y: Tv(e, "top", "bottom") }
  );
}
function Tv(e, t, n) {
  return { min: Ev(e, t), max: Ev(e, n) };
}
function Ev(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
function fn(e) {
  return [e("x"), e("y")];
}
function Fy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function OR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function DR(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Zu(e) {
  return e === void 0 || e === 1;
}
function bf({ scale: e, scaleX: t, scaleY: n }) {
  return !Zu(e) || !Zu(t) || !Zu(n);
}
function hi(e) {
  return (
    bf(e) ||
    My(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function My(e) {
  return Rv(e.x) || Rv(e.y);
}
function Rv(e) {
  return e && e !== "0%";
}
function fl(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function Pv(e, t, n, r, i) {
  return (i !== void 0 && (e = fl(e, i, r)), fl(e, n, r) + t);
}
function xf(e, t = 0, n = 1, r, i) {
  ((e.min = Pv(e.min, t, n, r, i)), (e.max = Pv(e.max, t, n, r, i)));
}
function Ly(e, { x: t, y: n }) {
  (xf(e.x, t.translate, t.scale, t.originPoint),
    xf(e.y, n.translate, n.scale, n.originPoint));
}
var _v = 0.999999999999,
  Iv = 1.0000000000001;
function AR(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (s = o.projectionDelta));
    let { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        eo(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Ly(e, s)),
      r && hi(o.latestValues) && eo(e, o.latestValues));
  }
  (t.x < Iv && t.x > _v && (t.x = 1), t.y < Iv && t.y > _v && (t.y = 1));
}
function Ir(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Fv(e, t, n, r, i = 0.5) {
  let o = Pe(e.min, e.max, i);
  xf(e, t, n, o, r);
}
function eo(e, t) {
  (Fv(e.x, t.x, t.scaleX, t.scale, t.originX),
    Fv(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Oy(e, t) {
  return Fy(DR(e.getBoundingClientRect(), t));
}
function VR(e, t, n) {
  let r = Oy(e, n),
    { scroll: i } = t;
  return (i && (Ir(r.x, i.offset.x), Ir(r.y, i.offset.y)), r);
}
var Dy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  BR = new WeakMap(),
  $R = class {
    constructor(e) {
      ((this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = ze()),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          (u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(xl(c, "page").point));
        },
        i = (c, u) => {
          var f;
          let { drag: d, dragPropagation: h, onDragStart: y } = this.getProps();
          if (
            d &&
            !h &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = _g(d)),
            !this.openGlobalLock)
          )
            return;
          ((this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            fn((b) => {
              let p = this.getAxisMotionValue(b).get() || 0;
              if (Vn.test(p)) {
                let { projection: m } = this.visualElement;
                if (m && m.layout) {
                  let v = m.layout.layoutBox[b];
                  v && (p = At(v) * (parseFloat(p) / 100));
                }
              }
              this.originPoint[b] = p;
            }),
            y && G.postRender(() => y(c, u)),
            (f = this.removeWillChange) === null ||
              f === void 0 ||
              f.call(this),
            (this.removeWillChange = pf(this.visualElement, "transform")));
          let { animationState: g } = this.visualElement;
          g && g.setActive("whileDrag", !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: h,
            onDrag: y,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: g } = u;
          if (d && this.currentDirection === null) {
            ((this.currentDirection = zR(g)),
              this.currentDirection !== null && h && h(this.currentDirection));
            return;
          }
          (this.updateAxis("x", u.point, g),
            this.updateAxis("y", u.point, g),
            this.visualElement.render(),
            y && y(c, u));
        },
        s = (c, u) => this.stop(c, u),
        a = () =>
          fn((c) => {
            var u;
            return (
              this.getAnimationState(c) === "paused" &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new _y(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: a,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: Dy(this.visualElement),
        },
      );
    }
    stop(e, t) {
      var n;
      (n = this.removeWillChange) === null || n === void 0 || n.call(this);
      let r = this.isDragging;
      if ((this.cancel(), !r)) return;
      let { velocity: i } = t;
      this.startAnimation(i);
      let { onDragEnd: o } = this.getProps();
      o && G.postRender(() => o(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive("whileDrag", !1));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Ja(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (o = PR(o, this.constraints[e], this.elastic[e])),
        i.set(o));
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
              ? void 0
              : e.layout,
        i = this.constraints;
      (t && Qi(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
          ? (this.constraints = _R(r.layoutBox, t))
          : (this.constraints = !1),
        (this.elastic = LR(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          fn((o) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(o) &&
              (this.constraints[o] = MR(r.layoutBox[o], this.constraints[o]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Qi(e)) return !1;
      let n = e.current;
      qt(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = VR(n, r.root, this.visualElement.getTransformPagePoint()),
        o = IR(r.layout.layoutBox, i);
      if (t) {
        let s = t(OR(o));
        ((this.hasMutatedConstraints = !!s), s && (o = Fy(s)));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = fn((c) => {
          if (!Ja(c, t, this.currentDirection)) return;
          let u = (a && a[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            h = {
              type: "inertia",
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, h);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return n.start(
        Jf(e, n, 0, t, this.visualElement, !1, pf(this.visualElement, e)),
      );
    }
    stopAnimation() {
      fn((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      fn((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      fn((t) => {
        let { drag: n } = this.getProps();
        if (!Ja(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: s } = r.layout.layoutBox[t];
          i.set(e[t] - Pe(o, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Qi(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      fn((o) => {
        let s = this.getAxisMotionValue(o);
        if (s && this.constraints !== !1) {
          let a = s.get();
          r[o] = FR({ min: a, max: a }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        fn((o) => {
          if (!Ja(o, e, null)) return;
          let s = this.getAxisMotionValue(o),
            { min: a, max: l } = this.constraints[o];
          s.set(Pe(a, l, r[o]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      BR.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Bn(e, "pointerdown", (a) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(a);
        }),
        n = () => {
          let { dragConstraints: a } = this.getProps();
          Qi(a) &&
            a.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", n);
      (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        G.read(n));
      let o = ir(M, "resize", () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          "didUpdate",
          ({ delta: a, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (fn((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += a[c].translate),
                  u.set(u.get() + a[c].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (o(), t(), i(), s && s());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = yf,
          dragMomentum: s = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: s,
      };
    }
  };
function Ja(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function zR(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
var NR = class extends Dr {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = mt),
        (this.removeListeners = mt),
        (this.controls = new $R(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || mt));
    }
    unmount() {
      (this.removeGroupControls(), this.removeListeners());
    }
  },
  Mv = (e) => (t, n) => {
    e && G.postRender(() => e(t, n));
  },
  HR = class extends Dr {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = mt));
    }
    onPointerDown(e) {
      this.session = new _y(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Dy(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: Mv(e),
        onStart: Mv(t),
        onMove: n,
        onEnd: (i, o) => {
          (delete this.session, r && G.postRender(() => r(i, o)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Bn(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  nl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Lv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var is = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (K.test(e)) e = parseFloat(e);
        else return e;
      let n = Lv(e, t.target.x),
        r = Lv(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  jR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = sr.parse(e);
      if (i.length > 5) return r;
      let o = sr.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + s] /= a), (i[1 + s] /= l));
      let c = Pe(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  WR = class extends Ee {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (Ff(UR),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (nl.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                G.postRender(() => {
                  let s = o.getStack();
                  (!s || !s.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        Rf.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Ay(e) {
  let [t, n] = id(),
    r = B(ms);
  return k(WR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: B(vl),
    isPresent: t,
    safeToRemove: n,
  });
}
var UR = {
    borderRadius: {
      ...is,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: is,
    borderTopRightRadius: is,
    borderBottomLeftRadius: is,
    borderBottomRightRadius: is,
    boxShadow: jR,
  },
  Vy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  XR = Vy.length,
  Ov = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Dv = (e) => typeof e == "number" || K.test(e);
function YR(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Pe(0, n.opacity !== void 0 ? n.opacity : 1, GR(r))),
      (e.opacityExit = Pe(t.opacity !== void 0 ? t.opacity : 1, 0, qR(r))))
    : o &&
      (e.opacity = Pe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < XR; s++) {
    let a = `border${Vy[s]}Radius`,
      l = Av(t, a),
      c = Av(n, a);
    if (l === void 0 && c === void 0) continue;
    (l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Dv(l) === Dv(c)
        ? ((e[a] = Math.max(Pe(Ov(l), Ov(c), r), 0)),
          (Vn.test(c) || Vn.test(l)) && (e[a] += "%"))
        : (e[a] = c));
  }
  (t.rotate || n.rotate) && (e.rotate = Pe(t.rotate || 0, n.rotate || 0, r));
}
function Av(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var GR = By(0, 0.5, zf),
  qR = By(0.5, 0.95, mt);
function By(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Mr(e, t, r)));
}
function Vv(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function un(e, t) {
  (Vv(e.x, t.x), Vv(e.y, t.y));
}
function Bv(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function $v(e, t, n, r, i) {
  return (
    (e -= t),
    (e = fl(e, 1 / n, r)),
    i !== void 0 && (e = fl(e, 1 / i, r)),
    e
  );
}
function KR(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Vn.test(t) &&
      ((t = parseFloat(t)), (t = Pe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = Pe(o.min, o.max, r);
  (e === o && (a -= t),
    (e.min = $v(e.min, t, n, a, i)),
    (e.max = $v(e.max, t, n, a, i)));
}
function zv(e, t, [n, r, i], o, s) {
  KR(e, t[n], t[r], t[i], t.scale, o, s);
}
var QR = ["x", "scaleX", "originX"],
  ZR = ["y", "scaleY", "originY"];
function Nv(e, t, n, r) {
  (zv(e.x, t, QR, n ? n.x : void 0, r ? r.x : void 0),
    zv(e.y, t, ZR, n ? n.y : void 0, r ? r.y : void 0));
}
function Hv(e) {
  return e.translate === 0 && e.scale === 1;
}
function $y(e) {
  return Hv(e.x) && Hv(e.y);
}
function jv(e, t) {
  return e.min === t.min && e.max === t.max;
}
function JR(e, t) {
  return jv(e.x, t.x) && jv(e.y, t.y);
}
function Wv(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function zy(e, t) {
  return Wv(e.x, t.x) && Wv(e.y, t.y);
}
function Uv(e) {
  return At(e.x) / At(e.y);
}
function Xv(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var eP = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    (yl(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (ks(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      (n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      (t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function tP(e, t, n) {
  let r = "",
    i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = n?.z || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: d,
      skewX: h,
      skewY: y,
    } = n;
    (c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      h && (r += `skewX(${h}deg) `),
      y && (r += `skewY(${y}deg) `));
  }
  let a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
function Ny(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function dd(e, t, n) {
  let r = Fe(e) ? e : He(e);
  return (r.start(Jf("", r, t, n)), r.animation);
}
var pi = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ls = typeof M < "u" && M.MotionDebug !== void 0,
  Ju = ["", "X", "Y", "Z"],
  nP = { visibility: "hidden" },
  Yv = 1e3,
  rP = 0;
function ef(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Hy(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  let { visualElement: t } = e.options;
  return t
    ? cy(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
        ? Hy(e.parent)
        : !1
    : !1;
}
function jy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t?.()) {
      ((this.id = rP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            ls &&
              (pi.totalNodes =
                pi.resolvedTargetDeltas =
                pi.recalculatedProjection =
                  0),
            this.nodes.forEach(sP),
            this.nodes.forEach(fP),
            this.nodes.forEach(dP),
            this.nodes.forEach(aP),
            ls && M.MotionDebug.record(pi));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new py());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Kf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = Ny(s)), (this.instance = s));
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = my(d, 250)),
            nl.hasAnimatedSinceResize &&
              ((nl.hasAnimatedSinceResize = !1), this.nodes.forEach(qv)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let g = this.options.transition || u.getDefaultTransition() || gP,
                { onLayoutAnimationStart: b, onLayoutAnimationComplete: p } =
                  u.getProps(),
                m = !this.targetLayout || !zy(this.targetLayout, y) || h,
                v = !d && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (d && (m || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, v));
                let x = { ...Qf(g, "layout"), onPlay: b, onComplete: p };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x));
              } else
                (d || qv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = y;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        _t(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(hP),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (M.HandoffCancelAllAnimations &&
          Hy(this) &&
          M.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Gv));
        return;
      }
      (this.isUpdating || this.nodes.forEach(cP),
        (this.isUpdating = !1),
        this.nodes.forEach(uP),
        this.nodes.forEach(iP),
        this.nodes.forEach(oP),
        this.clearAllSnapshots());
      let a = Fr.now();
      ((Ne.delta = or(0, 1e3 / 60, a - Ne.timestamp)),
        (Ne.timestamp = a),
        (Ne.isProcessing = !0),
        el.update.process(Ne),
        el.preRender.process(Ne),
        el.render.process(Ne),
        (Ne.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Rf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(lP), this.sharedNodes.forEach(pP));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        G.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      G.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let s = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = ze()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      (this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          }));
    }
    resetTransform() {
      if (!i) return;
      let s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !$y(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || hi(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        yP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: s } = this.options;
      if (!s) return ze();
      let a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return (l && (Ir(a.x, l.offset.x), Ir(a.y, l.offset.y)), a);
    }
    removeElementScroll(s) {
      let a = ze();
      un(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            un(a, s);
            let { scroll: d } = this.root;
            d && (Ir(a.x, -d.offset.x), Ir(a.y, -d.offset.y));
          }
          (Ir(a.x, u.offset.x), Ir(a.y, u.offset.y));
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      let l = ze();
      un(l, s);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        (!a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          eo(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          hi(u.latestValues) && eo(l, u.latestValues));
      }
      return (hi(this.latestValues) && eo(l, this.latestValues), l);
    }
    removeTransform(s) {
      let a = ze();
      un(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !hi(c.latestValues)) continue;
        bf(c.latestValues) && c.updateSnapshot();
        let u = ze(),
          f = c.measurePageBox();
        (un(u, f),
          Nv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u));
      }
      return (hi(this.latestValues) && Nv(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      let l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Ne.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ze()),
              (this.relativeTargetOrigin = ze()),
              hs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox,
              ),
              un(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ze()), (this.targetWithTransforms = ze())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                QE(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : un(this.target, this.layout.layoutBox),
                  Ly(this.target, this.targetDelta))
                : un(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ze()),
                (this.relativeTargetOrigin = ze()),
                hs(this.relativeTargetOrigin, this.target, h.target),
                un(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ls && pi.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          bf(this.parent.latestValues) ||
          My(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      let a = this.getLead(),
        l = !!this.resumingFrom || this !== a,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Ne.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      un(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        h = this.treeScale.y;
      (AR(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ze())));
      let { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Bv(this.prevProjectionDelta.x, this.projectionDelta.x),
          Bv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ds(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== h ||
          !Xv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Xv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        ls && pi.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        let l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Ji()),
        (this.projectionDelta = Ji()),
        (this.projectionDeltaWithTransform = Ji()));
    }
    setAnimationOrigin(s, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = Ji();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      let d = ze(),
        h = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        g = h !== y,
        b = this.getStack(),
        p = !b || b.members.length <= 1,
        m = !!(g && !p && this.options.crossfade === !0 && !this.path.some(vP));
      this.animationProgress = 0;
      let v;
      ((this.mixTargetDelta = (x) => {
        let C = x / 1e3;
        (Kv(f.x, s.x, C),
          Kv(f.y, s.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (hs(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            mP(this.relativeTarget, this.relativeTargetOrigin, d, C),
            v && JR(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = ze()),
            un(v, this.relativeTarget)),
          g &&
            ((this.animationValues = u), YR(u, c, this.latestValues, C, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (_t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = G.update(() => {
          ((nl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = dd(0, Yv, {
              ...s,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a));
              },
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Yv),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Wy(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || ze();
          let f = At(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + f));
          let d = At(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + d));
        }
        (un(a, l),
          eo(a, u),
          ds(this.projectionDeltaWithTransform, this.layoutCorrected, a, u));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new eP()),
        this.sharedNodes.get(s).add(a));
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      (c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      let c = {};
      l.z && ef("z", s, c, this.animationValues);
      for (let u = 0; u < Ju.length; u++)
        (ef(`rotate${Ju[u]}`, s, c, this.animationValues),
          ef(`skew${Ju[u]}`, s, c, this.animationValues));
      s.render();
      for (let u in c)
        (s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]));
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return nP;
      let c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = xt(s?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = xt(s?.pointerEvents) || "")),
          this.hasProjected &&
            !hi(this.latestValues) &&
            ((g.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      let d = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (c.transform = tP(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        u && (c.transform = u(d, c.transform)));
      let { x: h, y } = this.projectionDelta;
      ((c.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0));
      for (let g in ol) {
        if (d[g] === void 0) continue;
        let { correct: b, applyTo: p } = ol[g],
          m = c.transform === "none" ? d[g] : b(d[g], f);
        if (p) {
          let v = p.length;
          for (let x = 0; x < v; x++) c[p[x]] = m;
        } else c[g] = m;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? xt(s?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Gv),
        this.root.sharedNodes.clear());
    }
  };
}
function iP(e) {
  e.updateLayout();
}
function oP(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? fn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = At(d);
          ((d.min = r[f].min), (d.max = d.min + h));
        })
      : Wy(o, n.layoutBox, r) &&
        fn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = At(r[f]);
          ((d.max = d.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + h)));
        });
    let a = Ji();
    ds(a, r, n.layoutBox);
    let l = Ji();
    s ? ds(l, e.applyTransform(i, !0), n.measuredBox) : ds(l, r, n.layoutBox);
    let c = !$y(a),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: h } = f;
        if (d && h) {
          let y = ze();
          hs(y, n.layoutBox, d.layoutBox);
          let g = ze();
          (hs(g, r, h.layoutBox),
            zy(y, g) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function sP(e) {
  (ls && pi.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function aP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function lP(e) {
  e.clearSnapshot();
}
function Gv(e) {
  e.clearMeasurements();
}
function cP(e) {
  e.isLayoutDirty = !1;
}
function uP(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function qv(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function fP(e) {
  e.resolveTargetDelta();
}
function dP(e) {
  e.calcProjection();
}
function hP(e) {
  e.resetSkewAndRotation();
}
function pP(e) {
  e.removeLeadSnapshot();
}
function Kv(e, t, n) {
  ((e.translate = Pe(t.translate, 0, n)),
    (e.scale = Pe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Qv(e, t, n, r) {
  ((e.min = Pe(t.min, n.min, r)), (e.max = Pe(t.max, n.max, r)));
}
function mP(e, t, n, r) {
  (Qv(e.x, t.x, n.x, r), Qv(e.y, t.y, n.y, r));
}
function vP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var gP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Zv = (e) =>
    typeof Ke < "u" && Ke.userAgent && Ke.userAgent.toLowerCase().includes(e),
  Jv = Zv("applewebkit/") && !Zv("chrome/") ? Math.round : mt;
function eg(e) {
  ((e.min = Jv(e.min)), (e.max = Jv(e.max)));
}
function yP(e) {
  (eg(e.x), eg(e.y));
}
function Wy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !KE(Uv(t), Uv(n), 0.2))
  );
}
var bP = jy({
    attachResizeListener: (e, t) => ir(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  yi = { current: void 0 },
  Uy = jy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!yi.current) {
        let e = new bP({});
        (e.mount(M), e.setOptions({ layoutScroll: !0 }), (yi.current = e));
      }
      return yi.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => M.getComputedStyle(e).position === "fixed",
  }),
  Xy = {
    pan: { Feature: HR },
    drag: { Feature: NR, ProjectionNode: Uy, MeasureLayout: Ay },
  },
  Yy = class extends gy {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = iy));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
  };
function xP(e) {
  return M.getComputedStyle(e);
}
var Gy = class extends Yy {
    constructor() {
      (super(...arguments),
        (this.type = "html"),
        (this.applyWillChange = !0),
        (this.renderInstance = Sy));
    }
    readValueFromInstance(e, t) {
      if (Or.has(t)) {
        let n = Gf(t);
        return (n && n.default) || 0;
      } else {
        let n = xP(e),
          r = (jg(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Oy(e, t);
    }
    build(e, t, n) {
      ad(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return fd(e, t, n);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Fe(e) &&
        (this.childSubscription = e.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
  },
  qy = class extends Yy {
    constructor() {
      (super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = ze));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Or.has(t)) {
        let n = Gf(t);
        return (n && n.default) || 0;
      }
      return ((t = ky.has(t) ? t : hl(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Ty(e, t, n);
    }
    build(e, t, n) {
      cd(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      Cy(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = ud(e.tagName)), super.mount(e));
    }
  },
  Ky = (e, t) => (sd(e) ? new qy(t) : new Gy(t, { allowProjection: e !== Rr })),
  Qy = { layout: { ProjectionNode: Uy, MeasureLayout: Ay } },
  wP = { ...rd, ...Py, ...Xy, ...Qy },
  Qe = yy((e, t) => Ey(e, t, wP, Ky));
var SP = yy(Ey);
function Zy() {
  let e = A(!1);
  return (
    Lr(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function El() {
  let e = Zy(),
    [t, n] = it(0),
    r = oe(() => {
      e.current && n(t + 1);
    }, [t]);
  return [oe(() => G.postRender(r), [r]), t];
}
function Jy(e) {
  return N(() => () => e(), []);
}
var kP = class extends Ee {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      ((n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function CP({ children: e, isPresent: t }) {
  let n = Ki(),
    r = A(null),
    i = A({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = B(Hn);
  return (
    dt(() => {
      let { width: s, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      let u = document.createElement("style");
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    k(kP, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: An(e, { ref: r }),
    })
  );
}
var tf = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  let a = lr(TP),
    l = Ki(),
    c = le(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (let f of a.values()) if (!f) return;
          r && r();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? [Math.random()] : [n],
    );
  return (
    le(() => {
      a.forEach((u, f) => a.set(f, !1));
    }, [n]),
    N(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = k(CP, { isPresent: n, children: e })),
    k(io.Provider, { value: c, children: e })
  );
};
function TP() {
  return new Map();
}
var mi = (e) => e.key || "";
function EP(e, t) {
  e.forEach((n) => {
    let r = mi(n);
    t.set(r, n);
  });
}
function RP(e) {
  let t = [];
  return (
    rr.forEach(e, (n) => {
      Gt(n) && t.push(n);
    }),
    t
  );
}
var hd = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  qt(!i, "Replace exitBeforeEnter with mode='wait'");
  let a = B(ms).forceRender || El()[0],
    l = Zy(),
    c = RP(e),
    u = c,
    f = A(new Map()).current,
    d = A(u),
    h = A(new Map()).current,
    y = A(!0);
  if (
    (Lr(() => {
      ((y.current = !1), EP(c, h), (d.current = u));
    }),
    Jy(() => {
      ((y.current = !0), h.clear(), f.clear());
    }),
    y.current)
  )
    return k(Re, {
      children: u.map((m) =>
        k(
          tf,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s,
            children: m,
          },
          mi(m),
        ),
      ),
    });
  u = [...u];
  let g = d.current.map(mi),
    b = c.map(mi),
    p = g.length;
  for (let m = 0; m < p; m++) {
    let v = g[m];
    b.indexOf(v) === -1 && !f.has(v) && f.set(v, void 0);
  }
  return (
    s === "wait" && f.size && (u = []),
    f.forEach((m, v) => {
      if (b.indexOf(v) !== -1) return;
      let x = h.get(v);
      if (!x) return;
      let C = g.indexOf(v),
        w = m;
      (w ||
        ((w = k(
          tf,
          {
            isPresent: !1,
            onExitComplete: () => {
              f.delete(v);
              let T = Array.from(h.keys()).filter((F) => !b.includes(F));
              if (
                (T.forEach((F) => h.delete(F)),
                (d.current = c.filter((F) => {
                  let _ = mi(F);
                  return _ === v || T.includes(_);
                })),
                !f.size)
              ) {
                if (l.current === !1) return;
                (a(), r && r());
              }
            },
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: x,
          },
          mi(x),
        )),
        f.set(v, w)),
        u.splice(C, 0, w));
    }),
    (u = u.map((m) => {
      let v = m.key;
      return f.has(v)
        ? m
        : k(
            tf,
            { isPresent: !0, presenceAffectsLayout: o, mode: s, children: m },
            mi(m),
          );
    })),
    k(Re, { children: f.size ? u : u.map((m) => An(m)) })
  );
};
function e0({ children: e, isValidProp: t, ...n }) {
  (t && Sg(t), (n = { ...B(Hn), ...n }), (n.isStatic = lr(() => n.isStatic)));
  let r = le(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion],
  );
  return k(Hn.Provider, { value: r, children: e });
}
var t0 = xe(null),
  PP = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function tg() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(PP);
  return {
    add: (r) => {
      (e.add(r), t.set(r, r.addEventListener("willUpdate", n)));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      (i && (i(), t.delete(r)), n());
    },
    dirty: n,
  };
}
var n0 = (e) => e === !0,
  _P = (e) => n0(e === !0) || e === "id",
  r0 = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = B(ms),
      i = B(t0),
      [o, s] = El(),
      a = A(null),
      l = r.id || i;
    a.current === null &&
      (_P(n) && l && (t = t ? l + "-" + t : l),
      (a.current = { id: t, group: (n0(n) && r.group) || tg() }));
    let c = le(() => ({ ...a.current, forceRender: o }), [s]);
    return k(ms.Provider, { value: c, children: e });
  };
function Wn(e) {
  let t = lr(() => He(e)),
    { isStatic: n } = B(Hn);
  if (n) {
    let [, r] = it(e);
    N(() => t.on("change", r), []);
  }
  return t;
}
var IP = (e) => e && typeof e == "object" && e.mix,
  FP = (e) => (IP(e) ? e.mix : void 0);
function Es(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = lo(i, o, { mixer: FP(o[0]), ...s });
  return t ? a(r) : a;
}
function i0(e, t) {
  let n = Wn(t()),
    r = () => n.set(t());
  return (
    r(),
    Lr(() => {
      let i = () => G.preRender(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        (o.forEach((s) => s()), _t(r));
      };
    }),
    n
  );
}
function MP(e) {
  ((fs.current = []), e());
  let t = i0(fs.current, e);
  return ((fs.current = void 0), t);
}
function It(e, t, n, r) {
  if (typeof e == "function") return MP(e);
  let i = typeof t == "function" ? t : Es(t, n, r);
  return Array.isArray(e) ? ng(e, i) : ng([e], ([o]) => i(o));
}
function ng(e, t) {
  let n = lr(() => []);
  return i0(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
var o0 = xe(null);
function LP(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  let a = e[i],
    l = s.layout,
    c = Pe(l.min, l.max, 0.5);
  return (o === 1 && a.layout.max + n > c) || (o === -1 && a.layout.min + n < c)
    ? cT(e, i, i + o)
    : e;
}
function OP(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  s,
) {
  let a = lr(() => Qe(t)),
    l = [],
    c = A(!1);
  qt(!!i, "Reorder.Group must be provided a values prop");
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let h = l.findIndex((y) => f === y.value);
      (h !== -1 ? (l[h].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(AP));
    },
    updateOrder: (f, d, h) => {
      if (c.current) return;
      let y = LP(l, f, d, h);
      l !== y &&
        ((c.current = !0), r(y.map(DP).filter((g) => i.indexOf(g) !== -1)));
    },
  };
  return (
    N(() => {
      c.current = !1;
    }),
    k(a, {
      ...o,
      ref: s,
      ignoreStrict: !0,
      children: k(o0.Provider, { value: u, children: e }),
    })
  );
}
var V$ = Oe(OP);
function DP(e) {
  return e.value;
}
function AP(e, t) {
  return e.layout.min - t.layout.min;
}
function rg(e, t = 0) {
  return Fe(e) ? e : Wn(t);
}
function VP(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...s
  },
  a,
) {
  let l = lr(() => Qe(r)),
    c = B(o0),
    u = { x: rg(t.x), y: rg(t.y) },
    f = It([u.x, u.y], ([g, b]) => (g || b ? 1 : "unset"));
  qt(!!c, "Reorder.Item must be a child of Reorder.Group");
  let { axis: d, registerItem: h, updateOrder: y } = c;
  return k(l, {
    drag: d,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: u.x, y: u.y, zIndex: f },
    layout: o,
    onDrag: (g, b) => {
      let { velocity: p } = b;
      (p[d] && y(n, u[d].get(), p[d]), i && i(g, b));
    },
    onLayoutMeasure: (g) => h(n, g),
    ref: a,
    ignoreStrict: !0,
    children: e,
  });
}
var z$ = Oe(VP);
var s0 = { renderer: Ky, ...rd, ...Py },
  BP = { ...s0, ...Xy, ...Qy };
function pd(e, t = {}) {
  let { isStatic: n } = B(Hn),
    r = A(null),
    i = Wn(Fe(e) ? e.get() : e),
    o = A(i.get()),
    s = A(() => {}),
    a = () => {
      let c = r.current;
      (c && c.time === 0 && c.sample(Ne.delta),
        l(),
        (r.current = Yf({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        })));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    dt(
      () =>
        i.attach(
          (c, u) =>
            n ? u(c) : ((o.current = c), (s.current = u), G.update(a), i.get()),
          l,
        ),
      [JSON.stringify(t)],
    ),
    Lr(() => {
      if (Fe(e)) return e.on("change", (c) => i.set(parseFloat(c)));
    }, [i]),
    i
  );
}
function Rl(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    (t &&
      (qt(!!t.current, "Scope provided, but no element detected."),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e)));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
var rl = new WeakMap(),
  _r;
function $P(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function zP({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = rl.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return $P(e, n);
        },
      });
    });
}
function NP(e) {
  e.forEach(zP);
}
function HP() {
  typeof ResizeObserver > "u" || (_r = new ResizeObserver(NP));
}
function jP(e, t) {
  _r || HP();
  let n = Rl(e);
  return (
    n.forEach((r) => {
      let i = rl.get(r);
      (i || ((i = new Set()), rl.set(r, i)), i.add(t), _r?.observe(r));
    }),
    () => {
      n.forEach((r) => {
        let i = rl.get(r);
        (i?.delete(t), i?.size || _r?.unobserve(r));
      });
    }
  );
}
var il = new Set(),
  ps;
function WP() {
  ((ps = () => {
    let e = { width: M.innerWidth, height: M.innerHeight },
      t = { target: M, size: e, contentSize: e };
    il.forEach((n) => n(t));
  }),
    M.addEventListener("resize", ps));
}
function UP(e) {
  return (
    il.add(e),
    ps || WP(),
    () => {
      (il.delete(e), !il.size && ps && (ps = void 0));
    }
  );
}
function XP(e, t) {
  return typeof e == "function" ? UP(e) : jP(e, t);
}
var YP = 50,
  ig = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  GP = () => ({ time: 0, x: ig(), y: ig() }),
  qP = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function og(e, t, n, r) {
  let i = n[t],
    { length: o, position: s } = qP[t],
    a = i.current,
    l = n.time;
  ((i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Mr(0, i.scrollLength, i.current)));
  let c = r - l;
  i.velocity = c > YP ? 0 : Af(i.current - a, c);
}
function KP(e, t, n) {
  (og(e, "x", t, n), og(e, "y", t, n), (t.time = n));
}
function QP(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === "svg") {
      let i = r.getBoundingClientRect();
      r = r.parentElement;
      let o = r.getBoundingClientRect();
      ((n.x += i.left - o.left), (n.y += i.top - o.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: i, y: o } = r.getBBox();
      ((n.x += i), (n.y += o));
      let s = null,
        a = r.parentNode;
      for (; !s; ) (a.tagName === "svg" && (s = a), (a = r.parentNode));
      r = s;
    } else break;
  return n;
}
var ZP = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  wf = { start: 0, center: 0.5, end: 1 };
function sg(e, t, n = 0) {
  let r = 0;
  if ((e in wf && (e = wf[e]), typeof e == "string")) {
    let i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
        ? (e = i / 100)
        : e.endsWith("vw")
          ? (r = (i / 100) * document.documentElement.clientWidth)
          : e.endsWith("vh")
            ? (r = (i / 100) * document.documentElement.clientHeight)
            : (e = i);
  }
  return (typeof e == "number" && (r = t * e), n + r);
}
var JP = [0, 0];
function e_(e, t, n, r) {
  let i = Array.isArray(e) ? e : JP,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, wf[e] ? e : "0"])),
    (o = sg(i[0], n, r)),
    (s = sg(i[1], t)),
    o - s
  );
}
var t_ = { x: 0, y: 0 };
function n_(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function r_(e, t, n) {
  let { offset: r = ZP.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    a = i !== e ? QP(i, e) : t_,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : n_(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let u = !t[o].interpolate,
    f = r.length;
  for (let d = 0; d < f; d++) {
    let h = e_(r[d], c[s], l[s], a[o]);
    (!u && h !== t[o].interpolatorOffsets[d] && (u = !0), (t[o].offset[d] = h));
  }
  (u &&
    ((t[o].interpolate = lo(t[o].offset, Xf(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current)));
}
function i_(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      ((n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function o_(e, t, n, r = {}) {
  return {
    measure: () => i_(e, r.target, n),
    update: (i) => {
      (KP(e, n, i), (r.offset || r.target) && r_(e, n, r));
    },
    notify: () => t(n),
  };
}
var os = new WeakMap(),
  ag = new WeakMap(),
  nf = new WeakMap(),
  lg = (e) => (e === document.documentElement ? M : e);
function co(e, { container: t = document.documentElement, ...n } = {}) {
  let r = nf.get(t);
  r || ((r = new Set()), nf.set(t, r));
  let i = GP(),
    o = o_(t, e, i, n);
  if ((r.add(o), !os.has(t))) {
    let a = () => {
        for (let d of r) d.measure();
      },
      l = () => {
        for (let d of r) d.update(Ne.timestamp);
      },
      c = () => {
        for (let d of r) d.notify();
      },
      u = () => {
        (G.read(a, !1, !0), G.read(l, !1, !0), G.update(c, !1, !0));
      };
    os.set(t, u);
    let f = lg(t);
    (M.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && ag.set(t, XP(t, u)),
      f.addEventListener("scroll", u, { passive: !0 }));
  }
  let s = os.get(t);
  return (
    G.read(s, !1, !0),
    () => {
      var a;
      _t(s);
      let l = nf.get(t);
      if (!l || (l.delete(o), l.size)) return;
      let c = os.get(t);
      (os.delete(t),
        c &&
          (lg(t).removeEventListener("scroll", c),
          (a = ag.get(t)) === null || a === void 0 || a(),
          M.removeEventListener("resize", c)));
    }
  );
}
function cg(e, t) {
  oo(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`,
  );
}
var s_ = () => ({
  scrollX: He(0),
  scrollY: He(0),
  scrollXProgress: He(0),
  scrollYProgress: He(0),
});
function a0({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = lr(s_);
  return (
    (n ? Lr : N)(
      () => (
        cg("target", t),
        cg("container", e),
        co(
          ({ x: s, y: a }) => {
            (i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress));
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          },
        )
      ),
      [e, t, JSON.stringify(r.offset)],
    ),
    i
  );
}
function a_(e) {
  let t = A(0),
    { isStatic: n } = B(Hn);
  N(() => {
    if (n) return;
    let r = ({ timestamp: i, delta: o }) => {
      (t.current || (t.current = i), e(i - t.current, o));
    };
    return (G.update(r, !0), () => _t(r));
  }, [e]);
}
function l0() {
  !od.current && vy();
  let [e] = it(ul.current);
  return e;
}
function bi() {
  let e = l0(),
    { reducedMotion: t } = B(Hn);
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function l_(e) {
  e.values.forEach((t) => t.stop());
}
function Sf(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    (i && ed(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          Sf(o, t);
        }));
  });
}
function c_(e, t) {
  if (Array.isArray(t)) return Sf(e, t);
  if (typeof t == "string") return Sf(e, [t]);
  ed(e, t);
}
function c0() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return (t.add(r), () => void t.delete(r));
      },
      start(r, i) {
        qt(
          e,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.",
        );
        let o = [];
        return (
          t.forEach((s) => {
            o.push(nd(s, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          qt(
            e,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
          ),
          t.forEach((i) => {
            c_(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          l_(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            ((e = !1), n.stop());
          }
        );
      },
    };
  return n;
}
var u0 = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function u_(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function f_(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = Ny(e) ? new qy(t) : new Gy(t);
  (n.mount(e), ar.set(e, n));
}
function d_(e, t = 100) {
  let n = Cs({ keyframes: [0, t], ...e }),
    r = Math.min(Kg(n), ff);
  return {
    type: "keyframes",
    ease: (i) => n.next(r * i).value / t,
    duration: Nn(r),
  };
}
function ug(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
      ? Math.max(0, e + parseFloat(t))
      : t === "<"
        ? n
        : (i = r.get(t)) !== null && i !== void 0
          ? i
          : e;
}
function h_(e, t) {
  return Yg(e) ? e[u0(0, e.length, t)] : e;
}
function p_(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (ks(e, i), r--);
  }
}
function m_(e, t, n, r, i, o) {
  p_(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: Pe(i, o, r[s]), easing: h_(n, s) });
}
function v_(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
var g_ = "easeInOut";
function y_(e, { defaultTransition: t = {}, ...n } = {}, r) {
  let i = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    a = {},
    l = new Map(),
    c = 0,
    u = 0,
    f = 0;
  for (let d = 0; d < e.length; d++) {
    let h = e[d];
    if (typeof h == "string") {
      l.set(h, u);
      continue;
    } else if (!Array.isArray(h)) {
      l.set(h.name, ug(u, h.at, c, l));
      continue;
    }
    let [y, g, b = {}] = h;
    b.at !== void 0 && (u = ug(u, b.at, c, l));
    let p = 0,
      m = (v, x, C, w = 0, E = 0) => {
        let T = b_(v),
          { delay: F = 0, times: _ = Xf(T), type: $ = "keyframes", ...D } = x,
          { ease: q = t.ease || "easeOut", duration: W } = x,
          H = typeof F == "function" ? F(w, E) : F,
          U = T.length;
        if (U <= 2 && $ === "spring") {
          let ne = 100;
          if (U === 2 && S_(T)) {
            let de = T[1] - T[0];
            ne = Math.abs(de);
          }
          let ge = { ...D };
          W !== void 0 && (ge.duration = zn(W));
          let re = d_(ge, ne);
          ((q = re.ease), (W = re.duration));
        }
        W ?? (W = i);
        let ee = u + H,
          te = ee + W;
        _.length === 1 && _[0] === 0 && (_[1] = 1);
        let Y = _.length - T.length;
        (Y > 0 && Gg(_, Y),
          T.length === 1 && T.unshift(null),
          m_(C, T, q, _, ee, te),
          (p = Math.max(H + W, p)),
          (f = Math.max(te, f)));
      };
    if (Fe(y)) {
      let v = fg(y, s);
      m(g, b, dg("default", v));
    } else {
      let v = Rl(y, r, a),
        x = v.length;
      for (let C = 0; C < x; C++) {
        ((g = g), (b = b));
        let w = v[C],
          E = fg(w, s);
        for (let T in g) m(g[T], x_(b, T), dg(T, E), C, x);
      }
    }
    ((c = u), (u += p));
  }
  return (
    s.forEach((d, h) => {
      for (let y in d) {
        let g = d[y];
        g.sort(v_);
        let b = [],
          p = [],
          m = [];
        for (let x = 0; x < g.length; x++) {
          let { at: C, value: w, easing: E } = g[x];
          (b.push(w), p.push(Mr(0, f, C)), m.push(E || "easeOut"));
        }
        (p[0] !== 0 && (p.unshift(0), b.unshift(b[0]), m.unshift(g_)),
          p[p.length - 1] !== 1 && (p.push(1), b.push(null)),
          o.has(h) || o.set(h, { keyframes: {}, transition: {} }));
        let v = o.get(h);
        ((v.keyframes[y] = b),
          (v.transition[y] = { ...t, duration: f, ease: m, times: p, ...n }));
      }
    }),
    o
  );
}
function fg(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function dg(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function b_(e) {
  return Array.isArray(e) ? e : [e];
}
function x_(e, t) {
  return e[t] ? { ...e, ...e[t] } : { ...e };
}
var w_ = (e) => typeof e == "number",
  S_ = (e) => e.every(w_);
function f0(e, t, n, r) {
  let i = Rl(e, r),
    o = i.length;
  qt(!!o, "No valid element provided.");
  let s = [];
  for (let a = 0; a < o; a++) {
    let l = i[a];
    ar.has(l) || f_(l);
    let c = ar.get(l),
      u = { ...n };
    (typeof u.delay == "function" && (u.delay = u.delay(a, o)),
      s.push(...td(c, { ...t, transition: u }, {})));
  }
  return new Zf(s);
}
var k_ = (e) => Array.isArray(e) && Array.isArray(e[0]);
function C_(e, t, n) {
  let r = [];
  return (
    y_(e, t, n).forEach(({ keyframes: o, transition: s }, a) => {
      let l;
      (Fe(a) ? (l = dd(a, o.default, s.default)) : (l = f0(a, o, s)),
        r.push(l));
    }),
    new Zf(r)
  );
}
var d0 = (e) => {
    function t(n, r, i) {
      let o;
      return (
        k_(n)
          ? (o = C_(n, r, e))
          : u_(r)
            ? (o = f0(n, r, i, e))
            : (o = dd(n, r, i)),
        e && e.animations.push(o),
        o
      );
    }
    return t;
  },
  Un = d0();
function h0() {
  let e = lr(c0);
  return (Lr(e.mount, []), e);
}
var p0 = h0;
var T_ = { some: 0, all: 1 };
function Pl(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  let o = Rl(e),
    s = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        let f = s.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            let d = t(u);
            typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target);
          } else f && (f(u), s.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : T_[i],
    });
  return (o.forEach((c) => l.observe(c)), () => l.disconnect());
}
function E_(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  let [o, s] = it(!1);
  return (
    N(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Pl(e.current, a, l);
    }, [t, e, n, i, r]),
    o
  );
}
function md(e) {
  return e !== null && typeof e == "object" && If in e;
}
function m0(e) {
  if (md(e)) return e[If];
}
function vd() {
  return R_;
}
function R_(e) {
  yi.current &&
    ((yi.current.isUpdating = !1), yi.current.blockUpdate(), e && e());
}
function v0() {
  let [e, t] = El(),
    n = vd(),
    r = A();
  return (
    N(() => {
      G.postRender(() =>
        G.postRender(() => {
          t === r.current && (ll.current = !1);
        }),
      );
    }, [t]),
    (i) => {
      n(() => {
        ((ll.current = !0), e(), i(), (r.current = t + 1));
      });
    }
  );
}
function g0() {
  return oe(() => {
    let t = yi.current;
    t && t.resetTree();
  }, []);
}
var hg = () => ({});
var J$ = bl({ scrapeMotionValuesFromProps: hg, createRenderState: hg });
function P_(e, t) {
  if (e === "first") return 0;
  {
    let n = t - 1;
    return e === "last" ? n : n / 2;
  }
}
function gd(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, o) => {
    let s = typeof n == "number" ? n : P_(n, o),
      a = Math.abs(s - i),
      l = e * a;
    if (r) {
      let c = o * e;
      l = uf(r)(l / c) * c;
    }
    return t + l;
  };
}
var __ = ss.reduce((e, t) => ((e[t] = (n) => _t(n)), e), {});
var uF = {};
Wm(uF, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ZI,
  createPortal: () => JI,
  createRoot: () => eF,
  default: () => O1,
  findDOMNode: () => tF,
  flushSync: () => nF,
  hydrate: () => rF,
  hydrateRoot: () => iF,
  render: () => oF,
  unmountComponentAtNode: () => sF,
  unstable_batchedUpdates: () => aF,
  unstable_renderSubtreeIntoContainer: () => lF,
  version: () => cF,
});
var Ol = {};
Wm(Ol, {
  default: () => Q,
  unstable_IdlePriority: () => M_,
  unstable_ImmediatePriority: () => L_,
  unstable_LowPriority: () => O_,
  unstable_NormalPriority: () => D_,
  unstable_Profiling: () => A_,
  unstable_UserBlockingPriority: () => V_,
  unstable_cancelCallback: () => B_,
  unstable_continueExecution: () => $_,
  unstable_forceFrameRate: () => z_,
  unstable_getCurrentPriorityLevel: () => N_,
  unstable_getFirstCallbackNode: () => H_,
  unstable_next: () => j_,
  unstable_now: () => F_,
  unstable_pauseExecution: () => W_,
  unstable_requestPaint: () => U_,
  unstable_runWithPriority: () => X_,
  unstable_scheduleCallback: () => Y_,
  unstable_shouldYield: () => G_,
  unstable_wrapCallback: () => q_,
});
var Q = {};
function wd(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < _l(i, t))) break e;
    ((e[r] = t), (e[n] = i), (n = r));
  }
}
function kn(e) {
  return e.length === 0 ? null : e[0];
}
function Fl(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var s = 2 * (r + 1) - 1,
        a = e[s],
        l = s + 1,
        c = e[l];
      if (0 > _l(a, n))
        l < i && 0 > _l(c, a)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = a), (e[s] = n), (r = s));
      else {
        if (!(l < i && 0 > _l(c, n))) break e;
        ((e[r] = c), (e[l] = n), (r = l));
      }
    }
  }
  return t;
}
function _l(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == "object" && typeof performance.now == "function"
  ? ((y0 = performance),
    (Q.unstable_now = function () {
      return y0.now();
    }))
  : ((yd = Date),
    (b0 = yd.now()),
    (Q.unstable_now = function () {
      return yd.now() - b0;
    }));
var y0,
  yd,
  b0,
  Xn = [],
  Ar = [],
  I_ = 1,
  hn = null,
  wt = 3,
  Ml = !1,
  xi = !1,
  Ps = !1,
  S0 = typeof setTimeout == "function" ? setTimeout : null,
  k0 = typeof clearTimeout == "function" ? clearTimeout : null,
  x0 = typeof setImmediate < "u" ? setImmediate : null;
typeof Ke < "u" &&
  Ke.scheduling !== void 0 &&
  Ke.scheduling.isInputPending !== void 0 &&
  Ke.scheduling.isInputPending.bind(Ke.scheduling);
function Sd(e) {
  for (var t = kn(Ar); t !== null; ) {
    if (t.callback === null) Fl(Ar);
    else {
      if (!(t.startTime <= e)) break;
      (Fl(Ar), (t.sortIndex = t.expirationTime), wd(Xn, t));
    }
    t = kn(Ar);
  }
}
function kd(e) {
  if (((Ps = !1), Sd(e), !xi))
    if (kn(Xn) !== null) ((xi = !0), Td(Cd));
    else {
      var t = kn(Ar);
      t !== null && Ed(kd, t.startTime - e);
    }
}
function Cd(e, t) {
  ((xi = !1), Ps && ((Ps = !1), k0(_s), (_s = -1)), (Ml = !0));
  var n = wt;
  try {
    for (
      Sd(t), hn = kn(Xn);
      hn !== null && (!(hn.expirationTime > t) || (e && !E0()));

    ) {
      var r = hn.callback;
      if (typeof r == "function") {
        ((hn.callback = null), (wt = hn.priorityLevel));
        var i = r(hn.expirationTime <= t);
        ((t = Q.unstable_now()),
          typeof i == "function" ? (hn.callback = i) : hn === kn(Xn) && Fl(Xn),
          Sd(t));
      } else Fl(Xn);
      hn = kn(Xn);
    }
    if (hn !== null) var o = !0;
    else {
      var s = kn(Ar);
      (s !== null && Ed(kd, s.startTime - t), (o = !1));
    }
    return o;
  } finally {
    ((hn = null), (wt = n), (Ml = !1));
  }
}
var Ll = !1,
  Il = null,
  _s = -1,
  C0 = 5,
  T0 = -1;
function E0() {
  return !(Q.unstable_now() - T0 < C0);
}
function bd() {
  if (Il !== null) {
    var e = Q.unstable_now();
    T0 = e;
    var t = !0;
    try {
      t = Il(!0, e);
    } finally {
      t ? Rs() : ((Ll = !1), (Il = null));
    }
  } else Ll = !1;
}
var Rs;
typeof x0 == "function"
  ? (Rs = function () {
      x0(bd);
    })
  : typeof MessageChannel < "u"
    ? ((xd = new MessageChannel()),
      (w0 = xd.port2),
      (xd.port1.onmessage = bd),
      (Rs = function () {
        w0.postMessage(null);
      }))
    : (Rs = function () {
        S0(bd, 0);
      });
var xd, w0;
function Td(e) {
  ((Il = e), Ll || ((Ll = !0), Rs()));
}
function Ed(e, t) {
  _s = S0(function () {
    e(Q.unstable_now());
  }, t);
}
Q.unstable_IdlePriority = 5;
Q.unstable_ImmediatePriority = 1;
Q.unstable_LowPriority = 4;
Q.unstable_NormalPriority = 3;
Q.unstable_Profiling = null;
Q.unstable_UserBlockingPriority = 2;
Q.unstable_cancelCallback = function (e) {
  e.callback = null;
};
Q.unstable_continueExecution = function () {
  xi || Ml || ((xi = !0), Td(Cd));
};
Q.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
      )
    : (C0 = 0 < e ? Math.floor(1e3 / e) : 5);
};
Q.unstable_getCurrentPriorityLevel = function () {
  return wt;
};
Q.unstable_getFirstCallbackNode = function () {
  return kn(Xn);
};
Q.unstable_next = function (e) {
  switch (wt) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = wt;
  }
  var n = wt;
  wt = t;
  try {
    return e();
  } finally {
    wt = n;
  }
};
Q.unstable_pauseExecution = function () {};
Q.unstable_requestPaint = function () {};
Q.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = wt;
  wt = e;
  try {
    return t();
  } finally {
    wt = n;
  }
};
Q.unstable_scheduleCallback = function (e, t, n) {
  var r = Q.unstable_now();
  switch (
    (typeof n == "object" && n !== null
      ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: I_++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        wd(Ar, e),
        kn(Xn) === null &&
          e === kn(Ar) &&
          (Ps ? (k0(_s), (_s = -1)) : (Ps = !0), Ed(kd, n - r)))
      : ((e.sortIndex = i), wd(Xn, e), xi || Ml || ((xi = !0), Td(Cd))),
    e
  );
};
Q.unstable_shouldYield = E0;
Q.unstable_wrapCallback = function (e) {
  var t = wt;
  return function () {
    var n = wt;
    wt = t;
    try {
      return e.apply(this, arguments);
    } finally {
      wt = n;
    }
  };
};
var F_ = Q.unstable_now,
  M_ = Q.unstable_IdlePriority,
  L_ = Q.unstable_ImmediatePriority,
  O_ = Q.unstable_LowPriority,
  D_ = Q.unstable_NormalPriority,
  A_ = Q.unstable_Profiling,
  V_ = Q.unstable_UserBlockingPriority,
  B_ = Q.unstable_cancelCallback,
  $_ = Q.unstable_continueExecution,
  z_ = Q.unstable_forceFrameRate,
  N_ = Q.unstable_getCurrentPriorityLevel,
  H_ = Q.unstable_getFirstCallbackNode,
  j_ = Q.unstable_next,
  W_ = Q.unstable_pauseExecution,
  U_ = Q.unstable_requestPaint,
  X_ = Q.unstable_runWithPriority,
  Y_ = Q.unstable_scheduleCallback,
  G_ = Q.unstable_shouldYield,
  q_ = Q.unstable_wrapCallback;
var K_ = "default" in cn ? S : cn,
  Q_ = "default" in Ol ? Q : Ol,
  tn = {},
  Lb = K_,
  en = Q_;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ob = new Set(),
  Qs = {};
function Li(e, t) {
  (Fo(e, t), Fo(e + "Capture", t));
}
function Fo(e, t) {
  for (Qs[e] = t, e = 0; e < t.length; e++) Ob.add(t[e]);
}
var pr = !(
    typeof M > "u" ||
    typeof M.document > "u" ||
    typeof M.document.createElement > "u"
  ),
  qd = Object.prototype.hasOwnProperty,
  Z_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  R0 = {},
  P0 = {};
function J_(e) {
  return qd.call(P0, e)
    ? !0
    : qd.call(R0, e)
      ? !1
      : Z_.test(e)
        ? (P0[e] = !0)
        : ((R0[e] = !0), !1);
}
function e2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function t2(e, t, n, r) {
  if (t === null || typeof t > "u" || e2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Lt(e, t, n, r, i, o, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s));
}
var yt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new Lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  yt[t] = new Lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  yt[e] = new Lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  yt[e] = new Lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    yt[e] = new Lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  yt[e] = new Lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  yt[e] = new Lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  yt[e] = new Lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  yt[e] = new Lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zh = /[\-:]([a-z])/g;
function Nh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zh, Nh);
    yt[t] = new Lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zh, Nh);
    yt[t] = new Lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zh, Nh);
  yt[t] = new Lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  yt[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
yt.xlinkHref = new Lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  yt[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hh(e, t, n, r) {
  var i = yt.hasOwnProperty(t) ? yt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (t2(t, n, i, r) && (n = null),
    r || i === null
      ? J_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? i.type !== 3 && "" : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yr = Lb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Dl = Symbol.for("react.element"),
  ho = Symbol.for("react.portal"),
  po = Symbol.for("react.fragment"),
  jh = Symbol.for("react.strict_mode"),
  Kd = Symbol.for("react.profiler"),
  Db = Symbol.for("react.provider"),
  Ab = Symbol.for("react.context"),
  Wh = Symbol.for("react.forward_ref"),
  Qd = Symbol.for("react.suspense"),
  Zd = Symbol.for("react.suspense_list"),
  Uh = Symbol.for("react.memo"),
  Br = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Vb = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var _0 = Symbol.iterator;
function Is(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_0 && e[_0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rd,
  Ve = Object.assign;
function Bs(e) {
  if (Rd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Rd = (t && t[1]) || "";
    }
  return (
    `
` +
    Rd +
    e
  );
}
var Pd = !1;
function _d(e, t) {
  if (!e || Pd) return "";
  Pd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((Pd = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Bs(e) : "";
}
function n2(e) {
  switch (e.tag) {
    case 5:
      return Bs(e.type);
    case 16:
      return Bs("Lazy");
    case 13:
      return Bs("Suspense");
    case 19:
      return Bs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = _d(e.type, !1)), e);
    case 11:
      return ((e = _d(e.type.render, !1)), e);
    case 1:
      return ((e = _d(e.type, !0)), e);
    default:
      return "";
  }
}
function Jd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case po:
      return "Fragment";
    case ho:
      return "Portal";
    case Kd:
      return "Profiler";
    case jh:
      return "StrictMode";
    case Qd:
      return "Suspense";
    case Zd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ab:
        return (e.displayName || "Context") + ".Consumer";
      case Db:
        return (e._context.displayName || "Context") + ".Provider";
      case Wh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Uh:
        return (
          (t = e.displayName || null),
          t !== null ? t : Jd(e.type) || "Memo"
        );
      case Br:
        ((t = e._payload), (e = e._init));
        try {
          return Jd(e(t));
        } catch {}
    }
  return null;
}
function r2(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Jd(t);
    case 8:
      return t === jh ? "StrictMode" : "Mode";
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
      if (typeof t == "string") return t;
  }
  return null;
}
function Zr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function i2(e) {
  var t = Bb(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          ((r = "" + s), o.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Al(e) {
  e._valueTracker || (e._valueTracker = i2(e));
}
function $b(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bb(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function uc(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eh(e, t) {
  var n = t.checked;
  return Ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function I0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Zr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function zb(e, t) {
  ((t = t.checked), t != null && Hh(e, "checked", t, !1));
}
function th(e, t) {
  zb(e, t);
  var n = Zr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? nh(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && nh(e, t.type, Zr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function F0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function nh(e, t, n) {
  (t === "number" && uc(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $s = Array.isArray;
function To(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Zr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function rh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function M0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if ($s(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Zr(n) };
}
function Nb(e, t) {
  var n = Zr(t.value),
    r = Zr(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function L0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ih(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hb(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Vl,
  jb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Vl = Vl || document.createElement("div"),
          Vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Vl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hs = {
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
    strokeWidth: !0,
  },
  o2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hs).forEach(function (e) {
  o2.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hs[t] = Hs[e]));
  });
});
function Wb(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Hs.hasOwnProperty(e) && Hs[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ub(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Wb(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var s2 = Ve(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function oh(e, t) {
  if (t) {
    if (s2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function sh(e, t) {
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
      return !0;
  }
}
var ah = null;
function Xh(e) {
  return (
    (e = e.target || e.srcElement || M),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var lh = null,
  Eo = null,
  Ro = null;
function O0(e) {
  if ((e = va(e))) {
    if (typeof lh != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Bc(t)), lh(e.stateNode, e.type, t));
  }
}
function Xb(e) {
  Eo ? (Ro ? Ro.push(e) : (Ro = [e])) : (Eo = e);
}
function Yb() {
  if (Eo) {
    var e = Eo,
      t = Ro;
    if (((Ro = Eo = null), O0(e), t)) for (e = 0; e < t.length; e++) O0(t[e]);
  }
}
function Gb(e, t) {
  return e(t);
}
function qb() {}
var Id = !1;
function Kb(e, t, n) {
  if (Id) return e(t, n);
  Id = !0;
  try {
    return Gb(e, t, n);
  } finally {
    ((Id = !1), (Eo !== null || Ro !== null) && (qb(), Yb()));
  }
}
function Js(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bc(n);
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var ch = !1;
if (pr)
  try {
    ((uo = {}),
      Object.defineProperty(uo, "passive", {
        get: function () {
          ch = !0;
        },
      }),
      M.addEventListener("test", uo, uo),
      M.removeEventListener("test", uo, uo));
  } catch {
    ch = !1;
  }
var uo;
function a2(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var js = !1,
  fc = null,
  dc = !1,
  uh = null,
  l2 = {
    onError: function (e) {
      ((js = !0), (fc = e));
    },
  };
function c2(e, t, n, r, i, o, s, a, l) {
  ((js = !1), (fc = null), a2.apply(l2, arguments));
}
function u2(e, t, n, r, i, o, s, a, l) {
  if ((c2.apply(this, arguments), js)) {
    if (!js) throw Error(L(198));
    var c = fc;
    ((js = !1), (fc = null), dc || ((dc = !0), (uh = c)));
  }
}
function Oi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), 4098 & t.flags && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function D0(e) {
  if (Oi(e) !== e) throw Error(L(188));
}
function f2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Oi(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return (D0(i), e);
        if (o === r) return (D0(i), t);
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          ((s = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((s = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Zb(e) {
  return ((e = f2(e)), e !== null ? Jb(e) : null);
}
function Jb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ex = en.unstable_scheduleCallback,
  A0 = en.unstable_cancelCallback,
  d2 = en.unstable_shouldYield,
  h2 = en.unstable_requestPaint,
  Xe = en.unstable_now,
  p2 = en.unstable_getCurrentPriorityLevel,
  Yh = en.unstable_ImmediatePriority,
  tx = en.unstable_UserBlockingPriority,
  hc = en.unstable_NormalPriority,
  m2 = en.unstable_LowPriority,
  nx = en.unstable_IdlePriority,
  Oc = null,
  Kn = null;
function v2(e) {
  if (Kn && typeof Kn.onCommitFiberRoot == "function")
    try {
      Kn.onCommitFiberRoot(Oc, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var Pn = Math.clz32 ? Math.clz32 : b2,
  g2 = Math.log,
  y2 = Math.LN2;
function b2(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((g2(e) / y2) | 0)) | 0);
}
var Bl = 64,
  $l = 4194304;
function zs(e) {
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
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function pc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = 268435455 & n;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = zs(a)) : ((o &= s), o !== 0 && (r = zs(o)));
  } else ((s = n & ~i), s !== 0 ? (r = zs(s)) : o !== 0 && (r = zs(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Pn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function x2(e, t) {
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
      return -1;
  }
}
function w2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Pn(o),
      a = 1 << s,
      l = i[s];
    (l === -1
      ? (a & n && !(a & r)) || (i[s] = x2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function fh(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function rx() {
  var e = Bl;
  return ((Bl <<= 1), !(4194240 & Bl) && (Bl = 64), e);
}
function Fd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pa(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pn(t)),
    (e[t] = n));
}
function S2(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Pn(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Gh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pn(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var ye = 0;
function ix(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1
  );
}
var ox,
  qh,
  sx,
  ax,
  lx,
  dh = !1,
  zl = [],
  Wr = null,
  Ur = null,
  Xr = null,
  ea = new Map(),
  ta = new Map(),
  zr = [],
  k2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function V0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wr = null;
      break;
    case "dragenter":
    case "dragleave":
      Ur = null;
      break;
    case "mouseover":
    case "mouseout":
      Xr = null;
      break;
    case "pointerover":
    case "pointerout":
      ea.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ta.delete(t.pointerId);
  }
}
function Fs(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = va(t)), t !== null && qh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function C2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Wr = Fs(Wr, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Ur = Fs(Ur, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Xr = Fs(Xr, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (ea.set(o, Fs(ea.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        ta.set(o, Fs(ta.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function cx(e) {
  var t = ki(e.target);
  if (t !== null) {
    var n = Oi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qb(n)), t !== null)) {
          ((e.blockedOn = t),
            lx(e.priority, function () {
              sx(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ec(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return ((t = va(n)), t !== null && qh(t), (e.blockedOn = n), !1);
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    ((ah = r), n.target.dispatchEvent(r), (ah = null), t.shift());
  }
  return !0;
}
function B0(e, t, n) {
  ec(e) && n.delete(t);
}
function T2() {
  ((dh = !1),
    Wr !== null && ec(Wr) && (Wr = null),
    Ur !== null && ec(Ur) && (Ur = null),
    Xr !== null && ec(Xr) && (Xr = null),
    ea.forEach(B0),
    ta.forEach(B0));
}
function Ms(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    dh ||
      ((dh = !0),
      en.unstable_scheduleCallback(en.unstable_NormalPriority, T2)));
}
function na(e) {
  function t(i) {
    return Ms(i, e);
  }
  if (0 < zl.length) {
    Ms(zl[0], e);
    for (var n = 1; n < zl.length; n++) {
      var r = zl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wr !== null && Ms(Wr, e),
      Ur !== null && Ms(Ur, e),
      Xr !== null && Ms(Xr, e),
      ea.forEach(t),
      ta.forEach(t),
      n = 0;
    n < zr.length;
    n++
  )
    ((r = zr[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < zr.length && ((n = zr[0]), n.blockedOn === null); )
    (cx(n), n.blockedOn === null && zr.shift());
}
var Po = yr.ReactCurrentBatchConfig,
  mc = !0;
function E2(e, t, n, r) {
  var i = ye,
    o = Po.transition;
  Po.transition = null;
  try {
    ((ye = 1), Kh(e, t, n, r));
  } finally {
    ((ye = i), (Po.transition = o));
  }
}
function R2(e, t, n, r) {
  var i = ye,
    o = Po.transition;
  Po.transition = null;
  try {
    ((ye = 4), Kh(e, t, n, r));
  } finally {
    ((ye = i), (Po.transition = o));
  }
}
function Kh(e, t, n, r) {
  if (mc) {
    var i = hh(e, t, n, r);
    if (i === null) (Bd(e, t, r, vc, n), V0(e, r));
    else if (C2(i, e, t, n, r)) r.stopPropagation();
    else if ((V0(e, r), 4 & t && -1 < k2.indexOf(e))) {
      for (; i !== null; ) {
        var o = va(i);
        if (
          (o !== null && ox(o),
          (o = hh(e, t, n, r)),
          o === null && Bd(e, t, r, vc, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Bd(e, t, r, null, n);
  }
}
var vc = null;
function hh(e, t, n, r) {
  if (((vc = null), (e = Xh(r)), (e = ki(e)), e !== null))
    if (((t = Oi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((vc = e), null);
}
function ux(e) {
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
      switch (p2()) {
        case Yh:
          return 1;
        case tx:
          return 4;
        case hc:
        case m2:
          return 16;
        case nx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Hr = null,
  Qh = null,
  tc = null;
function fx() {
  if (tc) return tc;
  var e,
    t,
    n = Qh,
    r = n.length,
    i = "value" in Hr ? Hr.value : Hr.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var s = r - e;
  for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
  return (tc = i.slice(e, 1 < t ? 1 - t : void 0));
}
function nc(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nl() {
  return !0;
}
function $0() {
  return !1;
}
function nn(e) {
  function t(n, r, i, o, s) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Nl
        : $0),
      (this.isPropagationStopped = $0),
      this
    );
  }
  return (
    Ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nl));
      },
      persist: function () {},
      isPersistent: Nl,
    }),
    t
  );
}
var Md,
  Ld,
  Ls,
  Bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zh = nn(Bo),
  ma = Ve({}, Bo, { view: 0, detail: 0 }),
  P2 = nn(ma),
  Dc = Ve({}, ma, {
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
    getModifierState: Jh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ls &&
            (Ls && e.type === "mousemove"
              ? ((Md = e.screenX - Ls.screenX), (Ld = e.screenY - Ls.screenY))
              : (Ld = Md = 0),
            (Ls = e)),
          Md);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ld;
    },
  }),
  z0 = nn(Dc),
  _2 = Ve({}, Dc, { dataTransfer: 0 }),
  I2 = nn(_2),
  F2 = Ve({}, ma, { relatedTarget: 0 }),
  Od = nn(F2),
  M2 = Ve({}, Bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  L2 = nn(M2),
  O2 = Ve({}, Bo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : M.clipboardData;
    },
  }),
  D2 = nn(O2),
  A2 = Ve({}, Bo, { data: 0 }),
  N0 = nn(A2),
  V2 = {
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
    MozPrintableKey: "Unidentified",
  },
  B2 = {
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
    224: "Meta",
  },
  $2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function z2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = $2[e]) && !!t[e];
}
function Jh() {
  return z2;
}
var N2 = Ve({}, ma, {
    key: function (e) {
      if (e.key) {
        var t = V2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = nc(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? B2[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jh,
    charCode: function (e) {
      return e.type === "keypress" ? nc(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? nc(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  H2 = nn(N2),
  j2 = Ve({}, Dc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  H0 = nn(j2),
  W2 = Ve({}, ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jh,
  }),
  U2 = nn(W2),
  X2 = Ve({}, Bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Y2 = nn(X2),
  G2 = Ve({}, Dc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  q2 = nn(G2),
  K2 = [9, 13, 27, 32],
  ep = pr && "CompositionEvent" in M,
  Ws = null;
pr && "documentMode" in document && (Ws = document.documentMode);
var Q2 = pr && "TextEvent" in M && !Ws,
  dx = pr && (!ep || (Ws && 8 < Ws && 11 >= Ws)),
  j0 = String.fromCharCode(32),
  W0 = !1;
function hx(e, t) {
  switch (e) {
    case "keyup":
      return K2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function px(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var mo = !1;
function Z2(e, t) {
  switch (e) {
    case "compositionend":
      return px(t);
    case "keypress":
      return t.which !== 32 ? null : ((W0 = !0), j0);
    case "textInput":
      return ((e = t.data), e === j0 && W0 ? null : e);
    default:
      return null;
  }
}
function J2(e, t) {
  if (mo)
    return e === "compositionend" || (!ep && hx(e, t))
      ? ((e = fx()), (tc = Qh = Hr = null), (mo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var eI = {
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
  week: !0,
};
function U0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!eI[e.type] : t === "textarea";
}
function mx(e, t, n, r) {
  (Xb(r),
    (t = gc(t, "onChange")),
    0 < t.length &&
      ((n = new Zh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Us = null,
  ra = null;
function tI(e) {
  Ex(e, 0);
}
function Ac(e) {
  var t = yo(e);
  if ($b(t)) return e;
}
function nI(e, t) {
  if (e === "change") return t;
}
var vx = !1;
pr &&
  (pr
    ? ((jl = "oninput" in document),
      jl ||
        ((Dd = document.createElement("div")),
        Dd.setAttribute("oninput", "return;"),
        (jl = typeof Dd.oninput == "function")),
      (Hl = jl))
    : (Hl = !1),
  (vx = Hl && (!document.documentMode || 9 < document.documentMode)));
var Hl, jl, Dd;
function X0() {
  Us && (Us.detachEvent("onpropertychange", gx), (ra = Us = null));
}
function gx(e) {
  if (e.propertyName === "value" && Ac(ra)) {
    var t = [];
    (mx(t, ra, e, Xh(e)), Kb(tI, t));
  }
}
function rI(e, t, n) {
  e === "focusin"
    ? (X0(), (Us = t), (ra = n), Us.attachEvent("onpropertychange", gx))
    : e === "focusout" && X0();
}
function iI(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ac(ra);
}
function oI(e, t) {
  if (e === "click") return Ac(t);
}
function sI(e, t) {
  if (e === "input" || e === "change") return Ac(t);
}
function aI(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var In = typeof Object.is == "function" ? Object.is : aI;
function ia(e, t) {
  if (In(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!qd.call(t, i) || !In(e[i], t[i])) return !1;
  }
  return !0;
}
function Y0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function G0(e, t) {
  var n = Y0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Y0(n);
  }
}
function yx(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? yx(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
  );
}
function bx() {
  for (var e = M, t = uc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (!n) break;
    ((e = t.contentWindow), (t = uc(e.document)));
  }
  return t;
}
function tp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function lI(e) {
  var t = bx(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yx(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || M),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = G0(n, o)));
        var s = G0(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var cI = pr && "documentMode" in document && 11 >= document.documentMode,
  vo = null,
  ph = null,
  Xs = null,
  mh = !1;
function q0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mh ||
    vo == null ||
    vo !== uc(r) ||
    ((r = vo),
    "selectionStart" in r && tp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          M
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Xs && ia(Xs, r)) ||
      ((Xs = r),
      (r = gc(ph, "onSelect")),
      0 < r.length &&
        ((t = new Zh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = vo))));
}
function Wl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var go = {
    animationend: Wl("Animation", "AnimationEnd"),
    animationiteration: Wl("Animation", "AnimationIteration"),
    animationstart: Wl("Animation", "AnimationStart"),
    transitionend: Wl("Transition", "TransitionEnd"),
  },
  Ad = {},
  xx = {};
pr &&
  ((xx = document.createElement("div").style),
  "AnimationEvent" in M ||
    (delete go.animationend.animation,
    delete go.animationiteration.animation,
    delete go.animationstart.animation),
  "TransitionEvent" in M || delete go.transitionend.transition);
function Vc(e) {
  if (Ad[e]) return Ad[e];
  if (!go[e]) return e;
  var t,
    n = go[e];
  for (t in n) if (n.hasOwnProperty(t) && t in xx) return (Ad[e] = n[t]);
  return e;
}
var wx = Vc("animationend"),
  Sx = Vc("animationiteration"),
  kx = Vc("animationstart"),
  Cx = Vc("transitionend"),
  Tx = new Map(),
  K0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ei(e, t) {
  (Tx.set(e, t), Li(t, [e]));
}
for (Ul = 0; Ul < K0.length; Ul++)
  ((Xl = K0[Ul]),
    (Q0 = Xl.toLowerCase()),
    (Z0 = Xl[0].toUpperCase() + Xl.slice(1)),
    ei(Q0, "on" + Z0));
var Xl, Q0, Z0, Ul;
ei(wx, "onAnimationEnd");
ei(Sx, "onAnimationIteration");
ei(kx, "onAnimationStart");
ei("dblclick", "onDoubleClick");
ei("focusin", "onFocus");
ei("focusout", "onBlur");
ei(Cx, "onTransitionEnd");
Fo("onMouseEnter", ["mouseout", "mouseover"]);
Fo("onMouseLeave", ["mouseout", "mouseover"]);
Fo("onPointerEnter", ["pointerout", "pointerover"]);
Fo("onPointerLeave", ["pointerout", "pointerover"]);
Li(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Li(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Li("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Li(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Li(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Li(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ns =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  uI = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));
function J0(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), u2(r, t, void 0, e), (e.currentTarget = null));
}
function Ex(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          (J0(i, a, c), (o = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          (J0(i, a, c), (o = l));
        }
    }
  }
  if (dc) throw ((e = uh), (dc = !1), (uh = null), e);
}
function _e(e, t) {
  var n = t[xh];
  n === void 0 && (n = t[xh] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Rx(t, e, 2, !1), n.add(r));
}
function Vd(e, t, n) {
  var r = 0;
  (t && (r |= 4), Rx(n, e, r, t));
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function oa(e) {
  if (!e[Yl]) {
    ((e[Yl] = !0),
      Ob.forEach(function (n) {
        n !== "selectionchange" && (uI.has(n) || Vd(n, !1, e), Vd(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yl] || ((t[Yl] = !0), Vd("selectionchange", !1, t));
  }
}
function Rx(e, t, n, r) {
  switch (ux(t)) {
    case 1:
      var i = E2;
      break;
    case 4:
      i = R2;
      break;
    default:
      i = Kh;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !ch ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Bd(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = ki(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Kb(function () {
    var c = o,
      u = Xh(n),
      f = [];
    e: {
      var d = Tx.get(e);
      if (d !== void 0) {
        var h = Zh,
          y = e;
        switch (e) {
          case "keypress":
            if (nc(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = H2;
            break;
          case "focusin":
            ((y = "focus"), (h = Od));
            break;
          case "focusout":
            ((y = "blur"), (h = Od));
            break;
          case "beforeblur":
          case "afterblur":
            h = Od;
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
            h = z0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = I2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = U2;
            break;
          case wx:
          case Sx:
          case kx:
            h = L2;
            break;
          case Cx:
            h = Y2;
            break;
          case "scroll":
            h = P2;
            break;
          case "wheel":
            h = q2;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = D2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = H0;
        }
        var g = (4 & t) !== 0,
          b = !g && e === "scroll",
          p = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var m, v = c; v !== null; ) {
          m = v;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = Js(v, p)), x != null && g.push(sa(v, x, m)))),
            b)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((d = new h(d, y, null, n, u)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === "mouseover" || e === "pointerover"),
        (h = e === "mouseout" || e === "pointerout"),
        (!d ||
          n === ah ||
          !(y = n.relatedTarget || n.fromElement) ||
          (!ki(y) && !y[mr])) &&
          (h || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
                ? d.defaultView || d.parentWindow
                : M),
          h
            ? ((y = n.relatedTarget || n.toElement),
              (h = c),
              (y = y ? ki(y) : null),
              y !== null &&
                ((b = Oi(y)), y !== b || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = c)),
          h !== y))
      ) {
        if (
          ((g = z0),
          (x = "onMouseLeave"),
          (p = "onMouseEnter"),
          (v = "mouse"),
          (e !== "pointerout" && e !== "pointerover") ||
            ((g = H0),
            (x = "onPointerLeave"),
            (p = "onPointerEnter"),
            (v = "pointer")),
          (b = h == null ? d : yo(h)),
          (m = y == null ? d : yo(y)),
          (d = new g(x, v + "leave", h, n, u)),
          (d.target = b),
          (d.relatedTarget = m),
          (x = null),
          ki(u) === c &&
            ((g = new g(p, v + "enter", y, n, u)),
            (g.target = m),
            (g.relatedTarget = b),
            (x = g)),
          (b = x),
          h && y)
        )
          e: {
            for (g = h, p = y, v = 0, m = g; m; m = fo(m)) v++;
            for (m = 0, x = p; x; x = fo(x)) m++;
            for (; 0 < v - m; ) ((g = fo(g)), v--);
            for (; 0 < m - v; ) ((p = fo(p)), m--);
            for (; v--; ) {
              if (g === p || (p !== null && g === p.alternate)) break e;
              ((g = fo(g)), (p = fo(p)));
            }
            g = null;
          }
        else g = null;
        (h !== null && eb(f, d, h, g, !1),
          y !== null && b !== null && eb(f, b, y, g, !0));
      }
      if (
        ((d = c ? yo(c) : M),
        (h = d.nodeName && d.nodeName.toLowerCase()),
        h === "select" || (h === "input" && d.type === "file"))
      )
        var C = nI;
      else if (U0(d))
        if (vx) C = sI;
        else {
          C = iI;
          var w = rI;
        }
      else
        (h = d.nodeName) &&
          h.toLowerCase() === "input" &&
          (d.type === "checkbox" || d.type === "radio") &&
          (C = oI);
      switch (
        (C && (C = C(e, c))
          ? mx(f, C, n, u)
          : (w && w(e, d, c),
            e === "focusout" &&
              (w = d._wrapperState) &&
              w.controlled &&
              d.type === "number" &&
              nh(d, "number", d.value)),
        (w = c ? yo(c) : M),
        e)
      ) {
        case "focusin":
          (U0(w) || w.contentEditable === "true") &&
            ((vo = w), (ph = c), (Xs = null));
          break;
        case "focusout":
          Xs = ph = vo = null;
          break;
        case "mousedown":
          mh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((mh = !1), q0(f, n, u));
          break;
        case "selectionchange":
          if (cI) break;
        case "keydown":
        case "keyup":
          q0(f, n, u);
      }
      var E;
      if (ep)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        mo
          ? hx(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (dx &&
          n.locale !== "ko" &&
          (mo || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && mo && (E = fx())
            : ((Hr = u),
              (Qh = "value" in Hr ? Hr.value : Hr.textContent),
              (mo = !0))),
        (w = gc(c, T)),
        0 < w.length &&
          ((T = new N0(T, e, null, n, u)),
          f.push({ event: T, listeners: w }),
          E ? (T.data = E) : ((E = px(n)), E !== null && (T.data = E)))),
        (E = Q2 ? Z2(e, n) : J2(e, n)) &&
          ((c = gc(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new N0("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = E))));
    }
    Ex(f, t);
  });
}
function sa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Js(e, n)),
      o != null && r.unshift(sa(e, o, i)),
      (o = Js(e, t)),
      o != null && r.push(sa(e, o, i))),
      (e = e.return));
  }
  return r;
}
function fo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eb(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Js(n, o)), l != null && s.unshift(sa(n, l, a)))
        : i || ((l = Js(n, o)), l != null && s.push(sa(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var fI = /\r\n?/g,
  dI = /\u0000|\uFFFD/g;
function tb(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fI,
      `
`,
    )
    .replace(dI, "");
}
function Gl(e, t, n) {
  if (((t = tb(t)), tb(e) !== t && n)) throw Error(L(425));
}
function yc() {}
var vh = null,
  gh = null;
function yh(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var bh = typeof setTimeout == "function" ? setTimeout : void 0,
  hI = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nb = typeof Promise == "function" ? Promise : void 0,
  pI =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nb < "u"
        ? function (e) {
            return nb.resolve(null).then(e).catch(mI);
          }
        : bh;
function mI(e) {
  setTimeout(function () {
    throw e;
  });
}
function $d(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), na(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  na(t);
}
function Yr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rb(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $o = Math.random().toString(36).slice(2),
  qn = "__reactFiber$" + $o,
  aa = "__reactProps$" + $o,
  mr = "__reactContainer$" + $o,
  xh = "__reactEvents$" + $o,
  vI = "__reactListeners$" + $o,
  gI = "__reactHandles$" + $o;
function ki(e) {
  var t = e[qn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mr] || n[qn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rb(e); e !== null; ) {
          if ((n = e[qn])) return n;
          e = rb(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function va(e) {
  return (
    (e = e[qn] || e[mr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function yo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Bc(e) {
  return e[aa] || null;
}
var wh = [],
  bo = -1;
function ti(e) {
  return { current: e };
}
function Ie(e) {
  0 > bo || ((e.current = wh[bo]), (wh[bo] = null), bo--);
}
function ke(e, t) {
  (bo++, (wh[bo] = e.current), (e.current = t));
}
var Jr = {},
  Tt = ti(Jr),
  zt = ti(!1),
  Pi = Jr;
function Mo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Nt(e) {
  return ((e = e.childContextTypes), e != null);
}
function bc() {
  (Ie(zt), Ie(Tt));
}
function ib(e, t, n) {
  if (Tt.current !== Jr) throw Error(L(168));
  (ke(Tt, t), ke(zt, n));
}
function Px(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, r2(e) || "Unknown", i));
  return Ve({}, n, r);
}
function xc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jr),
    (Pi = Tt.current),
    ke(Tt, e),
    ke(zt, zt.current),
    !0
  );
}
function ob(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  (n
    ? ((e = Px(e, t, Pi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ie(zt),
      Ie(Tt),
      ke(Tt, e))
    : Ie(zt),
    ke(zt, n));
}
var ur = null,
  $c = !1,
  zd = !1;
function _x(e) {
  ur === null ? (ur = [e]) : ur.push(e);
}
function yI(e) {
  (($c = !0), _x(e));
}
function ni() {
  if (!zd && ur !== null) {
    zd = !0;
    var e = 0,
      t = ye;
    try {
      var n = ur;
      for (ye = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((ur = null), ($c = !1));
    } catch (i) {
      throw (ur !== null && (ur = ur.slice(e + 1)), ex(Yh, ni), i);
    } finally {
      ((ye = t), (zd = !1));
    }
  }
  return null;
}
var xo = [],
  wo = 0,
  wc = null,
  Sc = 0,
  pn = [],
  mn = 0,
  _i = null,
  fr = 1,
  dr = "";
function wi(e, t) {
  ((xo[wo++] = Sc), (xo[wo++] = wc), (wc = e), (Sc = t));
}
function Ix(e, t, n) {
  ((pn[mn++] = fr), (pn[mn++] = dr), (pn[mn++] = _i), (_i = e));
  var r = fr;
  e = dr;
  var i = 32 - Pn(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - Pn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    ((o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (fr = (1 << (32 - Pn(t) + i)) | (n << i) | r),
      (dr = o + e));
  } else ((fr = (1 << o) | (n << i) | r), (dr = e));
}
function np(e) {
  e.return !== null && (wi(e, 1), Ix(e, 1, 0));
}
function rp(e) {
  for (; e === wc; )
    ((wc = xo[--wo]), (xo[wo] = null), (Sc = xo[--wo]), (xo[wo] = null));
  for (; e === _i; )
    ((_i = pn[--mn]),
      (pn[mn] = null),
      (dr = pn[--mn]),
      (pn[mn] = null),
      (fr = pn[--mn]),
      (pn[mn] = null));
}
var Jt = null,
  Zt = null,
  Me = !1,
  Rn = null;
function Fx(e, t) {
  var n = vn(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function sb(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (Jt = e), (Zt = Yr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (Jt = e), (Zt = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = _i !== null ? { id: fr, overflow: dr } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = vn(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (Jt = e),
          (Zt = null),
          !0)
      );
    default:
      return !1;
  }
}
function Sh(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function kh(e) {
  if (Me) {
    var t = Zt;
    if (t) {
      var n = t;
      if (!sb(e, t)) {
        if (Sh(e)) throw Error(L(418));
        t = Yr(n.nextSibling);
        var r = Jt;
        t && sb(e, t)
          ? Fx(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Me = !1), (Jt = e));
      }
    } else {
      if (Sh(e)) throw Error(L(418));
      ((e.flags = (-4097 & e.flags) | 2), (Me = !1), (Jt = e));
    }
  }
}
function ab(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Jt = e;
}
function ql(e) {
  if (e !== Jt) return !1;
  if (!Me) return (ab(e), (Me = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yh(e.type, e.memoizedProps))),
    t && (t = Zt))
  ) {
    if (Sh(e)) throw (Mx(), Error(L(418)));
    for (; t; ) (Fx(e, t), (t = Yr(t.nextSibling)));
  }
  if ((ab(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Zt = Yr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Zt = null;
    }
  } else Zt = Jt ? Yr(e.stateNode.nextSibling) : null;
  return !0;
}
function Mx() {
  for (var e = Zt; e; ) e = Yr(e.nextSibling);
}
function Lo() {
  ((Zt = Jt = null), (Me = !1));
}
function ip(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
var bI = yr.ReactCurrentBatchConfig;
function Tn(e, t) {
  if (e && e.defaultProps) {
    ((t = Ve({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var kc = ti(null),
  Cc = null,
  So = null,
  op = null;
function sp() {
  op = So = Cc = null;
}
function ap(e) {
  var t = kc.current;
  (Ie(kc), (e._currentValue = t));
}
function Ch(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function _o(e, t) {
  ((Cc = e),
    (op = So = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($t = !0), (e.firstContext = null)));
}
function yn(e) {
  var t = e._currentValue;
  if (op !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), So === null)) {
      if (Cc === null) throw Error(L(308));
      ((So = e), (Cc.dependencies = { lanes: 0, firstContext: e }));
    } else So = So.next = e;
  return t;
}
var Ci = null;
function lp(e) {
  Ci === null ? (Ci = [e]) : Ci.push(e);
}
function Lx(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), lp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    vr(e, r)
  );
}
function vr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var $r = !1;
function cp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ox(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function hr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & me)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      vr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), lp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    vr(e, n)
  );
}
function rc(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gh(e, n));
  }
}
function lb(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = s) : (o = o.next = s), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
  }
}
function Tc(e, t, n, r) {
  var i = e.updateQueue;
  $r = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    ((l.next = null), s === null ? (o = c) : (s.next = c), (s = l));
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    ((s = 0), (u = c = l = null), (a = o));
    do {
      var d = a.lane,
        h = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((d = t), (h = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                f = y.call(h, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (-65537 & y.flags) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == "function" ? y.call(h, f, d) : y),
                d == null)
              )
                break e;
              f = Ve({}, f, d);
              break e;
            case 2:
              $r = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((h = {
          eventTime: h,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = h), (l = f)) : (u = u.next = h),
          (s |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((s |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((Fi |= s), (e.lanes = s), (e.memoizedState = f));
  }
}
function cb(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var Dx = new Lb.Component().refs;
function Th(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var zc = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Oi(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Mt(),
      i = Kr(e),
      o = hr(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = Gr(e, o, i)),
      t !== null && (_n(t, e, i, r), rc(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Mt(),
      i = Kr(e),
      o = hr(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Gr(e, o, i)),
      t !== null && (_n(t, e, i, r), rc(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Mt(),
      r = Kr(e),
      i = hr(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Gr(e, i, r)),
      t !== null && (_n(t, e, r, n), rc(t, e, r)));
  },
};
function ub(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !ia(n, r) ||
        !ia(i, o)
  );
}
function Ax(e, t, n) {
  var r = !1,
    i = Jr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = yn(o))
      : ((i = Nt(t) ? Pi : Tt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Mo(e, i) : Jr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function fb(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zc.enqueueReplaceState(t, t.state, null));
}
function Eh(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = Dx), cp(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = yn(o))
    : ((o = Nt(t) ? Pi : Tt.current), (i.context = Mo(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Th(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && zc.enqueueReplaceState(i, i.state, null),
      Tc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Os(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            (a === Dx && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s));
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Kl(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function db(e) {
  var t = e._init;
  return t(e._payload);
}
function Vx(e) {
  function t(p, m) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [m]), (p.flags |= 16)) : v.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) (t(p, m), (m = m.sibling));
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      (m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling));
    return p;
  }
  function i(p, m) {
    return ((p = Qr(p, m)), (p.index = 0), (p.sibling = null), p);
  }
  function o(p, m, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((p.flags |= 2), m) : v)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function s(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, m, v, x) {
    return m === null || m.tag !== 6
      ? ((m = Yd(v, p.mode, x)), (m.return = p), m)
      : ((m = i(m, v)), (m.return = p), m);
  }
  function l(p, m, v, x) {
    var C = v.type;
    return C === po
      ? u(p, m, v.props.children, x, v.key)
      : m !== null &&
          (m.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Br &&
              db(C) === m.type))
        ? ((x = i(m, v.props)), (x.ref = Os(p, m, v)), (x.return = p), x)
        : ((x = cc(v.type, v.key, v.props, null, p.mode, x)),
          (x.ref = Os(p, m, v)),
          (x.return = p),
          x);
  }
  function c(p, m, v, x) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Gd(v, p.mode, x)), (m.return = p), m)
      : ((m = i(m, v.children || [])), (m.return = p), m);
  }
  function u(p, m, v, x, C) {
    return m === null || m.tag !== 7
      ? ((m = Ri(v, p.mode, x, C)), (m.return = p), m)
      : ((m = i(m, v)), (m.return = p), m);
  }
  function f(p, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = Yd("" + m, p.mode, v)), (m.return = p), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Dl:
          return (
            (v = cc(m.type, m.key, m.props, null, p.mode, v)),
            (v.ref = Os(p, null, m)),
            (v.return = p),
            v
          );
        case ho:
          return ((m = Gd(m, p.mode, v)), (m.return = p), m);
        case Br:
          var x = m._init;
          return f(p, x(m._payload), v);
      }
      if ($s(m) || Is(m))
        return ((m = Ri(m, p.mode, v, null)), (m.return = p), m);
      Kl(p, m);
    }
    return null;
  }
  function d(p, m, v, x) {
    var C = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : a(p, m, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Dl:
          return v.key === C ? l(p, m, v, x) : null;
        case ho:
          return v.key === C ? c(p, m, v, x) : null;
        case Br:
          return ((C = v._init), d(p, m, C(v._payload), x));
      }
      if ($s(v) || Is(v)) return C !== null ? null : u(p, m, v, x, null);
      Kl(p, v);
    }
    return null;
  }
  function h(p, m, v, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((p = p.get(v) || null), a(m, p, "" + x, C));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Dl:
          return (
            (p = p.get(x.key === null ? v : x.key) || null),
            l(m, p, x, C)
          );
        case ho:
          return (
            (p = p.get(x.key === null ? v : x.key) || null),
            c(m, p, x, C)
          );
        case Br:
          var w = x._init;
          return h(p, m, v, w(x._payload), C);
      }
      if ($s(x) || Is(x)) return ((p = p.get(v) || null), u(m, p, x, C, null));
      Kl(m, x);
    }
    return null;
  }
  function y(p, m, v, x) {
    for (
      var C = null, w = null, E = m, T = (m = 0), F = null;
      E !== null && T < v.length;
      T++
    ) {
      E.index > T ? ((F = E), (E = null)) : (F = E.sibling);
      var _ = d(p, E, v[T], x);
      if (_ === null) {
        E === null && (E = F);
        break;
      }
      (e && E && _.alternate === null && t(p, E),
        (m = o(_, m, T)),
        w === null ? (C = _) : (w.sibling = _),
        (w = _),
        (E = F));
    }
    if (T === v.length) return (n(p, E), Me && wi(p, T), C);
    if (E === null) {
      for (; T < v.length; T++)
        ((E = f(p, v[T], x)),
          E !== null &&
            ((m = o(E, m, T)),
            w === null ? (C = E) : (w.sibling = E),
            (w = E)));
      return (Me && wi(p, T), C);
    }
    for (E = r(p, E); T < v.length; T++)
      ((F = h(E, p, T, v[T], x)),
        F !== null &&
          (e && F.alternate !== null && E.delete(F.key === null ? T : F.key),
          (m = o(F, m, T)),
          w === null ? (C = F) : (w.sibling = F),
          (w = F)));
    return (
      e &&
        E.forEach(function ($) {
          return t(p, $);
        }),
      Me && wi(p, T),
      C
    );
  }
  function g(p, m, v, x) {
    var C = Is(v);
    if (typeof C != "function") throw Error(L(150));
    if (((v = C.call(v)), v == null)) throw Error(L(151));
    for (
      var w = (C = null), E = m, T = (m = 0), F = null, _ = v.next();
      E !== null && !_.done;
      T++, _ = v.next()
    ) {
      E.index > T ? ((F = E), (E = null)) : (F = E.sibling);
      var $ = d(p, E, _.value, x);
      if ($ === null) {
        E === null && (E = F);
        break;
      }
      (e && E && $.alternate === null && t(p, E),
        (m = o($, m, T)),
        w === null ? (C = $) : (w.sibling = $),
        (w = $),
        (E = F));
    }
    if (_.done) return (n(p, E), Me && wi(p, T), C);
    if (E === null) {
      for (; !_.done; T++, _ = v.next())
        ((_ = f(p, _.value, x)),
          _ !== null &&
            ((m = o(_, m, T)),
            w === null ? (C = _) : (w.sibling = _),
            (w = _)));
      return (Me && wi(p, T), C);
    }
    for (E = r(p, E); !_.done; T++, _ = v.next())
      ((_ = h(E, p, T, _.value, x)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? T : _.key),
          (m = o(_, m, T)),
          w === null ? (C = _) : (w.sibling = _),
          (w = _)));
    return (
      e &&
        E.forEach(function (D) {
          return t(p, D);
        }),
      Me && wi(p, T),
      C
    );
  }
  function b(p, m, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === po &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Dl:
          e: {
            for (var C = v.key, w = m; w !== null; ) {
              if (w.key === C) {
                if (((C = v.type), C === po)) {
                  if (w.tag === 7) {
                    (n(p, w.sibling),
                      (m = i(w, v.props.children)),
                      (m.return = p),
                      (p = m));
                    break e;
                  }
                } else if (
                  w.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Br &&
                    db(C) === w.type)
                ) {
                  (n(p, w.sibling),
                    (m = i(w, v.props)),
                    (m.ref = Os(p, w, v)),
                    (m.return = p),
                    (p = m));
                  break e;
                }
                n(p, w);
                break;
              }
              (t(p, w), (w = w.sibling));
            }
            v.type === po
              ? ((m = Ri(v.props.children, p.mode, x, v.key)),
                (m.return = p),
                (p = m))
              : ((x = cc(v.type, v.key, v.props, null, p.mode, x)),
                (x.ref = Os(p, m, v)),
                (x.return = p),
                (p = x));
          }
          return s(p);
        case ho:
          e: {
            for (w = v.key; m !== null; ) {
              if (m.key === w) {
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  (n(p, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = p),
                    (p = m));
                  break e;
                }
                n(p, m);
                break;
              }
              (t(p, m), (m = m.sibling));
            }
            ((m = Gd(v, p.mode, x)), (m.return = p), (p = m));
          }
          return s(p);
        case Br:
          return ((w = v._init), b(p, m, w(v._payload), x));
      }
      if ($s(v)) return y(p, m, v, x);
      if (Is(v)) return g(p, m, v, x);
      Kl(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, v)), (m.return = p), (p = m))
          : (n(p, m), (m = Yd(v, p.mode, x)), (m.return = p), (p = m)),
        s(p))
      : n(p, m);
  }
  return b;
}
var Oo = Vx(!0),
  Bx = Vx(!1),
  ga = {},
  Qn = ti(ga),
  la = ti(ga),
  ca = ti(ga);
function Ti(e) {
  if (e === ga) throw Error(L(174));
  return e;
}
function up(e, t) {
  switch ((ke(ca, t), ke(la, e), ke(Qn, ga), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ih(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ih(t, e)));
  }
  (Ie(Qn), ke(Qn, t));
}
function Do() {
  (Ie(Qn), Ie(la), Ie(ca));
}
function $x(e) {
  Ti(ca.current);
  var t = Ti(Qn.current),
    n = ih(t, e.type);
  t !== n && (ke(la, e), ke(Qn, n));
}
function fp(e) {
  la.current === e && (Ie(Qn), Ie(la));
}
var De = ti(0);
function Ec(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Nd = [];
function dp() {
  for (var e = 0; e < Nd.length; e++)
    Nd[e]._workInProgressVersionPrimary = null;
  Nd.length = 0;
}
var ic = yr.ReactCurrentDispatcher,
  Hd = yr.ReactCurrentBatchConfig,
  Ii = 0,
  Ae = null,
  et = null,
  ot = null,
  Rc = !1,
  Ys = !1,
  ua = 0,
  xI = 0;
function St() {
  throw Error(L(321));
}
function hp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!In(e[n], t[n])) return !1;
  return !0;
}
function pp(e, t, n, r, i, o) {
  if (
    ((Ii = o),
    (Ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ic.current = e === null || e.memoizedState === null ? CI : TI),
    (e = n(r, i)),
    Ys)
  ) {
    o = 0;
    do {
      if (((Ys = !1), (ua = 0), 25 <= o)) throw Error(L(301));
      ((o += 1),
        (ot = et = null),
        (t.updateQueue = null),
        (ic.current = EI),
        (e = n(r, i)));
    } while (Ys);
  }
  if (
    ((ic.current = Pc),
    (t = et !== null && et.next !== null),
    (Ii = 0),
    (ot = et = Ae = null),
    (Rc = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function mp() {
  var e = ua !== 0;
  return ((ua = 0), e);
}
function Gn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ot === null ? (Ae.memoizedState = ot = e) : (ot = ot.next = e), ot);
}
function bn() {
  if (et === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = et.next;
  var t = ot === null ? Ae.memoizedState : ot.next;
  if (t !== null) ((ot = t), (et = e));
  else {
    if (e === null) throw Error(L(310));
    ((et = e),
      (e = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null,
      }),
      ot === null ? (Ae.memoizedState = ot = e) : (ot = ot.next = e));
  }
  return ot;
}
function fa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jd(e) {
  var t = bn(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = et,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      ((i.next = o.next), (o.next = s));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((Ii & u) === u)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Ae.lanes |= u),
          (Fi |= u));
      }
      c = c.next;
    } while (c !== null && c !== o);
    (l === null ? (s = r) : (l.next = a),
      In(r, t.memoizedState) || ($t = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (Ae.lanes |= o), (Fi |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wd(e) {
  var t = bn(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do ((o = e(o, s.action)), (s = s.next));
    while (s !== i);
    (In(o, t.memoizedState) || ($t = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function zx() {}
function Nx(e, t) {
  var n = Ae,
    r = bn(),
    i = t(),
    o = !In(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), ($t = !0)),
    (r = r.queue),
    vp(Wx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ot !== null && 1 & ot.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      da(9, jx.bind(null, n, r, i, t), void 0, null),
      st === null)
    )
      throw Error(L(349));
    30 & Ii || Hx(n, t, i);
  }
  return i;
}
function Hx(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function jx(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Ux(t) && Xx(e));
}
function Wx(e, t, n) {
  return n(function () {
    Ux(t) && Xx(e);
  });
}
function Ux(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !In(e, n);
  } catch {
    return !0;
  }
}
function Xx(e) {
  var t = vr(e, 1);
  t !== null && _n(t, e, 1, -1);
}
function hb(e) {
  var t = Gn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kI.bind(null, Ae, e)),
    [t.memoizedState, e]
  );
}
function da(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Yx() {
  return bn().memoizedState;
}
function oc(e, t, n, r) {
  var i = Gn();
  ((Ae.flags |= e),
    (i.memoizedState = da(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Nc(e, t, n, r) {
  var i = bn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (et !== null) {
    var s = et.memoizedState;
    if (((o = s.destroy), r !== null && hp(r, s.deps))) {
      i.memoizedState = da(t, n, o, r);
      return;
    }
  }
  ((Ae.flags |= e), (i.memoizedState = da(1 | t, n, o, r)));
}
function pb(e, t) {
  return oc(8390656, 8, e, t);
}
function vp(e, t) {
  return Nc(2048, 8, e, t);
}
function Gx(e, t) {
  return Nc(4, 2, e, t);
}
function qx(e, t) {
  return Nc(4, 4, e, t);
}
function Kx(e, t) {
  return typeof t == "function"
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
      ? ((e = e()),
        (t.current = e),
        function () {
          t.current = null;
        })
      : void 0;
}
function Qx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Nc(4, 4, Kx.bind(null, t, e), n)
  );
}
function gp() {}
function Zx(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jx(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function e1(e, t, n) {
  return 21 & Ii
    ? (In(n, t) || ((n = rx()), (Ae.lanes |= n), (Fi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($t = !0)), (e.memoizedState = n));
}
function wI(e, t) {
  var n = ye;
  ((ye = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Hd.transition;
  Hd.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ye = n), (Hd.transition = r));
  }
}
function t1() {
  return bn().memoizedState;
}
function SI(e, t, n) {
  var r = Kr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    n1(e))
  )
    r1(t, n);
  else if (((n = Lx(e, t, n, r)), n !== null)) {
    var i = Mt();
    (_n(n, e, r, i), i1(n, t, r));
  }
}
function kI(e, t, n) {
  var r = Kr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (n1(e)) r1(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), In(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), lp(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {}
    ((n = Lx(e, t, i, r)),
      n !== null && ((i = Mt()), _n(n, e, r, i), i1(n, t, r)));
  }
}
function n1(e) {
  var t = e.alternate;
  return e === Ae || (t !== null && t === Ae);
}
function r1(e, t) {
  Ys = Rc = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function i1(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gh(e, n));
  }
}
var Pc = {
    readContext: yn,
    useCallback: St,
    useContext: St,
    useEffect: St,
    useImperativeHandle: St,
    useInsertionEffect: St,
    useLayoutEffect: St,
    useMemo: St,
    useReducer: St,
    useRef: St,
    useState: St,
    useDebugValue: St,
    useDeferredValue: St,
    useTransition: St,
    useMutableSource: St,
    useSyncExternalStore: St,
    useId: St,
    unstable_isNewReconciler: !1,
  },
  CI = {
    readContext: yn,
    useCallback: function (e, t) {
      return ((Gn().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: yn,
    useEffect: pb,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        oc(4194308, 4, Kx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return oc(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return oc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Gn();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Gn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = SI.bind(null, Ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Gn();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: hb,
    useDebugValue: gp,
    useDeferredValue: function (e) {
      return (Gn().memoizedState = e);
    },
    useTransition: function () {
      var e = hb(!1),
        t = e[0];
      return ((e = wI.bind(null, e[1])), (Gn().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ae,
        i = Gn();
      if (Me) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), st === null)) throw Error(L(349));
        30 & Ii || Hx(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        pb(Wx.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        da(9, jx.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Gn(),
        t = st.identifierPrefix;
      if (Me) {
        var n = dr,
          r = fr;
        ((n = (r & ~(1 << (32 - Pn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ua++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = xI++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  TI = {
    readContext: yn,
    useCallback: Zx,
    useContext: yn,
    useEffect: vp,
    useImperativeHandle: Qx,
    useInsertionEffect: Gx,
    useLayoutEffect: qx,
    useMemo: Jx,
    useReducer: jd,
    useRef: Yx,
    useState: function () {
      return jd(fa);
    },
    useDebugValue: gp,
    useDeferredValue: function (e) {
      var t = bn();
      return e1(t, et.memoizedState, e);
    },
    useTransition: function () {
      var e = jd(fa)[0],
        t = bn().memoizedState;
      return [e, t];
    },
    useMutableSource: zx,
    useSyncExternalStore: Nx,
    useId: t1,
    unstable_isNewReconciler: !1,
  },
  EI = {
    readContext: yn,
    useCallback: Zx,
    useContext: yn,
    useEffect: vp,
    useImperativeHandle: Qx,
    useInsertionEffect: Gx,
    useLayoutEffect: qx,
    useMemo: Jx,
    useReducer: Wd,
    useRef: Yx,
    useState: function () {
      return Wd(fa);
    },
    useDebugValue: gp,
    useDeferredValue: function (e) {
      var t = bn();
      return et === null ? (t.memoizedState = e) : e1(t, et.memoizedState, e);
    },
    useTransition: function () {
      var e = Wd(fa)[0],
        t = bn().memoizedState;
      return [e, t];
    },
    useMutableSource: zx,
    useSyncExternalStore: Nx,
    useId: t1,
    unstable_isNewReconciler: !1,
  };
function Ao(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += n2(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ud(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var RI = typeof WeakMap == "function" ? WeakMap : Map;
function o1(e, t, n) {
  ((n = hr(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ic || ((Ic = !0), (Ah = r)), Rh(e, t));
    }),
    n
  );
}
function s1(e, t, n) {
  ((n = hr(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Rh(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Rh(e, t),
          typeof r != "function" &&
            (qr === null ? (qr = new Set([this])) : qr.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function mb(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new RI();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = NI.bind(null, e, t, n)), t.then(e, e));
}
function vb(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gb(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = hr(-1, 1)), (t.tag = 2), Gr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var PI = yr.ReactCurrentOwner,
  $t = !1;
function Ft(e, t, n, r) {
  t.child = e === null ? Bx(t, null, n, r) : Oo(t, e.child, n, r);
}
function yb(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    _o(t, i),
    (r = pp(e, t, n, r, o, i)),
    (n = mp()),
    e !== null && !$t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gr(e, t, i))
      : (Me && n && np(t), (t.flags |= 1), Ft(e, t, r, i), t.child)
  );
}
function bb(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Tp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), a1(e, t, o, r, i))
      : ((e = cc(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ia), n(s, r) && e.ref === t.ref)
    )
      return gr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Qr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function a1(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ia(o, r) && e.ref === t.ref) {
      if ((($t = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return ((t.lanes = e.lanes), gr(e, t, i));
      131072 & e.flags && ($t = !0);
    }
  }
  return Ph(e, t, n, r, i);
}
function l1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(1 & t.mode))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ke(Co, Qt),
        (Qt |= n));
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ke(Co, Qt),
          (Qt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ke(Co, Qt),
        (Qt |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ke(Co, Qt),
      (Qt |= r));
  return (Ft(e, t, i, n), t.child);
}
function c1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ph(e, t, n, r, i) {
  var o = Nt(n) ? Pi : Tt.current;
  return (
    (o = Mo(t, o)),
    _o(t, i),
    (n = pp(e, t, n, r, o, i)),
    (r = mp()),
    e !== null && !$t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        gr(e, t, i))
      : (Me && r && np(t), (t.flags |= 1), Ft(e, t, n, i), t.child)
  );
}
function xb(e, t, n, r, i) {
  if (Nt(n)) {
    var o = !0;
    xc(t);
  } else o = !1;
  if ((_o(t, i), t.stateNode === null))
    (sc(e, t), Ax(t, n, r), Eh(t, n, r, i), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = yn(c))
      : ((c = Nt(n) ? Pi : Tt.current), (c = Mo(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && fb(t, s, r, c)),
      ($r = !1));
    var d = t.memoizedState;
    ((s.state = d),
      Tc(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || zt.current || $r
        ? (typeof u == "function" && (Th(t, n, u, r), (l = t.memoizedState)),
          (a = $r || ub(t, n, a, r, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      Ox(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Tn(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = yn(l))
        : ((l = Nt(n) ? Pi : Tt.current), (l = Mo(t, l))));
    var h = n.getDerivedStateFromProps;
    ((u =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && fb(t, s, r, l)),
      ($r = !1),
      (d = t.memoizedState),
      (s.state = d),
      Tc(t, r, s, i));
    var y = t.memoizedState;
    a !== f || d !== y || zt.current || $r
      ? (typeof h == "function" && (Th(t, n, h, r), (y = t.memoizedState)),
        (c = $r || ub(t, n, c, r, d, y, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _h(e, t, n, r, o, i);
}
function _h(e, t, n, r, i, o) {
  c1(e, t);
  var s = (128 & t.flags) !== 0;
  if (!r && !s) return (i && ob(t, n, !1), gr(e, t, o));
  ((r = t.stateNode), (PI.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Oo(t, e.child, null, o)), (t.child = Oo(t, null, a, o)))
      : Ft(e, t, a, o),
    (t.memoizedState = r.state),
    i && ob(t, n, !0),
    t.child
  );
}
function u1(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ib(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ib(e, t.context, !1),
    up(e, t.containerInfo));
}
function wb(e, t, n, r, i) {
  return (Lo(), ip(i), (t.flags |= 256), Ft(e, t, n, r), t.child);
}
var Ih = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function f1(e, t, n) {
  var r,
    i = t.pendingProps,
    o = De.current,
    s = !1,
    a = (128 & t.flags) !== 0;
  if (
    ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((s = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    ke(De, 1 & o),
    e === null)
  )
    return (
      kh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(1 & i) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Wc(a, i, 0, null)),
              (e = Ri(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Fh(n)),
              (t.memoizedState = Ih),
              e)
            : yp(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return _I(e, t, a, i, r, o, n);
  if (s) {
    ((s = i.fallback), (a = t.mode), (o = e.child), (r = o.sibling));
    var l = { mode: "hidden", children: i.children };
    return (
      !(1 & a) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = Qr(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (s = Qr(r, s)) : ((s = Ri(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Fh(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ih),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Qr(s, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function yp(e, t) {
  return (
    (t = Wc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ql(e, t, n, r) {
  return (
    r !== null && ip(r),
    Oo(t, e.child, null, n),
    (e = yp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _I(e, t, n, r, i, o, s) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = Ud(Error(L(422)))), Ql(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Wc({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Ri(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          1 & t.mode && Oo(t, e.child, null, s),
          (t.child.memoizedState = Fh(s)),
          (t.memoizedState = Ih),
          o);
  if (!(1 & t.mode)) return Ql(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(L(419))),
      (r = Ud(o, r, void 0)),
      Ql(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), $t || a)) {
    if (((r = st), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), vr(e, i), _n(r, e, i, -1)));
    }
    return (Cp(), (r = Ud(Error(L(421)))), Ql(e, t, s, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = HI.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Zt = Yr(i.nextSibling)),
      (Jt = t),
      (Me = !0),
      (Rn = null),
      e !== null &&
        ((pn[mn++] = fr),
        (pn[mn++] = dr),
        (pn[mn++] = _i),
        (fr = e.id),
        (dr = e.overflow),
        (_i = t)),
      (t = yp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sb(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ch(e.return, t, n));
}
function Xd(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function d1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ft(e, t, r.children, n), (r = De.current), 2 & r))
    ((r = (1 & r) | 2), (t.flags |= 128));
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sb(e, n, t);
        else if (e.tag === 19) Sb(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ke(De, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && Ec(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Xd(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ec(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Xd(t, !0, n, null, o);
        break;
      case "together":
        Xd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function sc(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (n = n.sibling = Qr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function II(e, t, n) {
  switch (t.tag) {
    case 3:
      (u1(t), Lo());
      break;
    case 5:
      $x(t);
      break;
    case 1:
      Nt(t.type) && xc(t);
      break;
    case 4:
      up(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (ke(kc, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ke(De, 1 & De.current), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? f1(e, t, n)
            : (ke(De, 1 & De.current),
              (e = gr(e, t, n)),
              e !== null ? e.sibling : null);
      ke(De, 1 & De.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return d1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ke(De, De.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), l1(e, t, n));
  }
  return gr(e, t, n);
}
var h1, Mh, p1, m1;
h1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Mh = function () {};
p1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), Ti(Qn.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = eh(e, i)), (r = eh(e, r)), (o = []));
        break;
      case "select":
        ((i = Ve({}, i, { value: void 0 })),
          (r = Ve({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = rh(e, i)), (r = rh(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = yc);
    }
    oh(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Qs.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i?.[c]),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (o || (o = []), o.push(c, n)), (n = l));
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Qs.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && _e("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
m1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ds(e, t) {
  if (!Me)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function kt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function FI(e, t, n) {
  var r = t.pendingProps;
  switch ((rp(t), t.tag)) {
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
      return (kt(t), null);
    case 1:
      return (Nt(t.type) && bc(), kt(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Do(),
        Ie(zt),
        Ie(Tt),
        dp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          (ql(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), Rn !== null && ($h(Rn), (Rn = null)))),
        Mh(e, t),
        kt(t),
        null
      );
    case 5:
      fp(t);
      var i = Ti(ca.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (p1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return (kt(t), null);
        }
        if (((e = Ti(Qn.current)), ql(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[qn] = t), (r[aa] = o), (e = (1 & t.mode) !== 0), n)) {
            case "dialog":
              (_e("cancel", r), _e("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              _e("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ns.length; i++) _e(Ns[i], r);
              break;
            case "source":
              _e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (_e("error", r), _e("load", r));
              break;
            case "details":
              _e("toggle", r);
              break;
            case "input":
              (I0(r, o), _e("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                _e("invalid", r));
              break;
            case "textarea":
              (M0(r, o), _e("invalid", r));
          }
          (oh(n, o), (i = null));
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gl(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gl(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Qs.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  _e("scroll", r);
            }
          switch (n) {
            case "input":
              (Al(r), F0(r, o, !0));
              break;
            case "textarea":
              (Al(r), L0(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = yc);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hb(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[qn] = t),
            (e[aa] = r),
            h1(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = sh(n, r)), n)) {
              case "dialog":
                (_e("cancel", e), _e("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (_e("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ns.length; i++) _e(Ns[i], e);
                i = r;
                break;
              case "source":
                (_e("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (_e("error", e), _e("load", e), (i = r));
                break;
              case "details":
                (_e("toggle", e), (i = r));
                break;
              case "input":
                (I0(e, r), (i = eh(e, r)), _e("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ve({}, r, { value: void 0 })),
                  _e("invalid", e));
                break;
              case "textarea":
                (M0(e, r), (i = rh(e, r)), _e("invalid", e));
                break;
              default:
                i = r;
            }
            (oh(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Ub(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && jb(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Zs(e, l)
                        : typeof l == "number" && Zs(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Qs.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && _e("scroll", e)
                          : l != null && Hh(e, o, l, s));
              }
            switch (n) {
              case "input":
                (Al(e), F0(e, r, !1));
                break;
              case "textarea":
                (Al(e), L0(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zr(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? To(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      To(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = yc);
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
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (kt(t), null);
    case 6:
      if (e && t.stateNode != null) m1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Ti(ca.current)), Ti(Qn.current), ql(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qn] = t),
            (o = r.nodeValue !== n) && ((e = Jt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gl(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gl(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qn] = t),
            (t.stateNode = r));
      }
      return (kt(t), null);
    case 13:
      if (
        (Ie(De),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Me && Zt !== null && 1 & t.mode && !(128 & t.flags))
          (Mx(), Lo(), (t.flags |= 98560), (o = !1));
        else if (((o = ql(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[qn] = t;
          } else
            (Lo(),
              !(128 & t.flags) && (t.memoizedState = null),
              (t.flags |= 4));
          (kt(t), (o = !1));
        } else (Rn !== null && ($h(Rn), (Rn = null)), (o = !0));
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & De.current ? tt === 0 && (tt = 3) : Cp())),
          t.updateQueue !== null && (t.flags |= 4),
          kt(t),
          null);
    case 4:
      return (
        Do(),
        Mh(e, t),
        e === null && oa(t.stateNode.containerInfo),
        kt(t),
        null
      );
    case 10:
      return (ap(t.type._context), kt(t), null);
    case 17:
      return (Nt(t.type) && bc(), kt(t), null);
    case 19:
      if ((Ie(De), (o = t.memoizedState), o === null)) return (kt(t), null);
      if (((r = (128 & t.flags) !== 0), (s = o.rendering), s === null))
        if (r) Ds(o, !1);
        else {
          if (tt !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((s = Ec(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ds(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ke(De, (1 & De.current) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Xe() > Vo &&
            ((t.flags |= 128), (r = !0), Ds(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ec(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ds(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Me)
            )
              return (kt(t), null);
          } else
            2 * Xe() - o.renderingStartTime > Vo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ds(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Xe()),
          (t.sibling = null),
          (n = De.current),
          ke(De, r ? (1 & n) | 2 : 1 & n),
          t)
        : (kt(t), null);
    case 22:
    case 23:
      return (
        kp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & Qt && (kt(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : kt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function MI(e, t) {
  switch ((rp(t), t.tag)) {
    case 1:
      return (
        Nt(t.type) && bc(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Do(),
        Ie(zt),
        Ie(Tt),
        dp(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return (fp(t), null);
    case 13:
      if (
        (Ie(De), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Lo();
      }
      return (
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return (Ie(De), null);
    case 4:
      return (Do(), null);
    case 10:
      return (ap(t.type._context), null);
    case 22:
    case 23:
      return (kp(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Zl = !1,
  Ct = !1,
  LI = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function ko(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        je(e, t, r);
      }
    else n.current = null;
}
function v1(e, t, n) {
  try {
    n();
  } catch (r) {
    je(e, t, r);
  }
}
var kb = !1;
function OI(e, t) {
  if (((vh = mc), (e = bx()), tp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || M;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              ((d = f), (f = h));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (a = s),
                d === o && ++u === r && (l = s),
                (h = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gh = { focusedElem: e, selectionRange: n }, mc = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      ((e.return = t), (z = e));
    else
      for (; z !== null; ) {
        t = z;
        try {
          var y = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    b = y.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Tn(t.type, g),
                      b,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (x) {
          je(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (z = e));
          break;
        }
        z = t.return;
      }
  return ((y = kb), (kb = !1), y);
}
function Gs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && v1(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Hc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Lh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function g1(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), g1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qn], delete t[aa], delete t[xh], delete t[vI], delete t[gI])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function y1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cb(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || y1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Oh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = yc)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oh(e, t, n), e = e.sibling; e !== null; )
      (Oh(e, t, n), (e = e.sibling));
}
function Dh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dh(e, t, n), e = e.sibling; e !== null; )
      (Dh(e, t, n), (e = e.sibling));
}
var vt = null,
  En = !1;
function Vr(e, t, n) {
  for (n = n.child; n !== null; ) (b1(e, t, n), (n = n.sibling));
}
function b1(e, t, n) {
  if (Kn && typeof Kn.onCommitFiberUnmount == "function")
    try {
      Kn.onCommitFiberUnmount(Oc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ct || ko(n, t);
    case 6:
      var r = vt,
        i = En;
      ((vt = null),
        Vr(e, t, n),
        (vt = r),
        (En = i),
        vt !== null &&
          (En
            ? ((e = vt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : vt.removeChild(n.stateNode)));
      break;
    case 18:
      vt !== null &&
        (En
          ? ((e = vt),
            (n = n.stateNode),
            e.nodeType === 8
              ? $d(e.parentNode, n)
              : e.nodeType === 1 && $d(e, n),
            na(e))
          : $d(vt, n.stateNode));
      break;
    case 4:
      ((r = vt),
        (i = En),
        (vt = n.stateNode.containerInfo),
        (En = !0),
        Vr(e, t, n),
        (vt = r),
        (En = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ct &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          ((o = o.tag),
            s !== void 0 && (2 & o || 4 & o) && v1(n, t, s),
            (i = i.next));
        } while (i !== r);
      }
      Vr(e, t, n);
      break;
    case 1:
      if (
        !Ct &&
        (ko(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          je(n, t, a);
        }
      Vr(e, t, n);
      break;
    case 21:
      Vr(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((Ct = (r = Ct) || n.memoizedState !== null), Vr(e, t, n), (Ct = r))
        : Vr(e, t, n);
      break;
    default:
      Vr(e, t, n);
  }
}
function Tb(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new LI()),
      t.forEach(function (r) {
        var i = jI.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Cn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((vt = a.stateNode), (En = !1));
              break e;
            case 3:
              ((vt = a.stateNode.containerInfo), (En = !0));
              break e;
            case 4:
              ((vt = a.stateNode.containerInfo), (En = !0));
              break e;
          }
          a = a.return;
        }
        if (vt === null) throw Error(L(160));
        (b1(o, s, i), (vt = null), (En = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (c) {
        je(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) (x1(t, e), (t = t.sibling));
}
function x1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Cn(t, e), Yn(e), 4 & r)) {
        try {
          (Gs(3, e, e.return), Hc(3, e));
        } catch (g) {
          je(e, e.return, g);
        }
        try {
          Gs(5, e, e.return);
        } catch (g) {
          je(e, e.return, g);
        }
      }
      break;
    case 1:
      (Cn(t, e), Yn(e), 512 & r && n !== null && ko(n, n.return));
      break;
    case 5:
      if (
        (Cn(t, e),
        Yn(e),
        512 & r && n !== null && ko(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          Zs(i, "");
        } catch (g) {
          je(e, e.return, g);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && zb(i, o),
              sh(a, s));
            var c = sh(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === "style"
                ? Ub(i, f)
                : u === "dangerouslySetInnerHTML"
                  ? jb(i, f)
                  : u === "children"
                    ? Zs(i, f)
                    : Hh(i, u, f, c);
            }
            switch (a) {
              case "input":
                th(i, o);
                break;
              case "textarea":
                Nb(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? To(i, !!o.multiple, h, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? To(i, !!o.multiple, o.defaultValue, !0)
                      : To(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[aa] = o;
          } catch (g) {
            je(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Cn(t, e), Yn(e), 4 & r)) {
        if (e.stateNode === null) throw Error(L(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (g) {
          je(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Cn(t, e), Yn(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          na(t.containerInfo);
        } catch (g) {
          je(e, e.return, g);
        }
      break;
    case 4:
      (Cn(t, e), Yn(e));
      break;
    case 13:
      (Cn(t, e),
        Yn(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (wp = Xe())),
        4 & r && Tb(e));
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((Ct = (c = Ct) || u), Cn(t, e), (Ct = c)) : Cn(t, e),
        Yn(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (z = e, u = e.child; u !== null; ) {
            for (f = z = u; z !== null; ) {
              switch (((d = z), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gs(4, d, d.return);
                  break;
                case 1:
                  ko(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (g) {
                      je(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ko(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Rb(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (z = h)) : Rb(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                ((i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Wb("display", s))));
              } catch (g) {
                je(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (g) {
                je(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (u === f && (u = null), (f = f.return));
          }
          (u === f && (u = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Cn(t, e), Yn(e), 4 & r && Tb(e));
      break;
    case 21:
      break;
    default:
      (Cn(t, e), Yn(e));
  }
}
function Yn(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (y1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (Zs(i, ""), (r.flags &= -33));
          var o = Cb(e);
          Dh(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Cb(e);
          Oh(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      je(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function DI(e, t, n) {
  ((z = e), w1(e, t, n));
}
function w1(e, t, n) {
  for (var r = (1 & e.mode) !== 0; z !== null; ) {
    var i = z,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Zl;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ct;
        a = Zl;
        var c = Ct;
        if (((Zl = s), (Ct = l) && !c))
          for (z = i; z !== null; )
            ((s = z),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Pb(i)
                : l !== null
                  ? ((l.return = s), (z = l))
                  : Pb(i));
        for (; o !== null; ) ((z = o), w1(o, t, n), (o = o.sibling));
        ((z = i), (Zl = a), (Ct = c));
      }
      Eb(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), (z = o))
        : Eb(e, t, n);
  }
}
function Eb(e) {
  for (; z !== null; ) {
    var t = z;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ct || Hc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !Ct)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && cb(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cb(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && na(f);
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
              throw Error(L(163));
          }
        Ct || (512 & t.flags && Lh(t));
      } catch (d) {
        je(t, t.return, d);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (z = n));
      break;
    }
    z = t.return;
  }
}
function Rb(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (z = n));
      break;
    }
    z = t.return;
  }
}
function Pb(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hc(4, t);
          } catch (l) {
            je(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              je(t, i, l);
            }
          }
          var o = t.return;
          try {
            Lh(t);
          } catch (l) {
            je(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Lh(t);
          } catch (l) {
            je(t, s, l);
          }
      }
    } catch (l) {
      je(t, t.return, l);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (z = a));
      break;
    }
    z = t.return;
  }
}
var AI = Math.ceil,
  _c = yr.ReactCurrentDispatcher,
  bp = yr.ReactCurrentOwner,
  gn = yr.ReactCurrentBatchConfig,
  me = 0,
  st = null,
  Ze = null,
  gt = 0,
  Qt = 0,
  Co = ti(0),
  tt = 0,
  ha = null,
  Fi = 0,
  jc = 0,
  xp = 0,
  qs = null,
  Bt = null,
  wp = 0,
  Vo = 1 / 0,
  cr = null,
  Ic = !1,
  Ah = null,
  qr = null,
  Jl = !1,
  jr = null,
  Fc = 0,
  Ks = 0,
  Vh = null,
  ac = -1,
  lc = 0;
function Mt() {
  return 6 & me ? Xe() : ac !== -1 ? ac : (ac = Xe());
}
function Kr(e) {
  return 1 & e.mode
    ? 2 & me && gt !== 0
      ? gt & -gt
      : bI.transition !== null
        ? (lc === 0 && (lc = rx()), lc)
        : ((e = ye),
          e !== 0 || ((e = M.event), (e = e === void 0 ? 16 : ux(e.type))),
          e)
    : 1;
}
function _n(e, t, n, r) {
  if (50 < Ks) throw ((Ks = 0), (Vh = null), Error(L(185)));
  (pa(e, n, r),
    (2 & me && e === st) ||
      (e === st && (!(2 & me) && (jc |= n), tt === 4 && Nr(e, gt)),
      Ht(e, r),
      n === 1 && me === 0 && !(1 & t.mode) && ((Vo = Xe() + 500), $c && ni())));
}
function Ht(e, t) {
  var n = e.callbackNode;
  w2(e, t);
  var r = pc(e, e === st ? gt : 0);
  if (r === 0)
    (n !== null && A0(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && A0(n), t === 1))
      (e.tag === 0 ? yI(_b.bind(null, e)) : _x(_b.bind(null, e)),
        pI(function () {
          !(6 & me) && ni();
        }),
        (n = null));
    else {
      switch (ix(r)) {
        case 1:
          n = Yh;
          break;
        case 4:
          n = tx;
          break;
        case 16:
          n = hc;
          break;
        case 536870912:
          n = nx;
          break;
        default:
          n = hc;
      }
      n = _1(n, S1.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function S1(e, t) {
  if (((ac = -1), (lc = 0), 6 & me)) throw Error(L(327));
  var n = e.callbackNode;
  if (Io() && e.callbackNode !== n) return null;
  var r = pc(e, e === st ? gt : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = Mc(e, r);
  else {
    t = r;
    var i = me;
    me |= 2;
    var o = C1();
    (st === e && gt === t) || ((cr = null), (Vo = Xe() + 500), Ei(e, t));
    do
      try {
        $I();
        break;
      } catch (a) {
        k1(e, a);
      }
    while (1);
    (sp(),
      (_c.current = o),
      (me = i),
      Ze !== null ? (t = 0) : ((st = null), (gt = 0), (t = tt)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = fh(e)), i !== 0 && ((r = i), (t = Bh(e, i)))), t === 1)
    )
      throw ((n = ha), Ei(e, 0), Nr(e, r), Ht(e, Xe()), n);
    if (t === 6) Nr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !VI(i) &&
          ((t = Mc(e, r)),
          t === 2 && ((o = fh(e)), o !== 0 && ((r = o), (t = Bh(e, o)))),
          t === 1))
      )
        throw ((n = ha), Ei(e, 0), Nr(e, r), Ht(e, Xe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Si(e, Bt, cr);
          break;
        case 3:
          if (
            (Nr(e, r), (130023424 & r) === r && ((t = wp + 500 - Xe()), 10 < t))
          ) {
            if (pc(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (Mt(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = bh(Si.bind(null, e, Bt, cr), t);
            break;
          }
          Si(e, Bt, cr);
          break;
        case 4:
          if ((Nr(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Pn(r);
            ((o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o));
          }
          if (
            ((r = i),
            (r = Xe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * AI(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bh(Si.bind(null, e, Bt, cr), r);
            break;
          }
          Si(e, Bt, cr);
          break;
        case 5:
          Si(e, Bt, cr);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return (Ht(e, Xe()), e.callbackNode === n ? S1.bind(null, e) : null);
}
function Bh(e, t) {
  var n = qs;
  return (
    e.current.memoizedState.isDehydrated && (Ei(e, t).flags |= 256),
    (e = Mc(e, t)),
    e !== 2 && ((t = Bt), (Bt = n), t !== null && $h(t)),
    e
  );
}
function $h(e) {
  Bt === null ? (Bt = e) : Bt.push.apply(Bt, e);
}
function VI(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!In(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Nr(e, t) {
  for (
    t &= ~xp,
      t &= ~jc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Pn(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function _b(e) {
  if (6 & me) throw Error(L(327));
  Io();
  var t = pc(e, 0);
  if (!(1 & t)) return (Ht(e, Xe()), null);
  var n = Mc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fh(e);
    r !== 0 && ((t = r), (n = Bh(e, r)));
  }
  if (n === 1) throw ((n = ha), Ei(e, 0), Nr(e, t), Ht(e, Xe()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Si(e, Bt, cr),
    Ht(e, Xe()),
    null
  );
}
function Sp(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    ((me = n), me === 0 && ((Vo = Xe() + 500), $c && ni()));
  }
}
function Mi(e) {
  jr !== null && jr.tag === 0 && !(6 & me) && Io();
  var t = me;
  me |= 1;
  var n = gn.transition,
    r = ye;
  try {
    if (((gn.transition = null), (ye = 1), e)) return e();
  } finally {
    ((ye = r), (gn.transition = n), (me = t), !(6 & me) && ni());
  }
}
function kp() {
  ((Qt = Co.current), Ie(Co));
}
function Ei(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), hI(n)), Ze !== null))
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch ((rp(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && bc());
          break;
        case 3:
          (Do(), Ie(zt), Ie(Tt), dp());
          break;
        case 5:
          fp(r);
          break;
        case 4:
          Do();
          break;
        case 13:
          Ie(De);
          break;
        case 19:
          Ie(De);
          break;
        case 10:
          ap(r.type._context);
          break;
        case 22:
        case 23:
          kp();
      }
      n = n.return;
    }
  if (
    ((st = e),
    (Ze = e = Qr(e.current, null)),
    (gt = Qt = t),
    (tt = 0),
    (ha = null),
    (xp = jc = Fi = 0),
    (Bt = qs = null),
    Ci !== null)
  ) {
    for (t = 0; t < Ci.length; t++)
      if (((n = Ci[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          ((o.next = i), (r.next = s));
        }
        n.pending = r;
      }
    Ci = null;
  }
  return e;
}
function k1(e, t) {
  do {
    var n = Ze;
    try {
      if ((sp(), (ic.current = Pc), Rc)) {
        for (var r = Ae.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Rc = !1;
      }
      if (
        ((Ii = 0),
        (ot = et = Ae = null),
        (Ys = !1),
        (ua = 0),
        (bp.current = null),
        n === null || n.return === null)
      ) {
        ((tt = 1), (ha = t), (Ze = null));
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = gt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var h = vb(s);
          if (h !== null) {
            ((h.flags &= -257),
              gb(h, s, a, o, t),
              1 & h.mode && mb(o, c, t),
              (t = h),
              (l = c));
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              (g.add(l), (t.updateQueue = g));
            } else y.add(l);
            break e;
          }
          if (!(1 & t)) {
            (mb(o, c, t), Cp());
            break e;
          }
          l = Error(L(426));
        } else if (Me && 1 & a.mode) {
          var b = vb(s);
          if (b !== null) {
            (!(65536 & b.flags) && (b.flags |= 256),
              gb(b, s, a, o, t),
              ip(Ao(l, a)));
            break e;
          }
        }
        ((o = l = Ao(l, a)),
          tt !== 4 && (tt = 2),
          qs === null ? (qs = [o]) : qs.push(o),
          (o = s));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var p = o1(o, l, t);
              lb(o, p);
              break e;
            case 1:
              a = l;
              var m = o.type,
                v = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (qr === null || !qr.has(v))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var x = s1(o, a, t);
                lb(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      E1(n);
    } catch (C) {
      ((t = C), Ze === n && n !== null && (Ze = n = n.return));
      continue;
    }
    break;
  } while (1);
}
function C1() {
  var e = _c.current;
  return ((_c.current = Pc), e === null ? Pc : e);
}
function Cp() {
  ((tt !== 0 && tt !== 3 && tt !== 2) || (tt = 4),
    st === null || (!(268435455 & Fi) && !(268435455 & jc)) || Nr(st, gt));
}
function Mc(e, t) {
  var n = me;
  me |= 2;
  var r = C1();
  (st === e && gt === t) || ((cr = null), Ei(e, t));
  do
    try {
      BI();
      break;
    } catch (i) {
      k1(e, i);
    }
  while (1);
  if ((sp(), (me = n), (_c.current = r), Ze !== null)) throw Error(L(261));
  return ((st = null), (gt = 0), tt);
}
function BI() {
  for (; Ze !== null; ) T1(Ze);
}
function $I() {
  for (; Ze !== null && !d2(); ) T1(Ze);
}
function T1(e) {
  var t = P1(e.alternate, e, Qt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? E1(e) : (Ze = t),
    (bp.current = null));
}
function E1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = MI(n, t)), n !== null)) {
        ((n.flags &= 32767), (Ze = n));
        return;
      }
      if (e === null) {
        ((tt = 6), (Ze = null));
        return;
      }
      ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
    } else if (((n = FI(n, t, Qt)), n !== null)) {
      Ze = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ze = t;
      return;
    }
    Ze = t = e;
  } while (t !== null);
  tt === 0 && (tt = 5);
}
function Si(e, t, n) {
  var r = ye,
    i = gn.transition;
  try {
    ((gn.transition = null), (ye = 1), zI(e, t, n, r));
  } finally {
    ((gn.transition = i), (ye = r));
  }
  return null;
}
function zI(e, t, n, r) {
  do Io();
  while (jr !== null);
  if (6 & me) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (S2(e, o),
    e === st && ((Ze = st = null), (gt = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      Jl ||
      ((Jl = !0),
      _1(hc, function () {
        return (Io(), null);
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    ((o = gn.transition), (gn.transition = null));
    var s = ye;
    ye = 1;
    var a = me;
    ((me |= 4),
      (bp.current = null),
      OI(e, n),
      x1(n, e),
      lI(gh),
      (mc = !!vh),
      (gh = vh = null),
      (e.current = n),
      DI(n, e, i),
      h2(),
      (me = a),
      (ye = s),
      (gn.transition = o));
  } else e.current = n;
  if (
    (Jl && ((Jl = !1), (jr = e), (Fc = i)),
    (o = e.pendingLanes),
    o === 0 && (qr = null),
    v2(n.stateNode, r),
    Ht(e, Xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Ic) throw ((Ic = !1), (e = Ah), (Ah = null), e);
  return (
    1 & Fc && e.tag !== 0 && Io(),
    (o = e.pendingLanes),
    1 & o ? (e === Vh ? Ks++ : ((Ks = 0), (Vh = e))) : (Ks = 0),
    ni(),
    null
  );
}
function Io() {
  if (jr !== null) {
    var e = ix(Fc),
      t = gn.transition,
      n = ye;
    try {
      if (((gn.transition = null), (ye = 16 > e ? 16 : e), jr === null))
        var r = !1;
      else {
        if (((e = jr), (jr = null), (Fc = 0), 6 & me)) throw Error(L(331));
        var i = me;
        for (me |= 4, z = e.current; z !== null; ) {
          var o = z,
            s = o.child;
          if (16 & z.flags) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (z = c; z !== null; ) {
                  var u = z;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) ((f.return = u), (z = f));
                  else
                    for (; z !== null; ) {
                      u = z;
                      var d = u.sibling,
                        h = u.return;
                      if ((g1(u), u === c)) {
                        z = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = h), (z = d));
                        break;
                      }
                      z = h;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var b = g.sibling;
                    ((g.sibling = null), (g = b));
                  } while (g !== null);
                }
              }
              z = o;
            }
          }
          if (2064 & o.subtreeFlags && s !== null) ((s.return = o), (z = s));
          else
            e: for (; z !== null; ) {
              if (((o = z), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gs(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                ((p.return = o.return), (z = p));
                break e;
              }
              z = o.return;
            }
        }
        var m = e.current;
        for (z = m; z !== null; ) {
          s = z;
          var v = s.child;
          if (2064 & s.subtreeFlags && v !== null) ((v.return = s), (z = v));
          else
            e: for (s = m; z !== null; ) {
              if (((a = z), 2048 & a.flags))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hc(9, a);
                  }
                } catch (C) {
                  je(a, a.return, C);
                }
              if (a === s) {
                z = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                ((x.return = a.return), (z = x));
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((me = i), ni(), Kn && typeof Kn.onPostCommitFiberRoot == "function")
        )
          try {
            Kn.onPostCommitFiberRoot(Oc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ye = n), (gn.transition = t));
    }
  }
  return !1;
}
function Ib(e, t, n) {
  ((t = Ao(n, t)),
    (t = o1(e, t, 1)),
    (e = Gr(e, t, 1)),
    (t = Mt()),
    e !== null && (pa(e, 1, t), Ht(e, t)));
}
function je(e, t, n) {
  if (e.tag === 3) Ib(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ib(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qr === null || !qr.has(r)))
        ) {
          ((e = Ao(n, e)),
            (e = s1(t, e, 1)),
            (t = Gr(t, e, 1)),
            (e = Mt()),
            t !== null && (pa(t, 1, e), Ht(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function NI(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Mt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    st === e &&
      (gt & n) === n &&
      (tt === 4 || (tt === 3 && (130023424 & gt) === gt && 500 > Xe() - wp)
        ? Ei(e, 0)
        : (xp |= n)),
    Ht(e, t));
}
function R1(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = $l), ($l <<= 1), !(130023424 & $l) && ($l = 4194304))
      : (t = 1));
  var n = Mt();
  ((e = vr(e, t)), e !== null && (pa(e, t, n), Ht(e, n)));
}
function HI(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), R1(e, n));
}
function jI(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  (r !== null && r.delete(t), R1(e, n));
}
var P1;
P1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || zt.current) $t = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return (($t = !1), II(e, t, n));
      $t = (131072 & e.flags) !== 0;
    }
  else (($t = !1), Me && 1048576 & t.flags && Ix(t, Sc, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (sc(e, t), (e = t.pendingProps));
      var i = Mo(t, Tt.current);
      (_o(t, n), (i = pp(null, t, r, e, i, n)));
      var o = mp();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Nt(r) ? ((o = !0), xc(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            cp(t),
            (i.updater = zc),
            (t.stateNode = i),
            (i._reactInternals = t),
            Eh(t, r, e, n),
            (t = _h(null, t, r, !0, o, n)))
          : ((t.tag = 0), Me && o && np(t), Ft(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (sc(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = UI(r)),
          (e = Tn(r, e)),
          i)
        ) {
          case 0:
            t = Ph(null, t, r, e, n);
            break e;
          case 1:
            t = xb(null, t, r, e, n);
            break e;
          case 11:
            t = yb(null, t, r, e, n);
            break e;
          case 14:
            t = bb(null, t, r, Tn(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tn(r, i)),
        Ph(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tn(r, i)),
        xb(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((u1(t), e === null)) throw Error(L(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ox(e, t),
          Tc(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            ((i = Ao(Error(L(423)), t)), (t = wb(e, t, r, n, i)));
            break e;
          }
          if (r !== i) {
            ((i = Ao(Error(L(424)), t)), (t = wb(e, t, r, n, i)));
            break e;
          }
          for (
            Zt = Yr(t.stateNode.containerInfo.firstChild),
              Jt = t,
              Me = !0,
              Rn = null,
              n = Bx(t, null, r, n),
              t.child = n;
            n;

          )
            ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
        } else {
          if ((Lo(), r === i)) {
            t = gr(e, t, n);
            break e;
          }
          Ft(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $x(t),
        e === null && kh(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        yh(r, i) ? (s = null) : o !== null && yh(r, o) && (t.flags |= 32),
        c1(e, t),
        Ft(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && kh(t), null);
    case 13:
      return f1(e, t, n);
    case 4:
      return (
        up(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Oo(t, null, r, n)) : Ft(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tn(r, i)),
        yb(e, t, r, i, n)
      );
    case 7:
      return (Ft(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ft(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ft(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ke(kc, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (In(o.value, s)) {
            if (o.children === i.children && !zt.current) {
              t = gr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ((l = hr(-1, n & -n)), (l.tag = 2));
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        (u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l));
                      }
                    }
                    ((o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Ch(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(L(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ch(s, n, t),
                  (s = o.sibling));
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    ((o.return = s.return), (s = o));
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        (Ft(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        _o(t, n),
        (i = yn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ft(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Tn(r, t.pendingProps)),
        (i = Tn(r.type, i)),
        bb(e, t, r, i, n)
      );
    case 15:
      return a1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Tn(r, i)),
        sc(e, t),
        (t.tag = 1),
        Nt(r) ? ((e = !0), xc(t)) : (e = !1),
        _o(t, n),
        Ax(t, r, i),
        Eh(t, r, i, n),
        _h(null, t, r, !0, e, n)
      );
    case 19:
      return d1(e, t, n);
    case 22:
      return l1(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function _1(e, t) {
  return ex(e, t);
}
function WI(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function vn(e, t, n, r) {
  return new WI(e, t, n, r);
}
function Tp(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function UI(e) {
  if (typeof e == "function") return Tp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wh)) return 11;
    if (e === Uh) return 14;
  }
  return 2;
}
function Qr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function cc(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Tp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case po:
        return Ri(n.children, i, o, t);
      case jh:
        ((s = 8), (i |= 8));
        break;
      case Kd:
        return (
          (e = vn(12, n, t, 2 | i)),
          (e.elementType = Kd),
          (e.lanes = o),
          e
        );
      case Qd:
        return ((e = vn(13, n, t, i)), (e.elementType = Qd), (e.lanes = o), e);
      case Zd:
        return ((e = vn(19, n, t, i)), (e.elementType = Zd), (e.lanes = o), e);
      case Vb:
        return Wc(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Db:
              s = 10;
              break e;
            case Ab:
              s = 9;
              break e;
            case Wh:
              s = 11;
              break e;
            case Uh:
              s = 14;
              break e;
            case Br:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vn(s, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Ri(e, t, n, r) {
  return ((e = vn(7, e, r, t)), (e.lanes = n), e);
}
function Wc(e, t, n, r) {
  return (
    (e = vn(22, e, r, t)),
    (e.elementType = Vb),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yd(e, t, n) {
  return ((e = vn(6, e, null, t)), (e.lanes = n), e);
}
function Gd(e, t, n) {
  return (
    (t = vn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function XI(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fd(0)),
    (this.expirationTimes = Fd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Ep(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new XI(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = vn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cp(o),
    e
  );
}
function YI(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ho,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function I1(e) {
  if (!e) return Jr;
  e = e._reactInternals;
  e: {
    if (Oi(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Nt(n)) return Px(e, n, t);
  }
  return t;
}
function F1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Ep(n, r, !0, e, i, o, s, a, l)),
    (e.context = I1(null)),
    (n = e.current),
    (r = Mt()),
    (i = Kr(n)),
    (o = hr(r, i)),
    (o.callback = t ?? null),
    Gr(n, o, i),
    (e.current.lanes = i),
    pa(e, i, r),
    Ht(e, r),
    e
  );
}
function Uc(e, t, n, r) {
  var i = t.current,
    o = Mt(),
    s = Kr(i);
  return (
    (n = I1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = hr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gr(i, t, s)),
    e !== null && (_n(e, i, s, o), rc(e, i, s)),
    s
  );
}
function Lc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fb(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Rp(e, t) {
  (Fb(e, t), (e = e.alternate) && Fb(e, t));
}
function GI() {
  return null;
}
var M1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Pp(e) {
  this._internalRoot = e;
}
Xc.prototype.render = Pp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Uc(e, t, null, null);
};
Xc.prototype.unmount = Pp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Mi(function () {
      Uc(null, e, null, null);
    }),
      (t[mr] = null));
  }
};
function Xc(e) {
  this._internalRoot = e;
}
Xc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ax();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zr.length && t !== 0 && t < zr[n].priority; n++);
    (zr.splice(n, 0, e), n === 0 && cx(e));
  }
};
function _p(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Mb() {}
function qI(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Lc(s);
        o.call(c);
      };
    }
    var s = F1(t, r, e, 0, null, !1, !1, "", Mb);
    return (
      (e._reactRootContainer = s),
      (e[mr] = s.current),
      oa(e.nodeType === 8 ? e.parentNode : e),
      Mi(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Lc(l);
      a.call(c);
    };
  }
  var l = Ep(e, 0, !1, null, null, !1, !1, "", Mb);
  return (
    (e._reactRootContainer = l),
    (e[mr] = l.current),
    oa(e.nodeType === 8 ? e.parentNode : e),
    Mi(function () {
      Uc(t, l, n, r);
    }),
    l
  );
}
function Gc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Lc(s);
        a.call(l);
      };
    }
    Uc(t, s, e, i);
  } else s = qI(n, t, e, i, r);
  return Lc(s);
}
ox = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zs(t.pendingLanes);
        n !== 0 &&
          (Gh(t, 1 | n), Ht(t, Xe()), !(6 & me) && ((Vo = Xe() + 500), ni()));
      }
      break;
    case 13:
      (Mi(function () {
        var r = vr(e, 1);
        if (r !== null) {
          var i = Mt();
          _n(r, e, 1, i);
        }
      }),
        Rp(e, 1));
  }
};
qh = function (e) {
  if (e.tag === 13) {
    var t = vr(e, 134217728);
    if (t !== null) {
      var n = Mt();
      _n(t, e, 134217728, n);
    }
    Rp(e, 134217728);
  }
};
sx = function (e) {
  if (e.tag === 13) {
    var t = Kr(e),
      n = vr(e, t);
    if (n !== null) {
      var r = Mt();
      _n(n, e, t, r);
    }
    Rp(e, t);
  }
};
ax = function () {
  return ye;
};
lx = function (e, t) {
  var n = ye;
  try {
    return ((ye = e), t());
  } finally {
    ye = n;
  }
};
lh = function (e, t, n) {
  switch (t) {
    case "input":
      if ((th(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Bc(r);
            if (!i) throw Error(L(90));
            ($b(r), th(r, i));
          }
        }
      }
      break;
    case "textarea":
      Nb(e, n);
      break;
    case "select":
      ((t = n.value), t != null && To(e, !!n.multiple, t, !1));
  }
};
Gb = Sp;
qb = Mi;
var KI = { usingClientEntryPoint: !1, Events: [va, yo, Bc, Xb, Yb, Sp] },
  As = {
    findFiberByHostInstance: ki,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  QI = {
    bundleType: As.bundleType,
    version: As.version,
    rendererPackageName: As.rendererPackageName,
    rendererConfig: As.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Zb(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: As.findFiberByHostInstance || GI,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
  ((Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Vs.isDisabled && Vs.supportsFiber)
)
  try {
    ((Oc = Vs.inject(QI)), (Kn = Vs));
  } catch {}
var Vs;
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = KI;
tn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_p(t)) throw Error(L(200));
  return YI(e, t, null, n);
};
tn.createRoot = function (e, t) {
  if (!_p(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = M1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ep(e, 1, !1, null, null, n, !1, r, i)),
    (e[mr] = t.current),
    oa(e.nodeType === 8 ? e.parentNode : e),
    new Pp(t)
  );
};
tn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return ((e = Zb(t)), (e = e === null ? null : e.stateNode), e);
};
tn.flushSync = function (e) {
  return Mi(e);
};
tn.hydrate = function (e, t, n) {
  if (!Yc(t)) throw Error(L(200));
  return Gc(null, e, t, !0, n);
};
tn.hydrateRoot = function (e, t, n) {
  if (!_p(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = M1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = F1(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[mr] = t.current),
    oa(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Xc(t);
};
tn.render = function (e, t, n) {
  if (!Yc(t)) throw Error(L(200));
  return Gc(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function (e) {
  if (!Yc(e)) throw Error(L(40));
  return (
    !!e._reactRootContainer &&
    (Mi(function () {
      Gc(null, null, e, !1, function () {
        ((e._reactRootContainer = null), (e[mr] = null));
      });
    }),
    !0)
  );
};
tn.unstable_batchedUpdates = Sp;
tn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yc(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Gc(e, t, n, !1, r);
};
tn.version = "18.2.0-next-9e3b772b8-20220608";
function L1() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L1);
    } catch (e) {
      console.error(e);
    }
}
L1();
var rn = tn,
  O1 = rn,
  ZI = rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  JI = rn.createPortal,
  eF = rn.createRoot,
  tF = rn.findDOMNode,
  nF = rn.flushSync,
  rF = rn.hydrate,
  iF = rn.hydrateRoot,
  oF = rn.render,
  sF = rn.unmountComponentAtNode,
  aF = rn.unstable_batchedUpdates,
  lF = rn.unstable_renderSubtreeIntoContainer,
  cF = rn.version;
var fF = dn({
    "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Hsluv = void 0));
      var t = class {
        constructor() {
          ((this.hex = "#000000"),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(n) {
          return n <= 0.0031308
            ? 12.92 * n
            : 1.055 * Math.pow(n, 1 / 2.4) - 0.055;
        }
        static toLinear(n) {
          return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
        }
        static yToL(n) {
          return n <= t.epsilon
            ? (n / t.refY) * t.kappa
            : 116 * Math.pow(n / t.refY, 1 / 3) - 16;
        }
        static lToY(n) {
          return n <= 8
            ? (t.refY * n) / t.kappa
            : t.refY * Math.pow((n + 16) / 116, 3);
        }
        static rgbChannelToHex(n) {
          let r = Math.round(n * 255),
            i = r % 16,
            o = ((r - i) / 16) | 0;
          return t.hexChars.charAt(o) + t.hexChars.charAt(i);
        }
        static hexToRgbChannel(n, r) {
          let i = t.hexChars.indexOf(n.charAt(r)),
            o = t.hexChars.indexOf(n.charAt(r + 1));
          return (i * 16 + o) / 255;
        }
        static distanceFromOriginAngle(n, r, i) {
          let o = r / (Math.sin(i) - n * Math.cos(i));
          return o < 0 ? 1 / 0 : o;
        }
        static distanceFromOrigin(n, r) {
          return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1);
        }
        static min6(n, r, i, o, s, a) {
          return Math.min(
            n,
            Math.min(r, Math.min(i, Math.min(o, Math.min(s, a)))),
          );
        }
        rgbToHex() {
          ((this.hex = "#"),
            (this.hex += t.rgbChannelToHex(this.rgb_r)),
            (this.hex += t.rgbChannelToHex(this.rgb_g)),
            (this.hex += t.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = t.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = t.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = t.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = t.fromLinear(
            t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z,
          )),
            (this.rgb_g = t.fromLinear(
              t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z,
            )),
            (this.rgb_b = t.fromLinear(
              t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z,
            )));
        }
        rgbToXyz() {
          let n = t.toLinear(this.rgb_r),
            r = t.toLinear(this.rgb_g),
            i = t.toLinear(this.rgb_b);
          ((this.xyz_x =
            0.41239079926595 * n + 0.35758433938387 * r + 0.18048078840183 * i),
            (this.xyz_y =
              0.21263900587151 * n +
              0.71516867876775 * r +
              0.072192315360733 * i),
            (this.xyz_z =
              0.019330818715591 * n +
              0.11919477979462 * r +
              0.95053215224966 * i));
        }
        xyzToLuv() {
          let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            r = 4 * this.xyz_x,
            i = 9 * this.xyz_y;
          (n !== 0 ? ((r /= n), (i /= n)) : ((r = NaN), (i = NaN)),
            (this.luv_l = t.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (r - t.refU)),
                (this.luv_v = 13 * this.luv_l * (i - t.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let n = this.luv_u / (13 * this.luv_l) + t.refU,
            r = this.luv_v / (13 * this.luv_l) + t.refV;
          ((this.xyz_y = t.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * n) / ((n - 4) * r - n * r)),
            (this.xyz_z =
              (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) /
              (3 * r)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(
              this.luv_u * this.luv_u + this.luv_v * this.luv_v,
            )),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let n = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (n * 180) / Math.PI),
              this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let n = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(n) * this.lch_c),
            (this.luv_v = Math.sin(n) * this.lch_c));
        }
        calculateBoundingLines(n) {
          let r = Math.pow(n + 16, 3) / 1560896,
            i = r > t.epsilon ? r : n / t.kappa,
            o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
            s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
            a = i * (632260 * t.m_r2 - 126452 * t.m_r1),
            l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
            c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
            u = i * (632260 * t.m_g2 - 126452 * t.m_g1),
            f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
            d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
            h = i * (632260 * t.m_b2 - 126452 * t.m_b1);
          ((this.r0s = o / a),
            (this.r0i = (s * n) / a),
            (this.r1s = o / (a + 126452)),
            (this.r1i = ((s - 769860) * n) / (a + 126452)),
            (this.g0s = l / u),
            (this.g0i = (c * n) / u),
            (this.g1s = l / (u + 126452)),
            (this.g1i = ((c - 769860) * n) / (u + 126452)),
            (this.b0s = f / h),
            (this.b0i = (d * n) / h),
            (this.b1s = f / (h + 126452)),
            (this.b1i = ((d - 769860) * n) / (h + 126452)));
        }
        calcMaxChromaHpluv() {
          let n = t.distanceFromOrigin(this.r0s, this.r0i),
            r = t.distanceFromOrigin(this.r1s, this.r1i),
            i = t.distanceFromOrigin(this.g0s, this.g0i),
            o = t.distanceFromOrigin(this.g1s, this.g1i),
            s = t.distanceFromOrigin(this.b0s, this.b0i),
            a = t.distanceFromOrigin(this.b1s, this.b1i);
          return t.min6(n, r, i, o, s, a);
        }
        calcMaxChromaHsluv(n) {
          let r = (n / 360) * Math.PI * 2,
            i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
            o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
            s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
            a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
            l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
            c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
          return t.min6(i, o, s, a, l, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l),
              this.calculateBoundingLines(this.hsluv_l));
            let n = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (n / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999)
            ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / n) * 100),
              (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l),
              this.calculateBoundingLines(this.hpluv_l));
            let n = this.calcMaxChromaHpluv();
            this.lch_c = (n / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999)
            ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / n) * 100),
              (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(),
            this.lchToLuv(),
            this.luvToXyz(),
            this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(),
            this.lchToLuv(),
            this.luvToXyz(),
            this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      };
      ((e.Hsluv = t),
        (t.hexChars = "0123456789abcdef"),
        (t.refY = 1),
        (t.refU = 0.19783000664283),
        (t.refV = 0.46831999493879),
        (t.kappa = 903.2962962),
        (t.epsilon = 0.0088564516),
        (t.m_r0 = 3.240969941904521),
        (t.m_r1 = -1.537383177570093),
        (t.m_r2 = -0.498610760293),
        (t.m_g0 = -0.96924363628087),
        (t.m_g1 = 1.87596750150772),
        (t.m_g2 = 0.041555057407175),
        (t.m_b0 = 0.055630079696993),
        (t.m_b1 = -0.20397695888897),
        (t.m_b2 = 1.056971514242878));
    },
  }),
  dF = dn({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        ((this.fn = c), (this.context = u), (this.once = f || !1));
      }
      function s(c, u, f, d, h) {
        if (typeof f != "function")
          throw new TypeError("The listener must be a function");
        var y = new o(f, d || c, h),
          g = r ? r + u : u;
        return (
          c._events[g]
            ? c._events[g].fn
              ? (c._events[g] = [c._events[g], y])
              : c._events[g].push(y)
            : ((c._events[g] = y), c._eventsCount++),
          c
        );
      }
      function a(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        ((this._events = new i()), (this._eventsCount = 0));
      }
      ((l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var h = 0, y = d.length, g = new Array(y); h < y; h++)
            g[h] = d[h].fn;
          return g;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, h, y, g) {
          var b = r ? r + u : u;
          if (!this._events[b]) return !1;
          var p = this._events[b],
            m = arguments.length,
            v,
            x;
          if (p.fn) {
            switch ((p.once && this.removeListener(u, p.fn, void 0, !0), m)) {
              case 1:
                return (p.fn.call(p.context), !0);
              case 2:
                return (p.fn.call(p.context, f), !0);
              case 3:
                return (p.fn.call(p.context, f, d), !0);
              case 4:
                return (p.fn.call(p.context, f, d, h), !0);
              case 5:
                return (p.fn.call(p.context, f, d, h, y), !0);
              case 6:
                return (p.fn.call(p.context, f, d, h, y, g), !0);
            }
            for (x = 1, v = new Array(m - 1); x < m; x++)
              v[x - 1] = arguments[x];
            p.fn.apply(p.context, v);
          } else {
            var C = p.length,
              w;
            for (x = 0; x < C; x++)
              switch (
                (p[x].once && this.removeListener(u, p[x].fn, void 0, !0), m)
              ) {
                case 1:
                  p[x].fn.call(p[x].context);
                  break;
                case 2:
                  p[x].fn.call(p[x].context, f);
                  break;
                case 3:
                  p[x].fn.call(p[x].context, f, d);
                  break;
                case 4:
                  p[x].fn.call(p[x].context, f, d, h);
                  break;
                default:
                  if (!v)
                    for (w = 1, v = new Array(m - 1); w < m; w++)
                      v[w - 1] = arguments[w];
                  p[x].fn.apply(p[x].context, v);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return s(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return s(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, h) {
          var y = r ? r + u : u;
          if (!this._events[y]) return this;
          if (!f) return (a(this, y), this);
          var g = this._events[y];
          if (g.fn)
            g.fn === f &&
              (!h || g.once) &&
              (!d || g.context === d) &&
              a(this, y);
          else {
            for (var b = 0, p = [], m = g.length; b < m; b++)
              (g[b].fn !== f ||
                (h && !g[b].once) ||
                (d && g[b].context !== d)) &&
                p.push(g[b]);
            p.length
              ? (this._events[y] = p.length === 1 ? p[0] : p)
              : a(this, y);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && a(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < "u" && (t.exports = l));
    },
  }),
  fm = dn({
    "../../../node_modules/process/browser.js"(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == "function" ? (i = clearTimeout) : (i = s);
        } catch {
          i = s;
        }
      })();
      function a(p) {
        if (r === setTimeout) return setTimeout(p, 0);
        if ((r === o || !r) && setTimeout)
          return ((r = setTimeout), setTimeout(p, 0));
        try {
          return r(p, 0);
        } catch {
          try {
            return r.call(null, p, 0);
          } catch {
            return r.call(this, p, 0);
          }
        }
      }
      function l(p) {
        if (i === clearTimeout) return clearTimeout(p);
        if ((i === s || !i) && clearTimeout)
          return ((i = clearTimeout), clearTimeout(p));
        try {
          return i(p);
        } catch {
          try {
            return i.call(null, p);
          } catch {
            return i.call(this, p);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function h() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && y());
      }
      function y() {
        if (!u) {
          var p = a(h);
          u = !0;
          for (var m = c.length; m; ) {
            for (f = c, c = []; ++d < m; ) f && f[d].run();
            ((d = -1), (m = c.length));
          }
          ((f = null), (u = !1), l(p));
        }
      }
      n.nextTick = function (p) {
        var m = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var v = 1; v < arguments.length; v++) m[v - 1] = arguments[v];
        (c.push(new g(p, m)), c.length === 1 && !u && a(y));
      };
      function g(p, m) {
        ((this.fun = p), (this.array = m));
      }
      ((g.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}));
      function b() {}
      ((n.on = b),
        (n.addListener = b),
        (n.once = b),
        (n.off = b),
        (n.removeListener = b),
        (n.removeAllListeners = b),
        (n.emit = b),
        (n.prependListener = b),
        (n.prependOnceListener = b),
        (n.listeners = function (p) {
          return [];
        }),
        (n.binding = function (p) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (p) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        }));
    },
  }),
  hF = dn({
    "../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js"(
      e,
      t,
    ) {
      (function (n, r) {
        typeof e == "object" && typeof t < "u"
          ? r(e)
          : typeof define == "function" && define.amd
            ? define(["exports"], r)
            : ((n = typeof globalThis < "u" ? globalThis : n || self),
              r((n.ResizeObserver = {})));
      })(e, function (n) {
        "use strict";
        var r = [],
          i = function () {
            return r.some(function (P) {
              return P.activeTargets.length > 0;
            });
          },
          o = function () {
            return r.some(function (P) {
              return P.skippedTargets.length > 0;
            });
          },
          s = "ResizeObserver loop completed with undelivered notifications.",
          a = function () {
            var P;
            (typeof ErrorEvent == "function"
              ? (P = new ErrorEvent("error", { message: s }))
              : ((P = document.createEvent("Event")),
                P.initEvent("error", !1, !1),
                (P.message = s)),
              M.dispatchEvent(P));
          },
          l;
        (function (P) {
          ((P.BORDER_BOX = "border-box"),
            (P.CONTENT_BOX = "content-box"),
            (P.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"));
        })(l || (l = {}));
        var c = function (P) {
            return Object.freeze(P);
          },
          u = (function () {
            function P(I, O) {
              ((this.inlineSize = I), (this.blockSize = O), c(this));
            }
            return P;
          })(),
          f = (function () {
            function P(I, O, j, pe) {
              return (
                (this.x = I),
                (this.y = O),
                (this.width = j),
                (this.height = pe),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                c(this)
              );
            }
            return (
              (P.prototype.toJSON = function () {
                var I = this,
                  O = I.x,
                  j = I.y,
                  pe = I.top,
                  Pt = I.right,
                  ft = I.bottom,
                  Ue = I.left,
                  nr = I.width,
                  Yt = I.height;
                return {
                  x: O,
                  y: j,
                  top: pe,
                  right: Pt,
                  bottom: ft,
                  left: Ue,
                  width: nr,
                  height: Yt,
                };
              }),
              (P.fromRect = function (I) {
                return new P(I.x, I.y, I.width, I.height);
              }),
              P
            );
          })(),
          d = function (P) {
            return P instanceof SVGElement && "getBBox" in P;
          },
          h = function (P) {
            if (d(P)) {
              var I = P.getBBox(),
                O = I.width,
                j = I.height;
              return !O && !j;
            }
            var pe = P,
              Pt = pe.offsetWidth,
              ft = pe.offsetHeight;
            return !(Pt || ft || P.getClientRects().length);
          },
          y = function (P) {
            var I, O;
            if (P instanceof Element) return !0;
            var j =
              (O =
                (I = P) === null || I === void 0 ? void 0 : I.ownerDocument) ===
                null || O === void 0
                ? void 0
                : O.defaultView;
            return !!(j && P instanceof j.Element);
          },
          g = function (P) {
            switch (P.tagName) {
              case "INPUT":
                if (P.type !== "image") break;
              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
              case "IMG":
                return !0;
            }
            return !1;
          },
          b = typeof M < "u" ? M : {},
          p = new WeakMap(),
          m = /auto|scroll/,
          v = /^tb|vertical/,
          x = /msie|trident/i.test(b.navigator && b.navigator.userAgent),
          C = function (P) {
            return parseFloat(P || "0");
          },
          w = function (P, I, O) {
            return (
              P === void 0 && (P = 0),
              I === void 0 && (I = 0),
              O === void 0 && (O = !1),
              new u((O ? I : P) || 0, (O ? P : I) || 0)
            );
          },
          E = c({
            devicePixelContentBoxSize: w(),
            borderBoxSize: w(),
            contentBoxSize: w(),
            contentRect: new f(0, 0, 0, 0),
          }),
          T = function (P, I) {
            if ((I === void 0 && (I = !1), p.has(P) && !I)) return p.get(P);
            if (h(P)) return (p.set(P, E), E);
            var O = getComputedStyle(P),
              j = d(P) && P.ownerSVGElement && P.getBBox(),
              pe = !x && O.boxSizing === "border-box",
              Pt = v.test(O.writingMode || ""),
              ft = !j && m.test(O.overflowY || ""),
              Ue = !j && m.test(O.overflowX || ""),
              nr = j ? 0 : C(O.paddingTop),
              Yt = j ? 0 : C(O.paddingRight),
              fi = j ? 0 : C(O.paddingBottom),
              Gi = j ? 0 : C(O.paddingLeft),
              CC = j ? 0 : C(O.borderTopWidth),
              TC = j ? 0 : C(O.borderRightWidth),
              EC = j ? 0 : C(O.borderBottomWidth),
              RC = j ? 0 : C(O.borderLeftWidth),
              $m = Gi + Yt,
              zm = nr + fi,
              Hu = RC + TC,
              ju = CC + EC,
              Nm = Ue ? P.offsetHeight - ju - P.clientHeight : 0,
              Hm = ft ? P.offsetWidth - Hu - P.clientWidth : 0,
              PC = pe ? $m + Hu : 0,
              _C = pe ? zm + ju : 0,
              qa = j ? j.width : C(O.width) - PC - Hm,
              Ka = j ? j.height : C(O.height) - _C - Nm,
              IC = qa + $m + Hm + Hu,
              FC = Ka + zm + Nm + ju,
              jm = c({
                devicePixelContentBoxSize: w(
                  Math.round(qa * devicePixelRatio),
                  Math.round(Ka * devicePixelRatio),
                  Pt,
                ),
                borderBoxSize: w(IC, FC, Pt),
                contentBoxSize: w(qa, Ka, Pt),
                contentRect: new f(Gi, nr, qa, Ka),
              });
            return (p.set(P, jm), jm);
          },
          F = function (P, I, O) {
            var j = T(P, O),
              pe = j.borderBoxSize,
              Pt = j.contentBoxSize,
              ft = j.devicePixelContentBoxSize;
            switch (I) {
              case l.DEVICE_PIXEL_CONTENT_BOX:
                return ft;
              case l.BORDER_BOX:
                return pe;
              default:
                return Pt;
            }
          },
          _ = (function () {
            function P(I) {
              var O = T(I);
              ((this.target = I),
                (this.contentRect = O.contentRect),
                (this.borderBoxSize = c([O.borderBoxSize])),
                (this.contentBoxSize = c([O.contentBoxSize])),
                (this.devicePixelContentBoxSize = c([
                  O.devicePixelContentBoxSize,
                ])));
            }
            return P;
          })(),
          $ = function (P) {
            if (h(P)) return 1 / 0;
            for (var I = 0, O = P.parentNode; O; )
              ((I += 1), (O = O.parentNode));
            return I;
          },
          D = function () {
            var P = 1 / 0,
              I = [];
            r.forEach(function (ft) {
              if (ft.activeTargets.length !== 0) {
                var Ue = [];
                (ft.activeTargets.forEach(function (Yt) {
                  var fi = new _(Yt.target),
                    Gi = $(Yt.target);
                  (Ue.push(fi),
                    (Yt.lastReportedSize = F(Yt.target, Yt.observedBox)),
                    Gi < P && (P = Gi));
                }),
                  I.push(function () {
                    ft.callback.call(ft.observer, Ue, ft.observer);
                  }),
                  ft.activeTargets.splice(0, ft.activeTargets.length));
              }
            });
            for (var O = 0, j = I; O < j.length; O++) {
              var pe = j[O];
              pe();
            }
            return P;
          },
          q = function (P) {
            r.forEach(function (O) {
              (O.activeTargets.splice(0, O.activeTargets.length),
                O.skippedTargets.splice(0, O.skippedTargets.length),
                O.observationTargets.forEach(function (pe) {
                  pe.isActive() &&
                    ($(pe.target) > P
                      ? O.activeTargets.push(pe)
                      : O.skippedTargets.push(pe));
                }));
            });
          },
          W = function () {
            var P = 0;
            for (q(P); i(); ) ((P = D()), q(P));
            return (o() && a(), P > 0);
          },
          H,
          U = [],
          ee = function () {
            return U.splice(0).forEach(function (P) {
              return P();
            });
          },
          te = function (P) {
            if (!H) {
              var I = 0,
                O = document.createTextNode(""),
                j = { characterData: !0 };
              (new MutationObserver(function () {
                return ee();
              }).observe(O, j),
                (H = function () {
                  O.textContent = "" + (I ? I-- : I++);
                }));
            }
            (U.push(P), H());
          },
          Y = function (P) {
            te(function () {
              requestAnimationFrame(P);
            });
          },
          ne = 0,
          ge = function () {
            return !!ne;
          },
          re = 250,
          de = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          ie = [
            "resize",
            "load",
            "transitionend",
            "animationend",
            "animationstart",
            "animationiteration",
            "keyup",
            "keydown",
            "mouseup",
            "mousedown",
            "mouseover",
            "mouseout",
            "blur",
            "focus",
          ],
          ut = function (P) {
            return (P === void 0 && (P = 0), Date.now() + P);
          },
          Te = !1,
          Rt = (function () {
            function P() {
              var I = this;
              ((this.stopped = !0),
                (this.listener = function () {
                  return I.schedule();
                }));
            }
            return (
              (P.prototype.run = function (I) {
                var O = this;
                if ((I === void 0 && (I = re), !Te)) {
                  Te = !0;
                  var j = ut(I);
                  Y(function () {
                    var pe = !1;
                    try {
                      pe = W();
                    } finally {
                      if (((Te = !1), (I = j - ut()), !ge())) return;
                      pe ? O.run(1e3) : I > 0 ? O.run(I) : O.start();
                    }
                  });
                }
              }),
              (P.prototype.schedule = function () {
                (this.stop(), this.run());
              }),
              (P.prototype.observe = function () {
                var I = this,
                  O = function () {
                    return I.observer && I.observer.observe(document.body, de);
                  };
                document.body ? O() : b.addEventListener("DOMContentLoaded", O);
              }),
              (P.prototype.start = function () {
                var I = this;
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  ie.forEach(function (O) {
                    return b.addEventListener(O, I.listener, !0);
                  }));
              }),
              (P.prototype.stop = function () {
                var I = this;
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  ie.forEach(function (O) {
                    return b.removeEventListener(O, I.listener, !0);
                  }),
                  (this.stopped = !0));
              }),
              P
            );
          })(),
          be = new Rt(),
          Xt = function (P) {
            (!ne && P > 0 && be.start(), (ne += P), !ne && be.stop());
          },
          wn = function (P) {
            return !d(P) && !g(P) && getComputedStyle(P).display === "inline";
          },
          Sn = (function () {
            function P(I, O) {
              ((this.target = I),
                (this.observedBox = O || l.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 }));
            }
            return (
              (P.prototype.isActive = function () {
                var I = F(this.target, this.observedBox, !0);
                return (
                  wn(this.target) && (this.lastReportedSize = I),
                  this.lastReportedSize.inlineSize !== I.inlineSize ||
                    this.lastReportedSize.blockSize !== I.blockSize
                );
              }),
              P
            );
          })(),
          he = (function () {
            function P(I, O) {
              ((this.activeTargets = []),
                (this.skippedTargets = []),
                (this.observationTargets = []),
                (this.observer = I),
                (this.callback = O));
            }
            return P;
          })(),
          Dn = new WeakMap(),
          rt = function (P, I) {
            for (var O = 0; O < P.length; O += 1)
              if (P[O].target === I) return O;
            return -1;
          },
          ln = (function () {
            function P() {}
            return (
              (P.connect = function (I, O) {
                var j = new he(I, O);
                Dn.set(I, j);
              }),
              (P.observe = function (I, O, j) {
                var pe = Dn.get(I),
                  Pt = pe.observationTargets.length === 0;
                rt(pe.observationTargets, O) < 0 &&
                  (Pt && r.push(pe),
                  pe.observationTargets.push(new Sn(O, j && j.box)),
                  Xt(1),
                  be.schedule());
              }),
              (P.unobserve = function (I, O) {
                var j = Dn.get(I),
                  pe = rt(j.observationTargets, O),
                  Pt = j.observationTargets.length === 1;
                pe >= 0 &&
                  (Pt && r.splice(r.indexOf(j), 1),
                  j.observationTargets.splice(pe, 1),
                  Xt(-1));
              }),
              (P.disconnect = function (I) {
                var O = this,
                  j = Dn.get(I);
                (j.observationTargets.slice().forEach(function (pe) {
                  return O.unobserve(I, pe.target);
                }),
                  j.activeTargets.splice(0, j.activeTargets.length));
              }),
              P
            );
          })(),
          Ga = (function () {
            function P(I) {
              if (arguments.length === 0)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (typeof I != "function")
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
                );
              ln.connect(this, I);
            }
            return (
              (P.prototype.observe = function (I, O) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                  );
                if (!y(I))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                  );
                ln.observe(this, I, O);
              }),
              (P.prototype.unobserve = function (I) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                  );
                if (!y(I))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                  );
                ln.unobserve(this, I);
              }),
              (P.prototype.disconnect = function () {
                ln.disconnect(this);
              }),
              (P.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
              }),
              P
            );
          })();
        ((n.ResizeObserver = Ga),
          (n.ResizeObserverEntry = _),
          (n.ResizeObserverSize = u),
          Object.defineProperty(n, "__esModule", { value: !0 }));
      });
    },
  }),
  pF = dn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
      e,
    ) {
      "use strict";
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        o = t ? Symbol.for("react.strict_mode") : 60108,
        s = t ? Symbol.for("react.profiler") : 60114,
        a = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        c = t ? Symbol.for("react.async_mode") : 60111,
        u = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        d = t ? Symbol.for("react.suspense") : 60113,
        h = t ? Symbol.for("react.suspense_list") : 60120,
        y = t ? Symbol.for("react.memo") : 60115,
        g = t ? Symbol.for("react.lazy") : 60116,
        b = t ? Symbol.for("react.block") : 60121,
        p = t ? Symbol.for("react.fundamental") : 60117,
        m = t ? Symbol.for("react.responder") : 60118,
        v = t ? Symbol.for("react.scope") : 60119;
      function x(w) {
        if (typeof w == "object" && w !== null) {
          var E = w.$$typeof;
          switch (E) {
            case n:
              switch (((w = w.type), w)) {
                case c:
                case u:
                case i:
                case s:
                case o:
                case d:
                  return w;
                default:
                  switch (((w = w && w.$$typeof), w)) {
                    case l:
                    case f:
                    case g:
                    case y:
                    case a:
                      return w;
                    default:
                      return E;
                  }
              }
            case r:
              return E;
          }
        }
      }
      function C(w) {
        return x(w) === u;
      }
      ((e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = a),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = g),
        (e.Memo = y),
        (e.Portal = r),
        (e.Profiler = s),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (w) {
          return C(w) || x(w) === c;
        }),
        (e.isConcurrentMode = C),
        (e.isContextConsumer = function (w) {
          return x(w) === l;
        }),
        (e.isContextProvider = function (w) {
          return x(w) === a;
        }),
        (e.isElement = function (w) {
          return typeof w == "object" && w !== null && w.$$typeof === n;
        }),
        (e.isForwardRef = function (w) {
          return x(w) === f;
        }),
        (e.isFragment = function (w) {
          return x(w) === i;
        }),
        (e.isLazy = function (w) {
          return x(w) === g;
        }),
        (e.isMemo = function (w) {
          return x(w) === y;
        }),
        (e.isPortal = function (w) {
          return x(w) === r;
        }),
        (e.isProfiler = function (w) {
          return x(w) === s;
        }),
        (e.isStrictMode = function (w) {
          return x(w) === o;
        }),
        (e.isSuspense = function (w) {
          return x(w) === d;
        }),
        (e.isValidElementType = function (w) {
          return (
            typeof w == "string" ||
            typeof w == "function" ||
            w === i ||
            w === u ||
            w === s ||
            w === o ||
            w === d ||
            w === h ||
            (typeof w == "object" &&
              w !== null &&
              (w.$$typeof === g ||
                w.$$typeof === y ||
                w.$$typeof === a ||
                w.$$typeof === l ||
                w.$$typeof === f ||
                w.$$typeof === p ||
                w.$$typeof === m ||
                w.$$typeof === v ||
                w.$$typeof === b))
          );
        }),
        (e.typeOf = x));
    },
  }),
  mF = dn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
      e,
      t,
    ) {
      "use strict";
      t.exports = pF();
    },
  }),
  Ru = dn({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t,
    ) {
      "use strict";
      var n = mF(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      ((a[n.ForwardRef] = o), (a[n.Memo] = s));
      function l(b) {
        return n.isMemo(b) ? s : a[b.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        y = Object.prototype;
      function g(b, p, m) {
        if (typeof p != "string") {
          if (y) {
            var v = h(p);
            v && v !== y && g(b, v, m);
          }
          var x = u(p);
          f && (x = x.concat(f(p)));
          for (var C = l(b), w = l(p), E = 0; E < x.length; ++E) {
            var T = x[E];
            if (!i[T] && !(m && m[T]) && !(w && w[T]) && !(C && C[T])) {
              var F = d(p, T);
              try {
                c(b, T, F);
              } catch {}
            }
          }
        }
        return b;
      }
      t.exports = g;
    },
  }),
  vF = dn({
    "../../../node_modules/archy/index.js"(e, t) {
      t.exports = function n(r, i, o) {
        (i === void 0 && (i = ""), o || (o = {}));
        var s = function (u) {
          var f = {
            "\u2502": "|",
            "\u2514": "`",
            "\u251C": "+",
            "\u2500": "-",
            "\u252C": "-",
          };
          return o.unicode === !1 ? f[u] : u;
        };
        typeof r == "string" && (r = { label: r });
        var a = r.nodes || [],
          l = (r.label || "").split(`
`),
          c =
            `
` +
            i +
            (a.length ? s("\u2502") : " ") +
            " ";
        return (
          i +
          l.join(c) +
          `
` +
          a
            .map(function (u, f) {
              var d = f === a.length - 1,
                h = u.nodes && u.nodes.length,
                y = i + (d ? " " : s("\u2502")) + " ";
              return (
                i +
                s(d ? "\u2514" : "\u251C") +
                s("\u2500") +
                s(h ? "\u252C" : "\u2500") +
                " " +
                n(u, y, o).slice(i.length + 2)
              );
            })
            .join("")
        );
      };
    },
  }),
  gF = dn({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
      e,
      t,
    ) {
      (function () {
        function n(p, m) {
          document.addEventListener
            ? p.addEventListener("scroll", m, !1)
            : p.attachEvent("scroll", m);
        }
        function r(p) {
          document.body
            ? p()
            : document.addEventListener
              ? document.addEventListener("DOMContentLoaded", function m() {
                  (document.removeEventListener("DOMContentLoaded", m), p());
                })
              : document.attachEvent("onreadystatechange", function m() {
                  (document.readyState == "interactive" ||
                    document.readyState == "complete") &&
                    (document.detachEvent("onreadystatechange", m), p());
                });
        }
        function i(p) {
          ((this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(p)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c));
        }
        function o(p, m) {
          p.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            m +
            ";";
        }
        function s(p) {
          var m = p.a.offsetWidth,
            v = m + 100;
          return (
            (p.f.style.width = v + "px"),
            (p.c.scrollLeft = v),
            (p.b.scrollLeft = p.b.scrollWidth + 100),
            p.g !== m ? ((p.g = m), !0) : !1
          );
        }
        function a(p, m) {
          function v() {
            var C = x;
            s(C) && C.a.parentNode && m(C.g);
          }
          var x = p;
          (n(p.b, v), n(p.c, v), s(p));
        }
        function l(p, m) {
          var v = m || {};
          ((this.family = p),
            (this.style = v.style || "normal"),
            (this.weight = v.weight || "normal"),
            (this.stretch = v.stretch || "normal"));
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function h() {
          if (u === null)
            if (y() && /Apple/.test(M.navigator.vendor)) {
              var p = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                M.navigator.userAgent,
              );
              u = !!p && 603 > parseInt(p[1], 10);
            } else u = !1;
          return u;
        }
        function y() {
          return (d === null && (d = !!document.fonts), d);
        }
        function g() {
          if (f === null) {
            var p = document.createElement("div");
            try {
              p.style.font = "condensed 100px sans-serif";
            } catch {}
            f = p.style.font !== "";
          }
          return f;
        }
        function b(p, m) {
          return [p.style, p.weight, g() ? p.stretch : "", "100px", m].join(
            " ",
          );
        }
        ((l.prototype.load = function (p, m) {
          var v = this,
            x = p || "BESbswy",
            C = 0,
            w = m || 3e3,
            E = new Date().getTime();
          return new Promise(function (T, F) {
            if (y() && !h()) {
              var _ = new Promise(function (D, q) {
                  function W() {
                    new Date().getTime() - E >= w
                      ? q(Error("" + w + "ms timeout exceeded"))
                      : document.fonts
                          .load(b(v, '"' + v.family + '"'), x)
                          .then(function (H) {
                            1 <= H.length ? D() : setTimeout(W, 25);
                          }, q);
                  }
                  W();
                }),
                $ = new Promise(function (D, q) {
                  C = setTimeout(function () {
                    q(Error("" + w + "ms timeout exceeded"));
                  }, w);
                });
              Promise.race([$, _]).then(function () {
                (clearTimeout(C), T(v));
              }, F);
            } else
              r(function () {
                function D() {
                  var ie;
                  ((ie =
                    (ee != -1 && te != -1) ||
                    (ee != -1 && Y != -1) ||
                    (te != -1 && Y != -1)) &&
                    ((ie = ee != te && ee != Y && te != Y) ||
                      (c === null &&
                        ((ie = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          M.navigator.userAgent,
                        )),
                        (c =
                          !!ie &&
                          (536 > parseInt(ie[1], 10) ||
                            (parseInt(ie[1], 10) === 536 &&
                              11 >= parseInt(ie[2], 10))))),
                      (ie =
                        c &&
                        ((ee == ne && te == ne && Y == ne) ||
                          (ee == ge && te == ge && Y == ge) ||
                          (ee == re && te == re && Y == re)))),
                    (ie = !ie)),
                    ie &&
                      (de.parentNode && de.parentNode.removeChild(de),
                      clearTimeout(C),
                      T(v)));
                }
                function q() {
                  if (new Date().getTime() - E >= w)
                    (de.parentNode && de.parentNode.removeChild(de),
                      F(Error("" + w + "ms timeout exceeded")));
                  else {
                    var ie = document.hidden;
                    ((ie === !0 || ie === void 0) &&
                      ((ee = W.a.offsetWidth),
                      (te = H.a.offsetWidth),
                      (Y = U.a.offsetWidth),
                      D()),
                      (C = setTimeout(q, 50)));
                  }
                }
                var W = new i(x),
                  H = new i(x),
                  U = new i(x),
                  ee = -1,
                  te = -1,
                  Y = -1,
                  ne = -1,
                  ge = -1,
                  re = -1,
                  de = document.createElement("div");
                ((de.dir = "ltr"),
                  o(W, b(v, "sans-serif")),
                  o(H, b(v, "serif")),
                  o(U, b(v, "monospace")),
                  de.appendChild(W.a),
                  de.appendChild(H.a),
                  de.appendChild(U.a),
                  document.body.appendChild(de),
                  (ne = W.a.offsetWidth),
                  (ge = H.a.offsetWidth),
                  (re = U.a.offsetWidth),
                  q(),
                  a(W, function (ie) {
                    ((ee = ie), D());
                  }),
                  o(W, b(v, '"' + v.family + '",sans-serif')),
                  a(H, function (ie) {
                    ((te = ie), D());
                  }),
                  o(H, b(v, '"' + v.family + '",serif')),
                  a(U, function (ie) {
                    ((Y = ie), D());
                  }),
                  o(U, b(v, '"' + v.family + '",monospace')));
              });
          });
        }),
          typeof t == "object"
            ? (t.exports = l)
            : ((M.FontFaceObserver = l),
              (M.FontFaceObserver.prototype.load = l.prototype.load)));
      })();
    },
  });
function Qp(e, t) {
  let n = { style: t };
  return S.isValidElement(e) ? S.cloneElement(e, n) : S.createElement(e, n);
}
var yF = class extends Error {},
  ou = class extends Error {},
  bF = class extends Ee {
    constructor(e) {
      (super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return (t.error && (n.error = void 0), n);
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof yF)) {
        let n = new ou();
        throw ((n.cause = this.state.error), n);
      }
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return Qp(e, t);
    }
  },
  xF = ":([a-z]\\w*)",
  Ni = new RegExp(xF, "gi");
function gS(e, t) {
  return e.replace(Ni, (n, r) => {
    let i = t[r];
    return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function yS(e, t) {
  if (!e.startsWith("/") || !t.startsWith("/"))
    throw new Error("from/to paths are expected to be absolute");
  let [n] = D1(e),
    [r, i] = D1(t),
    o = wF(n, r);
  return (
    o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
  );
}
function D1(e) {
  let t = e.lastIndexOf("/");
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var Ip = 46,
  jo = 47,
  ci = (e, t) => e.charCodeAt(t),
  A1 = (e, t) => e.lastIndexOf(t),
  Uo = (e, t, n) => e.slice(t, n);
function wF(e, t) {
  if (e === t || ((e = "/" + B1(e)), (t = "/" + B1(t)), e === t)) return "";
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    s = t.length - o,
    a = i < s ? i : s,
    l = -1,
    c = 0;
  for (; c < a; c++) {
    let f = ci(e, n + c);
    if (f !== ci(t, o + c)) break;
    f === jo && (l = c);
  }
  if (c === a)
    if (s > a) {
      if (ci(t, o + c) === jo) return Uo(t, o + c + 1);
      if (c === 0) return Uo(t, o + c);
    } else i > a && (ci(e, n + c) === jo ? (l = c) : c === 0 && (l = 0));
  let u = "";
  for (c = n + l + 1; c <= r; ++c)
    (c === r || ci(e, c) === jo) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${Uo(t, o + l)}`;
}
var SF = !1,
  qc = "/",
  V1 = (e) => e === jo;
function B1(e) {
  let t = "",
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) o = ci(e, s);
    else {
      if (V1(o)) break;
      o = jo;
    }
    if (V1(o)) {
      if (!(r === s - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            ci(t, t.length - 1) !== Ip ||
            ci(t, t.length - 2) !== Ip
          ) {
            if (t.length > 2) {
              let a = A1(t, qc);
              (a === -1
                ? ((t = ""), (n = 0))
                : ((t = Uo(t, 0, a)), (n = t.length - 1 - A1(t, qc))),
                (r = s),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ""), (n = 0), (r = s), (i = 0));
              continue;
            }
          }
          SF && ((t += t.length > 0 ? `${qc}..` : ".."), (n = 2));
        } else
          (t.length > 0
            ? (t += `${qc}${Uo(e, r + 1, s)}`)
            : (t = Uo(e, r + 1, s)),
            (n = s - r - 1));
      ((r = s), (i = 0));
    } else o === Ip && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function bS(e) {
  let t = typeof M < "u" ? M.location.search : "";
  return t ? kF(t, e) : e;
}
function kF(e, t) {
  let n = t.indexOf("#"),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? "" : t.substring(n),
    o = r.indexOf("?");
  if (o === -1) return r + e + i;
  let s = new URLSearchParams(e),
    a = r.substring(o + 1),
    l = new URLSearchParams(a);
  for (let [c, u] of s) l.has(c) || l.append(c, u);
  return r.substring(0, o + 1) + l.toString() + i;
}
function Ta(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function $i(e) {
  return typeof e == "string";
}
var CF = "preload";
function xS(e) {
  return typeof e == "object" && e !== null && !S.isValidElement(e) && CF in e;
}
function u6(e) {
  let t = S.lazy(e),
    n,
    r,
    i = S.forwardRef(function (s, a) {
      return S.createElement(r ?? t, a ? { ref: a, ...s } : s);
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)),
    i
  );
}
function Pu(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function TF(e) {
  return /bot|-google|google-|yandex|ia_archiver/iu.test(e);
}
function wS(e) {
  if ("scheduler" in M) {
    if ("yield" in scheduler) return scheduler.yield(e);
    if ("postTask" in scheduler) return scheduler.postTask(() => {}, e);
  }
  return e?.priority === "user-blocking"
    ? Promise.resolve()
    : new Promise((t) => {
        setTimeout(t);
      });
}
async function EF(e, t) {
  return (await wS(t), e());
}
function Go(e, t = !0) {
  return new Promise((n) => {
    (t && setTimeout(n, 100),
      requestAnimationFrame(() => {
        EF(n, e);
      }));
  });
}
function dm(e, t, n, r = !1) {
  ht(() => {
    (async () => {
      (await Go(n, r), e());
    })();
  }, t);
}
var gu = () => {};
async function RF(e, t, n, r, i, o, s) {
  var a, l, c;
  let u = e,
    f = !1,
    d = { ...o },
    h = Array.from(u.matchAll(Ni)),
    y = await Promise.all(
      h.map(async (m) => {
        var v;
        let x = m?.[0],
          C = m?.[1];
        if (!x || !C)
          throw new Error(
            "Failed to replace path variables: unexpected regex match group",
          );
        let w = o[C];
        if (!w || !$i(w))
          throw new Error(`No slug found for path variable ${C}`);
        let E = await ((v = s?.[i]) === null || v === void 0
          ? void 0
          : v.call(s));
        if (!E || !t) return w;
        let T = await E.getRecordIdBySlug(w, t);
        if (!T) return w;
        let F = await E.getSlugByRecordId(T, n);
        if (!F) {
          f = !0;
          let _ = await E.getSlugByRecordId(T, r);
          return (_ && (d[C] = _), _ ?? w);
        }
        return ((d[C] = F), F);
      }),
    ),
    g = 0,
    b = "",
    p = !1;
  for (let m = 0; m < h.length; m++) {
    let v = h[m],
      x = y[m];
    !v ||
      !x ||
      ((b += u.substring(g, v.index)),
      (g =
        ((a = v.index) !== null && a !== void 0 ? a : 0) +
        ((c = (l = v[0]) === null || l === void 0 ? void 0 : l.length) !==
          null && c !== void 0
          ? c
          : 0)),
      (b += y[m]),
      (p = !0));
  }
  return (p && (u = b), { path: u, pathVariables: d, isMissingInLocale: f });
}
async function PF({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
  preserveQueryParams: s,
}) {
  let { path: a } = r,
    l = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return l;
  if (i && r.collectionId)
    try {
      l = await RF(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return (
    t.slug && (l.path = "/" + t.slug + l.path),
    s && l.path && (l.path = bS(l.path)),
    l
  );
}
function _F(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n;
}
var IF = { global: void 0, routes: {} },
  SS = S.createContext(IF);
function p6({ children: e, value: t }) {
  return k(SS.Provider, { value: t, children: e });
}
function FF() {
  return S.useContext(SS);
}
var Fp = 10,
  MF = 1e4;
function LF(e) {
  let t = Fp,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < MF; ) ((n = e.next(t)), r.push(n.value), (t += Fp));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(",")})`, duration: t - Fp }
  );
}
var Cr = (e) => `--view-transition-${e}`;
function Zp(e) {
  return [parseFloat(e), e.endsWith("px") ? "px" : "%"];
}
function kS(e) {
  let { innerWidth: t, innerHeight: n } = M,
    [r, i] = Zp(e.x),
    [o, s] = Zp(e.y);
  return {
    x: i === "px" ? r : t * (r / 100),
    y: s === "px" ? o : n * (o / 100),
  };
}
var OF = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === "exit" &&
          e.angularDirection === "clockwise" &&
          t === "start") ||
          (n === "exit" &&
            e.angularDirection === "counter-clockwise" &&
            t === "end") ||
          (n === "enter" &&
            e.angularDirection === "counter-clockwise" &&
            t === "start") ||
          (n === "enter" &&
            e.angularDirection === "clockwise" &&
            t === "end")) &&
          (r = (e.sweepAngle / 360) * 100),
        `${Cr("conic-offset")}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${Cr("conic-offset")})`,
        r =
          (t === "exit" && e.angularDirection === "clockwise") ||
          (t === "enter" && e.angularDirection === "counter-clockwise"),
        i = r ? "transparent" : "black",
        o = r ? "black" : "transparent",
        s = "conic-gradient(from ";
      return (
        (s += `${e.angle}deg at ${e.x} ${e.y}, `),
        (s += `${i} 0%, ${i} ${n}, `),
        (s += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${s}; -webkit-mask-image: ${s};`
      );
    },
    makePropertyRules: () => `
        @property ${Cr("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  DF = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = kS(e);
      return t === "start"
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(Math.max(n, M.innerWidth - n), Math.max(r, M.innerHeight - r))}px at ${n}px ${r}px);`;
    },
  },
  AF = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = kS(e),
        i = M.innerHeight - r,
        o = M.innerWidth - n;
      return t === "start"
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : "clip-path: inset(0 round 0);";
    },
  },
  VF = {
    makeKeyframe: (e, t, n) => {
      let [, r] = Zp(e.width),
        i = `0${r}`;
      return (
        ((t === "start" && n === "exit") || (t === "end" && n === "enter")) &&
          (i = e.width),
        `${Cr("blinds-width")}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${Cr("blinds-width")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "repeating-linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${Cr("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  BF = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === "start" && n === "exit") || (t === "end" && n === "enter")
          ? 1
          : 0;
      return `${Cr("wipe-offset")}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${Cr("wipe-offset")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${Cr("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  $F = { circle: DF, conic: OF, inset: AF, blinds: VF, wipe: BF },
  zF = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function $1(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) === null || i === void 0
          ? void 0
          : i.call(r, e.mask, t, n)) || ""),
    o
  );
}
function NF(e) {
  return e ? $F[e] : void 0;
}
function z1(e, { transition: t, ...n }) {
  var r;
  let i = "view-transition-" + e,
    o = { duration: "0s", easing: "linear" };
  if (t.type === "tween")
    ((o.duration = t.duration + "s"),
      (o.easing = `cubic-bezier(${t.ease.join(",")})`));
  else if (t.type === "spring") {
    let { easing: c, duration: u } = LF(
      Cs({
        keyframes: [0, 1],
        stiffness: t.stiffness,
        damping: t.damping,
        mass: t.mass,
        restDelta: 0.001,
        restSpeed: 1e-4,
      }),
    );
    ((o.duration = u + "ms"), (o.easing = c));
  }
  let s = NF((r = n?.mask) === null || r === void 0 ? void 0 : r.type),
    a = $1(n, "start", e, s),
    l = $1({ ...zF, mask: n.mask }, "end", e, s);
  return (
    e === "exit" && ([a, l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
  );
}
var CS = "view-transition-styles",
  HF = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function jF({ exit: e = HF, enter: t }) {
  let n = document.createElement("style");
  n.id = CS;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += z1("exit", e)),
    (r += z1("enter", t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function WF() {
  requestIdleCallback(() => {
    G.render(() => {
      performance.mark("framer-vt-remove");
      let e = document.getElementById(CS);
      e && document.head.removeChild(e);
    });
  });
}
var N1 = () => {};
function UF() {
  return !!document.startViewTransition;
}
function XF(e) {
  return new Promise((t) => {
    G.render(() => {
      (performance.mark("framer-vt-style"), jF(e), t());
    });
  });
}
async function H1(e, t, n) {
  if (!UF()) {
    e();
    return;
  }
  if ((await XF(t), n?.aborted)) return;
  performance.mark("framer-vt");
  let r = document.startViewTransition(async () => {
    (performance.mark("framer-vt-freeze"),
      !n?.aborted &&
        (n?.addEventListener("abort", () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark("framer-vt-unfreeze");
      })
      .catch(N1),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark("framer-vt-finished"), WF());
      })
      .catch(N1),
    r
  );
}
function TS() {
  let e = FF(),
    t = A(void 0);
  return (
    N(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    oe(
      (n, r, i, o, s) => {
        let a = _F(n, r, e);
        if (a) {
          let l = new Promise((f) => {
              t.current = f;
            }),
            c = async () => {
              (i(), await l);
            },
            u = async () => (
              await Go({ priority: "user-blocking", signal: s }, !1).catch(gu),
              H1(c, a, s)
            );
          return o ? u() : H1(c, a);
        } else return i();
      },
      [e],
    )
  );
}
function ES(e, t = !1) {
  let n = `start-${e}`,
    r = `end-${e}`,
    i = A(void 0);
  return (
    dm(
      () => {
        i.current && (i.current(), (i.current = void 0));
      },
      void 0,
      { priority: "user-blocking" },
      t,
    ),
    oe(() => {
      let o = new Promise((s) => {
        i.current = s;
      });
      return (
        performance.mark(n),
        o
          .finally(() => {
            (performance.mark(r), performance.measure(e, n, r));
          })
          .catch((s) => {
            console.error(s);
          })
      );
    }, [e, n, r])
  );
}
async function j1(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a,
  },
  l = !1,
  c = !1,
) {
  let { path: u } = t;
  if (u)
    try {
      let f = _u(t, {
          currentRoutePath: n,
          currentPathVariables: r,
          hash: i,
          pathVariables: o,
          preserveQueryParams: a,
        }),
        d = _S({ routeId: e, hash: i, pathVariables: o, localeId: s }, f, l, c);
      l || (await d);
    } catch {}
}
function RS(e) {
  let t = "routeId";
  return Ta(e) && $i(e[t]);
}
function PS(e, t, n = !1) {
  (performance.mark("framer-history-replace"),
    (n ? M.history.__proto__.replaceState : M.history.replaceState).call(
      M.history,
      e,
      "",
      t,
    ));
}
async function _S(e, t, n = !1, r = !1) {
  if (
    (n && (await Go({ priority: "user-blocking" })),
    performance.mark("framer-history-push"),
    !r)
  ) {
    M.history.pushState(e, "", t);
    return;
  }
  let i = !1,
    o = () => {
      i = !0;
    };
  (M.addEventListener("popstate", o, { once: !0 }),
    M.history.__proto__.pushState.call(M.history, e, "", t),
    queueMicrotask(() => {
      i ||
        (M.removeEventListener("popstate", o), M.history.replaceState(e, ""));
    }));
}
function YF({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  ht(() => {
    e ||
      (performance.mark("framer-history-set-initial-state"),
      PS({ routeId: t, pathVariables: n, localeId: r }, void 0, !0));
  }, []);
}
function GF(e, t) {
  let n = TS(),
    r = ES("route-change-popstate"),
    i = A(void 0),
    o = oe(
      async ({ state: a }) => {
        var l, c, u, f, d, h;
        if (
          (!((l = M.navigation) === null || l === void 0) &&
            l.transition &&
            ((u =
              (c = M.navigation) === null || c === void 0
                ? void 0
                : c.transition) === null || u === void 0
              ? void 0
              : u.navigationType) !== "traverse") ||
          !Ta(a)
        )
          return;
        let { routeId: y, hash: g, pathVariables: b, localeId: p } = a;
        if (!$i(y)) return;
        r();
        let m = () => {
            t(
              y,
              $i(p) ? p : void 0,
              $i(g) ? g : void 0,
              Ta(b) ? b : void 0,
              !1,
              !0,
            );
          },
          v = await n(e.current, y, m, !1);
        v
          ? v.updateCallbackDone
              .then(
                (f = i.current) === null || f === void 0 ? void 0 : f.resolve,
              )
              .catch(
                (d = i.current) === null || d === void 0 ? void 0 : d.reject,
              )
          : (h = i.current) === null || h === void 0 || h.resolve();
      },
      [e, r, t, n],
    ),
    s = oe((a) => {
      a.navigationType === "traverse" &&
        a.intercept({
          async handler() {
            await new Promise((l, c) => {
              i.current = { resolve: l, reject: c };
            });
          },
          scroll: "after-transition",
        });
    }, []);
  N(() => {
    var a;
    return (
      M.addEventListener("popstate", o),
      (a = M.navigation) === null ||
        a === void 0 ||
        a.addEventListener("navigate", s),
      () => {
        var l;
        (M.removeEventListener("popstate", o),
          (l = M.navigation) === null ||
            l === void 0 ||
            l.removeEventListener("navigate", s));
      }
    );
  }, [o, s]);
}
function qF(e, t, n) {
  let r = Pu(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Ni, (o, s) => {
    var a;
    return String((a = i[s]) !== null && a !== void 0 ? a : o);
  });
}
function _u(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
  },
) {
  var l;
  let c = t ?? "/";
  n && (c = c.replace(Ni, (y, g) => String(n[g] || y)));
  let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
  i && (f = f.replace(Ni, (y, g) => String(i[g] || y)));
  let d = qF(r, e, o),
    h = c === f && d;
  return (
    s && (f = yS(c, f)),
    (a || h) && (f = bS(f)),
    d && (f = `${f}#${d}`),
    f
  );
}
async function KF(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ""}${gS(e.path, t)}`;
  return (await fetch(i, { method: "HEAD", redirect: "manual" })).type ===
    "opaqueredirect"
    ? ((M.location.href = M.location.origin + i), !0)
    : !1;
}
async function QF(e) {
  let t = await PF(e);
  if (t) {
    try {
      localStorage.setItem("preferredLocale", e.nextLocale.code);
    } catch {}
    try {
      if (!$i(t.path)) throw new Error("Expected result.path to be a string");
      if (
        t.isMissingInLocale &&
        (await KF(e.route, t.pathVariables, e.nextLocale))
      )
        return;
    } catch {}
    return t;
  }
}
function ZF(e, t) {
  try {
    let n = M.history.state;
    if (!RS(n)) return;
    let r = n?.paginationInfo === void 0 || n.paginationInfo[e] === void 0,
      i = { ...n.paginationInfo, [e]: t };
    PS({ ...n, paginationInfo: i }, void 0, r);
  } catch {}
}
function JF() {
  let e = A(Promise.resolve()),
    t = A(),
    n = oe((r) => {
      if (r.navigationType === "traverse") return;
      let i = t.current;
      (i?.signal.addEventListener("abort", () => {
        i.abort("user aborted");
      }),
        r.intercept({ handler: () => e.current }));
    }, []);
  return oe(
    (r, i, o) => {
      if (!M.navigation) {
        i();
        return;
      }
      ((e.current = r),
        (t.current = o),
        M.navigation.addEventListener("navigate", n),
        i(!0),
        r.catch(gu).finally(() => {
          M.navigation.removeEventListener("navigate", n);
        }));
    },
    [n],
  );
}
function wr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (r) {
    console.warn(`Could not measure ${e}`, r);
  }
}
var Fn = !1;
function g6() {
  ((Fn = !0), performance.mark("framer-hydration-start"));
}
var W1 = !1,
  U1 = !1,
  X1 = !1;
function eM() {
  let e = "framer-hydration-router";
  (dt(() => {
    W1 || !Fn || ((W1 = !0), performance.mark(`${e}-insertion-effect`));
  }, []),
    ht(() => {
      U1 || !Fn || ((U1 = !0), performance.mark(`${e}-layout-effect`));
    }, []),
    N(() => {
      X1 || !Fn || ((X1 = !0), performance.mark(`${e}-effect`));
    }, []));
}
var Y1 = !1,
  G1 = !1,
  q1 = !1;
function tM() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}render-end`;
  return (
    dt(() => {
      Y1 ||
        !Fn ||
        ((Y1 = !0),
        performance.mark(i),
        wr(`${e}render`, `${e}start`, i),
        performance.mark(`${e}insertion-effects-start`));
    }, []),
    ht(() => {
      G1 ||
        !Fn ||
        ((G1 = !0),
        performance.mark(`${e}layout-effects-start`),
        requestAnimationFrame(() => {
          var o, s, a;
          (performance.mark(r),
            wr(
              `${e}uho`,
              (s =
                (o = performance.getEntriesByName(n)[0]) === null ||
                o === void 0
                  ? void 0
                  : o.name) !== null && s !== void 0
                ? s
                : (a = performance.getEntriesByName(t)[0]) === null ||
                    a === void 0
                  ? void 0
                  : a.name,
              r,
            ));
        }));
    }, []),
    N(() => {
      var o;
      if (q1 || !Fn) return;
      q1 = !0;
      let s = `${e}effects-start`;
      (performance.mark(s),
        ((o = performance.getEntriesByName(r)[0]) === null || o === void 0
          ? void 0
          : o.name) ||
          (wr(`${e}commit`, t, s), performance.mark(`${e}effects-sync`)));
    }, []),
    null
  );
}
var K1 = !1,
  Q1 = !1,
  Z1 = !1,
  J1 = !1;
function nM() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}start`,
    o = `${e}insertion-effects-end`,
    s = `${e}first-paint`,
    a = `${e}browser-raf-end`;
  return (
    dt(() => {
      K1 ||
        !Fn ||
        ((K1 = !0),
        performance.mark(o),
        wr(`${e}insertion-effects`, `${e}insertion-effects-start`, o));
    }, []),
    ht(() => {
      Q1 ||
        !Fn ||
        ((Q1 = !0),
        performance.mark(t),
        wr(`${e}layout-effects`, `${e}layout-effects-start`, t),
        requestAnimationFrame(() => {
          (performance.mark(a), wr(`${e}raf`, r, a));
        }));
    }, []),
    N(() => {
      var l, c, u;
      Z1 ||
        !Fn ||
        ((Z1 = !0),
        performance.mark(n),
        wr(
          `${e}effects`,
          (c =
            (l = performance.getEntriesByName(s)[0]) === null || l === void 0
              ? void 0
              : l.name) !== null && c !== void 0
            ? c
            : (u = performance.getEntriesByName(`${e}effects-start`)[0]) ===
                  null || u === void 0
              ? void 0
              : u.name,
          n,
        ));
    }, []),
    dm(
      () => {
        J1 ||
          !Fn ||
          ((J1 = !0),
          performance.mark(s),
          wr(`${e}time-to-first-paint`, i, s),
          wr(`${e}browser-render`, a, s));
      },
      [],
      { priority: "user-blocking" },
    ),
    null
  );
}
function rM() {
  return (tM(), null);
}
function iM() {
  return (nM(), null);
}
var ew = { Start: rM, End: iM },
  ka = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
  ],
  IS = (e) => {
    var t, n;
    !(
      (n = (t = e.target) === null || t === void 0 ? void 0 : t.closest) ===
        null || n === void 0
    ) &&
      n.call(t, "#main") &&
      (e.stopPropagation(),
      performance.mark("framer-react-event-handling-prevented"));
  },
  FS = !1;
function y6() {
  if (!ka) return;
  ((FS = !0), performance.mark("framer-react-event-handling-start"));
  let e = { capture: !0 };
  ka.forEach((t) => document.body.addEventListener(t, IS, e));
}
function oM() {
  return (
    dm(
      () => {
        if (!FS || !ka) return;
        let e = { capture: !0 };
        (ka.forEach((t) => document.body.removeEventListener(t, IS, e)),
          (ka = void 0),
          performance.mark("framer-react-event-handling-end"));
      },
      [],
      { priority: "user-blocking" },
    ),
    null
  );
}
var hm = !1;
function x6() {
  hm = !0;
}
function sM() {
  hm = !1;
}
function aM() {
  let e = A(typeof M > "u" || hm);
  return (
    N(() => {
      e.current = !1;
    }, []),
    e
  );
}
function lM(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
function MS(e) {
  return S.useCallback((t) => e[t], [e]);
}
var pm = (() => S.createContext({}))();
function cM({ api: e, children: t }) {
  return k(pm.Provider, { value: e, children: t });
}
function Xi() {
  return S.useContext(pm);
}
function uM({ routes: e, children: t }) {
  let n = MS(e);
  return k(pm.Provider, { value: { getRoute: n }, children: t });
}
var fM = class extends Ee {
    constructor() {
      (super(...arguments), (this.state = { error: void 0 }));
    }
    static getDerivedStateFromError(e) {
      return (
        e instanceof ou ||
          console.error("Derived error in SuspenseErrorBoundary", e),
        { error: e }
      );
    }
    componentDidCatch(e, t) {
      var n;
      if (e instanceof ou) return;
      let r = t?.componentStack;
      if (
        (console.error("Caught error in SuspenseErrorBoundary", e, r),
        typeof M < "u")
      ) {
        let i =
          e instanceof Error && typeof e.stack == "string" ? e.stack : null;
        (n = M.__framer_events) === null ||
          n === void 0 ||
          n.push([
            "published_site_load_recoverable_error",
            { message: String(e), stack: i, componentStack: i ? void 0 : r },
          ]);
      }
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (this.state.error instanceof ou) throw this.state.error.cause;
      return k(Qa, { children: this.props.fallbackChildren });
    }
  },
  dM = (() => (typeof M < "u" ? new Promise(() => {}) : null))();
function hM() {
  if (typeof M > "u") return null;
  throw dM;
}
function LS({ children: e }) {
  return k(fM, {
    fallbackChildren: e,
    children: k(Qa, { fallback: k(hM, {}), children: e }),
  });
}
var tw = "default";
function pM() {
  let [e, t] = S.useState(0);
  return [e, S.useCallback(() => t((n) => n + 1), [])];
}
var mM = async () => {},
  vM = { activeLocale: null, locales: [], setLocale: mM },
  OS = S.createContext(vM);
function Iu() {
  return S.useContext(OS);
}
function nw(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    xM(r, t);
    return;
  }
  n || M.scrollTo(0, 0);
}
function gM(e) {
  let t = A([]);
  return (
    ht(() => {
      var n;
      !((n = t.current) === null || n === void 0) &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    oe((n) => {
      t.current.push(n);
    }, [])
  );
}
function yM(e) {
  let t = JF(),
    n = ES("route-change", !0),
    r = A(void 0);
  return oe(
    async (i, o, s = !0) => {
      var a;
      if ((sM(), !e))
        return (
          await o?.(),
          i(),
          n(),
          new Promise((h) => {
            h();
          })
        );
      (a = r.current) === null || a === void 0 || a.abort();
      let l = s ? new AbortController() : void 0;
      r.current = l;
      let c = l?.signal,
        u = n();
      if (!o) return ((r.current = void 0), i(c), u);
      (i(c),
        await Go({ priority: "user-visible", signal: c }).catch(gu),
        await Go({ priority: "user-visible", signal: c }).catch(gu));
      let f,
        d = new Promise((h, y) => {
          ((f = h), c?.aborted ? y() : c?.addEventListener("abort", y));
        });
      return (
        t(d, o, l),
        u.then(() => {
          f();
        })
      );
    },
    [e, n, t],
  );
}
function bM({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: s,
  initialLocaleId: a,
  locales: l = [],
  preserveQueryParams: c = !1,
  enableAsyncURLUpdates: u = !1,
}) {
  (eM(),
    YF({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: a,
    }));
  let f = TS(),
    [d, h] = pM(),
    y = gM(d),
    g = yM(u),
    b = A(r),
    p = A(n),
    m = A(a),
    v = m.current,
    x = le(() => {
      var U;
      return (U = l.find(({ id: ee }) => (v ? ee === v : ee === tw))) !==
        null && U !== void 0
        ? U
        : null;
    }, [v, l]),
    C = le(
      () => ({
        activeLocale: x,
        locales: l,
        setLocale: async (U) => {
          let ee;
          $i(U) ? (ee = U) : Ta(U) && (ee = U.id);
          let te = l.find(({ id: re }) => re === tw),
            Y = l.find(({ id: re }) => re === ee);
          if (!Y) return;
          let ne = b.current,
            ge = s[ne];
          if (ge)
            try {
              let re = await QF({
                currentLocale: x,
                nextLocale: Y,
                route: ge,
                routeId: ne,
                defaultLocale: te,
                pathVariables: p.current,
                collectionUtils: o,
                preserveQueryParams: c,
              });
              if (!re) return;
              let de = p.current,
                ie = RS(M.history.state)
                  ? M.history.state.paginationInfo
                  : void 0,
                ut = re.path;
              ((p.current = re.pathVariables),
                (m.current = Y.id),
                g(
                  () => {
                    f(ne, ne, () => qi(h), u);
                  },
                  async (Rt = !1) => {
                    if (ut)
                      return _S(
                        {
                          routeId: ne,
                          pathVariables: de,
                          localeId: Y.id,
                          paginationInfo: ie,
                        },
                        ut,
                        !1,
                        Rt,
                      );
                  },
                  !1,
                ));
            } catch {}
        },
      }),
      [x, o, u, h, l, c, s, g, f],
    ),
    w = oe(
      (U, ee, te, Y, ne = !1, ge = !1, re) => {
        let de = b.current;
        if (
          ((b.current = U),
          (p.current = Y),
          (m.current = ee),
          y(() => {
            nw(te, ne, ge);
          }),
          ge)
        ) {
          qi(h);
          return;
        }
        g((ie) => {
          f(de, U, () => qi(h), u, ie);
        }, re);
      },
      [u, h, y, g, f],
    );
  GF(b, w);
  let E = oe(
      async (U, ee, te, Y) => {
        var ne, ge;
        let re = s[U];
        if (te) {
          let be = new Set(),
            Xt = (ne = re?.path) !== null && ne !== void 0 ? ne : "/";
          for (let wn of Xt.matchAll(Ni)) {
            let Sn = wn[1];
            if (Sn === void 0)
              throw new Error(
                "A matching path variable should not be undefined",
              );
            be.add(Sn);
          }
          te = Object.fromEntries(
            Object.entries(te).filter(([wn]) => be.has(wn)),
          );
        }
        let de = Pu(re, ee),
          ie = p.current,
          ut = m.current;
        if (
          lM(
            { routeId: b.current, pathVariables: ie },
            { routeId: U, pathVariables: te },
          )
        ) {
          nw(de, Y, !1);
          let be = s[U];
          if (
            ((ge = M.history.state) === null || ge === void 0
              ? void 0
              : ge.hash) === ee ||
            t ||
            !be
          )
            return;
          let Xt = j1(
            U,
            be,
            {
              currentRoutePath: be.path,
              currentPathVariables: ie,
              pathVariables: te,
              hash: ee,
              localeId: ut,
              preserveQueryParams: c,
            },
            u,
          );
          return u ? void 0 : await Xt;
        }
        if (!re) return;
        let Te = s[b.current];
        w(
          U,
          ut,
          de,
          te,
          Y,
          !1,
          t
            ? void 0
            : async (be = !1) =>
                j1(
                  U,
                  re,
                  {
                    currentRoutePath: Te?.path,
                    currentPathVariables: ie,
                    hash: ee,
                    pathVariables: te,
                    localeId: ut,
                    preserveQueryParams: c,
                  },
                  !1,
                  be,
                ),
        );
      },
      [s, w, t, c, u],
    ),
    T = MS(s),
    F = b.current,
    _ = p.current,
    $ = le(
      () => ({
        navigate: E,
        getRoute: T,
        currentRouteId: F,
        currentPathVariables: _,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c,
      }),
      [E, T, F, _, s, o, c],
    ),
    D = s[b.current];
  if (!D) throw new Error(`Router cannot find route for ${b.current}`);
  let q = !x || !D.includedLocales || D.includedLocales.includes(x.id),
    W = D.path && _ ? gS(D.path, _) : D.path,
    H = String(v) + W;
  return k(cM, {
    api: $,
    children: k(OS.Provider, {
      value: C,
      children: se(LS, {
        children: [
          k(bF, {
            notFoundPage: i,
            defaultPageStyle: e,
            forceUpdateKey: d,
            children: se(
              Rr,
              {
                children: [k(ew.Start, {}), q ? Qp(D.page, e) : i && Qp(i, e)],
              },
              H,
            ),
          }),
          k(oM, {}),
          k(ew.End, {}),
        ],
      }),
    }),
  });
}
function xM(e, t) {
  let n = t
    ? { behavior: "smooth", block: "start", inline: "nearest" }
    : void 0;
  e.scrollIntoView(n);
}
var Kc, Mp, rw;
function wM(e) {
  if (rw !== e) {
    Kc = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (Kc[n] = { path: n, depth: SM(n), routeId: t });
    ((Mp = Object.values(Kc)),
      Mp.sort(({ depth: t }, { depth: n }) => n - t),
      (rw = e));
  }
  return [Kc, Mp];
}
function DS(e, t, n = !0, r = []) {
  let [i, o] = wM(e),
    s,
    a,
    l = t;
  if (r.length > 0) {
    let d = l.split("/").find(Boolean);
    if (
      (d &&
        ((s = r.find(({ slug: h }) => h === d)),
        s && ((a = s.id), (l = l.substring(s.slug.length + 1)))),
      !a)
    ) {
      let h = r.find(({ slug: y }) => y === "");
      h && (a = h.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = iw(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: a,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: h } of o) {
    let y = iw(l, d);
    if (y.isMatch)
      return { routeId: h, localeId: a, pathVariables: y.pathVariables };
  }
  if (!n) throw new Error("No exact match found for path");
  let u = i["/"];
  if (u) return { routeId: u.routeId, localeId: a };
  let f = Object.keys(e)[0];
  if (!f) throw new Error("Router should not have undefined routes");
  return { routeId: f, localeId: a };
}
function SM(e) {
  let t = e.replace(/^\/|\/$/gu, "");
  return t === "" ? 0 : t.split("/").length;
}
function iw(e, t) {
  let n = [],
    i = kM(t).replace(Ni, (c, u) => (n.push(u), "([^/]+)")),
    o = new RegExp(i + "$"),
    s = e.match(o);
  if (!s) return { isMatch: !1 };
  if (s.length === 1) return { isMatch: !0 };
  let a = {},
    l = s.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = a[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error("Path variable values cannot be undefined");
    a[u] = f;
  }
  return { isMatch: !0, pathVariables: a };
}
function kM(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
var CM = "page";
function ow(e) {
  return Ta(e) && CM in e && e.page !== void 0;
}
var TM = (() => S.createContext(void 0))();
function Jo() {
  var e;
  let t = Xi(),
    n = B(TM),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
function L6() {
  var e;
  return (e = Jo()) === null || e === void 0 ? void 0 : e.pathVariables;
}
function EM(e) {
  var t;
  let n = Xi();
  if (e)
    return (t = n.getRoute) === null || t === void 0 ? void 0 : t.call(n, e);
}
var mm = (() => typeof M < "u" && !TF(Ke.userAgent))();
function RM(e, t = !0) {
  let { getRoute: n } = Xi();
  N(() => {
    if (!(!n || !t || !mm)) for (let r of e) AS(n(r));
  }, [e, n, t]);
}
async function AS(e) {
  if (!mm || !e) return;
  let t = e.page;
  if (!(!t || !xS(t))) {
    await wS();
    try {
      await t.preload();
    } catch {}
  }
}
function V6(e, t) {
  var n;
  let r = Jo(),
    i = (n = EM(t)) !== null && n !== void 0 ? n : r;
  return S.useMemo(() => (i ? Pu(i, e) : e), [e, i]);
}
var sw = new Set();
function Ea(e, ...t) {
  sw.has(e) || (sw.add(e), console.warn(e, ...t));
}
function PM(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  Ea(i);
}
var VS = class {
    constructor() {
      (R(this, "observers", new Set()), R(this, "transactions", {}));
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        ((n.value = e.value), (this.transactions[t] = n));
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return (delete this.transactions[e], this.callObservers(t, e));
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  nt = (() => {
    function e(t) {
      return (
        PM(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)",
        ),
        Mn(t) ? t : new IM(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((s, a) => {
          (s.set(a, n), r.add(s));
        }, n);
        let o = [];
        (r.forEach((s) => {
          o.push(...s.finishTransaction(n));
        }),
          o.forEach((s) => {
            s(n);
          }));
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : Mn(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          Mn(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  aw = "onUpdate",
  lw = "finishTransaction";
function Mn(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    aw in e &&
    e[aw] instanceof Function &&
    lw in e &&
    e[lw] instanceof Function
  );
}
function _M(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        s = nt(i);
      return (a) => {
        let l = t.interpolate(i, o)(a);
        return (s.set(l), s);
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var IM = class {
  constructor(e) {
    ((this.value = e), R(this, "observers", new VS()));
  }
  static interpolationFor(e, t) {
    if (Mn(e)) return _M(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    (Mn(e) && (e = e.get()), (this.value = e));
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function Qc(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function cw(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function sn(e, t) {
  return { x: e, y: t };
}
((e) => {
  ((e.add = (...i) =>
    i.reduce((o, s) => ({ x: o.x + s.x, y: o.y + s.y }), { x: 0, y: 0 })),
    (e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y })),
    (e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o })),
    (e.divide = (i, o) => ({ x: i.x / o, y: i.y / o })),
    (e.absolute = (i) => ({ x: Math.abs(i.x), y: Math.abs(i.y) })),
    (e.reverse = (i) => ({ x: i.x * -1, y: i.y * -1 })),
    (e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({
      x: cw(i.x, o.x),
      y: cw(i.y, o.y),
    })),
    (e.distance = (i, o) => {
      let s = Math.abs(i.x - o.x),
        a = Math.abs(i.y - o.y);
      return Math.sqrt(s * s + a * a);
    }),
    (e.angle = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI - 90),
    (e.angleFromX = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI),
    (e.isEqual = (i, o) => i.x === o.x && i.y === o.y),
    (e.rotationNormalizer = () => {
      let i;
      return (o) => {
        typeof i != "number" && (i = o);
        let s = i - o,
          a = Math.abs(s) + 180,
          l = Math.floor(a / 360);
        return (
          s < 180 && (o -= l * 360),
          s > 180 && (o += l * 360),
          (i = o),
          o
        );
      };
    }));
  function t(i, o) {
    return { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 };
  }
  e.center = t;
  function n(i) {
    let o = 0,
      s = 0;
    i.forEach((c) => {
      ((o += c.x), (s += c.y));
    });
    let a = o / i.length,
      l = s / i.length;
    return { x: a, y: l };
  }
  e.centroid = n;
  function r(i) {
    let o = e.centroid(i),
      s = new Map();
    for (let a = 0; a < i.length; a++) {
      let l = i[a];
      s.set(l, Math.atan2(l.x - o.x, l.y - o.y));
    }
    return i.sort((a, l) => s.get(a) - s.get(l));
  }
  e.sortClockwise = r;
})(sn || (sn = {}));
var Jp = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function ri(e, t, n, r = !1) {
  let [i, o] = t,
    [s, a] = n,
    l = o - i;
  if (l === 0) return (a + s) / 2;
  let c = a - s;
  if (c === 0) return s;
  let u = s + ((e - i) / l) * c;
  if (r === !0)
    if (s < a) {
      if (u < s) return s;
      if (u > a) return a;
    } else {
      if (u > s) return s;
      if (u < a) return a;
    }
  return u;
}
function Xo(e) {
  return !isNaN(e) && isFinite(e);
}
function ii(e) {
  let t = em(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function em(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var FM = (() => fF().Hsluv)(),
  jt = new FM();
function MM(e, t, n) {
  return (
    (jt.rgb_r = e / 255),
    (jt.rgb_g = t / 255),
    (jt.rgb_b = n / 255),
    jt.rgbToHsluv(),
    { h: jt.hsluv_h, s: jt.hsluv_s, l: jt.hsluv_l }
  );
}
function LM(e, t, n, r = 1) {
  return (
    (jt.hsluv_h = e),
    (jt.hsluv_s = t),
    (jt.hsluv_l = n),
    jt.hsluvToRgb(),
    { r: jt.rgb_r * 255, g: jt.rgb_g * 255, b: jt.rgb_b * 255, a: r }
  );
}
function Zc(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    s = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + i + ", " + o + "%, " + s + "%)"
    : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")";
}
function OM(e, t, n) {
  return {
    r: Xo(e) ? Dt(e, 255) * 255 : 0,
    g: Xo(t) ? Dt(t, 255) * 255 : 0,
    b: Xo(n) ? Dt(n, 255) * 255 : 0,
  };
}
function uw(e, t, n, r) {
  let i = [
    Op(Math.round(e).toString(16)),
    Op(Math.round(t).toString(16)),
    Op(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function vm(e, t, n) {
  let r,
    i,
    o = Dt(e, 255),
    s = Dt(t, 255),
    a = Dt(n, 255),
    l = Math.max(o, s, a),
    c = Math.min(o, s, a),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (s - a) / f + (s < a ? 6 : 0);
        break;
      case s:
        u = (a - o) / f + 2;
        break;
      case a:
        u = (o - s) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Lp(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function DM(e, t, n) {
  let r, i, o;
  if (
    ((e = Dt(e, 360)), (t = Dt(t * 100, 100)), (n = Dt(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - s;
    ((r = Lp(a, s, e + 1 / 3)), (i = Lp(a, s, e)), (o = Lp(a, s, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function fw(e, t, n) {
  ((e = Dt(e, 255)), (t = Dt(t, 255)), (n = Dt(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    s,
    a = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / o + 2;
        break;
      case n:
        s = (e - t) / o + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: l };
}
function AM(e, t, n) {
  ((e = Dt(e, 360) * 6), (t = Dt(t * 100, 100)), (n = Dt(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    s = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, s, o, o, a, n][l],
    u = [a, n, n, s, o, o][l],
    f = [o, o, a, n, n, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function Dt(e, t) {
  let n, r;
  if (
    (typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")
  ) {
    VM(e) && (e = "100%");
    let i = BM(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function VM(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function BM(e) {
  return typeof e == "string" && e.includes("%");
}
function Op(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Zn = (() => {
  let e = "[-\\+]?\\d+%?",
    n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function gm(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = Jp[n];
  if ((r && (n = r), n === "transparent"))
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let i;
  return (i = Zn.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (i = Zn.rgba.exec(n))
      ? {
          r: parseInt(i[1] ?? ""),
          g: parseInt(i[2] ?? ""),
          b: parseInt(i[3] ?? ""),
          a: parseFloat(i[4] ?? ""),
          format: "rgb",
        }
      : (i = Zn.hsl.exec(n))
        ? {
            h: parseInt(i[1] ?? ""),
            s: ii(i[2] ?? ""),
            l: ii(i[3] ?? ""),
            a: 1,
            format: "hsl",
          }
        : (i = Zn.hsla.exec(n))
          ? {
              h: parseInt(i[1] ?? ""),
              s: ii(i[2] ?? ""),
              l: ii(i[3] ?? ""),
              a: parseFloat(i[4] ?? ""),
              format: "hsl",
            }
          : (i = Zn.hsv.exec(n))
            ? {
                h: parseInt(i[1] ?? ""),
                s: ii(i[2] ?? ""),
                v: ii(i[3] ?? ""),
                a: 1,
                format: "hsv",
              }
            : (i = Zn.hsva.exec(n))
              ? {
                  h: parseInt(i[1] ?? ""),
                  s: ii(i[2] ?? ""),
                  v: ii(i[3] ?? ""),
                  a: parseFloat(i[4] ?? ""),
                  format: "hsv",
                }
              : (i = Zn.hex8.exec(n))
                ? {
                    r: on(i[1] ?? ""),
                    g: on(i[2] ?? ""),
                    b: on(i[3] ?? ""),
                    a: dw(i[4] ?? ""),
                    format: r ? "name" : "hex",
                  }
                : (i = Zn.hex6.exec(n))
                  ? {
                      r: on(i[1] ?? ""),
                      g: on(i[2] ?? ""),
                      b: on(i[3] ?? ""),
                      a: 1,
                      format: r ? "name" : "hex",
                    }
                  : (i = Zn.hex4.exec(n))
                    ? {
                        r: on(`${i[1]}${i[1]}`),
                        g: on(`${i[2]}${i[2]}`),
                        b: on(`${i[3]}${i[3]}`),
                        a: dw(i[4] + "" + i[4]),
                        format: r ? "name" : "hex",
                      }
                    : (i = Zn.hex3.exec(n))
                      ? {
                          r: on(`${i[1]}${i[1]}`),
                          g: on(`${i[2]}${i[2]}`),
                          b: on(`${i[3]}${i[3]}`),
                          a: 1,
                          format: r ? "name" : "hex",
                        }
                      : !1;
}
function on(e) {
  return parseInt(e, 16);
}
function dw(e) {
  return on(e) / 255;
}
var hw = new Map(),
  X = (() => {
    function e(o, s, a, l) {
      if (typeof o == "string") {
        let u = hw.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e("black"), isValid: !1 } : (hw.set(o, u), u))
        );
      }
      let c = t(o, s, a, l);
      return c !== void 0 ? c : { ...e("black"), isValid: !1 };
    }
    function t(o, s, a, l) {
      if (o === "") return;
      let c = $M(o, s, a, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    ((e.inspect = (o, s) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
          ? `<${o.constructor.name} "${s}">`
          : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == "string" ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == "string" ? gm(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != "string" &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, s = !1) => uw(o.r, o.g, o.b, s)),
      (e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...MM(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let s = e.toHsl(o),
          a = Math.round(s.h),
          l = Math.round(s.s * 100),
          c = Math.round(s.l * 100);
        return o.a === 1
          ? "hsl(" + a + ", " + l + "%, " + c + "%)"
          : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let s = fw(o.r, o.g, o.b);
        return { h: s.h * 360, s: s.s, v: s.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let s = fw(o.r, o.g, o.b),
          a = Math.round(s.h * 360),
          l = Math.round(s.s * 100),
          c = Math.round(s.v * 100);
        return o.a === 1
          ? "hsv(" + a + ", " + l + "%, " + c + "%)"
          : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = uw(o.r, o.g, o.b, !0);
        for (let a of Object.keys(Jp)) if (Jp[a] === s) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(s / 100))),
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(s / 100))),
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(s / 100))),
          )),
          e(a)
        );
      }),
      (e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return ((a.l += s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a));
      }),
      (e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return ((a.l -= s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a));
      }),
      (e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return ((a.s += s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a));
      }),
      (e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return ((a.s -= s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a));
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return ((a.h += s), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a));
      }),
      (e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, s = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * s })),
      (e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
          throw new TypeError(
            "Both arguments for Color.interpolate must be Color objects",
          );
        return (l) => e.mixAsColor(o, s, l, !1, a);
      }),
      (e.mix = (o, s, { model: a = "rgb" } = {}) => {
        let l = typeof o == "string" ? e(o) : o,
          c = e.interpolate(l, s, a);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, s, a = 0.5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: ri(a, [0, 1], [o.r, s.r], l),
            g: ri(a, [0, 1], [o.g, s.g], l),
            b: ri(a, [0, 1], [o.b, s.b], l),
            a: ri(a, [0, 1], [o.a, s.a], l),
          });
        else {
          let f, d;
          (n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(s)))
            : ((f = e.toHusl(o)), (d = e.toHusl(s))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h));
          let h = f.h,
            y = d.h,
            g = y - h;
          g > 180 ? (g = y - 360 - h) : g < -180 && (g = y + 360 - h);
          let b = {
            h: ri(a, [0, 1], [h, h + g], l),
            s: ri(a, [0, 1], [f.s, d.s], l),
            l: ri(a, [0, 1], [f.l, d.l], l),
            a: ri(a, [0, 1], [o.a, s.a], l),
          };
          n.isHSL(c) ? (u = e(b)) : (u = e(LM(b.h, b.s, b.l, b.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function s() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, s = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, s, a) => vm(o, s, a)),
      (e.isValidColorProperty = (o, s) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" ||
            o === "fill" ||
            o === "stroke") &&
          typeof s == "string" &&
          e.isColorString(s)
        )),
      (e.difference = (o, s) => {
        let a = (o.r + s.r) / 2,
          l = o.r - s.r,
          c = o.g - s.g,
          u = o.b - s.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          h = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * h + (a * (f - h)) / 256);
      }),
      (e.equal = (o, s, a = 0.1) =>
        !(
          Math.abs(o.r - s.r) >= a ||
          Math.abs(o.g - s.g) >= a ||
          Math.abs(o.b - s.b) >= a ||
          Math.abs(o.a - s.a) * 256 >= a
        )));
    let r = lo([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let s = Math.abs(o);
      return s < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((s + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: s, g: a, b: l } = e.toRgb(o);
        return 0.2126 * i(s) + 0.7152 * i(a) + 0.0722 * i(l);
      }),
      (e.contrast = (o, s) => {
        let a = e.luminance(o),
          l = e.luminance(s);
        return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
      }),
      e
    );
  })();
function $M(e, t, n, r = 1) {
  let i;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (i = tm({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
        ? (i = zM(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") &&
          e.hasOwnProperty("g") &&
          e.hasOwnProperty("b")
            ? (i = tm(e))
            : (i = BS(e))),
    i
  );
}
function zM(e) {
  let t = gm(e);
  if (t) return t.format === "hsl" ? BS(t) : t.format === "hsv" ? NM(t) : tm(t);
}
function NM(e) {
  let t = AM(e.h, e.s, e.v);
  return {
    ...vm(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? $S(e.a) : 1,
  };
}
function tm(e) {
  let t = OM(e.r, e.g, e.b);
  return {
    ...vm(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? $S(e.a) : 1,
  };
}
function BS(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = Xo(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Xo(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = em(e.s)),
    (r = Xo(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = em(e.l)),
    (i = DM(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function $S(e) {
  return (
    (e = parseFloat(e)),
    e < 0 && (e = 0),
    (isNaN(e) || e > 1) && (e = 1),
    e
  );
}
var pw = (e) => e instanceof Ts;
var HM = (() => dF().EventEmitter)(),
  jM = class {
    constructor() {
      R(this, "_emitter", new HM());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  WM = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: "" },
    document: { cookie: "" },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {},
  },
  Ge = typeof M > "u" ? WM : M,
  UM = (e) => {
    setTimeout(e, 1 / 60);
  },
  XM = (() => Ge.requestAnimationFrame || UM)(),
  mw = (e) => XM(e),
  ya = (() => 1 / 60)(),
  YM = class extends jM {
    constructor(e = !1) {
      (super(),
        R(this, "_started", !1),
        R(this, "_frame", 0),
        R(this, "_frameTasks", []),
        R(this, "tick", () => {
          this._started &&
            (mw(this.tick),
            this.emit("update", this._frame, ya),
            this.emit("render", this._frame, ya),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start());
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      ya = e;
    }
    static get TimeStep() {
      return ya;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), mw(this.tick), this);
    }
    stop() {
      return ((this._started = !1), this);
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * ya;
    }
  },
  zS = new YM(),
  yu = { target: "PREVIEW", zoom: 1 };
var ae = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => yu.target,
  hasRestrictions: () => {
    let e = yu.target;
    return e === "CANVAS" || e === "EXPORT";
  },
};
var Jc = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == "string" && (t = parseFloat(t)), t === 0)) return "0px";
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + "px"
    );
  },
});
Ff({
  borderTopWidth: Jc("y"),
  borderLeftWidth: Jc("x"),
  borderRightWidth: Jc("x"),
  borderBottomWidth: Jc("y"),
});
function ce(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes("assert")
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes("assert") &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function Le(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : "Application entered invalid state",
    )
  );
}
var qo = S.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function GM({ children: e }) {
  if (B(qo).top) return k(Re, { children: e });
  let n = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = A(new Set()).current,
    o = oe(({ id: l, name: c, duplicatedFrom: u }) => {
      if (!l) return null;
      let f = c ? "byName" : "byId",
        d = n.current[f][l];
      if (d) return d;
      let h = c || l;
      if (
        !u &&
        !i.has(h) &&
        (!n.current.byLayoutId[h] || n.current.byLayoutId[h] === h)
      )
        return (
          n.current.count[f][h] === void 0 &&
            ((n.current.count[f][h] = 0),
            (n.current.byLayoutId[h] = h),
            (r.current[f][l] = h)),
          i.add(h),
          h
        );
      let y;
      if (u?.length)
        for (let w = u.length - 1; w >= 0; w--) {
          let E = u[w];
          ce(!!E, "duplicatedId must be defined");
          let T = n.current[f][E],
            F = n.current.byLastId[E];
          if (F && !y) {
            let D = n.current.byLayoutId[F],
              q = !D || D === c;
            F && !i.has(F) && (!c || q) && (y = [F, E]);
          }
          let _ = T ? n.current.byLayoutId[T] : void 0,
            $ = !_ || _ === c;
          if (T && !i.has(T) && (!c || $))
            return (
              (r.current[f][l] = T),
              (r.current.byLastId[E] = T),
              i.add(T),
              T
            );
        }
      let g = n.current.byLastId[l];
      if (g && !i.has(g)) return (i.add(g), (r.current.byId[l] = g), g);
      if (y) {
        let [w, E] = y;
        return (
          (r.current[f][l] = w),
          (r.current.byLastId[E] = w),
          i.add(w),
          w
        );
      }
      let b = n.current.byPossibleId[l];
      if (b && !i.has(b)) return (i.add(b), (r.current.byId[l] = b), b);
      let p = u?.[0],
        m = c || p || l,
        v = (n.current.count[f][m] ?? -1) + 1,
        { layoutId: x, value: C } = qM(m, v, i);
      if (
        ((n.current.count[f][m] = C), (r.current[f][l] = x), u?.length && !c)
      ) {
        let w = u[u.length - 1];
        if ((w && (r.current.byLastId[w] = x), u.length > 1))
          for (let E = 0; E < u.length - 1; E++) {
            let T = u[E];
            T !== void 0 &&
              (r.current.byPossibleId[T] || (r.current.byPossibleId[T] = x));
          }
      }
      return ((r.current.byLayoutId[x] = h), i.add(x), x);
    }, []),
    s = oe(() => {
      ((n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear());
    }, []),
    a = A({
      getLayoutId: o,
      persistLayoutIdCache: s,
      top: !0,
      enabled: !0,
    }).current;
  return k(qo.Provider, { value: a, children: e });
}
function qM(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function KM({ enabled: e = !0, ...t }) {
  let n = B(qo),
    r = le(() => ({ ...n, enabled: e }), [e]);
  return k(qo.Provider, { ...t, value: r });
}
function Ut(e) {
  let t = A(null);
  return (t.current === null && (t.current = e()), t.current);
}
var QM = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%",
  },
  ZM = (() => ({
    ...QM,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5",
  }))(),
  NS = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px",
  },
  JM = (() => ({ ...NS, fontWeight: 500 }))(),
  eL = (() => ({
    ...NS,
    whiteSpace: "pre",
    maxHeight:
      "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }))();
function U6(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${tL(n)}` : "Error",
    i = t instanceof Error ? t.message : "" + t;
  return se("div", {
    style: ZM,
    children: [
      k("div", { className: "text", style: JM, children: r }),
      i && k("div", { className: "text", style: eL, children: i }),
    ],
  });
}
function tL(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
function J(e) {
  return typeof e == "number" && isFinite(e);
}
function nL(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function su(e) {
  return typeof e != "string" && typeof e != "number";
}
function au(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !nL(e);
}
function rL(e) {
  return e * (Math.PI / 180);
}
var xn = (() => {
    function e(t, n) {
      return { a: t, b: n };
    }
    return (
      (e.offset = (t, n) => {
        let r = sn.angleFromX(t.a, t.b),
          i = rL(r),
          o = n * Math.sin(i),
          s = n * Math.cos(i);
        return e(
          { x: t.a.x + o, y: t.a.y - s },
          { x: t.b.x + o, y: t.b.y - s },
        );
      }),
      (e.intersection = (t, n, r) => {
        let i = t.a.x,
          o = t.a.y,
          s = t.b.x,
          a = t.b.y,
          l = n.a.x,
          c = n.a.y,
          u = n.b.x,
          f = n.b.y,
          d = (u - l) * (c - o) - (f - c) * (l - i),
          h = (u - l) * (a - o) - (f - c) * (s - i),
          y = (s - i) * (c - o) - (a - o) * (l - i);
        if ((d === 0 && h === 0) || h === 0) return null;
        let g = d / h,
          b = y / h;
        return r && (g < 0 || g > 1 || b < 0 || b > 1)
          ? null
          : { x: i + g * (s - i), y: o + g * (a - o) };
      }),
      (e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x,
          i = t.b.y - t.a.y,
          o = n.b.x - n.a.x,
          s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI);
      }),
      (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
      (e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x,
          i = t.a.y - t.b.y,
          o = sn(n.x - i, n.y + r);
        return e(o, n);
      }),
      (e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r);
      }),
      (e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t),
          i = (n * r) / r;
        return {
          x: i * t.b.x + (1 - i) * t.a.x,
          y: i * t.b.y + (1 - i) * t.a.y,
        };
      }),
      (e.distance = (t) => sn.distance(t.a, t.b)),
      e
    );
  })(),
  Z = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
          ? !1
          : e.x === t.x &&
            e.y === t.y &&
            e.width === t.width &&
            e.height === t.height;
    },
    atOrigin: (e) => ({ ...e, x: 0, y: 0 }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top,
    }),
    multiply: (e, t) => ({
      x: e.x * t,
      y: e.y * t,
      width: e.width * t,
      height: e.height * t,
    }),
    divide: (e, t) => Z.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == "number" ? t.x : 0,
        r = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + r };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return {
        x: e.x - t,
        y: e.y - t,
        width: e.width + n,
        height: e.height + n,
      };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        r = Math.round(e.x + e.width),
        i = Math.round(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        r = Math.round((e.x + e.width) * 2) / 2,
        i = Math.round((e.y + e.height) * 2) / 2,
        o = Math.max(r - t, 1),
        s = Math.max(i - n, 1);
      return { x: t, y: n, width: o, height: s };
    },
    round: (e, t = 0) => {
      let n = Qc(e.x, t),
        r = Qc(e.y, t),
        i = Qc(e.width, t),
        o = Qc(e.height, t);
      return { x: n, y: r, width: i, height: o };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        r = Math.ceil(e.x + e.width),
        i = Math.ceil(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: Z.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: Z.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        i = -1 / 0;
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        ((t = Math.min(t, s.x)),
          (n = Math.max(n, s.x)),
          (r = Math.min(r, s.y)),
          (i = Math.max(i, s.y)));
      }
      return { x: t, y: r, width: n - t, height: i - r };
    },
    fromPoints: (e) => {
      let [t, n, r, i] = e,
        { x: o, y: s } = t,
        a = sn.distance(t, n),
        l = sn.distance(t, i);
      return { x: o, y: s, width: a, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(Z.minX)), y: Math.min(...e.map(Z.minY)) },
        n = { x: Math.max(...e.map(Z.maxX)), y: Math.max(...e.map(Z.maxY)) };
      return Z.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        r = Math.min(e.x + e.width, t.x + t.width),
        i = Math.max(e.y, t.y),
        o = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: i, width: r - n, height: o - i };
    },
    points: (e) => [
      { x: Z.minX(e), y: Z.minY(e) },
      { x: Z.minX(e), y: Z.maxY(e) },
      { x: Z.maxX(e), y: Z.minY(e) },
      { x: Z.maxX(e), y: Z.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
        { x: i, y: o } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: s, y: a } = t.transformPoint({
          x: e.x + e.width,
          y: e.y + e.height,
        }),
        { x: l, y: c } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        u = Math.min(n, i, s, l),
        f = Math.max(n, i, s, l) - u,
        d = Math.min(r, o, a, c),
        h = Math.max(r, o, a, c) - d;
      return { x: u, y: d, width: f, height: h };
    },
    containsPoint: (e, t) =>
      !(
        t.x < Z.minX(e) ||
        t.x > Z.maxX(e) ||
        t.y < Z.minY(e) ||
        t.y > Z.maxY(e) ||
        isNaN(e.x) ||
        isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of Z.points(t)) if (!Z.containsPoint(e, n)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: "block",
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(
        t.x >= Z.maxX(e) ||
        Z.maxX(t) <= e.x ||
        t.y >= Z.maxY(e) ||
        Z.maxY(t) <= e.y
      ),
    overlapHorizontally: (e, t) => {
      let n = Z.maxX(e),
        r = Z.maxX(t);
      return n > t.x && r > e.x;
    },
    overlapVertically: (e, t) => {
      let n = Z.maxY(e),
        r = Z.maxY(t);
      return n > t.y && r > e.y;
    },
    doesNotIntersect: (e, t) => t.find((n) => Z.intersects(n, e)) === void 0,
    isEqual: (e, t) => Z.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        r = e.y,
        i = e.y + e.height;
      return [
        { x: t, y: r },
        { x: n, y: r },
        { x: n, y: i },
        { x: t, y: i },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        r = e.x + e.width,
        i = e.y,
        o = e.y + e.height / 2,
        s = e.y + e.height;
      return [
        { x: n, y: i },
        { x: r, y: o },
        { x: n, y: s },
        { x: t, y: o },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        r = 0;
      return (
        t.x < e.x ? (n = e.x - t.x) : t.x > Z.maxX(e) && (n = t.x - Z.maxX(e)),
        t.y < e.y ? (r = e.y - t.y) : t.y > Z.maxY(e) && (r = t.y - Z.maxY(e)),
        sn.distance({ x: n, y: r }, { x: 0, y: 0 })
      );
    },
    fromAny: (e, t = { x: 0, y: 0, width: 0, height: 0 }) => ({
      x: e.x || t.x,
      y: e.y || t.y,
      width: e.width || t.width,
      height: e.height || t.height,
    }),
    delta: (e, t) => {
      let n = { x: Z.minX(e), y: Z.minY(e) },
        r = { x: Z.minX(t), y: Z.minY(t) };
      return { x: n.x - r.x, y: n.y - r.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: r } = t,
        i = e.width - n,
        o = e.height - r;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, r),
        x: e.width < n ? e.x + i / 2 : e.x,
        y: e.height < r ? e.y + o / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = Z.minX(e),
        r = Z.minY(e),
        i = Z.maxX(e),
        o = Z.maxY(e);
      for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, r, i] = Z.cornerPoints(e);
      return [xn(t, n), xn(n, r), xn(r, i), xn(i, t)];
    },
    rebaseRectOnto: (e, t, n, r) => {
      let i = { ...e };
      switch (n) {
        case "bottom":
        case "top":
          switch (r) {
            case "start":
              i.x = t.x;
              break;
            case "center":
              i.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              i.x = t.x + t.width - e.width;
              break;
            default:
              Le(r);
          }
          break;
        case "left":
          i.x = t.x - e.width;
          break;
        case "right":
          i.x = t.x + t.width;
          break;
        default:
          Le(n);
      }
      switch (n) {
        case "left":
        case "right":
          switch (r) {
            case "start":
              i.y = t.y;
              break;
            case "center":
              i.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              i.y = t.y + t.height - e.height;
              break;
            default:
              Le(r);
          }
          break;
        case "top":
          i.y = t.y - e.height;
          break;
        case "bottom":
          i.y = t.y + t.height;
          break;
        default:
          Le(n);
      }
      return i;
    },
  };
var HS = {
  quickfix: (e) => (
    (e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null),
    J(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || e.widthType === 2 || J(e.maxWidth)) && (e.right = !1),
      (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || e.heightType === 2 || J(e.maxHeight)) && (e.bottom = !1),
      (e.heightType = 0)),
    e
  ),
};
function bu(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var jS = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: r,
          bottom: i,
          width: o,
          height: s,
          centerX: a,
          centerY: l,
          aspectRatio: c,
          autoSize: u,
        } = e,
        f = HS.quickfix({
          left: J(t) || Mn(t),
          right: J(n) || Mn(n),
          top: J(r) || Mn(r),
          bottom: J(i) || Mn(i),
          widthType: bu(o),
          heightType: bu(s),
          aspectRatio: c || null,
          fixedSize: u === !0,
        }),
        d = null,
        h = null,
        y = 0,
        g = 0;
      if (f.widthType !== 0 && typeof o == "string") {
        let m = parseFloat(o);
        o.endsWith("fr")
          ? ((y = 3), (d = m))
          : o === "auto"
            ? (y = 2)
            : ((y = 1), (d = m / 100));
      } else o !== void 0 && typeof o != "string" && (d = nt.getNumber(o));
      if (f.heightType !== 0 && typeof s == "string") {
        let m = parseFloat(s);
        s.endsWith("fr")
          ? ((g = 3), (h = m))
          : s === "auto"
            ? (g = 2)
            : ((g = 1), (h = parseFloat(s) / 100));
      } else s !== void 0 && typeof s != "string" && (h = nt.getNumber(s));
      let b = 0.5,
        p = 0.5;
      return (
        a && (b = parseFloat(a) / 100),
        l && (p = parseFloat(l) / 100),
        {
          left: f.left ? nt.getNumber(t) : null,
          right: f.right ? nt.getNumber(n) : null,
          top: f.top ? nt.getNumber(r) : null,
          bottom: f.bottom ? nt.getNumber(i) : null,
          widthType: y,
          heightType: g,
          width: d,
          height: h,
          aspectRatio: f.aspectRatio || null,
          centerAnchorX: b,
          centerAnchorY: p,
        }
      );
    },
    toSize: (e, t, n, r) => {
      let i = null,
        o = null,
        s = t?.sizing ? nt.getNumber(t?.sizing.width) : null,
        a = t?.sizing ? nt.getNumber(t?.sizing.height) : null,
        l = vw(e.left, e.right);
      if (s && J(l)) i = s - l;
      else if (n && e.widthType === 2) i = n.width;
      else if (J(e.width))
        switch (e.widthType) {
          case 0:
            i = e.width;
            break;
          case 3:
            i = r
              ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                e.width
              : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.width);
            break;
          case 2:
            break;
          default:
            Le(e.widthType);
        }
      let c = vw(e.top, e.bottom);
      if (a && J(c)) o = a - c;
      else if (n && e.heightType === 2) o = n.height;
      else if (J(e.height))
        switch (e.heightType) {
          case 0:
            o = e.height;
            break;
          case 3:
            o = r
              ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) *
                e.height
              : null;
            break;
          case 1:
          case 4:
            a && (o = a * e.height);
            break;
          case 2:
            break;
          default:
            Le(e.heightType);
        }
      return lL(i, o, e, { height: a ?? 0, width: s ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, i = null) => {
      let o = e.left || 0,
        s = e.top || 0,
        { width: a, height: l } = jS.toSize(e, t, n, i),
        c = t?.positioning ?? null,
        u = c ? nt.getNumber(c.width) : null,
        f = c ? nt.getNumber(c.height) : null;
      (e.left !== null
        ? (o = e.left)
        : u && e.right !== null
          ? (o = u - e.right - a)
          : u && (o = e.centerAnchorX * u - a / 2),
        e.top !== null
          ? (s = e.top)
          : f && e.bottom !== null
            ? (s = f - e.bottom - l)
            : f && (s = e.centerAnchorY * f - l / 2));
      let d = { x: o, y: s, width: a, height: l };
      return r ? Z.pixelAligned(d) : d;
    },
  },
  iL = 200,
  oL = 200;
function xu(e, t, n, r) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh") && r)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    return parseFloat(t);
  }
  return t;
}
function sL(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(xu("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(xu("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function aL(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(xu("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(xu("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function lL(e, t, n, r, i) {
  let o = aL(J(e) ? e : iL, n, r, i),
    s = sL(J(t) ? t : oL, n, r, i);
  return (
    J(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (J(n.left) && J(n.right)
        ? (s = o / n.aspectRatio)
        : J(n.top) && J(n.bottom)
          ? (o = s * n.aspectRatio)
          : n.widthType !== 0
            ? (s = o / n.aspectRatio)
            : (o = s * n.aspectRatio)),
    { width: o, height: s }
  );
}
function vw(e, t) {
  return !J(e) || !J(t) ? null : e + t;
}
function cL(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function $a(e) {
  return !e._constraints || cL(e) ? !1 : e._constraints.enabled;
}
function uL(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    J(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    J(n) && J(r) ? { width: n, height: r } : null
  );
}
function fL(e) {
  let t = uL(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return J(n) && J(r) ? { x: n, y: r, ...t } : null;
}
function Ra(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!$a(e) || r) return fL(e);
  let i = dL(e),
    o = hL(t),
    s = o ? { sizing: o, positioning: o, viewport: null } : null;
  return jS.toRect(i, s, null, n, null);
}
function dL(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: s,
      size: a,
    } = e,
    { width: l, height: c } = e;
  (l === void 0 && (l = a), c === void 0 && (c = a));
  let { aspectRatio: u, autoSize: f } = s,
    d = HS.quickfix({
      left: J(t),
      right: J(n),
      top: J(r),
      bottom: J(i),
      widthType: bu(l),
      heightType: bu(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    h = null,
    y = null,
    g = 0,
    b = 0;
  if (d.widthType !== 0 && typeof l == "string") {
    let v = parseFloat(l);
    l.endsWith("fr")
      ? ((g = 3), (h = v))
      : l === "auto"
        ? (g = 2)
        : ((g = 1), (h = v / 100));
  } else l !== void 0 && typeof l != "string" && (h = l);
  if (d.heightType !== 0 && typeof c == "string") {
    let v = parseFloat(c);
    c.endsWith("fr")
      ? ((b = 3), (y = v))
      : c === "auto"
        ? (b = 2)
        : ((b = 1), (y = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != "string" && (y = c);
  let p = 0.5,
    m = 0.5;
  return (
    (o === !0 || o === "x") &&
      ((d.left = !1), typeof t == "string" && (p = parseFloat(t) / 100)),
    (o === !0 || o === "y") &&
      ((d.top = !1), typeof r == "string" && (m = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: g,
      heightType: b,
      width: h,
      height: y,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: p,
      centerAnchorY: m,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var WS = S.createContext({ parentSize: 0 });
function hL(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function za() {
  return S.useContext(WS).parentSize;
}
function US(e) {
  return typeof e == "object";
}
var pL = (e) => {
  let t = za(),
    { parentSize: n, children: r } = e,
    i = S.useMemo(() => ({ parentSize: n }), [mL(n), vL(n)]);
  return t === 1
    ? r
      ? k(Re, { children: r })
      : null
    : k(WS.Provider, { value: i, children: r });
};
function mL(e) {
  return US(e) ? e.width : e;
}
function vL(e) {
  return US(e) ? e.height : e;
}
function gL(e, t) {
  return k(pL, { parentSize: t, children: e });
}
function yL(e) {
  let t = za();
  return Ra(e, t, !0);
}
function XS({ width: e, height: t }) {
  return (
    e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
  );
}
var bL = ((e) => (
    (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.BoxShadow = "boxshadow"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope"),
    (e.ScrollSectionRef = "scrollsectionref"),
    (e.CustomCursor = "customcursor"),
    (e.Border = "border"),
    (e.Cursor = "cursor"),
    (e.Padding = "padding"),
    (e.BorderRadius = "borderradius"),
    (e.CollectionReference = "collectionreference"),
    (e.MultiCollectionReference = "multicollectionreference"),
    e
  ))(bL || {}),
  Dp;
function xL() {
  if (Dp !== void 0) return Dp;
  let e = document.createElement("div");
  (Object.assign(e.style, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e));
  let t = e.scrollHeight === 1;
  return (e.parentNode && e.parentNode.removeChild(e), (Dp = t), t);
}
var Hi = "flexbox-gap-not-supported",
  gw = !1;
function K6() {
  gw || ((gw = !0), !xL() && document.body.classList.add(Hi));
}
var wL = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  SL = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  kL = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  CL = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  TL = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  EL = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  RL = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  PL = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  _L = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  IL = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  FL = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  ML = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
}
`,
  LL = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  OL = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  DL = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  AL = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  VL = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    ML,
    FL,
    wL,
    SL,
    kL,
    CL,
    TL,
    EL,
    RL,
    PL,
    _L,
    IL,
    LL,
    OL,
    DL,
    AL,
  ],
  BL = [
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
    `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
    `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  $L = new Set(),
  Ap;
function YS(e, t, n = $L) {
  if (!(!e || n.has(e) || typeof document > "u")) {
    if ((n.add(e), !t)) {
      if (!Ap) {
        let r = document.createElement("style");
        if (
          (r.setAttribute("type", "text/css"),
          r.setAttribute("data-framer-css", "true"),
          !document.head)
        ) {
          console.warn(
            "not injecting CSS: the document is missing a <head> element",
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) Ap = r.sheet;
        else {
          console.warn(
            "not injecting CSS: injected <style> element does not have a sheet",
            r,
          );
          return;
        }
      }
      t = Ap;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var zL = ["[data-framer-component-type] { position: absolute; }"],
  NL = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
  HL = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
  jL = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
  WL = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  UL = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`,
  XL = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`,
  YL = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  GL = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  qL = [
    '[data-framer-component-type="Text"] { cursor: inherit; }',
    "[data-framer-component-text-autosized] * { white-space: pre; }",
    NL,
    HL,
    jL,
    WL,
    UL,
    XL,
    YL,
    GL,
  ],
  KL = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
  QL = (() => [
    `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${Hi} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ])(),
  ZL = (() => `
.${Hi} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
  JL = (() => `
.${Hi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Hi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
  eO = (() => `
.${Hi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Hi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
  tO = (() => [KL, ZL, ...QL, JL, eO])(),
  nO = [
    `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
  ],
  rO = [
    '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  iO = [
    '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
    '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  oO = [
    '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  sO = [
    '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
  ],
  aO = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  lO = [
    '[data-framer-cursor="pointer"] { cursor: pointer; }',
    '[data-framer-cursor="grab"] { cursor: grab; }',
    '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
  ],
  cO = [
    '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
    "[data-framer-generated] * { pointer-events: unset }",
  ],
  uO = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  fO = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  dO = (e) => (e ? cO : []),
  hO = [".svgContainer svg { display: block; }"],
  GS = (e) => [
    ...zL,
    ...qL,
    ...BL,
    ...VL,
    ...tO,
    ...nO,
    ...rO,
    ...iO,
    ...sO,
    ...oO,
    ...aO,
    ...lO,
    ...dO(e),
    ...hO,
    ...uO,
    ...fO,
  ],
  pO = GS(!1),
  mO = GS(!0),
  yw = !1;
function Na() {
  if (yw) return;
  yw = !0;
  let e = ae.current() === ae.preview ? mO : pO;
  for (let t of e) YS(t, void 0, void 0);
}
function ji(e) {
  return typeof e == "function";
}
function ym(e) {
  return typeof e == "boolean";
}
function fe(e) {
  return typeof e == "string";
}
function $e(e) {
  return Number.isFinite(e);
}
function Fu(e) {
  return Array.isArray(e);
}
function Se(e) {
  return e !== null && typeof e == "object" && !Fu(e);
}
function ct(e) {
  return typeof e > "u";
}
function Be(e) {
  return e === null;
}
function Ko(e) {
  return e == null;
}
function qS(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function vO(e) {
  return Se(e) || ji(e);
}
var bw = "optional";
function gO(e) {
  return !!e && bw in e && e[bw] === !0;
}
function yO(e) {
  try {
    switch (e.type) {
      case "string":
      case "collectionreference":
      case "multicollectionreference":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
      case "padding":
      case "borderradius":
        return fe(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return ym(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return ct(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case "fusednumber":
      case "number":
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return Se(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return Se(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
        return Se(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = Se(e.defaultValue) ? e.defaultValue : {};
        return (Se(e.controls) && KS(t, e.controls), t);
      }
      case "array":
        return Fu(e.defaultValue) ? e.defaultValue : void 0;
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function KS(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!ct(i) || gO(r)) continue;
    let o = yO(r);
    ct(o) || (e[n] = o);
  }
}
function bO(e) {
  if (Se(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function xO(e, t) {
  if (!vO(e)) return;
  let n = bO(e);
  KS(n, t);
}
function Q6(e, t) {
  (Object.assign(e, { propertyControls: t }), xO(e, t));
}
function wO(e) {
  return e.propertyControls;
}
var qe = (e) => e;
function SO(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var kO =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/,
  CO = SO(
    (e) =>
      kO.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91),
  ),
  xw = (e) => () => {
    Ea(e);
  },
  TO = () => () => {},
  EO = {
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = lt.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  RO = !1,
  PO = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
          ? TO()
          : xw(
              RO
                ? `${String(t)} is not available in this version of Framer.`
                : `${String(t)} is only available inside of Framer. https://www.framer.com/`,
            );
    },
  },
  lt = new Proxy(EO, PO);
function _O(e, t, n = 1) {
  let { width: r, height: i } = t,
    o = e.pixelWidth ?? e.intrinsicWidth ?? 0,
    s = e.pixelHeight ?? e.intrinsicHeight ?? 0;
  if (r < 1 || i < 1 || o < 1 || s < 1) return;
  ((r *= n), (i *= n));
  let a = r / i,
    l = o / s;
  switch (e.fit) {
    case "fill":
      return l > a ? s / i : o / r;
    case "fit":
    case "stretch":
      return Math.max(o / r, s / i);
  }
}
function ww(e, t) {
  return t && Math.max(1, e) > t ? "pixelated" : "auto";
}
var Sw = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  IO = {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "126px auto",
    backgroundImage:
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjEyNiI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0xMjYgMHYyMS41ODRMMjEuNTg0IDEyNkgwdi0xNy41ODVMMTA4LjQxNSAwSDEyNlptMCAxMDguNDE0VjEyNmgtMTcuNTg2TDEyNiAxMDguNDE0Wm0wLTg0djM5LjE3MUw2My41ODUgMTI2SDI0LjQxNEwxMjYgMjQuNDE0Wm0wIDQydjM5LjE3TDEwNS41ODQgMTI2aC0zOS4xN0wxMjYgNjYuNDE0Wk0xMDUuNTg2IDAgMCAxMDUuNTg2VjY2LjQxNUw2Ni40MTUgMGgzOS4xNzFabS00MiAwTDAgNjMuNTg2VjI0LjQxNUwyNC40MTUgMGgzOS4xNzFabS00MiAwTDAgMjEuNTg2VjBoMjEuNTg2WiIvPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIiBmaWxsPSIjODg4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)",
    opacity: 0.2,
  };
function FO(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function QS(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function MO(e, t) {
  if (!t) return "auto";
  let n = ae.current() === ae.canvas ? Ge.devicePixelRatio : 1,
    r = _O(e, t, n);
  return ae.current() === ae.canvas ? ww(1, r) : ww(yu.zoom, r);
}
function bm(e, t) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: QS(e.positionX, e.positionY),
    objectFit: FO(e.fit),
    imageRendering: MO(e, t),
  };
}
function LO({ image: e, containerSize: t, nodeId: n, alt: r }) {
  let i = lt.useImageSource(e, t, n),
    o = bm(e, t),
    s = S.useRef(null);
  return k("img", {
    ref: s,
    decoding: "async",
    loading: e.loading,
    sizes: e.sizes,
    srcSet: e.srcSet,
    src: i,
    alt: r ?? e.alt,
    style: o,
  });
}
function OO({ image: e, containerSize: t, nodeId: n }) {
  let r = S.useRef(null),
    i = lt.useImageElement(e, t, n),
    o = bm(e, t);
  return (
    S.useLayoutEffect(() => {
      let s = r.current;
      if (s !== null)
        return (
          s.appendChild(i),
          () => {
            s.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    k("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function DO({ nodeId: e, image: t, containerSize: n }) {
  let r = S.useRef(null),
    i = lt.useImageSource(t, n, e);
  return (
    S.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let s = bm(t, n);
      lt.renderOptimizedCanvasImage(o, i, s, e);
    }, [e, t, i, n]),
    k("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function ZS({ layoutId: e, image: t, ...n }) {
  e && (e = e + "-background");
  let r = { ...Sw, ...IO },
    i = null;
  if (fe(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let o = $e(t.backgroundSize) ? t.backgroundSize : 1,
        s = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        a = lt.useImageSource(t, s);
      ((r.backgroundImage = `url(${a})`),
        (r.backgroundRepeat = "repeat"),
        (r.backgroundPosition = QS(t.positionX, t.positionY)),
        (r.opacity = void 0),
        (r.border = 0),
        (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (i = null));
    } else
      ae.current() !== ae.canvas
        ? (i = k(LO, { image: t, ...n }))
        : lt.canRenderOptimizedCanvasImage(lt.useImageSource(t))
          ? (i = k(DO, { image: t, ...n }))
          : (i = k(OO, { image: t, ...n }));
  return k(Qe.div, {
    layoutId: e,
    style: i ? Sw : r,
    "data-framer-background-image-wrapper": !0,
    children: i,
  });
}
var AO = "src",
  Vi = {
    isImageObject: function (e) {
      return !e || typeof e == "string" ? !1 : AO in e;
    },
  };
function VO(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    s = r && o ? r[o] : void 0;
  return (s && typeof s == "string" && (e = { ...e, src: s }), e);
}
function BO(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Vi.isImageObject(t)) return;
  let r = null;
  if (
    (fe(n) ? (r = { alt: "", src: n }) : (r = nt.get(t, null)),
    !!Vi.isImageObject(r))
  )
    return VO(r, e);
}
function $O(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let s, a, l, c;
  if (
    (typeof r == "number"
      ? (s = a = l = c = r)
      : ((s = r.top || 0),
        (a = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(s === 0 && a === 0 && l === 0 && c === 0))
  ) {
    if (n && s === a && s === l && s === c) {
      t.border = `${s}px ${i} ${o}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${s}px`),
      (t.borderBottomWidth = `${a}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`));
  }
}
function zO(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), k(Qe.div, { style: n }))
    : ($O(e, n, !1),
      k(Qe.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Ha(e) {
  return e && e !== "search" && e !== "slot" && e !== "template"
    ? Qe[e]
    : Qe.div;
}
var NO = jn(fm(), 1),
  er = typeof Ke < "u" ? Ke : void 0,
  ui = () => typeof document == "object";
var HO = () =>
    er && /Chrome/.test(er.userAgent) && /Google Inc/.test(er.vendor) && !UO(),
  jO = () =>
    er && /Safari/.test(er.userAgent) && /Apple Computer/.test(er.vendor);
var WO = () => er && /FramerX/.test(er.userAgent),
  UO = () => er && /Edg\//.test(er.userAgent);
var XO = () => NO.default.env.NODE_ENV === "test";
var YO = HO();
function JS(e) {
  let t = {};
  return (
    !YO ||
      ae.current() !== ae.canvas ||
      ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0),
      (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)),
    t
  );
}
function xm(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
function GO(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = S.Children.map(t, (r) =>
        S.isValidElement(r) ? S.cloneElement(r, { _forwardedOverrides: n }) : r,
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function Mu(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
        ? `translateX(-50%) ${n}`
        : e === "y"
          ? `translateY(-50%) ${n}`
          : n || "none";
}
function ja(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: a,
    } = e,
    { getLayoutId: l, enabled: c } = B(qo);
  return le(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (a || !i || s)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var ek = typeof document < "u" ? ht : N,
  es = S.createContext(!1);
function Lu() {
  let [e, t] = S.useState(0);
  return S.useCallback(() => t((n) => n + 1), []);
}
var qO = (() => hF().ResizeObserver)();
var KO = class {
    constructor() {
      (R(this, "sharedResizeObserver"), R(this, "callbacks", new WeakMap()));
      let e = Ge.ResizeObserver ?? qO;
      this.sharedResizeObserver = new e(this.updateResizedElements.bind(this));
    }
    updateResizedElements(e) {
      for (let t of e) {
        let n = this.callbacks.get(t.target);
        n && n(t.contentRect);
      }
    }
    observeElementWithCallback(e, t) {
      (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
    }
    unobserve(e) {
      (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
    }
  },
  eu = (() => (ui() ? new KO() : void 0))();
function QO(e) {
  let t = Lu();
  N(() => {
    let n = e?.current;
    if (n)
      return (
        eu?.observeElementWithCallback(e.current, t),
        () => {
          eu?.unobserve(n);
        }
      );
  }, [e, t]);
}
var ZO = "data-framer-size-compatibility-wrapper";
function JO(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(ZO)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(tk)
    .map(nk);
}
function tk(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function nk(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== "contents"
  )
    return e;
  let t = [...e.children].find(tk);
  return t ? nk(t) : e;
}
function Ou(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: s } = e,
    { skipHook: a = !1 } = r,
    l = !!B(es),
    c = ae.current() === ae.canvas;
  ek(() => {
    !c ||
      l ||
      a ||
      (t.current &&
        i &&
        o &&
        s &&
        lt.queueMeasureRequest(xm(i), t.current, n(t.current)));
  });
}
function eD(e) {
  let t = e.closest("[data-framer-component-container]");
  t && lt.queueMeasureRequest(xm(t.id), t, JO(t));
}
var Wi = Object.keys;
function Pa(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function kw(e) {
  return Pa(e, "equals") ? typeof e.equals == "function" : !1;
}
function wm(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function tD(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!wm(e[r], t[r])) return !1;
  return !0;
}
function nD(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Du(e[r], t[r], !0)) return !1;
  return !0;
}
function rD(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!wm(r, t.get(n))) return !1;
  return !0;
}
function iD(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Du(r, t.get(n), !0)) return !1;
  return !0;
}
function oD(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function sD(e, t) {
  let n = Wi(e);
  if (n.length !== Wi(t).length) return !1;
  for (let r of n) {
    if (!Pa(t, r)) return !1;
    if (!(r === "_owner" && Pa(e, "$$typeof") && e.$$typeof) && !wm(e[r], t[r]))
      return !1;
  }
  return !0;
}
function aD(e, t) {
  let n = Wi(e);
  if (n.length !== Wi(t).length) return !1;
  for (let r of n) {
    if (!Pa(t, r)) return !1;
    if (
      !(r === "_owner" && Pa(e, "$$typeof") && e.$$typeof) &&
      !Du(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function Du(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== "object") return !1;
  let o = Array.isArray(e),
    s = Array.isArray(t);
  if (o && s) return n ? nD(e, t) : tD(e, t);
  if (o !== s) return !1;
  let a = e instanceof Map,
    l = t instanceof Map;
  if (a && l) return n ? iD(e, t) : rD(e, t);
  if (a !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return oD(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let h = e instanceof RegExp,
    y = t instanceof RegExp;
  return h && y
    ? e.toString() === t.toString()
    : h !== y
      ? !1
      : kw(e) && kw(t)
        ? e.equals(t)
        : n
          ? aD(e, t)
          : sD(e, t);
}
function We(e, t, n = !0) {
  try {
    return Du(e, t, n);
  } catch (r) {
    if (r instanceof Error && /stack|recursion/iu.exec(r.message))
      return (
        console.warn(
          "Warning: isEqual does not handle circular references.",
          r.name,
          r.message,
        ),
        !1
      );
    throw r;
  }
}
var rk = "0.000001px",
  Vp = (() => ` translateZ(${rk})`)(),
  ik = (() => WO() || jO() || XO())();
function lD(e) {
  e.willChange = "transform";
  let t = ae.current() === ae.canvas;
  ik && t && (e.translateZ = rk);
}
function Sm(e) {
  ((e.willChange = "transform"), cD(e, !0));
}
function cD(e, t) {
  let n = ae.current() === ae.canvas;
  if (!ik || !n) return;
  let r = (fe(e.transform) && e.transform) || "";
  t
    ? r.includes(Vp) || (e.transform = r + Vp)
    : (e.transform = r.replace(Vp, ""));
}
function ok(e, t, n, r = !0) {
  if (!e) return;
  let i = qe(e.style),
    o = n || i[t],
    s = () => {
      i[t] = o;
    };
  ((i[t] = null), r ? Promise.resolve().then(s) : setTimeout(s, 0));
}
var lu = (() => {
  class e extends Ee {
    constructor() {
      (super(...arguments),
        R(this, "layerElement", null),
        R(this, "setLayerElement", (n) => {
          this.layerElement = n;
        }));
    }
    static applyWillChange(n, r, i) {
      n.willChangeTransform && (i ? lD(r) : Sm(r));
    }
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !We(this.props, n);
    }
    componentDidUpdate(n) {
      qe(this.props).clip &&
        qe(this.props).radius === 0 &&
        qe(n).radius !== 0 &&
        ok(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return (R(e, "defaultProps", {}), e);
})();
function uD(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function fD(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  uD(t, e);
  let o = r(n);
  return (t.set(n, o), o);
}
var sk = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
    return t;
  },
  km = {
    hueRotate: (e, t) => X.toHslString(X.hueRotate(X(e), t)),
    setAlpha: (e, t) => X.toRgbString(X.alpha(X(e), t)),
    getAlpha: (e) => {
      let t = gm(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => X.toRgbString(X.multiplyAlpha(X(e), t)),
    toHex: (e) => X.toHexString(X(e)).toUpperCase(),
    toRgb: (e) => X.toRgb(X(e)),
    toRgbString: (e) => X.toRgbString(X(e)),
    toHSV: (e) => X.toHsv(X(e)),
    toHSL: (e) => X.toHsl(X(e)),
    toHslString: (e) => X.toHslString(X(e)),
    toHsvString: (e) => X.toHsvString(X(e)),
    hsvToHSLString: (e) => X.toHslString(X(Zc(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => X.toHexString(X(Zc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => X.toRgbString(X(Zc(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => Zc(e.h, e.s, e.v),
    rgbaToString: (e) => X.toRgbString(X(e)),
    rgbToHexString: (e) => X.toHexString(X(e)),
    hslToString: (e) => X.toHslString(X(e)),
    hslToRgbString: (e) => X.toRgbString(X(e)),
    toColorPickerSquare: (e) => X.toRgbString(X({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => X(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == "string" && (e = X(e)),
      typeof t == "string" && (t = X(t)),
      X.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = X(e);
      return t.a !== 1 ? X.toRgbString(t) : X.toHexString(t);
    },
  },
  dD = /var\(.+\)/,
  hD = new Map();
function pD(e, t) {
  let n = [e, t];
  return dD.test(e) ? e : fD(1e3, hD, n, () => km.multiplyAlpha(e, t));
}
function Wa(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: pD(r.value, t) }))
  );
}
function ak(e, t) {
  let n = 0;
  return (
    Wa(e, t).forEach((r) => {
      n ^= sk(r.value) ^ r.position;
    }),
    n
  );
}
var mD = ["stops"];
function lk(e) {
  return e && mD.every((t) => t in e);
}
var vD = ["start", "end"];
function ck(e) {
  return e && vD.every((t) => t in e);
}
var gD = ["angle", "alpha"],
  _a = {
    isLinearGradient: (e) => e && gD.every((t) => t in e) && (ck(e) || lk(e)),
    hash: (e) => e.angle ^ ak(e, e.alpha),
    toCSS: (e, t) => {
      let n = Wa(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(", ")})`;
    },
  },
  yD = [
    "widthFactor",
    "heightFactor",
    "centerAnchorX",
    "centerAnchorY",
    "alpha",
  ],
  Ia = {
    isRadialGradient: (e) => e && yD.every((t) => t in e) && (ck(e) || lk(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      ak(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        s = Wa(e, t),
        a = s.map((l, c) => {
          let u = s[c + 1],
            f =
              l.position === 1 && u?.position === 1
                ? l.position - 1e-4
                : l.position;
          return `${l.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${o * 100}%, ${a.join(", ")})`;
    },
  };
function bD({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || pw(t)
      ? (n.backgroundColor = t)
      : X.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || X.toRgbString(e))
    : e &&
      ((e = nt.get(e, null)),
      typeof e == "string" || pw(e)
        ? (n.background = e)
        : _a.isLinearGradient(e)
          ? (n.background = _a.toCSS(e))
          : Ia.isRadialGradient(e)
            ? (n.background = Ia.toCSS(e))
            : X.isColorObject(e) &&
              (n.backgroundColor = e.initialValue || X.toRgbString(e)));
}
function ve(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function xD(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function wD(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function SD(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = "preserve-3d")
      : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
          ? (t.left = "50%")
          : e.center === "y" && (t.top = "50%")),
    ve(e, "size", t),
    ve(e, "width", t),
    ve(e, "height", t),
    ve(e, "minWidth", t),
    ve(e, "minHeight", t),
    ve(e, "top", t),
    ve(e, "right", t),
    ve(e, "bottom", t),
    ve(e, "left", t),
    ve(e, "position", t),
    ve(e, "overflow", t),
    ve(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && ve(e, "border", t),
    ve(e, "borderRadius", t),
    ve(e, "radius", t, "borderRadius"),
    ve(e, "color", t),
    ve(e, "shadow", t, "boxShadow"),
    ve(e, "x", t),
    ve(e, "y", t),
    ve(e, "z", t),
    ve(e, "rotate", t),
    ve(e, "rotateX", t),
    ve(e, "rotateY", t),
    ve(e, "rotateZ", t),
    ve(e, "scale", t),
    ve(e, "scaleX", t),
    ve(e, "scaleY", t),
    ve(e, "skew", t),
    ve(e, "skewX", t),
    ve(e, "skewY", t),
    ve(e, "originX", t),
    ve(e, "originY", t),
    ve(e, "originZ", t),
    bD(e, t),
    t
  );
}
function kD(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof qe(e)[t] == "function" &&
        t.startsWith("on") &&
        !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var Cw = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  CD = (() => new Set([...Cw, ...Cw.map((e) => `${e}Capture`)]))();
function TD(e) {
  if (e.drag) return "grab";
  for (let t in e) if (CD.has(t)) return "pointer";
}
var Bp = "overflow";
function ED(e) {
  return Tw(e) ? !0 : e.style ? !!Tw(e.style) : !1;
}
function Tw(e) {
  return Bp in e && (e[Bp] === "scroll" || e[Bp] === "auto");
}
function uk(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: s,
      center: a,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: h,
    } = e,
    y = xt(e.minWidth),
    g = xt(e.minHeight),
    b = xt(e.maxWidth),
    p = xt(e.maxHeight);
  return {
    top: xt(n),
    left: xt(t),
    bottom: xt(r),
    right: xt(i),
    width: xt(o),
    height: xt(s),
    size: xt(c),
    center: a,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: h,
    minWidth: y,
    minHeight: g,
    maxWidth: b,
    maxHeight: p,
  };
}
var Ew = { x: 0, y: 0, width: 200, height: 200 };
function RD(e) {
  S.useInsertionEffect(() => {
    Na();
  }, []);
  let t = !!B(es),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e,
    s = uk(e),
    a = yL(s),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: ae.current() !== ae.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let c = !kD(e) && !e.__fromCanvasComponent && !ED(e),
    u = e.style ? !("pointerEvents" in e.style) : !0;
  c && u && (l.pointerEvents = "none");
  let d = S.Children.count(e.children) > 0 &&
      S.Children.toArray(e.children).every(
        (p) => typeof p == "string" || typeof p == "number",
      ) && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    h = SD(e);
  (o === void 0 &&
    !i &&
    (xD(h) || (l.width = Ew.width), wD(h) || (l.height = Ew.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let y = {};
  ($a(s) &&
    a &&
    !XS(e) &&
    (y = {
      left: a.x,
      top: a.y,
      width: a.width,
      height: a.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, d, r, h, y, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    lu.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let b = ae.current() === ae.canvas;
  return (
    e.positionSticky
      ? (!b || t) &&
        ((g.position = "sticky"),
        (g.willChange = "transform"),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : b &&
        (e.positionFixed || e.positionAbsolute) &&
        (g.position = "absolute"),
    "rotate" in g && g.rotate === void 0 && delete g.rotate,
    [g, a]
  );
}
var PD = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function _D(e) {
  let t = {};
  for (let n in e)
    (no(n) || CO(n)) && !PD.has(n)
      ? (t[n] = qe(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof qe(e)[n] != "boolean" &&
          !e.transition &&
          (t.transition = qe(e)[n]));
  return t;
}
function ID(e) {
  return "data-framer-name" in e;
}
var FD = Oe(function (t, n) {
    let { name: r, center: i, border: o, _border: s, __portal: a } = t,
      { props: l, children: c } = GO(t),
      u = _D(l),
      f = ja(t),
      d = TD(t),
      h = A(null),
      y = n ?? h,
      g = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": qe(t)["data-framer-offset-parent-id"],
      };
    !ID(t) && r && (qe(g)["data-framer-name"] = r);
    let [b, p] = RD(l),
      m = uk(l),
      v = XS(m);
    (i && !(p && !v && $a(m))
      ? (u.transformTemplate || (u.transformTemplate = Mu(i)),
        Object.assign(g, JS(i)))
      : u.transformTemplate || (u.transformTemplate = void 0),
      Ou(t, y));
    let x = BO(t),
      C = !!B(es),
      w = MD(l, m, p, C),
      E = gL(
        se(Re, {
          children: [
            x
              ? k(ZS, {
                  alt: t.alt ?? "",
                  image: x,
                  containerSize: p ?? void 0,
                  nodeId: t.id && xm(t.id),
                  layoutId: f,
                })
              : null,
            c,
            k(zO, { ...s, border: o, layoutId: f }),
          ],
        }),
        w,
      ),
      T = Ha(t.as),
      { size: F, radius: _, shadow: $ } = b;
    return (
      F !== void 0 &&
        (delete b.size,
        b.height === void 0 && (b.height = F),
        b.width === void 0 && (b.width = F)),
      _ !== void 0 && (delete b.radius, (b.borderRadius = _)),
      $ !== void 0 && (delete b.shadow, (b.boxShadow = $)),
      se(T, { ...g, ...u, layoutId: f, style: b, ref: y, children: [E, a] })
    );
  }),
  cu = Oe(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? k(FD, { ...t, ref: n }) : null;
  });
function MD(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;
  return n && !i
    ? n
    : o === 0 && s === 0 && typeof a == "number" && typeof l == "number"
      ? { width: a, height: l }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
var Cm = "__LAYOUT_TREE_ROOT",
  fk = S.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  LD = class extends Ee {
    constructor() {
      (super(...arguments),
        R(this, "shouldAnimate", !1),
        R(this, "transition"),
        R(this, "lead"),
        R(this, "follow"),
        R(this, "scheduledPromotion", !1),
        R(this, "scheduledDidUpdate", !1),
        R(this, "scheduleProjectionDidUpdate", () => {
          this.scheduledDidUpdate = !0;
        }),
        R(this, "schedulePromoteTree", (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        }),
        R(this, "initLead", (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        }),
        R(this, "sharedLayoutContext", {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        }));
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === Cm &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return k(fk.Provider, {
        value: this.sharedLayoutContext,
        children: this.props.children,
      });
    }
  },
  OD = { width: "100%", height: "100%", backgroundColor: "none" };
function DD(e) {
  return k(Qe.div, { layoutId: Cm, style: OD, children: e.children });
}
var AD = class {
    constructor(e) {
      (R(this, "sharedIntersectionObserver"),
        R(this, "callbacks", new WeakMap()),
        document &&
          (this.sharedIntersectionObserver = new IntersectionObserver(
            this.resizeObserverCallback.bind(this),
            e,
          )));
    }
    resizeObserverCallback(e, t) {
      for (let n of e) {
        let r = this.callbacks.get(n.target);
        r && r([n], t);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
    }
    unobserve(e) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(e),
        this.callbacks.delete(e));
    }
    get root() {
      var e;
      return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root;
    }
  },
  VD = S.createContext(new Map());
function BD(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = Ut(() => `${n.rootMargin}`),
    i = S.useContext(VD),
    { enabled: o } = n;
  S.useEffect(() => {
    var s;
    let a = e.current;
    if (!o || !a) return;
    let l = i.get(r);
    if (!l || l.root !== ((s = n.root) == null ? void 0 : s.current)) {
      let { root: c, ...u } = n;
      ((l = new AD({ ...u, root: c?.current })), i.set(r, l));
    }
    return (l.observeElementWithCallback(a, t), () => l?.unobserve(a));
  }, [o]);
}
var $D = new Array(100).fill(void 0).map((e, t) => t * 0.01),
  zD = S.createContext(null);
function ND(e, t, n) {
  let r = S.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: o,
      threshold: s,
      rootMargin: a = "0px 0px 0px 0px",
    } = n,
    l = S.useCallback(
      ([c]) => {
        if (!c) return;
        let { isInView: u, hasAnimatedOnce: f } = r.current,
          d = jD(c, s?.y ?? 0);
        if (d && !u) {
          if (o && f) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!d && u) {
          if (((r.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t],
    );
  BD(e, l, { threshold: $D, rootMargin: a, enabled: i ?? !0 });
}
function HD(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Ge.innerHeight);
}
function jD(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r,
) {
  return e.height === 0 ? n : n && HD(t, e) >= r;
}
var EN = jn(Ru(), 1);
var PN = jn(Ru(), 1);
var Rw = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  Sr = Symbol("private"),
  $p = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [Sr]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new VS(),
            reset() {
              for (let s in o)
                if (Rw(o, s)) {
                  let a = Rw(t, s) ? qe(t)[s] : void 0;
                  a !== void 0 ? (o[s] = a) : delete o[s];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, UD);
      return (Object.assign(o, t), o);
    }
    return (
      (e.resetObject = (t) => t[Sr].reset()),
      (e.addObserver = (t, n) => t[Sr].observers.add(n)),
      e
    );
  })(),
  WD = class {
    constructor() {
      (R(this, "set", (e, t, n, r) => {
        if (t === Sr) return !1;
        let i = e[Sr],
          o,
          s;
        if (
          (Mn(n) ? ((o = n), (s = o.get())) : (s = n),
          i.makeAnimatables &&
            typeof n != "function" &&
            typeof n != "object" &&
            !o &&
            (o = nt(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              (d && u.add(d), i.observers.notify({ value: r }, d));
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let a = !1,
          l = !0,
          c = qe(e)[t];
        if (c !== void 0) {
          Mn(c)
            ? ((l = c.get() !== s), c.set(s))
            : ((l = c !== s), (qe(e)[t] = s));
          let u = s !== null && typeof s == "object";
          ((Array.isArray(s) || u) && (l = !0), (a = !0));
        } else (o && (n = o), (a = Reflect.set(e, t, n)));
        return (l && i.observers.notify({ value: r }), a);
      }),
        R(this, "get", (e, t, n) => {
          if (t === Sr) return qe(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == "function" ? r.bind(n) : r;
        }));
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return (e[Sr].observers.notify({ value: e }), n);
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(Sr);
      return (n !== -1 && t.splice(n, 1), t);
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== Sr) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  UD = new WD();
var XD = "opacity";
function YD(e) {
  return XD in e;
}
function GD(e, t) {
  if (!YD(e)) return;
  let n = nt.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function qD(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`,
    );
    t.push(...n);
  }
  return t;
}
function dk(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(", ");
  n && (t.textShadow = n);
}
function KD(e, t) {
  let n = [];
  (J(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    J(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    J(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    J(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    J(e.invert) && n.push(`invert(${e.invert / 100})`),
    J(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    J(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    J(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...qD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" ")));
}
function QD(e, t) {
  J(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Tm(e, t) {
  (QD(e, t), KD(e, t));
}
var ZD = class extends Ee {
    constructor() {
      (super(...arguments),
        R(this, "layoutMaybeMutated"),
        R(this, "projectionNodes", new Map()),
        R(this, "rootProjectionNode"),
        R(this, "isExiting"),
        R(
          this,
          "shouldPreserveFollowOpacity",
          (e) => e.options.layoutId === Cm && !this.props.isExiting,
        ),
        R(this, "switchLayoutGroupContext", {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        }));
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout,
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: s,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let a = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = a || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? s.schedulePromoteTree(this, o, !!i)
          : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return k(vl.Provider, {
        value: this.switchLayoutGroupContext,
        children: this.props.children,
      });
    }
  },
  JD = (e) => {
    let t = S.useContext(fk);
    return k(ZD, { ...e, sharedLayoutContext: t });
  },
  eA = S.createContext(!0);
function tA() {
  return new Map();
}
function nA() {
  return Ut(tA);
}
var hk = xe({ register: () => {}, deregister: () => {} }),
  rA = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = nA(),
      i = oe(
        (a) => {
          if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return;
          }
          r.set(a, void 0);
        },
        [r],
      ),
      o = oe(
        (a) => {
          let l = r.get(a);
          (l?.(), r.delete(a));
        },
        [r],
      ),
      s = A({ register: i, deregister: o }).current;
    return (
      N(
        () => (
          r.forEach((a, l) => {
            let c = l(e, t);
            r.set(l, ji(c) ? c : void 0);
          }),
          () => {
            r.forEach((a, l) => {
              a && (a(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r],
      ),
      k(hk.Provider, { value: s, children: n })
    );
  };
function pk(e, t = []) {
  let { register: n, deregister: r } = B(hk);
  N(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
var zp = S.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: s,
  children: a,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: h,
  instant: y,
  initialProps: g,
  exitProps: b,
  position: p = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: m,
  index: v,
  areMagicMotionLayersPresent: x,
  id: C,
  isInitial: w,
}) {
  let E = p0(),
    T = B(io),
    { persistLayoutIdCache: F } = B(qo),
    _ = A({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: Pw({}, g, s),
    }),
    $ = A(null),
    D = T !== null && !T.isPresent;
  (n && _.current.wasCurrent === void 0 && F(),
    N(() => {
      if (t || !E) return;
      if (D) {
        _.current = { ..._.current, wasBeingRemoved: D };
        return;
      }
      let { wasPrevious: de, wasCurrent: ie } = _.current,
        ut = (n && !ie) || (!D && _.current.wasBeingRemoved && n),
        Te = r && !de,
        Rt = Pw(_.current.origins, g, s),
        be = _.current.wasReset;
      (ut || Te
        ? (E.stop(), E.start({ zIndex: v, ...Rt, ...s }), (be = !1))
        : be === !1 &&
          (E.stop(), E.set({ zIndex: v, ...Bi, opacity: 0 }), (be = !0)),
        (_.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: be,
          origins: Rt,
        }));
    }, [n, r, D]));
  let q = y ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d,
    W = y ? { type: !1 } : h || d,
    H = { ...p };
  ((H.left === void 0 || H.right === void 0) && (H.width = "auto"),
    (H.top === void 0 || H.bottom === void 0) && (H.height = "auto"));
  let ee = (_w(s) || _w(g)) && (t || n || r) ? 1200 : void 0,
    te = { ...Bi, ..._.current.origins },
    Y = t
      ? {
          initial: { ...te, ...g },
          animate: { ...te, ...s, transition: q },
          exit: { ...te, ...b, transition: d },
        }
      : { animate: E, exit: { ...te, ...b, transition: W } },
    ne = !(D || x === !1),
    ge = !!n && ne;
  return se(cu, {
    "data-framer-component-type": "NavigationContainerWrapper",
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      transformStyle: "flat",
      backgroundColor: "transparent",
      overflow: "hidden",
      zIndex: t || D || (n && m) ? v : void 0,
      pointerEvents: void 0,
      visibility: o ? "visible" : "hidden",
      perspective: ee,
    },
    children: [
      t &&
        k(cu, {
          width: "100%",
          height: "100%",
          "data-framer-component-type": "NavigationContainerBackdrop",
          transition: d,
          initial: { opacity: y && o ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: l || "transparent",
          onTap: D ? void 0 : c,
        }),
      k(cu, {
        ...H,
        ...Y,
        transition: {
          default: q,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: "transparent",
        backfaceVisible: D ? f : u,
        "data-framer-component-type": "NavigationContainer",
        "data-framer-is-current-navigation-target": !!n,
        style: {
          pointerEvents: void 0,
          opacity: (n && w) || t || (n && m) ? 1 : 0,
        },
        "data-is-present": ne ? void 0 : !1,
        ref: $,
        children: k(zD.Provider, {
          value: $,
          children: k(eA.Provider, {
            value: ge,
            children: k(rA, {
              isCurrent: ge,
              isOverlayed: i,
              children: k(JD, {
                isLead: n,
                animatesLayout: !!m,
                transition: q,
                isExiting: !ne,
                isOverlayed: i,
                id: C,
                children: a,
              }),
            }),
          }),
        }),
      }),
    ],
  });
}, iA);
function iA(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Pw(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (J(t.originX) && (r.originX = t.originX),
      J(t.originY) && (r.originY = t.originY),
      J(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (J(n.originX) && (r.originX = n.originX),
      J(n.originY) && (r.originY = n.originY),
      J(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function _w(e) {
  var t, n, r;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    s =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || s;
}
var Bi = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  oA = class {
    constructor() {
      (R(this, "warning", () => {
        Ea(
          "The Navigator API is only available inside of Framer: https://www.framer.com/",
        );
      }),
        R(this, "goBack", () => this.warning()),
        R(this, "instant", () => this.warning()),
        R(this, "fade", () => this.warning()),
        R(this, "push", () => this.warning()),
        R(this, "modal", () => this.warning()),
        R(this, "overlay", () => this.warning()),
        R(this, "flip", () => this.warning()),
        R(this, "customTransition", () => this.warning()),
        R(this, "magicMotion", () => this.warning()));
    }
  },
  sA = new oA(),
  aA = xe(sA),
  at = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } },
    PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } },
    PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } },
    PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: "100%" },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: "-100%" },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: "100%" },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: "-100%" },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function lA(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return at.PushLeft;
    case "left":
      return at.PushRight;
    case "bottom":
      return at.PushUp;
    case "top":
      return at.PushDown;
  }
}
function cA(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return at.OverlayLeft;
    case "left":
      return at.OverlayRight;
    case "bottom":
      return at.OverlayUp;
    case "top":
      return at.OverlayDown;
  }
}
function uA(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return at.FlipLeft;
    case "left":
      return at.FlipRight;
    case "bottom":
      return at.FlipUp;
    case "top":
      return at.FlipDown;
  }
}
var fA = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function Iw(e, t) {
  switch (t.type) {
    case "addOverlay":
      return hA(e, t.transition, t.component);
    case "removeOverlay":
      return pA(e);
    case "add":
      return mk(e, t.key, t.transition, t.component);
    case "remove":
      return vk(e);
    case "update":
      return dA(e, t.key, t.component);
    case "back":
      return mA(e);
    case "forward":
      return vA(e);
    default:
      return;
  }
}
function dA(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function hA(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function pA(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function mk(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let s = e.containerVisualIndex[t],
    a = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? xA(t, s, a, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let y in e.containerIndex)
    e.containerIndex[y] === c && (e.containerIndex[y] = bA(y, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = gA(e, t, l),
    h = gk(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: h,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function mA(e) {
  let t = { ...e.containers },
    n = vk(e);
  if (n) return ((n.containers = t), n);
}
function vA(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    s = mk(e, n, r, i);
  if (s) return ((s.history = o), s);
}
function vk(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (ce(r, "The navigation history must have at least one component"),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key]);
  let o = e.current - 1,
    s = e.current,
    {
      containerIsRemoved: a,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = yA(e, r, n),
    f = gk(o, s, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: s,
    containerIsRemoved: a,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function gA(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    ((r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1));
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, s] of Object.entries(e.containerVisualIndex))
      i !== void 0 && s > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function yA(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    s = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let a = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (a !== void 0 && l !== void 0 && a <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((s.containerIsRemoved[n.key] = !0),
        (s.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((s.visualIndex = e.visualIndex + 1),
        (s.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (s.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    s
  );
}
function bA(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function gk(e, t, n, r, i) {
  let o = { ...i };
  for (let [s, a] of Object.entries(r)) {
    let l = wA(a, { current: e, previous: t, history: n });
    l && (o[s] = l);
  }
  return o;
}
function xA(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((s) => s.key === e) > -1
        ? !0
        : !(r.slice(0, t - 1).findIndex((s) => s.key === e) > -1);
}
function wA(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return tu("enter", o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return tu("exit", o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return tu("enter", o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return tu("exit", o?.transition.enter, o?.transition.animation);
    }
  }
}
var SA = Wi(Bi);
function tu(e, t, n) {
  let r = {},
    i = {};
  return (
    SA.forEach((o) => {
      ((r[o] = Bi[o]), (i[o] = { ...n, from: Bi[o] }));
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let s = t[o],
          a = typeof t[o] == "string" ? `${qe(Bi)[o]}%` : qe(Bi)[o];
        ((qe(r)[o] = e === "enter" ? a : s),
          (i[o] = { ...n, from: e === "enter" ? s : a, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
var kA = S.createContext(void 0);
var yk = S.createContext(void 0),
  CA = (() => {
    var e, t, n, r, i, o, s, a, l;
    return (
      (t = class extends Ee {
        constructor(c) {
          var u;
          (super(c),
            Kt(this, n),
            Kt(this, i),
            Kt(this, a),
            Kt(this, e, null),
            R(this, "state", fA()),
            Kt(this, s, (b) => {
              if (!this.props.enabled && this.state.history.length > 0) return;
              let p = Iw(this.state, b);
              if (!p) return;
              let { skipLayoutAnimation: m } = this.props,
                v = p.history[p.current],
                x =
                  (b.type === "add" && b.transition.withMagicMotion) ||
                  (b.type === "forward" && v?.transition.withMagicMotion) ||
                  (b.type === "remove" && !!p.previousTransition),
                C = () => {
                  var w;
                  (this.setState(p),
                    v?.key &&
                      ((w = this.context) == null || w.call(this, v.key)));
                };
              m && !x ? m(C) : C();
            }),
            R(this, "goBack", () => {
              var b;
              if (!Vt(this, i, o).call(this))
                return (
                  Ef(
                    this,
                    e,
                    ((b = globalThis.event) == null ? void 0 : b.timeStamp) ||
                      null,
                  ),
                  this.state.currentOverlay !== -1
                    ? ue(this, s).call(this, { type: "removeOverlay" })
                    : ue(this, s).call(this, { type: "remove" })
                );
            }));
          let f = this.props.children;
          if (!f || !au(f) || !su(f)) return;
          let d = { ...at.Instant },
            y = {
              type: "add",
              key:
                ((u = f.key) == null ? void 0 : u.toString()) ||
                `stack-${this.state.historyItemId + 1}`,
              transition: d,
              component: f,
            },
            g = Iw(this.state, y);
          g && (this.state = g);
        }
        componentDidMount() {
          var c;
          let u = this.state.history[this.state.current];
          u && ((c = this.context) == null || c.call(this, u.key));
        }
        UNSAFE_componentWillReceiveProps(c) {
          var u;
          let f = c.children;
          if (!au(f) || !su(f)) return;
          let d = (u = f.key) == null ? void 0 : u.toString();
          d &&
            (this.state.history.length === 0
              ? Vt(this, a, l).call(this, f, at.Instant)
              : ue(this, s).call(this, {
                  type: "update",
                  key: d,
                  component: f,
                }));
        }
        componentWillUnmount() {
          var c, u;
          (u = (c = this.props).resetProjection) == null || u.call(c);
        }
        instant(c) {
          Vt(this, a, l).call(this, c, at.Instant, void 0);
        }
        fade(c, u) {
          Vt(this, a, l).call(this, c, at.Fade, u);
        }
        push(c, u) {
          Vt(this, a, l).call(this, c, lA(u), u);
        }
        modal(c, u) {
          Vt(this, a, l).call(this, c, at.Modal, u);
        }
        overlay(c, u) {
          Vt(this, a, l).call(this, c, cA(u), u);
        }
        flip(c, u) {
          Vt(this, a, l).call(this, c, uA(u), u);
        }
        magicMotion(c, u) {
          Vt(this, a, l).call(this, c, at.MagicMotion, u);
        }
        customTransition(c, u) {
          Vt(this, a, l).call(this, c, u);
        }
        render() {
          var c, u, f, d, h;
          let y = Vt(this, n, r).call(this, { overCurrentContext: !1 }),
            g = Vt(this, n, r).call(this, { overCurrentContext: !0 }),
            b = TA(g),
            p = g.current > -1,
            m = this.state.history.length === 1,
            v = [];
          for (let [C, w] of Object.entries(this.state.containers)) {
            let E = this.state.containerIndex[C];
            ce(E !== void 0, "Container's index must be registered");
            let T = this.state.containerVisualIndex[C];
            ce(T !== void 0, "Container's visual index must be registered");
            let F = this.state.containerIsRemoved[C],
              _ = this.state.history[E],
              $ = this.state.transitionForContainer[C],
              D = E === this.state.current,
              q = E === this.state.previous,
              W = D ? !1 : F,
              H =
                ((c = _?.transition) == null ? void 0 : c.withMagicMotion) ||
                (D && !!this.state.previousTransition);
            v.push(
              k(
                zp,
                {
                  id: C,
                  index: T,
                  isInitial: m,
                  isCurrent: D,
                  isPrevious: q,
                  isOverlayed: p,
                  visible: D || q,
                  position: (u = _?.transition) == null ? void 0 : u.position,
                  instant: Mw(E, y),
                  transitionProps: $,
                  animation: Fw(E, y),
                  backfaceVisible: MA(E, y),
                  exitAnimation:
                    (f = _?.transition) == null ? void 0 : f.animation,
                  exitBackfaceVisible:
                    (d = _?.transition) == null ? void 0 : d.backfaceVisible,
                  exitProps: (h = _?.transition) == null ? void 0 : h.enter,
                  withMagicMotion: H,
                  areMagicMotionLayersPresent: W ? !1 : void 0,
                  children: k(DD, {
                    children: Lw({ component: w, transition: _?.transition }),
                  }),
                },
                C,
              ),
            );
          }
          let x = this.state.overlayStack.map((C, w) =>
            k(
              zp,
              {
                isLayeredContainer: !0,
                isCurrent: w === this.state.currentOverlay,
                position: C.transition.position,
                initialProps: FA(w, g),
                transitionProps: LA(w, g),
                instant: Mw(w, g, !0),
                animation: Fw(w, g),
                exitProps: C.transition.enter,
                visible: OA(w, g),
                backdropColor: _A(C.transition),
                backfaceVisible: IA(w, g),
                onTapBackdrop: DA(C.transition, this.goBack),
                index: this.state.current + 1 + w,
                children: Lw({
                  component: C.component,
                  transition: C.transition,
                }),
              },
              C.key,
            ),
          );
          return k(cu, {
            "data-framer-component-type": "NavigationRoot",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            style: {
              overflow: "hidden",
              backgroundColor: "unset",
              pointerEvents: void 0,
              ...this.props.style,
            },
            children: k(aA.Provider, {
              value: this,
              children: se(yk.Provider, {
                value: m,
                children: [
                  k(zp, {
                    isLayeredContainer: !0,
                    position: void 0,
                    initialProps: {},
                    instant: !1,
                    transitionProps: EA(b),
                    animation: RA(b),
                    backfaceVisible: PA(b),
                    visible: !0,
                    backdropColor: void 0,
                    onTapBackdrop: void 0,
                    index: 0,
                    children: k(GM, {
                      children: k(LD, {
                        children: k(hd, {
                          presenceAffectsLayout: !1,
                          children: v,
                        }),
                      }),
                    }),
                  }),
                  k(hd, { children: x }),
                ],
              }),
            }),
          });
        }
      }),
      (e = new WeakMap()),
      (n = new WeakSet()),
      (r = function (c) {
        let {
          current: u,
          previous: f,
          currentOverlay: d,
          previousOverlay: h,
        } = this.state;
        return c.overCurrentContext
          ? { current: d, previous: h, history: this.state.overlayStack }
          : { current: u, previous: f, history: this.state.history };
      }),
      (i = new WeakSet()),
      (o = function () {
        return globalThis.event
          ? ue(this, e) === globalThis.event.timeStamp
          : !1;
      }),
      (s = new WeakMap()),
      (a = new WeakSet()),
      (l = function (c, u, f) {
        var d, h;
        if (
          Vt(this, i, o).call(this) ||
          (Ef(
            this,
            e,
            ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null,
          ),
          !c || !au(c) || !su(c))
        )
          return;
        let y = { ...u, ...f };
        if (!!y.overCurrentContext)
          return ue(this, s).call(this, {
            type: "addOverlay",
            transition: y,
            component: c,
          });
        let b =
          ((h = c.key) == null ? void 0 : h.toString()) ||
          `stack-${this.state.historyItemId + 1}`;
        ue(this, s).call(this, {
          type: "add",
          key: b,
          transition: y,
          component: c,
        });
      }),
      R(t, "defaultProps", { enabled: !0 }),
      R(t, "contextType", kA),
      t
    );
  })(),
  bk = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function TA(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function EA({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function RA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : bk;
}
function PA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function _A(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return "rgba(4,4,15,.4)";
}
function IA(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function FA(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function MA(e, t) {
  var n, r, i, o;
  let { current: s, previous: a, history: l } = t;
  return (e === a && s > a) || (e === s && s < a)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
      ? void 0
      : o.backfaceVisible;
}
function LA(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function Fw(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let s = i[e + 1];
    if (s && s.transition.animation) return s.transition.animation;
  } else if (e !== o) {
    let s = i[e];
    if (s && s.transition.animation) return s.transition.animation;
  } else {
    let s = i[e];
    if (s?.transition.animation) return s.transition.animation;
  }
  return bk;
}
function Mw(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function OA(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Lw(e) {
  return S.Children.map(e.component, (n) => {
    var r;
    if (!au(n) || !su(n) || !n.props) return n;
    let i = { style: n.props.style ?? {} },
      o = (r = e?.transition) == null ? void 0 : r.position,
      s = !o || (o.left !== void 0 && o.right !== void 0),
      a = !o || (o.top !== void 0 && o.bottom !== void 0),
      l = "style" in n.props ? Se(n.props.style) : !0;
    return (
      s &&
        ("width" in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
      a &&
        ("height" in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
      S.cloneElement(n, i)
    );
  });
}
function DA(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function AA(e) {
  let t = g0(),
    n = vd();
  return (
    S.useInsertionEffect(() => {
      Na();
    }, []),
    k(CA, {
      ...e,
      resetProjection: t,
      skipLayoutAnimation: n,
      children: e.children,
    })
  );
}
var WN = jn(Ru(), 1);
var qN = jn(fm(), 1);
function VA(e, t) {
  let n,
    r = (...o) => {
      (Ge.clearTimeout(n), (n = Ge.setTimeout(e, t, ...o)));
    },
    i = () => {
      Ge.clearTimeout(n);
    };
  return ((r.cancel = i), r);
}
function Ui(...e) {
  return e.filter(Boolean).join(" ");
}
var BA = (() => {
    function e(t = {}) {
      let n = $p(t, !1, !1);
      return (e.addData(n), n);
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => $p.resetObject(t));
      }),
      (e.addObserver = (t, n) => $p.addObserver(t, n)),
      e
    );
  })(),
  Np = BA;
var $A = { update: 0 },
  xk = S.createContext({ update: NaN });
function w8() {
  let e = S.useContext(xk);
  return !isNaN(e.update);
}
var zA = class extends Ee {
    constructor() {
      (super(...arguments),
        R(this, "observers", []),
        R(this, "state", $A),
        R(this, "taskAdded", !1),
        R(this, "frameTask", () => {
          (this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1));
        }),
        R(this, "observer", () => {
          this.taskAdded ||
            ((this.taskAdded = !0), zS.addFrameTask(this.frameTask));
        }));
    }
    componentWillUnmount() {
      (this.observers.map((e) => e()), Np.reset());
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        Np._stores.forEach((t) => {
          let n = Np.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        k(xk.Provider, { value: { ...this.state }, children: e })
      );
    }
  },
  S8 = jn(Ru(), 1);
var wk = "__framer__",
  NA = (() => wk.length)();
function HA(e) {
  if (e.startsWith(wk)) return e.substr(NA);
}
var tr = [
    "opacity",
    "x",
    "y",
    "scale",
    "rotate",
    "rotateX",
    "rotateY",
    "skewX",
    "skewY",
    "transformPerspective",
  ],
  wu = (e) => ({
    x: He(e?.x ?? 0),
    y: He(e?.y ?? 0),
    opacity: He(e?.opacity ?? 1),
    scale: He(e?.scale ?? 1),
    rotate: He(e?.rotate ?? 0),
    rotateX: He(e?.rotateX ?? 0),
    rotateY: He(e?.rotateY ?? 0),
    skewX: He(e?.skewX ?? 0),
    skewY: He(e?.skewY ?? 0),
    transformPerspective: He(e?.transformPerspective ?? 0),
  }),
  Ye = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0,
  };
function Sk(e) {
  return e in Ye;
}
function kk(e, t) {
  let n = Ut(() => ({ values: wu(t ? e : void 0) }));
  return (
    S.useEffect(() => {
      if (!t)
        for (let r of tr) {
          let i = Ye[r];
          ct(i) || n.values[r].set(i);
        }
    }, [n, t]),
    n
  );
}
var jA = new Set([
    "loopEffectEnabled",
    "loopTransition",
    "loop",
    "loopRepeatType",
    "loopRepeatDelay",
  ]),
  WA = () => {
    let e = A();
    return (
      N(
        () => () => {
          clearTimeout(e.current);
        },
        [],
      ),
      async (t) =>
        new Promise((n) => {
          e.current = setTimeout(() => {
            n(!0);
          }, t * 1e3);
        })
    );
  };
function UA({
  loopEffectEnabled: e,
  loopRepeatDelay: t,
  loopTransition: n,
  loopRepeatType: r,
  loop: i,
}) {
  let o = bi(),
    s = Ut(() => ({ values: wu() })),
    a = S.useRef(!1),
    l = WA(),
    c = async () => {
      if (!i) return;
      let d = n || void 0,
        h = a.current && r === "mirror",
        y = h ? Ye : i,
        g = h ? i : Ye;
      return (
        (a.current = !a.current),
        Promise.all(
          tr.map((b) => {
            if (!(o && b !== "opacity"))
              return (
                s.values[b].set(g[b] ?? Ye[b]),
                new Promise((p) => {
                  let m = { ...d, onComplete: () => p() };
                  Un(s.values[b], y[b] ?? g[b], m);
                })
              );
          }),
        )
      );
    },
    u = async () => {
      e && (await c(), await l(t ?? 0), await u());
    },
    f = oe(() => {
      (tr.forEach((d) => {
        s.values[d].stop();
      }),
        tr.forEach((d) => {
          s.values[d].set(Ye[d]);
        }),
        (a.current = !1));
    }, [s]);
  return (S.useEffect(() => (e && i ? u() : f(), () => f()), [e]), s);
}
function XA(e, t, n, r, i) {
  let o = n / 100 - 1,
    s = i ? (t - r) * o : 0,
    a = -e * o;
  return s + a;
}
var YA = new Set([
  "speed",
  "adjustPosition",
  "offset",
  "parallaxTransformEnabled",
]);
function GA(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: s,
    } = e,
    a = S.useRef(null),
    l = bi(),
    c = S.useCallback(
      (y) => (a.current === null || r === 100 ? 0 : XA(y, a.current, r, i, o)),
      [a, r, i, o],
    );
  S.useLayoutEffect(() => {
    (G.read(() => {
      var y, g;
      a.current =
        ((g = (y = t.current) == null ? void 0 : y.getBoundingClientRect()) ==
        null
          ? void 0
          : g.top) ?? 0;
    }),
      G.update(() => {
        (f.set(c(u.get())), o && d.set(n ?? "initial"));
      }));
  }, [t, a, o]);
  let { scrollY: u } = a0(),
    f = It(u, c),
    d = Wn(o && a.current === null ? "hidden" : n),
    h = Wn(0);
  return {
    values: { y: l || !s ? h : f },
    style: s ? { visibility: d } : void 0,
  };
}
function qA(e) {
  if (!(fe(e) || !Se(e))) return e?.transition;
}
async function Hp(e, t, n, r, i, o) {
  let s = qA(e);
  return Promise.all(
    tr.map(
      (a) =>
        new Promise((l) => {
          if (n && a !== "opacity") return l();
          let c = t.values[a];
          c.stop();
          let u = Se(e) ? (e?.[a] ?? Ye[a]) : Ye[a];
          if ((Fe(u) && (u = u.get()), !$e(u))) return l();
          let f = ar.get(r.current);
          f && f.setBaseTarget(a, u);
          let d =
            fe(i) && !c?.hasAnimated && Ge.HandoffAppearAnimations
              ? { elapsed: Ge.HandoffAppearAnimations(i, a, c, G) }
              : void 0;
          o
            ? c.set(u)
            : Un(c, u, {
                ...s,
                velocity: 0,
                elapsed: 0,
                ...d,
                onComplete: () => l(),
              });
        }),
    ),
  );
}
var KA = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function QA(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: o,
  },
  s,
  a,
  l,
  c,
) {
  let u = r ?? e,
    f = i ?? t,
    d = o ?? n,
    [h, y] = id(),
    g = A({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    b = Ut(() => {
      let m = u ?? l;
      if (!Se(m)) return { values: wu() };
      let v = {};
      for (let x in m) {
        let C = Se(m) ? m[x] : void 0;
        $e(C) && (v[x] = C);
      }
      return { values: wu(v) };
    });
  ht(() => {
    let { hasMounted: m } = g.current;
    if (m && f) return;
    let v = ar.get(s.current);
    if (v) {
      Object.assign(g.current, { hasMounted: !0 });
      for (let x in b.values) {
        if (!Sk(x)) continue;
        let C = l?.[x];
        v.setBaseTarget(x, $e(C) ? C : Ye[x]);
      }
    }
  }, [f]);
  let p = bi();
  return (
    ht(() => {
      if (!a) {
        y?.();
        return;
      }
      if (h !== g.current.lastPresence)
        (Object.assign(g.current, { lastPresence: h }),
          h
            ? u &&
              f &&
              (Object.assign(g.current, { running: !0 }),
              Hp(f, b, p, s, c).then(() =>
                Object.assign(g.current, { running: !1 }),
              ))
            : d
              ? (Object.assign(g.current, { running: !0 }),
                Hp(d, b, p, s, c)
                  .then(() => Object.assign(g.current, { running: !1 }))
                  .then(() => y()))
              : y());
      else {
        let { lastAnimate: m, running: v } = g.current;
        if (!!We(f, m) || !f) return;
        (Object.assign(g.current, { lastAnimate: f }),
          Hp(f, b, p, s, c, !v).then(() =>
            Object.assign(g.current, { running: !1 }),
          ));
      }
    }),
    b
  );
}
function ZA(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
var JA = 1;
function Ck(e, t = 0, n) {
  var r;
  let i = [],
    o = [];
  for (let s = e.length; s >= 0; s--) {
    let { ref: a, offset: l } = e[s] ?? {};
    if (!a || !a.current) continue;
    let u = ZA(a.current, document.documentElement) - JA - (l ?? 0) - t,
      f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0,
      d = i[i.length - 1],
      h = Math.max(u + f, 0);
    (i.push(u),
      o.unshift(
        Math.max(u, 0),
        d === void 0 ? h : Math.min(h, Math.max(d - 1, 0)),
      ),
      n?.(s));
  }
  return o;
}
function eV(e, t = 0) {
  return e < t ? "up" : "down";
}
var tV = 4;
function nV(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n;
  S.useEffect(() => {
    if (!r || !s) return;
    let a,
      l = 0,
      c,
      u;
    return co(({ y: f }) => {
      if ((!o && u === i) || f.current > f.scrollLength || f.current < 0)
        return;
      let d = eV(f.current, a);
      a = f.current;
      let h = d !== c;
      if (((c = d), h)) l = f.current;
      else {
        if (Math.abs(f.current - l) < tV) return;
        let g = d === r ? i : void 0;
        (g !== u && t(g), (u = g));
      }
    });
  }, [r, o, i, s, t]);
}
var rV = new Set([
    "threshold",
    "animateOnce",
    "opacity",
    "targetOpacity",
    "x",
    "y",
    "scale",
    "transition",
    "rotate",
    "rotateX",
    "rotateY",
    "perspective",
    "enter",
    "exit",
    "animate",
    "styleAppearEffectEnabled",
    "targets",
    "scrollDirection",
  ]),
  iV = ["animate", "animate"],
  Ow = { inputRange: [], outputRange: [] };
function oV(e, t, n) {
  let r = Ck(e, t),
    i = [...iV],
    o = r[0];
  if (!$e(o)) return Ow;
  if ((o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n)) {
    let s = r.length - 1,
      a = r[s];
    if (!$e(a)) return Ow;
    (r.push(a + 1), i.push("exit"));
  }
  return { inputRange: r, outputRange: i };
}
function jp(e) {
  return {
    x: e?.x ?? Ye.x,
    y: e?.y ?? Ye.y,
    scale: e?.scale ?? Ye.scale,
    opacity: e?.opacity ?? Ye.opacity,
    transformPerspective: e?.transformPerspective ?? Ye.transformPerspective,
    rotate: e?.rotate ?? Ye.rotate,
    rotateX: e?.rotateX ?? Ye.rotateX,
    rotateY: e?.rotateY ?? Ye.rotateY,
    skewX: e?.skewX ?? Ye.skewX,
    skewY: e?.skewY ?? Ye.skewY,
    transition: e?.transition ?? void 0,
  };
}
function sV({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: o,
  ...s
}) {
  return S.useMemo(
    () => ({
      initial: r ?? jp({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? jp({ opacity: t }),
      exit: i ?? jp(),
    }),
    [o, s, r, i, e, t, n],
  );
}
function aV(e, t) {
  let n = bi(),
    r = sV(e),
    i = e.styleAppearEffectEnabled,
    o = kk(i ? r.initial : r.animate, i),
    s = S.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    a = S.useRef(),
    l = S.useCallback(async ({ transition: d, ...h }, y) => {
      let g = d ?? r.animate.transition ?? e.transition;
      (await a.current,
        (a.current = Promise.all(
          tr.map((b) => {
            y && o.values[b].set(r.initial[b] ?? Ye[b]);
            let p = h[b] ?? Ye[b],
              m = ar.get(t.current);
            return (
              m && typeof p != "object" && m.setBaseTarget(b, p),
              new Promise((v) => {
                if (n && b !== "opacity") ($e(p) && o.values[b].set(p), v());
                else {
                  let x = {
                    restDelta: b === "scale" ? 0.001 : void 0,
                    ...g,
                    onComplete: () => v(),
                  };
                  Un(o.values[b], p, x);
                }
              })
            );
          }),
        )));
    }, []),
    c = e.animateOnce && s.current.lastAppearState === !0,
    u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
  ND(
    t,
    (d) => {
      let { isPlaying: h, lastAppearState: y } = s.current;
      if (h) {
        s.current.scheduledAppearState = d;
        return;
      }
      ((s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = d),
        y !== d && l(d ? r.animate : r.exit, d));
    },
    { enabled: u, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } },
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    S.useEffect(() => {
      if (!f) return;
      let d = { initial: !0 },
        h = "initial";
      return co(({ y }) => {
        let { targets: g } = e;
        if (!g || !g[0] || (g[0].ref && !g[0].ref.current)) return;
        let { inputRange: b, outputRange: p } = oV(
          g,
          (e.threshold ?? 0) * y.containerLength,
          !!e.exit,
        );
        if (b.length === 0 || b.length !== p.length) return;
        let m = Es(y.current, b, p);
        if ((e.animateOnce && d[m]) || ((d[m] = !0), h === m)) return;
        h = m;
        let v = qe(r)[m];
        v && l(v);
      });
    }, [f]),
    nV(e.scrollDirection, (d) => l(d ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    o
  );
}
var lV = new Set([
    "transformViewportThreshold",
    "styleTransformEffectEnabled",
    "transformTargets",
    "spring",
    "transformTrigger",
  ]),
  cV = (e, t) => {
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? { opacity: r?.opacity ?? 1 } : r;
  },
  Tk = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: [],
  });
function uV(e, t) {
  let n = S.useRef({});
  S.useEffect(() => {
    if (t !== void 0)
      for (let r of Wi(e)) {
        let i = e[r];
        i.attach((o, s) => {
          let a = n.current[r];
          if (
            (a && a.stop(),
            (n.current[r] = Yf({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: s,
            })),
            !Ne.isProcessing)
          ) {
            let l = performance.now() - Ne.timestamp;
            l < 40 && (n.current[r].time = l / 1e3);
          }
          return i.get();
        });
      }
  }, [JSON.stringify(t)]);
}
function fV(e, t) {
  let n = Tk();
  return {
    inputRange: Ck(e, t, (i) => {
      var o, s, a;
      let l = (o = e[i - 1]) == null ? void 0 : o.target,
        c = (s = e[i]) == null ? void 0 : s.target;
      for (let u of tr)
        (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function dV(e) {
  var t;
  let n = Tk();
  for (let { target: r } of e)
    for (let i of tr) (t = n[i]) == null || t.push(r[i]);
  return n;
}
var Dw = [0, 1];
function hV(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  o,
) {
  let s = bi(),
    a = kk(cV(n, s), t);
  return (
    S.useLayoutEffect(() => {
      if (!(!t || !n))
        if (e !== "onScrollTarget") {
          let l = dV(n);
          return co(
            ({ y: c }) => {
              for (let u of tr)
                (s && u !== "opacity") ||
                  (Dw.length === l[u].length &&
                    l[u][0] !== void 0 &&
                    a.values[u].set(Es(c.progress, Dw, l[u])));
            },
            e === "onInView"
              ? {
                  target: o.current ?? void 0,
                  offset: ["start end", "end end"],
                }
              : void 0,
          );
        } else
          return co(({ y: l }) => {
            if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
            let { inputRange: c, effectKeyOutputRange: u } = fV(
              n,
              i * l.containerLength,
            );
            if (c.length !== 0)
              for (let f of tr)
                (s && f !== "opacity") ||
                  (c.length === u[f].length &&
                    u[f][0] !== void 0 &&
                    a.values[f].set(Es(l.current, c, u[f])));
          });
    }, [s, e, o, i, t, a, n]),
    uV(a.values, r),
    a
  );
}
var Ek = {
    parallax: YA,
    styleAppear: rV,
    styleTransform: lV,
    loop: jA,
    presence: KA,
  },
  pV = Wi(Ek);
function Aw(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function mV(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
  };
  for (let n in e) {
    let r = HA(n);
    if (r)
      for (let i of pV) {
        let o = Ek[i];
        if (o?.has(r)) {
          t[i][r] = qe(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = qe(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Aw(
      "parallaxTransformEnabled",
      "speed",
      t.parallax,
    )),
    (t.styleAppear.styleAppearEffectEnabled = Aw(
      "styleAppearEffectEnabled",
      "animateOnce",
      t.styleAppear,
    )),
    t
  );
}
var oi = (e) => e.reduce((t, n) => (t += n), 0),
  Vw = (e) => e.reduce((t, n) => (t = t * n), 1),
  vV = "current";
function gV(e) {
  return Se(e) && vV in e;
}
function yV(e, t) {
  if (!e || !Se(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Fe(r) || !Sk(n) || ($e(r.get()) && t[n].push(r));
  }
}
function ba(e) {
  return fe(e) || Array.isArray(e);
}
var bV = (e) =>
  S.forwardRef((t, n) => {
    if (t.__withFX)
      return k(e, {
        ...t,
        animate: void 0,
        initial: void 0,
        exit: void 0,
        ref: n,
      });
    if (ae.current() === ae.canvas) {
      let de = ba(t.animate) ? t.animate : void 0,
        ie = ba(t.initial) ? t.initial : void 0;
      return k(e, { ...t, animate: de, initial: ie, exit: void 0, ref: n });
    }
    let r = S.useRef(null),
      i = n ?? r,
      {
        parallax: o = {},
        styleAppear: s = {},
        styleTransform: a = {},
        presence: l = {},
        loop: c = {},
        forwardedProps: u,
      } = mV(t),
      {
        __targetOpacity: f,
        __perspectiveFX: d,
        __smartComponentFX: h = !1,
      } = t,
      y = Wn(f ?? 1),
      { values: g } = QA(l, i, h, t.style, t[pl]),
      { values: b, style: p } = GA(o, i),
      { values: m } = hV(a, i),
      { values: v } = aV(s, i),
      { values: x } = UA(c),
      C = S.useMemo(
        () => ({
          scale: [v.scale, x.scale, g.scale, m.scale],
          opacity: [v.opacity, x.opacity, g.opacity, y, m.opacity],
          x: [v.x, x.x, g.x, m.x],
          y: [v.y, x.y, b.y, g.y, m.y],
          rotate: [v.rotate, x.rotate, g.rotate, m.rotate],
          rotateX: [v.rotateX, x.rotateX, g.rotateX, m.rotateX],
          rotateY: [v.rotateY, x.rotateY, g.rotateY, m.rotateY],
          skewX: [v.skewX, x.skewX, g.skewX, m.skewX],
          skewY: [v.skewY, x.skewY, g.skewY, m.skewY],
          transformPerspective: [
            m.transformPerspective,
            v.transformPerspective,
          ],
        }),
        [y, m, b, v, x, g],
      );
    yV(t.style, C);
    let w = It(C.scale, Vw),
      E = It(C.opacity, Vw),
      T = It(C.x, oi),
      F = It(C.y, oi),
      _ = It(C.rotate, oi),
      $ = It(C.rotateX, oi),
      D = It(C.rotateY, oi),
      q = It(C.skewX, oi),
      W = It(C.skewY, oi),
      H = It(C.transformPerspective, oi),
      { drag: U, dragConstraints: ee } = u;
    QO(U && gV(ee) ? ee : void 0);
    let te = {
      opacity: E,
      scale: w,
      x: T,
      y: F,
      rotate: _,
      rotateX: $,
      rotateY: D,
      skewX: q,
      skewY: W,
    };
    ct(d) && (te.transformPerspective = H);
    let Y = ba(t.animate) ? t.animate : void 0,
      ne = ba(t.initial) ? t.initial : void 0,
      ge = ba(t.exit) ? t.exit : void 0,
      re = h && !l.presenceInitial ? { initial: ne, animate: Y, exit: ge } : {};
    return k(e, {
      ...u,
      ...re,
      __withFX: !0,
      style: { ...t.style, ...p, ...te },
      values: g,
      ref: i,
    });
  });
var O8 = bV;
function nm(e, t) {
  ji(e) ? e(t) : Rk(e) && (e.current = t);
}
function Rk(e) {
  return Se(e) && "current" in e;
}
function Bw(e, t) {
  return {
    get current() {
      return e.current;
    },
    set current(n) {
      ((e.current = n), t(n));
    },
  };
}
function xV(...e) {
  return (t) => e.forEach((n) => nm(n, t));
}
function Au(e) {
  let t = Ut(() => wV(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function wV(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = $w(t);
  let n = (s, a) => {
      if (!t.forwardedRef && t.forwardedRef === s) {
        t.ref = a;
        return;
      }
      let l = !1;
      (t.childRef !== a && ((t.childRef = a), (l = !0)),
        t.forwardedRef !== s && ((t.forwardedRef = s), (l = !0)),
        l && (t.ref = $w(t)));
    },
    r = !1;
  function i(s, a) {
    if (r)
      throw new ReferenceError(
        "useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.",
      );
    return (
      (r = !0),
      rr.count(s) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      rr.map(s, (l) => {
        if (Gt(l)) {
          let c = "ref" in l ? l.ref : void 0;
          n(t.forwardedRef, c);
          let u = t.ref !== c ? { ...a, ref: t.ref } : a;
          return An(l, u);
        }
        return l;
      })
    );
  }
  let o = function (a, l) {
    return k(Re, { children: i(a, l) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (s) => {
        ((r = !1), n(s, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function $w(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (r) => {
    (nm(n, r), nm(t, r));
  };
}
var Pk = S.createContext({});
function z8() {
  return S.useContext(Pk);
}
var N8 = S.forwardRef(({ width: e, height: t, y: n, children: r, ...i }, o) => {
    let s = S.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
      a = Au(o);
    return k(Pk.Provider, { value: s, children: a(r, i) });
  }),
  SV = (e) =>
    S.forwardRef((t, n) => {
      let r = ja(t);
      return k(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  kV = class extends Ee {
    constructor() {
      (super(...arguments), R(this, "state", { hasError: !1 }));
    }
    componentDidCatch(e, t) {
      var n;
      let r = t?.componentStack;
      if (
        (console.error(
          "Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.",
          r,
        ),
        this.setState({ hasError: !0 }),
        typeof M < "u" && Math.random() <= 0.01)
      ) {
        let i =
          e instanceof Error && typeof e.stack == "string" ? e.stack : null;
        (n = M.__framer_events) == null ||
          n.push([
            "published_site_load_recoverable_error",
            { message: String(e), stack: i, componentStack: i ? void 0 : r },
          ]);
      }
    }
    render() {
      let { children: e } = this.props,
        { hasError: t } = this.state;
      return t ? null : e;
    }
  },
  CV = S.forwardRef(({ children: e, layoutId: t, as: n, ...r }, i) => {
    let o = Ut(() => (t ? `${t}-container` : void 0)),
      s = Ha(n);
    return k(s, {
      layoutId: o,
      ...r,
      ref: i,
      children: k(es.Provider, {
        value: !0,
        children: k(KM, {
          enabled: !1,
          children: k(r0, {
            id: t ?? "",
            inherit: "id",
            children: k(kV, {
              children: S.Children.map(e, (a) =>
                S.isValidElement(a) ? S.cloneElement(a, { layoutId: t }) : a,
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Y8 = SV(CV),
  TV = S.createContext(void 0),
  EV = (() => {
    var e;
    if (!ui()) return new Set();
    let t =
      (e = document.querySelector("style[data-framer-css-ssr-minified]")) ==
      null
        ? void 0
        : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set();
  })(),
  _k = "data-framer-css-ssr",
  Em = (e, t, n) =>
    S.forwardRef((r, i) => {
      let { sheet: o, cache: s } = S.useContext(TV) ?? {};
      if (!ui()) {
        let a = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return se(Re, {
          children: [
            k("style", {
              [_k]: !0,
              "data-framer-component": n,
              dangerouslySetInnerHTML: { __html: a },
            }),
            k(e, { ...r, ref: i }),
          ],
        });
      }
      return (
        S.useInsertionEffect(() => {
          if (n && EV.has(n)) return;
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((l) => l && YS(l, o, s));
        }, []),
        k(e, { ...r, ref: i })
      );
    }),
  Rm = S.createContext({
    onRegisterCursors: () => () => {},
    registerCursors: () => {},
  }),
  Su = "framer-cursor-none",
  rm = "framer-pointer-events-none",
  RV = S.memo(function ({ children: t }) {
    let n = Ut(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (s) => (s(o), i.add(s), () => i.delete(s)),
          registerCursors: (s) => {
            let a = {};
            for (let l in s) {
              let c = o[l] ?? s[l];
              c && (a[l] = c);
            }
            o = a;
            for (let l of i) l(o);
          },
        };
      }),
      r = bi();
    return se(Rm.Provider, { value: n, children: [t, !r && k(LV, {})] });
  }),
  PV = (() =>
    Em(RV, [
      `.${Su}, .${Su} * { cursor: none !important; }`,
      `.${rm}, .${rm} * { pointer-events: none !important; }`,
    ]))(),
  _V = (() => ({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none",
  }))();
function IV(e) {
  return !(!e || e.placement || e.alignment);
}
function nu(e) {
  switch (e) {
    case "start":
      return "0%";
    case "center":
      return "-50%";
    case "end":
      return "-100%";
    default:
      Le(e);
  }
}
function FV(e, t = "center") {
  switch (e) {
    case "top":
      return `${nu(t)}, -100%`;
    case "right":
      return `0%, ${nu(t)}`;
    case "bottom":
      return `${nu(t)}, 0%`;
    case "left":
      return `-100%, ${nu(t)}`;
    default:
      return "-50%, -50%";
  }
}
var zw = "data-framer-portal-id";
function Nw(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let r = n.getAttribute("data-framer-cursor");
    if (r) return r;
    if (n.hasAttribute(zw)) {
      let i = n.getAttribute(zw);
      ((n = n.parentElement), i && (n = document.getElementById(i) ?? n));
    } else n = n.parentElement;
  }
}
function MV(e) {
  for (let t in e) return !1;
  return !0;
}
var LV = S.memo(function () {
  let { onRegisterCursors: t } = B(Rm),
    n = Wn(0),
    r = Wn(0),
    i = Wn(0),
    o = S.useRef(null),
    s = S.useRef({ cursors: {}, cursorHash: void 0 }),
    a = Lu(),
    l = !MV(s.current.cursors);
  (S.useEffect(() => {
    let w = 0,
      E = 0;
    function T() {
      (n.set(w), r.set(E), Un(i, 1, { type: "tween", duration: 0.2 }));
    }
    function F(D) {
      D.pointerType !== "touch" &&
        ((w = D.clientX), (E = D.clientY), G.update(T));
    }
    let _ = () => {
      if (!l) return;
      let D = Nw(w, E);
      D !== s.current.cursorHash &&
        ((s.current.cursorHash = D), G.update(() => a()));
    };
    G.read(_, !0);
    function $(D) {
      if (D.target === o.current || !o.current) return;
      let q = new PointerEvent(D.type, {
        bubbles: !0,
        cancelable: D.cancelable,
        pointerType: D.pointerType,
        pointerId: D.pointerId,
        composed: D.composed,
        isPrimary: D.isPrimary,
        buttons: D.buttons,
        button: D.button,
      });
      G.update(() => {
        var W;
        (W = o.current) == null || W.dispatchEvent(q);
      });
    }
    return (
      Ge.addEventListener("pointermove", F),
      document.addEventListener("pointerdown", $),
      document.addEventListener("pointerup", $),
      () => {
        (Ge.removeEventListener("pointermove", F),
          document.removeEventListener("pointerdown", $),
          document.removeEventListener("pointerup", $),
          _t(_));
      }
    );
  }, [i, n, r, l, a]),
    S.useEffect(() => {
      function w() {
        Un(i, 0, { type: "tween", duration: 0.2 });
      }
      return (
        document.addEventListener("mouseleave", w),
        Ge.addEventListener("blur", w),
        () => {
          (document.removeEventListener("mouseleave", w),
            Ge.removeEventListener("blur", w));
        }
      );
    }, [i]),
    S.useLayoutEffect(() => {
      function w(T) {
        ((s.current.cursors = T),
          (s.current.cursorHash = Nw(n.get(), r.get())),
          a());
      }
      let E = t(w);
      return () => {
        (E(), document.body.classList.toggle(Su, !1));
      };
    }, [n, r, t, a]));
  let { cursors: c, cursorHash: u } = s.current,
    f = u ? c[u] : null,
    d = IV(f);
  S.useLayoutEffect(() => {
    document.body.classList.toggle(Su, d);
  }, [d]);
  let h = f?.component,
    y = f?.transition ?? { duration: 0 },
    g = pd(n, y),
    b = pd(r, y),
    p = It(() => {
      var w;
      return g.get() + (((w = f?.offset) == null ? void 0 : w.x) ?? 0);
    }),
    m = It(() => {
      var w;
      return b.get() + (((w = f?.offset) == null ? void 0 : w.y) ?? 0);
    }),
    v = f?.alignment,
    x = f?.placement,
    C = S.useCallback((w, E) => `translate(${FV(x, v)}) ${E}`, [v, x]);
  return !f || !h
    ? null
    : k(h, {
        transformTemplate: C,
        style: { ..._V, x: p, y: m, opacity: i },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: rm,
      });
});
function J8(e) {
  let { registerCursors: t } = B(Rm),
    n = Ut(() => e);
  S.useLayoutEffect(() => {
    t(n);
  }, [n, t]);
}
var Ik = S.createContext(void 0),
  Vu = class {
    constructor(e) {
      ((this.resolver = e), R(this, "status"));
    }
    static is(e) {
      return e instanceof Vu;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== "pending" ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: "fulfilled", value: t };
        },
        (t) => {
          this.status = { type: "rejected", error: t };
        },
      );
      return ((this.status = { type: "pending", promise: e }), e);
    }
    waitFor() {
      return this.resolver();
    }
    read() {
      let e = this.status;
      if (!e) throw new Error("Need to call preload() before read()");
      switch (e.type) {
        case "pending":
          throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.error;
        default:
          Le(e);
      }
    }
  },
  Fk = S.createContext(void 0),
  oH = (() => Fk.Provider)(),
  Mk = () => S.useContext(Fk) ?? {};
function Pm(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Pm(e.parentElement, t)
      : null;
}
function OV({ children: e }) {
  let { useGranularSuspense: t } = Mk();
  return t ? k(LS, { children: e }) : e;
}
function Lk(e) {
  return Oe(function (n, r) {
    return k(OV, { children: k(e, { ...n, ref: r }) });
  });
}
var Hw = "element",
  DV = "collection",
  AV = "collectionItemId",
  VV = "pathVariables",
  Ok = "framer/page-link,";
function Dk(e) {
  return fe(e) && e.startsWith(`data:${Ok}`);
}
function _m(e) {
  if (Dk(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Ok.length),
        r = t.searchParams,
        i = r.has(Hw) ? r.get(Hw) : void 0,
        o,
        s = r.get(DV),
        a = r.get(AV),
        l = r.get(VV);
      if (s && a && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: s, collectionItemId: a, pathVariables: c };
      }
      return {
        target: n === "none" ? null : n,
        element: i === "none" ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function BV(e, t, n) {
  var r;
  let i = t.getAttribute("data-framer-page-link-target"),
    o,
    s;
  if (i) {
    o = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let l = t.getAttribute("data-framer-page-link-path-variables");
    l && (s = Object.fromEntries(new URLSearchParams(l).entries()));
  } else {
    let l = t.getAttribute("href");
    if (!l) return !1;
    let c = _m(l);
    if (!c || !c.target) return !1;
    ((i = c.target),
      (o = c.element ?? void 0),
      (s = (r = c.collectionItem) == null ? void 0 : r.pathVariables));
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(i, o, Object.assign({}, n, s), a), !0);
}
var $V = 500,
  zV = 0.9,
  NV = 1.7,
  HV = 4,
  jV = 1 / 0,
  zo = new WeakMap(),
  ru = new Set(),
  No = new Map();
function WV() {
  var e;
  let t = Ke.connection || Ke.mozConnection || Ke.webkitConnection || {},
    n = Ke.deviceMemory && Ke.deviceMemory > NV,
    r,
    i,
    o;
  function s() {
    ((r = t.effectiveType || ""),
      (i = t.saveData || r.includes("2g")),
      (o = r === "3g" || n ? HV : jV));
  }
  ((e = t.addEventListener) == null || e.call(t, "change", s), s());
  let a = new IntersectionObserver(u, { threshold: zV }),
    l = 0;
  async function c(f, d) {
    if (i) return;
    let h = No.get(f);
    if (!h?.size || ru.has(f)) return;
    (++l, ru.add(f));
    let y = AS(f).catch(() => {});
    (a.unobserve(d), zo.delete(d));
    for (let g of h) (a.unobserve(g), zo.delete(g));
    (h.clear(), No.delete(f), await y, --l);
  }
  function u(f) {
    var d;
    for (let h of f) {
      let y = h.target,
        g = zo.get(y);
      if (!g || ru.has(g)) {
        (a.unobserve(y), zo.delete(y));
        continue;
      }
      let b = No.get(g),
        p = ((d = No.get(g)) == null ? void 0 : d.size) ?? 0;
      if (h.isIntersecting) {
        if (l >= o) continue;
        (b ? b.add(y) : No.set(g, new Set([y])),
          setTimeout(c.bind(void 0, g, y), $V));
      } else (b && b.delete(y), p <= 1 && No.delete(g));
    }
  }
  return (f, d) => {
    if (!ru.has(f))
      return (
        zo.set(d, f),
        a.observe(d),
        () => {
          (zo.delete(d), a.unobserve(d));
        }
      );
  };
}
var UV = !mm || typeof IntersectionObserver > "u" ? null : WV(),
  Wp = {},
  iu = new WeakMap();
function Im(e, t, n) {
  var r, i;
  let o =
    (i = (r = iu?.get(n ?? Wp)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (o) return o;
  let s = iu.get(n ?? Wp) ?? new Map();
  iu.set(n ?? Wp, s);
  let a = s.get(e.collectionId) ?? new Map();
  s.set(e.collectionId, a);
  let l = new Vu(async () => {
    try {
      let c = t[e.collectionId];
      if (!c)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`,
        );
      let u = await c();
      if (!u) throw new Error("Collection does not contain utility functions");
      return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (c) {
      console.warn(
        `Failed to resolve slug: ${c instanceof Error ? c.message : "Unknown error"}`,
      );
      return;
    }
  });
  return (a.set(e.collectionItemId, l), l);
}
var XV = "webPageId";
function Fa(e) {
  return !!(e && typeof e == "object" && XV in e);
}
function YV(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function ku(e) {
  if (!Dk(e)) return e;
  let t = _m(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: YV(i) };
}
var Ak = /:([a-z]\w*)/gi,
  GV = xe(void 0);
function Fm() {
  var e;
  let t = B(GV),
    n = (e = Jo()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function Vk(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, s] of e.path.matchAll(Ak))
      if (!s || e.pathVariables[s] !== o[s]) return !1;
  }
  return !0;
}
function Mm(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."));
}
function Bk(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Lm(e, t) {
  return e !== void 0 ? (e ? "_blank" : void 0) : t ? void 0 : "_blank";
}
function uu(e, t = void 0) {
  let n = Mm(e),
    r = Lm(t, n);
  return {
    href: Bk(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : "noopener",
  };
}
function $k(e, t, n, r, i) {
  return async (o) => {
    var s, a;
    if (o.metaKey) return;
    let l = Pm(o.target);
    if (!l || l.getAttribute("target") === "_blank") return;
    o.preventDefault();
    let c = (s = e.getRoute) == null ? void 0 : s.call(e, t);
    (c && xS(c?.page) && c.page.preload(),
      (a = e.navigate) == null || a.call(e, t, n, r, i));
  };
}
async function qV(e, t, n, r) {
  async function i(a) {
    if (!a || !n) return {};
    let l = {};
    for (let c in a) {
      let u = a[c];
      ce(u, "unresolvedSlug should be defined");
      let f = Im(u, n, r);
      await f.preload();
      let d = f.read();
      d && (l[c] = d);
    }
    return l;
  }
  let [o, s] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: o.status === "fulfilled" ? o.value : void 0,
    hash: s.status === "fulfilled" ? s.value : void 0,
  };
}
function KV(e, t, n, r) {
  let i = [];
  function o(a) {
    if (!a || !n) return;
    let l = {};
    for (let c in a) {
      let u = a[c];
      ce(u, "unresolvedSlug should be defined");
      let f = Im(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let h = f.read();
        h && (l[c] = h);
      }
    }
    return l;
  }
  let s = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return s;
}
function zk(e, t, n, r, i, o, s, a) {
  var l;
  let c = { ...i, ...o, ...a?.path },
    u = { ...i, ...s, ...a?.hash },
    f = (l = e.getRoute) == null ? void 0 : l.call(e, n),
    d = _u(f, {
      currentRoutePath: t?.path,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: c,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
    }),
    h = d.split("#", 2)[1];
  return { routeId: n, route: f, href: d, elementId: h, pathVariables: c };
}
function Nk(e, t, n) {
  if (!(!e.routes || !e.getRoute || !Mm(t)))
    try {
      let [i, o] = t.split("#", 2);
      ce(i !== void 0, "A href must have a defined pathname.");
      let [s] = i.split("?", 2);
      ce(s !== void 0, "A href must have a defined pathname.");
      let { routeId: a, pathVariables: l } = DS(e.routes, s),
        c = e.getRoute(a);
      if (c) {
        let u = Object.assign({}, n, l);
        return {
          routeId: a,
          route: c,
          href: t,
          elementId: o,
          pathVariables: u,
        };
      }
    } catch {}
}
async function QV(e, t, n, r, i) {
  let {
      webPageId: o,
      hash: s,
      pathVariables: a,
      hashVariables: l,
      unresolvedHashSlugs: c,
      unresolvedPathSlugs: u,
    } = n,
    f = await qV(u, c, e.collectionUtils, r);
  return zk(e, t, o, s, i, a, l, f);
}
function ZV(e, t, n, r, i) {
  let {
      webPageId: o,
      hash: s,
      pathVariables: a,
      hashVariables: l,
      unresolvedHashSlugs: c,
      unresolvedPathSlugs: u,
    } = n,
    f = KV(u, c, e.collectionUtils, r);
  return zk(e, t, o, s, i, a, l, f);
}
function JV(e, t, n, r, i, o) {
  if (!r) return uu(e, t);
  let s = Nk(n, e, i);
  if (!s) return uu(e, t);
  let { routeId: a, route: l, elementId: c, pathVariables: u } = s;
  if (!l) return uu(e, t);
  let f = _u(l, {
      currentRoutePath: r.path,
      currentPathVariables: r.pathVariables,
      hash: c,
      pathVariables: u,
      preserveQueryParams: n.preserveQueryParams,
    }),
    d = Lm(t, !0);
  return { href: f, target: d, onClick: $k(n, a, c, u, o) };
}
function e3(e, t, n) {
  var r;
  if (fe(e)) {
    let o = Mm(e);
    if (!t.routes || !t.getRoute || !n || !o) return;
    let [s] = e.split("#", 2);
    if (s === void 0) return;
    let [a] = s.split("?", 2);
    if (a === void 0) return;
    let { routeId: l } = DS(t.routes, a);
    return t.getRoute(l);
  }
  let { webPageId: i } = e;
  return (r = t.getRoute) == null ? void 0 : r.call(t, i);
}
var cH = Lk(
  Oe(({ children: e, href: t, openInNewTab: n, smoothScroll: r, ...i }, o) => {
    let s = Xi(),
      a = Jo(),
      l = Fm(),
      { activeLocale: c } = Iu(),
      u = A(null),
      f = le(() => {
        let y,
          g = (p) => {
            var m;
            if (p === null) {
              (y?.(), (y = void 0));
              return;
            }
            let v = Fa(t) ? t : ku(t);
            if (!v) return;
            let x = e3(v, s, a);
            x && (y = (m = UV) == null ? void 0 : m(x, p));
          },
          b = Gt(e) && "ref" in e;
        return b && Rk(e.ref)
          ? Bw(e.ref, g)
          : b && ji(e.ref)
            ? xV(e.ref, g)
            : Bw(u, g);
      }, [t, s, a, e]),
      d = Au(o),
      h = le(() => {
        if (!t) return {};
        let y = Fa(t) ? t : ku(t);
        if (!y) return {};
        if (fe(y)) return JV(y, n, s, a, l, r);
        let {
            routeId: g,
            href: b,
            elementId: p,
            pathVariables: m,
          } = ZV(s, a, y, c, l),
          v = Lm(n, !0);
        return {
          href: b,
          target: v,
          onClick: $k(s, g, p, m, r),
          "data-framer-page-link-current": (a && Vk(a, y, l)) || void 0,
        };
      }, [t, s, c, l, n, a, r]);
    return d(e, { ...i, ...h, ref: f });
  }),
);
function t3(e, t, n, r) {
  let i = Fa(e) ? e : ku(e);
  if (!Fa(i)) return fe(e) ? uu(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let o = t.getRoute(t.currentRouteId),
    {
      webPageId: s,
      hash: a,
      pathVariables: l,
      hashVariables: c,
      unresolvedHashSlugs: u,
      unresolvedPathSlugs: f,
    } = i,
    d = t.getRoute(s),
    h = f || u ? r?.(f, u) : void 0,
    y = Object.assign({}, t.currentPathVariables, n, l, h?.path),
    g = Object.assign({}, t.currentPathVariables, n, c, h?.hash);
  return _u(d, {
    currentRoutePath: o?.path,
    currentPathVariables: t.currentPathVariables,
    hash: a,
    pathVariables: y,
    hashVariables: g,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
  });
}
var n3 = "framer",
  r3 = 3,
  i3 = 30,
  o3 = 3e3;
async function s3() {
  let e = "0".repeat(r3),
    t = Date.now(),
    n = !0;
  for (; n; ) {
    let r = Date.now();
    if (r - t > o3) {
      n = !1;
      return;
    }
    let i = l3(i3),
      o = `${r}:${i}`,
      s = await a3(n3 + o);
    if (s.startsWith(e)) return { secret: o, hash: s };
  }
}
async function a3(e) {
  let t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest("SHA-256", t);
  return Array.from(new Uint8Array(n))
    .map((r) => r.toString(16).padStart(2, "0"))
    .join("");
}
function l3(e) {
  let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    n = "",
    r = t.length;
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * r));
  return n;
}
function c3(e) {
  return Array.from(e.keys()).map(encodeURIComponent).join(",");
}
function u3(e, t) {
  try {
    let n = t.cookie.match("(^|;) ?framerFormsUTMTags=([^;]*)(;|$)");
    if (n !== null && n[2]) {
      let r = JSON.parse(decodeURIComponent(n[2]));
      if (!r || typeof r != "object") return;
      [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "gclid",
      ].forEach((i) => {
        typeof r[i] == "string" && e.append(i, r[i]);
      });
    }
  } catch {}
}
function f3({ state: e }, { type: t }) {
  switch (t) {
    case "complete":
    case "incomplete":
      return e === "error" ? { state: "error" } : { state: t };
    case "submit":
      return { state: "pending" };
    case "success":
      return { state: "success" };
    case "error":
      return { state: "error" };
    default:
      Le(t);
  }
}
function d3(e) {
  return e.state === "incomplete" || e.state === "complete";
}
function h3(e) {
  e.preventDefault();
}
function p3(e) {
  if (!Ge) return;
  let t = Bk(e, !1) ? e : `https://${e}`;
  Ge.open(t, "_blank");
}
var Hk = S.createContext(void 0),
  hH = S.forwardRef(
    (
      {
        action: e,
        children: t,
        redirectUrl: n,
        onSuccess: r,
        onError: i,
        onLoading: o,
        ...s
      },
      a,
    ) => {
      let l = Xi(),
        c = Jo(),
        u = Fm(),
        [f, d] = S.useReducer(f3, { state: "incomplete" }),
        { activeLocale: h } = Iu(),
        y = B(Hk),
        g = S.useRef({ onSuccess: r, onError: i, onLoading: o });
      g.current = { onSuccess: r, onError: i, onLoading: o };
      async function b(x) {
        var C, w;
        if (fe(x)) {
          let $ = Nk(l, x, u);
          if (!$) {
            p3(x);
            return;
          }
          let { routeId: D, elementId: q, pathVariables: W } = $;
          (C = l.navigate) == null || C.call(l, D, q, W);
          return;
        }
        ce(Fa(x), "Expected link to be either a LinkToWebPage or a string", x);
        let E = await QV(l, c, x, h, u),
          { routeId: T, elementId: F, pathVariables: _ } = E;
        (w = l.navigate) == null || w.call(l, T, F, _);
      }
      let p = async (x) => {
          var C, w, E, T, F, _;
          if ((x.preventDefault(), !e || !y)) return;
          let $ = new FormData(x.currentTarget);
          u3($, Ge.document);
          for (let [D, q] of $) q instanceof File && $.delete(D);
          try {
            (d({ type: "submit" }),
              (w = (C = g.current).onLoading) == null || w.call(C),
              await m3(e, $, y),
              d({ type: "success" }),
              (T = (E = g.current).onSuccess) == null || T.call(E),
              n && (await b(n)));
          } catch (D) {
            (d({ type: "error" }),
              (_ = (F = g.current).onError) == null || _.call(F),
              console.error(D));
          }
        },
        m = (x) => {
          let { target: C, currentTarget: w, key: E } = x;
          C instanceof HTMLTextAreaElement ||
            (E === "Enter" && w.checkValidity() && (x.preventDefault(), p(x)));
        },
        v = (x) => {
          d({ type: jk(x.currentTarget) ? "incomplete" : "complete" });
        };
      return k(Qe.form, {
        ...s,
        onSubmit: d3(f) ? p : h3,
        onKeyDown: m,
        onChange: v,
        ref: a,
        children: t(f),
      });
    },
  );
function jk(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === "") return !0;
    } else if (jk(t)) return !0;
  return !1;
}
async function m3(e, t, n) {
  let r = await s3();
  if (!r) throw new Error("Failed to calculate proof of work");
  let i = await fetch(e, {
    body: t,
    method: "POST",
    headers: {
      "Framer-Site-Id": n,
      "Framer-POW": r.secret,
      "Framer-Form-Fields": c3(t),
    },
  });
  if (i.ok) return i;
  {
    let o = await i.json(),
      s = "Failed to submit form";
    throw v3(o) ? new Error(`${s} - ${o.error.message}`) : new Error(s);
  }
}
function v3(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "error" in e &&
    Se(e.error) &&
    "message" in e.error &&
    typeof e.error.message == "string"
  );
}
function g3(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (r) {
      n(r);
    }
  });
}
function y3(e) {
  return typeof e == "object" && e !== null;
}
function b3(e, t) {
  if (t === "") return e;
  let n = t.split(/[.[\]]+/u).filter((i) => i.length > 0),
    r = e;
  for (let i of n) {
    if (!y3(r)) return;
    r = r[i];
  }
  return r;
}
function xa(e) {
  return `${e.credentials}:${e.url}`;
}
var x3 = { status: "loading", data: void 0 };
function w3(e) {
  return fe(e) && !isNaN(Number(e));
}
function S3(e, t) {
  switch (e) {
    case "string":
      return fe(t) || $e(t);
    case "boolean":
      return ym(t);
    case "number":
      return $e(t) || w3(t);
    case "image":
      return fe(t) && im(t);
    default: {
      let n = e;
      return !1;
    }
  }
}
function k3(e, t) {
  if (e.status === "loading") return t.fallbackValue;
  if (e.status === "error") throw e.error;
  let n = b3(e.data, t.resultKeyPath);
  if (ct(n)) throw new Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!S3(t.resultOutputType, n))
    throw new Error(
      `Resolved value '${n}' is not valid for type '${t.resultOutputType}'`,
    );
  return n;
}
function im(e) {
  try {
    return !!new URL(e).protocol;
  } catch {}
}
function Up(e, t) {
  if (ae.current() === ae.canvas) return !1;
  let n = t === 0 ? 500 : t * 1e3,
    r = Date.now(),
    i = e + n;
  return r >= i;
}
var jw = () => {},
  br,
  om,
  Di,
  Ai,
  Sa,
  si,
  fu = class {
    constructor() {
      (R(this, "responseValues", new Map()),
        Kt(this, br, new Map()),
        Kt(this, om, new Set()),
        Kt(this, Di, new Map()),
        Kt(this, Ai, new Map()),
        Kt(this, Sa, new Map()),
        Kt(this, si, new Map()),
        R(
          this,
          "persistCache",
          VA(() => {
            let e = {};
            for (let [t, n] of this.responseValues) {
              if (!n || n.status !== "success") continue;
              let r = ue(this, Di).get(t);
              if (!r || r === 0) continue;
              let i = ue(this, Ai).get(t);
              i && ((i && Up(i, r)) || (e[t] = [i, r, n.data]));
            }
            try {
              localStorage.setItem(fu.cacheKey, JSON.stringify(e));
            } catch {}
          }, 500),
        ));
    }
    unmount() {
      for (let [e, t] of ue(this, si))
        (clearInterval(t), ue(this, si).delete(e));
    }
    stopQueryRefetching(e) {
      let t = xa(e),
        n = ue(this, si).get(t);
      n && (clearInterval(n), ue(this, si).delete(t));
    }
    startQueryRefetching(e) {
      let t = xa(e),
        n = ue(this, si).get(t),
        r = ue(this, Di).get(t);
      if (n || !r) return;
      let i = Ge.setInterval(() => {
        let o = ue(this, Ai).get(t);
        !r || !o || this.fetchWithCache({ ...e, cacheDuration: r });
      }, r);
      ue(this, si).set(t, i);
    }
    hydrateCache() {
      try {
        let e = localStorage.getItem(fu.cacheKey);
        if (!e) return;
        let t = JSON.parse(e);
        if (typeof t != "object") throw new Error("Invalid cache data");
        for (let n in t) {
          let r = t[n];
          if (!Array.isArray(r) || r.length !== 3)
            throw new Error("Invalid cache data");
          let [i, o, s] = r;
          Up(i, o) ||
            (ue(this, Ai).set(n, i),
            ue(this, Di).set(n, o),
            this.responseValues.set(n, { status: "success", data: s }));
        }
      } catch {
        try {
          localStorage.removeItem(fu.cacheKey);
        } catch {}
      }
    }
    setResponseValue(e, t) {
      (this.responseValues.set(e, t), this.persistCache());
      let n = ue(this, br).get(e);
      if (n) for (let r of n) r();
    }
    async prefetch(e) {
      if (!im(e.url)) return;
      let t = xa(e);
      (ue(this, om).add(t), await this.fetchWithCache(e));
      let n = this.getValue(t);
      if (!n || n.status === "loading")
        throw new Error("Unexpected result status for prefetch");
      let r = ue(this, br).get(t);
      for (let o of r ?? []) o();
      let i = k3(n, e);
      return (
        e.resultOutputType === "image" && fe(i) && (await g3(i).catch(jw)),
        i
      );
    }
    async fetchWithCache(e) {
      let t = xa(e),
        n = ue(this, Sa).get(t);
      if (n) return n;
      let r = ue(this, Ai).get(t),
        i = r && Up(r, e.cacheDuration);
      if (this.responseValues.has(t) && !i) return;
      this.responseValues.get(t) || this.setResponseValue(t, x3);
      let a = (async () => {
        try {
          let l = await fetch(e.url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: e.credentials,
          });
          if (!l.ok) {
            this.setResponseValue(t, {
              status: "error",
              error: new Error("Invalid Response Status"),
              data: void 0,
            });
            return;
          }
          let c = await l.json();
          (this.setResponseValue(t, { status: "success", data: c }),
            ue(this, Ai).set(t, Date.now()));
        } catch (l) {
          this.setResponseValue(t, { status: "error", error: l, data: void 0 });
        }
      })();
      return (
        ue(this, Sa).set(t, a),
        a.finally(() => {
          ue(this, Sa).delete(t);
        }),
        a
      );
    }
    getValue(e) {
      return this.responseValues.get(e);
    }
    subscribe(e, t) {
      let { url: n, cacheDuration: r } = e;
      if (!im(n)) return jw;
      let i = xa(e),
        o = ue(this, Di).get(i);
      ((!o || r < o) && ue(this, Di).set(i, r),
        this.startQueryRefetching(e),
        this.fetchWithCache(e));
      let s = ue(this, br).get(i) ?? new Set();
      return (
        s.add(t),
        ue(this, br).set(i, s),
        () => {
          let a = ue(this, br).get(i);
          a &&
            (a.delete(t),
            a.size === 0 && ue(this, br).delete(i),
            ue(this, br).size === 0 && this.stopQueryRefetching(e));
        }
      );
    }
  },
  Wk = fu;
br = new WeakMap();
om = new WeakMap();
Di = new WeakMap();
Ai = new WeakMap();
Sa = new WeakMap();
si = new WeakMap();
R(Wk, "cacheKey", "framer-fetch-client-cache");
var C3 = xe(void 0),
  T3 = xe(!0),
  E3 = ({ children: e, client: t }) => {
    let [n] = it(() => t ?? new Wk()),
      [r, i] = it(!0);
    return (
      N(() => (n.hydrateCache(), i(!1), () => n.unmount()), [n]),
      k(T3.Provider, {
        value: r,
        children: k(C3.Provider, { value: n, children: e }),
      })
    );
  },
  R3,
  P3,
  _3;
R3 = new WeakMap();
P3 = new WeakMap();
_3 = new WeakMap();
function vH({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  framerSiteId: r,
  pathVariables: i,
  routes: o,
  collectionUtils: s,
  notFoundPage: a,
  isReducedMotion: l = !1,
  includeDataObserver: c = !1,
  localeId: u,
  locales: f,
  preserveQueryParams: d,
}) {
  let { enableAsyncURLUpdates: h } = Mk();
  if (
    (S.useEffect(() => {
      t || zS.start();
    }, []),
    t)
  )
    return k(e0, {
      reducedMotion: l ? "user" : "never",
      children: k(PV, {
        children: k(Hk.Provider, {
          value: r,
          children: k(E3, {
            children: k(bM, {
              initialRoute: n,
              initialPathVariables: i,
              initialLocaleId: u,
              routes: o,
              collectionUtils: s,
              notFoundPage: a,
              locales: f,
              defaultPageStyle: { minHeight: "100vh", width: "auto" },
              preserveQueryParams: d,
              enableAsyncURLUpdates: h,
            }),
          }),
        }),
      }),
    });
  {
    let y = c ? zA : S.Fragment;
    return k(y, {
      children: k(uM, {
        routes: o,
        children: k(AA, {
          children: S.isValidElement(e) ? e : S.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function I3(e, t, n) {
  let r = rr.map(e, (i) => (Gt(i) ? An(i, t) : i));
  return n ? r : k(Re, { children: r });
}
var Om = S.createContext(void 0),
  Ww = "ssr-variant";
function Uw(e, t, n, r, i, o, s, a) {
  let l = S.Children.toArray(t),
    c = l[0];
  if (l.length !== 1 || !S.isValidElement(c))
    return (
      console.warn(
        "PropertyOverrides: expected exactly one React element for a child",
        t,
      ),
      s(t, n)
    );
  let u = [],
    f = [];
  for (let [b] of Object.entries(r)) {
    if (b === i) continue;
    let p = e[b];
    if (!p || !M3(c.props, p)) {
      f.push(b);
      continue;
    }
    let m = Xw([b], o);
    m.length && u.push({ variants: m, propOverrides: p });
  }
  if (u.length === 0) return s(c, n);
  let d = [i, ...f],
    h = Xw(d, o);
  h.length && u.unshift({ variants: h });
  let y = `.${Ww} { display: contents }`,
    g = [];
  for (let { variants: b, propOverrides: p } of u) {
    if (a && !b.includes(a)) continue;
    let m = b.join("+"),
      v = k(
        Om.Provider,
        { value: new Set(b), children: s(c, p ? { ...n, ...p } : n) },
        m,
      ),
      x = F3(b, o, r);
    (x.length
      ? (ce(u.length > 1, "Must branch out when there are hiddenClassNames"),
        (v = k("div", { className: `${Ww} ${x.join(" ")}`, children: v }, m)))
      : ce(u.length === 1, "Cannot branch out when hiddenClassNames is empty"),
      g.push(v));
  }
  return (
    ce(
      !a || g.length === 1,
      "Must render exactly one branch when activeVariantId is given",
    ),
    se(Re, {
      children: [!o && !ui() && k("style", { [_k]: !0, children: y }), g],
    })
  );
}
function Uk(e) {
  return e.split("-")[2];
}
function F3(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let s = t && !t.has(i);
    e.includes(i) || s || r.push(`hidden-${Uk(o)}`);
  }
  return r;
}
function Xw(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function M3(e, t) {
  for (let n of Object.keys(t)) if (!We(e[n], t[n], !0)) return !0;
  return !1;
}
function L3(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var xH = S.forwardRef(function (
    { breakpoint: t, overrides: n, children: r, ...i },
    o,
  ) {
    let s = Au(o),
      a = S.useContext(Om),
      l = aM(),
      c = Ut(() => (l.current ? (ui() ? 1 : 2) : 0)),
      u = S.useContext(Ik);
    if (!u)
      return (
        console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        s(r, i)
      );
    let { primaryVariantId: f, variantClassNames: d } = u;
    switch (c) {
      case 0:
        return s(r, L3(t, i, n));
      case 1:
        return Uw(n, r, i, d, f, a, s, t);
      case 2:
        return Uw(n, r, i, d, f, a, I3, void 0);
      default:
        Le(c);
    }
  }),
  SH = Lk(
    Oe(function ({ links: t, children: n, ...r }, i) {
      let o = Xi(),
        { activeLocale: s } = Iu(),
        a = Au(i),
        l = [],
        c = t.map((f) =>
          t3(f.href, o, f.implicitPathVariables, (d, h) => {
            function y(g) {
              let b = {};
              for (let p in g) {
                let m = g[p];
                (ce(o.collectionUtils, "collectionUtils should be defined"),
                  ce(m, "unresolvedSlug be defined"));
                let v = Im(m, o.collectionUtils, s),
                  x = v.preload();
                if (x) l.push(x);
                else {
                  let C = v.read();
                  C && (b[p] = C);
                }
              }
              return b;
            }
            return { path: y(d), hash: y(h) };
          }),
        );
      if (l.length > 0) throw Promise.allSettled(l);
      let u = n(c);
      return a(u, r);
    }),
  );
var O3 = jn(vF(), 1);
function D3(e) {
  return {
    trace(...t) {
      var n;
      return (n = lt.getLogger(e)) == null ? void 0 : n.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = lt.getLogger(e)) == null ? void 0 : n.debug(...t);
    },
    info(...t) {
      var n;
      return (n = lt.getLogger(e)) == null ? void 0 : n.info(...t);
    },
    warn(...t) {
      var n;
      return (n = lt.getLogger(e)) == null ? void 0 : n.warn(...t);
    },
    error(...t) {
      var n;
      return (n = lt.getLogger(e)) == null ? void 0 : n.error(...t);
    },
  };
}
function A3(e) {
  return Yk(e) || B3(e);
}
function V3(e) {
  return Fu(e) && e.every(Se);
}
function Xk(e) {
  return Se(e) && ji(e.read) && ji(e.preload);
}
function Yk(e) {
  return V3(e) || Xk(e);
}
function Dm(e) {
  return Se(e) && Se(e.schema);
}
function Gk(e) {
  return Se(e) && Se(e.collectionByLocaleId);
}
function B3(e) {
  return Dm(e) || Gk(e);
}
async function Yw(e, t) {
  return Xk(e) ? (await e.preload(t), e.read(t)) : e;
}
var $3 = class {
    constructor(e, t) {
      ((this.collection = e),
        (this.locale = t),
        R(this, "schema"),
        R(this, "indexes", []));
      let n = wO(e);
      ce(n, "Collection does not have properties");
      let r = { id: { type: "string", isNullable: !1 } },
        i = Object.entries(n);
      for (let [o, s] of i) s && (r[o] = { type: s.type, isNullable: !0 });
      this.schema = r;
    }
    getDatabaseItem(e, t) {
      let n = {};
      for (let r in this.schema) {
        let i = e[r];
        if (Ko(i)) continue;
        let o = this.schema[r];
        ct(o) || (n[r] = { type: o.type, value: i });
      }
      return { pointer: t, data: n };
    }
    async resolveRichText(e) {
      if (Vu.is(e)) {
        let t = e.preload();
        return (t && (await t), e.read());
      }
      return e;
    }
    async scanItems() {
      return (await Yw(this.collection, this.locale)).map((t, n) => {
        let r = String(n);
        return this.getDatabaseItem(t, r);
      });
    }
    async resolveItems(e) {
      let t = await Yw(this.collection, this.locale);
      return e.map((n) => {
        let r = Number(n),
          i = t[r];
        return (
          ce(i, "Can't find collection item"),
          this.getDatabaseItem(i, n)
        );
      });
    }
    compareItems(e, t) {
      return Number(e.pointer) - Number(t.pointer);
    }
  },
  an = {
    equal(e, t, n) {
      return e?.type !== t?.type ? !1 : wa(e, t, n) === 0;
    },
    lessThan(e, t, n) {
      return e?.type !== t?.type ? !1 : wa(e, t, n) < 0;
    },
    lessThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : wa(e, t, n) <= 0;
    },
    greaterThan(e, t, n) {
      return e?.type !== t?.type ? !1 : wa(e, t, n) > 0;
    },
    greaterThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : wa(e, t, n) >= 0;
    },
    in(e, t) {
      return e?.type !== "string" || t?.type !== "multicollectionreference"
        ? !1
        : t.value.includes(e.value);
    },
    stringify(e) {
      if (e === null) return "null";
      switch (e.type) {
        case "boolean":
        case "number":
          return String(e.value);
        case "string":
          return `'${e.value}'`;
        case "enum":
          return `'${e.value}' /* Enum */`;
        case "color":
          return `'${e.value}' /* Color */`;
        case "date":
          return `'${e.value}' /* Date */`;
        case "richtext":
          return "RichText";
        case "responsiveimage":
          return "ResponsiveImage";
        case "file":
          return "File";
        case "link":
          return fe(e.value) ? `'${e.value}' /* Link */` : "Link";
        case "multicollectionreference":
          return `[${e.value.map((t) => `'${t}'`).join(", ")}]`;
        default:
          Le(e);
      }
    },
  };
function wa(e, t, n) {
  if (Be(e) || Be(t)) return (ce(e === t), 0);
  switch (e.type) {
    case "boolean":
      return (
        ce(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "color":
      return (
        ce(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "date": {
      ce(e.type === t.type);
      let r = new Date(e.value),
        i = new Date(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "enum":
      return (
        ce(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "file":
      return (
        ce(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "responsiveimage": {
      ce(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "link": {
      ce(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "number":
      return (
        ce(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "richtext": {
      ce(e.type === t.type);
      let r = e.value,
        i = t.value;
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "string": {
      ce(e.type === t.type);
      let r = e.value,
        i = t.value;
      return (
        n.type === 0 &&
          ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
        r < i ? -1 : r > i ? 1 : 0
      );
    }
    case "multicollectionreference": {
      ce(e.type === t.type);
      for (let r = 0; r < Math.max(e.value.length, t.value.length); r++) {
        let i = e.value[r],
          o = t.value[r];
        if (i === void 0) return -1;
        if (o === void 0) return 1;
        if (i < o) return -1;
        if (i > o) return 1;
      }
      return 0;
    }
    default:
      Le(e);
  }
}
var sm = "index",
  Et = class {
    static from(e, t) {
      return Jn(e, t, void 0);
    }
  },
  bt = class extends Et {
    constructor(e, t, n) {
      (super(),
        (this.schema = e),
        (this.name = t),
        (this.collection = n),
        R(this, "definition"),
        t === sm
          ? (this.definition = { type: "number", isNullable: !1 })
          : (this.definition = e[t] ?? null));
    }
    stringify() {
      return this.name;
    }
    equals(e) {
      return (
        e instanceof bt &&
        We(this.definition, e.definition) &&
        We(e.name, this.name) &&
        We(e.collection, this.collection)
      );
    }
    evaluate(e) {
      let t = this.name;
      if (ct(e) || t === sm) throw new Error(`Can't evaluate identifier: ${t}`);
      if (this.collection) {
        let n = `${this.collection}_${t}`;
        return e.data[n] ?? e.data[t] ?? null;
      }
      return e.data[t] ?? null;
    }
    canEvaluate() {
      return !1;
    }
  },
  Ce = class extends Et {
    constructor(e, t) {
      (super(), (this.definition = e), (this.value = t));
    }
    stringify() {
      return an.stringify(this.value);
    }
    static fromNull() {
      return new Ce(null, null);
    }
    static fromBoolean(e) {
      return new Ce(
        { type: "boolean", isNullable: Be(e) },
        Be(e) ? null : { type: "boolean", value: e },
      );
    }
    static fromDate(e) {
      return new Ce(
        { type: "date", isNullable: Be(e) },
        Be(e) ? null : { type: "date", value: e.toISOString() },
      );
    }
    static fromEnum(e) {
      return new Ce(
        { type: "enum", isNullable: Be(e) },
        Be(e) ? null : { type: "enum", value: e },
      );
    }
    static fromNumber(e) {
      return new Ce(
        { type: "number", isNullable: Be(e) },
        Be(e) ? null : { type: "number", value: e },
      );
    }
    static fromString(e) {
      return new Ce(
        { type: "string", isNullable: Be(e) },
        Be(e) ? null : { type: "string", value: e },
      );
    }
    static fromMultiCollectionReference(e) {
      return new Ce(
        { type: "multicollectionreference", isNullable: Be(e) },
        Be(e) ? null : { type: "multicollectionreference", value: e },
      );
    }
    equals(e) {
      return (
        e instanceof Ce &&
        We(this.definition, e.definition) &&
        We(e.value, this.value)
      );
    }
    evaluate() {
      return this.value;
    }
    canEvaluate() {
      return !0;
    }
  },
  Ua = class extends Et {
    constructor(e) {
      (super(),
        (this.argumentExpressions = e),
        R(this, "collation", { type: 0 }));
    }
    getArgumentExpression(e) {
      let t = this.argumentExpressions[e];
      if (ct(t)) throw new Error("Missing argument in function call");
      return t;
    }
    equals(e) {
      return (
        e instanceof Ua &&
        We(this.constructor, e.constructor) &&
        We(this.argumentExpressions, e.argumentExpressions)
      );
    }
    canEvaluate() {
      return this.argumentExpressions.every((e) => e.canEvaluate());
    }
  },
  Bu = class extends Ua {
    constructor() {
      (super(...arguments),
        R(this, "definition", Bu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1)));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Be(e) || e.type !== "string" || Be(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.includes(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  $u = class extends Ua {
    constructor() {
      (super(...arguments),
        R(this, "definition", $u.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1)));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Be(e) || e.type !== "string" || Be(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.startsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  zu = class extends Ua {
    constructor() {
      (super(...arguments),
        R(this, "definition", zu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1)));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Be(e) || e.type !== "string" || Be(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.endsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  Cu = class extends Et {
    constructor(e, t, n) {
      (super(),
        (this.valueExpression = e),
        (this.conditions = t),
        (this.elseExpression = n),
        R(this, "definition"),
        R(this, "collation", { type: 0 }));
      let r = [];
      for (let { thenExpression: i } of t) r.push(i.definition);
      (n && r.push(n.definition), (this.definition = Cu.getDefinition(r)));
    }
    static getDefinition(e) {
      let t = null,
        n = !1;
      for (let r of e) {
        if ((t ?? (t = r), t && r && t.type !== r.type))
          throw new Error("Incompatible types in CASE expression");
        n || (n = r?.isNullable ?? !0);
      }
      return t ? { type: t.type, isNullable: n } : null;
    }
    stringify() {
      let e = "CASE";
      this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
      for (let { whenExpression: t, thenExpression: n } of this.conditions)
        e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
      return (
        this.elseExpression &&
          (e += ` ELSE ${this.elseExpression.stringify()}`),
        (e += " END"),
        e
      );
    }
    equals(e) {
      return (
        e instanceof Cu &&
        We(this.valueExpression, e.valueExpression) &&
        We(this.conditions, e.conditions) &&
        We(this.elseExpression, e.elseExpression)
      );
    }
    evaluate(e) {
      var t, n;
      let r =
        ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
      for (let { whenExpression: i, thenExpression: o } of this.conditions) {
        let s = i.evaluate(e);
        if (this.valueExpression ? an.equal(s, r, this.collation) : Yi(s))
          return o.evaluate(e);
      }
      return (
        ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
      );
    }
    canEvaluate() {
      let e = [];
      this.valueExpression && e.push(this.valueExpression);
      for (let t of this.conditions)
        (e.push(t.whenExpression), e.push(t.thenExpression));
      return (
        this.elseExpression && e.push(this.elseExpression),
        e.every((t) => t.canEvaluate())
      );
    }
  },
  z3 = class {
    constructor(e, t) {
      ((this.whenExpression = e), (this.thenExpression = t));
    }
  },
  qk = class extends Et {
    constructor(e) {
      (super(), (this.valueExpression = e));
    }
    equals(e) {
      return (
        e instanceof qk &&
        We(this.constructor, e.constructor) &&
        We(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  Ma = class extends qk {
    constructor() {
      (super(...arguments), R(this, "definition", Ma.getDefinition()));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `NOT ${this.valueExpression.stringify()}`;
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: !Yi(t) };
    }
  },
  La = class extends Et {
    constructor(e) {
      (super(),
        (this.operandExpressions = e),
        R(this, "definition", La.getDefinition()));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return this.operandExpressions.map((e) => e.stringify()).join(" AND ");
    }
    equals(e) {
      return (
        e instanceof La &&
        We(this.constructor, e.constructor) &&
        We(this.operandExpressions, e.operandExpressions)
      );
    }
    canEvaluate() {
      return this.operandExpressions.every((e) => e.canEvaluate());
    }
  },
  zi = class extends La {
    constructor() {
      (super(...arguments), R(this, "operator", "AND"));
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.every((n) => {
          let r = n.evaluate(e);
          return Yi(r);
        }),
      };
    }
  },
  Ca = class extends La {
    constructor() {
      (super(...arguments), R(this, "operator", "OR"));
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.some((n) => {
          let r = n.evaluate(e);
          return Yi(r);
        }),
      };
    }
  },
  Ln = class extends Et {
    constructor(e, t) {
      (super(),
        (this.leftExpression = e),
        (this.rightExpression = t),
        R(this, "definition", Ln.getDefinition()),
        R(this, "collation", { type: 0 }));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `${this.leftExpression.stringify()} ${this.operator} ${this.rightExpression.stringify()}`;
    }
    equals(e) {
      return (
        e instanceof Ln &&
        We(this.constructor, e.constructor) &&
        We(this.leftExpression, e.leftExpression) &&
        We(this.rightExpression, e.rightExpression)
      );
    }
    canEvaluate() {
      return (
        this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
      );
    }
  },
  Qo = class extends Ln {
    constructor() {
      (super(...arguments), R(this, "operator", "="));
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: an.equal(t, n, this.collation) };
    }
  },
  Zo = class extends Ln {
    constructor() {
      (super(...arguments), R(this, "operator", "!="));
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: !an.equal(t, n, this.collation) };
    }
  },
  Oa = class extends Ln {
    constructor() {
      (super(...arguments), R(this, "operator", "<"));
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: an.lessThan(t, n, this.collation) };
    }
  },
  Da = class extends Ln {
    constructor() {
      (super(...arguments), R(this, "operator", "<="));
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: an.lessThanOrEqual(t, n, this.collation),
      };
    }
  },
  Aa = class extends Ln {
    constructor() {
      (super(...arguments), R(this, "operator", ">"));
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: an.greaterThan(t, n, this.collation) };
    }
  },
  Va = class extends Ln {
    constructor() {
      (super(...arguments), R(this, "operator", ">="));
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: an.greaterThanOrEqual(t, n, this.collation),
      };
    }
  },
  N3 = class extends Ln {
    constructor() {
      (super(...arguments), R(this, "operator", "in"));
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: an.in(t, n) };
    }
  },
  Xa = class extends Et {
    constructor(e) {
      (super(), (this.valueExpression = e));
    }
    stringify() {
      return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`;
    }
    equals(e) {
      return (
        e instanceof Xa &&
        We(this.constructor, e.constructor) &&
        We(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  Nu = class extends Xa {
    constructor() {
      (super(...arguments),
        R(this, "dataType", "BOOLEAN"),
        R(this, "definition", Nu.getDefinition()));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: Yi(t) };
    }
  };
function Yi(e) {
  switch (e?.type) {
    case "boolean":
    case "number":
    case "string":
      return !!e.value;
  }
  return !1;
}
var Am = class extends Xa {
  constructor() {
    (super(...arguments),
      R(this, "dataType", "DATE"),
      R(this, "definition", Am.getDefinition()));
  }
  static getDefinition() {
    return { type: "date", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = Kk(t);
    return Be(n) ? null : { type: "date", value: n.toISOString() };
  }
};
function Kk(e) {
  switch (e?.type) {
    case "date":
    case "number":
    case "string": {
      let t = new Date(e.value);
      return qS(t) ? t : null;
    }
  }
  return null;
}
var Vm = class extends Xa {
  constructor() {
    (super(...arguments),
      R(this, "dataType", "NUMBER"),
      R(this, "definition", Vm.getDefinition()));
  }
  static getDefinition() {
    return { type: "number", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = Qk(t);
    return Be(n) ? null : { type: "number", value: n };
  }
};
function Qk(e) {
  switch (e?.type) {
    case "number":
    case "string": {
      let t = Number(e.value);
      return Number.isFinite(t) ? t : null;
    }
  }
  return null;
}
var Bm = class extends Xa {
  constructor() {
    (super(...arguments),
      R(this, "dataType", "STRING"),
      R(this, "definition", Bm.getDefinition()));
  }
  static getDefinition() {
    return { type: "string", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = Zk(t);
    return Be(n) ? null : { type: "string", value: n };
  }
};
function Zk(e) {
  switch (e?.type) {
    case "string":
    case "number":
      return String(e.value);
  }
  return null;
}
function Jn(e, t, n) {
  let r = H3(e, t, n),
    i = r instanceof Ce;
  if (r.canEvaluate() && !i) {
    let o = r.evaluate();
    return new Ce(r.definition, o);
  }
  return r;
}
function H3(e, t, n) {
  switch (e.type) {
    case "Identifier":
      return j3(e, t);
    case "LiteralValue":
      return W3(e, n);
    case "FunctionCall":
      return X3(e, t);
    case "Case":
      return Y3(e, t, n);
    case "UnaryOperation":
      return G3(e, t);
    case "BinaryOperation":
      return K3(e, t);
    case "TypeCast":
      return s5(e, t);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function j3(e, t) {
  return new bt(t, e.name, e.collection);
}
function W3(e, t) {
  var n, r;
  let i = U3(e.value);
  switch (t?.type) {
    case "boolean": {
      let o = Yi(i.value);
      return Ce.fromBoolean(o);
    }
    case "date": {
      let o = Kk(i.value);
      return Ce.fromDate(o);
    }
    case "enum":
      return ((n = i.value) == null ? void 0 : n.type) === "string"
        ? Ce.fromEnum(i.value.value)
        : i;
    case "number": {
      let o = Qk(i.value);
      return Ce.fromNumber(o);
    }
    case "string": {
      let o = Zk(i.value);
      return Ce.fromString(o);
    }
    case "multicollectionreference":
      if (
        ((r = i.value) == null ? void 0 : r.type) === "multicollectionreference"
      )
        return Ce.fromMultiCollectionReference(i.value.value);
  }
  return i;
}
function U3(e) {
  return ym(e)
    ? Ce.fromBoolean(e)
    : qS(e)
      ? Ce.fromDate(e)
      : $e(e)
        ? Ce.fromNumber(e)
        : fe(e)
          ? Ce.fromString(e)
          : Fu(e) && e.every(fe)
            ? Ce.fromMultiCollectionReference(e)
            : Ce.fromNull();
}
function X3(e, t) {
  let n = e.arguments.map((r) => Jn(r, t, void 0));
  switch (e.functionName) {
    case "CONTAINS":
      return new Bu(n);
    case "STARTS_WITH":
      return new $u(n);
    case "ENDS_WITH":
      return new zu(n);
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function Y3(e, t, n) {
  let r = e.value && Jn(e.value, t, void 0),
    i = e.value && Ba(e.value, t),
    o = e.conditions.map((a) => {
      let l = Jn(a.when, t, i),
        c = Jn(a.then, t, n);
      return new z3(l, c);
    }),
    s = e.else && Jn(e.else, t, n);
  return new Cu(r, o, s);
}
function G3(e, t) {
  let n = Jn(e.value, t, void 0);
  switch (e.operator) {
    case "not":
      return am(n);
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function am(e) {
  var t;
  if (e instanceof Ma) {
    let n = e.valueExpression;
    return ((t = n.definition) == null ? void 0 : t.type) === "boolean"
      ? n
      : new Nu(n);
  }
  if (e instanceof Qo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Zo(n, r);
  }
  if (e instanceof Zo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Qo(n, r);
  }
  if (e instanceof Oa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Va(n, r);
  }
  if (e instanceof Da) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Aa(n, r);
  }
  if (e instanceof Aa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Da(n, r);
  }
  if (e instanceof Va) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Oa(n, r);
  }
  if (e instanceof zi) {
    let { operandExpressions: n } = e,
      r = n.map(am);
    return new Ca(r);
  }
  if (e instanceof zi) {
    let { operandExpressions: n } = e,
      r = n.map(am);
    return new zi(r);
  }
  return new Ma(e);
}
function q3(e, t) {
  if (e.operator !== "in" && e.operator !== "and" && e.operator !== "or")
    return Ba(e.left, t) || Ba(e.right, t);
}
function K3(e, t) {
  let n = q3(e, t),
    r = Jn(e.left, t, n),
    i = Jn(e.right, t, n);
  switch (e.operator) {
    case "and":
      return Q3(r, i);
    case "or":
      return Z3(r, i);
    case "==":
      return J3(r, i);
    case "!=":
      return e5(r, i);
    case "<":
      return t5(r, i);
    case "<=":
      return n5(r, i);
    case ">":
      return r5(r, i);
    case ">=":
      return i5(r, i);
    case "in":
      return o5(r, i);
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function Q3(e, t) {
  let n = [];
  return (
    e instanceof zi ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof zi ? n.push(...t.operandExpressions) : n.push(t),
    new zi(n)
  );
}
function Z3(e, t) {
  let n = [];
  return (
    e instanceof Ca ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof Ca ? n.push(...t.operandExpressions) : n.push(t),
    new Ca(n)
  );
}
function J3(e, t) {
  let n = e instanceof bt;
  return t instanceof bt && !n ? new Qo(t, e) : new Qo(e, t);
}
function e5(e, t) {
  let n = e instanceof bt;
  return t instanceof bt && !n ? new Zo(t, e) : new Zo(e, t);
}
function t5(e, t) {
  let n = e instanceof bt;
  return t instanceof bt && !n ? new Aa(t, e) : new Oa(e, t);
}
function n5(e, t) {
  let n = e instanceof bt;
  return t instanceof bt && !n ? new Va(t, e) : new Da(e, t);
}
function r5(e, t) {
  let n = e instanceof bt;
  return t instanceof bt && !n ? new Oa(t, e) : new Aa(e, t);
}
function i5(e, t) {
  let n = e instanceof bt;
  return t instanceof bt && !n ? new Da(t, e) : new Va(e, t);
}
function o5(e, t) {
  return new N3(e, t);
}
function s5(e, t) {
  let n = Jn(e.value, t, void 0);
  switch (e.dataType) {
    case "BOOLEAN":
      return a5(n);
    case "DATE":
      return l5(n);
    case "NUMBER":
      return c5(n);
    case "STRING":
      return u5(n);
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function a5(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "boolean"
    ? e
    : new Nu(e);
}
function l5(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "date"
    ? e
    : new Am(e);
}
function c5(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "number"
    ? e
    : new Vm(e);
}
function u5(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "string"
    ? e
    : new Bm(e);
}
function Ba(e, t) {
  switch (e.type) {
    case "Identifier":
      return f5(e, t);
    case "LiteralValue":
      return;
    case "FunctionCall":
      return d5(e);
    case "Case":
      return h5(e, t);
    case "UnaryOperation":
      return p5(e);
    case "BinaryOperation":
      return m5(e);
    case "TypeCast":
      return v5(e);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function f5(e, t) {
  return t[e.name];
}
function d5(e) {
  switch (e.functionName) {
    case "CONTAINS":
      return Bu.getDefinition();
    case "STARTS_WITH":
      return $u.getDefinition();
    case "ENDS_WITH":
      return zu.getDefinition();
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function h5(e, t) {
  let n = [];
  for (let r of e.conditions) {
    let i = Ba(r.then, t);
    ct(i) || n.push(i);
  }
  if (e.else) {
    let r = Ba(e.else, t);
    ct(r) || n.push(r);
  }
  return Cu.getDefinition(n) ?? void 0;
}
function p5(e) {
  switch (e.operator) {
    case "not":
      return Ma.getDefinition();
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function m5(e) {
  switch (e.operator) {
    case "and":
    case "or":
      return La.getDefinition();
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
      return Ln.getDefinition();
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function v5(e) {
  switch (e.dataType) {
    case "BOOLEAN":
      return Nu.getDefinition();
    case "DATE":
      return Am.getDefinition();
    case "NUMBER":
      return Vm.getDefinition();
    case "STRING":
      return Bm.getDefinition();
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function Tr(e, t) {
  return `(self: ${e}ms${t ? `, total: ${t}ms` : ""})`;
}
function On(e) {
  return `(items: ${e})`;
}
var Er = class {
    constructor() {
      (R(this, "executionTime", 0), R(this, "itemCount", 0));
    }
    async execute() {
      let e = performance.now(),
        t = await this._execute();
      return (
        (this.executionTime = performance.now() - e),
        (this.itemCount = t.length),
        t
      );
    }
  },
  Jk = class extends Er {
    constructor(e, t) {
      (super(), (this.collection = e), (this.alias = t));
    }
    inspect() {
      return {
        label: `ScanCollectionPlan ${Tr(this.executionTime)} ${On(this.itemCount)}`,
      };
    }
    async _execute() {
      let e = await this.collection.scanItems();
      return ct(this.alias)
        ? e
        : e.map((t) => {
            let n = { ...t.data },
              r = Object.entries(n);
            for (let [i, o] of r) n[`${this.alias}_${i}`] = o;
            return { pointer: t.pointer, data: n };
          });
    }
  },
  g5 = class extends Er {
    constructor(e, t, n) {
      (super(),
        (this.leftPlan = e),
        (this.rightPlan = t),
        (this.constraint = n));
    }
    inspect() {
      let e = Math.max(
        this.leftPlan.executionTime ?? 0,
        this.rightPlan.executionTime ?? 0,
      );
      return {
        label: `LeftJoinPlan ${Tr(this.executionTime - e, this.executionTime)} ${On(this.itemCount)}`,
        nodes: [this.leftPlan.inspect(), this.rightPlan.inspect()],
      };
    }
    async _execute() {
      var e;
      let t = await this.leftPlan.execute(),
        n = await this.rightPlan.execute(),
        r = [];
      for (let i of t) {
        let o = !1;
        for (let s of n) {
          let a = { pointer: i.pointer, data: { ...i.data, ...s.data } };
          (e = this.constraint.evaluate(a)) != null &&
            e.value &&
            (r.push(a), (o = !0));
        }
        o || r.push(i);
      }
      return r;
    }
  },
  kr = class extends Er {
    constructor(e, t) {
      (super(), (this.index = e), (this.query = t));
    }
    inspect() {
      let e = [],
        t = (n) => {
          switch (n.type) {
            case "All":
              return n.type;
            case "Equals":
            case "NotEquals":
            case "LessThan":
            case "GreaterThan":
            case "Contains":
            case "StartsWith":
            case "EndsWith":
              return `${n.type} ${an.stringify(n.value)}`;
            default:
              Le(n);
          }
        };
      for (let n = 0; n < this.index.fields.length; n++) {
        let r = this.index.fields[n],
          i = this.query[n];
        !r ||
          r.type !== "Identifier" ||
          !i ||
          i.type === "All" ||
          e.push(`${r.name} ${t(i)}`);
      }
      return {
        label: `LookupIndexPlan(${e.join(", ")}) ${Tr(this.executionTime)} ${On(this.itemCount)}`,
      };
    }
    async _execute() {
      return this.index.lookupItems(this.query);
    }
  },
  y5 = class extends Er {
    constructor(e) {
      (super(), (this.childPlans = e));
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `UnionPlan ${Tr(this.executionTime - e, this.executionTime)} ${On(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new Tu(r);
          }),
        ),
        t;
      for (let n of e) t ? (t = t.union(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  b5 = class extends Er {
    constructor(e) {
      (super(), (this.childPlans = e));
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `IntersectionPlan ${Tr(this.executionTime - e, this.executionTime)} ${On(this.itemCount)} ${On(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new Tu(r);
          }),
        ),
        t;
      for (let n of e) t ? (t = t.intersection(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  x5 = class extends Er {
    constructor(e, t, n, r) {
      (super(),
        (this.childPlan = e),
        (this.collection = t),
        (this.richTextResolver = n),
        (this.select = r));
    }
    inspect() {
      return {
        label: `ResolveItemsPlan ${Tr(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${On(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = e.map((n) => n.pointer);
      for (let n of e)
        for (let r of this.select) {
          if (r.type !== "Identifier") continue;
          let i = n.data[r.name];
          i?.type === "richtext" &&
            this.richTextResolver.resolve(r.name, i.value);
        }
      return this.collection.resolveItems(t);
    }
  },
  eC = class extends Er {
    constructor(e, t) {
      (super(), (this.childPlan = e), (this.filterExpression = t));
    }
    inspect() {
      return {
        label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${Tr(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${On(this.itemCount)} ${On(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).filter((t) => {
        let n = this.filterExpression.evaluate(t);
        return Yi(n);
      });
    }
  },
  w5 = class extends Er {
    constructor(e, t, n) {
      (super(),
        (this.childPlan = e),
        (this.orderExpressions = t),
        (this.collection = n));
    }
    inspect() {
      return {
        label: `SortItemsPlan(${this.orderExpressions.map((t) => `${t.expression.stringify()} ${t.direction.toUpperCase()}`).join(", ")}) ${Tr(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${On(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).sort((t, n) => {
        for (let { expression: r, direction: i, collation: o } of this
          .orderExpressions) {
          let s = i === "asc";
          if (r instanceof bt && r.name === sm) {
            let c = this.collection.compareItems(t, n);
            return s ? c : -c;
          }
          let a = r.evaluate(t),
            l = r.evaluate(n);
          if (!an.equal(a, l, o)) {
            if (an.lessThan(a, l, o) || Ko(a)) return s ? -1 : 1;
            if (an.greaterThan(a, l, o) || Ko(l)) return s ? 1 : -1;
            throw new Error("Invalid comparison result.");
          }
        }
        return this.collection.compareItems(t, n);
      });
    }
  },
  S5 = class {
    constructor(e, t, n) {
      ((this.expression = e), (this.direction = t), (this.collation = n));
    }
  },
  k5 = class extends Er {
    constructor(e, t, n) {
      (super(),
        (this.childPlan = e),
        (this.offsetExpression = t),
        (this.limitExpression = n));
    }
    inspect() {
      var e, t;
      return {
        label: `SliceItemsPlan(LIMIT ${((e = this.limitExpression) == null ? void 0 : e.stringify()) ?? "Infinity"}, OFFSET ${((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? "0"}) ${Tr(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${On(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    getOffset() {
      var e;
      let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
      if (!(Ko(t) || t.type !== "number")) return t.value;
    }
    getLimit() {
      var e;
      let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
      if (!(Ko(t) || t.type !== "number")) return t.value;
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = this.getOffset() ?? 0,
        n = this.getLimit() ?? 1 / 0;
      return e.slice(t, t + n);
    }
  },
  Tu = class extends Map {
    constructor(e = []) {
      super();
      for (let t of e) this.set(t.pointer, t);
    }
    union(e) {
      let t = new Tu();
      for (let [n, r] of this) t.set(n, r);
      for (let [n, r] of e) t.set(n, r);
      return t;
    }
    intersection(e) {
      let t = new Tu();
      for (let [n, r] of this) e.has(n) && t.set(n, r);
      return t;
    }
    items() {
      return [...this.values()];
    }
  },
  C5 = class {
    constructor(e) {
      ((this.collections = e), R(this, "cache", new Map()));
    }
    resolve(e, t) {
      let n = this.cache.get(e) ?? new Map();
      this.cache.set(e, n);
      let r = n.get(t);
      if (r) return r;
      for (let i of this.collections)
        if (e in i.schema) {
          let o = i.resolveRichText(t);
          return (n.set(t, o), o);
        }
      throw new Error(`Rich text field not found: ${e}`);
    }
  };
function T5(e) {
  return `"${e.name}"`;
}
function E5(e) {
  return typeof e.value == "string" ? `'${e.value}'` : e.value;
}
function R5(e) {
  return `${e.functionName}(${e.arguments.map((t) => Wt(t)).join(", ")})`;
}
function P5(e) {
  let t = "CASE";
  e.value && (t += ` ${Wt(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Wt(n.when)} THEN ${Wt(n.then)}`;
  return (e.else && (t += ` ELSE ${e.else}`), (t += " END"), t);
}
function _5(e) {
  let t = Wt(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function I5(e) {
  let t = Wt(e.left),
    n = Wt(e.right),
    r = e.operator.toUpperCase();
  return `${t} ${r} ${n}`;
}
function F5(e) {
  return `CAST(${Wt(e.value)} as ${e.dataType})`;
}
function Wt(e) {
  switch (e.type) {
    case "Identifier":
      return T5(e);
    case "LiteralValue":
      return E5(e);
    case "FunctionCall":
      return R5(e);
    case "Case":
      return P5(e);
    case "UnaryOperation":
      return _5(e);
    case "BinaryOperation":
      return I5(e);
    case "TypeCast":
      return F5(e);
    default:
      Le(e);
  }
}
function M5(e) {
  return Dm(e.data) ? "Collection" : e.data.displayName;
}
function L5(e) {
  let t = `${lm(e.left)} LEFT JOIN ${lm(e.right)}`;
  return (e.constraint && (t += ` ON ${Wt(e.constraint)}`), t);
}
function lm(e) {
  switch (e.type) {
    case "Collection":
      return M5(e);
    case "LeftJoin":
      return L5(e);
    default:
      Le(e);
  }
}
function O5(e) {
  let t = "";
  return (
    e.split(/\s+/u).forEach((r) => {
      r !== "" &&
        (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r)
          ? (t += `
${r}`)
          : ["AND", "OR"].includes(r)
            ? (t += `
	${r}`)
            : (t += ` ${r}`));
    }),
    t.trim()
  );
}
function D5(e) {
  let t = "";
  return (
    (t += `SELECT ${e.select
      .map((n) => {
        let r = Wt(n);
        return n.alias ? `${r} AS ${n.alias}` : r;
      })
      .join(", ")}`),
    (t += ` FROM ${lm(e.from)}`),
    e.where && (t += ` WHERE ${Wt(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((n) => `${Wt(n)} ${n.direction ?? "asc"}`).join(", ")}`),
    e.limit && (t += ` LIMIT ${Wt(e.limit)}`),
    e.offset && (t += ` OFFSET ${Wt(e.offset)}`),
    O5(t)
  );
}
var A5 = D3("query-engine");
function V5({ data: e }, t) {
  if (Yk(e)) return new $3(e, t);
  if (Dm(e)) return e;
  if (Gk(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  Le(e, "Unsupported collection type");
}
var B5 = class {
  async query(e, t) {
    let [n, r, i] = this.createQueryPlan(e, t),
      o = await this.executeQueryPlan(r, i, e, n);
    return (
      A5.debug(`Query:
${D5(e)}

${(0, O3.default)(n.inspect())}`),
      o
    );
  }
  buildFrom(e, t, n, r) {
    switch (e.type) {
      case "Collection": {
        let i = V5(e, r);
        return (n.push(i), Object.assign(t, i.schema), new Jk(i, e.alias));
      }
      case "LeftJoin": {
        let i = this.buildFrom(e.left, t, n, r),
          o = this.buildFrom(e.right, t, n, r),
          s = Et.from(e.constraint, t);
        return new g5(i, o, s);
      }
      default:
        Le(e, "Unsupported data source");
    }
  }
  createQueryPlan(e, t) {
    var n;
    let r = {},
      i = [],
      o = this.buildFrom(e.from, r, i, t),
      [s] = i;
    ce(s, "At least one collection must exist");
    let a = new C5(i);
    if (e.where) {
      let f = Et.from(e.where, r);
      i.length === 1 ? (o = cm(s, f)) : (o = new eC(o, f));
    }
    let l =
      (n = e.orderBy) == null
        ? void 0
        : n.map(
            (f) => new S5(Et.from(f, r), f.direction ?? "asc", { type: 0 }),
          );
    o = new w5(o, l ?? [], s);
    let c;
    e.offset && (c = Et.from(e.offset, r));
    let u;
    return (
      e.limit && (u = Et.from(e.limit, r)),
      (c || u) && (o = new k5(o, c, u)),
      e.select.length > 0 && i.length === 1 && (o = new x5(o, s, a, e.select)),
      [o, r, a]
    );
  }
  async executeQueryPlan(e, t, n, r) {
    let i = await r.execute();
    return Promise.all(
      i.map(async (o) => {
        let s = {};
        for (let a of n.select) {
          let l = Et.from(a, e),
            c = $5(a),
            u = l.evaluate(o);
          s[c] = await z5(t, a.type === "Identifier" ? a.name : void 0, u);
        }
        return s;
      }),
    );
  }
};
function $5(e) {
  if (e.alias) return e.alias;
  if (e.type === "Identifier") return e.name;
  throw new Error("Can't serialize expression");
}
async function z5(e, t, n) {
  return Ko(n)
    ? null
    : n.type === "richtext"
      ? (ce(fe(t), "Rich text field must be a string"), e.resolve(t, n.value))
      : n.value;
}
function cm(e, t) {
  if (t instanceof zi) {
    let n = t.operandExpressions.map((r) => cm(e, r));
    return new b5(n);
  }
  if (t instanceof Ca) {
    let n = t.operandExpressions.map((r) => cm(e, r));
    return new y5(n);
  }
  return N5(e, t) ?? j5(e, t);
}
function N5(e, t) {
  var n, r;
  if (t instanceof Ln) return Xp(e, t);
  if (t instanceof Ua) return H5(e, t);
  if (
    t instanceof bt &&
    ((n = t.definition) == null ? void 0 : n.type) === "boolean"
  ) {
    let i = Ce.fromBoolean(!0),
      o = new Qo(t, i);
    return Xp(e, o);
  }
  if (
    t instanceof Ma &&
    t.valueExpression instanceof bt &&
    ((r = t.valueExpression.definition) == null ? void 0 : r.type) === "boolean"
  ) {
    let i = Ce.fromBoolean(!0),
      o = new Zo(t.valueExpression, i);
    return Xp(e, o);
  }
}
function Xp(e, t) {
  let n = t.leftExpression,
    r = t.rightExpression;
  if (r instanceof Ce)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (ct(o)) continue;
      let s = Et.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof Qo && i.supportedLookupTypes.includes("Equals"))
        return new kr(i, [{ type: "Equals", value: r.evaluate() }, ...a]);
      if (t instanceof Zo && i.supportedLookupTypes.includes("NotEquals"))
        return new kr(i, [{ type: "NotEquals", value: r.evaluate() }, ...a]);
      if (t instanceof Oa && i.supportedLookupTypes.includes("LessThan"))
        return new kr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof Da && i.supportedLookupTypes.includes("LessThan"))
        return new kr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
      if (t instanceof Aa && i.supportedLookupTypes.includes("GreaterThan"))
        return new kr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof Va && i.supportedLookupTypes.includes("GreaterThan"))
        return new kr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
    }
}
function H5(e, t) {
  if (t.argumentExpressions.length !== 2) return;
  let n = t.argumentExpressions[0],
    r = t.argumentExpressions[1];
  if (!ct(n) && !ct(r) && r instanceof Ce)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (ct(o)) continue;
      let s = Et.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof Bu && i.supportedLookupTypes.includes("Contains"))
        return new kr(i, [{ type: "Contains", value: r.evaluate() }, ...a]);
      if (t instanceof $u && i.supportedLookupTypes.includes("StartsWith"))
        return new kr(i, [{ type: "StartsWith", value: r.evaluate() }, ...a]);
      if (t instanceof zu && i.supportedLookupTypes.includes("EndsWith"))
        return new kr(i, [{ type: "EndsWith", value: r.evaluate() }, ...a]);
    }
}
function j5(e, t) {
  let n = new Jk(e, void 0);
  return new eC(n, t);
}
var du = "default",
  W5 = new Set([du]),
  hu,
  U5 = class {
    constructor() {
      (R(this, "entries", new Map()), Kt(this, hu, {}));
    }
    set(e, t, n, r) {
      switch (t) {
        case "transformTemplate": {
          (ce(
            typeof n == "string",
            `transformTemplate must be a string, received: ${n}`,
          ),
            this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
          break;
        }
        case "initial":
        case "animate": {
          (ce(
            typeof n == "object",
            `${t} must be a valid object, received: ${n}`,
          ),
            this.setHash(e, r, { [t]: n, legacy: !0 }));
          break;
        }
        default:
          break;
      }
    }
    setHash(e, t = du, n) {
      let r = this.entries.get(e) ?? {},
        i = r[t] ?? {};
      ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
    }
    variantHash(e, t) {
      if (e === t?.primaryVariantId) return du;
      let n = ue(this, hu)[e];
      if (n) return n;
      let r = t?.variantClassNames[e];
      return r ? (ue(this, hu)[e] = Uk(r)) : du;
    }
    setAll(e, t = W5, n, r) {
      var i;
      if (n === null) {
        for (let c of t) this.setHash(e, this.variantHash(c, r), null);
        return;
      }
      let o = ji(n.transformTemplate)
          ? (i = n.transformTemplate) == null
            ? void 0
            : i.call(n, {}, Y5)
          : void 0,
        s = n.__framer__presenceInitial ?? n.initial,
        a = n.__framer__presenceAnimate ?? n.animate,
        l = {
          initial: Se(s) ? s : void 0,
          animate: Se(a) ? a : void 0,
          transformTemplate: fe(o) ? o : void 0,
        };
      for (let c of t) this.setHash(e, this.variantHash(c, r), l);
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  };
hu = new WeakMap();
var X5 = new U5();
function TH(e) {
  return S.forwardRef(({ optimized: t, ...n }, r) => {
    let i = S.useContext(Ik),
      o = S.useContext(Om),
      s = n[G5];
    return (
      s && !ui() && X5.setAll(s, o, t ? n : null, i),
      k(e, { ref: r, ...n })
    );
  });
}
var Y5 = "__Appear_Animation_Transform__";
var G5 = "data-framer-appear-id",
  EH = "data-framer-appear-animation";
function Yp(e, t) {
  (e.forEach((n) => clearTimeout(n)),
    e.clear(),
    t.forEach((n) => n && n("Callback cancelled by variant change")),
    t.clear());
}
function Gw() {
  return new Set();
}
function PH(e) {
  let t = Ut(Gw),
    n = Ut(Gw);
  return (
    pk(() => () => Yp(n, t)),
    S.useEffect(() => () => Yp(n, t), [t, n]),
    S.useEffect(() => {
      Yp(n, t);
    }, [e, t, n]),
    S.useRef({
      activeVariantCallback:
        (r) =>
        (...i) =>
          new Promise((o, s) => {
            (t.add(s), r(...i).then(o));
          }).catch(() => {}),
      delay: async (r, i) => {
        (await new Promise((o) => n.add(globalThis.setTimeout(() => o(!0), i))),
          r());
      },
    }).current
  );
}
function q5(e, t, n) {
  return S.useCallback(
    (r) => {
      var i, o, s;
      return n
        ? e
          ? t
            ? Object.assign(
                {},
                (i = n[e]) == null ? void 0 : i[r],
                (o = n[t]) == null ? void 0 : o[r],
              )
            : ((s = n[e]) == null ? void 0 : s[r]) || {}
          : {}
        : {};
    },
    [e, t, n],
  );
}
function K5(e) {
  for (let [t, n] of Object.entries(e)) if (Ge.matchMedia(n).matches) return t;
}
function Q5(e) {
  var t;
  for (let { hash: n, mediaQuery: r } of e) {
    if (!r) continue;
    if (Ge.matchMedia(r).matches) return n;
  }
  return (t = e[0]) == null ? void 0 : t.hash;
}
function FH(e, t, n = !0) {
  let r = B(yk),
    i = A(ui() ? (K5(t) ?? e) : e),
    o = A(n && r ? e : i.current),
    s = Lu(),
    a = v0(),
    l = oe(
      (c) => {
        (c !== i.current || c !== o.current) &&
          a(() => {
            ((i.current = o.current = c),
              qi(() => {
                s();
              }));
          });
      },
      [a, s],
    );
  return (
    ek(() => {
      !n || r !== !0 || l(i.current);
    }, []),
    N(() => {
      let c = [];
      for (let [u, f] of Object.entries(t)) {
        let d = Ge.matchMedia(f),
          h = (y) => {
            y.matches && l(u);
          };
        (Z5(d, h), c.push([d, h]));
      }
      return () => c.forEach(([u, f]) => J5(u, f));
    }, [t, l]),
    [i.current, o.current]
  );
}
function Z5(e, t) {
  e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
}
function J5(e, t) {
  e.removeEventListener
    ? e.removeEventListener("change", t)
    : e.removeListener(t);
}
function MH(e) {
  var t, n;
  let r = Q5(e);
  if (r)
    for (let i of document.querySelectorAll(".hidden-" + r))
      (t = i.parentNode) == null || t.removeChild(i);
  for (let i of document.querySelectorAll(".ssr-variant:empty"))
    (n = i.parentNode) == null || n.removeChild(i);
}
function ts() {
  return ae.current() === ae.canvas;
}
function qw(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function BH(e, t) {
  if (ts()) return;
  let r = S.useRef(!0),
    i = S.useRef(t);
  (pk((o, s) => {
    let a = o && !s;
    if (!r.current && a) {
      let l = qw(i.current, e);
      l && l();
    }
    r.current = a;
  }, []),
    S.useEffect(() => {
      if (r.current) {
        let o = qw(i.current, e);
        o && o();
      }
    }, [e]));
}
async function Kw(e, t, n = !0) {
  e !== !1 &&
    (n && (await Go()),
    G.render(() => {
      let r = document.documentElement.style;
      t ? r.setProperty("overflow", "hidden") : r.removeProperty("overflow");
    }));
}
function zH({ blockDocumentScrolling: e = !0 } = {}) {
  let [t, n] = S.useState(!1),
    r = S.useCallback(
      (i) => {
        (n(i), Kw(e, i));
      },
      [e],
    );
  return (
    S.useEffect(
      () => () => {
        Kw(e, !1, !1);
      },
      [e],
    ),
    [t, r]
  );
}
var e4 = class {
    constructor(e) {
      ((this.queryEngine = e), R(this, "cache", new Map()));
    }
    get(e, t) {
      let n = r4(e, t),
        r = this.cache.get(n);
      if (r) return r;
      let i = () => this.queryEngine.query(e, t),
        o = new Vu(i);
      return (this.cache.set(n, o), o);
    }
  },
  Qw = new WeakMap();
function t4(e) {
  let t = Qw.get(e);
  if (t) return t;
  let n = Math.random().toString(16).slice(2);
  return (Qw.set(e, n), n);
}
function n4(e, t) {
  return Se(t) && t.type === "Collection" && A3(t.data) ? t4(t.data) : t;
}
function r4(e, t) {
  let n = t?.id ?? "default";
  return JSON.stringify(e, n4) + n;
}
function i4(e) {
  throw e;
}
var o4 = new B5(),
  s4 = new e4(o4);
function a4(e) {
  let { activeLocale: t } = Iu(),
    n = s4.get(e, t),
    r = n.preload();
  return (r && i4(r), n.read());
}
function l4(e) {
  let t = { ...e, select: [] };
  return a4(t).length;
}
function jH(e) {
  let n = Object.entries(e)
    .filter(([, r]) => !(ct(r) || Se(r)))
    .map(([r, i]) => ({
      type: "BinaryOperation",
      operator: "==",
      left: {
        type: "TypeCast",
        value: { type: "Identifier", name: r },
        dataType: "STRING",
      },
      right: { type: "LiteralValue", value: String(i) },
    }));
  return n.length === 0
    ? { type: "LiteralValue", value: !1 }
    : n.reduce((r, i) => ({
        type: "BinaryOperation",
        operator: "and",
        left: r,
        right: i,
      }));
}
function UH(e, t, n) {
  let r = l4(e),
    [i, o] = it(() => {
      var c, u, f, d;
      let h = Math.ceil(r / t);
      return {
        currentPage:
          ((d =
            (f =
              (u = (c = globalThis?.history) == null ? void 0 : c.state) == null
                ? void 0
                : u.paginationInfo) == null
              ? void 0
              : f[n]) == null
            ? void 0
            : d.currentPage) ?? 1,
        totalPages: h,
        isLoading: !1,
      };
    });
  N(() => {
    ZF(n, i);
  }, [n, i]);
  let s = le(() => {
      let c = t * i.currentPage;
      if (e.limit) {
        if (e.limit.type !== "LiteralValue" || typeof e.limit.value != "number")
          throw new Error("Unexpected type for query limit");
        c = Math.min(c, e.limit.value);
      }
      return { ...e, limit: { type: "LiteralValue", value: c } };
    }, [e, t, i]),
    a = ts(),
    l = oe(() => {
      a ||
        i.currentPage >= i.totalPages ||
        (o((c) => ({ ...c, isLoading: !0 })),
        requestAnimationFrame(() => {
          o((c) => ({
            ...c,
            currentPage: Math.min(c.currentPage + 1, c.totalPages),
            isLoading: !1,
          }));
        }));
    }, [a, i.currentPage, i.totalPages]);
  return { paginatedQuery: s, paginationInfo: i, loadMore: l };
}
function Zw(e, t) {
  return `${e}-${t}`;
}
function c4(e, t) {
  let r = e.indexOf(t) + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return (ce(i !== void 0, "nextVariant should be defined"), i);
}
function u4(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Jw(e, t, n, r, i) {
  let { hover: o, pressed: s, loading: a, error: l } = e || {};
  if (l && i) return "error";
  if (a && r) return "loading";
  if (s && n) return "pressed";
  if (o && t) return "hover";
}
function f4(e, t) {
  let n = t[e];
  return n || `framer-v-${e}`;
}
function eS(e, t, n) {
  return e && n.has(e) ? e : t;
}
var d4 = Symbol("cycle");
function YH({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: o = {},
  variantClassNames: s = {},
}) {
  let a = Lu(),
    l = ts(),
    c = Ut(() => new Set(i)),
    u = S.useRef({
      isHovered: !1,
      isPressed: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: eS(e, t, c),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    f = S.useCallback(
      (T) => {
        let {
            isHovered: F,
            isPressed: _,
            isError: $,
            enabledGestures: D,
            defaultVariant: q,
          } = u.current,
          W = eS(T, q, c),
          H = Jw(D?.[W], F, _, !1, $),
          U = H ? Zw(W, H) : void 0;
        return [W, U];
      },
      [c],
    ),
    d = S.useCallback(
      ({ isHovered: T, isPressed: F, isError: _ }) => {
        (T !== void 0 && (u.current.isHovered = T),
          F !== void 0 && (u.current.isPressed = F),
          _ !== void 0 && (u.current.isError = _));
        let {
            baseVariant: $,
            gestureVariant: D,
            defaultVariant: q,
          } = u.current,
          [W, H] = f($);
        (W !== $ || H !== D) &&
          ((u.current.baseVariant = W || q),
          (u.current.gestureVariant = H),
          a());
      },
      [f, a],
    ),
    h = S.useCallback(
      (T) => {
        let {
            defaultVariant: F,
            cycleOrder: _,
            baseVariant: $,
            gestureVariant: D,
          } = u.current,
          q = T === d4 ? c4(_ || [], $ || F) : T,
          [W, H] = f(q);
        (W !== $ || H !== D) &&
          ((u.current.isError = !1),
          (u.current.baseVariant = W || F),
          (u.current.gestureVariant = H),
          a());
      },
      [f, a],
    ),
    y = S.useCallback(() => {
      let { baseVariant: T } = u.current;
      ((u.current.loadedBaseVariant[T] = !0), a());
    }, [a]);
  if (e !== u.current.lastVariant) {
    let [T, F] = f(e);
    ((u.current.lastVariant = T),
      (T !== u.current.baseVariant || F !== u.current.gestureVariant) &&
        ((u.current.baseVariant = T), (u.current.gestureVariant = F)));
  }
  let {
      baseVariant: g,
      gestureVariant: b,
      defaultVariant: p,
      enabledGestures: m,
      isHovered: v,
      isPressed: x,
      isError: C,
      loadedBaseVariant: w,
    } = u.current,
    E = q5(u.current.baseVariant, u.current.gestureVariant, o);
  return S.useMemo(() => {
    var T;
    let F = [];
    g !== p && F.push(g);
    let _ = (T = m?.[g]) == null ? void 0 : T.loading,
      $ = !C && !l && !!_ && !w[g],
      D = $ ? Zw(g, "loading") : b;
    D && F.push(D);
    let q = m?.[g],
      W = {
        onMouseEnter: () => d({ isHovered: !0 }),
        onMouseLeave: () => d({ isHovered: !1 }),
      };
    return (
      q?.pressed &&
        Object.assign(W, {
          onTapStart: () => d({ isPressed: !0 }),
          onTapCancel: () => d({ isPressed: !1 }),
          onTap: () => d({ isPressed: !1 }),
        }),
      {
        variants: F,
        baseVariant: g,
        gestureVariant: D,
        isLoading: $,
        transition: u4(u.current.transitions, g),
        setVariant: h,
        setGestureState: d,
        clearLoadingGesture: y,
        addVariantProps: E,
        gestureHandlers: W,
        classNames: Ui(f4(g, s), Jw(q, v, x, $, C)),
      }
    );
  }, [g, b, v, x, w, E, h, p, m, d, y, s]);
}
function h4(e) {
  var t;
  let n =
    (t = e.__FramerMetadata__.exports.default.annotations) == null
      ? void 0
      : t.framerVariables;
  if (n)
    try {
      return JSON.parse(n);
    } catch {
      return;
    }
}
function qH(e, t) {
  return (n) => {
    let r = {},
      i = h4(t);
    for (let o in n) qe(r)[i?.[o] ?? o] = n[o];
    return k(e, { ...r });
  };
}
var p4 = S.createContext(void 0),
  m4 = () => S.useContext(p4);
var v4 = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": {
        selector: "AvenirNextCondensed-UltraLight",
        weight: void 0,
      },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": {
        selector: "Futura-CondensedExtraBold",
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": {
        selector: "HelveticaNeue-UltraLightItalic",
        weight: void 0,
      },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": {
        selector: "HelveticaNeue-MediumItalic",
        weight: void 0,
      },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": {
        selector: "HelveticaNeue-CondensedBold",
        weight: void 0,
      },
      "Condensed Black": {
        selector: "HelveticaNeue-CondensedBlack",
        weight: void 0,
      },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": {
        selector: "__SF-UI-Display-Ultralight-Italic__",
        weight: 100,
      },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": {
        selector: "__SF-UI-Display-Light-Italic__",
        weight: 300,
      },
      "Medium Italic": {
        selector: "__SF-UI-Display-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Display-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": {
        selector: "__SF-UI-Display-Heavy-Italic__",
        weight: 800,
      },
      "Black Italic": {
        selector: "__SF-UI-Display-Black-Italic__",
        weight: 900,
      },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: {
        selector: "__SF-UI-Display-Condensed-Ultralight__",
        weight: 100,
      },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: {
        selector: "__SF-UI-Display-Condensed-Semibold__",
        weight: 600,
      },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": {
        selector: "__SF-UI-Text-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Text-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": {
      Regular: { selector: "Times New Roman", weight: void 0 },
    },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  g4 = {
    "__SF-Compact-Display-Regular__":
      "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__":
      "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__":
      "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__":
      "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__":
      "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__":
      "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__":
      "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__":
      "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__":
      "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__":
      ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__":
      ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__":
      ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__":
      ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__":
      ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__":
      "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__":
      "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__":
      "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__":
      "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__":
      "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__":
      "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__":
      ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__":
      ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__":
      ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__":
      ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__":
      "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__":
      "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__":
      "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__":
      "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__":
      "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__":
      "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__":
      "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__":
      "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__":
      "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  tS = v4;
var y4 = "System Default",
  b4 = class {
    constructor() {
      (R(this, "name", "local"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map()),
        R(this, "fontAliasBySelector", new Map()),
        R(this, "fontAliases", new Map()));
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return (this.addFontFamily(t), t);
    }
    addFontFamily(e) {
      (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
    }
    importFonts() {
      let e = [];
      for (let r of Object.keys(tS)) {
        let i = tS[r];
        if (!i) continue;
        let o = this.createFontFamily(r);
        for (let s of Object.keys(i)) {
          let a = i[s];
          if (!a) continue;
          let { selector: l, weight: c } = a,
            u = { variant: s, selector: l, weight: c, family: o };
          o.fonts.push(u);
        }
        e.push(...o.fonts);
      }
      for (let [r, i] of Object.entries(g4)) this.addFontAlias(r, i);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [r, i] of n) this.addFontAlias(r, i);
      return (e.push(...t.fonts), e);
    }
    addFontAlias(e, t) {
      (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: y4, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ["normal", "italic"];
      for (let o of i)
        for (let s of r) {
          let a = x4(s, o),
            l = `__SystemDefault-${s}-${o}__`,
            c = { variant: a, selector: l, style: o, weight: s, family: t };
          (t.fonts.push(c), n.set(l, e));
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  nS = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function x4(e, t) {
  let n = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? n : t !== "normal" ? `${nS[e]} ${n}` : `${nS[e]}`;
}
var w4 = jn(fm(), 1),
  Wo = "CUSTOM;";
function S4(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf("."));
  let n =
      t.font.preferredFamily === ""
        ? t.font.fontFamily
        : t.font.preferredFamily,
    r =
      t.font.preferredSubFamily === ""
        ? t.font.fontSubFamily
        : t.font.preferredSubFamily;
  return `${n} ${r}`;
}
var k4 = class {
  constructor() {
    (R(this, "name", "custom"),
      R(this, "fontFamilies", []),
      R(this, "byFamilyName", new Map()),
      R(this, "assetsByFamily", new Map()));
  }
  importFonts(e) {
    var t, n;
    ((this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear());
    let r = [];
    for (let i of e) {
      if (!this.isValidCustomFontAsset(i)) continue;
      let o = S4(i.name, i.properties),
        s = this.createFontFamily(o),
        a = (t = i.properties) == null ? void 0 : t.font.openTypeData,
        l = {
          family: s,
          selector: `${Wo}${o}`,
          variant: this.inferVariantName(o),
          postscriptName:
            (n = i.properties) == null ? void 0 : n.font.postscriptName,
          file: i.url,
          openTypeFeatures: this.validateOpenTypeData(a),
        };
      (s.fonts.push(l),
        (s.owner = i.ownerType === "team" ? "team" : "project"),
        this.assetsByFamily.set(o, i),
        r.push(...s.fonts));
    }
    return r;
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith("font/") ||
      ((t = e.properties) == null ? void 0 : t.kind) !== "font" ||
      !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  validateOpenTypeData(e) {
    if (e && Array.isArray(e))
      return e.map((t) => {
        if (this.isOpenTypeFeature(t))
          return { tag: t.tag, coverage: t.coverage };
      });
  }
  isOpenTypeFeature(e) {
    return !(
      typeof e != "object" ||
      e === null ||
      !("tag" in e) ||
      typeof e.tag != "string" ||
      ("coverage" in e && typeof e.coverage < "u" && !Array.isArray(e.coverage))
    );
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      n = [...t.map((s) => `${s} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
      o = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/gu, "")));
    return o ? o.replace(/^\w|\s\w/gu, (s) => s.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return (this.addFontFamily(n), n);
  }
  addFontFamily(e) {
    (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
  }
  parseSelector(e) {
    if (!e.startsWith(Wo)) return null;
    let t = e.split(Wo);
    return t[1] === void 0 ? null : { source: "custom", name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var s;
        return (s = o.file) == null ? void 0 : s.endsWith(".woff2");
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: "custom", name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${Wo}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function tC(e, t, n) {
  if (t.length === 0) return {};
  let r = n(e);
  if (!r) return {};
  let { weight: i, style: o } = r,
    s = new Map(),
    a = new Map();
  t.forEach((f) => {
    let d = fe(f) ? f : f.name.toLocaleLowerCase(),
      h = n(d);
    h &&
      (s.set(`${h.weight}-${h.style}`, d),
      !(h.weight <= i) && (a.has(h.style) || a.set(h.style, d)));
  });
  let l = a.get(o),
    c = a.get("italic") ?? a.get("oblique");
  r.weight <= 300
    ? ((l = s.get(`400-${o}`) ?? l),
      (c = s.get("400-italic") ?? s.get("400-oblique") ?? c))
    : r.weight <= 500
      ? ((l = s.get(`700-${o}`) ?? l),
        (c = s.get("700-italic") ?? s.get("700-oblique") ?? c))
      : ((l = s.get(`900-${o}`) ?? l),
        (c = s.get("900-italic") ?? s.get("900-oblique") ?? c));
  let u = s.get(`${i}-italic`) ?? s.get(`${i}-oblique`);
  return { variantBold: l, variantItalic: u, variantBoldItalic: c };
}
var C4 = ["display", "sans", "serif", "slab", "handwritten", "script"];
function T4(e) {
  return e
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(E4);
}
function E4(e) {
  return C4.includes(e);
}
var pu = "FS;",
  nC = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  rC = Object.keys(nC),
  R4 = (() => new RegExp(`^(?:${[...rC, "italic"].join("|")})`, "u"))(),
  ai = class {
    constructor() {
      (R(this, "name", "fontshare"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map()));
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.split(" "),
        n = rC.find((s) => t.includes(s)),
        r = e.includes("italic") ? "italic" : "normal";
      return {
        weight: (n && nC[n]) || 400,
        style: r === "italic" ? r : "normal",
      };
    }
    parseSelector(e) {
      if (!e.startsWith(pu)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(pu, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${pu}${e}-${t.toLowerCase()}`;
    }
    addFontFamily(e) {
      (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
    }
    importFonts(e) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let t = [];
      for (let n of e) {
        let r = n.font_styles.filter((i) => {
          let o = i.name.toLowerCase();
          return !(!R4.exec(o) || o.endsWith("wide"));
        });
        for (let i of r) {
          let { name: o } = n,
            s = i.name.toLowerCase(),
            a = this.getFontFamilyByName(o);
          a ||
            ((a = { name: o, fonts: [], source: this.name }),
            this.addFontFamily(a));
          let l = ai.createSelector(o, s),
            c = ai.parseVariant(s) || { weight: void 0, style: void 0 },
            { weight: u, style: f } = c,
            {
              variantBold: d,
              variantBoldItalic: h,
              variantItalic: y,
            } = tC(s, r, ai.parseVariant),
            g = {
              family: a,
              variant: s,
              selector: l,
              selectorBold: d ? ai.createSelector(o, d) : void 0,
              selectorBoldItalic: h ? ai.createSelector(o, h) : void 0,
              selectorItalic: y ? ai.createSelector(o, y) : void 0,
              weight: u,
              style: f,
              file: i.file,
              category: P4(n.category),
            };
          (a.fonts.push(g), t.push(g));
        }
      }
      return t;
    }
  };
function P4(e) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = T4(e)[0];
  return n && t[n];
}
var _4 = "Inter",
  I4 = "FR;",
  F4 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  rS = class {
    constructor() {
      (R(this, "name", "framer"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map()));
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(I4) && !e.startsWith(_4)) return null;
      let t = e.split("-"),
        [n, r = ""] = t;
      if (!n) return null;
      let i = r.includes("Italic") ? "italic" : "normal",
        o = r.replace("Italic", ""),
        s = (o && F4[o]) || 400;
      return {
        family: n,
        style: i,
        weight: s,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    importFonts(e) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let t = [];
      return (
        e.forEach((n) => {
          let { familyName: r, ...i } = n,
            o = this.getFontFamilyByName(r);
          o || (o = this.addFontFamily(r));
          let s = { ...i, family: o };
          (o.fonts.push(s), t.push(s));
        }),
        t
      );
    }
  },
  mu = "GF;",
  li = class {
    constructor() {
      (R(this, "name", "google"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map()));
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /(\d*)(normal|italic)?/.exec(e);
      if (!t) return null;
      let n = parseInt(t[1] || "400"),
        r = t[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith(mu)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(mu, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${mu}${e}-${t}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
    }
    importFonts(e) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let t = [];
      return (
        e.forEach((n) => {
          n.variants.forEach((r) => {
            var i;
            let o = n.family,
              s = this.getFontFamilyByName(o);
            s || (s = this.addFontFamily(o));
            let a = li.parseVariant(r) ?? {},
              { weight: l, style: c } = a,
              u = li.createSelector(o, r),
              {
                variantBold: f,
                variantItalic: d,
                variantBoldItalic: h,
              } = tC(r, n.variants, li.parseVariant),
              y = {
                family: s,
                variant: r,
                selector: u,
                selectorBold: f ? li.createSelector(o, f) : void 0,
                selectorBoldItalic: h ? li.createSelector(o, h) : void 0,
                selectorItalic: d ? li.createSelector(o, d) : void 0,
                weight: l,
                style: c,
                category: M4(n.category),
                file:
                  (i = n.files[r]) == null
                    ? void 0
                    : i.replace("http://", "https://"),
              };
            (s.fonts.push(y), t.push(y));
          });
        }),
        t
      );
    }
  };
function M4(e) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (e) return t[e];
}
var L4 = jn(gF(), 1),
  iS = 5e3,
  O4 = 3,
  iC = class extends Error {
    constructor(e) {
      (super(e), (this.name = "FontLoadingError"));
    }
  },
  Gp = new Map(),
  qp = new Map(),
  D4 = (e, t) => oC(e, t);
async function oC(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: s } = e,
    a = e.weight || 500,
    l = e.style || "normal",
    c = `${r}-${l}-${a}-${i}`;
  if (!Gp.has(c) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: fe(a) ? a : a?.toString(),
        style: l,
        stretch: o,
        unicodeRange: s,
      }),
      f = u
        .load()
        .then(() => (t.fonts.add(u), sC(r, l, a)))
        .catch((d) => {
          if (d.name !== "NetworkError") throw d;
          if (n < O4) return oC(e, t, n + 1);
          throw new iC(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: l, weight: a, url: i, stretch: o, unicodeRange: s })}`,
          );
        });
    Gp.set(c, f);
  }
  await Gp.get(c);
}
async function sC(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!qp.has(r)) {
    let o = new L4.default(e, { style: t, weight: n }).load(null, iS);
    qp.set(r, o);
  }
  try {
    await qp.get(r);
  } catch {
    throw new iC(
      `Failed to check if font is ready (${iS}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`,
    );
  }
}
var A4 = class {
    constructor() {
      (R(this, "enabled", !1),
        R(this, "bySelector", new Map()),
        R(this, "getGoogleFontsListPromise"),
        R(this, "getFontshareFontsListPromise"),
        R(this, "loadedSelectors", new Set()),
        R(this, "local"),
        R(this, "google"),
        R(this, "fontshare"),
        R(this, "framer"),
        R(this, "custom"),
        (this.local = new b4()),
        (this.google = new li()),
        (this.fontshare = new ai()),
        (this.framer = new rS()),
        (this.custom = new k4()),
        (this.bySelector = new Map()),
        this.importLocalFonts());
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      for (let e of this.local.importFonts())
        (this.addFont(e), this.loadFont(e));
    }
    async importGoogleFonts() {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = lt.fetchGoogleFontsList();
        let e = await this.getGoogleFontsListPromise;
        for (let t of this.google.importFonts(e)) this.addFont(t);
      }
      return this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = lt.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise;
        for (let t of this.fontshare.importFonts(e)) this.addFont(t);
      }
      return this.getFontshareFontsListPromise;
    }
    importFramerFonts(e) {
      this.framer.importFonts(e).forEach((t) => {
        this.addFont(t);
      });
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith(Wo) && this.bySelector.delete(n);
      });
      for (let t of this.custom.importFonts(e)) this.addFont(t);
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      if (e)
        return e.startsWith(Wo)
          ? this.custom.getFontBySelector(e, t)
          : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: t.family.name,
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let o = li.parseVariant(n.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: n.variant,
            family: n.name,
            source: "google",
            category: void 0,
          };
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let o = ai.parseVariant(r.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: r.variant,
            family: r.name,
            source: "fontshare",
            category: void 0,
          };
      }
      let i = rS.getDraftFontPropertiesBySelector(e);
      return i || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      if (this.isSelectorLoaded(e.selector)) return 0;
      let t = e.family.source;
      switch (t) {
        case "local":
          return (this.loadedSelectors.add(e.selector), 1);
        case "framer":
          return (
            w4.default.env.NODE_ENV !== "test" &&
              (await sC(e.family.name, e.style, e.weight)),
            this.loadedSelectors.add(e.selector),
            1
          );
        case "google":
        case "fontshare":
        case "custom":
          return e.file
            ? (await D4(
                {
                  family: e.family.name,
                  url: e.file,
                  weight: e.weight,
                  style: e.style,
                },
                document,
              ),
              this.loadedSelectors.add(e.selector),
              1)
            : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
          Le(t);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith(mu)),
        n = e.some((i) => i.startsWith(pu));
      if (t || n) {
        try {
          await this.importFontshareFonts();
        } catch (i) {
          Ea("Failed to load Fontshare fonts:", i);
        }
        try {
          await this.importGoogleFonts();
        } catch (i) {
          Ea("Failed to load Google fonts:", i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1,
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !vu.isSelectorLoaded(i));
      if (n.length === 0) return;
      (await vu.loadWebFontsFromSelectors(n),
        n.every((i) => vu.isSelectorLoaded(i)) && t && t());
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return (ce(e, "Can\u2019t find Inter font"), e);
    }
  },
  vu = new A4();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: "fulfilled", value: n }))
          .catch((n) => ({ status: "rejected", reason: n })),
      ),
    ));
var aC = ((e) => (
    (e.Padding = "--framer-input-padding"),
    (e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left"),
    (e.BorderRadiusTopRight = "--framer-input-border-radius-top-right"),
    (e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right"),
    (e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left"),
    (e.BorderColor = "--framer-input-border-color"),
    (e.BorderTopWidth = "--framer-input-border-top-width"),
    (e.BorderRightWidth = "--framer-input-border-right-width"),
    (e.BorderBottomWidth = "--framer-input-border-bottom-width"),
    (e.BorderLeftWidth = "--framer-input-border-left-width"),
    (e.BorderStyle = "--framer-input-border-style"),
    (e.Background = "--framer-input-background"),
    (e.FontFamily = "--framer-input-font-family"),
    (e.FontWeight = "--framer-input-font-weight"),
    (e.FontSize = "--framer-input-font-size"),
    (e.FontColor = "--framer-input-font-color"),
    (e.FontStyle = "--framer-input-font-style"),
    (e.FontLetterSpacing = "--framer-input-font-letter-spacing"),
    (e.FontTextAlignment = "--framer-input-font-text-alignment"),
    (e.FontLineHeight = "--framer-input-font-line-height"),
    (e.PlaceholderColor = "--framer-input-placeholder-color"),
    (e.BoxShadow = "--framer-input-box-shadow"),
    (e.FocusedBorderColor = "--framer-input-focused-border-color"),
    (e.FocusedBorderWidth = "--framer-input-focused-border-width"),
    (e.FocusedBorderStyle = "--framer-input-focused-border-style"),
    (e.FocusedBackground = "--framer-input-focused-background"),
    (e.FocusedBoxShadow = "--framer-input-focused-box-shadow"),
    (e.FocusedTransition = "--framer-input-focused-transition"),
    (e.BooleanCheckedBackground = "--framer-input-boolean-checked-background"),
    (e.BooleanCheckedBorderColor =
      "--framer-input-boolean-checked-border-color"),
    (e.BooleanCheckedBorderWidth =
      "--framer-input-boolean-checked-border-width"),
    (e.BooleanCheckedBorderStyle =
      "--framer-input-boolean-checked-border-style"),
    (e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow"),
    (e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition"),
    (e.InvalidTextColor = "--framer-input-invalid-text-color"),
    (e.IconBackgroundImage = "--framer-input-icon-image"),
    (e.IconMaskImage = "--framer-input-icon-mask-image"),
    (e.IconColor = "--framer-input-icon-color"),
    (e.WrapperHeight = "--framer-input-wrapper-height"),
    e
  ))(aC || {}),
  we = aC,
  Ot = "framer-form-input",
  Ya = "framer-form-input-wrapper",
  lC = "framer-form-input-empty",
  Eu = "framer-form-input-forced-focus";
function V4(e) {
  return typeof e == "number"
    ? e
    : e.startsWith("--")
      ? V.variable(e)
      : e === ""
        ? '""'
        : e;
}
function V(e, t) {
  let n = " ";
  for (let r in t) {
    let i = t[r];
    n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${V4(i)}; `;
  }
  return e + " {" + n + "}";
}
((e) => {
  function t(...n) {
    let r = n[n.length - 1],
      i = r.startsWith("--") ? `var(${r})` : r;
    for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
    return i;
  }
  e.variable = t;
})(V || (V = {}));
var cC = [
    V(`.${Ot}`, {
      padding: V.variable(we.Padding),
      background: "transparent",
      fontFamily: V.variable(we.FontFamily),
      fontWeight: V.variable(we.FontWeight),
      fontSize: V.variable(we.FontSize),
      fontStyle: V.variable(we.FontStyle),
      color: V.variable(we.FontColor),
      border: "none",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "100%",
      height: V.variable(we.WrapperHeight, "100%"),
      letterSpacing: V.variable(we.FontLetterSpacing),
      textAlign: V.variable(we.FontTextAlignment),
      lineHeight: V.variable(we.FontLineHeight),
    }),
    V(`.${Ot}:focus-visible`, { outline: "none" }),
  ],
  uC = (() => [V(`.${Ya}`, { overflow: "hidden" })])(),
  fC = `var(${we.BorderTopWidth}) var(${we.BorderRightWidth}) var(${we.BorderBottomWidth}) var(${we.BorderLeftWidth})`,
  dC = [
    `.${Ya}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${we.BorderRadiusTopLeft});
        border-top-right-radius: var(${we.BorderRadiusTopRight});
        border-bottom-right-radius: var(${we.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${we.BorderRadiusBottomLeft});
        border-color: var(${we.BorderColor});
        border-top-width: var(${we.BorderTopWidth});
        border-right-width: var(${we.BorderRightWidth});
        border-bottom-width: var(${we.BorderBottomWidth});
        border-left-width: var(${we.BorderLeftWidth});
        border-style: var(${we.BorderStyle});
        transition: var(${we.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`,
  ],
  B4 = "customError",
  $4 = "valid";
function z4(e) {
  return e !== B4 && e !== $4;
}
function oS(e) {
  for (let t in e) if (z4(t) && e?.[t] === !0) return !0;
  return !1;
}
function hC(e, t, n, r, i) {
  let o = S.useRef(null),
    s = S.useCallback(
      (c) => {
        t &&
          o.current !== !1 &&
          ((o.current = !1),
          c.currentTarget.setCustomValidity(" "),
          c.currentTarget.reportValidity(),
          t(c));
      },
      [t],
    ),
    a = S.useCallback(
      (c) => {
        if ((n?.(c), !t && !e)) return;
        let u = c.target.validity;
        o.current === !1 &&
          !oS(u) &&
          (c.currentTarget.setCustomValidity(""),
          c.target.reportValidity(),
          (o.current = !0),
          e?.());
      },
      [t, e, n],
    ),
    l = S.useCallback(
      (c) => {
        if (!t) {
          r?.(c);
          return;
        }
        if (o.current === !1) return;
        let u = c.currentTarget.validity;
        if (oS(u)) {
          s(c);
          return;
        }
        r?.(c);
      },
      [s, r, t],
    );
  return S.useMemo(
    () => ({ onInvalid: s, onChange: a, onBlur: l, onFocus: i }),
    [s, a, l, i],
  );
}
var Yo = 10,
  Kp = 16,
  pC = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${Kp}px`,
    boxSizing: "content-box",
    padding: V.variable(we.Padding),
    border: "none",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${Kp}px`,
    maskRepeat: "no-repeat",
    maskSize: `${Kp}px`,
    backgroundColor: V.variable(we.IconColor),
  },
  N4 = {
    "data-1p-ignore": !0,
    "data-lpignore": !0,
    "data-form-type": "other",
    autocomplete: "off",
  },
  H4 = S.forwardRef(function (t, n) {
    let {
        autoFocus: r,
        className: i,
        inputName: o,
        max: s,
        min: a,
        placeholder: l,
        required: c,
        step: u,
        style: f,
        type: d,
        defaultValue: h,
        autofillEnabled: y,
        onChange: g,
        onBlur: b,
        onInvalid: p,
        onFocus: m,
        onValid: v,
        ...x
      } = t,
      [C, w] = S.useState(!!h),
      E = S.useCallback(
        (_) => {
          let $ = _.target.value;
          (g?.(_), w(!!$));
        },
        [g],
      ),
      T = hC(v, p, E, b, m);
    N(() => {
      w(!!h);
    }, [h]);
    let F = y === !1 ? N4 : void 0;
    return d === "hidden"
      ? k(Qe.input, { type: "hidden", name: o, defaultValue: h })
      : k(Qe.div, {
          ref: n,
          style: f,
          className: Ui(Je, Ya, i),
          ...x,
          children:
            d === "textarea"
              ? ns(Qe.textarea, {
                  ...F,
                  ...T,
                  key: h,
                  required: c,
                  autoFocus: r,
                  name: o,
                  placeholder: l,
                  className: Ot,
                  defaultValue: h,
                })
              : ns(Qe.input, {
                  ...F,
                  ...T,
                  key: h,
                  type: d,
                  required: c,
                  autoFocus: r,
                  name: o,
                  placeholder: l,
                  className: Ui(Ot, !C && lC),
                  defaultValue: h,
                  min: a,
                  max: s,
                  step: u,
                }),
        });
  }),
  j4 = 16,
  Je = "framer-form-text-input",
  W4 =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>',
  U4 =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>',
  X4 =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>',
  Y4 = (() => [
    ...cC,
    ...dC,
    ...uC,
    V(`.${Ya}`, {
      boxShadow: V.variable("--framer-input-box-shadow"),
      borderTopLeftRadius: V.variable("--framer-input-border-radius-top-left"),
      borderTopRightRadius: V.variable(
        "--framer-input-border-radius-top-right",
      ),
      borderBottomRightRadius: V.variable(
        "--framer-input-border-radius-bottom-right",
      ),
      borderBottomLeftRadius: V.variable(
        "--framer-input-border-radius-bottom-left",
      ),
      background: V.variable("--framer-input-background"),
      transition: V.variable("--framer-input-focused-transition"),
      transitionProperty: "background, box-shadow",
    }),
    V(`.${Je} .${Ot}::placeholder`, {
      color: V.variable("--framer-input-placeholder-color"),
    }),
    V(`.${Je} .${Ot}[type="date"], .${Je} .${Ot}[type="time"]`, {
      "-webkit-appearance": "none",
      appearance: "none",
    }),
    V(`.${Je} .${Ot}::-webkit-date-and-time-value`, { textAlign: "start" }),
    V(`.${Je} textarea`, {
      display: "flex",
      resize: V.variable("--framer-textarea-resize"),
      overflowY: "auto",
      minHeight: "inherit",
      maxHeight: "inherit",
      whiteSpace: "break-spaces",
    }),
    V(`.${Je} textarea::-webkit-resizer`, {
      background: `no-repeat url('${W4}')`,
    }),
    V(`.${Je} textarea::-webkit-scrollbar`, {
      cursor: "pointer",
      background: "transparent",
    }),
    V(`.${Je} textarea::-webkit-scrollbar-thumb:window-inactive`, {
      opacity: 0,
    }),
    V(`.${Je} textarea::-webkit-scrollbar-corner`, {
      background: "none",
      backgroundColor: "transparent",
      outline: "none",
    }),
    V(`.${Je} .${Ot}.${lC}::-webkit-datetime-edit`, {
      color: V.variable("--framer-input-placeholder-color"),
      "-webkit-text-fill-color": V.variable("--framer-input-placeholder-color"),
      height: V.variable("--framer-input-font-line-height"),
      overflow: "visible",
    }),
    V(
      `.${Je} .${Ot}[type="date"]::before, .${Je} .${Ot}[type="time"]::before`,
      {
        ...pC,
        paddingLeft: `${Yo}px`,
        maskPosition: `${Yo}px center`,
        backgroundPosition: `${Yo}px center`,
      },
    ),
    V(`.${Je} .${Ot}[type="date"]::before`, {
      maskImage: V.variable("--framer-input-icon-mask-image", `url('${U4}')`),
      backgroundImage: V.variable("--framer-input-icon-image"),
    }),
    V(`.${Je} .${Ot}[type="time"]::before`, {
      maskImage: V.variable("--framer-input-icon-mask-image", `url('${X4}')`),
      backgroundImage: V.variable("--framer-input-icon-image"),
    }),
    V(`.${Je} .${Ot}::-webkit-calendar-picker-indicator`, {
      opacity: 0,
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      padding: V.variable("--framer-input-padding"),
      paddingTop: 0,
      paddingBottom: 0,
      width: `${j4}px`,
      height: "100%",
    }),
    V(`.${Je}:focus-within, .${Je}.${Eu}`, {
      boxShadow: V.variable(
        "--framer-input-focused-box-shadow",
        "--framer-input-box-shadow",
      ),
      background: V.variable(
        "--framer-input-focused-background",
        "--framer-input-background",
      ),
    }),
    V(`.${Je}:focus-within::after, .${Je}.${Eu}::after`, {
      borderColor: V.variable(
        "--framer-input-focused-border-color",
        "--framer-input-border-color",
      ),
      borderStyle: V.variable(
        "--framer-input-focused-border-style",
        "--framer-input-border-style",
      ),
      borderWidth: V.variable("--framer-input-focused-border-width", fC),
    }),
  ])(),
  lj = Em(H4, Y4);
var G4 = S.forwardRef(function (t, n) {
    let {
        autoFocus: r,
        className: i,
        inputName: o,
        required: s,
        hidden: a,
        defaultValue: l,
        selectOptions: c,
        style: u,
        onValid: f,
        onChange: d,
        onBlur: h,
        onInvalid: y,
        onFocus: g,
        ...b
      } = t,
      p = hC(f, y, d, h, g),
      m = Array.isArray(l) ? l[0] : l;
    return a
      ? k(Qe.input, { type: "hidden", name: o, defaultValue: l })
      : k(Qe.div, {
          ref: n,
          style: u,
          className: Ui(Ya, xr, i),
          ...b,
          children: k(
            Qe.select,
            {
              name: o,
              autoFocus: r,
              required: s,
              className: Ot,
              defaultValue: l,
              ...p,
              children: c?.map((v, x) => {
                switch (v.type) {
                  case "divider":
                    return k("hr", {}, x);
                  case "option":
                    return k(
                      "option",
                      {
                        value: v.value ?? v.title,
                        disabled: v.disabled,
                        children: v.title ?? v.value,
                      },
                      x,
                    );
                }
              }),
            },
            m,
          ),
        });
  }),
  xr = "framer-form-select-wrapper",
  sS = 16,
  q4 = (() =>
    `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${sS}" height="${sS}"><path d="M 3.5 6 L 8 10.5 L 12.5 6" fill="transparent" stroke-width="1.5" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`)(),
  K4 = (() => [
    ...cC,
    ...dC,
    ...uC,
    V(`.${xr}`, {
      padding: V.variable("--framer-input-padding"),
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      background: V.variable("--framer-input-background"),
      borderTopLeftRadius: V.variable("--framer-input-border-radius-top-left"),
      borderTopRightRadius: V.variable(
        "--framer-input-border-radius-top-right",
      ),
      borderBottomRightRadius: V.variable(
        "--framer-input-border-radius-bottom-right",
      ),
      borderBottomLeftRadius: V.variable(
        "--framer-input-border-radius-bottom-left",
      ),
      boxShadow: V.variable("--framer-input-box-shadow"),
      transition: V.variable("--framer-input-focused-transition"),
      transitionProperty: "background, box-shadow",
    }),
    V(`.${xr} select`, {
      appearance: "none",
      "-webkit-appearance": "none",
      padding: V.variable("--framer-input-padding"),
      background: "transparent",
    }),
    V(`.${xr}::before`, {
      ...pC,
      paddingLeft: `${Yo}px`,
      backgroundPosition: `${Yo}px center`,
      maskPosition: `${Yo}px center`,
      backgroundImage: V.variable("--framer-input-icon-image"),
      maskImage: V.variable("--framer-input-icon-mask-image", `url('${q4}')`),
    }),
    V(`.${xr} select:required:invalid`, {
      color: V.variable("--framer-input-invalid-text-color"),
    }),
    V(`.${xr}:focus-within, .${xr}.${Eu}`, {
      background: V.variable(
        "--framer-input-focused-background",
        "--framer-input-background",
      ),
      boxShadow: V.variable(
        "--framer-input-focused-box-shadow",
        "--framer-input-box-shadow",
      ),
    }),
    V(`.${xr}:focus-within::after, .${xr}.${Eu}::after`, {
      borderColor: V.variable(
        "--framer-input-focused-border-color",
        "--framer-input-border-color",
      ),
      borderStyle: V.variable(
        "--framer-input-focused-border-style",
        "--framer-input-border-style",
      ),
      borderWidth: V.variable("--framer-input-focused-border-width", fC),
    }),
  ])(),
  hj = Em(G4, K4),
  vj = S.forwardRef(function (t, n) {
    let { background: r, children: i, alt: o, ...s } = t,
      a = { ...s.style };
    r && delete a.background;
    let l = Ha(t.as);
    return se(l, {
      ...s,
      style: a,
      ref: n,
      children: [r && k(ZS, { image: r, alt: o }), i],
    });
  });
function Q4(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var Z4 = /[^\p{Letter}\p{Number}()]+/gu,
  J4 = /^-+|-+$/gu;
function eB(e) {
  return e.toLowerCase().replace(Z4, "-").replace(J4, "");
}
var tB = /[&<>'"]/g,
  nB = (e) =>
    e.replace(
      tB,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[t] || t,
    ),
  rB =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function iB(e, t, n, r) {
  return e.replace(rB, (i, o, s, a, l, c, u) => {
    var f, d;
    if (s.toLowerCase() !== "a") return i;
    let h = l || c,
      y = _m(h.replace(/&amp;/g, "&"));
    if (!y || !y.target) return i;
    let g = t(y.target);
    if (!ow(g) || !ow(n)) return i;
    let b = g.path,
      p = n.path;
    if (!b || !p) return i;
    let m = ` data-framer-page-link-target="${y.target}"`,
      v = Pu(g, y.element ?? void 0);
    v && (m += ` data-framer-page-link-element="${y.element}"`);
    let x = ku(h);
    if (!x || fe(x)) return i;
    Vk(n, x, r) && (m += " data-framer-page-link-current");
    let C = b,
      w = Object.assign(
        {},
        r,
        (f = y.collectionItem) == null ? void 0 : f.pathVariables,
      );
    if (
      (Object.keys(w).length > 0 && (C = C.replace(Ak, (E, T) => "" + w[T])),
      (d = y.collectionItem) != null && d.pathVariables)
    ) {
      let E = new URLSearchParams(y.collectionItem.pathVariables);
      m += ` data-framer-page-link-path-variables="${E}"`;
    }
    return ((C = yS(p, C)), o + a + `"${nB(C + (v ? `#${v}` : ""))}"` + m + u);
  });
}
var oB = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  mC = /[&<>"']/gu,
  sB = (() => new RegExp(mC.source))();
function aS(e) {
  return e && sB.test(e) ? e.replace(mC, (t) => oB[t] ?? "") : e || "";
}
var lS = "{{ text-placeholder }}",
  aB = "rich-text-wrapper",
  lB = Oe(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: h,
        top: y,
        bottom: g,
        center: b,
        className: p,
        stylesPresetsClassName: m,
        visible: v = !0,
        opacity: x,
        rotation: C = 0,
        verticalAlignment: w = "top",
        isEditable: E = !1,
        willChangeTransform: T,
        environment: F = ae.current,
        withExternalLayout: _ = !1,
        positionSticky: $,
        positionStickyTop: D,
        positionStickyRight: q,
        positionStickyBottom: W,
        positionStickyLeft: H,
        __htmlStructure: U,
        __fromCanvasComponent: ee = !1,
        _forwardedOverrideId: te,
        _forwardedOverrides: Y,
        _usesDOMRect: ne,
        children: ge,
        ...re
      } = t,
      de = za(),
      ie = ja(t),
      ut = A(null),
      Te = n ?? ut,
      { navigate: Rt, getRoute: be } = Xi(),
      Xt = Jo();
    (RM(t.preload ?? []), Ou(t, Te));
    let wn = B(es),
      Sn = ts(),
      he = a,
      Dn = te ?? r;
    if (Dn && Y) {
      let Ue = Y[Dn];
      typeof Ue == "string" && (he = Ue);
    }
    let rt = "";
    if (he) {
      let Ue = aS(he);
      rt = U ? U.replace(lS, Ue) : `<p>${Ue}</p>`;
    } else if (o) rt = o;
    else if (l) {
      let Ue = aS(l);
      rt = U ? U.replace(lS, Ue) : `<p>${Ue}</p>`;
    } else s && (rt = s);
    let ln = Fm(),
      Ga = le(
        () => (Sn || !be || !Xt ? rt : iB(rt, be, Xt, ln)),
        [Sn, rt, be, Xt, ln],
      );
    if (
      (N(() => {
        let Ue = Te.current;
        if (Ue === null) return;
        function nr(Yt) {
          let fi = Pm(Yt.target, Te.current);
          if (
            Yt.metaKey ||
            !Rt ||
            !fi ||
            fi.getAttribute("target") === "_blank"
          )
            return;
          BV(Rt, fi, ln) && Yt.preventDefault();
        }
        return (
          Ue.addEventListener("click", nr),
          () => {
            Ue.removeEventListener("click", nr);
          }
        );
      }, [Rt, ln]),
      gC(c, ee, Te),
      dt(() => {
        Na();
      }, []),
      !v)
    )
      return null;
    let P = E && F() === ae.canvas,
      I = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: vC(w),
        opacity: P ? 0 : x,
        flexShrink: 0,
      },
      O = ae.hasRestrictions(),
      j = Ra(t, de || 0, !1),
      pe = ne && (u === "auto" || f === "auto"),
      ft =
        !!t.transformTemplate || !j || !O || ee || pe
          ? (t.transformTemplate ?? Mu(b))
          : void 0;
    if (!_) {
      if (j && O && !pe) {
        let Ue = nt.getNumber(C).toFixed(4);
        ((I.transform = `translate(${j.x}px, ${j.y}px) rotate(${Ue}deg)`),
          (I.width = j.width),
          (I.minWidth = j.width),
          (I.height = j.height));
      } else
        ((I.left = d),
          (I.right = h),
          (I.top = y),
          (I.bottom = g),
          (I.width = u),
          (I.height = f),
          (I.rotate = C));
      $
        ? (!Sn || wn) &&
          ((I.position = "sticky"),
          (I.willChange = "transform"),
          (I.zIndex = 1),
          (I.top = D),
          (I.right = q),
          (I.bottom = W),
          (I.left = H))
        : Sn &&
          (t.positionFixed || t.positionAbsolute) &&
          (I.position = "absolute");
    }
    return (
      Tm(t, I),
      dk(t, I),
      T && Sm(I),
      Object.assign(I, t.style),
      k(Qe.div, {
        id: r,
        ref: Te,
        ...re,
        style: I,
        layoutId: ie,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": b,
        className: Ui(p, m, aB),
        transformTemplate: ft,
        dangerouslySetInnerHTML: { __html: Ga },
      })
    );
  });
function vC(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function gC(e, t, n) {
  let r = A([]);
  Q4(r.current, e) ||
    ((r.current = e),
    vu.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t ||
        !n.current ||
        ae.current() !== ae.canvas ||
        (i > 0 && eD(n.current));
    }));
}
var yC = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  skewX: 0,
  skewY: 0,
  filter: "none",
};
function cB(e) {
  return e in yC;
}
function uB(e) {
  let t = {};
  for (let n in e) !cB(n) || ct(e[n]) || (t[n] = [e[n], yC[n]]);
  return t;
}
var fB =
  /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu;
function dB(e, t = "character", n, r) {
  switch (t) {
    case "character":
    case "line": {
      let i = e.split(" "),
        o = i.length - 1;
      return i.map((s, a) => {
        var l;
        let c = a === o,
          u = s.length <= 12;
        return se(Re, {
          children: [
            k(
              "span",
              {
                style: { whiteSpace: u ? "nowrap" : "unset" },
                children:
                  (l = s.match(fB)) == null
                    ? void 0
                    : l.map((f, d) => {
                        let h = rs();
                        return (
                          n.add(h),
                          k("span", { ref: h, style: r, children: f }, f + d)
                        );
                      }),
              },
              s + a,
            ),
            c ? null : " ",
          ],
        });
      });
    }
    case "word": {
      let i = e.split(" "),
        o = i.length - 1;
      return i.map((s, a) => {
        let l = a === o,
          c = rs();
        return (
          n.add(c),
          se(Re, {
            children: [
              k("span", { ref: c, style: r, children: s }, s + a),
              l ? null : " ",
            ],
          })
        );
      });
    }
    case "element":
    default:
      return e;
  }
}
function hB(e) {
  let t = e.type;
  switch (t) {
    case "appear":
      return e.tokenization ?? "character";
    default:
      Le(t);
  }
}
function cS(e) {
  let t = [];
  return (
    $e(e.x) && t.push(`translateX(${e.x}px)`),
    $e(e.y) && t.push(`translateY(${e.y}px)`),
    $e(e.scale) && t.push(`scale(${e.scale})`),
    $e(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    $e(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    $e(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    $e(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    $e(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(" ")
  );
}
function pB(e, t, n) {
  if (!n || !n.effect) return;
  let r = n.type;
  switch (r) {
    case "appear":
      switch (n.tokenization) {
        case "element":
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: cS(n.effect),
              };
        case "line":
        case "word":
        case "character":
        default:
          return !e || !t
            ? { display: "inline-block" }
            : {
                display: "inline-block",
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: cS(n.effect),
              };
      }
    default:
      Le(r);
  }
}
function mB(e, t, n) {
  let r = Ut(() => new Set()),
    i = ts(),
    o = n || !i,
    s = A({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let a = e?.trigger ?? "onMount",
    l = e?.target,
    c = e?.threshold;
  N(() => {
    if (!o || n) return;
    s.current.hasMounted = !0;
    function d() {
      let { effect: h } = s.current;
      if (
        !o ||
        !h ||
        (h?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (h?.type === "appear" && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let y = h.type;
      switch (y) {
        case "appear": {
          let { transition: g, startDelay: b, repeat: p, tokenization: m } = h;
          return uS(m, h.effect, r, g, b, p, () => {
            Object.assign(s.current, { isAnimating: !1 });
          });
        }
        default:
          Le(y);
      }
    }
    switch (a) {
      case "onMount":
        d();
        return;
      case "onInView": {
        let h = t?.current;
        return h ? Pl(h, d, { amount: c ?? 0 }) : void 0;
      }
      case "onScrollTarget": {
        let h = l?.ref.current;
        return h
          ? Pl(h, d, {
              amount: c ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        Le(a);
    }
  }, [o, r, n, t, l, c, a]);
  let u = !!e,
    f = e ? hB(e) : void 0;
  return le(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !u)) return;
        let { hasMounted: d, hasAnimatedOnce: h, effect: y } = s.current,
          g = pB(o, n || vB(d, h, y), s.current.effect);
        return {
          text: (b) => dB(b, f, r, g),
          props: (b) => {
            if (y?.tokenization !== "element") return;
            let p = rs();
            return (r.add(p), { ref: p, style: { ...b, ...g } });
          },
        };
      },
      play: () => {
        let { effect: d } = s.current;
        if (!d) return;
        let h = d.type;
        switch (h) {
          case "appear": {
            let { transition: y, startDelay: g } = d;
            uS(f, d.effect, r, y, g);
            break;
          }
          default:
            Le(h);
        }
      },
    }),
    [o, u, r, n, f],
  );
}
function vB(e, t, n) {
  return !(
    (e && n?.trigger === "onMount") ||
    (t &&
      !n?.repeat &&
      (n?.trigger === "onInView" || n?.trigger === "onScrollTarget"))
  );
}
function uS(e = "character", t, n, r, i = 0, o = !1, s) {
  let a = uB(t);
  switch (e) {
    case "character":
    case "element":
    case "word": {
      let l = gB(n);
      return l.length === 0 ||
        (Un(l, a, {
          ...r,
          restDelta: 0.001,
          delay: gd(r?.delay ?? 0, { startDelay: i }),
        }).then(() => s?.()),
        !o)
        ? void 0
        : () =>
            void Un(l, t, {
              ...r,
              restDelta: 0.001,
              delay: gd(r?.delay ?? 0, { startDelay: i }),
            });
    }
    case "line": {
      let l;
      return (
        G.read(() => {
          ((l = yB(n)),
            l.length !== 0 &&
              G.update(() => {
                let c = l.map((u, f) =>
                  Un(u, a, {
                    ...r,
                    restDelta: 0.001,
                    delay: i + f * (r?.delay ?? 0),
                  }),
                );
                Promise.all(c).then(() => s?.());
              }));
        }),
        o
          ? () => {
              l.length !== 0 &&
                l.forEach((c, u) => {
                  Un(c, t, {
                    ...r,
                    restDelta: 0.001,
                    delay: i + u * (r?.delay ?? 0),
                  });
                });
            }
          : void 0
      );
    }
    default:
      Le(e);
  }
}
function gB(e) {
  let t = [];
  for (let n of e) n.current && t.push(n.current);
  return t;
}
function yB(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let o = i.current.offsetTop,
      s = i.current.offsetHeight;
    (!s || r === null || o === r
      ? n.push(i.current)
      : (t.push(n), (n = [i.current])),
      s && (r = o));
  }
  return (t.push(n), t);
}
var fS = Oe(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    k(Qe.svg, {
      ref: i,
      ...r,
      viewBox: t,
      children: k(Qe.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: { overflow: "visible", transformOrigin: "center center" },
        children: n,
      }),
    }),
  ),
  bB = Oe((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        anchorLinkOffsetY: s,
        as: a,
        bottom: l,
        center: c,
        children: u,
        environment: f = ae.current,
        fonts: d = [],
        height: h,
        isEditable: y = !1,
        left: g,
        name: b,
        opacity: p,
        positionSticky: m,
        positionStickyBottom: v,
        positionStickyLeft: x,
        positionStickyRight: C,
        positionStickyTop: w,
        right: E,
        rotation: T = 0,
        style: F,
        _initialStyle: _,
        stylesPresetsClassNames: $,
        text: D,
        top: q,
        verticalAlignment: W = "top",
        visible: H = !0,
        width: U,
        willChangeTransform: ee,
        withExternalLayout: te = !1,
        viewBox: Y,
        viewBoxScale: ne = 1,
        effect: ge,
        ...re
      } = e,
      de = za(),
      ie = ts(),
      ut = B(es),
      Te = ja(e),
      Rt = A(null),
      be = t ?? Rt;
    (Ou(e, be),
      gC(d, n, be),
      dt(() => {
        Na();
      }, []));
    let Xt = mB(ge, be),
      wn = le(() => {
        if (u) return bC(u, $, D, s, void 0, Xt.getTokenizer());
      }, [u, $, D, s, Xt]);
    if (!H) return null;
    let Sn = y && f() === ae.canvas,
      he = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: vC(W),
        opacity: Sn ? 0 : p,
        flexShrink: 0,
      },
      Dn = ae.hasRestrictions(),
      rt = Ra(e, de || 0, !1),
      ln = o && (U === "auto" || h === "auto"),
      P =
        !!e.transformTemplate || !rt || !Dn || n || ln
          ? (e.transformTemplate ?? Mu(c))
          : void 0;
    (te ||
      (rt && Dn && !ln
        ? ((he.x = rt.x),
          (he.y = rt.y),
          (he.rotate = nt.getNumber(T)),
          (he.width = rt.width),
          (he.minWidth = rt.width),
          (he.height = rt.height))
        : ((he.left = g),
          (he.right = E),
          (he.top = q),
          (he.bottom = l),
          (he.width = U),
          (he.height = h),
          (he.rotate = T)),
      m
        ? (!ie || ut) &&
          ((he.position = "sticky"),
          (he.willChange = "transform"),
          (he.zIndex = 1),
          (he.top = w),
          (he.right = C),
          (he.bottom = v),
          (he.left = x))
        : ie &&
          (e.positionFixed || e.positionAbsolute) &&
          (he.position = "absolute")),
      Tm(e, he),
      dk(e, he),
      ee && Sm(he),
      Object.assign(he, _, F),
      Te && (re.layout = "preserve-aspect"));
    let I = Ha(e.as);
    return fe(e.viewBox)
      ? e.as !== void 0
        ? k(I, {
            ...re,
            ref: be,
            style: he,
            layoutId: Te,
            transformTemplate: P,
            "data-framer-name": b,
            "data-framer-component-type": "RichTextContainer",
            children: k(fS, {
              viewBox: Y,
              viewBoxScale: ne,
              style: { width: "100%", height: "100%" },
              children: wn,
            }),
          })
        : k(fS, {
            ...re,
            ref: be,
            style: he,
            layoutId: Te,
            viewBox: Y,
            viewBoxScale: ne,
            transformTemplate: P,
            "data-framer-name": b,
            "data-framer-component-type": "RichTextContainer",
            children: wn,
          })
      : k(I, {
          ...re,
          ref: be,
          style: he,
          layoutId: Te,
          transformTemplate: P,
          "data-framer-name": b,
          "data-framer-component-type": "RichTextContainer",
          children: wn,
        });
  });
function xB(e) {
  return e.type === Rr;
}
function wB(e) {
  return e.type === "br";
}
function bC(e, t, n, r, i = {}, o, s = xB(e) ? -1 : 0) {
  let a = rr.toArray(e.props.children);
  fe(n) && (a = a.slice(0, 1));
  let l = !0;
  a = a.map((f) => {
    if (((!Gt(f) || !wB(f)) && (l = !1), Gt(f)))
      return bC(f, t, n, r, i, o, s + 1);
    let d = fe(n) ? n : f;
    return fe(d) && o ? o.text(d) : d;
  });
  let { ["data-preset-tag"]: c, ...u } = e.props;
  if (fe(e.type) || md(e.type)) {
    let f = m0(e.type) || e.type,
      d = c || f,
      h = fe(d) ? t?.[d] : void 0;
    ((u.className = Ui("framer-text", u.className, h)),
      o && s === 0 && !l && Object.assign(u, o.props(u.style)));
    let y =
        f === "h1" ||
        f === "h2" ||
        f === "h3" ||
        f === "h4" ||
        f === "h5" ||
        f === "h6",
      g = t?.anchor;
    if (y && g) {
      let b = SB(a, i);
      u.id = b;
      let p = Ui("framer-text", g),
        m = k("a", { href: `#${b}`, className: p, children: a });
      ((u.style = { ...(u.style ?? {}), scrollMarginTop: r }), (a = [m]));
    }
  }
  return An(e, u, ...a);
}
function SB(e, t) {
  let n = e.map(um).join(""),
    r = eB(n),
    i = t[r] ?? 0;
  return (i > 0 && (r += `-${i}`), (t[r] = i + 1), r);
}
function um(e) {
  return fe(e) || $e(e)
    ? e.toString()
    : Gt(e)
      ? um(e.props.children)
      : Array.isArray(e)
        ? e.map(um).join("")
        : "";
}
var Sj = Oe(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (fe(o)) {
    !r.stylesPresetsClassName &&
      Se(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        " ",
      ));
    let s = { [fe(t) ? "html" : "htmlFromDesign"]: o };
    return k(lB, { ...r, ...s, ref: i });
  }
  if (!r.stylesPresetsClassNames && fe(r.stylesPresetsClassName)) {
    let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
    s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`,
        )
      : (r.stylesPresetsClassNames = { h1: s, h2: a, h3: l, p: c, a: u });
  }
  return k(bB, { ...r, ref: i, children: Gt(o) ? o : void 0 });
});
function kB(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    o = sn(i.x, i.y),
    s = xn(sn(0.5, 0.5), o),
    a = Z.points({ x: 0, y: 0, width: 1, height: 1 }),
    l = a
      .map((g) => ({ point: g, distance: sn.distance(o, g) }))
      .sort((g, b) => g.distance - b.distance),
    c = (t = l[0]) == null ? void 0 : t.point,
    u = (n = l[1]) == null ? void 0 : n.point;
  ce(c && u, "linearGradientLine: Must have 2 closest points.");
  let [f, d] = a.filter((g) => !sn.isEqual(g, c) && !sn.isEqual(g, u));
  ce(f && d, "linearGradientLine: Must have 2 opposing points.");
  let h = xn.intersection(s, xn(c, u)),
    y = xn.intersection(s, xn(f, d));
  return (
    ce(h && y, "linearGradientLine: Must have a start and end point."),
    xn(h, y)
  );
}
function CB(e, t) {
  var n, r;
  let i = kB(e.angle),
    o = Wa(e),
    s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
    a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1,
    l = xn.pointAtPercentDistance(i, s),
    c = xn.pointAtPercentDistance(i, a),
    u = lo([s, a], [0, 1]);
  return {
    id: `id${t}g${_a.hash(e)}`,
    x1: l.x,
    y1: l.y,
    x2: c.x,
    y2: c.y,
    stops: o.map((f) => ({
      color: f.value,
      alpha: km.getAlpha(f.value) * e.alpha,
      position: u(f.position),
    })),
  };
}
function TB(e, t) {
  return {
    id: `id${t}g${Ia.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Wa(e).map((n) => ({
      color: n.value,
      alpha: km.getAlpha(n.value) * e.alpha,
      position: n.position,
    })),
  };
}
function xC(e) {
  if (!fe(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return $e(r);
}
function wC(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return $e(n) ? n : 50;
}
function dS(e) {
  return xC(e) ? wC(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : 0.5;
}
function hS(e) {
  return xC(e) ? wC(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : 0.5;
}
function EB(e, t, n, r) {
  if (
    ((e = nt.get(e, "#09F")),
    !Vi.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    o = e.pixelHeight,
    s,
    { fit: a } = e,
    l = 1,
    c = 1,
    u = 0,
    f = 0;
  if (a === "fill" || a === "fit" || a === "tile" || !a) {
    let h = 1,
      y = 1,
      g = i / o,
      b = t.height * g,
      p = t.width / g,
      m = b / t.width,
      v = p / t.height;
    if (a === "tile") {
      (e.backgroundSize ?? (e.backgroundSize = 1),
        (l = Math.round(e.backgroundSize * (i / 2))),
        (c = Math.round(e.backgroundSize * (o / 2))));
      let x = t.x ?? 0,
        C = t.y ?? 0,
        w = 0,
        E = 0;
      (r && ((w = x), (E = C)),
        (u = (t.width - l) * dS(e.positionX) + w),
        (f = (t.height - c) * hS(e.positionY) + E),
        (s = `translate(${u + x}, ${f + C})`));
    } else
      ((a === "fill" || !a ? v > m : v < m)
        ? ((y = v), (f = (1 - v) * hS(e.positionY)))
        : ((h = m), (u = (1 - m) * dS(e.positionX))),
        (s = `translate(${u}, ${f}) scale(${h}, ${y})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? "",
    transform: s,
    width: l,
    height: c,
    offsetX: u,
    offsetY: f,
  };
}
var RB = "framer/asset-reference,";
function PB(e) {
  return e.startsWith(`data:${RB}`);
}
function _B(e, t) {
  if (/^\w+:/.test(e) && !PB(e)) return e;
  typeof t != "number"
    ? (t = void 0)
    : t <= 512
      ? (t = 512)
      : t <= 1024
        ? (t = 1024)
        : t <= 2048
          ? (t = 2048)
          : (t = 4096);
  let n = ae.current() === ae.export;
  return lt.assetResolver(e, { pixelSize: t, isExport: n }) ?? "";
}
var IB = ({
    id: e,
    path: t,
    transform: n,
    repeat: r,
    width: i,
    height: o,
    offsetX: s,
    offsetY: a,
  }) => {
    let l = _B(t);
    return k("pattern", {
      id: e,
      width: r ? i : "100%",
      height: r ? o : "100%",
      patternContentUnits: r ? void 0 : "objectBoundingBox",
      patternUnits: r ? "userSpaceOnUse" : void 0,
      x: r ? s : void 0,
      y: r ? a : void 0,
      children: k(
        "image",
        {
          width: r ? i : 1,
          height: r ? o : 1,
          href: l,
          preserveAspectRatio: "none",
          transform: r ? void 0 : n,
          x: r ? 0 : void 0,
          y: r ? 0 : void 0,
        },
        l,
      ),
    });
  },
  pS = ui(),
  FB = class {
    constructor(e, t, n, r, i = 0) {
      ((this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i));
    }
  },
  MB = class {
    constructor() {
      R(this, "entries", new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === "") return "";
      let r = this.entries.get(e);
      if (!r) {
        n || (n = "svg" + String(sk(e)) + "_" + String(e.length));
        let i = e,
          o,
          s = LB(e);
        (s && (t && OB(s, n), (s.id = n), (o = BB(s)), (i = s.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r));
      }
      return ((r.count += 1), r.innerHTML);
    }
    getViewBox(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      let t = "container_" + e.id;
      if (pS) {
        let n = document?.querySelector("#" + t);
        n?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      let r = "container_" + t;
      if (pS) {
        let a = document.querySelector("#svg-templates");
        if (
          (a ||
            ((a = document.createElement("div")),
            (a.id = "svg-templates"),
            (a.style.position = "absolute"),
            (a.style.top = "0"),
            (a.style.left = "0"),
            (a.style.width = "0"),
            (a.style.height = "0"),
            (a.style.overflow = "hidden"),
            document.body.appendChild(a)),
          !document.querySelector("#" + r))
        ) {
          let l = document.createElement("div");
          ((l.id = r),
            (l.innerHTML = e),
            l.firstElementChild && (l.firstElementChild.id = t),
            a.appendChild(l));
        }
      }
      let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
        s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${i ? ` viewBox="${i}"` : ""}><use href="#${t}"></use></svg>`;
      return new FB(t, e, s, i);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [],
        t =
          "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
      e.push(`<div id="svg-templates" style="${t}">`);
      for (let n of this.entries.values()) {
        let r = "container_" + n.id;
        (e.push(`  <div id="${r}">`),
          e.push(`    ${n.svg}`),
          e.push("  </div>"));
      }
      return (
        e.push("</div>"),
        e.join(`
`)
      );
    }
  },
  Ho = new MB();
function LB(e) {
  if (typeof DOMParser > "u") {
    console.warn("unable to find DOMParser");
    return;
  }
  try {
    let r = new DOMParser()
      .parseFromString(e, "text/html")
      .getElementsByTagName("svg")[0];
    if (!r) throw Error("no svg element found");
    return r;
  } catch {
    return;
  }
}
function OB(e, t) {
  let n = DB(t);
  SC(e, n);
}
function DB(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "");
}
function SC(e, t) {
  (AB(e, t),
    Array.from(e.children).forEach((r) => {
      SC(r, t);
    }));
}
function AB(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === "id" && e.setAttribute(r, `${t}_${i}`),
      r === "href" || r === "xlink:href")
    ) {
      let [s, a] = i.split("#");
      if (s) return;
      e.setAttribute(r, `#${t}_${a}`);
      return;
    }
    let o = "url(#";
    if (i.includes(o)) {
      let s = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, s);
    }
  });
}
var VB = (() => ({
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
}))();
function mS(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith("%"))
  )
    return Math.round(parseFloat(n[1]) * (VB[n[2]] || 1));
}
function BB(e) {
  let t = mS(e.getAttribute("width")),
    n = mS(e.getAttribute("height"));
  if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Ej(e) {
  let t = za(),
    n = ja(e),
    r = S.useRef(null),
    i = m4();
  return (
    Ou(e, r),
    k(WB, { ...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i })
  );
}
var $B = 5e4;
function zB(e) {
  return e.indexOf("image") >= 0;
}
function NB(e) {
  return e.indexOf("var(--") >= 0;
}
function HB(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function vS(e, t) {
  var n, r;
  let i = e.current;
  if (!i) return;
  let o = t.providedWindow ?? Ge,
    s = i.firstElementChild;
  if (!s || !(s instanceof o.SVGSVGElement)) return;
  if (!s.getAttribute("viewBox")) {
    let h = Ho.getViewBox(t.svg);
    h && s.setAttribute("viewBox", h);
  }
  let { withExternalLayout: a, parentSize: l } = t;
  if (!a && $a(t) && l !== 1 && l !== 2) return;
  let { intrinsicWidth: u, intrinsicHeight: f, _constraints: d } = t;
  (((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 &&
    ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 &&
    J(u) &&
    J(f) &&
    s.setAttribute("viewBox", `0 0 ${u} ${f}`),
    d && d.aspectRatio
      ? s.setAttribute("preserveAspectRatio", "")
      : s.setAttribute("preserveAspectRatio", "none"),
    s.setAttribute("width", "100%"),
    s.setAttribute("height", "100%"));
}
function jB() {
  return (
    S.useInsertionEffect(() => {
      Na();
    }, []),
    null
  );
}
var WB = (() => {
  var e;
  return (
    (e = class extends lu {
      constructor() {
        (super(...arguments),
          R(this, "container", S.createRef()),
          R(this, "svgElement", null),
          R(this, "setSVGElement", (t) => {
            ((this.svgElement = t), this.setLayerElement(t));
          }),
          R(this, "previouslyRenderedSVG", ""),
          R(this, "unmountedSVG", ""));
      }
      static frame(t) {
        return Ra(t, t.parentSize || 0);
      }
      get frame() {
        return Ra(this.props, this.props.parentSize || 0);
      }
      componentDidMount() {
        if (this.unmountedSVG) {
          let { svgContentId: t } = this.props,
            n = t ? "svg" + t : null;
          (Ho.subscribe(this.unmountedSVG, !t, n),
            (this.previouslyRenderedSVG = this.unmountedSVG));
        }
        this.props.svgContentId || vS(this.container, this.props);
      }
      componentWillUnmount() {
        (Ho.unsubscribe(this.previouslyRenderedSVG),
          (this.unmountedSVG = this.previouslyRenderedSVG),
          (this.previouslyRenderedSVG = ""));
      }
      componentDidUpdate(t) {
        if ((super.componentDidUpdate(t), this.props.svgContentId)) return;
        let { fill: n } = this.props;
        (Vi.isImageObject(n) &&
          Vi.isImageObject(t.fill) &&
          n.src !== t.fill.src &&
          ok(this.svgElement, "fill", null, !1),
          vS(this.container, this.props));
      }
      collectLayout(t, n) {
        if (this.props.withExternalLayout) {
          ((n.width = "100%"),
            (n.height = "100%"),
            (n.aspectRatio = "inherit"));
          return;
        }
        let r = this.frame,
          {
            rotation: i,
            intrinsicWidth: o,
            intrinsicHeight: s,
            width: a,
            height: l,
          } = this.props,
          c = nt.getNumber(i);
        if (
          ((t.opacity = J(this.props.opacity) ? this.props.opacity : 1),
          ae.hasRestrictions() && r)
        ) {
          (Object.assign(t, {
            transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(4)}deg)`,
            width: `${r.width}px`,
            height: `${r.height}px`,
          }),
            $a(this.props) && (t.position = "absolute"));
          let u = r.width / (o || 1),
            f = r.height / (s || 1);
          n.transformOrigin = "top left";
          let { zoom: d, target: h } = yu;
          if (h === ae.export) {
            let y = d > 1 ? d : 1;
            ((n.transform = `scale(${u * y}, ${f * y})`), (n.zoom = 1 / y));
          } else n.transform = `scale(${u}, ${f})`;
          o && s && ((n.width = o), (n.height = s));
        } else {
          let { left: u, right: f, top: d, bottom: h } = this.props;
          (Object.assign(t, {
            left: u,
            right: f,
            top: d,
            bottom: h,
            width: a,
            height: l,
            rotate: c,
          }),
            Object.assign(n, {
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
            }));
        }
      }
      render() {
        let {
          id: t,
          visible: n,
          style: r,
          fill: i,
          svg: o,
          intrinsicHeight: s,
          intrinsicWidth: a,
          title: l,
          description: c,
          layoutId: u,
          className: f,
          variants: d,
          withExternalLayout: h,
          innerRef: y,
          svgContentId: g,
          height: b,
          opacity: p,
          width: m,
          ...v
        } = this.props;
        if (!h && (!n || !t)) return null;
        let x = t ?? u ?? "svg",
          C = this.frame,
          w = C || { width: a || 100, height: s || 100 },
          E = { ...r, imageRendering: "pixelated", flexShrink: 0 },
          T = {};
        (this.collectLayout(E, T),
          GD(this.props, E),
          Tm(this.props, E),
          lu.applyWillChange(this.props, E, !1));
        let F = null;
        if (typeof i == "string" || X.isColorObject(i)) {
          let Y = X.isColorObject(i) ? i.initialValue || X.toRgbString(i) : i;
          ((E.fill = Y), (E.color = Y));
        } else if (_a.isLinearGradient(i)) {
          let Y = i,
            ne = `${encodeURI(t || "")}g${_a.hash(Y)}`;
          E.fill = `url(#${ne})`;
          let { stops: ge, x1: re, x2: de, y1: ie, y2: ut } = CB(Y, x);
          F = k("svg", {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: k("linearGradient", {
              id: ne,
              x1: re,
              x2: de,
              y1: ie,
              y2: ut,
              children: ge.map((Te, Rt) =>
                k(
                  "stop",
                  {
                    offset: Te.position,
                    stopColor: Te.color,
                    stopOpacity: Te.alpha,
                  },
                  Rt,
                ),
              ),
            }),
          });
        } else if (Ia.isRadialGradient(i)) {
          let Y = i,
            ne = `${encodeURI(t || "")}g${Ia.hash(Y)}`;
          E.fill = `url(#${ne})`;
          let ge = TB(Y, x);
          F = k("svg", {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: k("radialGradient", {
              id: ne,
              cy: Y.centerAnchorY,
              cx: Y.centerAnchorX,
              r: Y.widthFactor,
              children: ge.stops.map((re, de) =>
                k(
                  "stop",
                  {
                    offset: re.position,
                    stopColor: re.color,
                    stopOpacity: re.alpha,
                  },
                  de,
                ),
              ),
            }),
          });
        } else if (Vi.isImageObject(i)) {
          let Y = EB(i, w, x);
          Y &&
            ((E.fill = `url(#${Y.id})`),
            (F = k("svg", {
              ref: this.setSVGElement,
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              width: "100%",
              height: "100%",
              style: { position: "absolute" },
              children: k("defs", { children: k(IB, { ...Y }) }),
            })));
        }
        let _ = { "data-framer-component-type": "SVG" },
          $ = !C;
        $ && Object.assign(_, JS(this.props.center));
        let D =
            !F &&
            !E.fill &&
            !E.background &&
            !E.backgroundImage &&
            o.length < $B &&
            !zB(o) &&
            !NB(o),
          q = null;
        if (D)
          ((E.backgroundSize = "100% 100%"),
            (E.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(o)}')`),
            Ho.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ""));
        else {
          let Y = g ? "svg" + g : null,
            ne = Ho.subscribe(o, !g, Y);
          (Ho.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = o),
            HB(E) && (E.overflow = "hidden"),
            (q = se(Re, {
              children: [
                F,
                k(
                  "div",
                  {
                    className: "svgContainer",
                    style: T,
                    ref: this.container,
                    dangerouslySetInnerHTML: { __html: ne },
                  },
                  Vi.isImageObject(i) ? i.src : "",
                ),
              ],
            })));
        }
        let W = Ha(this.props.as),
          { href: H, target: U, rel: ee, onClick: te } = this.props;
        return se(W, {
          ..._,
          ...v,
          layoutId: u,
          transformTemplate: $ ? Mu(this.props.center) : void 0,
          id: t,
          ref: y,
          style: E,
          className: f,
          variants: d,
          tabIndex: this.props.tabIndex,
          role: l || c ? "img" : void 0,
          "aria-label": l,
          "aria-description": c,
          href: H,
          target: U,
          rel: ee,
          onClick: te,
          children: [q, k(jB, {})],
        });
      }
    }),
    R(e, "supportsConstraints", !0),
    R(e, "defaultSVGProps", {
      left: void 0,
      right: void 0,
      top: void 0,
      bottom: void 0,
      style: void 0,
      _constraints: { enabled: !0, aspectRatio: null },
      parentSize: 0,
      rotation: 0,
      visible: !0,
      svg: "",
      shadows: [],
    }),
    R(e, "defaultProps", { ...lu.defaultProps, ...e.defaultSVGProps }),
    e
  );
})();
function Aj(e, t, n) {
  let r = kC(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Vj(e) {
  return e.fonts ?? [];
}
function Bj(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : kC(e);
}
function kC(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) XB(r) ? n.push(r) : t.fonts.push(YB(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
var UB = "explicitInter";
function XB(e) {
  return UB in e;
}
function YB(e) {
  let t;
  return (
    e.url.startsWith("https://fonts.gstatic.com/s/")
      ? (t = "google")
      : e.url.startsWith(
            "https://framerusercontent.com/third-party-assets/fontshare/",
          )
        ? (t = "fontshare")
        : (t = "custom"),
    { ...e, source: t }
  );
}
function $j(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
Ts.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = He(e(this.get()));
  return (this.onChange((n) => t.set(e(n))), t);
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  Hn as a,
  G as b,
  Qe as c,
  hd as d,
  r0 as e,
  Wn as f,
  It as g,
  a_ as h,
  l0 as i,
  u0 as j,
  h0 as k,
  E_ as l,
  O1 as m,
  JI as n,
  uF as o,
  yF as p,
  u6 as q,
  p6 as r,
  g6 as s,
  y6 as t,
  x6 as u,
  Xi as v,
  Iu as w,
  DS as x,
  L6 as y,
  V6 as z,
  X as A,
  ae as B,
  U6 as C,
  bL as D,
  K6 as E,
  mO as F,
  Q6 as G,
  wO as H,
  Ui as I,
  Np as J,
  xk as K,
  w8 as L,
  bV as M,
  O8 as N,
  z8 as O,
  N8 as P,
  Y8 as Q,
  _k as R,
  Em as S,
  J8 as T,
  Ik as U,
  oH as V,
  OV as W,
  GV as X,
  cH as Y,
  hH as Z,
  vH as _,
  xH as $,
  SH as aa,
  B5 as ba,
  X5 as ca,
  TH as da,
  Y5 as ea,
  G5 as fa,
  EH as ga,
  PH as ha,
  FH as ia,
  MH as ja,
  BH as ka,
  zH as la,
  a4 as ma,
  jH as na,
  UH as oa,
  d4 as pa,
  YH as qa,
  qH as ra,
  vu as sa,
  lj as ta,
  hj as ua,
  vj as va,
  Sj as wa,
  Ho as xa,
  Ej as ya,
  Aj as za,
  Vj as Aa,
  Bj as Ba,
  $j as Ca,
};
//# sourceMappingURL=chunk-NFQGW3GT.mjs.map
