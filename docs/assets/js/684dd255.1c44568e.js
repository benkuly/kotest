"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[16060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={id:"shrinking",title:"Shrinking",slug:"property-test-shrinking.html",sidebar_label:"Shrinking"},s=void 0,a={unversionedId:"proptest/shrinking",id:"version-5.6/proptest/shrinking",title:"Shrinking",description:"In property-based testing, the initially found failing case may contain a lot of complexity that does actually cause the test to fail.",source:"@site/versioned_docs/version-5.6/proptest/shrinking.md",sourceDirName:"proptest",slug:"/proptest/property-test-shrinking.html",permalink:"/docs/5.6/proptest/property-test-shrinking.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/proptest/shrinking.md",tags:[],version:"5.6",frontMatter:{id:"shrinking",title:"Shrinking",slug:"property-test-shrinking.html",sidebar_label:"Shrinking"},sidebar:"proptest",previous:{title:"Custom Generators",permalink:"/docs/5.6/proptest/custom-generators.html"},next:{title:"Statistics",permalink:"/docs/5.6/proptest/property-test-statistics.html"}},l={},p=[{value:"Shrinking for built-in generators",id:"shrinking-for-built-in-generators",level:2},{value:"Shrinking for custom generators",id:"shrinking-for-custom-generators",level:2}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In property-based testing, the initially found failing case may contain a lot of complexity that does actually cause the test to fail.\nShrinking is the mechanism through which a property-based testing framework can simplify failing cases in order to find out the minimal reproducible case is.\nIn Kotest, the way in which failing cases from ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.6/proptest/property-test-generators.html"},"generators")," are shrunk is defined by implementations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Shrinker")," interface.\nBuilt-in generators generally have a default Shrinker defined by the framework, while custom generators can be given a custom Shrinker implementation."),(0,i.kt)("h2",{id:"shrinking-for-built-in-generators"},"Shrinking for built-in generators"),(0,i.kt)("p",null,"Built-in generators (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.6/proptest/property-test-generators-list.html"},"Generators List"),") have a default Shrinker defined by the framework.\nA shrink function takes as input the value that failed the test and returns a list of new values on which Kotest can appy the test.\nThe exact behaviour depends on the data type.\nFor instance, a string could be shrunk by dropping the first or last character while for integers we could decrement or halve the value.\nIn addition, shrink behaviour is defined for edge cases such as an empty string or the integer 0.\nThe shrinking is performed when a test that uses such generator fails."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"Arb.positiveInt().checkAll { i ->\n    calculateProperty(i) shouldBe true\n}\n")),(0,i.kt)("p",null,"If the test fails for one of the generated inputs then the shrinking result is shown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Property test failed for inputs\n\n0) 1792716902\n\nCaused by io.kotest.assertions.AssertionFailedError: expected:<1792716902> but was:<0> at\n    PropertyBasedTest$1$1$3$1.invokeSuspend(PropertyBasedTest.kt:54)\n    PropertyBasedTest$1$1$3$1.invoke(PropertyBasedTest.kt)\n    PropertyBasedTest$1$1$3$1.invoke(PropertyBasedTest.kt)\n    io.kotest.property.internal.ProptestKt$proptest$3$2.invokeSuspend(proptest.kt:45)\n\nAttempting to shrink arg 1792716902\nShrink #1: 1 pass\nShrink #2: 597572300 fail\nShrink #3: 199190766 fail\nShrink #4: 66396922 fail\nShrink #5: 22132307 fail\nShrink #6: 7377435 fail\nShrink #7: 2459145 fail\n\n[...]\n\nShrink #999: 29948 pass\nShrink #1000: 44922 pass\nShrink #1001: 59896 pass\nShrink #1002: 89839 fail\nShrink result (after 1002 shrinks) => 89839\n\nCaused by io.kotest.assertions.AssertionFailedError: expected:<89839> but was:<0> at\n    PropertyBasedTest$1$1$3$1.invokeSuspend(PropertyBasedTest.kt:54)\n    PropertyBasedTest$1$1$3$1.invoke(PropertyBasedTest.kt)\n    PropertyBasedTest$1$1$3$1.invoke(PropertyBasedTest.kt)\n    io.kotest.property.internal.ShrinkfnsKt$shrinkfn$1$1$smallestA$1.invokeSuspend(shrinkfns.kt:19)\n")),(0,i.kt)("p",null,"By default, Kotest will shrink 1000 times. This behaviour is configurable.\nFor example, if you want to continue shrinking without bounds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"Arb.positiveInt().checkAll(PropTestConfig(shrinkingMode = ShrinkingMode.Unbounded)) { i ->\n    calculateProperty(i) shouldBe true\n}\n")),(0,i.kt)("h2",{id:"shrinking-for-custom-generators"},"Shrinking for custom generators"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/5.6/proptest/custom-generators.html"},"Custom generators")," do not have a Shrinker defined by Kotest.\nInstead, custom Shrinkers can be implemented.\nBelow is an example where the Shrinker returns coordinates that are next to the value itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Coordinate(val x: Int, val y: Int)\n\nclass CoordinateTest : FunSpec({\n    context("Coordinate Transformations") {\n        // Shrinker takes the four neighbouring coordinates\n        val coordinateShrinker = Shrinker<Coordinate> { c ->\n            listOf(\n                Coordinate(c.x - 1, c.y),\n                Coordinate(c.x, c.y - 1),\n                Coordinate(c.x + 1, c.y),\n                Coordinate(c.x, c.y + 1),\n            )\n        }\n        val coordinateArb = arbitrary(coordinateShrinker) {\n            Coordinate(Arb.nonNegativeInt().bind(), Arb.nonNegativeInt().bind())\n        }\n\n        test("Coordinates are always positive after transformation") {\n            coordinateArb.checkAll {\n                transform(it).x shouldBeGreaterThanOrEqualTo 0\n                transform(it).y shouldBeGreaterThanOrEqualTo 0\n            }\n        }\n    }\n})\n')))}h.isMDXComponent=!0}}]);