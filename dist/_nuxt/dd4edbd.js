(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5],{348:function(t,e,n){"use strict";n.r(e);var l={name:"ProjectCard",props:{project:{type:Object,required:!0}}},r=n(29),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("NuxtLink",{staticClass:"grid grid-cols-12 gap-x-40 justify-between items-center bg-white dark:bg-[#212121] text-brown dark:text-[#8892b0] hover:dark:text-white shadow-[0_4px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] no-underline hover:dark:bg-[#535353] hover:bg-[hsl(209,23%,22%)] hover:bg-opacity-10 hover:scale-[1.02] transition-all duration-300 ease-in-out transform-gpu]",attrs:{to:"/portfolio/"+t.project.slug}},[n("div",{staticClass:"col-span-12 lg:col-span-6"},[n("img",{staticClass:"h-auto w-auto object-cover",attrs:{src:t.project.logo,alt:"A screenshot of "+t.project.title+"'s home page"}})]),t._v(" "),n("div",{staticClass:"col-span-12 lg:col-span-6"},[n("h5",{staticClass:"capitalize pt-40 pb-8 pl-24 lg:pl-0 text-[28px] font-futurabold no-underline"},[t._v("\n      "+t._s(t.project.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"pb-40 pl-24 lg:pl-0 pr-24 pt-20"},[n("p",{staticClass:"text-[20px]"},[t._v(t._s(t.project.description))])])])])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var l={name:"Hero",data:function(){return{skills:["TypeScript","JavaScript","Vue","Nuxt","React","Next","Tailwind","(S)CSS","Pinia","Ethers.js","AWS","Semantic HTML"]}},components:{Carousel:n(142).default}},r=n(29),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"h-[calc(100vh-100px)] px-20 md:px-48 md:py-40 flex flex-col justify-center items-stretch"},[n("div",{},[n("h1",{staticClass:"text-xl -mb-16 ml-[6px]"},[t._v("Hi there, my name is")]),t._v(" "),n("h2",{staticClass:"font-futurabold text-4xl lg:text-6xl"},[t._v("Dikachi Nze")]),t._v(" "),n("div",{staticClass:"text-xl w-full lg:max-w-lg"},[t._m(0),t._v(" "),n("p",{staticClass:"my-20"},[t._v("\n        The core technologies I use in my day-to-day, and I'm proficient in\n        are:\n      ")]),t._v(" "),n("ul",{staticClass:"grid grid-cols-[repeat(2,_minmax(140px,_180px))] gap-x-12 gap-y-4 mt-20 mb-120 md:mb-[60px]"},t._l(t.skills,(function(e){return n("li",{key:e,staticClass:"before:content-['✓'] before:mr-4 before:text-orange-500 text-lg font-mono"},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        I'm a\n        "),n("span",{staticClass:"text-orange-500 font-bold"},[t._v("frontend web engineer")]),t._v("\n        from Lagos, Nigeria who really enjoys building digital products that\n        "),n("span",{staticClass:"font-bold"},[t._v("scale")]),t._v(", are innovative, performant and\n        "),n("span",{staticClass:"font-bold"},[t._v(" accessible")]),t._v("\n        globally.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[n("a",{attrs:{href:"https://docs.google.com/document/d/1p6YbXdZC-HS3qgKRvi5nNAgRLla9RnoPSEASJBLqy0E/edit?usp=sharing",target:"blank"}},[t._v("Download my CV?")]),t._v(" "),n("span",{},[t._v("scroll\n      "),n("i",{staticClass:"fas fa-arrow-down animate-bounce p-8 rounded-full border border-brown dark:border-slate-100 ml-20"})])])}],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";n.r(e);n(42);var l=n(172),r=(n(348),{name:"PortfolioSection",data:function(){return{projects:l}},computed:{reversedProjects:function(){return this.projects.slice().reverse()}}}),o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"px-0 sm:px-20 pt-[150px] pb-60"},[n("h2",{staticClass:"mb-80 text-center text-xl sm:text-2xl md:text-3xl font-bold"},[t._v("\n    Some of the things I've built...\n  ")]),t._v(" "),n("div",{staticClass:"grid gap-y-40 md:gap-y-60 px-20 lg:px-[80px]"},t._l(t.projects,(function(t){return n("div",{key:t.id,staticClass:"col"},[n("ProjectCard",{attrs:{project:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectCard:n(348).default})},351:function(t,e,n){"use strict";n.r(e);var l={},r=n(29),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"px-40 pt-80 pb-80 flex flex-col items-center"},[n("h2",{staticClass:"mb-48 text-3xl text-center capitalize"},[t._v("Get In Touch?")]),t._v(" "),n("ul",{staticClass:"flex gap-20 text-base font-futuralight underline underline-offset-4"},[n("li",[n("a",{attrs:{href:"mailto:nzebenflorence@gmail.com",target:"blank"}},[t._v("Email")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/thekachii",target:"blank"}},[t._v("Twitter")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/thekachi",target:"blank"}},[t._v("Github")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://linkedin.com/in/thekachi",target:"blank"}},[t._v("LinkedIn")])])])]),t._v(" "),n("footer",{staticClass:"sm:px-40"},[n("p",{staticClass:"text-xs text-center"},[t._v("\n      © 2022 This website was designed & built by me - Dikachi Nze.\n    ")])])])}],!1,null,null,null);e.default=component.exports},367:function(t,e,n){"use strict";n.r(e);var l={name:"IndexPage"},r=n(29),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero"),t._v(" "),n("PortfolioSection"),t._v(" "),n("Contact")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(349).default,PortfolioSection:n(350).default,Contact:n(351).default})}}]);