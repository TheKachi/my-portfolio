(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    129: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = { name: "Navbar" },
        r = n(26),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "nav",
              {
                staticClass:
                  "flex justify-between items-center px-20 md:px-36 h-[64px]",
              },
              [
                n(
                  "nuxt-link",
                  { staticClass: "no-underline font-bold", attrs: { to: "/" } },
                  [t._v("DN")]
                ),
                t._v(" "),
                n("ThemeToggler"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "6e048f09",
          null
        );
      e.default = component.exports;
      installComponents(component, { ThemeToggler: n(299).default });
    },
    153: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          data: function () {
            return {
              navs: [
                {
                  title: "Github",
                  link: "https://github.com/thekachi",
                  icon: "fab fa-github",
                },
                {
                  title: "Twitter",
                  link: "https://twitter.com/thekachii",
                  icon: "fab fa-twitter",
                },
                {
                  title: "Linkedin",
                  link: "https://linkedin.com/in/thekachi",
                  icon: "fab fa-linkedin-in",
                },
                {
                  title: "Email",
                  link: "mailto:thekachinze@gmail.com",
                  icon: "fas fa-envelope",
                },
              ],
            };
          },
          methods: {},
          components: {},
        },
        r = n(26),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("aside", { staticClass: "h-screen" }, [
              n(
                "div",
                { staticClass: "fixed top-1/3 w-[inherit] h-[inherit] px-36" },
                [
                  n(
                    "ul",
                    {
                      staticClass:
                        "after:h-100 after:w-1 after:bg-brown dark:after:bg-white flex flex-col justify-center items-center gap-y-36 my-auto",
                    },
                    t._l(t.navs, function (nav, i) {
                      return n("li", { key: i }, [
                        n(
                          "a",
                          {
                            staticClass:
                              "flex flex-col items-center gap-y-16 no-underline",
                            attrs: { href: nav.link, target: "blank" },
                          },
                          [
                            n("i", {
                              staticClass: "hover:text-orange-500",
                              class: nav.icon,
                              attrs: {
                                "aria-label": nav.title,
                                alt: "Link to my " + nav.title,
                              },
                            }),
                          ]
                        ),
                      ]);
                    }),
                    0
                  ),
                ]
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
    221: function (t, e, n) {
      "use strict";
      var o = n(153),
        r = n(129),
        l = { components: { SideBar: o.default, Navbar: r.default } },
        c = n(26),
        component = Object(c.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              { staticClass: "md:py-24 md:px-48" },
              [
                n("Navbar"),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "grid grid-cols-12 gap-0" },
                  [
                    n("side-bar", {
                      staticClass: "hidden md:block md:col-span-1",
                    }),
                    t._v(" "),
                    n("Nuxt", {
                      staticClass: "col-span-12 w-full md:col-span-11 py-36",
                    }),
                  ],
                  1
                ),
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
      e.a = component.exports;
      installComponents(component, {
        Navbar: n(129).default,
        SideBar: n(153).default,
      });
    },
    222: function (t, e, n) {
      "use strict";
      var o = { name: "Portfolio" },
        r = n(26),
        component = Object(r.a)(
          o,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)("Nuxt");
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
    },
    231: function (t, e, n) {
      n(232), (t.exports = n(233));
    },
    269: function (t, e, n) {
      var content = n(270);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(84).default)("382a115c", content, !0, { sourceMap: !1 });
    },
    270: function (t, e, n) {
      var o = n(83),
        r = n(271),
        l = n(272),
        c = n(273),
        d = n(274),
        m = o(function (i) {
          return i[1];
        }),
        x = r(l),
        f = r(c),
        h = r(d);
      m.push([
        t.i,
        '/*! tailwindcss v3.0.15 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}@font-face{font-family:Futura-Light;src:url(' +
          x +
          ') format("truetype")}@font-face{font-family:Futura-Book;src:url(' +
          f +
          ') format("truetype")}@font-face{font-family:Futura-Medium;src:url(' +
          h +
          ') format("truetype")}body{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));font-family:Futura-Book, sans-serif;--tw-text-opacity:1;color:rgb(44 44 44 / var(--tw-text-opacity));}.dark body{--tw-bg-opacity:1;background-color:rgb(18 18 18 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(136 146 176 / var(--tw-text-opacity));}a{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-text-opacity:1;color:rgb(44 44 44 / var(--tw-text-opacity));-webkit-text-decoration-line:underline;text-decoration-line:underline;-webkit-text-decoration-color:#2C2C2C;text-decoration-color:#2C2C2C;text-underline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms;}a:hover{--tw-text-opacity:1;color:rgb(44 44 44 / var(--tw-text-opacity));-webkit-text-decoration-color:#f97316;text-decoration-color:#f97316;}.dark a{--tw-text-opacity:1;color:rgb(204 214 246 / var(--tw-text-opacity));-webkit-text-decoration-color:#ccd6f6;text-decoration-color:#ccd6f6;}h2, h3, h4, h5, h6{--tw-text-opacity:1;color:rgb(44 44 44 / var(--tw-text-opacity));}.dark h2, .dark h3, .dark h4, .dark h5, .dark h6{--tw-text-opacity:1;color:rgb(204 214 246 / var(--tw-text-opacity));}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.container{width:100%;}@media (min-width: 640px){.container{max-width:640px;}}@media (min-width: 768px){.container{max-width:768px;}}@media (min-width: 1024px){.container{max-width:1024px;}}@media (min-width: 1280px){.container{max-width:1280px;}}@media (min-width: 1536px){.container{max-width:1536px;}}.visible{visibility:visible;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.sticky{position:-webkit-sticky;position:sticky;}.top-1\\/3{top:33.333333%;}.col-span-12{grid-column:span 12 / span 12;}.-mx-\\[10px\\]{margin-left:-10px;margin-right:-10px;}.my-20{margin-top:20px;margin-bottom:20px;}.my-auto{margin-top:auto;margin-bottom:auto;}.mb-48{margin-bottom:48px;}.mb-32{margin-bottom:32px;}.mt-60{margin-top:60px;}.-mb-16{margin-bottom:-16px;}.ml-\\[6px\\]{margin-left:6px;}.mt-20{margin-top:20px;}.mb-\\[80px\\]{margin-bottom:80px;}.ml-8{margin-left:8px;}.mt-24{margin-top:24px;}.mb-28{margin-bottom:28px;}.mb-80{margin-bottom:80px;}.block{display:block;}.flex{display:flex;}.table{display:table;}.grid{display:grid;}.hidden{display:none;}.h-\\[210px\\]{height:210px;}.h-full{height:100%;}.h-\\[410px\\]{height:410px;}.h-\\[calc\\(100vh-64px\\)\\]{height:calc(100vh - 64px);}.h-\\[64px\\]{height:64px;}.h-\\[2px\\]{height:2px;}.h-auto{height:auto;}.h-screen{height:100vh;}.h-\\[inherit\\]{height:inherit;}.h-100{height:100px;}.w-full{width:100%;}.w-auto{width:auto;}.w-\\[inherit\\]{width:inherit;}.w-100{width:100px;}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.transform-gpu{transform:translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}@-webkit-keyframes bounce{0%, 100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1);}}@keyframes bounce{0%, 100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1);}}.animate-bounce{-webkit-animation:bounce 1s infinite;animation:bounce 1s infinite;}.resize{resize:both;}.list-inside{list-style-position:inside;}.list-disc{list-style-type:disc;}.grid-cols-\\[repeat\\(2\\2c _minmax\\(140px\\2c _180px\\)\\)\\]{grid-template-columns:repeat(2, minmax(140px, 180px));}.grid-cols-12{grid-template-columns:repeat(12, minmax(0, 1fr));}.flex-row{flex-direction:row;}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.items-center{align-items:center;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.justify-around{justify-content:space-around;}.justify-evenly{justify-content:space-evenly;}.gap-20{gap:20px;}.gap-24{gap:24px;}.gap-\\[4px\\]{gap:4px;}.gap-16{gap:16px;}.gap-0{gap:0px;}.gap-x-12{-moz-column-gap:12px;column-gap:12px;}.gap-y-4{row-gap:4px;}.gap-y-8{row-gap:8px;}.gap-x-24{-moz-column-gap:24px;column-gap:24px;}.gap-y-40{row-gap:40px;}.gap-y-36{row-gap:36px;}.gap-y-16{row-gap:16px;}.rounded-full{border-radius:9999px;}.border{border-width:1px;}.border-brown{--tw-border-opacity:1;border-color:rgb(44 44 44 / var(--tw-border-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.object-contain{-o-object-fit:contain;object-fit:contain;}.object-cover{-o-object-fit:cover;object-fit:cover;}.p-8{padding:8px;}.px-40{padding-left:40px;padding-right:40px;}.px-20{padding-left:20px;padding-right:20px;}.py-24{padding-top:24px;padding-bottom:24px;}.px-0{padding-left:0px;padding-right:0px;}.px-16{padding-left:16px;padding-right:16px;}.px-36{padding-left:36px;padding-right:36px;}.py-36{padding-top:36px;padding-bottom:36px;}.pt-80{padding-top:80px;}.pb-80{padding-bottom:80px;}.pt-\\[75px\\]{padding-top:75px;}.pb-60{padding-bottom:60px;}.pt-40{padding-top:40px;}.pl-16{padding-left:16px;}.pt-12{padding-top:12px;}.pb-32{padding-bottom:32px;}.text-center{text-align:center;}.font-futuralight{font-family:Futura-Light, sans-serif;}.font-futurabold{font-family:Futura-Medium, sans-serif;}.font-mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}.text-3xl{font-size:32px;}.text-base{font-size:16px;}.text-xs{font-size:12px;}.text-xl{font-size:20px;}.text-4xl{font-size:48px;}.text-\\[13px\\]{font-size:13px;}.text-\\[32px\\]{font-size:32px;}.text-\\[12px\\]{font-size:12px;}.text-2xl{font-size:24px;}.text-\\[28px\\]{font-size:28px;}.font-bold{font-weight:700;}.uppercase{text-transform:uppercase;}.capitalize{text-transform:capitalize;}.tracking-widest{letter-spacing:0.1em;}.text-orange-500{--tw-text-opacity:1;color:rgb(249 115 22 / var(--tw-text-opacity));}.text-brown{--tw-text-opacity:1;color:rgb(44 44 44 / var(--tw-text-opacity));}.text-black{--tw-text-opacity:1;color:rgb(18 18 18 / var(--tw-text-opacity));}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline;}.no-underline{-webkit-text-decoration-line:none;text-decoration-line:none;}.underline-offset-4{text-underline-offset:4px;}.shadow-\\[0_4px_50px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.1\\)\\]{--tw-shadow:0 4px 50px rgba(0,0,0,0.1);--tw-shadow-colored:0 4px 50px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.outline{outline-style:solid;}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-300{transition-duration:300ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}div[class*=col]{padding:0}.before\\:mr-0::before{content:var(--tw-content);margin-right:0px;}.before\\:text-orange-500::before{content:var(--tw-content);--tw-text-opacity:1;color:rgb(249 115 22 / var(--tw-text-opacity));}.before\\:content-\\[\\\'\\2713\\\'\\]::before{--tw-content:\'✓\';content:var(--tw-content);}.after\\:h-100::after{content:var(--tw-content);height:100px;}.after\\:w-1::after{content:var(--tw-content);width:1px;}.after\\:bg-brown::after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(44 44 44 / var(--tw-bg-opacity));}.hover\\:scale-\\[1\\.02\\]:hover{--tw-scale-x:1.02;--tw-scale-y:1.02;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.hover\\:bg-\\[hsl\\(209\\2c 23\\%\\2c 22\\%\\)\\]:hover{--tw-bg-opacity:1;background-color:hsl(209 23% 22% / var(--tw-bg-opacity));}.hover\\:bg-opacity-10:hover{--tw-bg-opacity:0.1;}.hover\\:text-orange-500:hover{--tw-text-opacity:1;color:rgb(249 115 22 / var(--tw-text-opacity));}.dark .dark\\:border-slate-100{--tw-border-opacity:1;border-color:rgb(204 214 246 / var(--tw-border-opacity));}.dark .dark\\:bg-\\[\\#212121\\]{--tw-bg-opacity:1;background-color:rgb(33 33 33 / var(--tw-bg-opacity));}.dark .dark\\:text-\\[\\#8892b0\\]{--tw-text-opacity:1;color:rgb(136 146 176 / var(--tw-text-opacity));}.dark .dark\\:text-slate-100{--tw-text-opacity:1;color:rgb(204 214 246 / var(--tw-text-opacity));}.dark .dark\\:text-slate-200{--tw-text-opacity:1;color:rgb(136 146 176 / var(--tw-text-opacity));}.dark .dark\\:shadow-\\[0_10px_30px_-15px_rgba\\(2\\2c 12\\2c 27\\2c 0\\.7\\)\\]{--tw-shadow:0 10px 30px -15px rgba(2,12,27,0.7);--tw-shadow-colored:0 10px 30px -15px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.dark .dark\\:after\\:bg-white::after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.dark .hover\\:dark\\:bg-\\[\\#535353\\]:hover{--tw-bg-opacity:1;background-color:rgb(83 83 83 / var(--tw-bg-opacity));}.dark .hover\\:dark\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}@media (min-width: 640px){.sm\\:px-40{padding-left:40px;padding-right:40px;}.sm\\:px-20{padding-left:20px;padding-right:20px;}}@media (min-width: 768px){.md\\:col-span-1{grid-column:span 1 / span 1;}.md\\:col-span-11{grid-column:span 11 / span 11;}.md\\:mx-auto{margin-left:auto;margin-right:auto;}.md\\:my-\\[60px\\]{margin-top:60px;margin-bottom:60px;}.md\\:mt-0{margin-top:0px;}.md\\:mb-\\[60px\\]{margin-bottom:60px;}.md\\:mt-60{margin-top:60px;}.md\\:mb-\\[90px\\]{margin-bottom:90px;}.md\\:mb-120{margin-bottom:120px;}.md\\:block{display:block;}.md\\:hidden{display:none;}.md\\:h-\\[calc\\(100vh-100px\\)\\]{height:calc(100vh - 100px);}.md\\:w-\\[65vw\\]{width:65vw;}.md\\:w-\\[50vw\\]{width:50vw;}.md\\:items-stretch{align-items:stretch;}.md\\:justify-center{justify-content:center;}.md\\:gap-32{gap:32px;}.md\\:gap-y-60{row-gap:60px;}.md\\:gap-x-40{-moz-column-gap:40px;column-gap:40px;}.md\\:px-48{padding-left:48px;padding-right:48px;}.md\\:py-40{padding-top:40px;padding-bottom:40px;}.md\\:px-36{padding-left:36px;padding-right:36px;}.md\\:py-24{padding-top:24px;padding-bottom:24px;}.md\\:pb-\\[90px\\]{padding-bottom:90px;}.md\\:pt-\\[150px\\]{padding-top:150px;}.md\\:pl-0{padding-left:0px;}.md\\:pr-24{padding-right:24px;}.md\\:text-lg{font-size:18px;}.md\\:text-\\[40px\\]{font-size:40px;}.md\\:text-3xl{font-size:32px;}.md\\:text-\\[20px\\]{font-size:20px;}.md\\:text-\\[32px\\]{font-size:32px;}.md\\:before\\:mr-4::before{content:var(--tw-content);margin-right:4px;}}@media (min-width: 1024px){.lg\\:col-span-6{grid-column:span 6 / span 6;}.lg\\:max-w-lg{max-width:32rem;}.lg\\:px-\\[80px\\]{padding-left:80px;padding-right:80px;}.lg\\:pl-0{padding-left:0px;}.lg\\:text-6xl{font-size:80px;}}',
        "",
      ]),
        (m.locals = {}),
        (t.exports = m);
    },
    272: function (t, e, n) {
      t.exports = n.p + "fonts/Futura-Light.ead7282.ttf";
    },
    273: function (t, e, n) {
      t.exports = n.p + "fonts/Futura-Book.ed19af4.ttf";
    },
    274: function (t, e, n) {
      t.exports = n.p + "fonts/Futura-Medium.4e762c2.ttf";
    },
    299: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = {
          data: function () {
            return { darkMode: !1 };
          },
          methods: {
            toggleTheme: function () {
              (this.$colorMode.preference =
                "light" === this.$colorMode.preference ? "dark" : "light"),
                (this.darkMode = !this.darkMode);
            },
          },
        },
        r = n(26),
        component = Object(r.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.darkMode
              ? n(
                  "button",
                  {
                    attrs: {
                      role: "button",
                      tabindex: "0",
                      "aria-label": "Toggle dark and light mode",
                    },
                    on: {
                      click: function (e) {
                        return (
                          e.preventDefault(),
                          t.toggleTheme.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    n("i", {
                      staticClass: "fas fa-moon",
                      attrs: {
                        "aria-hidden": "true",
                        "aria-label": "Dark mode",
                      },
                    }),
                  ]
                )
              : n(
                  "button",
                  {
                    attrs: {
                      role: "button",
                      tabindex: "0",
                      "aria-label": "Toggle dark and light mode",
                    },
                    on: {
                      click: function (e) {
                        return (
                          e.preventDefault(),
                          t.toggleTheme.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    n("i", {
                      staticClass: "fas fa-sun",
                      attrs: {
                        "aria-hidden": "true",
                        "aria-label": "Ligh† mode",
                      },
                    }),
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
  [[231, 20, 2, 21]],
]);
