(function (e) {
  function t(t) {
    for (
      var a, r, n = t[0], c = t[1], l = t[2], C = 0, p = [];
      C < n.length;
      C++
    )
      (r = n[C]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && p.push(s[r][0]),
        (s[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    d && d(t);
    while (p.length) p.shift()();
    return i.push.apply(i, l || []), o();
  }
  function o() {
    for (var e, t = 0; t < i.length; t++) {
      for (var o = i[t], a = !0, n = 1; n < o.length; n++) {
        var c = o[n];
        0 !== s[c] && (a = !1);
      }
      a && (i.splice(t--, 1), (e = r((r.s = o[0]))));
    }
    return e;
  }
  var a = {},
    s = { app: 0 },
    i = [];
  function r(t) {
    if (a[t]) return a[t].exports;
    var o = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = a),
    (r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          r.d(
            o,
            a,
            function (t) {
              return e[t];
            }.bind(null, a),
          );
      return o;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var n = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = n.push.bind(n);
  (n.push = t), (n = n.slice());
  for (var l = 0; l < n.length; l++) t(n[l]);
  var d = c;
  i.push([0, "chunk-vendors"]), o();
})({
  0: function (e, t, o) {
    e.exports = o("56d7");
  },
  "034f": function (e, t, o) {
    "use strict";
    o("85ec");
  },
  1462: function (e, t, o) {},
  "1ca9": function (e, t, o) {
    "use strict";
    o("250f");
  },
  "250f": function (e, t, o) {},
  "251a": function (e, t, o) {
    "use strict";
    o("c85f");
  },
  "402b": function (e, t, o) {},
  "43e9": function (e, t, o) {},
  "452c": function (e, t, o) {},
  4678: function (e, t, o) {
    var a = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function s(e) {
      var t = i(e);
      return o(t);
    }
    function i(e) {
      if (!o.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return a[e];
    }
    (s.keys = function () {
      return Object.keys(a);
    }),
      (s.resolve = i),
      (e.exports = s),
      (s.id = "4678");
  },
  "506f": function (e, t, o) {},
  "54c7": function (e, t, o) {
    e.exports = o.p + "img/profile_v.e1736a61.jpg";
  },
  "558f": function (e, t, o) {},
  5646: function (e, t, o) {
    "use strict";
    o("8956");
  },
  "56d7": function (e, t, o) {
    "use strict";
    o.r(t);
    o("e260"), o("e6cf"), o("cca6"), o("a79d");
    var a = o("2b0e"),
      s = (o("d3b7"), o("bc3a")),
      i = o.n(s);
    i.a.defaults.baseURL = "localhost";
    var r = {},
      n = i.a.create(r);
    n.interceptors.request.use(
      function (e) {
        return e;
      },
      function (e) {
        return Promise.reject(e);
      },
    ),
      n.interceptors.response.use(
        function (e) {
          return e;
        },
        function (e) {
          return Promise.reject(e);
        },
      ),
      (Plugin.install = function (e, t) {
        (e.axios = n),
          (window.axios = n),
          Object.defineProperties(e.prototype, {
            axios: {
              get: function () {
                return n;
              },
            },
            $axios: {
              get: function () {
                return n;
              },
            },
          });
      }),
      a["a"].use(Plugin);
    var c = Plugin,
      l = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-app",
          [
            o(
              "v-main",
              [
                o(
                  "v-expand-transition",
                  [
                    e.$route.meta.hideNav
                      ? e._e()
                      : o("xnav", {
                          attrs: {
                            nav_items: e.navItems,
                            nav_title: e.navTitle,
                          },
                        }),
                  ],
                  1,
                ),
                o(
                  "keep-alive",
                  [
                    o(
                      "transition",
                      { attrs: { name: "fade", mode: "out-in" } },
                      [o("router-view", { ref: "view" })],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      d = [],
      C = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "div",
          [
            e.windowWidth > 600
              ? o("nbrDesktop", {
                  attrs: { nav_items: e.nav_items, nav_title: e.nav_title },
                })
              : o("nbrMobile", {
                  attrs: { nav_items: e.nav_items, nav_title: e.nav_title },
                }),
          ],
          1,
        );
      },
      p = [],
      u = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "div",
          [
            o(
              "v-app-bar",
              { attrs: { dark: "" } },
              [
                o("v-toolbar-title", [e._v(e._s(e.nav_title) + " ")]),
                o("v-spacer"),
                o(
                  "v-toolbar-items",
                  [
                    e._l(e.nav_items, function (e, t) {
                      return o(e.type, {
                        key: t,
                        tag: "div",
                        attrs: {
                          dropdown: e.dropdown,
                          title: e.title,
                          link: e.link,
                        },
                      });
                    }),
                    o("v-btn", { on: { click: e.toxtl } }, [e._v(" xtl.tw ")]),
                  ],
                  2,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      h = [],
      v = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-menu",
          {
            attrs: { bottom: "", "offset-y": "" },
            scopedSlots: e._u([
              {
                key: "activator",
                fn: function (t) {
                  var a = t.on,
                    s = t.attrs;
                  return [
                    o(
                      "v-btn",
                      e._g(e._b({ attrs: { dark: "" } }, "v-btn", s, !1), a),
                      [
                        e._v(" " + e._s(e.title)),
                        o(
                          "v-icon",
                          { attrs: { color: "grey lighten-1", dense: "" } },
                          [e._v("mdi-chevron-right")],
                        ),
                      ],
                      1,
                    ),
                  ];
                },
              },
            ]),
          },
          [
            o(
              "v-list",
              e._l(e.dropdown, function (t) {
                return o(
                  t.type,
                  {
                    key: t.title,
                    tag: "div",
                    attrs: {
                      title: t.title,
                      dropdown: t.dropdown,
                      link: t.link,
                    },
                  },
                  [e._v(" " + e._s(t.title) + " ")],
                );
              }),
              1,
            ),
          ],
          1,
        );
      },
      f = [],
      m = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-list-item",
          { attrs: { to: e.link } },
          [o("v-list-item-title", [e._v(" " + e._s(e.title) + " ")])],
          1,
        );
      },
      D = [],
      y = {
        props: { title: String, link: String },
        methods: {
          jump2: function (e) {
            this.$router.push(e);
          },
        },
      },
      w = y,
      T = o("2877"),
      N = o("6544"),
      M = o.n(N),
      A = o("da13"),
      S = o("5d23"),
      b = Object(T["a"])(w, m, D, !1, null, null, null),
      R = b.exports;
    M()(b, { VListItem: A["a"], VListItemTitle: S["b"] });
    var g = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-list-item",
          { staticClass: "v-list-item v-list-item--link theme--dark" },
          [
            o(
              "v-menu",
              {
                attrs: { bottom: "", "offset-x": "" },
                scopedSlots: e._u([
                  {
                    key: "activator",
                    fn: function (t) {
                      var a = t.on,
                        s = t.attrs;
                      return [
                        o(
                          "v-list-item-title",
                          e._g(
                            e._b(
                              {
                                staticStyle: { padding: "0 0" },
                                attrs: { dark: "" },
                              },
                              "v-list-item-title",
                              s,
                              !1,
                            ),
                            a,
                          ),
                          [
                            e._v(" " + e._s(e.title)),
                            o(
                              "v-icon",
                              { attrs: { color: "grey lighten-1", dense: "" } },
                              [e._v("mdi-chevron-right")],
                            ),
                          ],
                          1,
                        ),
                      ];
                    },
                  },
                ]),
              },
              [
                o(
                  "v-list",
                  e._l(e.dropdown, function (t) {
                    return o(
                      "v-list-item",
                      {
                        key: t.title,
                        on: {
                          click: function (o) {
                            return e.jump2(t.link);
                          },
                        },
                      },
                      [
                        o("v-list-item-title", [
                          e._v(" " + e._s(t.title) + " "),
                        ]),
                      ],
                      1,
                    );
                  }),
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      _ = [],
      j = {
        props: { title: String, dropdown: Array },
        methods: {
          jump2: function (e) {
            this.$router.push(e);
          },
        },
      },
      x = j,
      V = (o("acd4"), o("132d")),
      k = o("8860"),
      I = o("e449"),
      E = Object(T["a"])(x, g, _, !1, null, null, null),
      B = E.exports;
    M()(E, {
      VIcon: V["a"],
      VList: k["a"],
      VListItem: A["a"],
      VListItemTitle: S["b"],
      VMenu: I["a"],
    });
    var O = {
        components: { nav_dropdown_item: R, nav_sub_drop: B },
        props: { title: String, dropdown: Array },
        methods: {
          jump2: function (e) {
            location.href = e;
          },
        },
      },
      P = O,
      L = o("8336"),
      U = Object(T["a"])(P, v, f, !1, null, null, null),
      F = U.exports;
    M()(U, { VBtn: L["a"], VIcon: V["a"], VList: k["a"], VMenu: I["a"] });
    var G = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o("v-btn", { attrs: { to: e.link, block: e.isMobile } }, [
          e._v(" " + e._s(e.title) + " "),
        ]);
      },
      W = [],
      H = {
        props: { title: String, link: String },
        data: function () {
          return { isMobile: !1 };
        },
        created: function () {
          window.addEventListener("resize", this.resized), this.resized();
        },
        methods: {
          jump2: function (e) {
            this.$router.push(e);
          },
          resized: function () {
            window.innerWidth <= 600
              ? (this.isMobile = !0)
              : (this.isMobile = !1);
          },
        },
      },
      K = H,
      z = Object(T["a"])(K, G, W, !1, null, null, null),
      $ = z.exports;
    M()(z, { VBtn: L["a"] });
    var Z = {
        components: { nav_btn_drop: F, nav_btn: $ },
        props: { nav_items: Array, nav_title: String },
        mounted: function () {
          console.log("Nav bar mounted!");
        },
        methods: {
          toxtl: function () {
            window.open("https://www.xtl.tw", "_blank");
          },
        },
      },
      Y = Z,
      q = o("40dc"),
      J = o("2fa4"),
      Q = o("2a7f"),
      X = Object(T["a"])(Y, u, h, !1, null, null, null),
      ee = X.exports;
    M()(X, {
      VAppBar: q["a"],
      VBtn: L["a"],
      VSpacer: J["a"],
      VToolbarItems: Q["a"],
      VToolbarTitle: Q["b"],
    });
    var te = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "div",
          [
            o(
              "v-app-bar",
              { attrs: { collapse: "" } },
              [
                o("v-app-bar-nav-icon", {
                  on: {
                    click: function (t) {
                      t.stopPropagation(), (e.drawer = !e.drawer);
                    },
                  },
                }),
              ],
              1,
            ),
            o(
              "v-bottom-sheet",
              {
                attrs: { absolute: "", bottom: "", temporary: "" },
                model: {
                  value: e.drawer,
                  callback: function (t) {
                    e.drawer = t;
                  },
                  expression: "drawer",
                },
              },
              [
                o(
                  "v-list",
                  [
                    o(
                      "v-list-item-content",
                      e._l(e.nav_items, function (e, t) {
                        return o(e.type, {
                          key: t,
                          tag: "div",
                          attrs: {
                            dropdown: e.dropdown,
                            title: e.title,
                            link: e.link,
                          },
                        });
                      }),
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      oe = [],
      ae = {
        components: { nav_btn_drop: F, nav_btn: $ },
        props: { nav_items: Array, nav_title: String },
        data: function () {
          return { drawer: !1 };
        },
      },
      se = ae,
      ie = (o("ad4f"), o("5bc1")),
      re = o("288c"),
      ne = Object(T["a"])(se, te, oe, !1, null, null, null),
      ce = ne.exports;
    M()(ne, {
      VAppBar: q["a"],
      VAppBarNavIcon: ie["a"],
      VBottomSheet: re["a"],
      VList: k["a"],
      VListItemContent: S["a"],
    });
    var le = {
        components: { nbrDesktop: ee, nbrMobile: ce },
        props: { nav_items: Array, nav_title: String },
        data: function () {
          return { windowWidth: 0 };
        },
        created: function () {
          window.addEventListener("resize", this.resized), this.resized();
        },
        methods: {
          resized: function () {
            this.windowWidth = window.innerWidth;
          },
        },
      },
      de = le,
      Ce = Object(T["a"])(de, C, p, !1, null, null, null),
      pe = Ce.exports,
      ue = {
        components: { xnav: pe },
        data: function () {
          return {
            navTitle: "COVID CIC | 武漢肺炎戰情中心 ",
            navItems: [
              { title: "overview", link: "/", type: "nav_btn", dropdown: [] },
              { title: "map", link: "/map", type: "nav_btn", dropdown: [] },
            ],
          };
        },
        mounted: function () {
          console.log(this.$route);
        },
      },
      he = ue,
      ve = (o("034f"), o("b0a0"), o("7496")),
      fe = o("0789"),
      me = o("f6c4"),
      De = Object(T["a"])(he, l, d, !1, null, null, null),
      ye = De.exports;
    M()(De, { VApp: ve["a"], VExpandTransition: fe["a"], VMain: me["a"] });
    var we = o("f309");
    a["a"].use(we["a"]);
    var Te = new we["a"]({
        theme: {
          dark: !0,
          themes: {
            dark: {
              primary: "#03DAC5",
              secondary: "#BB86FC",
              accent: "#82B1FF",
              error: "#CF6679",
              info: "#2196F3",
              success: "#4CAF50",
              warning: "#FFC107",
              background: "#3d3d3d",
            },
            light: {
              primary: "#BB86FC",
              secondary: "#03DAC5",
              accent: "#82B1FF",
              error: "#CF6679",
              info: "#2196F3",
              success: "#4CAF50",
              warning: "#FFC107",
              background: "#3d3d3d",
            },
          },
        },
      }),
      Ne = (o("45fc"), o("96cf"), o("1da1")),
      Me = o("8c4f"),
      Ae = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-container",
          { attrs: { fluid: "", "max-width": "90%" } },
          [
            o(
              "v-card",
              [
                o("v-card-title", { attrs: { "primary-title": "" } }, [
                  e._v(" DASHBOARD "),
                ]),
                o(
                  "v-card-text",
                  [e.auth ? o("operationCard") : e._e(), o("overView")],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      Se = [],
      be =
        (o("99af"),
        o("4160"),
        o("159b"),
        function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "v-card",
            [
              o("v-card-subtitle", [e._v(" OPERATION STATISTICS ")]),
              o(
                "v-card-text",
                [
                  o(
                    "v-row",
                    [
                      o(
                        "v-col",
                        [o("datePad", { attrs: { modeSelect: "clock" } })],
                        1,
                      ),
                    ],
                    1,
                  ),
                  o(
                    "v-row",
                    [
                      o("v-col", [o("datePad")], 1),
                      o(
                        "v-col",
                        [
                          o("numPad", {
                            attrs: {
                              data: e.DEFCON,
                              title: "DEFCON",
                              subtitle: "行動層級",
                              unit: "",
                            },
                          }),
                        ],
                        1,
                      ),
                      o(
                        "v-col",
                        [
                          o("numPad", {
                            attrs: {
                              data: e.Progress,
                              title: "Progress",
                              subtitle: "行動進度",
                              unit: "%",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        }),
      Re = [],
      ge = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          { attrs: { height: "10.75rem", elevation: "10" } },
          [
            o("v-card-title", [e._v(e._s(e.title))]),
            o("v-card-subtitle", [e._v(e._s(e.subtitle))]),
            o("v-card-text", [
              o("div", { staticClass: "info-area" }, [
                o("span", { staticClass: "hightlight" }, [
                  e.countUp
                    ? o("span", { staticClass: "primary--text" }, [
                        e._v(
                          e._s(
                            e.commas
                              ? e.countedData.toLocaleString()
                              : e.countedData,
                          ),
                        ),
                      ])
                    : o(
                        "span",
                        {
                          staticClass: "primary--text",
                          attrs: { id: "count" },
                        },
                        [
                          e._v(
                            e._s(e.commas ? e.data.toLocaleString() : e.data),
                          ),
                        ],
                      ),
                ]),
                o("span", { staticClass: "unit" }, [e._v(e._s(e.unit))]),
              ]),
            ]),
            o("v-card-actions"),
          ],
          1,
        );
      },
      _e = [],
      je = {
        props: {
          title: { type: String, default: "title" },
          subtitle: { type: String, default: "&ensp;" },
          data: { default: 100 },
          unit: { default: "%" },
          countUp: { default: !0 },
          commas: { default: !0 },
          subData: { default: void 0 },
        },
        data: function () {
          return { countedData: 0 };
        },
        mounted: function () {
          this.animateValue(0, this.data, 600);
        },
        methods: {
          animateValue: function (e, t, o) {
            var a = this,
              s = null,
              i = function i(r) {
                s || (s = r);
                var n = Math.min((r - s) / o, 1);
                (a.countedData = Math.floor(n * (t - e) + e)),
                  n < 1 && window.requestAnimationFrame(i);
              };
            window.requestAnimationFrame(i);
          },
        },
      },
      xe = je,
      Ve = (o("1ca9"), o("b0af")),
      ke = o("99d9"),
      Ie = Object(T["a"])(xe, ge, _e, !1, null, null, null),
      Ee = Ie.exports;
    M()(Ie, {
      VCard: Ve["a"],
      VCardActions: ke["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
    });
    var Be = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          {
            attrs: { height: "10.75rem", elevation: "10" },
            on: { click: e.switchMode },
          },
          [
            "clock" == e.mode
              ? o("v-card-title", [e._v("Clock")])
              : o("v-card-title", [e._v(e._s(e.title))]),
            "clock" == e.mode
              ? o("v-card-subtitle", [e._v("現在時刻")])
              : o("v-card-subtitle", [e._v(e._s(e.subtitle))]),
            o("v-card-text", [
              o("div", { staticClass: "info-area" }, [
                "countUp" == e.mode
                  ? o("div", [
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.days)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("日")]),
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.hours)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("時")]),
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.mins)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("分")]),
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.secs)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("秒")]),
                    ])
                  : e._e(),
                "static" == e.mode
                  ? o("div", {
                      domProps: {
                        innerHTML: e._s(e.epochConverter2Date(e.data)),
                      },
                    })
                  : e._e(),
                "clock" == e.mode
                  ? o("div", [
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.year)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("年")]),
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.month)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("月")]),
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.days)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("日")]),
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.hours)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("時")]),
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.mins)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("分")]),
                      o("span", { staticClass: "hightlight primary--text" }, [
                        e._v(e._s(e.secs)),
                      ]),
                      o("span", { staticClass: "unit" }, [e._v("秒")]),
                    ])
                  : e._e(),
              ]),
            ]),
            o("v-card-actions"),
          ],
          1,
        );
      },
      Oe = [],
      Pe =
        (o("c975"),
        o("fb6a"),
        {
          props: {
            title: { type: String, default: "" },
            subtitles: {
              type: Array,
              default: function () {
                return ["行動已啟動", "行動啟動日期"];
              },
            },
            data: { default: 1610831300 },
            unit: { default: "%" },
            countUp: { default: !0 },
            clickable: { default: !0 },
            modeSelect: { default: "countUp" },
          },
          data: function () {
            return {
              countedData: 0,
              year: 0,
              month: 0,
              days: 0,
              hours: 0,
              mins: 0,
              secs: 0,
              mode: "countUp",
              timeinterval: void 0,
              modes: ["countUp", "static"],
              subtitle: this.subtitles[0],
            };
          },
          beforeMount: function () {
            this.mode = this.modeSelect;
          },
          mounted: function () {
            var e = this;
            "countUp" == this.mode
              ? (this.timeinterval = setInterval(function () {
                  e.epochConverter(e.data);
                }, 1e3))
              : "clock" == this.mode &&
                (this.timeinterval = setInterval(function () {
                  e.clock();
                }, 1e3));
          },
          methods: {
            switchMode: function () {
              if (this.clickable)
                switch (this.modes.indexOf(this.mode)) {
                  case 0:
                    (this.mode = this.modes[1]),
                      (this.subtitle = this.subtitles[1]);
                    break;
                  case 1:
                    (this.mode = this.modes[0]),
                      (this.subtitle = this.subtitles[0]);
                    break;
                  default:
                    break;
                }
            },
            epochConverter2Date: function (e) {
              var t = new Date(0);
              t.setUTCSeconds(e);
              var o = t.getFullYear(),
                a = ("0" + t.getMonth() + 1).slice(-2),
                s = ("0" + t.getDate()).slice(-2),
                i = ("0" + t.getHours()).slice(-2),
                r = ("0" + t.getMinutes()).slice(-2);
              return '\n        <span class="hightlight-small primary--text">'
                .concat(
                  o,
                  '</span><span class="unit-small">年</span>\n        <span class="hightlight-small primary--text">',
                )
                .concat(
                  a,
                  '</span><span class="unit-small">月</span>\n        <span class="hightlight-small primary--text">',
                )
                .concat(
                  s,
                  '</span><span class="unit-small">日</span>\n        <span class="hightlight-small primary--text">',
                )
                .concat(
                  i,
                  '</span><span class="unit-small">時</span>\n        <span class="hightlight-small primary--text">',
                )
                .concat(r, '</span><span class="unit-small">分</span>\n      ');
            },
            clock: function () {
              var e = new Date();
              (this.year = e.getFullYear()),
                (this.month = ("0" + e.getMonth() + 1).slice(-2)),
                (this.days = ("0" + e.getDate()).slice(-2)),
                (this.hours = ("0" + e.getHours()).slice(-2)),
                (this.mins = ("0" + e.getMinutes()).slice(-2)),
                (this.secs = ("0" + e.getSeconds()).slice(-2));
            },
            epochConverter: function (e) {
              var t = new Date(0);
              t.setUTCSeconds(e);
              var o = Math.round(Date.now() / 1e3),
                a = parseInt(o) - parseInt(e),
                s = 86400,
                i = 3600;
              (this.days = Math.floor((a / s) * 1)),
                (this.hours = Math.floor(((a % s) / i) * 1)),
                (this.mins = Math.floor((((a % s) % i) / 60) * 1)),
                (this.secs = Math.floor(((a % s) % i) % 60));
            },
            animateValue: function (e, t, o) {
              var a = this,
                s = null,
                i = function i(r) {
                  s || (s = r);
                  var n = Math.min((r - s) / o, 1);
                  (a.countedData = Math.floor(n * (t - e) + e)),
                    n < 1 && window.requestAnimationFrame(i);
                };
              window.requestAnimationFrame(i);
            },
          },
        }),
      Le = Pe,
      Ue = (o("251a"), Object(T["a"])(Le, Be, Oe, !1, null, null, null)),
      Fe = Ue.exports;
    M()(Ue, {
      VCard: Ve["a"],
      VCardActions: ke["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
    });
    var Ge = {
        components: { numPad: Ee, datePad: Fe },
        data: function () {
          return { DEFCON: 4, Progress: 30 };
        },
      },
      We = Ge,
      He = o("62ad"),
      Ke = o("0fd9"),
      ze = Object(T["a"])(We, be, Re, !1, null, null, null),
      $e = ze.exports;
    M()(ze, {
      VCard: Ve["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCol: He["a"],
      VRow: Ke["a"],
    });
    var Ze = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return e.ready
          ? o(
              "v-card",
              [
                e.ready
                  ? e._e()
                  : o(
                      "v-overlay",
                      [
                        o("v-progress-circular", {
                          attrs: { indeterminate: "", color: "primary" },
                        }),
                      ],
                      1,
                    ),
                o("v-card-subtitle", [e._v(" WORLD STATISTICS ")]),
                o(
                  "v-card-text",
                  [
                    o(
                      "v-row",
                      [
                        o(
                          "v-col",
                          [
                            o("toggleNumPad", {
                              attrs: {
                                data: e.TaiwanConfirmed,
                                title: "Taiwan Confirmed",
                                subtitle: "臺灣確診案例",
                                subData: {
                                  commas: !0,
                                  data: e.TaiwanConfirmedUpdate,
                                  unit: "Cases(new)",
                                },
                                unit: "Cases",
                              },
                            }),
                          ],
                          1,
                        ),
                        o(
                          "v-col",
                          [
                            o("numPad", {
                              attrs: {
                                data: e.TaiwanRecovered,
                                title: "Taiwan Recovered",
                                subtitle: "臺灣復原案例",
                                unit: "Cases",
                              },
                            }),
                          ],
                          1,
                        ),
                        o(
                          "v-col",
                          [
                            o("toggleNumPad", {
                              attrs: {
                                data: e.TaiwanDeaths,
                                title: "Taiwan Deaths",
                                subtitle: "台灣死亡案例",
                                subData: {
                                  commas: !0,
                                  data: e.TaiwanDeathsUpdate,
                                  unit: "Cases(new)",
                                },
                                unit: "Cases",
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                    o(
                      "v-row",
                      [
                        o(
                          "v-col",
                          [
                            o("toggleNumPad", {
                              attrs: {
                                data: e.WorldConfirmed,
                                title: "World Confirmed",
                                subtitle: "全球確診案例",
                                subData: {
                                  commas: !0,
                                  data: e.WorldConfirmedUpdate,
                                  unit: "Cases(new)",
                                },
                                unit: "Cases",
                              },
                            }),
                          ],
                          1,
                        ),
                        o(
                          "v-col",
                          [
                            o("numPad", {
                              attrs: {
                                data: e.WorldRecovered,
                                title: "World Recovered",
                                subtitle: "全球復原案例",
                                unit: "Cases",
                              },
                            }),
                          ],
                          1,
                        ),
                        o(
                          "v-col",
                          [
                            o("toggleNumPad", {
                              attrs: {
                                data: e.WorldDeaths,
                                title: "World Deaths",
                                subtitle: "全球死亡案例",
                                subData: {
                                  commas: !0,
                                  data: e.WorldDeathsUpdate,
                                  unit: "Cases(new)",
                                },
                                unit: "Cases",
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                    o(
                      "v-row",
                      [
                        o(
                          "v-col",
                          [
                            o("datePadStatic", {
                              attrs: {
                                title: "Last update",
                                subtitle: "資料更新時間",
                                data: e.lastUpdate,
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            )
          : e._e();
      },
      Ye = [],
      qe = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          {
            attrs: { height: "10.75rem", elevation: "10" },
            on: { click: e.toggle },
          },
          [
            o("v-card-title", [e._v(e._s(e.title))]),
            o("v-card-subtitle", [e._v(e._s(e.subtitle))]),
            o("v-card-text", [
              e.page
                ? o("div", { staticClass: "info-area" }, [
                    o("span", { staticClass: "hightlight" }, [
                      e.countUp
                        ? o("span", { staticClass: "primary--text" }, [
                            e._v(
                              e._s(
                                e.commas
                                  ? e.countedData.toLocaleString()
                                  : e.countedData,
                              ),
                            ),
                          ])
                        : o(
                            "span",
                            {
                              staticClass: "primary--text",
                              attrs: { id: "count" },
                            },
                            [
                              e._v(
                                e._s(
                                  e.commas ? e.data.toLocaleString() : e.data,
                                ),
                              ),
                            ],
                          ),
                    ]),
                    o("span", { staticClass: "unit" }, [e._v(e._s(e.unit))]),
                  ])
                : e._e(),
              e.page
                ? e._e()
                : o("div", { staticClass: "info-area" }, [
                    o("span", { staticClass: "hightlight" }, [
                      o(
                        "span",
                        {
                          staticClass: "primary--text",
                          attrs: { id: "count" },
                        },
                        [
                          e._v(
                            e._s(
                              0 != e.subData.commas
                                ? e.subData.data.toLocaleString()
                                : e.subData.data,
                            ),
                          ),
                        ],
                      ),
                    ]),
                    o("span", { staticClass: "unit" }, [
                      e._v(e._s(e.subData.unit)),
                    ]),
                  ]),
            ]),
            o("v-card-actions"),
          ],
          1,
        );
      },
      Je = [],
      Qe = {
        props: {
          title: { type: String, default: "title" },
          subtitle: { type: String, default: "&ensp;" },
          data: { default: 100 },
          unit: { default: "%" },
          countUp: { default: !0 },
          commas: { default: !0 },
          subData: { default: void 0 },
        },
        data: function () {
          return { countedData: 0, page: !0 };
        },
        mounted: function () {
          this.animateValue(0, this.data, 600);
        },
        methods: {
          toggle: function () {
            this.page = !this.page;
          },
          animateValue: function (e, t, o) {
            var a = this,
              s = null,
              i = function i(r) {
                s || (s = r);
                var n = Math.min((r - s) / o, 1);
                (a.countedData = Math.floor(n * (t - e) + e)),
                  n < 1 && window.requestAnimationFrame(i);
              };
            window.requestAnimationFrame(i);
          },
        },
      },
      Xe = Qe,
      et = (o("5646"), Object(T["a"])(Xe, qe, Je, !1, null, null, null)),
      tt = et.exports;
    M()(et, {
      VCard: Ve["a"],
      VCardActions: ke["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
    });
    var ot = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          { attrs: { height: "10.75rem", elevation: "10" } },
          [
            o("v-card-title", [e._v(e._s(e.title))]),
            o("v-card-subtitle", [e._v(e._s(e.subtitle))]),
            o("v-card-text", [
              o("div", { staticClass: "info-area" }, [
                o("span", { staticClass: "hightlight primary--text" }, [
                  e._v(e._s(e.year)),
                ]),
                o("span", { staticClass: "unit" }, [e._v("年")]),
                o("span", { staticClass: "hightlight primary--text" }, [
                  e._v(e._s(e.month)),
                ]),
                o("span", { staticClass: "unit" }, [e._v("月")]),
                o("span", { staticClass: "hightlight primary--text" }, [
                  e._v(e._s(e.days)),
                ]),
                o("span", { staticClass: "unit" }, [e._v("日")]),
                o("span", { staticClass: "hightlight primary--text" }, [
                  e._v(e._s(e.hours)),
                ]),
                o("span", { staticClass: "unit" }, [e._v("時")]),
                o("span", { staticClass: "hightlight primary--text" }, [
                  e._v(e._s(e.mins)),
                ]),
                o("span", { staticClass: "unit" }, [e._v("分")]),
                o("span", { staticClass: "hightlight primary--text" }, [
                  e._v(e._s(e.secs)),
                ]),
                o("span", { staticClass: "unit" }, [e._v("秒")]),
              ]),
            ]),
            o("v-card-actions"),
          ],
          1,
        );
      },
      at = [],
      st = {
        props: {
          title: { type: String, default: "Title" },
          subtitle: { type: String, default: "date card" },
          data: { default: 1610831300 },
          unit: { default: "%" },
          countUp: { default: !0 },
          clickable: { default: !0 },
          modeSelect: { default: "countUp" },
        },
        data: function () {
          return {
            countedData: 0,
            year: 0,
            month: 0,
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
            mode: "countUp",
            timeinterval: void 0,
            modes: ["countUp", "static"],
          };
        },
        mounted: function () {
          this.convert(this.data);
        },
        methods: {
          convert: function (e) {
            console.log(e);
            var t = new Date(0);
            t.setUTCSeconds(e),
              console.log(t),
              (this.year = t.getFullYear()),
              (this.month = ("0" + parseInt(t.getMonth() + 1)).slice(-2)),
              (this.days = ("0" + t.getDate()).slice(-2)),
              (this.hours = ("0" + t.getHours()).slice(-2)),
              (this.mins = ("0" + t.getMinutes()).slice(-2)),
              (this.secs = ("0" + t.getSeconds()).slice(-2));
          },
        },
      },
      it = st,
      rt = (o("8fa0"), Object(T["a"])(it, ot, at, !1, null, null, null)),
      nt = rt.exports;
    M()(rt, {
      VCard: Ve["a"],
      VCardActions: ke["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
    });
    var ct = o("6516"),
      lt = {
        components: { numPad: Ee, datePadStatic: nt, toggleNumPad: tt },
        data: function () {
          return {
            TaiwanConfirmed: 0,
            TaiwanRecovered: 0,
            TaiwanDeaths: 0,
            WorldConfirmed: 0,
            WorldRecovered: 0,
            WorldDeaths: 0,
            TaiwanConfirmedUpdate: 0,
            TaiwanRecoveredUpdate: 0,
            TaiwanDeathsUpdate: 0,
            WorldConfirmedUpdate: 0,
            WorldRecoveredUpdate: 0,
            WorldDeathsUpdate: 0,
            ready: !1,
            lastUpdate: 0,
          };
        },
        created: function () {
          var e = this;
          return Object(Ne["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), e.fetchData();
                    case 2:
                      return (t.next = 4), e.fetchData();
                    case 4:
                      e.ready = !0;
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          )();
        },
        methods: {
          fetchData: function () {
            var e = this;
            return Object(Ne["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (e.TaiwanConfirmed = ct.data.TWN.Confirmed),
                          (e.TaiwanRecovered = ct.data.TWN.Recovered),
                          (e.TaiwanDeaths = ct.data.TWN.Deaths),
                          (e.WorldConfirmed = ct.data.Total.Confirmed),
                          (e.WorldRecovered = ct.data.Total.Recovered),
                          (e.WorldDeaths = ct.data.Total.Deaths),
                          (e.TaiwanConfirmedUpdate = "-"),
                          (e.TaiwanDeathsUpdate = "-"),
                          (e.WorldConfirmedUpdate = "-"),
                          (e.WorldDeathsUpdate = "-"),
                          (e.lastUpdate = parseInt(ct.report.timeStampEpoch));
                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )();
          },
        },
      },
      dt = lt,
      Ct = o("a797"),
      pt = o("490a"),
      ut = Object(T["a"])(dt, Ze, Ye, !1, null, null, null),
      ht = ut.exports;
    M()(ut, {
      VCard: Ve["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCol: He["a"],
      VOverlay: Ct["a"],
      VProgressCircular: pt["a"],
      VRow: Ke["a"],
    });
    var vt = {
        components: { operationCard: $e, overView: ht },
        created: function () {
          this.transition();
        },
        data: function () {
          return { auth: !1 };
        },
        methods: {
          transition: function () {
            var e = document.querySelectorAll(".v-card");
            e.forEach(function (e, t) {
              var o = e.getAttribute("style"),
                a = 0.2 * t;
              e.setAttribute(
                "style",
                "".concat(o, " transition-delay: ").concat(a, "s;"),
              );
              var s = e.getAttribute("class");
              e.setAttribute("class", "".concat(s, " t"));
            });
          },
        },
      },
      ft = vt,
      mt = (o("ad37"), o("a523")),
      Dt = Object(T["a"])(ft, Ae, Se, !1, null, null, null),
      yt = Dt.exports;
    M()(Dt, {
      VCard: Ve["a"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VContainer: mt["a"],
    });
    var wt = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-container",
          { attrs: { fluid: "", "max-width": "90%" } },
          [
            o(
              "v-card",
              { attrs: { height: "90vh" } },
              [
                o("v-card-title", { attrs: { "primary-title": "" } }, [
                  e._v("The Map"),
                ]),
                o(
                  "v-card-text",
                  [
                    o(
                      "v-tabs",
                      [
                        o("v-tab", [e._v("WORLD")]),
                        o("v-tab-item", [o("mapItself")], 1),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      Tt = [],
      Nt = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          { attrs: { "elevation-10": "" } },
          [
            o(
              "v-overlay",
              {
                model: {
                  value: e.ready,
                  callback: function (t) {
                    e.ready = t;
                  },
                  expression: "ready",
                },
              },
              [
                o("v-progress-circular", {
                  attrs: { indeterminate: "", color: "primary" },
                }),
              ],
              1,
            ),
            o("div", {
              staticStyle: {
                position: "relative",
                width: "100%",
                height: "75vh",
                overflow: "scroll",
              },
              attrs: { id: "map" },
            }),
            o("div", { staticClass: "caption disabled text--disabled" }, [
              e._v("last update: " + e._s(e.lastUpdate)),
            ]),
          ],
          1,
        );
      },
      Mt = [],
      At =
        (o("cb29"),
        o("d81d"),
        o("b0c0"),
        o("b680"),
        o("25f0"),
        o("3fe2"),
        o("ae69")),
      St = {
        data: function () {
          return { map: void 0, ready: !0, lastUpdate: 0 };
        },
        mounted: function () {
          this.fetchData();
        },
        methods: {
          epoch2string: function (e) {
            var t = new Date(0);
            t.setUTCSeconds(e);
            var o = t.getFullYear(),
              a = ("0" + t.getMonth() + 1).slice(-2),
              s = ("0" + t.getDate()).slice(-2),
              i = ("0" + t.getHours()).slice(-2),
              r = ("0" + t.getMinutes()).slice(-2),
              n = ("0" + t.getSeconds()).slice(-2);
            return ""
              .concat(a, "/")
              .concat(s, "/")
              .concat(o, " ")
              .concat(i, ":")
              .concat(r, ":")
              .concat(n);
          },
          fetchData: function () {
            var e = this;
            return Object(Ne["a"])(
              regeneratorRuntime.mark(function t() {
                var o;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.cleanData(ct.data);
                      case 2:
                        (o = t.sent),
                          e.renderMap(o),
                          e.updateColorFill(o),
                          (e.lastUpdate = e.epoch2string(
                            parseInt(ct.report.timeStampEpoch),
                          ));
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              }),
            )();
          },
          updateColorFill: function (e) {
            var t = {};
            for (var o in e) "Total" != o && (t[o] = e[o].fill);
            this.map.updateChoropleth(t);
          },
          reMapInt: function (e, t, o, a, s) {
            return parseInt(((s - t) * (o - a)) / (e - t) + a);
          },
          cleanData: function (e) {
            for (var t in e)
              if ("Total" != t) {
                var o = e[t];
                (o.Drate = ((o.Deaths / o.Confirmed) * 100).toFixed(3)),
                  (o.Crate = (
                    (o.Confirmed / e["Total"].Confirmed) *
                    100
                  ).toFixed(3)),
                  (o.CP = ((o.Confirmed / o.population) * 100).toFixed(5));
                var a = (
                  "0" +
                  this.reMapInt(
                    e["Total"].Confirmed / 3,
                    0,
                    255,
                    24,
                    o.Confirmed,
                  ).toString(16)
                ).slice(-2);
                o.fill = "#" + a + "0000";
              }
            return e;
          },
          renderMap: function (e) {
            (this.map = new At({
              element: document.getElementById("map"),
              data: e,
              geographyConfig: {
                highlightBorderColor: "#fff",
                highlightFillColor: "#a55",
                borderWidth: 0.5,
                popupTemplate: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0,
                    o =
                      '<div class="infoWindow" style="font-size: 120%;"><b>' +
                      e.properties.name +
                      "</b>";
                  return (
                    void 0 != t
                      ? ((o +=
                          "<li>Population(Approximately): " + t.population),
                        (o += "<li>Confirmed: " + t.Confirmed),
                        t.Crate > 0
                          ? ((o +=
                              "<li>Recovered: " +
                              t.Recovered +
                              " (" +
                              (
                                (parseInt(t.Recovered) /
                                  parseInt(t.Confirmed)) *
                                100
                              ).toFixed(3) +
                              "%)"),
                            (o += "<li>Confirmed / Population: " + t.CP + "%"),
                            (o +=
                              "<li>Confirmed / World Confirmed: " +
                              t.Crate +
                              "%"),
                            (o +=
                              "<li>Deaths: " +
                              t.Deaths +
                              " (" +
                              t.Drate +
                              "%)"))
                          : (o += "<li>Confirmed / Total: < 0.000%"))
                      : (o += "<li>Confirmed: 0"),
                    o + "</div>"
                  );
                },
                highlightBorderWidth: 0.5,
              },
              fills: { defaultFill: "#555", darkZone: "#f00" },
            })),
              (this.ready = !this.ready);
          },
        },
      },
      bt = St,
      Rt = (o("73fd"), Object(T["a"])(bt, Nt, Mt, !1, null, null, null)),
      gt = Rt.exports;
    M()(Rt, { VCard: Ve["a"], VOverlay: Ct["a"], VProgressCircular: pt["a"] });
    var _t = { components: { mapItself: gt }, mounted: function () {} },
      jt = _t,
      xt = o("71a3"),
      Vt = o("c671"),
      kt = o("fe57"),
      It = Object(T["a"])(jt, wt, Tt, !1, null, null, null),
      Et = It.exports;
    M()(It, {
      VCard: Ve["a"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VContainer: mt["a"],
      VTab: xt["a"],
      VTabItem: Vt["a"],
      VTabs: kt["a"],
    });
    var Bt = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-container",
          { attrs: { fluid: "", "max-width": "90%" } },
          [
            o(
              "v-card",
              [
                o("v-card-title", { attrs: { "primary-title": "" } }, [
                  e._v(" DATABASE "),
                ]),
                o(
                  "v-card-text",
                  [
                    o(
                      "v-row",
                      e._l(e.files, function (e, t) {
                        return o(
                          "div",
                          { key: t },
                          [o("fileCard", { attrs: { file: e } })],
                          1,
                        );
                      }),
                      0,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      Ot = [],
      Pt = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          {
            staticClass: "fill-height",
            attrs: { height: "15rem", width: "15rem", elevation: "10" },
          },
          [
            o(
              "v-card-text",
              { staticStyle: { height: "70%" } },
              [o("fileIcon", { attrs: { file: e.file } })],
              1,
            ),
            o(
              "v-card-actions",
              { staticClass: "card-actions" },
              [
                e.file.fileName
                  ? o("v-card-title", { staticClass: "justify-center" }, [
                      e._v(e._s(e.file.fileName)),
                    ])
                  : o(
                      "v-card-title",
                      {
                        staticClass: "justify-center",
                        staticStyle: { color: "#777" },
                      },
                      [e._v("[FILE NOT EXIST]")],
                    ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      Lt = [],
      Ut = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-container",
          { staticClass: "fill-height", attrs: { fluid: "" } },
          [
            o(
              "v-row",
              { attrs: { align: "center", justify: "center" } },
              [
                o(
                  "v-col",
                  { attrs: { cols: "12", align: "center" } },
                  [
                    o(
                      "v-chip",
                      {
                        attrs: {
                          label: "",
                          outlined: "",
                          color: e.ICONS[e.fileStatus].color,
                        },
                      },
                      [
                        o("v-icon", { staticClass: "mr-2 ml-2" }, [
                          e._v(e._s(e.ICONS[e.fileStatus].icon)),
                        ]),
                        e._v(" " + e._s(e.fileStatus) + " "),
                        o("v-icon", { staticClass: "mr-2 ml-2" }, [
                          e._v(e._s(e.ICONS[e.fileStatus].icon)),
                        ]),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      Ft = [],
      Gt = {
        props: {
          status: { type: String, default: void 0 },
          file: {
            type: Object,
            default: function () {
              return {
                fileName: "[REDACTED]",
                status: "REDACTED",
                photo: void 0,
                icon: void 0,
              };
            },
          },
        },
        data: function () {
          return {
            ICONS: {
              REDACTED: { icon: "mdi-close", color: "red" },
              CLASSIFIED: { icon: "mdi-alert-outline", color: "yellow" },
              NOIMAGE: { icon: "mdi-image-off-outline", color: "green" },
              VIEW: { icon: "mdi-lock-open-outline", color: "green" },
            },
          };
        },
        computed: {
          fileStatus: function () {
            return this.file.status ? this.file.status : "CLASSIFIED";
          },
        },
        mounted: function () {
          if (!this.file.photo) return "none";
        },
        methods: {},
      },
      Wt = Gt,
      Ht = (o("8c26"), o("cc20")),
      Kt = Object(T["a"])(Wt, Ut, Ft, !1, null, null, null),
      zt = Kt.exports;
    M()(Kt, {
      VChip: Ht["a"],
      VCol: He["a"],
      VContainer: mt["a"],
      VIcon: V["a"],
      VRow: Ke["a"],
    });
    var $t = {
        components: { fileIcon: zt },
        props: {
          file: {
            type: Object,
            default: function () {
              return {
                fileName: void 0,
                status: "REDACTED",
                photo: void 0,
                icon: void 0,
              };
            },
          },
        },
        data: function () {
          return {};
        },
        computed: {},
        mounted: function () {},
        methods: {},
      },
      Zt = $t,
      Yt = (o("c9a2"), Object(T["a"])(Zt, Pt, Lt, !1, null, null, null)),
      qt = Yt.exports;
    M()(Yt, {
      VCard: Ve["a"],
      VCardActions: ke["a"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
    });
    var Jt = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          { attrs: { height: "10.75rem", elevation: "10" } },
          [
            o("v-card-title", [e._v(e._s(e.title))]),
            o("v-card-subtitle", [e._v(e._s(e.subtitle))]),
            o("v-card-text", [
              o("div", { staticClass: "info-area" }, [
                o("span", { staticClass: "hightlight" }, [
                  e.countUp
                    ? o("span", { staticClass: "primary--text" }, [
                        e._v(e._s(e.countedData)),
                      ])
                    : o(
                        "span",
                        {
                          staticClass: "primary--text",
                          attrs: { id: "count" },
                        },
                        [e._v(e._s(e.data))],
                      ),
                ]),
                o("span", { staticClass: "unit" }, [e._v(e._s(e.unit))]),
              ]),
            ]),
            o("v-card-actions"),
          ],
          1,
        );
      },
      Qt = [],
      Xt = {
        props: {
          title: { type: String, default: "title" },
          subtitle: { type: String, default: "&ensp;" },
          data: { default: 100 },
          unit: { default: "%" },
          countUp: { default: !0 },
        },
        data: function () {
          return { countedData: 0 };
        },
        mounted: function () {
          this.animateValue(0, this.data, 600);
        },
        methods: {
          animateValue: function (e, t, o) {
            var a = this,
              s = null,
              i = function i(r) {
                s || (s = r);
                var n = Math.min((r - s) / o, 1);
                (a.countedData = Math.floor(n * (t - e) + e)),
                  n < 1 && window.requestAnimationFrame(i);
              };
            window.requestAnimationFrame(i);
          },
        },
      },
      eo = Xt,
      to = (o("aa54"), Object(T["a"])(eo, Jt, Qt, !1, null, null, null)),
      oo = to.exports;
    M()(to, {
      VCard: Ve["a"],
      VCardActions: ke["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
    });
    var ao = {
        components: { numPad: Ee, datePad: Fe, fileCard: qt, filePreview: oo },
        data: function () {
          return {
            files: [
              {
                fileName: "briefing",
                status: "VIEW",
                photo: void 0,
                icon: void 0,
              },
              {},
            ],
          };
        },
      },
      so = ao,
      io = Object(T["a"])(so, Bt, Ot, !1, null, null, null),
      ro = io.exports;
    M()(io, {
      VCard: Ve["a"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VContainer: mt["a"],
      VRow: Ke["a"],
    });
    var no = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-container",
          { staticClass: "fill-height", attrs: { fluid: "" } },
          [
            o(
              "v-row",
              {
                staticClass: "z1",
                attrs: { align: "center", justify: "center" },
              },
              [
                o(
                  "v-col",
                  { attrs: { cols: "10", sm: "6", md: "3" } },
                  [
                    o(
                      "v-expand-transition",
                      [
                        e.loginInProgress
                          ? e._e()
                          : o(
                              "v-card",
                              {
                                staticClass: "py-9 px-2 floating-window",
                                attrs: { "elevation-20": "" },
                              },
                              [
                                o(
                                  "v-card-title",
                                  { attrs: { "primary-title": "" } },
                                  [e._v("Covid Vis")],
                                ),
                                o("v-card-subtitle", [e._v("The Portal")]),
                                o(
                                  "v-card-text",
                                  [
                                    o(
                                      "v-form",
                                      {
                                        ref: "form",
                                        attrs: { "lazy-validation": "" },
                                      },
                                      [
                                        o("v-text-field", {
                                          attrs: {
                                            label: "ID",
                                            rules: [
                                              function (e) {
                                                return (
                                                  !!e ||
                                                  "Access ID is required."
                                                );
                                              },
                                            ],
                                          },
                                          model: {
                                            value: e.account,
                                            callback: function (t) {
                                              e.account = t;
                                            },
                                            expression: "account",
                                          },
                                        }),
                                        o("v-text-field", {
                                          attrs: {
                                            label: "Passphrase",
                                            rules: [
                                              function (e) {
                                                return (
                                                  !!e ||
                                                  "Passphrase is required."
                                                );
                                              },
                                            ],
                                            type: e.showPass
                                              ? "text"
                                              : "password",
                                            "append-icon": e.showPass
                                              ? "mdi-eye-off"
                                              : "mdi-eye",
                                          },
                                          on: {
                                            "click:append": function (t) {
                                              e.showPass = !e.showPass;
                                            },
                                          },
                                          model: {
                                            value: e.pass,
                                            callback: function (t) {
                                              e.pass = t;
                                            },
                                            expression: "pass",
                                          },
                                        }),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                                o(
                                  "v-card-actions",
                                  [
                                    o("v-spacer"),
                                    o(
                                      "v-btn",
                                      {
                                        attrs: {
                                          outlined: "",
                                          color: "success",
                                        },
                                        on: { click: e.login },
                                      },
                                      [e._v("Login")],
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            ),
                      ],
                      1,
                    ),
                    e.loginInProgress
                      ? o(
                          "v-card",
                          {
                            staticClass: "py-9 px-2 floating-window",
                            attrs: { "elevation-20": "" },
                          },
                          [
                            o(
                              "v-card-text",
                              { attrs: { align: "center", justify: "center" } },
                              [
                                o("v-progress-circular", {
                                  attrs: {
                                    size: "100",
                                    width: "5",
                                    indeterminate: "",
                                    color: "primary",
                                  },
                                }),
                              ],
                              1,
                            ),
                          ],
                          1,
                        )
                      : e._e(),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      co = [],
      lo = {
        data: function () {
          return { showPass: !1, account: "", pass: "", loginInProgress: !1 };
        },
        methods: {
          login: function () {
            this.$refs.form.validate() && (this.loginInProgress = !0);
          },
        },
        mounted: function () {
          this.$refs["bg-video"].play();
        },
      },
      Co = lo,
      po = (o("db77"), o("4bd4")),
      uo = o("8654"),
      ho = Object(T["a"])(Co, no, co, !1, null, "0bfebe1d", null),
      vo = ho.exports;
    M()(ho, {
      VBtn: L["a"],
      VCard: Ve["a"],
      VCardActions: ke["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VCol: He["a"],
      VContainer: mt["a"],
      VExpandTransition: fe["a"],
      VForm: po["a"],
      VProgressCircular: pt["a"],
      VRow: Ke["a"],
      VSpacer: J["a"],
      VTextField: uo["a"],
    });
    var fo = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-container",
          { attrs: { fluid: "", "max-width": "90%" } },
          [
            a(
              "v-card",
              [
                a("v-card-title", { attrs: { "primary-title": "" } }, [
                  e._v(" OPERATION STATISTICS "),
                ]),
                a(
                  "v-card-text",
                  [
                    a(
                      "v-row",
                      [
                        a(
                          "v-col",
                          [
                            a("datePad", {
                              attrs: {
                                title: "System initialized for",
                                subtitles: ["系統已啟動", "系統啟動自"],
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                    a(
                      "v-row",
                      [
                        a(
                          "v-col",
                          [
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  [
                                    a(
                                      "v-card",
                                      { attrs: { "elevation-10": "" } },
                                      [
                                        a(
                                          "v-card-title",
                                          { attrs: { "primary-title": "" } },
                                          [e._v(" 關於 ")],
                                        ),
                                        a(
                                          "v-card-text",
                                          [
                                            a("h2", [e._v("關於這個專案")]),
                                            a("v-divider", {
                                              staticClass: "my-2",
                                            }),
                                            a("p", [
                                              e._v(
                                                " 原來是 https://xtl.tw/covid-map（不用想了連結不存在。）",
                                              ),
                                              a("br"),
                                              e._v(
                                                " 後來 GCP到期不想花錢，而且也沒人看，還不如架在自己的PC上面。 ",
                                              ),
                                            ]),
                                            a("p", [
                                              e._v(
                                                " 這個版本起始於 2021年 01月 17日 的半夜，喝了一些酒不知道要幹嘛就開始寫了 ",
                                              ),
                                            ]),
                                            a("p", [
                                              e._v(
                                                " 與舊版不同之處在於除了地圖之外",
                                              ),
                                              a("br"),
                                              e._v(
                                                " 新增了一個 Dashboard、還有很酷的介面",
                                              ),
                                              a("br"),
                                              e._v(
                                                " 跟一堆過了半年多還沒完成的 feature ",
                                              ),
                                            ]),
                                          ],
                                          1,
                                        ),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                                a(
                                  "v-col",
                                  [
                                    a(
                                      "v-card",
                                      [
                                        a(
                                          "v-card-title",
                                          { attrs: { "primary-title": "" } },
                                          [e._v(" 草 ")],
                                        ),
                                        a(
                                          "v-card-text",
                                          [
                                            a(
                                              "v-row",
                                              [
                                                a(
                                                  "v-col",
                                                  [
                                                    a(
                                                      "v-list",
                                                      [
                                                        a(
                                                          "v-list-item",
                                                          {
                                                            staticStyle: {
                                                              color:
                                                                "#aaa !important",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              " 安安我是草 ",
                                                            ),
                                                          ],
                                                        ),
                                                        a(
                                                          "v-list-item",
                                                          {
                                                            staticStyle: {
                                                              color:
                                                                "#aaa !important",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: "https://xtl.tw",
                                                                  target:
                                                                    "_blank",
                                                                },
                                                              },
                                                              [
                                                                e._v(
                                                                  "https://xtl.tw/",
                                                                ),
                                                              ],
                                                            ),
                                                          ],
                                                        ),
                                                        a(
                                                          "v-list-item",
                                                          {
                                                            staticStyle: {
                                                              color:
                                                                "#aaa !important",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              " 性別：[REDACTED] ",
                                                            ),
                                                          ],
                                                        ),
                                                        a(
                                                          "v-list-item",
                                                          {
                                                            staticStyle: {
                                                              color:
                                                                "#aaa !important",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              " 年齡：[REDACTED] ",
                                                            ),
                                                          ],
                                                        ),
                                                        a(
                                                          "v-list-item",
                                                          {
                                                            staticStyle: {
                                                              color:
                                                                "#aaa !important",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              " 專長：[REDACTED] ",
                                                            ),
                                                          ],
                                                        ),
                                                        a(
                                                          "v-list-item",
                                                          {
                                                            staticStyle: {
                                                              color:
                                                                "#aaa !important",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              " 關於：[REDACTED] ",
                                                            ),
                                                          ],
                                                        ),
                                                      ],
                                                      1,
                                                    ),
                                                  ],
                                                  1,
                                                ),
                                                a(
                                                  "v-col",
                                                  { attrs: { cols: "5" } },
                                                  [
                                                    a("v-img", {
                                                      attrs: {
                                                        src: o("54c7"),
                                                        contain: "",
                                                        "max-height": "50vh",
                                                      },
                                                    }),
                                                  ],
                                                  1,
                                                ),
                                              ],
                                              1,
                                            ),
                                          ],
                                          1,
                                        ),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      mo = [],
      Do = { components: { datePad: Fe } },
      yo = Do,
      wo = o("ce7e"),
      To = o("adda"),
      No = Object(T["a"])(yo, fo, mo, !1, null, null, null),
      Mo = No.exports;
    M()(No, {
      VCard: Ve["a"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VCol: He["a"],
      VContainer: mt["a"],
      VDivider: wo["a"],
      VImg: To["a"],
      VList: k["a"],
      VListItem: A["a"],
      VRow: Ke["a"],
    });
    var Ao = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-container",
          { attrs: { fluid: "", "max-width": "90%" } },
          [
            o(
              "v-dialog",
              {
                attrs: {
                  scrollable: "",
                  persistent: "",
                  overlay: !0,
                  "max-width": "500px",
                },
                model: {
                  value: e.showDialog,
                  callback: function (t) {
                    e.showDialog = t;
                  },
                  expression: "showDialog",
                },
              },
              [
                o(
                  "v-card",
                  [
                    o("v-card-title"),
                    o(
                      "v-card-text",
                      [
                        o(
                          "v-alert",
                          {
                            attrs: {
                              border: "left",
                              type: "warning",
                              outlined: "",
                            },
                          },
                          [
                            e._v(
                              " Since this site is now static, and the historic data was depend on an API :(, I am now working on restoring the historical data page ",
                            ),
                          ],
                        ),
                      ],
                      1,
                    ),
                    o(
                      "v-card-actions",
                      [
                        o("v-spacer"),
                        o(
                          "v-btn",
                          {
                            attrs: { outlined: "" },
                            on: {
                              click: function (t) {
                                e.showDialog = !1;
                              },
                            },
                          },
                          [e._v("OK")],
                        ),
                        o("v-spacer"),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
            o(
              "v-card",
              [
                o("v-card-title", { attrs: { "primary-title": "" } }, [
                  e._v(" HISTORICAL DATA "),
                ]),
                o("v-card-subtitle", [e._v(" 歷史資訊 ")]),
                o(
                  "v-card-text",
                  { staticClass: "mt-4" },
                  [
                    o(
                      "v-row",
                      [
                        o(
                          "v-col",
                          { attrs: { cols: "3" } },
                          [
                            o("v-select", {
                              attrs: {
                                label: "Country | 國家",
                                items: e.countries,
                                "prepend-icon": "mdi-map-marker-outline",
                                "item-value": "value",
                                "item-text": "name",
                                dense: "",
                              },
                              model: {
                                value: e.country,
                                callback: function (t) {
                                  e.country = t;
                                },
                                expression: "country",
                              },
                            }),
                          ],
                          1,
                        ),
                        o(
                          "v-col",
                          { attrs: { cols: "3" } },
                          [
                            o(
                              "v-menu",
                              {
                                attrs: {
                                  "close-on-content-click": !1,
                                  transition: "scale-transition",
                                  "offset-y": "",
                                },
                                scopedSlots: e._u([
                                  {
                                    key: "activator",
                                    fn: function (t) {
                                      var a = t.on,
                                        s = t.attrs;
                                      return [
                                        o(
                                          "v-text-field",
                                          e._g(
                                            e._b(
                                              {
                                                attrs: {
                                                  label:
                                                    "Start Date | 開始日期",
                                                  "prepend-icon":
                                                    "mdi-calendar-outline",
                                                  dense: "",
                                                  readonly: "",
                                                },
                                                model: {
                                                  value: e.startDate,
                                                  callback: function (t) {
                                                    e.startDate = t;
                                                  },
                                                  expression: "startDate",
                                                },
                                              },
                                              "v-text-field",
                                              s,
                                              !1,
                                            ),
                                            a,
                                          ),
                                        ),
                                      ];
                                    },
                                  },
                                ]),
                                model: {
                                  value: e.startDateMenu,
                                  callback: function (t) {
                                    e.startDateMenu = t;
                                  },
                                  expression: "startDateMenu",
                                },
                              },
                              [
                                o("v-date-picker", {
                                  attrs: { min: "2021-01-20", max: e.today },
                                  on: {
                                    input: function (t) {
                                      e.startDateMenu = !1;
                                    },
                                  },
                                  model: {
                                    value: e.startDate,
                                    callback: function (t) {
                                      e.startDate = t;
                                    },
                                    expression: "startDate",
                                  },
                                }),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                        o(
                          "v-col",
                          { attrs: { cols: "3" } },
                          [
                            o(
                              "v-menu",
                              {
                                attrs: {
                                  "close-on-content-click": !1,
                                  transition: "scale-transition",
                                  "offset-y": "",
                                },
                                scopedSlots: e._u([
                                  {
                                    key: "activator",
                                    fn: function (t) {
                                      var a = t.on,
                                        s = t.attrs;
                                      return [
                                        o(
                                          "v-text-field",
                                          e._g(
                                            e._b(
                                              {
                                                attrs: {
                                                  label: "End Date | 結束日期",
                                                  "prepend-icon":
                                                    "mdi-calendar-outline",
                                                  dense: "",
                                                  readonly: "",
                                                },
                                                model: {
                                                  value: e.endDate,
                                                  callback: function (t) {
                                                    e.endDate = t;
                                                  },
                                                  expression: "endDate",
                                                },
                                              },
                                              "v-text-field",
                                              s,
                                              !1,
                                            ),
                                            a,
                                          ),
                                        ),
                                      ];
                                    },
                                  },
                                ]),
                                model: {
                                  value: e.endDateMenu,
                                  callback: function (t) {
                                    e.endDateMenu = t;
                                  },
                                  expression: "endDateMenu",
                                },
                              },
                              [
                                o("v-date-picker", {
                                  attrs: { min: "2021-01-20", max: e.today },
                                  on: {
                                    input: function (t) {
                                      e.endDateMenu = !1;
                                    },
                                  },
                                  model: {
                                    value: e.endDate,
                                    callback: function (t) {
                                      e.endDate = t;
                                    },
                                    expression: "endDate",
                                  },
                                }),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                    o("LineChartCard", {
                      ref: "chart",
                      attrs: {
                        name: "chart",
                        title: "Trand",
                        subtitle: "趨勢",
                        hasMultipleDatasets: !1,
                        keys: "labels",
                      },
                    }),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      So = [],
      bo = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          { attrs: { elevation: "10" } },
          [
            o("v-card-title", [e._v(e._s(e.title))]),
            o("v-card-subtitle", [e._v(e._s(e.subtitle))]),
            o("v-card-text", [
              o("canvas", { attrs: { height: e.height, id: e.name } }),
              o(
                "div",
                { staticClass: "text-center" },
                [
                  e.hasData
                    ? e._e()
                    : o("v-progress-circular", {
                        staticStyle: { "margin-bottom": "5vh" },
                        attrs: { size: 50, indeterminate: "" },
                      }),
                ],
                1,
              ),
            ]),
          ],
          1,
        );
      },
      Ro = [],
      go = (o("b64b"), o("07ac"), o("ddb0"), o("5530")),
      _o = o("30ef"),
      jo = o.n(_o),
      xo = {
        props: {
          name: { type: String },
          title: { type: String, default: "卡片中文" },
          subtitle: { type: String, default: "Card English" },
          chartType: { type: String, default: void 0 },
          height: { default: "80vh" },
          legend: { type: Boolean, default: !1 },
          hasMultipleDatasets: { type: Boolean, default: !1 },
          keys: { type: String, default: void 0 },
          skips: { default: void 0 },
        },
        data: function () {
          return { chart: void 0, hasData: !1 };
        },
        mounted: function () {},
        methods: {
          _composeData: function (e, t) {
            var o = [];
            if (this.hasMultipleDatasets) {
              for (var a in e)
                if (!(a in this.skips)) {
                  var s = Object.keys(e).indexOf(a),
                    i = {
                      data: e[a],
                      fill: !0,
                      borderColor: t.borderColor[s],
                      borderWidth: 2,
                      borderDashOffset: 0,
                      backgroundColor: t.backgroundColor[s],
                      pointBackgroundColor: t.pointBackgroundColor[s],
                      pointBorderColor: t.pointBorderColor[s],
                      pointHoverBackgroundColor: t.pointHoverBackgroundColor[s],
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                    };
                  o.push(i);
                }
            } else
              o = [
                {
                  data: Object.values(e),
                  fill: !0,
                  borderColor: t.borderColor,
                  borderWidth: 2,
                  borderDashOffset: 0,
                  backgroundColor: t.backgroundColor,
                  pointBackgroundColor: t.pointBackgroundColor,
                  pointBorderColor: t.pointBorderColor,
                  pointHoverBackgroundColor: t.pointHoverBackgroundColor,
                  pointBorderWidth: 20,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 4,
                },
              ];
            return o;
          },
          _getKeys: function (e) {
            return void 0 != this.keys
              ? e[this.keys]
              : this.hasMultipleDatasets
              ? void Object.keys(e[0])
              : Object.keys(e);
          },
          render: function (e, t) {
            (this.hasData = !0),
              (t != {} && void 0 != t) ||
                (t = {
                  borderColor: "#009fff",
                  pointBackgroundColor: "#009fff",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "#009fff",
                });
            var o = this._composeData(e, t),
              a = this._getKeys(e),
              s = document.getElementById(this.name).getContext("2d"),
              i = new jo.a(s, {
                type: this.chartType,
                data: {
                  label: "數量",
                  labels: a,
                  datasets: Object(go["a"])(
                    Object(go["a"])({}, o),
                    {},
                    { pointHitRadius: 1e3 },
                  ),
                },
                options: {
                  responsive: !0,
                  legend: { display: this.legend, position: "bottom" },
                },
              });
            this.chart = i;
          },
        },
      },
      Vo = xo,
      ko = Object(T["a"])(Vo, bo, Ro, !1, null, null, null);
    ko.exports;
    M()(ko, {
      VCard: Ve["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VProgressCircular: pt["a"],
    });
    var Io = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-card",
          { attrs: { elevation: "10" } },
          [
            o("v-card-title", [e._v(e._s(e.title))]),
            o("v-card-subtitle", [e._v(e._s(e.subtitle))]),
            o("v-card-text", [
              o("canvas", { attrs: { height: e.height, id: e.name } }),
              o(
                "div",
                { staticClass: "text-center" },
                [
                  e.hasData
                    ? e._e()
                    : o("v-progress-circular", {
                        staticStyle: { "margin-bottom": "5vh" },
                        attrs: { size: 50, indeterminate: "" },
                      }),
                ],
                1,
              ),
            ]),
          ],
          1,
        );
      },
      Eo = [],
      Bo = {
        props: {
          name: { type: String },
          title: { type: String, default: "卡片中文" },
          subtitle: { type: String, default: "Card English" },
          height: { default: "80vh" },
          legend: { type: Boolean, default: !1 },
          hasMultipleDatasets: { type: Boolean, default: !1 },
          keys: { type: String, default: void 0 },
          config: { type: Object, default: function () {} },
        },
        data: function () {
          return { chart: void 0, hasData: !1 };
        },
        mounted: function () {},
        methods: {
          render: function (e, t) {
            (this.hasData = !0),
              (this.chart = new jo.a(document.getElementById(this.name), t));
          },
          update: function (e) {
            (this.chart.data = e), this.chart.update();
          },
          clear: function () {
            this.hasData = !1;
            var e = document.getElementById(this.name),
              t = e.getContext("2d");
            t.clearRect(0, 0, e.width, e.height), (this.chart = void 0);
          },
        },
      },
      Oo = Bo,
      Po = Object(T["a"])(Oo, Io, Eo, !1, null, null, null),
      Lo = Po.exports;
    M()(Po, {
      VCard: Ve["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VProgressCircular: pt["a"],
    });
    var Uo = {
        components: { LineChartCard: Lo },
        data: function () {
          return {
            showDialog: !0,
            datacollection: null,
            options: { responsive: !0 },
            country: "TWN",
            startDateMenu: !1,
            startDate: "2021-01-20",
            endDateMenu: !1,
            today: "",
            endDate: "",
            countries: [
              { name: "Taiwan | 臺灣", value: "TWN" },
              { name: "Japan | 日本", value: "JPN" },
              { name: "United States | 美國", value: "USA" },
              { name: "Canada | 加拿大", value: "CAN" },
              { name: "Israel | 以色列", value: "ISR" },
              { name: "China | 支那", value: "CHN" },
              { name: "World | 世界", value: "Total" },
            ],
          };
        },
        created: function () {
          this.renderChart(),
            (this.today = new Date().toISOString().slice(0, 10)),
            (this.endDate = this.today);
        },
        watch: {
          country: function () {
            this.renderChart(!0);
          },
          startDate: function (e) {
            this.renderChart(!0);
          },
          endDate: function (e) {
            this.renderChart(!0);
          },
        },
        methods: {
          renderChart: function () {
            var e = arguments,
              t = this;
            return Object(Ne["a"])(
              regeneratorRuntime.mark(function o() {
                var a, s, i, r, n, c, l, d, C, p, u, h;
                return regeneratorRuntime.wrap(function (o) {
                  while (1)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (a = e.length > 0 && void 0 !== e[0] && e[0]),
                          (o.next = 3),
                          t.$axios.get(
                            "http://192.168.100.161:7590/parrot-db/get-daily/".concat(
                              t.country,
                            ),
                          )
                        );
                      case 3:
                        (s = o.sent),
                          (i = s.data),
                          (r = []),
                          (n = []),
                          (c = []),
                          (l = []),
                          [],
                          (d = []),
                          (C = new Date(t.startDate)),
                          (p = new Date(t.endDate)),
                          p.setDate(p.getDate() + 1),
                          i.forEach(function (e) {
                            if (e.data[t.country]) {
                              var o = new Date(e.createdAt);
                              if (o < C || o > p) return;
                              d.push(o.toISOString().slice(0, 10)),
                                n.push(e.data[t.country].Deaths),
                                c.push(e.data[t.country].Recovered),
                                l.push(e.data[t.country]["Serious Critical"]),
                                r.push(e.data[t.country].Confirmed);
                            }
                          }),
                          (u = {
                            labels: d,
                            datasets: [
                              {
                                label: "Confirmed",
                                borderColor: "#F6E064",
                                data: r,
                                pointRadius: 0,
                                pointHitRadius: 1e3,
                              },
                              {
                                label: "Deaths",
                                borderColor: "#F66464",
                                data: n,
                                pointRadius: 0,
                                pointHitRadius: 1e3,
                              },
                              {
                                label: "Recovered",
                                borderColor: "#92C45B",
                                data: c,
                                pointRadius: 0,
                                pointHitRadius: 1e3,
                              },
                              {
                                label: "Serious and Critical",
                                borderColor: "#EC9B62",
                                data: l,
                                pointRadius: 0,
                                pointHitRadius: 1e3,
                              },
                            ],
                          }),
                          (h = { type: "line", data: u, options: {} }),
                          a
                            ? t.$refs.chart.update(u)
                            : t.$refs.chart.render({}, h);
                      case 18:
                      case "end":
                        return o.stop();
                    }
                }, o);
              }),
            )();
          },
        },
      },
      Fo = Uo,
      Go = o("0798"),
      Wo = o("2e4b"),
      Ho = o("169a"),
      Ko = o("b974"),
      zo = Object(T["a"])(Fo, Ao, So, !1, null, null, null),
      $o = zo.exports;
    M()(zo, {
      VAlert: Go["a"],
      VBtn: L["a"],
      VCard: Ve["a"],
      VCardActions: ke["a"],
      VCardSubtitle: ke["b"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VCol: He["a"],
      VContainer: mt["a"],
      VDatePicker: Wo["a"],
      VDialog: Ho["a"],
      VMenu: I["a"],
      VRow: Ke["a"],
      VSelect: Ko["a"],
      VSpacer: J["a"],
      VTextField: uo["a"],
    });
    var Zo = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-container",
          { attrs: { fluid: "", "max-width": "90%" } },
          [
            o(
              "v-card",
              { attrs: { height: "90vh" } },
              [
                o("v-card-title", { attrs: { "primary-title": "" } }),
                o(
                  "v-card-text",
                  { staticStyle: { height: "90%" } },
                  [
                    o(
                      "v-container",
                      { staticClass: "fill-height", attrs: { fluid: "" } },
                      [
                        o(
                          "v-row",
                          { attrs: { align: "center", justify: "center" } },
                          [
                            o(
                              "v-col",
                              { attrs: { cols: "12", align: "center" } },
                              [
                                o(
                                  "v-chip",
                                  {
                                    staticClass: "px-16",
                                    attrs: {
                                      label: "",
                                      outlined: "",
                                      color: "red",
                                      "x-large": "",
                                    },
                                  },
                                  [
                                    o(
                                      "v-icon",
                                      {
                                        staticClass: "mr-16 ml-16",
                                        attrs: { "x-large": "" },
                                      },
                                      [e._v("mdi-alert-outline")],
                                    ),
                                    e._v(" CLASSIFIED "),
                                    o(
                                      "v-icon",
                                      {
                                        staticClass: "mr-16 ml-16",
                                        attrs: { "x-large": "" },
                                      },
                                      [e._v("mdi-alert-outline")],
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      Yo = [],
      qo = {
        mounted: function () {
          this.deny();
        },
        methods: {
          deny: function () {
            this.$swal({
              icon: "error",
              title: "Access Denied",
              text: "You do not have permission to view this imformation.",
              showConfirmButton: !1,
            });
          },
        },
      },
      Jo = qo,
      Qo = Object(T["a"])(Jo, Zo, Yo, !1, null, null, null),
      Xo = Qo.exports;
    M()(Qo, {
      VCard: Ve["a"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VChip: Ht["a"],
      VCol: He["a"],
      VContainer: mt["a"],
      VIcon: V["a"],
      VRow: Ke["a"],
    });
    var ea = function () {
        var e = this,
          t = e.$createElement,
          o = e._self._c || t;
        return o(
          "v-container",
          { attrs: { fluid: "", "max-width": "90%" } },
          [
            o(
              "v-card",
              { attrs: { height: "90vh" } },
              [
                o("v-card-title", { attrs: { "primary-title": "" } }),
                o(
                  "v-card-text",
                  { staticStyle: { height: "90%" } },
                  [
                    o(
                      "v-container",
                      { staticClass: "fill-height", attrs: { fluid: "" } },
                      [
                        o(
                          "v-row",
                          { attrs: { align: "center", justify: "center" } },
                          [
                            o(
                              "v-col",
                              { attrs: { cols: "12", align: "center" } },
                              [
                                o(
                                  "v-chip",
                                  {
                                    staticClass: "px-16",
                                    attrs: {
                                      label: "",
                                      outlined: "",
                                      color: "red",
                                      "x-large": "",
                                    },
                                  },
                                  [
                                    o(
                                      "v-icon",
                                      {
                                        staticClass: "mr-16 ml-16",
                                        attrs: { "x-large": "" },
                                      },
                                      [e._v("mdi-close")],
                                    ),
                                    e._v(" 404 | Resource not found. "),
                                    o(
                                      "v-icon",
                                      {
                                        staticClass: "mr-16 ml-16",
                                        attrs: { "x-large": "" },
                                      },
                                      [e._v("mdi-close")],
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      ta = [],
      oa = { mounted: function () {}, methods: {} },
      aa = oa,
      sa = Object(T["a"])(aa, ea, ta, !1, null, null, null),
      ia = sa.exports;
    M()(sa, {
      VCard: Ve["a"],
      VCardText: ke["c"],
      VCardTitle: ke["d"],
      VChip: Ht["a"],
      VCol: He["a"],
      VContainer: mt["a"],
      VIcon: V["a"],
      VRow: Ke["a"],
    }),
      a["a"].use(Me["a"]);
    var ra = [
        { path: "/", component: yt },
        { path: "/access-denied", component: Xo },
        { path: "/brief", component: Mo },
        { path: "/info", component: ro },
        { path: "/map", component: Et },
        { path: "/login", component: vo, meta: { hideNav: !0 } },
        { path: "/controlcenter", component: void 0, meta: { noaccess: !0 } },
        { path: "/historical-data", component: $o },
        { path: "*", component: ia },
      ],
      na = new Me["a"]({ mode: "history", base: "/", routes: ra });
    na.beforeEach(
      (function () {
        var e = Object(Ne["a"])(
          regeneratorRuntime.mark(function e(t, o, a) {
            var s;
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((s =
                        t.matched.some(function (e) {
                          return e.meta.noaccess;
                        }) || !1),
                      !s)
                    ) {
                      e.next = 5;
                      break;
                    }
                    "/access-denied" == na.app._route.fullPath
                      ? location.reload()
                      : na.push("/access-denied"),
                      (e.next = 6);
                    break;
                  case 5:
                    return e.abrupt("return", a());
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (t, o, a) {
          return e.apply(this, arguments);
        };
      })(),
    );
    var ca = na,
      la = o("5886");
    o("1462");
    a["a"].use(la["default"]);
    var da = {},
      Ca = o("6c42"),
      pa =
        (o("da96"),
        {
          showConfirmButton: !1,
          timer: 1500,
          position: "bottom-left",
          icon: !0,
        });
    a["a"].use(Ca["a"], pa);
    var ua = {},
      ha = o("2f62");
    a["a"].use(ha["a"]);
    var va = new ha["a"].Store({
      state: { token: void 0, authPassed: !1 },
      getters: {
        token: function (e) {
          return e.token;
        },
        authPassed: function (e) {
          return e.authPassed;
        },
      },
      mutations: {
        setToken: function (e, t) {
          console.log(t.account),
            (e.token = t.id),
            void 0 !== t.account && (e.account = t.account),
            window.localStorage.setItem("token", t.id),
            window.localStorage.setItem("account", t.account),
            (e.authPassed = !0);
        },
        clearToken: function (e, t) {
          window.localStorage.setItem("token", void 0),
            window.localStorage.setItem("account", void 0);
        },
      },
      actions: {
        setToken: function (e, t) {
          var o = e.commit;
          e.state;
          o("setToken", { id: t.id, account: t.account });
        },
        deauth: function (e, t) {
          var o = e.commit;
          e.state;
          o("clearToken");
        },
        auth: function (e) {
          return Object(Ne["a"])(
            regeneratorRuntime.mark(function t() {
              var o, s, i, r;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = e.commit),
                        e.state,
                        (s = window.localStorage.getItem("account")),
                        (i = window.localStorage.getItem("token")),
                        (t.next = 5),
                        a["a"].axios.post("/auth/validate", { token: i })
                      );
                    case 5:
                      if (((r = t.sent), !r.data.result)) {
                        t.next = 9;
                        break;
                      }
                      return (
                        o("setToken", { id: i, account: s }),
                        t.abrupt("return", !0)
                      );
                    case 9:
                      return t.abrupt("return", !1);
                    case 10:
                    case "end":
                      return t.stop();
                  }
              }, t);
            }),
          )();
        },
      },
      modules: {},
    });
    (a["a"].config.productionTip = !1),
      new a["a"]({
        vuetify: Te,
        router: ca,
        axios: c,
        sweetalert2: da,
        toastification: ua,
        store: va,
        render: function (e) {
          return e(ye);
        },
      }).$mount("#app");
  },
  6516: function (e) {
    e.exports = JSON.parse(
      '{"data":{"ErrorParse":{"\\nNorthAmerica\\n":{"#":0,"Country":"\\nNorthAmerica\\n","Confirmed":126972874,"New Cases":19,"Deaths":1637179,"New Deaths":0,"Recovered":122943552,"Active Confirmed":642,"Serious Critical":2392143,"TotalCases/1M pop":5952,"Tot Deaths/1M pop":0},"\\nAsia\\n":{"#":0,"Country":"\\nAsia\\n","Confirmed":218127063,"New Cases":676,"Deaths":1547529,"New Deaths":1,"Recovered":201821326,"Active Confirmed":17082,"Serious Critical":14758208,"TotalCases/1M pop":15118,"Tot Deaths/1M pop":0},"\\nEurope\\n":{"#":0,"Country":"\\nEurope\\n","Confirmed":249642947,"New Cases":139,"Deaths":2065437,"New Deaths":3,"Recovered":245736650,"Active Confirmed":3292,"Serious Critical":1840860,"TotalCases/1M pop":5533,"Tot Deaths/1M pop":0},"\\nSouthAmerica\\n":{"#":0,"Country":"\\nSouthAmerica\\n","Confirmed":68820001,"New Cases":0,"Deaths":1357465,"New Deaths":0,"Recovered":66484120,"Active Confirmed":0,"Serious Critical":978416,"TotalCases/1M pop":10100,"Tot Deaths/1M pop":0},"\\nOceania\\n":{"#":0,"Country":"\\nOceania\\n","Confirmed":14521443,"New Cases":0,"Deaths":28978,"New Deaths":0,"Recovered":14355427,"Active Confirmed":0,"Serious Critical":137038,"TotalCases/1M pop":86,"Tot Deaths/1M pop":0},"\\nAfrica\\n":{"#":0,"Country":"\\nAfrica\\n","Confirmed":12830576,"New Cases":0,"Deaths":258804,"New Deaths":0,"Recovered":12087486,"Active Confirmed":0,"Serious Critical":484286,"TotalCases/1M pop":547,"Tot Deaths/1M pop":0},"\\n\\n":{"#":0,"Country":"\\n\\n","Confirmed":721,"New Cases":0,"Deaths":15,"New Deaths":0,"Recovered":706,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":0},"World":{"#":0,"Country":"World","Confirmed":690915625,"New Cases":834,"Deaths":6895407,"New Deaths":4,"Recovered":663429267,"Active Confirmed":21016,"Serious Critical":20590951,"TotalCases/1M pop":37336,"Tot Deaths/1M pop":88638},"DPRK":{"#":31,"Country":"DPRK","Confirmed":4772813,"New Cases":0,"Deaths":74,"New Deaths":0,"Recovered":4772739,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":183636},"UAE":{"#":68,"Country":"UAE","Confirmed":1067030,"New Cases":0,"Deaths":2349,"New Deaths":0,"Recovered":1054525,"Active Confirmed":0,"Serious Critical":10156,"TotalCases/1M pop":0,"Tot Deaths/1M pop":105837},"Laos":{"#":113,"Country":"Laos","Confirmed":218465,"New Cases":16,"Deaths":758,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":0,"Tot Deaths/1M pop":29203},"ChannelIslands":{"#":130,"Country":"ChannelIslands","Confirmed":101717,"New Cases":0,"Deaths":228,"New Deaths":0,"Recovered":101321,"Active Confirmed":0,"Serious Critical":168,"TotalCases/1M pop":0,"Tot Deaths/1M pop":576421},"DRC":{"#":132,"Country":"DRC","Confirmed":97409,"New Cases":0,"Deaths":1468,"New Deaths":0,"Recovered":84489,"Active Confirmed":0,"Serious Critical":11452,"TotalCases/1M pop":0,"Tot Deaths/1M pop":1023},"FaeroeIslands":{"#":164,"Country":"FaeroeIslands","Confirmed":34658,"New Cases":0,"Deaths":28,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":5,"Tot Deaths/1M pop":703959},"St.VincentGrenadines":{"#":202,"Country":"St.VincentGrenadines","Confirmed":9631,"New Cases":0,"Deaths":124,"New Deaths":0,"Recovered":9493,"Active Confirmed":0,"Serious Critical":14,"TotalCases/1M pop":0,"Tot Deaths/1M pop":86337},"BritishVirginIslands":{"#":209,"Country":"BritishVirginIslands","Confirmed":7305,"New Cases":0,"Deaths":64,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":0,"Tot Deaths/1M pop":238757},"St.Barth":{"#":215,"Country":"St.Barth","Confirmed":5507,"New Cases":0,"Deaths":6,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":0,"Tot Deaths/1M pop":553746},"SaintPierreMiquelon":{"#":220,"Country":"SaintPierreMiquelon","Confirmed":3452,"New Cases":0,"Deaths":2,"New Deaths":0,"Recovered":2449,"Active Confirmed":0,"Serious Critical":1001,"TotalCases/1M pop":1,"Tot Deaths/1M pop":599410},"DiamondPrincess":{"#":226,"Country":"DiamondPrincess","Confirmed":712,"New Cases":0,"Deaths":13,"New Deaths":0,"Recovered":699,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":0},"VaticanCity":{"#":227,"Country":"VaticanCity","Confirmed":29,"New Cases":0,"Deaths":0,"New Deaths":0,"Recovered":29,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":36295},"MSZaandam":{"#":229,"Country":"MSZaandam","Confirmed":9,"New Cases":0,"Deaths":2,"New Deaths":0,"Recovered":7,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":0}},"USA":{"#":1,"Country":"USA","Confirmed":107303873,"New Cases":0,"Deaths":1168100,"New Deaths":0,"Recovered":105446987,"Active Confirmed":0,"Serious Critical":688786,"TotalCases/1M pop":786,"Tot Deaths/1M pop":320496,"countryCode":"USA","population":327200000},"IND":{"#":2,"Country":"India","Confirmed":44994144,"New Cases":0,"Deaths":531905,"New Deaths":0,"Recovered":44460690,"Active Confirmed":0,"Serious Critical":1549,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":31987,"countryCode":"IND","population":1339000000},"FRA":{"#":3,"Country":"France","Confirmed":40136348,"New Cases":0,"Deaths":167642,"New Deaths":0,"Recovered":39940169,"Active Confirmed":0,"Serious Critical":28537,"TotalCases/1M pop":869,"Tot Deaths/1M pop":611979,"countryCode":"FRA","population":66989999},"DEU":{"#":4,"Country":"Germany","Confirmed":38428685,"New Cases":0,"Deaths":174352,"New Deaths":0,"Recovered":38240600,"Active Confirmed":0,"Serious Critical":13733,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":458119,"countryCode":"DEU","population":82790000},"BRA":{"#":5,"Country":"Brazil","Confirmed":37671420,"New Cases":0,"Deaths":703964,"New Deaths":0,"Recovered":36249161,"Active Confirmed":0,"Serious Critical":718295,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":174928,"countryCode":"BRA","population":209300000},"JPN":{"#":6,"Country":"Japan","Confirmed":33803572,"New Cases":0,"Deaths":74694,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":83,"Tot Deaths/1M pop":269169,"countryCode":"JPN","population":126800000},"KOR":{"#":7,"Country":"S.Korea","Confirmed":32131606,"New Cases":0,"Deaths":35017,"New Deaths":0,"Recovered":31864668,"Active Confirmed":16006,"Serious Critical":231921,"TotalCases/1M pop":117,"Tot Deaths/1M pop":625982,"countryCode":"KOR","population":51470000},"ITA":{"#":8,"Country":"Italy","Confirmed":25893101,"New Cases":0,"Deaths":190782,"New Deaths":0,"Recovered":25587953,"Active Confirmed":0,"Serious Critical":114366,"TotalCases/1M pop":54,"Tot Deaths/1M pop":429670,"countryCode":"ITA","population":60480000},"GBR":{"#":9,"Country":"UK","Confirmed":24618436,"New Cases":0,"Deaths":226278,"New Deaths":0,"Recovered":24392158,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":359404,"countryCode":"GBR","population":66440000},"RUS":{"#":10,"Country":"Russia","Confirmed":22959198,"New Cases":0,"Deaths":399563,"New Deaths":0,"Recovered":22402524,"Active Confirmed":0,"Serious Critical":157111,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":157464,"countryCode":"RUS","population":144500000},"TUR":{"#":11,"Country":"Turkey","Confirmed":17232066,"New Cases":0,"Deaths":102174,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":0,"Tot Deaths/1M pop":201399,"countryCode":"TUR","population":80810000},"ESP":{"#":12,"Country":"Spain","Confirmed":13905048,"New Cases":0,"Deaths":121622,"New Deaths":0,"Recovered":13740203,"Active Confirmed":0,"Serious Critical":43223,"TotalCases/1M pop":231,"Tot Deaths/1M pop":297631,"countryCode":"ESP","population":46660000},"AUS":{"#":13,"Country":"Australia","Confirmed":11690064,"New Cases":0,"Deaths":21612,"New Deaths":0,"Recovered":11637174,"Active Confirmed":0,"Serious Critical":31278,"TotalCases/1M pop":58,"Tot Deaths/1M pop":448431,"countryCode":"AUS","population":24600000},"VNM":{"#":14,"Country":"Vietnam","Confirmed":11620482,"New Cases":93,"Deaths":43206,"New Deaths":0,"Recovered":10640065,"Active Confirmed":16,"Serious Critical":937211,"TotalCases/1M pop":3,"Tot Deaths/1M pop":117434,"countryCode":"VNM","population":95540000},"TWN":{"#":15,"Country":"Taiwan","Confirmed":10239998,"New Cases":0,"Deaths":19005,"New Deaths":0,"Recovered":10220993,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":428656,"countryCode":"TWN","population":23780000},"ARG":{"#":16,"Country":"Argentina","Confirmed":10056300,"New Cases":0,"Deaths":130514,"New Deaths":0,"Recovered":9925280,"Active Confirmed":0,"Serious Critical":506,"TotalCases/1M pop":363,"Tot Deaths/1M pop":218567,"countryCode":"ARG","population":44270000},"NLD":{"#":197,"Country":"CaribbeanNetherlands","Confirmed":11682,"New Cases":0,"Deaths":38,"New Deaths":0,"Recovered":10476,"Active Confirmed":0,"Serious Critical":1168,"TotalCases/1M pop":0,"Tot Deaths/1M pop":438398,"countryCode":"NLD","population":17180000},"MEX":{"#":18,"Country":"Mexico","Confirmed":7633355,"New Cases":0,"Deaths":334336,"New Deaths":0,"Recovered":6885378,"Active Confirmed":0,"Serious Critical":413641,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":58021,"countryCode":"MEX","population":129199999},"IRN":{"#":19,"Country":"Iran","Confirmed":7612414,"New Cases":0,"Deaths":146292,"New Deaths":0,"Recovered":7368688,"Active Confirmed":0,"Serious Critical":97434,"TotalCases/1M pop":27,"Tot Deaths/1M pop":88493,"countryCode":"IRN","population":81160000},"IDN":{"#":20,"Country":"Indonesia","Confirmed":6811989,"New Cases":44,"Deaths":161871,"New Deaths":1,"Recovered":6641388,"Active Confirmed":113,"Serious Critical":8730,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":24404,"countryCode":"IDN","population":264000000},"POL":{"#":21,"Country":"Poland","Confirmed":6517837,"New Cases":15,"Deaths":119626,"New Deaths":2,"Recovered":5335940,"Active Confirmed":0,"Serious Critical":1062271,"TotalCases/1M pop":53,"Tot Deaths/1M pop":172705,"countryCode":"POL","population":37980000},"COL":{"#":22,"Country":"Colombia","Confirmed":6372392,"New Cases":0,"Deaths":142807,"New Deaths":0,"Recovered":6190683,"Active Confirmed":0,"Serious Critical":38902,"TotalCases/1M pop":342,"Tot Deaths/1M pop":123705,"countryCode":"COL","population":49070000},"GRC":{"#":23,"Country":"Greece","Confirmed":6101379,"New Cases":0,"Deaths":37089,"New Deaths":0,"Recovered":6060845,"Active Confirmed":861,"Serious Critical":3445,"TotalCases/1M pop":115,"Tot Deaths/1M pop":591412,"countryCode":"GRC","population":10740000},"AUT":{"#":24,"Country":"Austria","Confirmed":6081195,"New Cases":83,"Deaths":22540,"New Deaths":0,"Recovered":6054865,"Active Confirmed":57,"Serious Critical":3790,"TotalCases/1M pop":14,"Tot Deaths/1M pop":670717,"countryCode":"AUT","population":8822000},"PRT":{"#":25,"Country":"Portugal","Confirmed":5592410,"New Cases":0,"Deaths":26885,"New Deaths":0,"Recovered":5563162,"Active Confirmed":1737,"Serious Critical":2363,"TotalCases/1M pop":61,"Tot Deaths/1M pop":551489,"countryCode":"PRT","population":10290000},"UKR":{"#":26,"Country":"Ukraine","Confirmed":5557995,"New Cases":0,"Deaths":112418,"New Deaths":0,"Recovered":5445577,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":128681,"countryCode":"UKR","population":42220000},"CHL":{"#":27,"Country":"Chile","Confirmed":5288268,"New Cases":0,"Deaths":64497,"New Deaths":0,"Recovered":5223709,"Active Confirmed":0,"Serious Critical":62,"TotalCases/1M pop":10,"Tot Deaths/1M pop":274712,"countryCode":"CHL","population":18050000},"MYS":{"#":28,"Country":"Malaysia","Confirmed":5114717,"New Cases":0,"Deaths":37127,"New Deaths":0,"Recovered":5061264,"Active Confirmed":0,"Serious Critical":16326,"TotalCases/1M pop":36,"Tot Deaths/1M pop":154146,"countryCode":"MYS","population":31620000},"ISR":{"#":29,"Country":"Israel","Confirmed":4828768,"New Cases":0,"Deaths":12564,"New Deaths":0,"Recovered":4798473,"Active Confirmed":0,"Serious Critical":17731,"TotalCases/1M pop":21,"Tot Deaths/1M pop":517775,"countryCode":"ISR","population":8712000},"BEL":{"#":30,"Country":"Belgium","Confirmed":4801523,"New Cases":0,"Deaths":34372,"New Deaths":0,"Recovered":4764735,"Active Confirmed":0,"Serious Critical":2416,"TotalCases/1M pop":43,"Tot Deaths/1M pop":411502,"countryCode":"BEL","population":11400000},"THA":{"#":32,"Country":"Thailand","Confirmed":4751563,"New Cases":0,"Deaths":34328,"New Deaths":0,"Recovered":4692636,"Active Confirmed":0,"Serious Critical":24599,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":67804,"countryCode":"THA","population":69040000},"CAN":{"#":33,"Country":"Canada","Confirmed":4688830,"New Cases":0,"Deaths":52860,"New Deaths":0,"Recovered":4625269,"Active Confirmed":625,"Serious Critical":10701,"TotalCases/1M pop":99,"Tot Deaths/1M pop":122142,"countryCode":"CAN","population":37590000},"CZE":{"#":34,"Country":"Czechia","Confirmed":4642729,"New Cases":12,"Deaths":42810,"New Deaths":0,"Recovered":4599625,"Active Confirmed":16,"Serious Critical":294,"TotalCases/1M pop":1,"Tot Deaths/1M pop":432413,"countryCode":"CZE","population":10650000},"PER":{"#":35,"Country":"Peru","Confirmed":4507896,"New Cases":0,"Deaths":220695,"New Deaths":0,"Recovered":4287201,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":26,"Tot Deaths/1M pop":133828,"countryCode":"PER","population":32170000},"CHE":{"#":36,"Country":"Switzerland","Confirmed":4406989,"New Cases":0,"Deaths":14452,"New Deaths":0,"Recovered":4391486,"Active Confirmed":0,"Serious Critical":1051,"TotalCases/1M pop":39,"Tot Deaths/1M pop":502299,"countryCode":"CHE","population":8570000},"PHL":{"#":37,"Country":"Philippines","Confirmed":4164360,"New Cases":503,"Deaths":66484,"New Deaths":0,"Recovered":4089980,"Active Confirmed":384,"Serious Critical":7896,"TotalCases/1M pop":162,"Tot Deaths/1M pop":37014,"countryCode":"PHL","population":104900000},"ZAF":{"#":38,"Country":"SouthAfrica","Confirmed":4076463,"New Cases":0,"Deaths":102595,"New Deaths":0,"Recovered":3912506,"Active Confirmed":0,"Serious Critical":61362,"TotalCases/1M pop":192,"Tot Deaths/1M pop":67095,"countryCode":"ZAF","population":56720000},"ROU":{"#":39,"Country":"Romania","Confirmed":3407485,"New Cases":0,"Deaths":68233,"New Deaths":0,"Recovered":3337936,"Active Confirmed":0,"Serious Critical":1316,"TotalCases/1M pop":53,"Tot Deaths/1M pop":179046,"countryCode":"ROU","population":19530000},"DNK":{"#":40,"Country":"Denmark","Confirmed":3182250,"New Cases":1,"Deaths":8753,"New Deaths":1,"Recovered":3173373,"Active Confirmed":7,"Serious Critical":124,"TotalCases/1M pop":4,"Tot Deaths/1M pop":545377,"countryCode":"DNK","population":5603000},"HKG":{"#":41,"Country":"HongKong","Confirmed":2911141,"New Cases":0,"Deaths":13819,"New Deaths":0,"Recovered":2887598,"Active Confirmed":554,"Serious Critical":9724,"TotalCases/1M pop":28,"Tot Deaths/1M pop":382828,"countryCode":"HKG","population":7392000},"SWE":{"#":42,"Country":"Sweden","Confirmed":2712104,"New Cases":0,"Deaths":24513,"New Deaths":0,"Recovered":2686242,"Active Confirmed":86,"Serious Critical":1349,"TotalCases/1M pop":8,"Tot Deaths/1M pop":265399,"countryCode":"SWE","population":10120000},"SRB":{"#":43,"Country":"Serbia","Confirmed":2543720,"New Cases":0,"Deaths":18057,"New Deaths":0,"Recovered":2524774,"Active Confirmed":134,"Serious Critical":889,"TotalCases/1M pop":0,"Tot Deaths/1M pop":293969,"countryCode":"SRB","population":7022000},"SGP":{"#":44,"Country":"Singapore","Confirmed":2481404,"New Cases":0,"Deaths":1727,"New Deaths":0,"Recovered":2149583,"Active Confirmed":0,"Serious Critical":330094,"TotalCases/1M pop":2,"Tot Deaths/1M pop":417496,"countryCode":"SGP","population":5612000},"IRQ":{"#":45,"Country":"Iraq","Confirmed":2465545,"New Cases":0,"Deaths":25375,"New Deaths":0,"Recovered":2439497,"Active Confirmed":0,"Serious Critical":673,"TotalCases/1M pop":21,"Tot Deaths/1M pop":58474,"countryCode":"IRQ","population":38270000},"NZL":{"#":46,"Country":"NewZealand","Confirmed":2413279,"New Cases":0,"Deaths":4510,"New Deaths":0,"Recovered":2402490,"Active Confirmed":0,"Serious Critical":6279,"TotalCases/1M pop":0,"Tot Deaths/1M pop":492687,"countryCode":"NZL","population":4794000},"HUN":{"#":47,"Country":"Hungary","Confirmed":2203171,"New Cases":0,"Deaths":48881,"New Deaths":0,"Recovered":2152155,"Active Confirmed":0,"Serious Critical":2135,"TotalCases/1M pop":2,"Tot Deaths/1M pop":229347,"countryCode":"HUN","population":97730019731},"BGD":{"#":48,"Country":"Bangladesh","Confirmed":2042422,"New Cases":0,"Deaths":29462,"New Deaths":0,"Recovered":1998448,"Active Confirmed":0,"Serious Critical":14512,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":12166,"countryCode":"BGD","population":164700000},"SVK":{"#":49,"Country":"Slovakia","Confirmed":1866857,"New Cases":0,"Deaths":21167,"New Deaths":0,"Recovered":1845690,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":5,"Tot Deaths/1M pop":341903,"countryCode":"SVK","population":54500010998},"GEO":{"#":50,"Country":"Georgia","Confirmed":1844789,"New Cases":0,"Deaths":17092,"New Deaths":0,"Recovered":1776548,"Active Confirmed":0,"Serious Critical":51149,"TotalCases/1M pop":0,"Tot Deaths/1M pop":464830,"countryCode":"GEO","population":10520000},"JOR":{"#":51,"Country":"Jordan","Confirmed":1746997,"New Cases":0,"Deaths":14122,"New Deaths":0,"Recovered":1731007,"Active Confirmed":0,"Serious Critical":1868,"TotalCases/1M pop":59,"Tot Deaths/1M pop":169597,"countryCode":"JOR","population":9702000},"IRL":{"#":52,"Country":"Ireland","Confirmed":1713613,"New Cases":0,"Deaths":9058,"New Deaths":0,"Recovered":1703055,"Active Confirmed":0,"Serious Critical":1500,"TotalCases/1M pop":19,"Tot Deaths/1M pop":341344,"countryCode":"IRL","population":4830000},"PAK":{"#":53,"Country":"Pakistan","Confirmed":1581211,"New Cases":0,"Deaths":30661,"New Deaths":0,"Recovered":1538689,"Active Confirmed":0,"Serious Critical":11861,"TotalCases/1M pop":2,"Tot Deaths/1M pop":6890,"countryCode":"PAK","population":197000000},"NOR":{"#":54,"Country":"Norway","Confirmed":1485627,"New Cases":0,"Deaths":5566,"New Deaths":0,"Recovered":1479798,"Active Confirmed":223,"Serious Critical":263,"TotalCases/1M pop":20,"Tot Deaths/1M pop":269557,"countryCode":"NOR","population":53680010843},"FIN":{"#":55,"Country":"Finland","Confirmed":1482363,"New Cases":0,"Deaths":9974,"New Deaths":0,"Recovered":1470919,"Active Confirmed":129,"Serious Critical":1470,"TotalCases/1M pop":21,"Tot Deaths/1M pop":266854,"countryCode":"FIN","population":5513000},"KAZ":{"#":56,"Country":"Kazakhstan","Confirmed":1411831,"New Cases":0,"Deaths":13848,"New Deaths":0,"Recovered":1383020,"Active Confirmed":0,"Serious Critical":14963,"TotalCases/1M pop":24,"Tot Deaths/1M pop":73514,"countryCode":"KAZ","population":18040000},"SVN":{"#":57,"Country":"Slovenia","Confirmed":1344239,"New Cases":1,"Deaths":7100,"New Deaths":0,"Recovered":1328006,"Active Confirmed":0,"Serious Critical":9133,"TotalCases/1M pop":8,"Tot Deaths/1M pop":646880,"countryCode":"SVN","population":2067000},"LTU":{"#":58,"Country":"Lithuania","Confirmed":1321392,"New Cases":27,"Deaths":9691,"New Deaths":0,"Recovered":1311174,"Active Confirmed":42,"Serious Critical":527,"TotalCases/1M pop":1,"Tot Deaths/1M pop":496445,"countryCode":"LTU","population":2794000},"BGR":{"#":59,"Country":"Bulgaria","Confirmed":1309026,"New Cases":0,"Deaths":38424,"New Deaths":0,"Recovered":1268902,"Active Confirmed":0,"Serious Critical":1700,"TotalCases/1M pop":23,"Tot Deaths/1M pop":191250,"countryCode":"BGR","population":7050000},"MAR":{"#":60,"Country":"Morocco","Confirmed":1275136,"New Cases":0,"Deaths":16297,"New Deaths":0,"Recovered":1256151,"Active Confirmed":0,"Serious Critical":2688,"TotalCases/1M pop":3,"Tot Deaths/1M pop":33758,"countryCode":"MAR","population":35740000},"HRV":{"#":61,"Country":"Croatia","Confirmed":1273991,"New Cases":0,"Deaths":18273,"New Deaths":0,"Recovered":1255569,"Active Confirmed":0,"Serious Critical":149,"TotalCases/1M pop":6,"Tot Deaths/1M pop":313846,"countryCode":"HRV","population":40760008229},"GTM":{"#":62,"Country":"Guatemala","Confirmed":1260262,"New Cases":0,"Deaths":20206,"New Deaths":0,"Recovered":1235014,"Active Confirmed":0,"Serious Critical":5042,"TotalCases/1M pop":5,"Tot Deaths/1M pop":67814,"countryCode":"GTM","population":16910000},"LBN":{"#":63,"Country":"Lebanon","Confirmed":1238552,"New Cases":0,"Deaths":10936,"New Deaths":0,"Recovered":1087587,"Active Confirmed":0,"Serious Critical":140029,"TotalCases/1M pop":74,"Tot Deaths/1M pop":185277,"countryCode":"LBN","population":6082000},"CRI":{"#":64,"Country":"CostaRica","Confirmed":1235961,"New Cases":0,"Deaths":9386,"New Deaths":0,"Recovered":860711,"Active Confirmed":0,"Serious Critical":365864,"TotalCases/1M pop":52,"Tot Deaths/1M pop":238494,"countryCode":"CRI","population":4906000},"BOL":{"#":65,"Country":"Bolivia","Confirmed":1202776,"New Cases":0,"Deaths":22390,"New Deaths":0,"Recovered":1171069,"Active Confirmed":0,"Serious Critical":9317,"TotalCases/1M pop":220,"Tot Deaths/1M pop":100293,"countryCode":"BOL","population":11050000},"TUN":{"#":66,"Country":"Tunisia","Confirmed":1153361,"New Cases":0,"Deaths":29423,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":44,"Tot Deaths/1M pop":95741,"countryCode":"TUN","population":11530000},"CUB":{"#":67,"Country":"Cuba","Confirmed":1114826,"New Cases":19,"Deaths":8530,"New Deaths":0,"Recovered":1106168,"Active Confirmed":17,"Serious Critical":128,"TotalCases/1M pop":2,"Tot Deaths/1M pop":98608,"countryCode":"CUB","population":11480000},"ECU":{"#":69,"Country":"Ecuador","Confirmed":1062275,"New Cases":0,"Deaths":36019,"New Deaths":0,"Recovered":1026256,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":759,"Tot Deaths/1M pop":58646,"countryCode":"ECU","population":16620000},"PAN":{"#":70,"Country":"Panama","Confirmed":1042631,"New Cases":0,"Deaths":8634,"New Deaths":0,"Recovered":1032845,"Active Confirmed":0,"Serious Critical":1152,"TotalCases/1M pop":16,"Tot Deaths/1M pop":234459,"countryCode":"PAN","population":4099000},"URY":{"#":71,"Country":"Uruguay","Confirmed":1038774,"New Cases":0,"Deaths":7634,"New Deaths":0,"Recovered":1030944,"Active Confirmed":0,"Serious Critical":196,"TotalCases/1M pop":18,"Tot Deaths/1M pop":297131,"countryCode":"URY","population":3457000},"MNG":{"#":72,"Country":"Mongolia","Confirmed":1010034,"New Cases":0,"Deaths":2179,"New Deaths":0,"Recovered":1007855,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":192,"Tot Deaths/1M pop":298997,"countryCode":"MNG","population":3076000},"NPL":{"#":73,"Country":"Nepal","Confirmed":1003369,"New Cases":0,"Deaths":12031,"New Deaths":0,"Recovered":991322,"Active Confirmed":0,"Serious Critical":16,"TotalCases/1M pop":0,"Tot Deaths/1M pop":33196,"countryCode":"NPL","population":29300000},"BLR":{"#":74,"Country":"Belarus","Confirmed":994037,"New Cases":0,"Deaths":7118,"New Deaths":0,"Recovered":985592,"Active Confirmed":0,"Serious Critical":1327,"TotalCases/1M pop":0,"Tot Deaths/1M pop":105381,"countryCode":"BLR","population":9508000},"LVA":{"#":75,"Country":"Latvia","Confirmed":978157,"New Cases":0,"Deaths":6386,"New Deaths":0,"Recovered":971406,"Active Confirmed":0,"Serious Critical":365,"TotalCases/1M pop":13,"Tot Deaths/1M pop":529066,"countryCode":"LVA","population":1920000},"SAU":{"#":76,"Country":"SaudiArabia","Confirmed":841469,"New Cases":0,"Deaths":9646,"New Deaths":0,"Recovered":827923,"Active Confirmed":0,"Serious Critical":3900,"TotalCases/1M pop":66,"Tot Deaths/1M pop":23475,"countryCode":"SAU","population":32939999},"AZE":{"#":77,"Country":"Azerbaijan","Confirmed":831939,"New Cases":0,"Deaths":10282,"New Deaths":0,"Recovered":821629,"Active Confirmed":0,"Serious Critical":28,"TotalCases/1M pop":0,"Tot Deaths/1M pop":80769,"countryCode":"AZE","population":9898000},"PRY":{"#":78,"Country":"Paraguay","Confirmed":811307,"New Cases":0,"Deaths":19965,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":7,"Tot Deaths/1M pop":111049,"countryCode":"PRY","population":6811000},"BHR":{"#":79,"Country":"Bahrain","Confirmed":722432,"New Cases":0,"Deaths":1566,"New Deaths":0,"Recovered":720800,"Active Confirmed":0,"Serious Critical":66,"TotalCases/1M pop":3,"Tot Deaths/1M pop":404955,"countryCode":"BHR","population":1493000},"LKA":{"#":80,"Country":"SriLanka","Confirmed":672539,"New Cases":0,"Deaths":16879,"New Deaths":0,"Recovered":655656,"Active Confirmed":0,"Serious Critical":4,"TotalCases/1M pop":0,"Tot Deaths/1M pop":31171,"countryCode":"LKA","population":21440000},"KWT":{"#":81,"Country":"Kuwait","Confirmed":665974,"New Cases":0,"Deaths":2570,"New Deaths":0,"Recovered":660237,"Active Confirmed":0,"Serious Critical":3167,"TotalCases/1M pop":0,"Tot Deaths/1M pop":152038,"countryCode":"KWT","population":4136999},"DMA":{"#":189,"Country":"Dominica","Confirmed":15760,"New Cases":0,"Deaths":74,"New Deaths":0,"Recovered":15673,"Active Confirmed":0,"Serious Critical":13,"TotalCases/1M pop":0,"Tot Deaths/1M pop":217848,"countryCode":"DMA","population":73925},"CYP":{"#":83,"Country":"Cyprus","Confirmed":660854,"New Cases":0,"Deaths":1364,"New Deaths":0,"Recovered":659490,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":60,"Tot Deaths/1M pop":540184,"countryCode":"CYP","population":1170000},"MMR":{"#":84,"Country":"Myanmar","Confirmed":639740,"New Cases":0,"Deaths":19494,"New Deaths":0,"Recovered":618738,"Active Confirmed":0,"Serious Critical":1508,"TotalCases/1M pop":0,"Tot Deaths/1M pop":11584,"countryCode":"MMR","population":53370000},"PSE":{"#":85,"Country":"Palestine","Confirmed":621008,"New Cases":0,"Deaths":5404,"New Deaths":0,"Recovered":615445,"Active Confirmed":0,"Serious Critical":159,"TotalCases/1M pop":17,"Tot Deaths/1M pop":116173,"countryCode":"PSE","population":50520010205},"MDA":{"#":86,"Country":"Moldova","Confirmed":620717,"New Cases":0,"Deaths":12124,"New Deaths":0,"Recovered":504142,"Active Confirmed":0,"Serious Critical":104451,"TotalCases/1M pop":49,"Tot Deaths/1M pop":154670,"countryCode":"MDA","population":3550000},"EST":{"#":87,"Country":"Estonia","Confirmed":619261,"New Cases":0,"Deaths":3001,"New Deaths":0,"Recovered":524990,"Active Confirmed":0,"Serious Critical":91270,"TotalCases/1M pop":2,"Tot Deaths/1M pop":468459,"countryCode":"EST","population":1328000},"VEN":{"#":88,"Country":"Venezuela","Confirmed":552695,"New Cases":0,"Deaths":5856,"New Deaths":0,"Recovered":546537,"Active Confirmed":0,"Serious Critical":302,"TotalCases/1M pop":31,"Tot Deaths/1M pop":18885,"countryCode":"VEN","population":31980000},"EGY":{"#":89,"Country":"Egypt","Confirmed":516023,"New Cases":0,"Deaths":24613,"New Deaths":0,"Recovered":442182,"Active Confirmed":0,"Serious Critical":49228,"TotalCases/1M pop":122,"Tot Deaths/1M pop":4861,"countryCode":"EGY","population":97550000},"QAT":{"#":90,"Country":"Qatar","Confirmed":514524,"New Cases":0,"Deaths":690,"New Deaths":0,"Recovered":513687,"Active Confirmed":0,"Serious Critical":147,"TotalCases/1M pop":16,"Tot Deaths/1M pop":172664,"countryCode":"QAT","population":2639000},"LBY":{"#":91,"Country":"Libya","Confirmed":507266,"New Cases":0,"Deaths":6437,"New Deaths":0,"Recovered":500827,"Active Confirmed":0,"Serious Critical":2,"TotalCases/1M pop":0,"Tot Deaths/1M pop":72047,"countryCode":"LBY","population":6375000},"ETH":{"#":92,"Country":"Ethiopia","Confirmed":500920,"New Cases":0,"Deaths":7574,"New Deaths":0,"Recovered":488153,"Active Confirmed":0,"Serious Critical":5193,"TotalCases/1M pop":0,"Tot Deaths/1M pop":4146,"countryCode":"ETH","population":105000000},"REU":{"#":93,"Country":"Réunion","Confirmed":486588,"New Cases":0,"Deaths":921,"New Deaths":0,"Recovered":418572,"Active Confirmed":0,"Serious Critical":67095,"TotalCases/1M pop":10,"Tot Deaths/1M pop":535854,"countryCode":"REU","population":859959},"HND":{"#":94,"Country":"Honduras","Confirmed":472619,"New Cases":0,"Deaths":11116,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":105,"Tot Deaths/1M pop":46239,"countryCode":"HND","population":9265000},"ARM":{"#":95,"Country":"Armenia","Confirmed":449222,"New Cases":0,"Deaths":8750,"New Deaths":0,"Recovered":435162,"Active Confirmed":0,"Serious Critical":5310,"TotalCases/1M pop":0,"Tot Deaths/1M pop":151153,"countryCode":"ARM","population":2973000},"BIH":{"#":96,"Country":"BosniaandHerzegovina","Confirmed":403043,"New Cases":0,"Deaths":16350,"New Deaths":0,"Recovered":379084,"Active Confirmed":0,"Serious Critical":7609,"TotalCases/1M pop":0,"Tot Deaths/1M pop":124039,"countryCode":"BIH","population":3507000},"OMN":{"#":97,"Country":"Oman","Confirmed":399449,"New Cases":0,"Deaths":4628,"New Deaths":0,"Recovered":384669,"Active Confirmed":0,"Serious Critical":10152,"TotalCases/1M pop":2,"Tot Deaths/1M pop":75028,"countryCode":"OMN","population":4636000},"MKD":{"#":98,"Country":"NorthMacedonia","Confirmed":348281,"New Cases":0,"Deaths":9677,"New Deaths":0,"Recovered":337068,"Active Confirmed":0,"Serious Critical":1536,"TotalCases/1M pop":0,"Tot Deaths/1M pop":167338,"countryCode":"MKD","population":2077000},"ZMB":{"#":99,"Country":"Zambia","Confirmed":347022,"New Cases":0,"Deaths":4062,"New Deaths":0,"Recovered":341316,"Active Confirmed":0,"Serious Critical":1644,"TotalCases/1M pop":0,"Tot Deaths/1M pop":17823,"countryCode":"ZMB","population":17090000},"KEN":{"#":100,"Country":"Kenya","Confirmed":343537,"New Cases":0,"Deaths":5689,"New Deaths":0,"Recovered":337309,"Active Confirmed":0,"Serious Critical":539,"TotalCases/1M pop":1,"Tot Deaths/1M pop":6111,"countryCode":"KEN","population":49700000},"ALB":{"#":101,"Country":"Albania","Confirmed":334726,"New Cases":0,"Deaths":3602,"New Deaths":0,"Recovered":329428,"Active Confirmed":0,"Serious Critical":1696,"TotalCases/1M pop":0,"Tot Deaths/1M pop":116777,"countryCode":"ALB","population":2877000},"BWA":{"#":102,"Country":"Botswana","Confirmed":330008,"New Cases":0,"Deaths":2801,"New Deaths":0,"Recovered":327049,"Active Confirmed":0,"Serious Critical":158,"TotalCases/1M pop":1,"Tot Deaths/1M pop":135185,"countryCode":"BWA","population":2292000},"LUX":{"#":103,"Country":"Luxembourg","Confirmed":319959,"New Cases":0,"Deaths":1232,"New Deaths":0,"Recovered":316690,"Active Confirmed":0,"Serious Critical":2037,"TotalCases/1M pop":0,"Tot Deaths/1M pop":498091,"countryCode":"LUX","population":602005},"BRN":{"#":104,"Country":"Brunei","Confirmed":308777,"New Cases":0,"Deaths":225,"New Deaths":0,"Recovered":243601,"Active Confirmed":0,"Serious Critical":64951,"TotalCases/1M pop":3,"Tot Deaths/1M pop":693209,"countryCode":"BRN","population":428697},"MNE":{"#":105,"Country":"Montenegro","Confirmed":291928,"New Cases":0,"Deaths":2828,"New Deaths":0,"Recovered":288639,"Active Confirmed":0,"Serious Critical":461,"TotalCases/1M pop":6,"Tot Deaths/1M pop":464891,"countryCode":"MNE","population":631219},"DZA":{"#":106,"Country":"Algeria","Confirmed":271852,"New Cases":0,"Deaths":6881,"New Deaths":0,"Recovered":183060,"Active Confirmed":0,"Serious Critical":81911,"TotalCases/1M pop":0,"Tot Deaths/1M pop":5995,"countryCode":"DZA","population":41320000},"NGA":{"#":107,"Country":"Nigeria","Confirmed":266675,"New Cases":0,"Deaths":3155,"New Deaths":0,"Recovered":259953,"Active Confirmed":0,"Serious Critical":3567,"TotalCases/1M pop":11,"Tot Deaths/1M pop":1230,"countryCode":"NGA","population":190900000},"ZWE":{"#":108,"Country":"Zimbabwe","Confirmed":265413,"New Cases":0,"Deaths":5707,"New Deaths":0,"Recovered":258888,"Active Confirmed":0,"Serious Critical":818,"TotalCases/1M pop":12,"Tot Deaths/1M pop":17312,"countryCode":"ZWE","population":16530000},"UZB":{"#":109,"Country":"Uzbekistan","Confirmed":253662,"New Cases":0,"Deaths":1637,"New Deaths":0,"Recovered":241486,"Active Confirmed":0,"Serious Critical":10539,"TotalCases/1M pop":23,"Tot Deaths/1M pop":7378,"countryCode":"UZB","population":32390000},"MOZ":{"#":110,"Country":"Mozambique","Confirmed":233417,"New Cases":0,"Deaths":2243,"New Deaths":0,"Recovered":228805,"Active Confirmed":0,"Serious Critical":2369,"TotalCases/1M pop":11,"Tot Deaths/1M pop":7054,"countryCode":"MOZ","population":29670000},"MTQ":{"#":111,"Country":"Martinique","Confirmed":230354,"New Cases":0,"Deaths":1102,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":12,"Tot Deaths/1M pop":615777,"countryCode":"MTQ","population":376480},"AFG":{"#":112,"Country":"Afghanistan","Confirmed":223266,"New Cases":20,"Deaths":7928,"New Deaths":0,"Recovered":202987,"Active Confirmed":7,"Serious Critical":12351,"TotalCases/1M pop":45,"Tot Deaths/1M pop":5478,"countryCode":"AFG","population":35530000},"ISL":{"#":114,"Country":"Iceland","Confirmed":209191,"New Cases":0,"Deaths":229,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":2,"Tot Deaths/1M pop":605661,"countryCode":"ISL","population":364260},"KGZ":{"#":115,"Country":"Kyrgyzstan","Confirmed":206897,"New Cases":0,"Deaths":2991,"New Deaths":0,"Recovered":196406,"Active Confirmed":0,"Serious Critical":7500,"TotalCases/1M pop":131,"Tot Deaths/1M pop":30750,"countryCode":"KGZ","population":6202000},"GLP":{"#":116,"Country":"Guadeloupe","Confirmed":203235,"New Cases":0,"Deaths":1021,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":19,"Tot Deaths/1M pop":508349,"countryCode":"GLP","population":395700},"SLV":{"#":117,"Country":"ElSalvador","Confirmed":201785,"New Cases":0,"Deaths":4230,"New Deaths":0,"Recovered":179410,"Active Confirmed":0,"Serious Critical":18145,"TotalCases/1M pop":8,"Tot Deaths/1M pop":30805,"countryCode":"SLV","population":6378000},"TTO":{"#":118,"Country":"TrinidadandTobago","Confirmed":191496,"New Cases":0,"Deaths":4390,"New Deaths":0,"Recovered":187078,"Active Confirmed":0,"Serious Critical":28,"TotalCases/1M pop":8,"Tot Deaths/1M pop":136143,"countryCode":"TTO","population":1369000},"MDV":{"#":119,"Country":"Maldives","Confirmed":186685,"New Cases":0,"Deaths":316,"New Deaths":0,"Recovered":163687,"Active Confirmed":0,"Serious Critical":22682,"TotalCases/1M pop":25,"Tot Deaths/1M pop":345084,"countryCode":"MDV","population":436330},"GHA":{"#":120,"Country":"Ghana","Confirmed":171657,"New Cases":0,"Deaths":1462,"New Deaths":0,"Recovered":170161,"Active Confirmed":0,"Serious Critical":34,"TotalCases/1M pop":2,"Tot Deaths/1M pop":5299,"countryCode":"GHA","population":28830000},"NAM":{"#":121,"Country":"Namibia","Confirmed":171310,"New Cases":0,"Deaths":4091,"New Deaths":0,"Recovered":167099,"Active Confirmed":0,"Serious Critical":120,"TotalCases/1M pop":0,"Tot Deaths/1M pop":65041,"countryCode":"NAM","population":2534000},"UGA":{"#":122,"Country":"Uganda","Confirmed":170775,"New Cases":0,"Deaths":3632,"New Deaths":0,"Recovered":100431,"Active Confirmed":0,"Serious Critical":66712,"TotalCases/1M pop":3,"Tot Deaths/1M pop":3526,"countryCode":"UGA","population":42860000},"JAM":{"#":123,"Country":"Jamaica","Confirmed":155224,"New Cases":0,"Deaths":3558,"New Deaths":0,"Recovered":103001,"Active Confirmed":0,"Serious Critical":48665,"TotalCases/1M pop":0,"Tot Deaths/1M pop":52000,"countryCode":"JAM","population":2890000},"KHM":{"#":124,"Country":"Cambodia","Confirmed":138899,"New Cases":0,"Deaths":3056,"New Deaths":0,"Recovered":135832,"Active Confirmed":2,"Serious Critical":11,"TotalCases/1M pop":0,"Tot Deaths/1M pop":8090,"countryCode":"KHM","population":16010000},"RWA":{"#":125,"Country":"Rwanda","Confirmed":133194,"New Cases":0,"Deaths":1468,"New Deaths":0,"Recovered":131647,"Active Confirmed":0,"Serious Critical":79,"TotalCases/1M pop":0,"Tot Deaths/1M pop":9793,"countryCode":"RWA","population":12210000},"CMR":{"#":126,"Country":"Cameroon","Confirmed":125087,"New Cases":0,"Deaths":1974,"New Deaths":0,"Recovered":122807,"Active Confirmed":0,"Serious Critical":306,"TotalCases/1M pop":13,"Tot Deaths/1M pop":4482,"countryCode":"CMR","population":24050000},"MLT":{"#":127,"Country":"Malta","Confirmed":118977,"New Cases":0,"Deaths":841,"New Deaths":0,"Recovered":117592,"Active Confirmed":0,"Serious Critical":544,"TotalCases/1M pop":4,"Tot Deaths/1M pop":267946,"countryCode":"MLT","population":4935592019},"BRB":{"#":128,"Country":"Barbados","Confirmed":107794,"New Cases":0,"Deaths":593,"New Deaths":0,"Recovered":106971,"Active Confirmed":0,"Serious Critical":230,"TotalCases/1M pop":0,"Tot Deaths/1M pop":374255,"countryCode":"BRB","population":285719},"AGO":{"#":129,"Country":"Angola","Confirmed":105384,"New Cases":0,"Deaths":1934,"New Deaths":0,"Recovered":103419,"Active Confirmed":0,"Serious Critical":31,"TotalCases/1M pop":0,"Tot Deaths/1M pop":3009,"countryCode":"AGO","population":29780000},"GUF":{"#":131,"Country":"FrenchGuiana","Confirmed":98041,"New Cases":0,"Deaths":420,"New Deaths":0,"Recovered":11254,"Active Confirmed":0,"Serious Critical":86367,"TotalCases/1M pop":6,"Tot Deaths/1M pop":312065,"countryCode":"GUF","population":290691},"SEN":{"#":133,"Country":"Senegal","Confirmed":89003,"New Cases":0,"Deaths":1971,"New Deaths":0,"Recovered":87024,"Active Confirmed":0,"Serious Critical":8,"TotalCases/1M pop":0,"Tot Deaths/1M pop":5042,"countryCode":"SEN","population":15850000},"MWI":{"#":134,"Country":"Malawi","Confirmed":88728,"New Cases":0,"Deaths":2686,"New Deaths":0,"Recovered":85651,"Active Confirmed":0,"Serious Critical":391,"TotalCases/1M pop":67,"Tot Deaths/1M pop":4397,"countryCode":"MWI","population":18620000},"CIV":{"#":135,"Country":"IvoryCoast","Confirmed":88335,"New Cases":0,"Deaths":835,"New Deaths":0,"Recovered":87497,"Active Confirmed":0,"Serious Critical":3,"TotalCases/1M pop":0,"Tot Deaths/1M pop":3184,"countryCode":"CIV","population":24290000},"SUR":{"#":136,"Country":"Suriname","Confirmed":82563,"New Cases":0,"Deaths":1406,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":0,"Tot Deaths/1M pop":138336,"countryCode":"SUR","population":563402},"NCL":{"#":137,"Country":"NewCaledonia","Confirmed":79922,"New Cases":0,"Deaths":314,"New Deaths":0,"Recovered":79605,"Active Confirmed":0,"Serious Critical":3,"TotalCases/1M pop":9,"Tot Deaths/1M pop":274726,"countryCode":"NCL","population":280460},"PYF":{"#":138,"Country":"FrenchPolynesia","Confirmed":78601,"New Cases":0,"Deaths":649,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":7,"Tot Deaths/1M pop":276604,"countryCode":"PYF","population":283007},"SWZ":{"#":139,"Country":"Eswatini","Confirmed":74882,"New Cases":0,"Deaths":1427,"New Deaths":0,"Recovered":73116,"Active Confirmed":0,"Serious Critical":339,"TotalCases/1M pop":0,"Tot Deaths/1M pop":63201,"countryCode":"SWZ","population":1367000},"GUY":{"#":140,"Country":"Guyana","Confirmed":73364,"New Cases":0,"Deaths":1298,"New Deaths":0,"Recovered":72013,"Active Confirmed":0,"Serious Critical":53,"TotalCases/1M pop":0,"Tot Deaths/1M pop":92393,"countryCode":"GUY","population":777859},"BLZ":{"#":141,"Country":"Belize","Confirmed":70782,"New Cases":0,"Deaths":688,"New Deaths":0,"Recovered":70085,"Active Confirmed":0,"Serious Critical":9,"TotalCases/1M pop":6,"Tot Deaths/1M pop":171722,"countryCode":"BLZ","population":374681},"FJI":{"#":142,"Country":"Fiji","Confirmed":69072,"New Cases":0,"Deaths":885,"New Deaths":0,"Recovered":67154,"Active Confirmed":0,"Serious Critical":1033,"TotalCases/1M pop":0,"Tot Deaths/1M pop":75948,"countryCode":"FJI","population":905502},"MDG":{"#":191,"Country":"CAR","Confirmed":15368,"New Cases":0,"Deaths":113,"New Deaths":0,"Recovered":15200,"Active Confirmed":0,"Serious Critical":55,"TotalCases/1M pop":2,"Tot Deaths/1M pop":3063,"countryCode":"MDG","population":25570000},"CPV":{"#":144,"Country":"CaboVerde","Confirmed":64088,"New Cases":0,"Deaths":414,"New Deaths":0,"Recovered":63588,"Active Confirmed":0,"Serious Critical":86,"TotalCases/1M pop":23,"Tot Deaths/1M pop":112895,"countryCode":"CPV","population":546388},"SDN":{"#":182,"Country":"SouthSudan","Confirmed":18368,"New Cases":0,"Deaths":138,"New Deaths":0,"Recovered":18115,"Active Confirmed":0,"Serious Critical":115,"TotalCases/1M pop":1,"Tot Deaths/1M pop":1581,"countryCode":"SDN","population":40530000},"MRT":{"#":146,"Country":"Mauritania","Confirmed":63715,"New Cases":0,"Deaths":997,"New Deaths":0,"Recovered":62471,"Active Confirmed":0,"Serious Critical":247,"TotalCases/1M pop":0,"Tot Deaths/1M pop":12998,"countryCode":"MRT","population":4420000},"BTN":{"#":147,"Country":"Bhutan","Confirmed":62673,"New Cases":0,"Deaths":21,"New Deaths":0,"Recovered":61564,"Active Confirmed":0,"Serious Critical":1088,"TotalCases/1M pop":0,"Tot Deaths/1M pop":79540,"countryCode":"BTN","population":807610},"SYR":{"#":148,"Country":"Syria","Confirmed":57664,"New Cases":0,"Deaths":3165,"New Deaths":0,"Recovered":54499,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":2978,"countryCode":"SYR","population":18270000},"BDI":{"#":149,"Country":"Burundi","Confirmed":54142,"New Cases":0,"Deaths":38,"New Deaths":0,"Recovered":53569,"Active Confirmed":0,"Serious Critical":535,"TotalCases/1M pop":0,"Tot Deaths/1M pop":4289,"countryCode":"BDI","population":10860000},"SYC":{"#":150,"Country":"Seychelles","Confirmed":50937,"New Cases":0,"Deaths":172,"New Deaths":0,"Recovered":50750,"Active Confirmed":0,"Serious Critical":15,"TotalCases/1M pop":0,"Tot Deaths/1M pop":512311,"countryCode":"SYC","population":95843},"GAB":{"#":151,"Country":"Gabon","Confirmed":48992,"New Cases":0,"Deaths":307,"New Deaths":0,"Recovered":48674,"Active Confirmed":0,"Serious Critical":11,"TotalCases/1M pop":0,"Tot Deaths/1M pop":21013,"countryCode":"GAB","population":2025000},"AND":{"#":152,"Country":"Andorra","Confirmed":48015,"New Cases":0,"Deaths":165,"New Deaths":0,"Recovered":47563,"Active Confirmed":0,"Serious Critical":287,"TotalCases/1M pop":14,"Tot Deaths/1M pop":619844,"countryCode":"AND","population":76965},"GIN":{"#":184,"Country":"EquatorialGuinea","Confirmed":17229,"New Cases":0,"Deaths":183,"New Deaths":0,"Recovered":16907,"Active Confirmed":0,"Serious Critical":139,"TotalCases/1M pop":5,"Tot Deaths/1M pop":11512,"countryCode":"GIN","population":12720000},"CUW":{"#":154,"Country":"Curaçao","Confirmed":45986,"New Cases":0,"Deaths":295,"New Deaths":0,"Recovered":44720,"Active Confirmed":0,"Serious Critical":971,"TotalCases/1M pop":3,"Tot Deaths/1M pop":277812,"countryCode":"CUW","population":161014},"ABW":{"#":155,"Country":"Aruba","Confirmed":44200,"New Cases":0,"Deaths":236,"New Deaths":0,"Recovered":42438,"Active Confirmed":0,"Serious Critical":1526,"TotalCases/1M pop":2,"Tot Deaths/1M pop":410746,"countryCode":"ABW","population":105264},"TZA":{"#":156,"Country":"Tanzania","Confirmed":43078,"New Cases":0,"Deaths":846,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":7,"Tot Deaths/1M pop":681,"countryCode":"TZA","population":59214293},"MUS":{"#":157,"Country":"Mauritius","Confirmed":42642,"New Cases":0,"Deaths":1051,"New Deaths":0,"Recovered":40904,"Active Confirmed":0,"Serious Critical":687,"TotalCases/1M pop":0,"Tot Deaths/1M pop":33452,"countryCode":"MUS","population":1265000},"MYT":{"#":158,"Country":"Mayotte","Confirmed":42027,"New Cases":0,"Deaths":188,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":0,"Tot Deaths/1M pop":146815,"countryCode":"MYT","population":270372},"TGO":{"#":159,"Country":"Togo","Confirmed":39504,"New Cases":0,"Deaths":290,"New Deaths":0,"Recovered":39212,"Active Confirmed":0,"Serious Critical":2,"TotalCases/1M pop":0,"Tot Deaths/1M pop":4551,"countryCode":"TGO","population":7798000},"BHS":{"#":161,"Country":"Bahamas","Confirmed":38084,"New Cases":0,"Deaths":844,"New Deaths":0,"Recovered":36366,"Active Confirmed":0,"Serious Critical":874,"TotalCases/1M pop":1,"Tot Deaths/1M pop":95087,"countryCode":"BHS","population":395361},"IMN":{"#":162,"Country":"IsleofMan","Confirmed":38008,"New Cases":0,"Deaths":116,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":0,"Tot Deaths/1M pop":443335,"countryCode":"IMN","population":84287},"LSO":{"#":163,"Country":"Lesotho","Confirmed":34790,"New Cases":0,"Deaths":723,"New Deaths":0,"Recovered":25980,"Active Confirmed":0,"Serious Critical":8087,"TotalCases/1M pop":0,"Tot Deaths/1M pop":15990,"countryCode":"LSO","population":2233000},"HTI":{"#":165,"Country":"Haiti","Confirmed":34301,"New Cases":0,"Deaths":860,"New Deaths":0,"Recovered":33368,"Active Confirmed":0,"Serious Critical":73,"TotalCases/1M pop":0,"Tot Deaths/1M pop":2937,"countryCode":"HTI","population":10980000},"MLI":{"#":166,"Country":"Mali","Confirmed":33151,"New Cases":0,"Deaths":743,"New Deaths":0,"Recovered":32332,"Active Confirmed":0,"Serious Critical":76,"TotalCases/1M pop":0,"Tot Deaths/1M pop":1544,"countryCode":"MLI","population":18540000},"CYM":{"#":167,"Country":"CaymanIslands","Confirmed":31472,"New Cases":0,"Deaths":37,"New Deaths":0,"Recovered":8553,"Active Confirmed":0,"Serious Critical":22882,"TotalCases/1M pop":1,"Tot Deaths/1M pop":467797,"countryCode":"CYM","population":61559},"LCA":{"#":168,"Country":"SaintLucia","Confirmed":30052,"New Cases":0,"Deaths":409,"New Deaths":0,"Recovered":29095,"Active Confirmed":0,"Serious Critical":548,"TotalCases/1M pop":0,"Tot Deaths/1M pop":162344,"countryCode":"LCA","population":178844},"BEN":{"#":169,"Country":"Benin","Confirmed":28014,"New Cases":0,"Deaths":163,"New Deaths":0,"Recovered":27847,"Active Confirmed":0,"Serious Critical":4,"TotalCases/1M pop":0,"Tot Deaths/1M pop":2191,"countryCode":"BEN","population":11180000},"SOM":{"#":170,"Country":"Somalia","Confirmed":27334,"New Cases":0,"Deaths":1361,"New Deaths":0,"Recovered":13182,"Active Confirmed":0,"Serious Critical":12791,"TotalCases/1M pop":0,"Tot Deaths/1M pop":1623,"countryCode":"SOM","population":14740000},"FSM":{"#":171,"Country":"Micronesia","Confirmed":26459,"New Cases":0,"Deaths":65,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":1,"Tot Deaths/1M pop":225204,"countryCode":"FSM","population":105544},"COG":{"#":172,"Country":"Congo","Confirmed":25375,"New Cases":0,"Deaths":386,"New Deaths":0,"Recovered":24006,"Active Confirmed":0,"Serious Critical":983,"TotalCases/1M pop":0,"Tot Deaths/1M pop":4377,"countryCode":"COG","population":81340000},"SLB":{"#":173,"Country":"SolomonIslands","Confirmed":24575,"New Cases":0,"Deaths":153,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":1,"Tot Deaths/1M pop":34077,"countryCode":"SLB","population":611343},"SMR":{"#":174,"Country":"SanMarino","Confirmed":24326,"New Cases":0,"Deaths":125,"New Deaths":0,"Recovered":24196,"Active Confirmed":0,"Serious Critical":5,"TotalCases/1M pop":4,"Tot Deaths/1M pop":713686,"countryCode":"SMR","population":33400},"TLS":{"#":175,"Country":"Timor-Leste","Confirmed":23457,"New Cases":0,"Deaths":138,"New Deaths":0,"Recovered":23102,"Active Confirmed":0,"Serious Critical":217,"TotalCases/1M pop":0,"Tot Deaths/1M pop":17129,"countryCode":"TLS","population":1296000},"BFA":{"#":176,"Country":"BurkinaFaso","Confirmed":22056,"New Cases":0,"Deaths":396,"New Deaths":0,"Recovered":21596,"Active Confirmed":0,"Serious Critical":64,"TotalCases/1M pop":0,"Tot Deaths/1M pop":998,"countryCode":"BFA","population":19190000},"LIE":{"#":177,"Country":"Liechtenstein","Confirmed":21446,"New Cases":0,"Deaths":94,"New Deaths":0,"Recovered":21352,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":558679,"countryCode":"LIE","population":38557},"GIB":{"#":178,"Country":"Gibraltar","Confirmed":20550,"New Cases":0,"Deaths":113,"New Deaths":0,"Recovered":16579,"Active Confirmed":0,"Serious Critical":3858,"TotalCases/1M pop":0,"Tot Deaths/1M pop":609720,"countryCode":"GIB","population":34571},"GRD":{"#":179,"Country":"Grenada","Confirmed":19693,"New Cases":0,"Deaths":238,"New Deaths":0,"Recovered":19358,"Active Confirmed":0,"Serious Critical":97,"TotalCases/1M pop":4,"Tot Deaths/1M pop":173545,"countryCode":"GRD","population":107825},"BMU":{"#":180,"Country":"Bermuda","Confirmed":18860,"New Cases":0,"Deaths":165,"New Deaths":0,"Recovered":18685,"Active Confirmed":0,"Serious Critical":10,"TotalCases/1M pop":0,"Tot Deaths/1M pop":304493,"countryCode":"BMU","population":65441},"NIC":{"#":181,"Country":"Nicaragua","Confirmed":18491,"New Cases":0,"Deaths":225,"New Deaths":0,"Recovered":4225,"Active Confirmed":0,"Serious Critical":14041,"TotalCases/1M pop":0,"Tot Deaths/1M pop":2728,"countryCode":"NIC","population":6218000},"TJK":{"#":183,"Country":"Tajikistan","Confirmed":17786,"New Cases":0,"Deaths":125,"New Deaths":0,"Recovered":17264,"Active Confirmed":0,"Serious Critical":397,"TotalCases/1M pop":0,"Tot Deaths/1M pop":1786,"countryCode":"TJK","population":8921000},"MCO":{"#":185,"Country":"Monaco","Confirmed":16838,"New Cases":0,"Deaths":67,"New Deaths":0,"Recovered":15992,"Active Confirmed":0,"Serious Critical":779,"TotalCases/1M pop":4,"Tot Deaths/1M pop":423246,"countryCode":"MCO","population":38695},"TON":{"#":186,"Country":"Tonga","Confirmed":16819,"New Cases":0,"Deaths":13,"New Deaths":0,"Recovered":15638,"Active Confirmed":0,"Serious Critical":1168,"TotalCases/1M pop":0,"Tot Deaths/1M pop":156094,"countryCode":"TON","population":108020},"WSM":{"#":187,"Country":"Samoa","Confirmed":16764,"New Cases":0,"Deaths":31,"New Deaths":0,"Recovered":1605,"Active Confirmed":0,"Serious Critical":15128,"TotalCases/1M pop":0,"Tot Deaths/1M pop":82892,"countryCode":"WSM","population":196440},"MHL":{"#":188,"Country":"MarshallIslands","Confirmed":16098,"New Cases":0,"Deaths":17,"New Deaths":0,"Recovered":16079,"Active Confirmed":0,"Serious Critical":2,"TotalCases/1M pop":0,"Tot Deaths/1M pop":268045,"countryCode":"MHL","population":53127},"DJI":{"#":190,"Country":"Djibouti","Confirmed":15690,"New Cases":0,"Deaths":189,"New Deaths":0,"Recovered":15427,"Active Confirmed":0,"Serious Critical":74,"TotalCases/1M pop":0,"Tot Deaths/1M pop":15441,"countryCode":"DJI","population":956985},"GMB":{"#":192,"Country":"Gambia","Confirmed":12626,"New Cases":0,"Deaths":372,"New Deaths":0,"Recovered":12189,"Active Confirmed":0,"Serious Critical":65,"TotalCases/1M pop":0,"Tot Deaths/1M pop":4935,"countryCode":"GMB","population":2101000},"MAF":{"#":193,"Country":"SaintMartin","Confirmed":12324,"New Cases":0,"Deaths":63,"New Deaths":0,"Recovered":1399,"Active Confirmed":0,"Serious Critical":10862,"TotalCases/1M pop":7,"Tot Deaths/1M pop":310194,"countryCode":"MAF","population":77741},"VUT":{"#":194,"Country":"Vanuatu","Confirmed":12019,"New Cases":0,"Deaths":14,"New Deaths":0,"Recovered":11976,"Active Confirmed":0,"Serious Critical":29,"TotalCases/1M pop":0,"Tot Deaths/1M pop":37346,"countryCode":"VUT","population":276244},"GRL":{"#":195,"Country":"Greenland","Confirmed":11971,"New Cases":0,"Deaths":21,"New Deaths":0,"Recovered":2761,"Active Confirmed":0,"Serious Critical":9189,"TotalCases/1M pop":4,"Tot Deaths/1M pop":210117,"countryCode":"GRL","population":56171},"YEM":{"#":196,"Country":"Yemen","Confirmed":11945,"New Cases":0,"Deaths":2159,"New Deaths":0,"Recovered":9124,"Active Confirmed":0,"Serious Critical":662,"TotalCases/1M pop":23,"Tot Deaths/1M pop":383,"countryCode":"YEM","population":28250000},"MAC":{"#":198,"Country":"Macao","Confirmed":11618,"New Cases":0,"Deaths":123,"New Deaths":0,"Recovered":3487,"Active Confirmed":0,"Serious Critical":8008,"TotalCases/1M pop":0,"Tot Deaths/1M pop":17406,"countryCode":"MAC","population":622567},"SXM":{"#":199,"Country":"SintMaarten","Confirmed":11051,"New Cases":0,"Deaths":92,"New Deaths":0,"Recovered":10905,"Active Confirmed":0,"Serious Critical":54,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":251353,"countryCode":"SXM","population":41109},"ERI":{"#":200,"Country":"Eritrea","Confirmed":10189,"New Cases":0,"Deaths":103,"New Deaths":0,"Recovered":10086,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":2782,"countryCode":"ERI","population":4475000},"NER":{"#":201,"Country":"Niger","Confirmed":9931,"New Cases":0,"Deaths":312,"New Deaths":0,"Recovered":8890,"Active Confirmed":0,"Serious Critical":729,"TotalCases/1M pop":1,"Tot Deaths/1M pop":381,"countryCode":"NER","population":21480000},"GNB":{"#":203,"Country":"Guinea-Bissau","Confirmed":9614,"New Cases":0,"Deaths":177,"New Deaths":0,"Recovered":8929,"Active Confirmed":0,"Serious Critical":508,"TotalCases/1M pop":6,"Tot Deaths/1M pop":4659,"countryCode":"GNB","population":1861000},"COM":{"#":204,"Country":"Comoros","Confirmed":9109,"New Cases":0,"Deaths":161,"New Deaths":0,"Recovered":8939,"Active Confirmed":0,"Serious Critical":9,"TotalCases/1M pop":0,"Tot Deaths/1M pop":10038,"countryCode":"COM","population":813912},"ATG":{"#":205,"Country":"AntiguaandBarbuda","Confirmed":9106,"New Cases":0,"Deaths":146,"New Deaths":0,"Recovered":8954,"Active Confirmed":0,"Serious Critical":6,"TotalCases/1M pop":1,"Tot Deaths/1M pop":91509,"countryCode":"ATG","population":102012},"LBR":{"#":206,"Country":"Liberia","Confirmed":8090,"New Cases":0,"Deaths":295,"New Deaths":0,"Recovered":7783,"Active Confirmed":0,"Serious Critical":12,"TotalCases/1M pop":2,"Tot Deaths/1M pop":1525,"countryCode":"LBR","population":4732000},"SLE":{"#":207,"Country":"SierraLeone","Confirmed":7762,"New Cases":0,"Deaths":126,"New Deaths":0,"Recovered":"N/A","Active Confirmed":"N/A","Serious Critical":"N/A","TotalCases/1M pop":0,"Tot Deaths/1M pop":934,"countryCode":"SLE","population":7557000},"TCD":{"#":208,"Country":"Chad","Confirmed":7701,"New Cases":0,"Deaths":194,"New Deaths":0,"Recovered":4874,"Active Confirmed":0,"Serious Critical":2633,"TotalCases/1M pop":0,"Tot Deaths/1M pop":442,"countryCode":"TCD","population":14900000},"COK":{"#":210,"Country":"CookIslands","Confirmed":7144,"New Cases":0,"Deaths":2,"New Deaths":0,"Recovered":7138,"Active Confirmed":0,"Serious Critical":4,"TotalCases/1M pop":0,"Tot Deaths/1M pop":406579,"countryCode":"COK","population":17379},"KNA":{"#":211,"Country":"SaintKittsandNevis","Confirmed":6606,"New Cases":0,"Deaths":48,"New Deaths":0,"Recovered":6558,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":122626,"countryCode":"KNA","population":55345},"STP":{"#":212,"Country":"SaoTomeandPrincipe","Confirmed":6588,"New Cases":0,"Deaths":80,"New Deaths":0,"Recovered":6508,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":28935,"countryCode":"STP","population":204327},"TCA":{"#":213,"Country":"TurksandCaicos","Confirmed":6588,"New Cases":0,"Deaths":38,"New Deaths":0,"Recovered":6529,"Active Confirmed":0,"Serious Critical":21,"TotalCases/1M pop":4,"Tot Deaths/1M pop":165773,"countryCode":"TCA","population":35446},"PLW":{"#":214,"Country":"Palau","Confirmed":6015,"New Cases":0,"Deaths":9,"New Deaths":0,"Recovered":6004,"Active Confirmed":0,"Serious Critical":2,"TotalCases/1M pop":0,"Tot Deaths/1M pop":329896,"countryCode":"PLW","population":21729},"NRU":{"#":216,"Country":"Nauru","Confirmed":5393,"New Cases":0,"Deaths":1,"New Deaths":0,"Recovered":5347,"Active Confirmed":0,"Serious Critical":45,"TotalCases/1M pop":0,"Tot Deaths/1M pop":494635,"countryCode":"NRU","population":13649},"KIR":{"#":217,"Country":"Kiribati","Confirmed":5037,"New Cases":0,"Deaths":24,"New Deaths":0,"Recovered":2703,"Active Confirmed":0,"Serious Critical":2310,"TotalCases/1M pop":3,"Tot Deaths/1M pop":40812,"countryCode":"KIR","population":116398},"AIA":{"#":218,"Country":"Anguilla","Confirmed":3904,"New Cases":0,"Deaths":12,"New Deaths":0,"Recovered":3879,"Active Confirmed":0,"Serious Critical":13,"TotalCases/1M pop":4,"Tot Deaths/1M pop":256336,"countryCode":"AIA","population":150942011},"WLF":{"#":219,"Country":"WallisandFutuna","Confirmed":3550,"New Cases":0,"Deaths":8,"New Deaths":0,"Recovered":438,"Active Confirmed":0,"Serious Critical":3104,"TotalCases/1M pop":0,"Tot Deaths/1M pop":323256,"countryCode":"WLF","population":15289},"TUV":{"#":221,"Country":"Tuvalu","Confirmed":2943,"New Cases":0,"Deaths":1,"New Deaths":0,"Recovered":0,"Active Confirmed":0,"Serious Critical":2942,"TotalCases/1M pop":0,"Tot Deaths/1M pop":243909,"countryCode":"TUV","population":11192},"SHN":{"#":222,"Country":"SaintHelena","Confirmed":2166,"New Cases":0,"Deaths":0,"New Deaths":0,"Recovered":2,"Active Confirmed":0,"Serious Critical":2164,"TotalCases/1M pop":0,"Tot Deaths/1M pop":354211,"countryCode":"SHN","population":56612008},"FLK":{"#":223,"Country":"FalklandIslands","Confirmed":1930,"New Cases":0,"Deaths":0,"New Deaths":0,"Recovered":1930,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":545352,"countryCode":"FLK","population":2840},"MSR":{"#":224,"Country":"Montserrat","Confirmed":1403,"New Cases":0,"Deaths":8,"New Deaths":0,"Recovered":1376,"Active Confirmed":0,"Serious Critical":19,"TotalCases/1M pop":0,"Tot Deaths/1M pop":282578,"countryCode":"MSR","population":5900},"NIU":{"#":225,"Country":"Niue","Confirmed":820,"New Cases":0,"Deaths":0,"New Deaths":0,"Recovered":820,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":505549,"countryCode":"NIU","population":16242018},"ESH":{"#":228,"Country":"WesternSahara","Confirmed":10,"New Cases":0,"Deaths":1,"New Deaths":0,"Recovered":9,"Active Confirmed":0,"Serious Critical":0,"TotalCases/1M pop":0,"Tot Deaths/1M pop":16,"countryCode":"ESH","population":646978},"TKL":{"#":230,"Country":"Tokelau","Confirmed":5,"New Cases":0,"Deaths":0,"New Deaths":0,"Recovered":0,"Active Confirmed":0,"Serious Critical":5,"TotalCases/1M pop":0,"Tot Deaths/1M pop":3628,"countryCode":"TKL","population":1411},"CHN":{"#":231,"Country":"China","Confirmed":503302,"New Cases":0,"Deaths":5272,"New Deaths":0,"Recovered":379053,"Active Confirmed":0,"Serious Critical":118977,"TotalCases/1M pop":"N/A","Tot Deaths/1M pop":347,"countryCode":"CHN","population":1386000000},"Total":{"#":0,"Country":"Total","Confirmed":690915625,"New Cases":834,"Deaths":6895407,"New Deaths":4,"Recovered":663429267,"Active Confirmed":21016,"Serious Critical":20590951,"TotalCases/1M pop":37336,"Tot Deaths/1M pop":886380,"population":309873738266}},"report":{"timeStamp":"06/30/2023-03:19:26AM","source":"https://www.worldometers.info/coronavirus/","timeStampEpoch":1688066366.462761}}',
    );
  },
  "73fd": function (e, t, o) {
    "use strict";
    o("43e9");
  },
  "85ec": function (e, t, o) {},
  8956: function (e, t, o) {},
  "8c26": function (e, t, o) {
    "use strict";
    o("558f");
  },
  "8fa0": function (e, t, o) {
    "use strict";
    o("d515");
  },
  aa54: function (e, t, o) {
    "use strict";
    o("506f");
  },
  acd4: function (e, t, o) {
    "use strict";
    o("402b");
  },
  ad37: function (e, t, o) {
    "use strict";
    o("cd9e");
  },
  ad4f: function (e, t, o) {
    "use strict";
    o("c0e6");
  },
  b0a0: function (e, t, o) {
    "use strict";
    o("452c");
  },
  c0e6: function (e, t, o) {},
  c85f: function (e, t, o) {},
  c9a2: function (e, t, o) {
    "use strict";
    o("d50f");
  },
  cd9e: function (e, t, o) {},
  d50f: function (e, t, o) {},
  d515: function (e, t, o) {},
  db77: function (e, t, o) {
    "use strict";
    o("fd9c");
  },
  fd9c: function (e, t, o) {},
});
//# sourceMappingURL=app.18039f85.js.map
