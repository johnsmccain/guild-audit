import { i as ae } from "./chunk-DNFVZGMK.mjs";
import {
  Aa as me,
  D as l,
  G as I,
  I as F,
  M as ne,
  O as q,
  P as ie,
  S as O,
  Y as le,
  a as R,
  c as a,
  e as L,
  ha as W,
  ka as A,
  pa as de,
  qa as U,
  w as P,
  wa as se,
  za as K,
} from "./chunk-NFQGW3GT.mjs";
import {
  a as oe,
  d as V,
  j as z,
  n as j,
  o as $,
  p as D,
  s as Q,
  t as S,
  u as ee,
  x as e,
  y as b,
} from "./chunk-KQLRTPKK.mjs";
var ge = { display: "flex", justifyContent: "left", alignItems: "left" };
function ue(o) {
  let {
      startNumber: r,
      endNumber: i,
      speed: n,
      prefix: s,
      suffix: d,
      loop: m,
      decimalSeparator: u,
      fontSize: x,
      font: f,
      fontColor: k,
    } = o,
    [h, _] = ee(r),
    [w, N] = ee(!1),
    y = oe.useRef(null);
  ($(() => {
    let c = new IntersectionObserver((t) => {
      let g = t[0];
      N(g.isIntersecting);
    });
    return (
      y.current && c.observe(y.current),
      () => {
        y.current && c.unobserve(y.current);
      }
    );
  }, []),
    $(() => {
      if (w && r !== i) {
        let c = setInterval(() => {
          h < i ? _((t) => t + 1) : m && _(r);
        }, n);
        return () => {
          clearInterval(c);
        };
      }
    }, [h, r, i, m, w]));
  let v = (c) =>
    u === "comma"
      ? c.toLocaleString("en-US")
      : u === "period"
        ? c.toLocaleString("en-US").replace(/,/g, ".")
        : c.toFixed(0);
  return b(a.div, {
    ref: y,
    style: {
      ...ge,
      gap: `${x / 2}px`,
      flexDirection: "row",
      alignItems: "left",
      fontSize: `${x}px`,
      fontFamily: f.fontFamily,
      fontWeight: f.fontWeight,
      color: k,
    },
    children: [s, v(h), d],
  });
}
ue.defaultProps = {
  startNumber: 0,
  endNumber: 10,
  speed: 100,
  prefix: "",
  suffix: "",
  loop: !1,
  decimalSeparator: "comma",
  fontSize: 16,
  font: { fontFamily: "Arial", fontWeight: 400, systemFont: !0 },
  fontColor: "#707070",
};
I(ue, {
  font: {
    title: "Font",
    type: l.Font,
    defaultValue: { fontFamily: "Arial", fontWeight: 400, systemFont: !0 },
  },
  fontSize: { title: "Font Size", type: l.Number, min: 8, max: 200, step: 1 },
  fontColor: { type: l.Color, title: "Font Color" },
  startNumber: {
    type: l.Number,
    title: "Start Number",
    defaultValue: 0,
    displayStepper: !0,
  },
  endNumber: {
    type: l.Number,
    title: "End Number",
    defaultValue: 10,
    displayStepper: !0,
  },
  decimalSeparator: {
    type: l.Enum,
    title: "Decimal Separator",
    defaultValue: "comma",
    options: ["comma", "period", "none"],
    optionTitles: ["Comma (1,000)", "Period (1.000)", "None"],
  },
  speed: {
    type: l.Number,
    title: "Speed (ms)",
    defaultValue: 100,
    min: 0,
    max: 1e3,
    step: 10,
  },
  prefix: { type: l.String, title: "Prefix", defaultValue: "" },
  suffix: { type: l.String, title: "Suffix", defaultValue: "" },
  loop: {
    type: l.Boolean,
    title: "Loop Animation",
    defaultValue: !1,
    enabledTitle: "On",
    disabledTitle: "Off",
  },
});
var E = ne(a.div),
  he = ["Rt_NTmuIz", "yjVyfx7qm", "IczhH2SIR", "bAxgU4aWa"],
  ve = "framer-xxQiR",
  _e = {
    bAxgU4aWa: "framer-v-sif2dh",
    IczhH2SIR: "framer-v-12hzjw9",
    Rt_NTmuIz: "framer-v-1xps7bh",
    yjVyfx7qm: "framer-v-ybjp5s",
  };
function Re(o, ...r) {
  let i = {};
  return (r?.forEach((n) => n && Object.assign(i, o[n])), i);
}
var Ie = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  X = { delay: 0, duration: 2.5, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  ke = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 750,
  },
  we = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -750,
  },
  Ve = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -1e3,
    y: 0,
  },
  Te = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 1e3,
    y: 0,
  },
  Ce = ({ value: o, children: r }) => {
    let i = j(R),
      n = o ?? i.transition,
      s = Q(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(R.Provider, { value: s, children: r });
  },
  Ne = a(V),
  ze = {
    "Variant 1": "Rt_NTmuIz",
    "Variant 2": "yjVyfx7qm",
    "Variant 3": "IczhH2SIR",
    "Variant 4": "bAxgU4aWa",
  },
  je = ({ height: o, id: r, width: i, ...n }) => {
    var s, d;
    return {
      ...n,
      variant:
        (d = (s = ze[n.variant]) !== null && s !== void 0 ? s : n.variant) !==
          null && d !== void 0
          ? d
          : "Rt_NTmuIz",
    };
  },
  De = (o, r) =>
    o.layoutDependency ? r.join("-") + o.layoutDependency : r.join("-"),
  Qe = z(function (o, r) {
    let { activeLocale: i, setLocale: n } = P(),
      { style: s, className: d, layoutId: m, variant: u, ...x } = je(o),
      {
        baseVariant: f,
        classNames: k,
        clearLoadingGesture: h,
        gestureHandlers: _,
        gestureVariant: w,
        isLoading: N,
        setGestureState: y,
        setVariant: v,
        variants: c,
      } = U({
        cycleOrder: he,
        defaultVariant: "Rt_NTmuIz",
        variant: u,
        variantClassNames: _e,
      }),
      t = De(o, c),
      { activeVariantCallback: g, delay: p } = W(f),
      G = g(async (...Y) => {
        await p(() => v("yjVyfx7qm"), 300);
      }),
      M = g(async (...Y) => {
        (y({ isPressed: !1 }), v("yjVyfx7qm"));
      }),
      B = g(async (...Y) => {
        await p(() => v("IczhH2SIR"), 300);
      }),
      H = g(async (...Y) => {
        await p(() => v("bAxgU4aWa"), 300);
      });
    A(f, { bAxgU4aWa: void 0, default: G, IczhH2SIR: H, yjVyfx7qm: B });
    let Z = S(null),
      J = () => !!["yjVyfx7qm", "IczhH2SIR", "bAxgU4aWa"].includes(f),
      re = () => !!["IczhH2SIR", "bAxgU4aWa"].includes(f),
      te = () => f === "bAxgU4aWa",
      xe = D(),
      ye = [],
      He = q();
    return e(L, {
      id: m ?? xe,
      children: e(Ne, {
        animate: c,
        initial: !1,
        children: e(Ce, {
          value: Ie,
          children: b(a.div, {
            ...x,
            ..._,
            className: F(ve, ...ye, "framer-1xps7bh", d, k),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: t,
            layoutId: "Rt_NTmuIz",
            ref: r ?? Z,
            style: { ...s },
            ...Re(
              {
                bAxgU4aWa: {
                  "data-framer-name": "Variant 4",
                  "data-highlight": void 0,
                },
                IczhH2SIR: { "data-framer-name": "Variant 3" },
                yjVyfx7qm: { "data-framer-name": "Variant 2", onTap: M },
              },
              f,
              w,
            ),
            children: [
              b(a.div, {
                className: "framer-wqcxq5",
                layoutDependency: t,
                layoutId: "hIn7mVWRp",
                style: {
                  borderBottomLeftRadius: 1,
                  borderBottomRightRadius: 1,
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                },
                children: [
                  e(a.div, {
                    className: "framer-wazkzp",
                    layoutDependency: t,
                    layoutId: "P_dwlYBfI",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-1vp21n5",
                    layoutDependency: t,
                    layoutId: "Zzt7j_BLP",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.06))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-uqgrib",
                    layoutDependency: t,
                    layoutId: "n1bbgWvvQ",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-m71skq",
                    layoutDependency: t,
                    layoutId: "fBT2cSS5R",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                    children:
                      J() &&
                      e(E, {
                        __framer__loop: ke,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 2,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: X,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: "framer-1m9drpx",
                        "data-framer-name": "Vertical Dash",
                        layoutDependency: t,
                        layoutId: "JMXfLpIVI",
                        style: {
                          background:
                            'linear-gradient(0deg, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(0, 219, 128, 0) 100%)',
                        },
                      }),
                  }),
                  e(a.div, {
                    className: "framer-bi13vf",
                    layoutDependency: t,
                    layoutId: "C7jq7XXfL",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-1hcyk0s",
                    layoutDependency: t,
                    layoutId: "ALSpeTFSq",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.16))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-eatix6",
                    layoutDependency: t,
                    layoutId: "ahPTZx2ot",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                    children:
                      re() &&
                      e(E, {
                        __framer__loop: we,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 2,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: X,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: "framer-jywefp",
                        "data-framer-name": "Vertical Dash",
                        layoutDependency: t,
                        layoutId: "xLppzYnf2",
                        style: {
                          background:
                            'linear-gradient(180deg, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(0, 219, 128, 0) 100%)',
                        },
                        variants: {
                          bAxgU4aWa: {
                            background:
                              'linear-gradient(0deg, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(0, 219, 128, 0) 100%)',
                          },
                          IczhH2SIR: {
                            background:
                              'linear-gradient(0deg, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(0, 219, 128, 0) 100%)',
                          },
                        },
                      }),
                  }),
                  e(a.div, {
                    className: "framer-1e0sssv",
                    layoutDependency: t,
                    layoutId: "Yor5_y1wd",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-1d7c40b",
                    layoutDependency: t,
                    layoutId: "j0i3DQeNY",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-1u23skt",
                    layoutDependency: t,
                    layoutId: "daigXpFrc",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                ],
              }),
              b(a.div, {
                className: "framer-4vgqah",
                "data-framer-name": "Rows",
                layoutDependency: t,
                layoutId: "e_vKLZ5FB",
                children: [
                  e(a.div, {
                    className: "framer-hcqf4w",
                    layoutDependency: t,
                    layoutId: "jet1YDs0W",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-9p3fva",
                    layoutDependency: t,
                    layoutId: "Iizj0fjo_",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-1ym5tj1",
                    layoutDependency: t,
                    layoutId: "uuNUhViMK",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                    children:
                      te() &&
                      e(E, {
                        __framer__loop: Ve,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopRepeatDelay: 2,
                        __framer__loopRepeatType: "loop",
                        __framer__loopTransition: X,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: "framer-1249js",
                        "data-framer-name": "Horizontal Dash",
                        layoutDependency: t,
                        layoutId: "kOaqqrqcD",
                        style: {
                          background:
                            'linear-gradient(90deg, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(0, 219, 128, 0) 100%)',
                        },
                      }),
                  }),
                  e(a.div, {
                    className: "framer-kx4m4f",
                    layoutDependency: t,
                    layoutId: "L4dtlkzjP",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-gbk5pr",
                    layoutDependency: t,
                    layoutId: "qkW5yFtJO",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                    children: e(E, {
                      __framer__loop: Te,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 2,
                      __framer__loopRepeatType: "loop",
                      __framer__loopTransition: X,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: "framer-pd9j66",
                      "data-framer-name": "Horizontal Dash",
                      layoutDependency: t,
                      layoutId: "dEXsuQYb5",
                      style: {
                        background:
                          'linear-gradient(270deg, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(0, 219, 128, 0) 100%)',
                      },
                    }),
                  }),
                  e(a.div, {
                    className: "framer-4j66i0",
                    layoutDependency: t,
                    layoutId: "odxy76Tga",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                  e(a.div, {
                    className: "framer-1w345sz",
                    layoutDependency: t,
                    layoutId: "dH90nyXiV",
                    style: {
                      backgroundColor:
                        "var(--token-73e1ab91-3c39-4d8d-95db-c8dede17e4ca, rgba(48, 48, 48, 0.31))",
                    },
                  }),
                ],
              }),
              e(a.div, {
                className: "framer-2732ey",
                layoutDependency: t,
                layoutId: "uGibie9SY",
                style: {
                  background:
                    'radial-gradient(50% 50% at 50% 50%, rgba(12, 12, 13, 0) 0%, var(--token-dec226c2-c4ab-475a-b3fc-ceecefba1546, rgb(12, 12, 13)) /* {"name":"t1"} */ 100%)',
                },
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Se = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-xxQiR.framer-qo6dgt, .framer-xxQiR .framer-qo6dgt { display: block; }",
    ".framer-xxQiR.framer-1xps7bh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 800px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1400px; }",
    ".framer-xxQiR .framer-wqcxq5 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-xxQiR .framer-wazkzp, .framer-xxQiR .framer-1vp21n5, .framer-xxQiR .framer-uqgrib, .framer-xxQiR .framer-bi13vf, .framer-xxQiR .framer-1hcyk0s, .framer-xxQiR .framer-1e0sssv, .framer-xxQiR .framer-1d7c40b, .framer-xxQiR .framer-1u23skt { flex: none; height: 100%; overflow: hidden; position: relative; width: 2px; }",
    ".framer-xxQiR .framer-m71skq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px 0px 100px 0px; position: relative; width: 2px; }",
    ".framer-xxQiR .framer-1m9drpx { flex: none; height: 100px; overflow: hidden; position: relative; width: 2px; z-index: 2; }",
    ".framer-xxQiR .framer-eatix6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 250px 0px 0px 0px; position: relative; width: 2px; }",
    ".framer-xxQiR .framer-jywefp { flex: none; height: 100px; overflow: hidden; position: relative; width: 100%; z-index: 2; }",
    ".framer-xxQiR .framer-4vgqah { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-xxQiR .framer-hcqf4w, .framer-xxQiR .framer-9p3fva, .framer-xxQiR .framer-kx4m4f, .framer-xxQiR .framer-4j66i0, .framer-xxQiR .framer-1w345sz { flex: none; height: 2px; overflow: visible; position: relative; width: 100%; }",
    ".framer-xxQiR .framer-1ym5tj1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 2px; justify-content: center; overflow: visible; padding: 0px 0px 0px 600px; position: relative; width: 100%; }",
    ".framer-xxQiR .framer-1249js { flex: none; height: 2px; overflow: hidden; position: relative; width: 75px; z-index: 2; }",
    ".framer-xxQiR .framer-gbk5pr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 2px; justify-content: center; overflow: visible; padding: 0px 750px 0px 0px; position: relative; width: 100%; }",
    ".framer-xxQiR .framer-pd9j66 { flex: none; height: 2px; overflow: hidden; position: relative; width: 75px; z-index: 1; }",
    ".framer-xxQiR .framer-2732ey { bottom: 0px; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xxQiR.framer-1xps7bh, .framer-xxQiR .framer-m71skq, .framer-xxQiR .framer-eatix6, .framer-xxQiR .framer-1ym5tj1, .framer-xxQiR .framer-gbk5pr { gap: 0px; } .framer-xxQiR.framer-1xps7bh > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-xxQiR.framer-1xps7bh > :first-child, .framer-xxQiR .framer-m71skq > :first-child, .framer-xxQiR .framer-eatix6 > :first-child { margin-top: 0px; } .framer-xxQiR.framer-1xps7bh > :last-child, .framer-xxQiR .framer-m71skq > :last-child, .framer-xxQiR .framer-eatix6 > :last-child { margin-bottom: 0px; } .framer-xxQiR .framer-m71skq > *, .framer-xxQiR .framer-eatix6 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-xxQiR .framer-1ym5tj1 > *, .framer-xxQiR .framer-gbk5pr > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-xxQiR .framer-1ym5tj1 > :first-child, .framer-xxQiR .framer-gbk5pr > :first-child { margin-left: 0px; } .framer-xxQiR .framer-1ym5tj1 > :last-child, .framer-xxQiR .framer-gbk5pr > :last-child { margin-right: 0px; } }",
    ".framer-xxQiR.framer-v-ybjp5s.framer-1xps7bh { cursor: pointer; }",
    ".framer-xxQiR.framer-v-ybjp5s .framer-1m9drpx, .framer-xxQiR.framer-v-12hzjw9 .framer-1m9drpx, .framer-xxQiR.framer-v-12hzjw9 .framer-jywefp, .framer-xxQiR.framer-v-sif2dh .framer-1m9drpx, .framer-xxQiR.framer-v-sif2dh .framer-jywefp { height: 75px; }",
    ".framer-xxQiR.framer-v-ybjp5s .framer-1ym5tj1 { padding: 0px; }",
  ],
  T = O(Qe, Se, "framer-xxQiR"),
  na = T;
T.displayName = "Grid";
T.defaultProps = { height: 800, width: 1400 };
I(T, {
  variant: {
    options: ["Rt_NTmuIz", "yjVyfx7qm", "IczhH2SIR", "bAxgU4aWa"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
    title: "Variant",
    type: l.Enum,
  },
});
K(T, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var Le = me(ae),
  Pe = {
    VxuvxdnrO: { hover: !0 },
    WIxK9TUcT: { hover: !0 },
    yf3vGIlm2: { hover: !0 },
    ZIp8JIAKN: { hover: !0 },
  },
  Fe = ["ZIp8JIAKN", "WIxK9TUcT", "yf3vGIlm2", "VxuvxdnrO"],
  qe = "framer-T0h0z",
  Oe = {
    VxuvxdnrO: "framer-v-1eblxc7",
    WIxK9TUcT: "framer-v-1omhofj",
    yf3vGIlm2: "framer-v-huufap",
    ZIp8JIAKN: "framer-v-1uox66m",
  };
function We(o, ...r) {
  let i = {};
  return (r?.forEach((n) => n && Object.assign(i, o[n])), i);
}
var Ae = { delay: 0, duration: 0.8, ease: [0, 0, 1, 1], type: "tween" },
  Ue = ({ value: o, children: r }) => {
    let i = j(R),
      n = o ?? i.transition,
      s = Q(() => ({ ...i, transition: n }), [JSON.stringify(n)]);
    return e(R.Provider, { value: s, children: r });
  },
  Ke = a(V),
  Ee = {
    Bottom: "yf3vGIlm2",
    Left: "VxuvxdnrO",
    Right: "WIxK9TUcT",
    Top: "ZIp8JIAKN",
  },
  Xe = ({ buttonText: o, height: r, id: i, link: n, width: s, ...d }) => {
    var m, u, x;
    return {
      ...d,
      ofLqZhEO8:
        (m = o ?? d.ofLqZhEO8) !== null && m !== void 0 ? m : "Running stroke",
      URgOW2Lv2: n ?? d.URgOW2Lv2,
      variant:
        (x = (u = Ee[d.variant]) !== null && u !== void 0 ? u : d.variant) !==
          null && x !== void 0
          ? x
          : "ZIp8JIAKN",
    };
  },
  Ge = (o, r) =>
    o.layoutDependency ? r.join("-") + o.layoutDependency : r.join("-"),
  Me = z(function (o, r) {
    let { activeLocale: i, setLocale: n } = P(),
      {
        style: s,
        className: d,
        layoutId: m,
        variant: u,
        ofLqZhEO8: x,
        URgOW2Lv2: f,
        ...k
      } = Xe(o),
      {
        baseVariant: h,
        classNames: _,
        clearLoadingGesture: w,
        gestureHandlers: N,
        gestureVariant: y,
        isLoading: v,
        setGestureState: c,
        setVariant: t,
        variants: g,
      } = U({
        cycleOrder: Fe,
        defaultVariant: "ZIp8JIAKN",
        enabledGestures: Pe,
        variant: u,
        variantClassNames: Oe,
      }),
      p = Ge(o, g),
      { activeVariantCallback: G, delay: M } = W(h),
      B = G(async (...te) => {
        await M(() => t(de), 700);
      });
    A(h, { default: B });
    let H = S(null),
      Z = D(),
      J = [],
      re = q();
    return e(L, {
      id: m ?? Z,
      children: e(Ke, {
        animate: g,
        initial: !1,
        children: e(Ue, {
          value: Ae,
          children: e(le, {
            href: f,
            openInNewTab: !1,
            smoothScroll: !0,
            children: b(a.a, {
              ...k,
              ...N,
              className: `${F(qe, ...J, "framer-1uox66m", d, _)} framer-1hyz6jv`,
              "data-framer-name": "Top",
              "data-highlight": !0,
              layoutDependency: p,
              layoutId: "ZIp8JIAKN",
              ref: r ?? H,
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.28)",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                ...s,
              },
              ...We(
                {
                  "VxuvxdnrO-hover": { "data-framer-name": void 0 },
                  "WIxK9TUcT-hover": { "data-framer-name": void 0 },
                  "yf3vGIlm2-hover": { "data-framer-name": void 0 },
                  "ZIp8JIAKN-hover": { "data-framer-name": void 0 },
                  VxuvxdnrO: { "data-framer-name": "Left" },
                  WIxK9TUcT: { "data-framer-name": "Right" },
                  yf3vGIlm2: { "data-framer-name": "Bottom" },
                },
                h,
                y,
              ),
              children: [
                e(a.div, {
                  className: "framer-14zcn03",
                  "data-framer-name": "Glow",
                  layoutDependency: p,
                  layoutId: "Cfe6aECtP",
                  style: {
                    background:
                      'radial-gradient(25% 50% at 50% 0%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                    filter: "blur(15px)",
                    WebkitFilter: "blur(15px)",
                  },
                  variants: {
                    "VxuvxdnrO-hover": {
                      background:
                        'radial-gradient(50% 100% at 50% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    "WIxK9TUcT-hover": {
                      background:
                        'radial-gradient(50% 100% at 50% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    "yf3vGIlm2-hover": {
                      background:
                        'radial-gradient(50% 100% at 50% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    "ZIp8JIAKN-hover": {
                      background:
                        'radial-gradient(50% 100% at 50% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    VxuvxdnrO: {
                      background:
                        'radial-gradient(25% 34.4% at 0% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    WIxK9TUcT: {
                      background:
                        'radial-gradient(25% 35.4% at 100% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    yf3vGIlm2: {
                      background:
                        'radial-gradient(25% 50% at 50% 100%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                  },
                }),
                e(a.div, {
                  className: "framer-16aa6mm",
                  "data-framer-name": "Stroke",
                  layoutDependency: p,
                  layoutId: "BgD0MYXLu",
                  style: {
                    background:
                      'radial-gradient(20.7% 50% at 50% 0%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                  },
                  variants: {
                    "VxuvxdnrO-hover": {
                      background:
                        'radial-gradient(75% 181.15942028985506% at 50% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    "WIxK9TUcT-hover": {
                      background:
                        'radial-gradient(75% 181.15942028985506% at 50% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    "yf3vGIlm2-hover": {
                      background:
                        'radial-gradient(75% 181.15942028985506% at 50% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    "ZIp8JIAKN-hover": {
                      background:
                        'radial-gradient(75% 181.15942028985506% at 50% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    VxuvxdnrO: {
                      background:
                        'radial-gradient(16.6% 43.1% at 0% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    WIxK9TUcT: {
                      background:
                        'radial-gradient(16.2% 41.199999999999996% at 100% 50%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                    yf3vGIlm2: {
                      background:
                        'radial-gradient(20.7% 50% at 50% 100%, var(--token-7049cce7-715e-45a0-a41e-932274474306, rgb(9, 227, 8)) /* {"name":"Primary"} */ 0%, rgba(255, 255, 255, 0) 100%)',
                    },
                  },
                }),
                e(a.div, {
                  className: "framer-qtvya7",
                  "data-framer-name": "Fill",
                  layoutDependency: p,
                  layoutId: "NePaH4s0q",
                  style: {
                    backgroundColor: "rgb(38, 38, 38)",
                    borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7,
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                  },
                }),
                b(a.div, {
                  className: "framer-pxkmsa",
                  layoutDependency: p,
                  layoutId: "J5z516FsW",
                  children: [
                    e(se, {
                      __fromCanvasComponent: !0,
                      children: e(V, {
                        children: e(a.p, {
                          style: {
                            "--font-selector": "R0Y7SW50ZXItcmVndWxhcg==",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-letter-spacing": "-0.01em",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "Running stroke",
                        }),
                      }),
                      className: "framer-fjoeu9",
                      "data-framer-name": "Text",
                      fonts: ["GF;Inter-regular"],
                      layoutDependency: p,
                      layoutId: "vZ5ytjoMc",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        "--framer-paragraph-spacing": "0px",
                      },
                      text: x,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(ie, {
                      children: e(a.div, {
                        className: "framer-11zpnuu-container",
                        layoutDependency: p,
                        layoutId: "uxTegq7xf-container",
                        children: e(ae, {
                          color: "rgb(250, 250, 250)",
                          height: "100%",
                          iconSearch: "House",
                          iconSelection: "ArrowUpRight",
                          id: "uxTegq7xf",
                          layoutId: "uxTegq7xf",
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: "100%", width: "100%" },
                          weight: "regular",
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Be = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-T0h0z.framer-1hyz6jv, .framer-T0h0z .framer-1hyz6jv { display: block; }",
    ".framer-T0h0z.framer-1uox66m { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-T0h0z .framer-14zcn03, .framer-T0h0z .framer-16aa6mm { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-T0h0z .framer-qtvya7 { bottom: 2px; flex: none; left: 2px; overflow: hidden; position: absolute; right: 2px; top: 2px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-T0h0z .framer-pxkmsa { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }",
    ".framer-T0h0z .framer-fjoeu9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-T0h0z .framer-11zpnuu-container { flex: none; height: 16px; position: relative; width: 22px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-T0h0z.framer-1uox66m, .framer-T0h0z .framer-pxkmsa { gap: 0px; } .framer-T0h0z.framer-1uox66m > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-T0h0z.framer-1uox66m > :first-child { margin-top: 0px; } .framer-T0h0z.framer-1uox66m > :last-child { margin-bottom: 0px; } .framer-T0h0z .framer-pxkmsa > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-T0h0z .framer-pxkmsa > :first-child { margin-left: 0px; } .framer-T0h0z .framer-pxkmsa > :last-child { margin-right: 0px; } }",
  ],
  C = O(Me, Be, "framer-T0h0z"),
  fa = C;
C.displayName = "Button/Glow Stroke";
C.defaultProps = { height: 51, width: 207 };
I(C, {
  variant: {
    options: ["ZIp8JIAKN", "WIxK9TUcT", "yf3vGIlm2", "VxuvxdnrO"],
    optionTitles: ["Top", "Right", "Bottom", "Left"],
    title: "Variant",
    type: l.Enum,
  },
  ofLqZhEO8: {
    defaultValue: "Running stroke",
    displayTextArea: !1,
    title: "Button text",
    type: l.String,
  },
  URgOW2Lv2: { title: "Link", type: l.Link },
});
K(
  C,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2",
          weight: "400",
        },
      ],
    },
    ...Le,
  ],
  { supportsExplicitInterCodegen: !0 },
);
export { ue as a, na as b, fa as c };
//# sourceMappingURL=chunk-W6LJ2MY7.mjs.map
