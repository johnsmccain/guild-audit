import { a as T } from "./chunk-VGVITGHV.mjs";
import { a as K } from "./chunk-WBEZAFNO.mjs";
import {
  b as Y,
  c as ye,
  d as we,
  e as be,
  f as ve,
  g as Ae,
  h as Fe,
} from "./chunk-KTDPASHZ.mjs";
import { m as X, n as L } from "./chunk-DNFVZGMK.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as i,
  Aa as b,
  Ba as q,
  D as le,
  G as se,
  I as A,
  M as _,
  O as fe,
  P as x,
  Q as y,
  S as W,
  T as de,
  U as ce,
  Y as F,
  Z as pe,
  a as P,
  c as u,
  e as E,
  ia as ue,
  qa as he,
  ta as R,
  ua as ge,
  va as xe,
  w as S,
  wa as h,
  za as D,
} from "./chunk-NFQGW3GT.mjs";
import {
  d as r,
  j as I,
  n as te,
  o as ne,
  p as N,
  q as oe,
  s as ie,
  t as C,
  w as me,
  x as e,
  y as s,
} from "./chunk-KQLRTPKK.mjs";
import "./chunk-IFZZ74IO.mjs";
import "./chunk-ELYU6EKT.mjs";
var Xe = _(u.div),
  Te = { eNWJBVgDX: { hover: !0, pressed: !0 } },
  Ve = ["eNWJBVgDX", "HGlUMDtuc", "OZzTwxvxT", "elqDKMwrr", "F9XpOM3s1"],
  ze = "framer-FgS4M",
  Me = {
    elqDKMwrr: "framer-v-1nyu8py",
    eNWJBVgDX: "framer-v-1peinu9",
    F9XpOM3s1: "framer-v-t5x7o4",
    HGlUMDtuc: "framer-v-1knm9hs",
    OZzTwxvxT: "framer-v-fe429d",
  };
function Ue(n, ...a) {
  let m = {};
  return (a?.forEach((o) => o && Object.assign(m, n[o])), m);
}
var Be = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  je = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  Oe = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Pe = (n, a) => `translateX(-50%) ${a}`,
  qe = ({ value: n, children: a }) => {
    let m = te(P),
      o = n ?? m.transition,
      l = ie(() => ({ ...m, transition: o }), [JSON.stringify(o)]);
    return e(P.Provider, { value: l, children: a });
  },
  Ye = u(r),
  Le = {
    Default: "eNWJBVgDX",
    Disabled: "OZzTwxvxT",
    Error: "F9XpOM3s1",
    Loading: "HGlUMDtuc",
    Success: "elqDKMwrr",
  },
  Ke = ({ height: n, id: a, width: m, ...o }) => {
    var l, f;
    return {
      ...o,
      variant:
        (f = (l = Le[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && f !== void 0
          ? f
          : "eNWJBVgDX",
    };
  },
  He = (n, a) =>
    n.layoutDependency ? a.join("-") + n.layoutDependency : a.join("-"),
  Ge = I(function (n, a) {
    let { activeLocale: m, setLocale: o } = S(),
      { style: l, className: f, layoutId: p, variant: M, ...B } = Ke(n),
      {
        baseVariant: t,
        classNames: re,
        clearLoadingGesture: Ne,
        gestureHandlers: j,
        gestureVariant: w,
        isLoading: ae,
        setGestureState: O,
        setVariant: d,
        variants: c,
      } = he({
        cycleOrder: Ve,
        defaultVariant: "eNWJBVgDX",
        enabledGestures: Te,
        variant: M,
        variantClassNames: Me,
      }),
      g = He(n, c),
      v = C(null),
      k = () => t !== "HGlUMDtuc",
      Ce = () => t === "HGlUMDtuc",
      Ee = N(),
      Se = [],
      pr = fe();
    return e(E, {
      id: p ?? Ee,
      children: e(Ye, {
        animate: c,
        initial: !1,
        children: e(qe, {
          value: Be,
          children: s(u.button, {
            ...B,
            ...j,
            className: A(ze, ...Se, "framer-1peinu9", f, re),
            "data-framer-name": "Default",
            "data-reset": "button",
            layoutDependency: g,
            layoutId: "eNWJBVgDX",
            ref: a ?? v,
            style: {
              backgroundColor:
                "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8))",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              boxShadow:
                "0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(9, 227, 8, 0.71989), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(9, 227, 8, 0.63557), 0px 10px 10px -3.75px rgba(9, 227, 8, 0.25)",
              opacity: 1,
              ...l,
            },
            variants: {
              "eNWJBVgDX-hover": { opacity: 0.6 },
              "eNWJBVgDX-pressed": { backgroundColor: "rgb(51, 51, 51)" },
              F9XpOM3s1: { backgroundColor: "rgba(255, 34, 68, 0.15)" },
              OZzTwxvxT: { opacity: 0.5 },
            },
            ...Ue(
              {
                "eNWJBVgDX-hover": { "data-framer-name": void 0 },
                "eNWJBVgDX-pressed": { "data-framer-name": void 0 },
                elqDKMwrr: { "data-framer-name": "Success" },
                F9XpOM3s1: { "data-framer-name": "Error" },
                HGlUMDtuc: { "data-framer-name": "Loading" },
                OZzTwxvxT: { "data-framer-name": "Disabled" },
              },
              t,
              w,
            ),
            children: [
              k() &&
              e(h, {
                __fromCanvasComponent: !0,
                children: e(r, {
                  children: e(u.p, {
                    style: {
                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                      "--framer-font-family":
                        '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "14px",
                      "--framer-font-weight": "600",
                      "--framer-line-height": "140%",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10)))",
                    },
                    children: "Submit",
                  }),
                }),
                className: "framer-14rxotz",
                fonts: ["Inter-SemiBold"],
                layoutDependency: g,
                layoutId: "FFLkv8Qbg",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                variants: {
                  elqDKMwrr: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  F9XpOM3s1: { "--extracted-r6o4lv": "rgb(255, 34, 68)" },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Ue(
                  {
                    elqDKMwrr: {
                      children: e(r, {
                        children: e(u.p, {
                          style: {
                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "600",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "Thank you",
                        }),
                      }),
                    },
                    F9XpOM3s1: {
                      children: e(r, {
                        children: e(u.p, {
                          style: {
                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "600",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 34, 68))",
                          },
                          children: "Something went wrong",
                        }),
                      }),
                    },
                  },
                  t,
                  w,
                ),
              }),
              Ce() &&
              e(u.div, {
                className: "framer-sh67jg",
                "data-framer-name": "Spinner",
                layoutDependency: g,
                layoutId: "WBXBW0CFY",
                style: {
                  mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                  WebkitMask:
                    "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                },
                children: e(Xe, {
                  __framer__loop: Oe,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: je,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: "framer-htujon",
                  "data-framer-name": "Conic",
                  layoutDependency: g,
                  layoutId: "HOhC72Ttu",
                  style: {
                    background:
                      "conic-gradient(from 180deg at 50% 50%, #4cf 0deg, #4cf 360deg)",
                    backgroundColor: "rgb(68, 204, 255)",
                    mask: "none",
                    WebkitMask: "none",
                  },
                  variants: {
                    HGlUMDtuc: {
                      background:
                        "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                      WebkitMask:
                        "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                    },
                  },
                  children: e(u.div, {
                    className: "framer-1hp2r58",
                    "data-framer-name": "Rounding",
                    layoutDependency: g,
                    layoutId: "FC_Q8Sa8d",
                    style: {
                      backgroundColor: "rgb(255, 255, 255)",
                      borderBottomLeftRadius: 1,
                      borderBottomRightRadius: 1,
                      borderTopLeftRadius: 1,
                      borderTopRightRadius: 1,
                    },
                    transformTemplate: Pe,
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ze = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-FgS4M.framer-1mf6x3d, .framer-FgS4M .framer-1mf6x3d { display: block; }",
    ".framer-FgS4M.framer-1peinu9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }",
    ".framer-FgS4M .framer-14rxotz { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-FgS4M .framer-sh67jg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }",
    ".framer-FgS4M .framer-htujon { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }",
    ".framer-FgS4M .framer-1hp2r58 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-FgS4M.framer-1peinu9 { gap: 0px; } .framer-FgS4M.framer-1peinu9 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-FgS4M.framer-1peinu9 > :first-child { margin-left: 0px; } .framer-FgS4M.framer-1peinu9 > :last-child { margin-right: 0px; } }",
    ".framer-FgS4M.framer-v-1knm9hs.framer-1peinu9, .framer-FgS4M.framer-v-fe429d.framer-1peinu9, .framer-FgS4M.framer-v-1nyu8py.framer-1peinu9, .framer-FgS4M.framer-v-t5x7o4.framer-1peinu9 { cursor: unset; }",
    ".framer-FgS4M.framer-v-1knm9hs .framer-htujon { overflow: hidden; }",
  ],
  U = W(Ge, Ze, "framer-FgS4M"),
  H = U;
U.displayName = "Button Copy";
U.defaultProps = { height: 40, width: 240 };
se(U, {
  variant: {
    options: ["eNWJBVgDX", "HGlUMDtuc", "OZzTwxvxT", "elqDKMwrr", "F9XpOM3s1"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
    title: "Variant",
    type: le.Enum,
  },
});
D(
  U,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
          weight: "600",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Qe = b(L),
  G = _(xe),
  Je = b(X),
  $e = b(H),
  er = b(Y),
  rr = b(K);
var ar = {
  cSiNaMWWS: "(min-width: 1280px) and (max-width: 1535px)",
  jaUOdyaYI: "(min-width: 768px) and (max-width: 1279px)",
  KaoLEF3tJ: "(min-width: 1536px)",
  u9lN1f6AR: "(max-width: 767px)",
},
  tr = () => typeof document < "u",
  ke = "framer-ulmdA",
  nr = {
    cSiNaMWWS: "framer-v-1bt2x41",
    jaUOdyaYI: "framer-v-yu9iha",
    KaoLEF3tJ: "framer-v-1tfptxz",
    u9lN1f6AR: "framer-v-1aqljja",
  },
  Z = { delay: 0, duration: 2.4, ease: [0, 0, 1, 1], type: "tween" },
  Q = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 12,
  },
  J = { bounceDamping: 4, bounceStiffness: 12, delay: 0, type: "inertia" },
  $ = (n) => n.preventDefault(),
  ee = { cursor: "grabbing" },
  or = (n, a, m) => {
    switch (n.state) {
      case "success":
        var o;
        return (o = a.success) !== null && o !== void 0 ? o : m;
      case "pending":
        var l;
        return (l = a.pending) !== null && l !== void 0 ? l : m;
      case "error":
        var f;
        return (f = a.error) !== null && f !== void 0 ? f : m;
      case "incomplete":
        var p;
        return (p = a.incomplete) !== null && p !== void 0 ? p : m;
    }
  },
  Ie = { delay: 0.1, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ir = {
    opacity: 0.2,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ie,
    x: 0,
    y: 0,
  },
  mr = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 0,
  },
  lr = {
    opacity: 0.1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ie,
    x: 0,
    y: 0,
  },
  V = T(),
  sr = {
    Desktop: "KaoLEF3tJ",
    Laptop: "cSiNaMWWS",
    Phone: "u9lN1f6AR",
    Tablet: "jaUOdyaYI",
  },
  fr = ({ height: n, id: a, width: m, ...o }) => {
    var l, f;
    return {
      ...o,
      variant:
        (f = (l = sr[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && f !== void 0
          ? f
          : "KaoLEF3tJ",
    };
  },
  dr = I(function (n, a) {
    let { activeLocale: m, setLocale: o } = S(),
      { style: l, className: f, layoutId: p, variant: M, ...B } = fr(n);
    (ne(() => {
      let d = T(void 0, m);
      if (d.robots) {
        let c = document.querySelector('meta[name="robots"]');
        c
          ? c.setAttribute("content", d.robots)
          : ((c = document.createElement("meta")),
            c.setAttribute("name", "robots"),
            c.setAttribute("content", d.robots),
            document.head.appendChild(c));
      }
    }, [void 0, m]),
      oe(() => {
        let d = T(void 0, m);
        if (((document.title = d.title || ""), d.viewport)) {
          var c;
          (c = document.querySelector('meta[name="viewport"]')) === null ||
            c === void 0 ||
            c.setAttribute("content", d.viewport);
        }
        let g = d.bodyClassName;
        if (g) {
          let v = document.body;
          (v.classList.forEach(
            (k) => k.startsWith("framer-body-") && v.classList.remove(k),
          ),
            v.classList.add(`${d.bodyClassName}-framer-ulmdA`));
        }
        return () => {
          g &&
            document.body.classList.remove(`${d.bodyClassName}-framer-ulmdA`);
        };
      }, [void 0, m]));
    let [t, re] = ue(M, ar, !1),
      Ne = void 0,
      j = C(null),
      w = () => !tr() || t === "jaUOdyaYI",
      ae = N(),
      O = [Fe, be];
    return (
      de({}),
      e(ce.Provider, {
        value: { primaryVariantId: "KaoLEF3tJ", variantClassNames: nr },
        children: s(E, {
          id: p ?? ae,
          children: [
            s(u.div, {
              ...B,
              className: A(ke, ...O, "framer-1tfptxz", f),
              ref: a ?? j,
              style: { ...l },
              children: [
                e("div", {
                  className: "framer-34lmn9",
                  "data-framer-name": "Navbar",
                  name: "Navbar",
                  children: e(x, {
                    width: "min(max(100vw, 1px), 1280px)",
                    children: e(y, {
                      className: "framer-ff36vx-container",
                      "data-framer-name": "Navbar",
                      name: "Navbar",
                      children: e(i, {
                        breakpoint: t,
                        overrides: {
                          jaUOdyaYI: { variant: "rkAiYEczi" },
                          u9lN1f6AR: { variant: "rkAiYEczi" },
                        },
                        children: e(L, {
                          height: "100%",
                          id: "r5n4snghF",
                          layoutId: "r5n4snghF",
                          name: "Navbar",
                          style: { maxWidth: "100%", width: "100%" },
                          variant: "vknkFEn9I",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                e("div", {
                  className: "framer-1dqoxxh",
                  "data-framer-name": "Hero",
                  name: "Hero",
                  children: s("div", {
                    className: "framer-10s4lld",
                    "data-framer-name": "Container",
                    name: "Container",
                    children: [
                      s("div", {
                        className: "framer-1094q3t",
                        "data-framer-name": "txt",
                        name: "txt",
                        children: [
                          e("div", {
                            className: "framer-1mv75av",
                            "data-framer-name": "badge+head",
                            name: "badge+head",
                            children: s("div", {
                              className: "framer-m3p43z",
                              "data-framer-name": "head-txt",
                              name: "head-txt",
                              children: [
                                e(i, {
                                  breakpoint: t,
                                  overrides: {
                                    u9lN1f6AR: {
                                      children: e(r, {
                                        children: e("h1", {
                                          className:
                                            "form-head",
                                          style: {
                                            "--font-selector":
                                              "R0Y7UGx1cyBKYWthcnRhIFNhbnMtNjAw",
                                            "--framer-font-family":
                                              '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                            "--framer-font-size": "29px",
                                            "--framer-font-weight": "600",
                                            "--framer-letter-spacing":
                                              "-0.02em",
                                            "--framer-line-height": "120%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--token-a2dcd121-2c82-4bf9-a79c-151a2036ba02, rgb(10, 11, 10))",
                                          },
                                          children:
                                            "Please fill out this form to get a free quote from our experts. You will hear from us soon.\u{1F91D}",
                                        }),
                                      }),
                                      fonts: ["GF;Plus Jakarta Sans-600"],
                                    },
                                  },
                                  children: e(h, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("h1", {
                                        className:
                                          "framer-styles-preset-rp61ro form-head",
                                        "data-styles-preset": "fOTtXmCE4",
                                        style: {
                                          "--framer-text-color":
                                            "var(--token-a2dcd121-2c82-4bf9-a79c-151a2036ba02, rgb(10, 11, 10))",
                                        },
                                        children:
                                          "Please fill out this form to get a free quote from our experts. You will hear from us soon.\u{1F91D}",
                                      }),
                                    }),
                                    className: "framer-shemz6",
                                    "data-framer-name":
                                      "A security-first alternative to Okta",
                                    fonts: ["Inter"],
                                    name: "A security-first alternative to Okta",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(i, {
                                  breakpoint: t,
                                  overrides: {
                                    u9lN1f6AR: {
                                      children: e(r, {
                                        children: s("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UGx1cyBKYWthcnRhIFNhbnMtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif',
                                            "--framer-font-size": "15px",
                                            "--framer-line-height": "140%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--token-a2dcd121-2c82-4bf9-a79c-151a2036ba02, rgb(10, 11, 10))",
                                          },
                                          children: [
                                            "We appreciate your interest!  If you have any questions or need further assistance, you are invited to join the ",
                                            e(F, {
                                              href: "https://discord.gg/BE4x3XCU",
                                              openInNewTab: !0,
                                              smoothScroll: !1,
                                              children: e("a", {
                                                children: "Guild Audit Discord",
                                              }),
                                            }),
                                            " and ",
                                            e(F, {
                                              href: "https://t.me/sc_audit",
                                              openInNewTab: !0,
                                              smoothScroll: !1,
                                              children: e("a", {
                                                children:
                                                  "Guild Audits Telegram",
                                              }),
                                            }),
                                            " where you can stay updated with announcements.",
                                          ],
                                        }),
                                      }),
                                      fonts: ["GF;Plus Jakarta Sans-regular"],
                                    },
                                  },
                                  children: e(h, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: s("p", {
                                        className:
                                          "framer-styles-preset-k8yxrn",
                                        "data-styles-preset": "ferGDeq75",
                                        style: {
                                          "--framer-text-color":
                                            "var(--token-a2dcd121-2c82-4bf9-a79c-151a2036ba02, rgb(10, 11, 10))",
                                        },
                                        children: [
                                          "We appreciate your interest!  If you have any questions or need further assistance, you are invited to join the ",
                                          e(F, {
                                            href: "https://discord.gg/BE4x3XCU",
                                            openInNewTab: !0,
                                            smoothScroll: !1,
                                            children: e("a", {
                                              children: "Guild Audit Discord",
                                            }),
                                          }),
                                          " and ",
                                          e(F, {
                                            href: "https://t.me/sc_audit",
                                            openInNewTab: !0,
                                            smoothScroll: !1,
                                            children: e("a", {
                                              children: "Guild Audits Telegram",
                                            }),
                                          }),
                                          " where you can stay updated with announcements.",
                                        ],
                                      }),
                                    }),
                                    className: "framer-qwhvmv",
                                    "data-framer-name":
                                      "We are building a platform for better security in workforce identity and access management. Join as an early design partner and make your mark on the future of identity.",
                                    fonts: ["Inter"],
                                    name: "We are building a platform for better security in workforce identity and access management. Join as an early design partner and make your mark on the future of identity.",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                w() &&
                                e(i, {
                                  breakpoint: t,
                                  overrides: {
                                    jaUOdyaYI: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 388.8,
                                        intrinsicWidth: 464,
                                        pixelHeight: 486,
                                        pixelWidth: 580,
                                        sizes: "260px",
                                        src: "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512 512w,https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png 994w",
                                      },
                                    },
                                  },
                                  children: e(G, {
                                    __framer__loop: Q,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Z,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 388.8,
                                      intrinsicWidth: 464,
                                      pixelHeight: 486,
                                      pixelWidth: 580,
                                      src: "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512",
                                      srcSet:
                                        "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512 512w,https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png 994w",
                                    },
                                    className:
                                      "framer-1l9zczx hidden-1tfptxz hidden-1bt2x41 hidden-1aqljja",
                                    "data-framer-name": "Block",
                                    drag: !0,
                                    dragMomentum: !1,
                                    dragSnapToOrigin: !0,
                                    dragTransition: J,
                                    name: "Block",
                                    onMouseDown: $,
                                    style: { rotate: -369 },
                                    whileTap: ee,
                                  }),
                                }),
                                w() &&
                                e(i, {
                                  breakpoint: t,
                                  overrides: {
                                    jaUOdyaYI: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 388.8,
                                        intrinsicWidth: 464,
                                        pixelHeight: 486,
                                        pixelWidth: 580,
                                        sizes: "132px",
                                        src: "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512 512w,https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png 994w",
                                      },
                                    },
                                  },
                                  children: e(G, {
                                    __framer__loop: Q,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Z,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 388.8,
                                      intrinsicWidth: 464,
                                      pixelHeight: 486,
                                      pixelWidth: 580,
                                      src: "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512",
                                      srcSet:
                                        "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512 512w,https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png 994w",
                                    },
                                    className:
                                      "framer-1d4tsit hidden-1tfptxz hidden-1bt2x41 hidden-1aqljja",
                                    "data-framer-name": "Block",
                                    drag: !0,
                                    dragMomentum: !1,
                                    dragSnapToOrigin: !0,
                                    dragTransition: J,
                                    name: "Block",
                                    onMouseDown: $,
                                    style: { rotate: -483 },
                                    whileTap: ee,
                                  }),
                                }),
                                w() &&
                                e(i, {
                                  breakpoint: t,
                                  overrides: {
                                    jaUOdyaYI: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 388.8,
                                        intrinsicWidth: 464,
                                        pixelHeight: 486,
                                        pixelWidth: 580,
                                        sizes: "239px",
                                        src: "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512 512w,https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png 994w",
                                      },
                                    },
                                  },
                                  children: e(G, {
                                    __framer__loop: Q,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Z,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 388.8,
                                      intrinsicWidth: 464,
                                      pixelHeight: 486,
                                      pixelWidth: 580,
                                      src: "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512",
                                      srcSet:
                                        "https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png?scale-down-to=512 512w,https://framerusercontent.com/images/KXywEnyh0ECWhT6VdpadeB4No9c.png 994w",
                                    },
                                    className:
                                      "framer-8sc5ge hidden-1tfptxz hidden-1bt2x41 hidden-1aqljja",
                                    "data-framer-name": "Block",
                                    drag: !0,
                                    dragMomentum: !1,
                                    dragSnapToOrigin: !0,
                                    dragTransition: J,
                                    name: "Block",
                                    onMouseDown: $,
                                    style: { rotate: -582 },
                                    whileTap: ee,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          s("div", {
                            className: "framer-x5r7tr",
                            children: [
                              e(i, {
                                breakpoint: t,
                                overrides: {
                                  u9lN1f6AR: {
                                    width:
                                      "min(min(100vw, 1280px) - 32px, 1280px)",
                                  },
                                },
                                children: e(x, {
                                  children: e(y, {
                                    className: "framer-15onm5l-container",
                                    children: e(i, {
                                      breakpoint: t,
                                      overrides: {
                                        u9lN1f6AR: { style: { width: "100%" } },
                                      },
                                      children: e(X, {
                                        height: "100%",
                                        id: "ZCYI_CXV9",
                                        layoutId: "ZCYI_CXV9",
                                        P7ZHYgc9n:
                                          "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                                        qzxtK1_9Y:
                                          "https://discord.gg/BE4x3XCU",
                                        RQDpSij6V:
                                          "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8))",
                                        TiAMtDaz3: "Join our Discord",
                                        variant: "ZmCP_eD3_",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              e(i, {
                                breakpoint: t,
                                overrides: {
                                  u9lN1f6AR: {
                                    width:
                                      "min(min(100vw, 1280px) - 32px, 1280px)",
                                  },
                                },
                                children: e(x, {
                                  children: e(y, {
                                    className: "framer-ewnbre-container",
                                    children: e(i, {
                                      breakpoint: t,
                                      overrides: {
                                        u9lN1f6AR: { style: { width: "100%" } },
                                      },
                                      children: e(X, {
                                        height: "100%",
                                        id: "Qn4qQKTVm",
                                        layoutId: "Qn4qQKTVm",
                                        P7ZHYgc9n:
                                          "var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(10, 11, 10))",
                                        qzxtK1_9Y: "https://t.me/sc_audit",
                                        RQDpSij6V:
                                          "var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8))",
                                        TiAMtDaz3: "Join our Telegram",
                                        variant: "ZmCP_eD3_",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e(pe, {
                        className: "framer-j7xp99",
                        redirectUrl: "/",
                        children: (d) =>
                          s(me, {
                            children: [
                              s("label", {
                                className: "framer-1jbd90p",
                                children: [
                                  e(i, {
                                    breakpoint: t,
                                    overrides: {
                                      cSiNaMWWS: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children:
                                              "Company or Protocol Name",
                                          }),
                                        }),
                                      },
                                      jaUOdyaYI: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children:
                                              "Company or Protocol Name",
                                          }),
                                        }),
                                      },
                                      u9lN1f6AR: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children:
                                              "Company or Protocol Name",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(h, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "500",
                                            "--framer-text-color":
                                              "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                          },
                                          children: "Company or Protocol Name",
                                        }),
                                      }),
                                      className: "framer-15srl8q",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(R, {
                                    className: "framer-1na5w8j",
                                    inputName: "Name",
                                    placeholder: "example: guild audits",
                                    type: "text",
                                  }),
                                ],
                              }),
                              s("label", {
                                className: "framer-8gq7sr",
                                children: [
                                  e(i, {
                                    breakpoint: t,
                                    overrides: {
                                      cSiNaMWWS: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Website URL",
                                          }),
                                        }),
                                      },
                                      jaUOdyaYI: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Website URL",
                                          }),
                                        }),
                                      },
                                      u9lN1f6AR: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Website URL",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(h, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "500",
                                            "--framer-text-color":
                                              "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                          },
                                          children: "Website URL",
                                        }),
                                      }),
                                      className: "framer-nh8nmg",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(R, {
                                    className: "framer-75vppn",
                                    inputName: "URL",
                                    placeholder: "example: guildaudits.com",
                                    type: "text",
                                  }),
                                ],
                              }),

                              s("label", {
                                className: "framer-1ewryul",
                                children: [
                                  e(i, {
                                    breakpoint: t,
                                    overrides: {
                                      cSiNaMWWS: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Choose your Chain",
                                          }),
                                        }),
                                      },
                                      jaUOdyaYI: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Choose your Chain",
                                          }),
                                        }),
                                      },
                                      u9lN1f6AR: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Choose your Chain",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(h, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "500",
                                            "--framer-text-color":
                                              "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                          },
                                          children: "Choose your Chain",
                                        }),
                                      }),
                                      className: "framer-ath401",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(R, {
                                    className: "framer-75vppn",
                                    inputName: "URL",
                                    placeholder: "Polygon, Solana, etc.",
                                    type: "text",
                                  }),
                                ],
                              }),
                              s("label", {
                                className: "framer-1uj9me8",
                                children: [
                                  e(i, {
                                    breakpoint: t,
                                    overrides: {
                                      cSiNaMWWS: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Business Email",
                                          }),
                                        }),
                                      },
                                      jaUOdyaYI: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Business Email",
                                          }),
                                        }),
                                      },
                                      u9lN1f6AR: {
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "SW50ZXItTWVkaXVt",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "500",
                                              "--framer-text-color":
                                                "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                            },
                                            children: "Business Email",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(h, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "SW50ZXItTWVkaXVt",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "500",
                                            "--framer-text-color":
                                              "var(--token-d54f4ac6-1a80-4314-a087-e04460997977, rgba(77, 77, 77, 0.71))",
                                          },
                                          children: "Business Email",
                                        }),
                                      }),
                                      className: "framer-10h65o5",
                                      fonts: ["Inter-Medium"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(R, {
                                    className: "framer-1cr8sf8",
                                    inputName: "Email",
                                    placeholder: "jane@guildaudits.com",
                                    type: "email",
                                  }),
                                ],
                              }),
                              e(i, {
                                breakpoint: t,
                                overrides: {
                                  cSiNaMWWS: {
                                    width:
                                      "calc(min(max(min(100vw, 1280px) - 128px, 1px), 1280px) * 0.3849 - 40px)",
                                  },
                                  jaUOdyaYI: {
                                    width:
                                      "calc(min(max(min(100vw, 1280px) - 64px, 1px), 1280px) * 0.5526 - 40px)",
                                  },
                                  u9lN1f6AR: {
                                    width:
                                      "calc(min(min(100vw, 1280px) - 32px, 1280px) - 40px)",
                                  },
                                },
                                children: e(x, {
                                  width:
                                    "calc(min(max(min(100vw, 1280px) - 64px, 1px), 1280px) * 0.3849 - 40px)",
                                  children: e(y, {
                                    className: "framer-1kg40g2-container",
                                    children: e(H, {
                                      height: "100%",
                                      id: "k2BESyO7q",
                                      layoutId: "k2BESyO7q",
                                      style: { height: "100%", width: "100%" },
                                      type: "submit",
                                      variant: or(
                                        d,
                                        {
                                          pending: "HGlUMDtuc",
                                          success: "elqDKMwrr",
                                        },
                                        "eNWJBVgDX",
                                      ),
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                }),
                e(i, {
                  breakpoint: t,
                  overrides: {
                    jaUOdyaYI: { width: "100vw" },
                    u9lN1f6AR: { width: "100vw" },
                  },
                  children: e(x, {
                    width: "1248px",
                    children: e(y, {
                      className: "framer-1aw6zyb-container",
                      children: e(i, {
                        breakpoint: t,
                        overrides: {
                          jaUOdyaYI: { variant: "qD82lUNa5" },
                          u9lN1f6AR: { variant: "k2EEDG6yC" },
                        },
                        children: e(Y, {
                          height: "100%",
                          id: "mPCm7gZCq",
                          layoutId: "mPCm7gZCq",
                          style: { width: "100%" },
                          variant: "e6HBFILgg",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                e(x, {
                  children: e(i, {
                    breakpoint: t,
                    overrides: { u9lN1f6AR: { animate: lr } },
                    children: e(y, {
                      animate: ir,
                      className: "framer-1yerdf7-container",
                      "data-framer-appear-id": "1yerdf7",
                      initial: mr,
                      optimized: !0,
                      style: { transformPerspective: 1200 },
                      children: e(K, {
                        background: "rgba(0, 0, 0, 0)",
                        clickOptions: { clickEnabled: !0, clickModes: "trail" },
                        color: "rgb(255, 255, 255)",
                        colors: [],
                        densityOptions: {
                          densityArea: 5e3,
                          densityEnable: !1,
                          densityFactor: 50,
                        },
                        fpsOptions: 60,
                        height: "100%",
                        hoverOptions: {
                          hoverEnabled: !0,
                          hoverForce: 10,
                          hoverModes: "none",
                          hoverParallax: !0,
                          hoverSmooth: 10,
                        },
                        id: "fB1mYEtd1",
                        layoutId: "fB1mYEtd1",
                        linksOptions: {
                          linksColor: "rgb(255, 255, 255)",
                          linksDistance: 100,
                          linksEnabled: !1,
                          linksOpacity: 0.2,
                          linksWidth: 1,
                        },
                        modeOptions: {
                          bubbleDistance: 100,
                          bubbleDuration: 0.4,
                          bubbleSize: 40,
                          connectDistance: 100,
                          connectLinksOpacity: 0.2,
                          connectRadius: 50,
                          grabDistance: 100,
                          grabLinksOpacity: 0.2,
                          pushQuantity: 4,
                          removeQuantity: 4,
                          repulseDistance: 200,
                          repulseDuration: 1.2,
                          trailDelay: 0.1,
                          trailQuantity: 10,
                        },
                        moveOptions: {
                          moveAttractDistance: 100,
                          moveAttractEnabled: !1,
                          moveDirection: "none",
                          moveEnabled: !0,
                          moveGravityAcceleration: 1,
                          moveGravityEnabled: !1,
                          moveGravityMaxSpeed: 2,
                          moveOut: "out",
                          moveRandom: !1,
                          moveSpeed: 0.7,
                          moveSpinAcceleration: 1,
                          moveSpinEnabled: !1,
                          moveStraight: !1,
                          moveTrailAmount: 100,
                          moveTrailEnabled: !1,
                          moveVibrate: !1,
                        },
                        number: 200,
                        opacityOptions: {
                          opacity: 1,
                          opacityMax: 1,
                          opacityMin: 0,
                          opacityType: !0,
                        },
                        particlesID: "One",
                        radius: 0,
                        rotateOptions: {
                          rotateAnimation: !1,
                          rotateDirection: "random",
                          rotateSpeed: 5,
                          rotateSync: !1,
                          rotateValue: 0,
                        },
                        shapeOptions: {
                          characterType: "\u{1F60E}",
                          imageHeight: 100,
                          imageWidth: 100,
                          shapeType: "circle",
                        },
                        sizeOptions: {
                          size: 1,
                          sizeMax: 10,
                          sizeMin: 1,
                          sizeType: !0,
                        },
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: A(ke, ...O), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  cr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${V.bodyClassName}-framer-ulmdA { background: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(255, 255, 255)); }`,
    ".framer-ulmdA.framer-emkhe2, .framer-ulmdA .framer-emkhe2 { display: block; }",
    ".framer-ulmdA.framer-1tfptxz { align-content: center; align-items: center; background-color: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1536px; }",
    ".framer-ulmdA .framer-34lmn9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-ulmdA .framer-ff36vx-container { flex: 1 0 0px; height: auto; max-width: 1280px; position: relative; width: 1px; z-index: 10; }",
    ".framer-ulmdA .framer-1dqoxxh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 64px 32px 64px 32px; position: relative; width: 100%; z-index: 1; }",
    ".framer-ulmdA .framer-10s4lld { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-ulmdA .framer-1094q3t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-ulmdA .framer-1mv75av, .framer-ulmdA .framer-m3p43z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-ulmdA .framer-shemz6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-ulmdA .framer-qwhvmv { flex: none; height: auto; max-width: 530px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-ulmdA .framer-1l9zczx { aspect-ratio: 1.1934156378600822 / 1; bottom: -168px; cursor: grab; flex: none; height: var(--framer-aspect-ratio-supported, 218px); overflow: visible; position: absolute; right: -56px; width: 260px; z-index: 1; }",
    ".framer-ulmdA .framer-1d4tsit { aspect-ratio: 1.1934156378600822 / 1; bottom: -317px; cursor: grab; flex: none; height: var(--framer-aspect-ratio-supported, 111px); left: 419px; overflow: visible; position: absolute; width: 132px; z-index: 1; }",
    ".framer-ulmdA .framer-8sc5ge { aspect-ratio: 1.1934156378600822 / 1; bottom: -498px; cursor: grab; flex: none; height: var(--framer-aspect-ratio-supported, 201px); overflow: visible; position: absolute; right: -101px; width: 239px; z-index: 1; }",
    ".framer-ulmdA .framer-x5r7tr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-ulmdA .framer-15onm5l-container, .framer-ulmdA .framer-ewnbre-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-ulmdA .framer-j7xp99 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 38%; }",
    ".framer-ulmdA .framer-1jbd90p, .framer-ulmdA .framer-8gq7sr, .framer-ulmdA .framer-1ewryul, .framer-ulmdA .framer-1uj9me8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }",
    ".framer-ulmdA .framer-15srl8q, .framer-ulmdA .framer-nh8nmg, .framer-ulmdA .framer-ath401, .framer-ulmdA .framer-10h65o5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    '.framer-ulmdA .framer-1na5w8j, .framer-ulmdA .framer-75vppn, .framer-ulmdA .framer-1cr8sf8 { --framer-input-background: #ffffff; --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-1d41be26-8327-4a17-8026-fc71ab617258, #0a0b0a); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #636363; flex: none; height: 40px; position: relative; width: 100%; }',
    '.framer-ulmdA .framer-33oy76 { --framer-input-background: #ffffff; --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-1d41be26-8327-4a17-8026-fc71ab617258, #0a0b0a); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-invalid-text-color: #636363; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }',
    ".framer-ulmdA .framer-1kg40g2-container { flex: none; height: 40px; position: relative; width: 100%; }",
    ".framer-ulmdA .framer-1aw6zyb-container { flex: none; height: auto; position: relative; width: 1248px; z-index: 1; }",
    ".framer-ulmdA .framer-1yerdf7-container { flex: none; height: 100%; left: 0px; opacity: 0.2; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-ulmdA.framer-1tfptxz, .framer-ulmdA .framer-34lmn9, .framer-ulmdA .framer-1dqoxxh, .framer-ulmdA .framer-10s4lld, .framer-ulmdA .framer-1094q3t, .framer-ulmdA .framer-1mv75av, .framer-ulmdA .framer-m3p43z, .framer-ulmdA .framer-x5r7tr, .framer-ulmdA .framer-j7xp99, .framer-ulmdA .framer-1jbd90p, .framer-ulmdA .framer-8gq7sr, .framer-ulmdA .framer-1ewryul, .framer-ulmdA .framer-1uj9me8 { gap: 0px; } .framer-ulmdA.framer-1tfptxz > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-ulmdA.framer-1tfptxz > :first-child, .framer-ulmdA .framer-1094q3t > :first-child, .framer-ulmdA .framer-1mv75av > :first-child, .framer-ulmdA .framer-m3p43z > :first-child, .framer-ulmdA .framer-j7xp99 > :first-child, .framer-ulmdA .framer-1jbd90p > :first-child, .framer-ulmdA .framer-8gq7sr > :first-child, .framer-ulmdA .framer-1ewryul > :first-child, .framer-ulmdA .framer-1uj9me8 > :first-child { margin-top: 0px; } .framer-ulmdA.framer-1tfptxz > :last-child, .framer-ulmdA .framer-1094q3t > :last-child, .framer-ulmdA .framer-1mv75av > :last-child, .framer-ulmdA .framer-m3p43z > :last-child, .framer-ulmdA .framer-j7xp99 > :last-child, .framer-ulmdA .framer-1jbd90p > :last-child, .framer-ulmdA .framer-8gq7sr > :last-child, .framer-ulmdA .framer-1ewryul > :last-child, .framer-ulmdA .framer-1uj9me8 > :last-child { margin-bottom: 0px; } .framer-ulmdA .framer-34lmn9 > *, .framer-ulmdA .framer-x5r7tr > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ulmdA .framer-34lmn9 > :first-child, .framer-ulmdA .framer-1dqoxxh > :first-child, .framer-ulmdA .framer-10s4lld > :first-child, .framer-ulmdA .framer-x5r7tr > :first-child { margin-left: 0px; } .framer-ulmdA .framer-34lmn9 > :last-child, .framer-ulmdA .framer-1dqoxxh > :last-child, .framer-ulmdA .framer-10s4lld > :last-child, .framer-ulmdA .framer-x5r7tr > :last-child { margin-right: 0px; } .framer-ulmdA .framer-1dqoxxh > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-ulmdA .framer-10s4lld > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-ulmdA .framer-1094q3t > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-ulmdA .framer-1mv75av > *, .framer-ulmdA .framer-m3p43z > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-ulmdA .framer-j7xp99 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-ulmdA .framer-1jbd90p > *, .framer-ulmdA .framer-8gq7sr > *, .framer-ulmdA .framer-1ewryul > *, .framer-ulmdA .framer-1uj9me8 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    "@media (min-width: 1536px) { .framer-ulmdA .hidden-1tfptxz { display: none !important; } }",
    `@media (min-width: 1280px) and (max-width: 1535px) { .framer-ulmdA .hidden-1bt2x41 { display: none !important; } .${V.bodyClassName}-framer-ulmdA { background: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(255, 255, 255)); } .framer-ulmdA.framer-1tfptxz { width: 1280px; } .framer-ulmdA .framer-1dqoxxh { padding: 64px; } .framer-ulmdA .framer-j7xp99 { overflow: unset; }}`,
    `@media (min-width: 768px) and (max-width: 1279px) { .framer-ulmdA .hidden-yu9iha { display: none !important; } .${V.bodyClassName}-framer-ulmdA { background: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(255, 255, 255)); } .framer-ulmdA.framer-1tfptxz { width: 768px; } .framer-ulmdA .framer-1dqoxxh { padding: 40px 32px 64px 32px; } .framer-ulmdA .framer-10s4lld { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-ulmdA .framer-1094q3t { flex: none; width: 100%; } .framer-ulmdA .framer-shemz6 { max-width: 704px; } .framer-ulmdA .framer-8sc5ge { height: var(--framer-aspect-ratio-supported, 200px); } .framer-ulmdA .framer-j7xp99 { align-self: unset; height: min-content; width: 55%; } .framer-ulmdA .framer-1aw6zyb-container { width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-ulmdA .framer-10s4lld { gap: 0px; } .framer-ulmdA .framer-10s4lld > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-ulmdA .framer-10s4lld > :first-child { margin-top: 0px; } .framer-ulmdA .framer-10s4lld > :last-child { margin-bottom: 0px; } }}`,
    `@media (max-width: 767px) { .framer-ulmdA .hidden-1aqljja { display: none !important; } .${V.bodyClassName}-framer-ulmdA { background: var(--token-7d27c033-cb66-44c8-bf4e-e66d9f19511b, rgb(255, 255, 255)); } .framer-ulmdA.framer-1tfptxz { width: 320px; } .framer-ulmdA .framer-1dqoxxh { flex-direction: column; padding: 20px 16px 40px 16px; } .framer-ulmdA .framer-10s4lld { flex: none; flex-direction: column; gap: 32px; width: 100%; } .framer-ulmdA .framer-1094q3t { flex: none; width: 100%; } .framer-ulmdA .framer-m3p43z { gap: 10px; } .framer-ulmdA .framer-x5r7tr { flex-direction: column; } .framer-ulmdA .framer-15onm5l-container, .framer-ulmdA .framer-ewnbre-container, .framer-ulmdA .framer-1aw6zyb-container { width: 100%; } .framer-ulmdA .framer-j7xp99 { align-self: unset; height: min-content; width: 100%; } .framer-ulmdA .framer-1yerdf7-container { height: 100%; opacity: 0.1; top: calc(50.03215434083603% - 100% / 2); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-ulmdA .framer-1dqoxxh, .framer-ulmdA .framer-10s4lld, .framer-ulmdA .framer-m3p43z, .framer-ulmdA .framer-x5r7tr { gap: 0px; } .framer-ulmdA .framer-1dqoxxh > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-ulmdA .framer-1dqoxxh > :first-child, .framer-ulmdA .framer-10s4lld > :first-child, .framer-ulmdA .framer-m3p43z > :first-child, .framer-ulmdA .framer-x5r7tr > :first-child { margin-top: 0px; } .framer-ulmdA .framer-1dqoxxh > :last-child, .framer-ulmdA .framer-10s4lld > :last-child, .framer-ulmdA .framer-m3p43z > :last-child, .framer-ulmdA .framer-x5r7tr > :last-child { margin-bottom: 0px; } .framer-ulmdA .framer-10s4lld > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-ulmdA .framer-m3p43z > *, .framer-ulmdA .framer-x5r7tr > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
    ...Ae,
    ...we,
  ],
  z = W(dr, cr, "framer-ulmdA"),
  Sr = z;
z.displayName = "Web3 Pentest";
z.defaultProps = { height: 837, width: 1536 };
D(
  z,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNTxXUEKi4Rw.woff2",
          weight: "600",
        },
        {
          family: "Plus Jakarta Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NTxXUEKi4Rw.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
          weight: "500",
        },
      ],
    },
    ...Qe,
    ...Je,
    ...$e,
    ...er,
    ...rr,
    ...q(ve),
    ...q(ye),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var _r = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerQ60EptuPo",
      slots: [],
      annotations: {
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1536",
        framerComponentViewportWidth: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cSiNaMWWS":{"layout":["fixed","auto"]},"jaUOdyaYI":{"layout":["fixed","auto"]},"u9lN1f6AR":{"layout":["fixed","auto"]}}}',
        framerIntrinsicHeight: "837",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { _r as __FramerMetadata__, Sr as default };
//# sourceMappingURL=B20QeSWhGbMXKGHVneuMbX7RZ76fylWTKLb_WynWXVs.ENTP7Z3X.mjs.map
