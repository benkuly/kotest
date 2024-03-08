"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[87495],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(o),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,c(c({ref:t},p),{},{components:o})):r.createElement(f,c({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=o[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2951:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={id:"jacoco",title:"Jacoco",sidebar_label:"Jacoco",slug:"jacoco.html"},c=void 0,i={unversionedId:"framework/integrations/jacoco",id:"version-5.3/framework/integrations/jacoco",title:"Jacoco",description:"Kotest integrates with Jacoco for code coverage in the standard gradle way.",source:"@site/versioned_docs/version-5.3/framework/integrations/jacoco.md",sourceDirName:"framework/integrations",slug:"/framework/integrations/jacoco.html",permalink:"/docs/5.3/framework/integrations/jacoco.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/integrations/jacoco.md",tags:[],version:"5.3",frontMatter:{id:"jacoco",title:"Jacoco",sidebar_label:"Jacoco",slug:"jacoco.html"},sidebar:"framework",previous:{title:"Mocking",permalink:"/docs/5.3/framework/integrations/mocking.html"},next:{title:"Spec Ordering",permalink:"/docs/5.3/framework/spec-ordering.html"}},l={},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Kotest integrates with ",(0,n.kt)("a",{parentName:"p",href:"https://www.eclemma.org/jacoco/"},"Jacoco")," for code coverage in the standard gradle way.\nYou can read gradle installation instructions ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/jacoco_plugin.html"},"here"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In gradle, add jacoco to your plugins.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"plugins {\n   ...\n   jacoco\n   ...\n}\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Configure jacoco")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"jacoco {\n    toolVersion = \"0.8.7\"\n    reportsDirectory = layout.buildDirectory.dir('customJacocoReportDir') // optional\n}\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Add the jacoco XML report task.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.jacocoTestReport {\n    dependsOn(tasks.test)\n    reports {\n        xml.isEnabled = true\n    }\n}\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Change tests task to depend on jacoco.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.test {\n  ...\n  finalizedBy(tasks.jacocoTestReport)\n}\n")),(0,n.kt)("p",null,"Now when you run ",(0,n.kt)("inlineCode",{parentName:"p"},"test"),", the Jacoco report files should be generated in ",(0,n.kt)("inlineCode",{parentName:"p"},"$buildDir/reports/jacoco"),". "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You may need to apply the jacoco plugin to each submodule if you have a multi module project.")))}u.isMDXComponent=!0}}]);