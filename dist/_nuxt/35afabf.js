(window.webpackJsonp = window.webpackJsonp || []).push([
  [13, 3, 4, 6, 9, 11],
  {
    303: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = r(359),
        n = r(362),
        l = r(363),
        c = {
          data: function () {
            return {};
          },
          props: {
            slides: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
        },
        d = r(26),
        component = Object(d.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", [
              r(
                "div",
                { staticClass: "block md:hidden -mx-[10px]" },
                [
                  r(
                    o.a,
                    { staticClass: "h-[210px]" },
                    [
                      r(
                        n.a,
                        {
                          attrs: {
                            cycle: "",
                            interval: "3000",
                            height: "200",
                            "hide-delimiter-background": "",
                          },
                        },
                        t._l(t.slides, function (t, i) {
                          return r(l.a, {
                            key: i,
                            staticClass: "h-full w-full object-contain",
                            attrs: { src: t.src },
                          });
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              t._v(" "),
              r(
                "div",
                { staticClass: "hidden md:block" },
                [
                  r(
                    o.a,
                    { staticClass: "h-[410px]" },
                    [
                      r(
                        n.a,
                        {
                          attrs: {
                            cycle: "",
                            interval: "3000",
                            height: "400",
                            "hide-delimiter-background": "",
                          },
                        },
                        t._l(t.slides, function (t, i) {
                          return r(l.a, {
                            key: i,
                            staticClass: "h-full w-full object-contain",
                            attrs: { src: t.src },
                          });
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    305: function (t) {
      t.exports = JSON.parse(
        '[{"id":"6","logo":"https://res.cloudinary.com/thekachi/image/upload/v1675598875/inferus-hero_blpsfq.png","title":"inferus","skills":["React","Next.js","Tailwind","RainbowKit"],"github":"","website":"https://www.inferus.xyz/","description":"A wallet aggregation tool that simplifies the crypto payment process by allowing users to aggregate wallet addresses from existing wallets and exchanges","tag":"#055DF5","slug":"inferus","slides":[{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675598875/inferus-hero_blpsfq.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675642814/Inferus-1_qilqir.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675642781/Screen_Shot_2023-02-01_at_9.39.18_AM_dsewnw.png"}]},{"id":"5","logo":"https://res.cloudinary.com/thekachi/image/upload/v1675598947/prospero-new_um4htr.png","title":"Prospero","skills":["Vue 3","Composition API","Tailwind","Ethers.js"],"github":"","website":"https://prospero-three.vercel.app/","description":"A user-friendly, decentralized(defi) portfolio manager for investing, and managing crypto assets","tag":"#00ff00","slug":"prospero","slides":[{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675598947/prospero-new_um4htr.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675642226/Screen_Shot_2023-02-06_at_1.09.37_AM_c0vleo.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675642228/Screen_Shot_2023-02-06_at_1.09.13_AM_to6dw0.png"}]},{"id":"4","logo":"https://res.cloudinary.com/thekachi/image/upload/v1650134832/Screen_Shot_2022-04-16_at_7.46.15_PM_gl2q4g.png","title":"Alaajo","skills":["Vuex","Nuxt","Bootstrap","REST API"],"github":"","website":"https://alaajo.com/","description":"A web app for saving, and peer to peer lending","tag":"rgb(255, 23, 23)","slug":"alaajo","slides":[{"src":"https://res.cloudinary.com/thekachi/image/upload/v1650134832/Screen_Shot_2022-04-16_at_7.46.15_PM_gl2q4g.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675640464/Screen_Shot_2023-02-06_at_12.39.25_AM_txuzc3.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675640461/Screen_Shot_2023-02-06_at_12.39.53_AM_qpux8j.png"}]},{"id":"3","logo":"https://res.cloudinary.com/thekachi/image/upload/v1650139864/Screen_Shot_2022-04-16_at_9.10.20_PM_cidarw.png","title":"Yebox v2","skills":["Nuxt","SCSS","Bootstrap 5"],"github":"","website":"https://www.yebox.io/","description":"Landing page for a web design and development agency","tag":"#8BC34A","slug":"yebox","slides":[{"src":"https://res.cloudinary.com/thekachi/image/upload/v1650139864/Screen_Shot_2022-04-16_at_9.10.20_PM_cidarw.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675639814/Screen_Shot_2023-02-06_at_12.29.35_AM_kh7vwx.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675639824/Screen_Shot_2023-02-06_at_12.28.27_AM_fap1uv.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675639817/Screen_Shot_2023-02-06_at_12.25.46_AM_yx8dio.png"}]},{"id":"2","logo":"https://res.cloudinary.com/thekachi/image/upload/v1647533832/Screen_Shot_2022-03-17_at_5.16.01_PM_kvc1zc.png","title":"Countrypedia","skills":["Nuxt","Tailwind","REST API"],"github":"https://github.com/TheKachi/countrypedia","website":"https://country-api-wine.vercel.app/","description":"Weekend project - On countrypedia, you can search for any country or capital in the world and get very vital information.","tag":"hsl(209, 23%, 22%)","slug":"countrypedia","slides":[{"src":"https://res.cloudinary.com/thekachi/image/upload/v1647533832/Screen_Shot_2022-03-17_at_5.16.01_PM_kvc1zc.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675638347/Screen_Shot_2023-02-06_at_12.02.56_AM_ilptjg.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675638342/Screen_Shot_2023-02-06_at_12.04.11_AM_gof0va.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675638348/countrypedia-light_tn3fvr.png"}]},{"id":"1","logo":"https://res.cloudinary.com/thekachi/image/upload/v1675638800/Screen_Shot_2023-02-06_at_12.12.52_AM_mfiojn.png","title":"My Portfolio Website","skills":["Nuxt","Tailwind"],"github":"https://github.com/TheKachi/my-portfolio.git","website":"https://thekachi.xyz","description":"Second iteration of my portfolio website. Built with Nuxt and Tailwind","tag":"rgb(249 115 22)","slug":"my-portfolio","slides":[{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675638800/Screen_Shot_2023-02-06_at_12.12.52_AM_mfiojn.png"},{"src":"https://res.cloudinary.com/thekachi/image/upload/v1675638623/Screen_Shot_2023-02-06_at_12.08.14_AM_makbru.png"}]}]'
      );
    },
    313: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = {
          name: "ProjectCard",
          props: { project: { type: Object, required: !0 } },
        },
        n = r(26),
        component = Object(n.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "NuxtLink",
              {
                staticClass:
                  "grid grid-cols-12 md:gap-x-40 justify-between items-center bg-white dark:bg-[#212121] text-brown dark:text-[#8892b0] hover:dark:text-white shadow-[0_4px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] no-underline hover:dark:bg-[#535353] hover:bg-[hsl(209,23%,22%)] hover:bg-opacity-10 hover:scale-[1.02] transition-all duration-300 ease-in-out transform-gpu",
                attrs: { to: "/portfolio/" + t.project.slug },
              },
              [
                r("div", { staticClass: "col-span-12 lg:col-span-6" }, [
                  r("img", {
                    staticClass: "h-auto w-auto object-cover",
                    attrs: {
                      src: t.project.logo,
                      alt:
                        "A screenshot of " + t.project.title + "'s home page",
                    },
                  }),
                ]),
                t._v(" "),
                r("div", { staticClass: "col-span-12 lg:col-span-6" }, [
                  r(
                    "h5",
                    {
                      staticClass:
                        "capitalize pt-40 pl-16 md:pl-0 text-[28px] font-futurabold no-underline",
                    },
                    [t._v("\n      " + t._s(t.project.title) + "\n    ")]
                  ),
                  t._v(" "),
                  r("div", {
                    staticClass: "h-[2px] w-full",
                    style: { backgroundColor: t.project.tag },
                    attrs: { role: "divider" },
                  }),
                  t._v(" "),
                  r(
                    "div",
                    { staticClass: "pt-12 pb-32 px-16 md:pr-24 lg:pl-0" },
                    [
                      r("p", { staticClass: "text-base md:text-[20px]" }, [
                        t._v(t._s(t.project.description)),
                      ]),
                    ]
                  ),
                ]),
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
    321: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = {
          name: "Hero",
          data: function () {
            return {
              skills: [
                "TypeScript",
                "JavaScript",
                "Vue",
                "Nuxt",
                "React",
                "Next",
                "Tailwind",
                "(S)CSS",
                "Pinia",
                "Ethers.js",
                "AWS",
                "Semantic HTML",
              ],
            };
          },
          components: { Carousel: r(303).default },
        },
        n = r(26),
        component = Object(n.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "section",
              {
                staticClass:
                  "h-[calc(100vh-64px)] md:h-[calc(100vh-100px)] px-20 md:px-48 md:py-40 flex flex-col md:justify-center md:items-stretch",
              },
              [
                r("div", { staticClass: "mt-60 md:mt-0" }, [
                  r("h1", { staticClass: "text-xl -mb-16 ml-[6px]" }, [
                    t._v("Hi there, my name is"),
                  ]),
                  t._v(" "),
                  r(
                    "h2",
                    { staticClass: "font-futurabold text-4xl lg:text-6xl" },
                    [t._v("Dikachi Nze")]
                  ),
                  t._v(" "),
                  r("div", { staticClass: "text-xl w-full lg:max-w-lg" }, [
                    t._m(0),
                    t._v(" "),
                    r("p", { staticClass: "my-20" }, [
                      t._v(
                        "\n        The core technologies I use in my day-to-day, and I'm proficient in\n        are:\n      "
                      ),
                    ]),
                    t._v(" "),
                    r(
                      "ul",
                      {
                        staticClass:
                          "grid grid-cols-[repeat(2,_minmax(140px,_180px))] gap-x-12 gap-y-4 mt-20 mb-[80px] md:mb-[60px]",
                      },
                      t._l(t.skills, function (e) {
                        return r(
                          "li",
                          {
                            key: e,
                            staticClass:
                              "before:content-['✓'] before:mr-0 md:before:mr-4 before:text-orange-500 text-base md:text-lg font-mono",
                          },
                          [t._v("\n          " + t._s(e) + "\n        ")]
                        );
                      }),
                      0
                    ),
                  ]),
                ]),
                t._v(" "),
                t._m(1),
              ]
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("p", [
                t._v("\n        I'm a\n        "),
                r("span", { staticClass: "text-orange-500 font-bold" }, [
                  t._v("frontend web engineer"),
                ]),
                t._v(
                  "\n        from Lagos, Nigeria who really enjoys building digital products that\n        "
                ),
                r("span", { staticClass: "font-bold" }, [t._v("scale")]),
                t._v(", are innovative, performant and\n        "),
                r("span", { staticClass: "font-bold" }, [t._v(" accessible")]),
                t._v("\n        globally.\n      "),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                { staticClass: "flex justify-between items-center" },
                [
                  r(
                    "a",
                    {
                      attrs: {
                        href: "https://docs.google.com/document/d/1p6YbXdZC-HS3qgKRvi5nNAgRLla9RnoPSEASJBLqy0E/edit?usp=sharing",
                        target: "blank",
                      },
                    },
                    [t._v("Download my CV?")]
                  ),
                  t._v(" "),
                  r("span", { staticClass: "text-[13px]" }, [
                    t._v("scroll\n      "),
                    r("i", {
                      staticClass:
                        "fas fa-arrow-down animate-bounce p-8 rounded-full border border-brown dark:border-slate-100 ml-8",
                    }),
                  ]),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    322: function (t, e, r) {
      "use strict";
      r.r(e);
      r(47);
      var o = r(305),
        n =
          (r(313),
          {
            name: "PortfolioSection",
            data: function () {
              return { projects: o };
            },
            computed: {
              reversedProjects: function () {
                return this.projects.slice().reverse();
              },
            },
          }),
        l = r(26),
        component = Object(l.a)(
          n,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "section",
              {
                staticClass: "px-0 sm:px-20 pt-[75px] md:pt-[150px] pb-60",
                attrs: { id: "projects" },
              },
              [
                r(
                  "h2",
                  {
                    staticClass:
                      "mb-80 md:mb-120 text-center text-2xl md:text-3xl font-bold",
                  },
                  [t._v("\n    Some of the things I've built...\n  ")]
                ),
                t._v(" "),
                r(
                  "div",
                  {
                    staticClass: "grid gap-y-40 md:gap-y-60 px-20 lg:px-[80px]",
                  },
                  t._l(t.projects, function (t) {
                    return r(
                      "div",
                      { key: t.id, staticClass: "col" },
                      [r("ProjectCard", { attrs: { project: t } })],
                      1
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
      installComponents(component, { ProjectCard: r(313).default });
    },
    323: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = {},
        n = r(26),
        component = Object(n.a)(
          o,
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
                r = t._self._c || e;
              return r("div", [
                r(
                  "section",
                  {
                    staticClass: "px-40 pt-80 pb-80 flex flex-col items-center",
                  },
                  [
                    r(
                      "h2",
                      { staticClass: "mb-48 text-3xl text-center capitalize" },
                      [t._v("Get In Touch?")]
                    ),
                    t._v(" "),
                    r(
                      "ul",
                      {
                        staticClass:
                          "flex gap-20 text-base font-futuralight underline underline-offset-4",
                      },
                      [
                        r("li", [
                          r(
                            "a",
                            {
                              attrs: {
                                href: "mailto:thekachinze@gmail.com",
                                target: "blank",
                              },
                            },
                            [t._v("Email")]
                          ),
                        ]),
                        t._v(" "),
                        r("li", [
                          r(
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
                        r("li", [
                          r(
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
                        r("li", [
                          r(
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
                r("footer", { staticClass: "sm:px-40" }, [
                  r("p", { staticClass: "text-xs text-center" }, [
                    t._v(
                      "\n      © 2022 This website was designed & built by me - Dikachi Nze.\n    "
                    ),
                  ]),
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
    370: function (t, e, r) {
      "use strict";
      r.r(e);
      var o = { name: "IndexPage" },
        n = r(26),
        component = Object(n.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "div",
              [
                r("Hero"),
                t._v(" "),
                r("PortfolioSection"),
                t._v(" "),
                r("Contact"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        Hero: r(321).default,
        PortfolioSection: r(322).default,
        Contact: r(323).default,
      });
    },
  },
]);
