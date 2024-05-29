"use strict";
(self["webpackChunkapitor"] = self["webpackChunkapitor"] || []).push([
  [568],
  {
    3263: function (t, o, a) {
      a.d(o, {
        A: function () {
          return m;
        },
      });
      var s = function () {
          var t = this,
            o = t._self._c;
          return o(
            "div",
            {
              staticClass: "hello",
            },
            [
              o(
                "div",
                {
                  staticClass: "home",
                },
                [
                  o("img", {
                    staticClass: "home_img",
                    attrs: {
                      src: a(5664),
                      alt: "",
                    },
                  }),
                  o(
                    "div",
                    {
                      staticClass: "home_text",
                    },
                    [t._v(t._s(t.$t("footer.Follow")))]
                  ),
                  o(
                    "div",
                    {
                      staticClass: "home_cen",
                    },
                    [
                      o("img", {
                        staticClass: "home_bom_img",
                        attrs: {
                          src: a(3485),
                          alt: "",
                        },
                        on: {
                          click: function (o) {
                            return t.homeClicks(1);
                          },
                        },
                      }),
                      o("img", {
                        staticClass: "home_bom_img",
                        attrs: {
                          src: a(6804),
                          alt: "",
                        },
                        on: {
                          click: function (o) {
                            return t.homeClicks(2);
                          },
                        },
                      }),
                      o("img", {
                        staticClass: "home_bom_img",
                        attrs: {
                          src: a(2099),
                          alt: "",
                        },
                        on: {
                          click: function (o) {
                            return t.homeClicks(3);
                          },
                        },
                      }),
                    ]
                  ),
                  t._l(t.list, function (s, i) {
                    return o(
                      "div",
                      {
                        key: i,
                        staticStyle: {
                          width: "100%",
                        },
                        on: {
                          click: t.toTop,
                        },
                      },
                      [
                        o(
                          "router-link",
                          {
                            staticClass: "home_box",
                            attrs: {
                              to: s.to,
                            },
                          },
                          [
                            o(
                              "div",
                              {
                                staticClass: "home_box_title",
                              },
                              [t._v(t._s(s.name))]
                            ),
                            o("img", {
                              staticClass: "img_nav",
                              attrs: {
                                src: a(5777),
                                alt: "",
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    );
                  }),
                  o(
                    "div",
                    {
                      staticClass: "home_bom",
                    },
                    [
                      o(
                        "router-link",
                        {
                          staticClass: "home_bom_cem",
                          attrs: {
                            to: {
                              path: "/referral",
                            },
                          },
                        },
                        [
                          o(
                            "div",
                            {
                              staticClass: "home_bom_cem",
                            },
                            [t._v(t._s(t.$t("footer.title2")))]
                          ),
                        ]
                      ),
                      o("div", {
                        staticClass: "home_lint",
                      }),
                      o(
                        "router-link",
                        {
                          staticClass: "home_bom_cem",
                          attrs: {
                            to: {
                              path: "/terms",
                            },
                          },
                        },
                        [
                          o(
                            "div",
                            {
                              staticClass: "home_bom_cem",
                            },
                            [t._v(t._s(t.$t("footer.title3")))]
                          ),
                        ]
                      ),
                      o("div", {
                        staticClass: "home_lint",
                      }),
                      o(
                        "router-link",
                        {
                          staticClass: "home_bom_cem",
                          attrs: {
                            to: {
                              path: "/legal",
                            },
                          },
                        },
                        [
                          o(
                            "div",
                            {
                              staticClass: "home_bom_cem",
                            },
                            [t._v(t._s(t.$t("footer.title4")))]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  o(
                    "div",
                    {
                      staticClass: "home_bommit",
                    },
                    [t._v(t._s(t.$t("footer.title")))]
                  ),
                ],
                2
              ),
            ]
          );
        },
        i = [],
        e = a(8737),
        r = {
          props: [],
          data() {
            return {
              list: [
                {
                  name: this.$t("footer.name"),
                  to: {
                    path: "/products",
                  },
                },
                {
                  name: this.$t("footer.name2"),
                  to: {
                    path: "/app",
                  },
                },
                {
                  name: this.$t("footer.name3"),
                  to: {
                    path: "/support",
                  },
                },
                {
                  name: this.$t("footer.name4"),
                  to: {
                    path: "/about",
                  },
                },
              ],
              facebook: "",
              instagram: "",
              youtube: "",
            };
          },
          mounted() {
            this.getList(), this.toTop();
          },
          methods: {
            homeClicks(t) {
              1 == t
                ? (window.location.href = this.facebook)
                : 2 == t
                ? (window.location.href = this.instagram)
                : 3 == t && (window.location.href = this.youtube);
            },
            getList() {
              let t = localStorage.getItem("type");
              (0, e.oc)({
                id: 2,
                type: t,
              }).then((t) => {
                (this.facebook = t.data.facebook),
                  (this.instagram = t.data.instagram),
                  (this.youtube = t.data.youtube);
              });
            },
            toTop() {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto",
              });
            },
          },
        },
        l = r,
        n = a(1656),
        c = (0, n.A)(l, s, i, !1, null, "363d1ffa", null),
        m = c.exports;
    },
    7241: function (t, o, a) {
      a.d(o, {
        A: function () {
          return m;
        },
      });
      var s = function () {
          var t = this,
            o = t._self._c;
          return o(
            "div",
            {
              staticClass: "hello",
              style:
                1 == t.back ? "background: #1D1E1F;" : "background: #F5F6F7;",
            },
            [
              1 == t.back
                ? o(
                    "div",
                    {
                      staticClass: "hello_box",
                    },
                    [
                      o("img", {
                        staticClass: "hello_img",
                        attrs: {
                          src: a(4994),
                          alt: "",
                        },
                      }),
                      o("img", {
                        staticClass: "hello_image",
                        attrs: {
                          src: a(9917),
                          alt: "",
                        },
                        on: {
                          click: t.showPopup,
                        },
                      }),
                    ]
                  )
                : t._e(),
              2 == t.back
                ? o(
                    "div",
                    {
                      staticClass: "hello_box",
                    },
                    [
                      o("img", {
                        staticClass: "hello_img",
                        attrs: {
                          src: a(5664),
                          alt: "",
                        },
                        on: {
                          click: t.homeClick,
                        },
                      }),
                      o("img", {
                        staticClass: "hello_image",
                        attrs: {
                          src: a(3757),
                          alt: "",
                        },
                        on: {
                          click: t.showPopup,
                        },
                      }),
                    ]
                  )
                : t._e(),
              o(
                "van-overlay",
                {
                  staticStyle: {
                    background: "#1D1E1F",
                  },
                  attrs: {
                    show: t.show,
                  },
                },
                [
                  o(
                    "div",
                    {
                      staticClass: "wrapper",
                      staticStyle: {
                        "z-index": "9999",
                      },
                    },
                    [
                      o("img", {
                        staticClass: "wrapper_img",
                        attrs: {
                          src: a(3842),
                          alt: "",
                        },
                        on: {
                          click: function (o) {
                            t.show = !1;
                          },
                        },
                      }),
                      o(
                        "div",
                        {
                          staticClass: "wrapper_box",
                        },
                        [
                          t._l(t.list, function (a, s) {
                            return o(
                              "div",
                              {
                                key: s,
                                staticClass: "wrapper_title",
                                on: {
                                  click: function (o) {
                                    return (
                                      o.stopPropagation(),
                                      t.toTop.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [
                                o(
                                  "router-link",
                                  {
                                    staticClass: "wrapper_title",
                                    attrs: {
                                      to: a.to,
                                    },
                                  },
                                  [t._v(t._s(a.name))]
                                ),
                              ],
                              1
                            );
                          }),
                          o(
                            "div",
                            {
                              staticClass: "wrapper_maed",
                            },
                            [
                              o("img", {
                                staticClass: "home_bom_img",
                                attrs: {
                                  src: a(5321),
                                  alt: "",
                                },
                                on: {
                                  click: function (o) {
                                    return t.homeClicks(1);
                                  },
                                },
                              }),
                              o("img", {
                                staticClass: "home_bom_img",
                                attrs: {
                                  src: a(9072),
                                  alt: "",
                                },
                                on: {
                                  click: function (o) {
                                    return t.homeClicks(2);
                                  },
                                },
                              }),
                              o("img", {
                                staticClass: "home_bom_img",
                                attrs: {
                                  src: a(1295),
                                  alt: "",
                                },
                                on: {
                                  click: function (o) {
                                    return t.homeClicks(3);
                                  },
                                },
                              }),
                            ]
                          ),
                          o(
                            "div",
                            {
                              staticClass: "wrapper_maed",
                              staticStyle: {
                                "margin-top": "20px",
                              },
                            },
                            [
                              o("img", {
                                staticClass: "home_bom_img",
                                staticStyle: {
                                  "margin-right": "6px",
                                },
                                attrs: {
                                  src: a(2278),
                                  alt: "",
                                },
                              }),
                              o(
                                "div",
                                {
                                  staticClass: "wrapper_med",
                                  on: {
                                    click: t.wrapperMed,
                                  },
                                },
                                [
                                  t._v(
                                    " " +
                                      t._s(
                                        1 == t.pitchShow
                                          ? t.$t("footer.nav")
                                          : t.$t("footer.nav2")
                                      ) +
                                      " "
                                  ),
                                  o("img", {
                                    attrs: {
                                      src: t.switchover ? t.url1 : t.url2,
                                      alt: "",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          t.switchover
                            ? t._e()
                            : o(
                                "div",
                                {
                                  staticStyle: {
                                    "margin-top": "12px",
                                  },
                                },
                                t._l(t.navBox, function (s, i) {
                                  return o(
                                    "div",
                                    {
                                      key: i,
                                      staticClass: "wrapper_med_box",
                                      on: {
                                        click: function (o) {
                                          return t.switchover2(i);
                                        },
                                      },
                                    },
                                    [
                                      o(
                                        "p",
                                        {
                                          style:
                                            0 == i
                                              ? "font-family: font-name1;"
                                              : "font-family: font-name2;",
                                        },
                                        [t._v(t._s(s))]
                                      ),
                                      t.pitchShow == i + 1
                                        ? o("img", {
                                            attrs: {
                                              src: a(8474),
                                              alt: "",
                                            },
                                          })
                                        : t._e(),
                                    ]
                                  );
                                }),
                                0
                              ),
                        ],
                        2
                      ),
                    ]
                  ),
                ]
              ),
              o(
                "van-overlay",
                {
                  staticStyle: {
                    background: "#F5F6F7",
                  },
                  attrs: {
                    show: t.show2,
                  },
                },
                [
                  o(
                    "div",
                    {
                      staticClass: "wrapper",
                      staticStyle: {
                        "z-index": "9999",
                      },
                    },
                    [
                      o("img", {
                        staticClass: "wrapper_img",
                        attrs: {
                          src: a(1147),
                          alt: "",
                        },
                        on: {
                          click: function (o) {
                            t.show2 = !1;
                          },
                        },
                      }),
                      o(
                        "div",
                        {
                          staticClass: "wrapper_box",
                        },
                        [
                          t._l(t.list, function (a, s) {
                            return o(
                              "div",
                              {
                                key: s,
                                staticClass: "wrapper_title",
                                on: {
                                  click: function (o) {
                                    return (
                                      o.stopPropagation(),
                                      t.toTop.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [
                                o(
                                  "router-link",
                                  {
                                    staticClass: "wrapper_title",
                                    staticStyle: {
                                      color: "#1D1E1F",
                                    },
                                    attrs: {
                                      to: a.to,
                                    },
                                  },
                                  [t._v(t._s(a.name))]
                                ),
                              ],
                              1
                            );
                          }),
                          o(
                            "div",
                            {
                              staticClass: "wrapper_maed",
                            },
                            [
                              o("img", {
                                staticClass: "home_bom_img",
                                attrs: {
                                  src: a(3485),
                                  alt: "",
                                },
                                on: {
                                  click: function (o) {
                                    return t.homeClicks(1);
                                  },
                                },
                              }),
                              o("img", {
                                staticClass: "home_bom_img",
                                attrs: {
                                  src: a(6804),
                                  alt: "",
                                },
                                on: {
                                  click: function (o) {
                                    return t.homeClicks(2);
                                  },
                                },
                              }),
                              o("img", {
                                staticClass: "home_bom_img",
                                attrs: {
                                  src: a(2099),
                                  alt: "",
                                },
                                on: {
                                  click: function (o) {
                                    return t.homeClicks(3);
                                  },
                                },
                              }),
                            ]
                          ),
                          o(
                            "div",
                            {
                              staticClass: "wrapper_maed",
                              staticStyle: {
                                "margin-top": "20px",
                              },
                            },
                            [
                              o("img", {
                                staticClass: "home_bom_img",
                                staticStyle: {
                                  "margin-right": "6px",
                                },
                                attrs: {
                                  src: a(6890),
                                  alt: "",
                                },
                              }),
                              o(
                                "div",
                                {
                                  staticClass: "wrapper_med",
                                  staticStyle: {
                                    color: "#1D1E1F",
                                  },
                                  on: {
                                    click: t.wrapperMed,
                                  },
                                },
                                [
                                  t._v(
                                    " " +
                                      t._s(
                                        1 == t.pitchShow
                                          ? t.$t("footer.nav")
                                          : t.$t("footer.nav2")
                                      ) +
                                      " "
                                  ),
                                  o("img", {
                                    attrs: {
                                      src: t.switchover ? t.url3 : t.url4,
                                      alt: "",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          t.switchover
                            ? t._e()
                            : o(
                                "div",
                                {
                                  staticStyle: {
                                    "margin-top": "12px",
                                  },
                                },
                                t._l(t.navBox, function (s, i) {
                                  return o(
                                    "div",
                                    {
                                      key: i,
                                      staticClass: "wrapper_med_box",
                                      staticStyle: {
                                        "border-bottom": "1px solid #DCDDDE",
                                      },
                                      on: {
                                        click: function (o) {
                                          return t.switchover2(i);
                                        },
                                      },
                                    },
                                    [
                                      o(
                                        "p",
                                        {
                                          staticStyle: {
                                            color: "#1D1E1F",
                                          },
                                          style:
                                            0 == i
                                              ? "font-family: font-name1;"
                                              : "font-family: font-name2;",
                                        },
                                        [t._v(t._s(s))]
                                      ),
                                      t.pitchShow == i + 1
                                        ? o("img", {
                                            attrs: {
                                              src: a(5099),
                                              alt: "",
                                            },
                                          })
                                        : t._e(),
                                    ]
                                  );
                                }),
                                0
                              ),
                        ],
                        2
                      ),
                    ]
                  ),
                ]
              ),
            ],
            1
          );
        },
        i = [],
        e = (a(4114), a(8737)),
        r = {
          name: "HelloWorld",
          props: ["back"],
          data() {
            return {
              show: !1,
              show2: !1,
              pitchShow: 0,
              list: [
                {
                  name: this.$t("footer.name5"),
                  to: {
                    path: "/",
                  },
                },
                {
                  name: this.$t("footer.name"),
                  to: {
                    path: "/products",
                  },
                },
                {
                  name: this.$t("footer.name2"),
                  to: {
                    path: "/app",
                  },
                },
                {
                  name: this.$t("footer.name3"),
                  to: {
                    path: "/support",
                  },
                },
                {
                  name: this.$t("footer.name4"),
                  to: {
                    path: "/about",
                  },
                },
              ],
              url1: a(2888),
              url2: a(4120),
              url3: a(5821),
              url4: a(5842),
              switchover: !0,
              navBox: [this.$t("footer.nav"), this.$t("footer.nav2")],
              facebook: "",
              instagram: "",
              youtube: "",
              windowWidth: window.innerWidth,
            };
          },
          mounted() {
            let t = this;
            t.getList(),
              (t.pitchShow = localStorage.getItem("type")),
              window.addEventListener("resize", t.handleResize);
          },
          beforeDestroy() {
            window.removeEventListener("resize", this.handleResize);
          },
          methods: {
            switchover2(t) {
              window.location.href =
                0 == t
                  ? "http://www.apitor.com" +
                    window.location.pathname +
                    window.location.search
                  : "http://www.apitor.co.jp" +
                    window.location.pathname +
                    window.location.search;
            },
            homeClicks(t) {
              1 == t
                ? (window.location.href = this.facebook)
                : 2 == t
                ? (window.location.href = this.instagram)
                : 3 == t && (window.location.href = this.youtube);
            },
            handleResize() {
              (this.windowWidth = window.innerWidth), this.fullClick();
            },
            fullClick() {
              this.windowWidth > 750 && window.location.reload();
            },
            getList() {
              let t = localStorage.getItem("type");
              (0, e.oc)({
                id: 2,
                type: t,
              }).then((t) => {
                (this.facebook = t.data.facebook),
                  (this.instagram = t.data.instagram),
                  (this.youtube = t.data.youtube);
              });
            },
            showPopup() {
              1 == this.back ? (this.show = !0) : (this.show2 = !0);
            },
            toTop() {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto",
              }),
                (this.show = !1),
                (this.show2 = !1);
            },
            homeClick() {
              this.$router.push({
                path: "/",
              });
            },
            wrapperMed() {
              this.switchover = !this.switchover;
            },
            pitchUp(t) {
              t != this.pitchShow &&
                ("en_US" == this.$i18n.locale
                  ? (localStorage.setItem("language", "ja_CN"),
                    localStorage.setItem("type", 2))
                  : (localStorage.setItem("language", "en_US"),
                    localStorage.setItem("type", 1)),
                this.$router.go(0));
            },
          },
        },
        l = r,
        n = a(1656),
        c = (0, n.A)(l, s, i, !1, null, "47be25cb", null),
        m = c.exports;
    },
    568: function (t, o, a) {
      a.r(o),
        a.d(o, {
          default: function () {
            return h;
          },
        });
      var s = function () {
          var t = this,
            o = t._self._c;
          return o(
            "div",
            {
              staticClass: "home",
            },
            [
              o(
                "div",
                {
                  staticClass: "home_boxs",
                },
                [
                  o("top", {
                    attrs: {
                      id: "boxs",
                      back: 1,
                    },
                  }),
                ],
                1
              ),
              o(
                "div",
                {
                  staticClass: "home_left",
                },
                [
                  o("iframe", {
                    staticClass: "home_img",
                    attrs: {
                      src: t.src,
                      frameborder: "0",
                    },
                  }),
                  o("div", {
                    staticClass: "home_top",
                    domProps: {
                      innerHTML: t._s(t.main.first_title),
                    },
                  }),
                  o("div", {
                    staticClass: "home_com",
                    domProps: {
                      innerHTML: t._s(t.main.first_content),
                    },
                  }),
                  o(
                    "a",
                    {
                      attrs: {
                        href: t.main.first_learn_more,
                      },
                    },
                    [
                      o(
                        "div",
                        {
                          staticClass: "home_bom",
                          on: {
                            click: t.homeClick,
                          },
                        },
                        [
                          o("p", [t._v(t._s(t.$t("home.name")))]),
                          o("img", {
                            attrs: {
                              src: a(4649),
                              alt: "",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                  o(
                    "div",
                    {
                      staticClass: "name_box",
                    },
                    [
                      o("img", {
                        staticClass: "img_nav",
                        attrs: {
                          src: a(7427),
                          alt: "",
                        },
                      }),
                      t.videoStatus
                        ? o("video", {
                            attrs: {
                              muted: "true",
                              loop: "true",
                              "webkit-playsinline": "true",
                              "x5-video-type": "h5",
                              autoplay: "",
                              width: "101%",
                              poster: "",
                              oncontextmenu: "return false",
                              height: "auto",
                              type: "video/mp4",
                              src: t.autoplays,
                            },
                            domProps: {
                              muted: !0,
                            },
                          })
                        : t._e(),
                      t.videoStatus
                        ? t._e()
                        : o(
                            "div",
                            {
                              staticClass: "player-container",
                            },
                            [
                              o("video-player", {
                                ref: "videoPlayer",
                                staticClass: "video-player vjs-custom-skin",
                                attrs: {
                                  "webkit-playsinline": "true",
                                  "x5-video-player-type": "h5",
                                  playsinline: "true",
                                  options: t.playerOptions,
                                },
                              }),
                            ],
                            1
                          ),
                    ]
                  ),
                  o(
                    "div",
                    {
                      staticClass: "home_cem",
                      staticStyle: {
                        background: "#DBFFED",
                        "margin-bottom": "0.23rem",
                        "margin-top": "-0.05rem",
                        "z-index": "99",
                      },
                      on: {
                        click: function (o) {
                          return t.homeBoxs(t.homeBox.id);
                        },
                      },
                    },
                    [
                      o(
                        "div",
                        {
                          staticClass: "home_text",
                        },
                        [t._v(t._s(t.homeBox.name))]
                      ),
                      o(
                        "div",
                        {
                          staticClass: "home_text_two",
                        },
                        [t._v(t._s(t.homeBox.content))]
                      ),
                      o(
                        "div",
                        {
                          staticClass: "home_text_s",
                        },
                        [
                          o(
                            "div",
                            {
                              staticClass: "home_text_left",
                              staticStyle: {
                                border: "0.02rem solid #1D1E1F",
                              },
                            },
                            [t._v(t._s(t.$t("home.name")))]
                          ),
                          o(
                            "div",
                            {
                              staticClass: "home_text_left",
                              staticStyle: {
                                border: "0.02rem solid #1D1E1F",
                              },
                              on: {
                                click: function (o) {
                                  return (
                                    o.stopPropagation(),
                                    t.navClicks(t.homeBox.buy_url)
                                  );
                                },
                              },
                            },
                            [t._v(t._s(t.$t("home.Buy")))]
                          ),
                        ]
                      ),
                    ]
                  ),
                  t._l(t.list, function (a, s) {
                    return o(
                      "div",
                      {
                        key: s,
                        staticClass: "main_box",
                      },
                      [
                        2 == s
                          ? o("div", {
                              staticClass: "main_title",
                              domProps: {
                                innerHTML: t._s(t.main.title1),
                              },
                            })
                          : t._e(),
                        o(
                          "div",
                          {
                            staticClass: "main",
                            style:
                              0 == s || 3 == s
                                ? "background: linear-gradient( 180deg, rgba(245,246,247) 0%, rgba(245,246,247) 50% , rgba(0,0,0,0.15) 100%);"
                                : "background: linear-gradient( 180deg, rgba(0,0,0,0.15) 0%, rgba(245,246,247) 50% , rgba(245,246,247) 100%)",
                            on: {
                              click: function (o) {
                                return t.homeBoxs(a.id);
                              },
                            },
                          },
                          [
                            o("img", {
                              staticClass: "main_img",
                              attrs: {
                                src: a.small_image_h5,
                                alt: "",
                              },
                            }),
                            o(
                              "div",
                              {
                                staticClass: "home_cem",
                                staticStyle: {
                                  position: "absolute",
                                  left: "0",
                                  top: "0",
                                },
                                style:
                                  0 == s || 3 == s
                                    ? "color:#1D1E1F;"
                                    : "color:#fff;",
                              },
                              [
                                o(
                                  "div",
                                  {
                                    staticClass: "home_text",
                                  },
                                  [t._v(t._s(a.name))]
                                ),
                                s > 1
                                  ? o(
                                      "div",
                                      {
                                        staticClass: "main_text3",
                                      },
                                      [t._v(t._s(t.$t("home.THE")))]
                                    )
                                  : t._e(),
                                o(
                                  "div",
                                  {
                                    staticClass: "home_text_two",
                                  },
                                  [t._v(t._s(a.content))]
                                ),
                                o(
                                  "div",
                                  {
                                    staticClass: "home_text_s",
                                  },
                                  [
                                    o(
                                      "div",
                                      {
                                        staticClass: "home_text_left",
                                        style:
                                          0 == s || 3 == s
                                            ? "border: 0.02rem solid #1D1E1F;"
                                            : " border: 0.02rem solid #fff;",
                                      },
                                      [t._v(t._s(t.$t("home.name")))]
                                    ),
                                    o(
                                      "div",
                                      {
                                        staticClass: "home_text_left",
                                        style:
                                          0 == s || 3 == s
                                            ? "border: 0.02rem solid #1D1E1F;"
                                            : " border: 0.02rem solid #fff;",
                                        on: {
                                          click: function (o) {
                                            return (
                                              o.stopPropagation(),
                                              t.navClicks(a.buy_url)
                                            );
                                          },
                                        },
                                      },
                                      [t._v(t._s(t.$t("home.Buy")))]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    );
                  }),
                  o(
                    "div",
                    {
                      staticClass: "main_box",
                    },
                    [
                      o("div", {
                        staticClass: "main_title",
                        domProps: {
                          innerHTML: t._s(t.main.title2),
                        },
                      }),
                      o(
                        "div",
                        {
                          staticClass: "main",
                          staticStyle: {
                            background: "#F58556",
                          },
                        },
                        [
                          o("img", {
                            staticClass: "main_img",
                            attrs: {
                              src: t.main.second_image_h5,
                              alt: "",
                            },
                          }),
                          o(
                            "div",
                            {
                              staticClass: "home_cem",
                              staticStyle: {
                                position: "absolute",
                                left: "0",
                                top: "0",
                                color: "#fff",
                              },
                            },
                            [
                              o("div", {
                                staticClass: "home_text",
                                domProps: {
                                  innerHTML: t._s(t.main.second_title),
                                },
                              }),
                              o("div", {
                                staticClass: "home_text_two",
                                domProps: {
                                  innerHTML: t._s(t.main.second_content),
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  o(
                    "div",
                    {
                      staticClass: "foot",
                    },
                    [
                      o(
                        "div",
                        {
                          staticClass: "home_cem",
                          staticStyle: {
                            color: "#fff",
                          },
                        },
                        [
                          o("div", {
                            staticClass: "home_text",
                            domProps: {
                              innerHTML: t._s(t.main.third_title),
                            },
                          }),
                          o("div", {
                            staticClass: "home_text_two",
                            domProps: {
                              innerHTML: t._s(t.main.third_content),
                            },
                          }),
                        ]
                      ),
                      o(
                        "a",
                        {
                          attrs: {
                            href: t.appStore,
                          },
                        },
                        [
                          o("img", {
                            staticClass: "foot_img",
                            attrs: {
                              src: a(5896),
                              alt: "",
                            },
                          }),
                        ]
                      ),
                      o(
                        "a",
                        {
                          attrs: {
                            href: t.googleUrl,
                          },
                        },
                        [
                          o("img", {
                            staticClass: "foot_img",
                            attrs: {
                              src: a(5272),
                              alt: "",
                            },
                          }),
                        ]
                      ),
                      o(
                        "div",
                        {
                          staticClass: "foot_image",
                        },
                        [
                          o("img", {
                            staticClass: "foot_nas",
                            attrs: {
                              src: a(3255),
                              alt: "",
                            },
                          }),
                          o("img", {
                            staticClass: "foot_nas2",
                            attrs: {
                              src: t.main.third_git,
                              alt: "",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ],
                2
              ),
              o("baseNav"),
              o(
                "van-overlay",
                {
                  staticStyle: {
                    background: "#fff",
                    overflow: "hidden",
                    "z-index": "9999999999",
                  },
                  attrs: {
                    show: t.showNav,
                  },
                },
                [
                  o(
                    "div",
                    {
                      staticClass: "name_box",
                      staticStyle: {
                        "z-index": "999999999",
                      },
                    },
                    [
                      o("iframe", {
                        staticClass: "name_img",
                        attrs: {
                          src: t.src1,
                          frameborder: "0",
                        },
                      }),
                    ]
                  ),
                ]
              ),
            ],
            1
          );
        },
        i = [],
        e = (a(4114), a(7241)),
        r = a(3263),
        l = a(8737),
        n = {
          data() {
            return {
              showNav: !0,
              playerOptions: {
                sources: [
                  {
                    src: "",
                    type: "video/mp4",
                  },
                ],
                loop: !0,
                autoplay: !0,
                muted: !0,
                controls: !1,
                poster: "",
              },
              list: [],
              homeBox: {
                name: "",
                content: "",
                id: "",
              },
              main: {},
              src: "/Loading.html",
              src1: "/Loading2.html",
              appStore: "",
              googleUrl: "",
              autoplays: "",
              videoStatus: !0,
            };
          },
          components: {
            top: e.A,
            baseNav: r.A,
          },
          created() {
            this.getList();
          },
          mounted() {
            this.appSource(),
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto",
              }),
              this.navList();
          },
          methods: {
            appSource() {
              const t = navigator.userAgent,
                o = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
              this.videoStatus = !o;
            },
            homesNav() {},
            navClicks(t) {
              window.location.href = t;
            },
            navList() {
              let t = localStorage.getItem("type");
              (0, l.qi)({
                type: t,
                id: 6,
              }).then((t) => {
                (this.appStore = t.data.app_store_url),
                  (this.googleUrl = t.data.google_url);
              });
            },
            homeClick() {
              this.$router.push({
                path: "/products",
              });
            },
            getList() {
              let t = localStorage.getItem("type");
              (0, l.oc)({
                id: 2,
                type: t,
              }).then((t) => {
                (this.main = t.data),
                  t.data.home_recommend.length > 0 &&
                    ((this.homeBox = t.data.home_recommend[0]),
                    t.data.home_recommend.length > 1 &&
                      ((this.playerOptions.sources[0].src =
                        t.data.home_recommend[0].video),
                      (this.autoplays = t.data.home_recommend[0].video)),
                    (this.showNav = !1)),
                  (this.list = t.data.home_recommend.slice(1));
              });
            },
            homeBoxs(t) {
              this.$router.push({
                path: "/detail",
                query: {
                  id: t,
                },
              });
            },
          },
        },
        c = n,
        m = a(1656),
        g = (0, m.A)(c, s, i, !1, null, "6423aa35", null),
        h = g.exports;
    },
    7427: function (t, o, a) {
      t.exports = a.p + "img/img.1845f100.png";
    },
    3255: function (t, o, a) {
      t.exports = a.p + "img/img_home08_FreeApp-phone_2x.8115b07a.png";
    },
    5896: function (t) {
      t.exports =
        "data:image/png;base64,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";
    },
    5272: function (t) {
      t.exports =
        "data:image/png;base64,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";
    },
    4649: function (t) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAAAXNSR0IArs4c6QAAALFJREFUOE+V08sRgjAUheE/IwXYkVoAM3SgLViRdgAr1tiBdpIC1DhhCAbyuIH1+cLh5qJMw543LV+uqueJ8ChTcwfOgObDSUIWXIDbdLCIlA1uQSPYgmZQihagBAVAQlGQQ0mQRNLNmpoBOEy5h/QGtwVgeFFxzH1DGO7QqSlFw7ZW7B6S4QB4m/vv3KH9wfi7lD3ZIbetReGxUkmNRaX5X3BzXnVeX6yr1LBjUELY4h9qsnX6JUyfogAAAABJRU5ErkJggg==";
    },
  },
]);
//# sourceMappingURL=568.c23e5a71.js.map
