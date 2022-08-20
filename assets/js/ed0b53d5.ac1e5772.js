"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72199],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:e},u),{},{components:n})):a.createElement(g,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28703:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s=void 0,p={unversionedId:"configuration/output-plugins/Elasticsearch",id:"version-1.x/configuration/output-plugins/Elasticsearch",title:"Elasticsearch",description:"Output plugin : Elasticsearch",source:"@site/versioned_docs/version-1.x/configuration/output-plugins/Elasticsearch.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/Elasticsearch",permalink:"/docs/1.x/configuration/output-plugins/Elasticsearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/output-plugins/Elasticsearch.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/docs/1.x/configuration/output-plugins/Clickhouse"},next:{title:"File",permalink:"/docs/1.x/configuration/output-plugins/File"}},u={},c=[{value:"Output plugin : Elasticsearch",id:"output-plugin--elasticsearch",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"hosts array",id:"hosts-array",level:5},{value:"index_type string",id:"index_type-string",level:5},{value:"index_time_format string",id:"index_time_format-string",level:5},{value:"index string",id:"index-string",level:5},{value:"es.* string",id:"es-string",level:5},{value:"Examples",id:"examples",level:3}],d={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"output-plugin--elasticsearch"},"Output plugin : Elasticsearch"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Write Rows to Elasticsearch. Support Elasticsearch >= 2.X"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hosts-array"},"hosts")),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#index_type-string"},"index_type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"_doc")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#index_time_format-string"},"index_time_format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyy.MM.dd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#index-string"},"index")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"seatunnel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#es-string"},"es")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"hosts-array"},"hosts ","[array]"),(0,i.kt)("p",null,"Elasticsearch hosts, format as ",(0,i.kt)("inlineCode",{parentName:"p"},"host:port"),". For example, ",(0,i.kt)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]')),(0,i.kt)("h5",{id:"index_type-string"},"index_type ","[string]"),(0,i.kt)("p",null,"Elasticsearch index type"),(0,i.kt)("h5",{id:"index_time_format-string"},"index_time_format ","[string]"),(0,i.kt)("p",null,"Elasticsearch time format. If ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," likes ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-${now}"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index_time_format")," can be used to specify the format of index, default is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd"),". The commonly used time formats are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"Year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.kt)("p",null,"The detailed time format syntax:",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat"),"."),(0,i.kt)("h5",{id:"index-string"},"index ","[string]"),(0,i.kt)("p",null,"Elasticsearch index name, if you want to generate index based on time, you need to specify the field like ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-${now}"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"now")," means current time."),(0,i.kt)("h5",{id:"es-string"},"es.* ","[string]"),(0,i.kt)("p",null,"You can also specify multiple Elasticsearch's parameters described in ","[Elasticsearch Configuration]","(",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html#cfg-mapping"},"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html#cfg-mapping"),"."),(0,i.kt)("p",null,'The way to specify parameters is to use the prefix "es" before the parameter. For example, ',(0,i.kt)("inlineCode",{parentName:"p"},"batch.size.entries")," is specified as: ",(0,i.kt)("inlineCode",{parentName:"p"},"es.batch.size.entries = 1000"),".If you do not specify these parameters, it will be set the default values according to Elasticsearch documentation"),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Index name is ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-${now}"\n    es.batch.size.entries = 100000\n    index_time_format = "yyyy.MM.dd"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Create index by day. For example: ",(0,i.kt)("strong",{parentName:"p"},"seatunnel-2017.11.03"))))}m.isMDXComponent=!0}}]);