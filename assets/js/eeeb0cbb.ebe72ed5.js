"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[57715],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p="Filter plugin",u={unversionedId:"configuration/filter-plugin",id:"version-1.x/configuration/filter-plugin",title:"Filter plugin",description:"Filter plugin general parameters",source:"@site/versioned_docs/version-1.x/configuration/filter-plugin.md",sourceDirName:"configuration",slug:"/configuration/filter-plugin",permalink:"/docs/1.x/configuration/filter-plugin",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugin.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Filter-Plugin",permalink:"/docs/1.x/category/filter"},next:{title:"Add",permalink:"/docs/1.x/configuration/filter-plugins/Add"}},s={},c=[{value:"Filter plugin general parameters",id:"filter-plugin-general-parameters",level:3},{value:"source_table_name string",id:"source_table_name-string",level:5},{value:"result_table_name string",id:"result_table_name-string",level:5},{value:"Usage example",id:"usage-example",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"filter-plugin"},"Filter plugin"),(0,i.kt)("h3",{id:"filter-plugin-general-parameters"},"Filter plugin general parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#source_table_name-string"},"source_table_name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#result_table_name-string"},"result_table_name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plugin processes the dataset output by the previous plugin in the configuration file;"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin processes the dataset corresponding to this parameter."),(0,i.kt)("h5",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name is not specified"),", the data processed by this plugin will not be registered as a dataset that can be directly accessed by other plugins, or called a temporary table;"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a dataset that can be directly accessed by other plugins, or called a temporary table. The dataset registered here, other plugins can directly access by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name"),"."),(0,i.kt)("h3",{id:"usage-example"},"Usage example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'split {\n    source_table_name = "view_table_1"\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n    result_table_name = "view_table_2"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Split")," plugin will process the data in the temporary table ",(0,i.kt)("inlineCode",{parentName:"p"},"view_table_1")," and register the processing result as a temporary table named ",(0,i.kt)("inlineCode",{parentName:"p"},"view_table_2"),", this temporary table can be specified by any subsequent ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Output")," plugins ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is used.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'split {\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Without ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," configured, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Split")," plugin will read the dataset passed by the previous plugin and pass it to the next plugin.")))}m.isMDXComponent=!0}}]);