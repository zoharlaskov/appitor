(function () {
  var e = {
      2497: function (e) {
        e.exports = {
          home: {
            title: "Explore More",
            appTitle: "Free App",
            appText:
              "Building instructions, remote control, and programming all in one App!",
            appName: "Android without Google Play?",
            name: "Learn more",
            Buy: "Buy",
            titleText: "Explore More",
            Coming: "Coming Soon",
            Features: "Features",
            NEW: "NEW",
            THE: "THE NEW",
          },
          products: {
            title: "All Apitor products.",
            text: "Find out which kit is geared for you!",
          },
          app: {
            title: "Step-by-step Guide",
          },
          support: {
            title: "What can we help you with? Contact Apitor!",
            Download: "Download",
            emailName: "Contact Us for Support",
            robot: "I’m not a robot",
            name: "Name",
            Email: "Email",
            conter: "Your message…",
            Submit: "Submit",
            code: "Enter the authentication code",
            cancel: "cancel",
            verify: "Verification",
          },
          about: {
            text: "Contact us",
            name: "Why Partner with Us",
            title: "Contact Us for Support",
          },
          referral: {
            title: "Privacy Policy",
            title2: "Apitor Terms of Use",
            title3: "Apitor Legal Terms",
          },
          footer: {
            title:
              "Copyright © 2022 Apitor Technology Co., Ltd. All rights reserved.",
            title2: "Privacy Policy",
            title3: "Terms of Use",
            title4: "Legal Terms",
            Follow: "FOLLOW US",
            name: "PRODUCTS",
            name2: "APP",
            name3: "SUPPORT",
            name4: "ABOUT",
            name5: "HOME",
            text: "App Store",
            text2: "Google Play",
            text3: "Building instructions",
            text4: "Manual",
            text5: "EC declaration of conformity",
            text6: "Contact Us",
            nav: "English",
            nav2: "日本語",
          },
          detail: {
            Ages: "Ages",
            Pieces: "Pieces",
            Model: "Model",
            ControlModule: "Control Module",
            Motor: "Motors",
            Senors: "Senors",
            lights: "LED lights",
            cm: "cm",
            Download: "Download App",
          },
          contact: {
            name: "Thank You！Your message has been sent! We will reply back to your enquiry as soon as possible.",
            text: "Error code input error",
            text1: "Illegal email address",
            text2: "Name cannot be empty",
            text3: "Email address cannot be empty",
            text4: "Information cannot be empty",
          },
        };
      },
      5407: function (e) {
        e.exports = {
          home: {
            title: "探索の詳細",
            appTitle: "無料アプリ",
            appText:
              "組み立て説明書、リモコン、プログラミングが1つのアプリに！",
            appName: "Google PlayのAndroidはありませんか？",
            name: "詳しい情報",
            Buy: "購入する",
            titleText: "探索の詳細",
            Coming: "すぐ参ります",
            Features: "特徴",
            NEW: "新規",
            THE: "新発売",
          },
          products: {
            title: "商品一覧。",
            text: "お気に入りのロボットキットを探そう！",
          },
          app: {
            title: "Step-by-step ガイド",
          },
          support: {
            title:
              "何かお手伝いできることはありますか？Apitorにお問い合わせください！",
            Download: "ダウンロード",
            emailName: "お問い合わせ",
            robot: "私はロボットではありません",
            name: "の名前をあげる",
            Email: "Eメール",
            conter: "メッセージ...",
            Submit: "送信",
            code: "認証コードを入力してください",
            cancel: "キャンセル",
            verify: "検証",
          },
          about: {
            text: "お問い合わせ",
            name: "なぜ私たちと協力しているのか",
            title: "お問い合わせ",
          },
          referral: {
            title: "プライバシーポリシー",
            title2: "Apitor使用条件",
            title3: "Apitor法律条項",
          },
          footer: {
            title:
              "著作権©2022アピターテクノロジー株式会社。無断複写・転載を禁止。",
            title2: "プライバシーポリシー",
            title3: "利用規約",
            title4: "法的規約",
            Follow: "フォローしてください",
            name: "商品情報",
            name2: "アプリ",
            name3: "サポート",
            name4: "Apitorとは",
            name5: "ホームページ",
            text: "App Store",
            text2: "Google Play",
            text3: "組み立て説明書",
            text4: "マニュアル",
            text5: "EC適合性宣言",
            text6: "お問い合わせ",
            nav: "English",
            nav2: "日本語",
          },
          detail: {
            Ages: "推奨年齢",
            Pieces: "ブロック数",
            Model: "モデル",
            ControlModule: "コントロールモジュール",
            Motor: "モーター",
            Senors: "センサー",
            lights: "LEDライト",
            cm: "センチメートル",
            Download: "アプリケーションのダウンロード",
          },
          contact: {
            name: "ありがとうございます！メッセージは送信されました！できるだけ早く返信いたします",
            text: "認証コード入力エラー",
            text1: "不正な電子メールアドレス",
            text2: "名前を空にすることはできません",
            text3: "電子メールアドレスを空にすることはできません",
            text4: "情報を空にすることはできません",
          },
        };
      },
      3969: function (e, t, n) {
        "use strict";
        var o = n(6848),
          r = function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                attrs: {
                  id: "app",
                },
              },
              [t("router-view")],
              1
            );
          },
          a = [],
          i = {
            name: "App",
            components: {},
            created() {
              localStorage.setItem("type", 1),
                localStorage.setItem("language", "en_US"),
                (this.$i18n.locale = localStorage.getItem("language"));
            },
            mounted() {},
            methods: {},
          },
          l = i,
          c = n(1656),
          u = (0, c.A)(l, r, a, !1, null, null, null),
          s = u.exports,
          d = n(6178);
        o["default"].use(d.Ay);
        const m = new d.Ay({
          mode: "history",
          routes: [
            {
              path: "/",
              name: "/",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(99)]).then(n.bind(n, 7147)),
            },
            {
              path: "/products",
              name: "/products",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(953)]).then(
                  n.bind(n, 7030)
                ),
            },
            {
              path: "/support",
              name: "/support",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(192)]).then(
                  n.bind(n, 8154)
                ),
            },
            {
              path: "/about",
              name: "/about",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(648)]).then(
                  n.bind(n, 7186)
                ),
            },
            {
              path: "/app",
              name: "/app",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(260)]).then(n.bind(n, 358)),
            },
            {
              path: "/playing",
              name: "/playing",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(588)]).then(
                  n.bind(n, 4974)
                ),
            },
            {
              path: "/detail",
              name: "/detail",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(797)]).then(
                  n.bind(n, 1338)
                ),
            },
            {
              path: "/conformity",
              name: "/conformity",
              component: () => n.e(223).then(n.bind(n, 9223)),
            },
            {
              path: "/referral",
              name: "/referral",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(535)]).then(
                  n.bind(n, 3823)
                ),
            },
            {
              path: "/terms",
              name: "/terms",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(244)]).then(
                  n.bind(n, 6270)
                ),
            },
            {
              path: "/legal",
              name: "/legal",
              component: () =>
                Promise.all([n.e(825), n.e(64), n.e(444)]).then(
                  n.bind(n, 3838)
                ),
            },
          ],
        });
        var p = m;
        o["default"].use(d.Ay);
        const f = new d.Ay({
          mode: "history",
          routes: [
            {
              path: "/",
              name: "/",
              component: () =>
                Promise.all([n.e(825), n.e(568)]).then(n.bind(n, 568)),
            },
            {
              path: "/products",
              name: "/products",
              component: () =>
                Promise.all([n.e(825), n.e(249)]).then(n.bind(n, 1249)),
            },
            {
              path: "/support",
              name: "/support",
              component: () =>
                Promise.all([n.e(825), n.e(612), n.e(796)]).then(
                  n.bind(n, 5476)
                ),
            },
            {
              path: "/about",
              name: "/about",
              component: () =>
                Promise.all([n.e(825), n.e(612), n.e(33)]).then(
                  n.bind(n, 6529)
                ),
            },
            {
              path: "/app",
              name: "/app",
              component: () =>
                Promise.all([n.e(825), n.e(935)]).then(n.bind(n, 935)),
            },
            {
              path: "/playing",
              name: "/playing",
              component: () =>
                Promise.all([n.e(825), n.e(492)]).then(n.bind(n, 3492)),
            },
            {
              path: "/detail",
              name: "/detail",
              component: () =>
                Promise.all([n.e(825), n.e(634)]).then(n.bind(n, 634)),
            },
            {
              path: "/conformity",
              name: "/conformity",
              component: () => n.e(670).then(n.bind(n, 670)),
            },
            {
              path: "/referral",
              name: "/referral",
              component: () =>
                Promise.all([n.e(825), n.e(295)]).then(n.bind(n, 2295)),
            },
            {
              path: "/terms",
              name: "/terms",
              component: () =>
                Promise.all([n.e(825), n.e(556)]).then(n.bind(n, 3556)),
            },
            {
              path: "/legal",
              name: "/legal",
              component: () =>
                Promise.all([n.e(825), n.e(617)]).then(n.bind(n, 617)),
            },
          ],
        });
        var h = f,
          b = n(8355),
          g = n(6942),
          y = n(7517),
          v = (n(2241), n(9143)),
          x = n.n(v),
          A = n(3518);
        o["default"].use(A.Ay);
        const P = {
            infoData: {},
            footerList: [],
            userInfo: {},
          },
          w = {
            infoData(e, t) {
              e.commit("getInfoData", t);
            },
            footerList(e, t) {
              e.commit("getFooterList", t);
            },
            userInfo(e, t) {
              e.commit("getUserInfo", t);
            },
          },
          E = {
            getInfoData(e, t) {
              this.state.infoData = t;
            },
            getFooterList(e, t) {
              this.state.footerList = t;
            },
            getUserInfo(e, t) {
              this.state.userInfo = t;
            },
          },
          S = {};
        var C = new A.Ay.Store({
            state: P,
            actions: w,
            mutations: E,
            getters: S,
          }),
          T = n(47),
          O = n.n(T),
          N = n(7155),
          k = n.n(N),
          L = n(9522);
        o["default"].use(L.A);
        const M = {
          ja_CN: n(5407),
          en_US: n(2497),
        };
        var D = new L.A({
          locale: "en",
          messages: M,
        });
        n(6247);
        o["default"].use(D),
          o["default"].use(k()),
          o["default"].use(O()),
          o["default"].use(y.Ay),
          o["default"].use(g.A, b.A),
          o["default"].use(x()),
          (o["default"].config.productionTip = !1);
        const U = document.documentElement.clientWidth;
        function j(e, t) {
          var n = document.getElementsByTagName("html")[0],
            o =
              document.body.clientWidth || document.documentElement.clientWidth;
          n.style.fontSize = (o / e) * t + "px";
        }
        (window.onload = function () {
          console.log(U), j(U < 751 ? 750 : 1920, 100);
        }),
          (window.onresize = function () {
            j(U < 751 ? 750 : 1920, 100);
          }),
          new o["default"]({
            render: (e) => e(s),
            router: U < 751 ? h : p,
            store: C,
            i18n: D,
          }).$mount("#app");
      },
      542: function () {},
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var a = (t[o] = {
      id: o,
      loaded: !1,
      exports: {},
    });
    return e[o].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports;
  }
  (n.m = e),
    (function () {
      n.amdO = {};
    })(),
    (function () {
      var e = [];
      n.O = function (t, o, r, a) {
        if (!o) {
          var i = 1 / 0;
          for (s = 0; s < e.length; s++) {
            (o = e[s][0]), (r = e[s][1]), (a = e[s][2]);
            for (var l = !0, c = 0; c < o.length; c++)
              (!1 & a || i >= a) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](o[c]);
              })
                ? o.splice(c--, 1)
                : ((l = !1), a < i && (i = a));
            if (l) {
              e.splice(s--, 1);
              var u = r();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        a = a || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
        e[s] = [o, r, a];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return (
          n.d(t, {
            a: t,
          }),
          t
        );
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: t[o],
            });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, o) {
              return n.f[o](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return (
          "js/" +
          e +
          "." +
          {
            33: "aa6d96b2",
            64: "0afab9e1",
            99: "ae9dab48",
            192: "8654ae7d",
            223: "7f5d11c4",
            244: "dffa5782",
            249: "05930084",
            260: "0f82856f",
            295: "db36c359",
            444: "610637ac",
            492: "c0ba872f",
            535: "28212973",
            556: "577403f3",
            568: "c23e5a71",
            588: "abf0462c",
            612: "c891813f",
            617: "4e5e4488",
            634: "d9c3254a",
            648: "88229dd2",
            670: "089bf746",
            796: "61859cbc",
            797: "6b0e3583",
            825: "6fb4cd86",
            935: "d78dd767",
            953: "26d9e77e",
          }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return (
          "css/" +
          e +
          "." +
          {
            33: "707d6ebc",
            99: "53cace3e",
            192: "034d37ec",
            244: "9556a8da",
            249: "caf08931",
            260: "220ed7fc",
            295: "c6ff09d0",
            444: "a41a440a",
            492: "85fbb5df",
            535: "fe661613",
            556: "cf8a465c",
            568: "f7c894f8",
            588: "b3a93f18",
            617: "a6e1c638",
            634: "088a34f6",
            648: "8fd483c8",
            796: "05d1806e",
            797: "b3198b40",
            935: "6e7d206a",
            953: "69dda74f",
          }[e] +
          ".css"
        );
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.hmd = function (e) {
        return (
          (e = Object.create(e)),
          e.children || (e.children = []),
          Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function () {
              throw new Error(
                "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                  e.id
              );
            },
          }),
          e
        );
      };
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "apitor:";
      n.l = function (o, r, a, i) {
        if (e[o]) e[o].push(r);
        else {
          var l, c;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName("script"), s = 0;
              s < u.length;
              s++
            ) {
              var d = u[s];
              if (
                d.getAttribute("src") == o ||
                d.getAttribute("data-webpack") == t + a
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((c = !0),
            (l = document.createElement("script")),
            (l.charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + a),
            (l.src = o)),
            (e[o] = [r]);
          var m = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var r = e[o];
              if (
                (delete e[o],
                l.parentNode && l.parentNode.removeChild(l),
                r &&
                  r.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              m.bind(null, void 0, {
                type: "timeout",
                target: l,
              }),
              12e4
            );
          (l.onerror = m.bind(null, l.onerror)),
            (l.onload = m.bind(null, l.onload)),
            c && document.head.appendChild(l);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(e, "__esModule", {
            value: !0,
          });
      };
    })(),
    (function () {
      n.nmd = function (e) {
        return (e.paths = []), e.children || (e.children = []), e;
      };
    })(),
    (function () {
      n.p = "/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var e = function (e, t, n, o, r) {
            var a = document.createElement("link");
            (a.rel = "stylesheet"), (a.type = "text/css");
            var i = function (n) {
              if (((a.onerror = a.onload = null), "load" === n.type)) o();
              else {
                var i = n && n.type,
                  l = (n && n.target && n.target.href) || t,
                  c = new Error(
                    "Loading CSS chunk " +
                      e +
                      " failed.\n(" +
                      i +
                      ": " +
                      l +
                      ")"
                  );
                (c.name = "ChunkLoadError"),
                  (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.type = i),
                  (c.request = l),
                  a.parentNode && a.parentNode.removeChild(a),
                  r(c);
              }
            };
            return (
              (a.onerror = a.onload = i),
              (a.href = t),
              n
                ? n.parentNode.insertBefore(a, n.nextSibling)
                : document.head.appendChild(a),
              a
            );
          },
          t = function (e, t) {
            for (
              var n = document.getElementsByTagName("link"), o = 0;
              o < n.length;
              o++
            ) {
              var r = n[o],
                a = r.getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (a === e || a === t)) return r;
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
              (r = i[o]), (a = r.getAttribute("data-href"));
              if (a === e || a === t) return r;
            }
          },
          o = function (o) {
            return new Promise(function (r, a) {
              var i = n.miniCssF(o),
                l = n.p + i;
              if (t(i, l)) return r();
              e(o, l, null, r, a);
            });
          },
          r = {
            524: 0,
          };
        n.f.miniCss = function (e, t) {
          var n = {
            33: 1,
            99: 1,
            192: 1,
            244: 1,
            249: 1,
            260: 1,
            295: 1,
            444: 1,
            492: 1,
            535: 1,
            556: 1,
            568: 1,
            588: 1,
            617: 1,
            634: 1,
            648: 1,
            796: 1,
            797: 1,
            935: 1,
            953: 1,
          };
          r[e]
            ? t.push(r[e])
            : 0 !== r[e] &&
              n[e] &&
              t.push(
                (r[e] = o(e).then(
                  function () {
                    r[e] = 0;
                  },
                  function (t) {
                    throw (delete r[e], t);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var e = {
        524: 0,
      };
      (n.f.j = function (t, o) {
        var r = n.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) o.push(r[2]);
          else {
            var a = new Promise(function (n, o) {
              r = e[t] = [n, o];
            });
            o.push((r[2] = a));
            var i = n.p + n.u(t),
              l = new Error(),
              c = function (o) {
                if (n.o(e, t) && ((r = e[t]), 0 !== r && (e[t] = void 0), r)) {
                  var a = o && ("load" === o.type ? "missing" : o.type),
                    i = o && o.target && o.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = i),
                    r[1](l);
                }
              };
            n.l(i, c, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, o) {
          var r,
            a,
            i = o[0],
            l = o[1],
            c = o[2],
            u = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in l) n.o(l, r) && (n.m[r] = l[r]);
            if (c) var s = c(n);
          }
          for (t && t(o); u < i.length; u++)
            (a = i[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(s);
        },
        o = (self["webpackChunkapitor"] = self["webpackChunkapitor"] || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var o = n.O(void 0, [504], function () {
    return n(3969);
  });
  o = n.O(o);
})();
//# sourceMappingURL=app.25d63098.js.map
