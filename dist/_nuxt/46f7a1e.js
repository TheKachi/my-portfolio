(window.webpackJsonp = window.webpackJsonp || []).push([
  [5, 2, 3, 4],
  {
    261: function (t, e, n) {
      var content = n(264);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(76).default)("564660e4", content, !0, { sourceMap: !1 });
    },
    262: function (t, e, n) {
      var content = n(267);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(76).default)("57d552a4", content, !0, { sourceMap: !1 });
    },
    263: function (t, e, n) {
      "use strict";
      n(261);
    },
    264: function (t, e, n) {
      var l = n(75)(function (i) {
        return i[1];
      });
      l.push([
        t.i,
        ".min-height[data-v-6872e44c]{min-height:80vh}.min-20[data-v-6872e44c]{min-height:20vh}",
        "",
      ]),
        (l.locals = {}),
        (t.exports = l);
    },
    265: function (t) {
      t.exports = JSON.parse(
        '[{"id":"1","logo":"https://res.cloudinary.com/thekachi/image/upload/v1644194899/planvest_logo_l4yy6r.svg","title":"Planvest Admin","skills":["Vue","Vuex","Nuxt","Tailwind"],"github":"","website":"https://planvest-super-admin-frontend-ericee1022.vercel.app/signin","description":""},{"id":"2","logo":"https://res.cloudinary.com/thekachi/image/upload/v1644195037/Logoalaajo_qasqzy.svg","title":"Alaajo","skills":["Vue","Vuex","Nuxt","Bootstrap 5"],"github":"","website":"https://alaajo.com/","description":""},{"id":"3","logo":"https://res.cloudinary.com/thekachi/image/upload/v1644200424/Group_1_jszams.svg","title":"Yebox v2","skills":["Vue","Nuxt","SCSS"],"github":"","website":"https://www.yebox.io/","description":""},{"id":"4","logo":"https://res.cloudinary.com/thekachi/image/upload/v1644224045/my-logo_2_siwq41.svg","title":"My Portfolio","skills":["Vue","Nuxt","Tailwind"],"github":"https://github.com/TheKachi/my-portfolio.git","website":"https://thekachi.vercel.app","description":""}]'
      );
    },
    266: function (t, e, n) {
      "use strict";
      n(262);
    },
    267: function (t, e, n) {
      var l = n(75)(function (i) {
        return i[1];
      });
      l.push([t.i, ".w-custom{width:min(100%-4rem,20rem)}", ""]),
        (l.locals = {}),
        (t.exports = l);
    },
    268: function (t, e, n) {
      "use strict";
      n.r(e);
      var l = { name: "Hero" },
        r = (n(263), n(50)),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement;
            t._self._c;
            return t._m(0);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "section",
                { staticClass: "min-h-screen px-12 md:px-48 pt-40" },
                [
                  n(
                    "div",
                    {
                      staticClass:
                        "min-height flex flex-col justify-center items-stretch",
                    },
                    [
                      n("h1", { staticClass: "text-xl" }, [
                        t._v("Hi there, my name is"),
                      ]),
                      t._v(" "),
                      n(
                        "h2",
                        {
                          staticClass:
                            "text-brown font-bold text-4xl lg:text-6xl",
                        },
                        [n("span", {}, [t._v("Kachi ✨")])]
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "font-futuralight text-xl max-w-xl" },
                        [
                          n("p", [
                            t._v(
                              "\n        I'm a frontend developer from Lagos, Nigeria and I really enjoy\n        building digital products that scale, are innovative, and accessible\n        globally.\n      "
                            ),
                          ]),
                          t._v(" "),
                          n("p", { staticClass: "my-12" }, [
                            t._v("\n        I'm proficient in\n        "),
                            n("strong", [
                              t._v(
                                "Vue JS, Javascript, SCSS, HTML, Bootstrap, Tailwind"
                              ),
                            ]),
                            t._v("\n        e.t.c.\n      "),
                          ]),
                          t._v(" "),
                          n("p", { staticClass: "mb-120" }, [
                            t._v(
                              "\n        I'm constantly learning and recently, I've been trying my hands on\n        "
                            ),
                            n("strong", {}, [t._v("TypeScript")]),
                            t._v(" and\n        "),
                            n("strong", {}, [t._v("Solidity")]),
                            t._v(" .\n      "),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  t._v(" "),
                  n("div", { staticClass: "flex justify-between" }, [
                    n(
                      "a",
                      {
                        staticClass:
                          "underline underline-offset-8 decoration-brown",
                        attrs: {
                          href: "https://drive.google.com/file/d/1pcmaQB_0uvl1HvKuoYWgcHSesBu4RbUM/view?usp=sharing",
                          target: "blank",
                        },
                      },
                      [t._v("Download my CV?")]
                    ),
                    t._v(" "),
                    n("div", [t._v("scroll ↓")]),
                  ]),
                ]
              );
            },
          ],
          !1,
          null,
          "6872e44c",
          null
        );
      e.default = component.exports;
    },
    269: function (t, e, n) {
      "use strict";
      n.r(e);
      n(39);
      var l = n(265),
        r = {
          name: "Portfolio",
          data: function () {
            return { projects: l };
          },
          computed: {
            reverseItems: function () {
              return this.projects.slice().reverse();
            },
          },
        },
        o = (n(266), n(50)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              { staticClass: "bg-white-light px-12 md:px-180 py-60" },
              [
                n(
                  "h2",
                  {
                    staticClass:
                      "mb-48 text-3xl text-brown text-center capitalize",
                  },
                  [t._v("\n    Some real world Things I've built\n  ")]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "grid lg:grid-cols-2 gap-32 max-w-screen-sm mx-auto px-16",
                  },
                  t._l(t.projects, function (e) {
                    return n(
                      "div",
                      { key: e.id, staticClass: "col rounded shadow-custom" },
                      [
                        n("div", { staticClass: "bg-light p-lg-48" }, [
                          n("img", {
                            staticClass: "w-80 h-80 mx-auto",
                            attrs: { src: e.logo, alt: e.logo + " Logo" },
                          }),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "bg-white p-24" }, [
                          n(
                            "div",
                            {
                              staticClass:
                                "flex justify-between items-center mb-32",
                            },
                            [
                              n(
                                "h5",
                                { staticClass: "text-xl text-brown font-bold" },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(e.title) +
                                      "\n          "
                                  ),
                                ]
                              ),
                              t._v(" "),
                              n("div", { staticClass: "flex gap-16" }, [
                                e.website
                                  ? n(
                                      "a",
                                      {
                                        attrs: {
                                          href: e.website,
                                          target: "blank",
                                        },
                                      },
                                      [
                                        n(
                                          "svg",
                                          {
                                            staticClass:
                                              "feather feather-external-link",
                                            attrs: {
                                              width: "12",
                                              height: "12",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              role: "img",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              stroke: "currentColor",
                                              "stroke-width": "2",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            },
                                          },
                                          [
                                            n("title", [t._v("External Link")]),
                                            t._v(" "),
                                            n("path", {
                                              attrs: {
                                                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                                              },
                                            }),
                                            t._v(" "),
                                            n("polyline", {
                                              attrs: {
                                                points: "15 3 21 3 21 9",
                                              },
                                            }),
                                            t._v(" "),
                                            n("line", {
                                              attrs: {
                                                x1: "10",
                                                y1: "14",
                                                x2: "21",
                                                y2: "3",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    )
                                  : t._e(),
                                t._v(" "),
                                e.github
                                  ? n(
                                      "a",
                                      {
                                        attrs: {
                                          href: e.github,
                                          target: "blank",
                                        },
                                      },
                                      [
                                        n(
                                          "svg",
                                          {
                                            staticClass:
                                              "feather feather-github",
                                            attrs: {
                                              width: "12",
                                              height: "12",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              role: "img",
                                              viewBox: "0 0 24 24",
                                              fill: "none",
                                              stroke: "currentColor",
                                              "stroke-width": "2",
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                            },
                                          },
                                          [
                                            n("title", [t._v("GitHub")]),
                                            t._v(" "),
                                            n("path", {
                                              attrs: {
                                                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                            ]
                          ),
                          t._v(" "),
                          e.skills
                            ? n(
                                "ul",
                                {
                                  staticClass:
                                    "flex gap-16 text-xs text-brown font-futuralight list-none list-inside",
                                },
                                t._l(e.skills, function (e, i) {
                                  return n("li", { key: i }, [t._v(t._s(e))]);
                                }),
                                0
                              )
                            : t._e(),
                        ]),
                      ]
                    );
                  }),
                  0
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    270: function (t, e, n) {
      "use strict";
      n.r(e);
      var l = {},
        r = n(50),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement;
            t._self._c;
            return t._m(0);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", [
                n(
                  "section",
                  {
                    staticClass: "px-40 pt-80 pb-80 flex flex-col items-center",
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass:
                          "mb-48 text-3xl text-brown text-center capitalize",
                      },
                      [t._v("\n      Get In Touch?\n    ")]
                    ),
                    t._v(" "),
                    n(
                      "ul",
                      {
                        staticClass:
                          "flex flex-col gap-20 text-base font-futuralight underline underline-offset-4",
                      },
                      [
                        n("li", [
                          n(
                            "a",
                            {
                              attrs: {
                                href: "mailto:nzebenflorence@gmail.com",
                                target: "blank",
                              },
                            },
                            [t._v("Email")]
                          ),
                        ]),
                        t._v(" "),
                        n("li", [
                          n(
                            "a",
                            {
                              attrs: {
                                href: "https://twitter.com/thekachii",
                                target: "blank",
                              },
                            },
                            [t._v("Twitter")]
                          ),
                        ]),
                        t._v(" "),
                        n("li", [
                          n(
                            "a",
                            {
                              attrs: {
                                href: "https://github.com/thekachi",
                                target: "blank",
                              },
                            },
                            [t._v("Github")]
                          ),
                        ]),
                        t._v(" "),
                        n("li", [
                          n(
                            "a",
                            {
                              attrs: {
                                href: "https://linkedin.com/in/thekachi",
                                target: "blank",
                              },
                            },
                            [t._v("LinkedIn")]
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                n("footer", { staticClass: "px-40" }, [
                  n("hr"),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "py-16 text-xs text-brown text-center" },
                    [
                      t._v(
                        "\n      © 2022 Website designed & built by\n      "
                      ),
                      n("a", { attrs: { href: "" } }, [
                        t._v("Onyedikachi Nze-Ben"),
                      ]),
                      t._v(" ✌🏽\n    "),
                    ]
                  ),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    282: function (t, e, n) {
      "use strict";
      n.r(e);
      var l = { name: "IndexPage" },
        r = n(50),
        component = Object(r.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              [
                t._m(0),
                t._v(" "),
                n("Hero"),
                t._v(" "),
                n("Portfolio"),
                t._v(" "),
                n("Contact"),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  staticClass:
                    "flex justify-between items-center px-12 md:px-48",
                },
                [n("span", { staticClass: "text-3xl" }, [t._v("🦄")])]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        Hero: n(268).default,
        Portfolio: n(269).default,
        Contact: n(270).default,
      });
    },
  },
]);
