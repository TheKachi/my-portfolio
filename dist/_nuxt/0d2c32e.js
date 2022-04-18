(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    262: function (t, e, o) {
      var content = o(267);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(76).default)("57d552a4", content, !0, { sourceMap: !1 });
    },
    265: function (t) {
      t.exports = JSON.parse(
        '[{"id":"1","logo":"https://res.cloudinary.com/thekachi/image/upload/v1644194899/planvest_logo_l4yy6r.svg","title":"Planvest Admin","skills":["Vue","Vuex","Nuxt","Tailwind"],"github":"","website":"https://planvest-super-admin-frontend-ericee1022.vercel.app/signin","description":""},{"id":"2","logo":"https://res.cloudinary.com/thekachi/image/upload/v1644195037/Logoalaajo_qasqzy.svg","title":"Alaajo","skills":["Vue","Vuex","Nuxt","Bootstrap 5"],"github":"","website":"https://alaajo.com/","description":""},{"id":"3","logo":"https://res.cloudinary.com/thekachi/image/upload/v1644200424/Group_1_jszams.svg","title":"Yebox v2","skills":["Vue","Nuxt","SCSS"],"github":"","website":"https://www.yebox.io/","description":""},{"id":"4","logo":"https://res.cloudinary.com/thekachi/image/upload/v1644224045/my-logo_2_siwq41.svg","title":"My Portfolio","skills":["Vue","Nuxt","Tailwind"],"github":"https://github.com/TheKachi/my-portfolio.git","website":"https://thekachi.vercel.app","description":""}]'
      );
    },
    266: function (t, e, o) {
      "use strict";
      o(262);
    },
    267: function (t, e, o) {
      var l = o(75)(function (i) {
        return i[1];
      });
      l.push([t.i, ".w-custom{width:min(100%-4rem,20rem)}", ""]),
        (l.locals = {}),
        (t.exports = l);
    },
    269: function (t, e, o) {
      "use strict";
      o.r(e);
      o(39);
      var l = o(265),
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
        n = (o(266), o(50)),
        component = Object(n.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "section",
              { staticClass: "bg-white-light px-12 md:px-180 py-60" },
              [
                o(
                  "h2",
                  {
                    staticClass:
                      "mb-48 text-3xl text-brown text-center capitalize",
                  },
                  [t._v("\n    Some real world Things I've built\n  ")]
                ),
                t._v(" "),
                o(
                  "div",
                  {
                    staticClass:
                      "grid lg:grid-cols-2 gap-32 max-w-screen-sm mx-auto px-16",
                  },
                  t._l(t.projects, function (e) {
                    return o(
                      "div",
                      { key: e.id, staticClass: "col rounded shadow-custom" },
                      [
                        o("div", { staticClass: "bg-light p-lg-48" }, [
                          o("img", {
                            staticClass: "w-80 h-80 mx-auto",
                            attrs: { src: e.logo, alt: e.logo + " Logo" },
                          }),
                        ]),
                        t._v(" "),
                        o("div", { staticClass: "bg-white p-24" }, [
                          o(
                            "div",
                            {
                              staticClass:
                                "flex justify-between items-center mb-32",
                            },
                            [
                              o(
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
                              o("div", { staticClass: "flex gap-16" }, [
                                e.website
                                  ? o(
                                      "a",
                                      {
                                        attrs: {
                                          href: e.website,
                                          target: "blank",
                                        },
                                      },
                                      [
                                        o(
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
                                            o("title", [t._v("External Link")]),
                                            t._v(" "),
                                            o("path", {
                                              attrs: {
                                                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                                              },
                                            }),
                                            t._v(" "),
                                            o("polyline", {
                                              attrs: {
                                                points: "15 3 21 3 21 9",
                                              },
                                            }),
                                            t._v(" "),
                                            o("line", {
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
                                  ? o(
                                      "a",
                                      {
                                        attrs: {
                                          href: e.github,
                                          target: "blank",
                                        },
                                      },
                                      [
                                        o(
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
                                            o("title", [t._v("GitHub")]),
                                            t._v(" "),
                                            o("path", {
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
                            ? o(
                                "ul",
                                {
                                  staticClass:
                                    "flex gap-16 text-xs text-brown font-futuralight list-none list-inside",
                                },
                                t._l(e.skills, function (e, i) {
                                  return o("li", { key: i }, [t._v(t._s(e))]);
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
  },
]);
