import {
  C as w,
  Ca as H,
  E as S,
  N as I,
  Q as P,
  V as O,
  _ as x,
  ja as D,
  m as R,
  o as f,
  q as o,
  r as b,
  s as F,
  t as v,
  u as E,
  x as k,
} from "./chunk-NFQGW3GT.mjs";
import { h as n, l as p } from "./chunk-KQLRTPKK.mjs";
import { c as a } from "./chunk-ELYU6EKT.mjs";
var C = "default" in f ? R : f,
  m = {},
  M = C;
m.createRoot = M.createRoot;
m.hydrateRoot = M.hydrateRoot;
var _ = m.createRoot,
  V = m.hydrateRoot;
var u = {
    augiA20Il: {
      elements: { bj_yV4awM: "faq", c2ZynsCbs: "services", JYlfXrHUn: "about" },
      page: o(
        () =>
          import("./vEoHfDGED7c7tvLKnc2CM7qjdLXPvfkg_AkkBWE7tcY.F2XJGKRK.mjs"),
      ),
      path: "/",
    },
    Q3wAu590R: {
      elements: {},
      page: o(
        () =>
          import("./6LqCCzhi0D35EBzxUPwiGdWDD3P8Lgjt1TQM2C5zSUo.JMGD42PC.mjs"),
      ),
      path: "/audit.html",
    },
    FO7Dp2THB: {
      elements: {},
      page: o(
        () =>
          import("./ru1R4XXmsTdRdYxF2K6dpEe_s7ki86Yvi_kNXsT_bM4.647AD4JI.mjs"),
      ),
      path: "/education.html",
    },
    Q60EptuPo: {
      elements: {},
      page: o(
        () =>
          import("./B20QeSWhGbMXKGHVneuMbX7RZ76fylWTKLb_WynWXVs.ENTP7Z3X.mjs"),
      ),
      path: "/form.html",
    },
    NQh7qvjFO: {
      elements: {},
      page: o(
        () =>
          import("./CCME1cAofY8gDQlq0si5X6h6p-RXtBl8ajL_d-vKxiE.6U3JY65E.mjs"),
      ),
      path: "/blog",
    },
    V892wiXun: {
      elements: {},
      page: o(
        () =>
          import("./bKb_uWFXs6aPBU6kZG1KlsryITpP5rV7USnX5MThWVA.5OEQVK72.mjs"),
      ),
      path: "/404",
    },
    ycndO5432: {
      collectionId: "Xd1J0o8me",
      elements: {},
      page: o(
        () =>
          import("./7MaFrNVvOcHJTrbTAfZlDAOpYja0nFooaWANYozpfyI.AUEECSOT.mjs"),
      ),
      path: "/blog/:RyNA95by4",
    },
  },
  B = [{ code: "en-US", id: "default", name: "English", slug: "" }];
async function J({ routeId: e, pathVariables: r, localeId: s }) {
  await u[e].page.preload();
  let i = n(x, {
      isWebsite: !0,
      routeId: e,
      pathVariables: r,
      routes: u,
      collectionUtils: {
        Xd1J0o8me: async () =>
          (
            await import(
              "./data-module.locIpNd7w1f1BFyJZKdMwryawGvOR1AuAS98BhZKATg.AEYYK2BW.mjs"
            )
          )?.utils,
      },
      framerSiteId:
        "b523f3691068bd5b70437ca21e35bcd4e3faeccbf10e5f5991927e14ae68f706",
      notFoundPage: o(
        () =>
          import("./bKb_uWFXs6aPBU6kZG1KlsryITpP5rV7USnX5MThWVA.5OEQVK72.mjs"),
      ),
      isReducedMotion: void 0,
      localeId: s,
      locales: B,
      preserveQueryParams: void 0,
    }),
    c = n(O, {
      children: i,
      value: { enableAsyncURLUpdates: !1, useGranularSuspense: !1 },
    });
  return n(b, {
    children: c,
    value: {
      global: {
        enter: {
          mask: { angle: 0, type: "wipe", width: "100%" },
          opacity: 1,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.4,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: "tween",
          },
          x: "0px",
          y: "0px",
        },
      },
      routes: {},
    },
  });
}
var y = typeof document < "u";
y &&
  ((a.__framer_importFromPackage = (e, r) => () =>
    n(w, {
      error: 'Package component not supported: "' + r + '" in "' + e + '"',
    })),
  (a.process = {
    ...a.process,
    env: { ...(a.process ? a.process.env : void 0), NODE_ENV: "production" },
  }),
  S(),
  (a.__framer_events = a.__framer_events || []));
function z() {
  y && a.__framer_events.push(arguments);
}
function N(e) {
  y &&
    (document.readyState === "interactive" || document.readyState === "complete"
      ? e()
      : document.addEventListener("readystatechange", () => {
          document.readyState === "interactive" && e();
        }));
}
N(async function () {
  try {
    let h = function (t, A) {
        let l = A?.componentStack;
        (console.warn(
          "Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",
          t,
          l,
        ),
          !(Math.random() > 0.01) &&
            z("published_site_load_recoverable_error", {
              message: String(t),
              componentStack: l,
              stack: l
                ? void 0
                : t instanceof Error && typeof t.stack == "string"
                  ? t.stack
                  : null,
            }));
      },
      e = document.getElementById("main"),
      r,
      s,
      i,
      c,
      d = !1;
    if ("framerHydrateV2" in e.dataset) {
      let t = JSON.parse(e.dataset.framerHydrateV2);
      ((r = t.routeId),
        (s = t.localeId),
        (i = t.pathVariables),
        (c = t.breakpoints),
        (d = !0));
    } else {
      let t = k(u, decodeURIComponent(location.pathname), !0, B);
      ((r = t.routeId), (s = t.localeId), (i = t.pathVariables));
    }
    let g = await J({ routeId: r, localeId: s, pathVariables: i });
    d
      ? (H("framer-rewrite-breakpoints", () => {
          (D(c), a.__framer_onRewriteBreakpoints?.(c));
        }),
        p(() => {
          (F(), E(), v(), V(e, g, { onRecoverableError: h }));
        }))
      : _(e, { onRecoverableError: h }).render(g);
  } catch (e) {
    throw (
      z("published_site_load_error", {
        message: String(e),
        stack:
          e instanceof Error && typeof e.stack == "string" ? e.stack : null,
      }),
      e
    );
  }
});

export { J as getPageRoot };
//# sourceMappingURL=script_main.4WWDHQNE.mjs.map
