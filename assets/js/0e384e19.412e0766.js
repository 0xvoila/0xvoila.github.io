"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="How to create custom HashMaps in Java",c={unversionedId:"intro",id:"intro",title:"How to create custom HashMaps in Java",description:"Concepts to understand",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/docs/tutorial-basics/create-a-page"}},u=[{value:"Concepts to understand",id:"concepts-to-understand",children:[{value:"Generics in Java",id:"generics-in-java",children:[],level:3},{value:"What is hashcode",id:"what-is-hashcode",children:[],level:3},{value:"What is buckets in hashmaps",id:"what-is-buckets-in-hashmaps",children:[],level:3},{value:"What is hash collision",id:"what-is-hash-collision",children:[],level:3},{value:"Implementation of custom hashmaps",id:"implementation-of-custom-hashmaps",children:[],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-custom-hashmaps-in-java"},"How to create custom HashMaps in Java"),(0,o.kt)("h2",{id:"concepts-to-understand"},"Concepts to understand"),(0,o.kt)("p",null,"To implement the customer HashMaps, you should have the understanding of the following topics. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Understanding of ",(0,o.kt)("inlineCode",{parentName:"li"},"Generics")," in java"),(0,o.kt)("li",{parentName:"ol"},"Understanding of the Hashmaps concepts like ",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"What is ",(0,o.kt)("inlineCode",{parentName:"li"},"hashcode")," "),(0,o.kt)("li",{parentName:"ol"},"What is ",(0,o.kt)("inlineCode",{parentName:"li"},"hash table")),(0,o.kt)("li",{parentName:"ol"},"What is ",(0,o.kt)("inlineCode",{parentName:"li"},"buckets")," in hashtable"),(0,o.kt)("li",{parentName:"ol"},"What is ",(0,o.kt)("inlineCode",{parentName:"li"},"hash collision"),".")))),(0,o.kt)("p",null,"Lets get started"),(0,o.kt)("h3",{id:"generics-in-java"},"Generics in Java"),(0,o.kt)("p",null,"\u2248\u2248\u2248\u2248\u2248\u2248\u2248\u2248\u2248\u2248"),(0,o.kt)("h3",{id:"what-is-hashcode"},"What is hashcode"),(0,o.kt)("p",null,"@@@@@@@@@@"),(0,o.kt)("h3",{id:"what-is-buckets-in-hashmaps"},"What is buckets in hashmaps"),(0,o.kt)("p",null,"$$$$$$$"),(0,o.kt)("h3",{id:"what-is-hash-collision"},"What is hash collision"),(0,o.kt)("p",null,"%%%%%%%%"),(0,o.kt)("h3",{id:"implementation-of-custom-hashmaps"},"Implementation of custom hashmaps"))}h.isMDXComponent=!0}}]);