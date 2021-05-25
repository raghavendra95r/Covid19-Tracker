(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{218:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(77),s=a.n(c),o=(a(84),a(6)),i=a.n(o),d=a(9),u=a(1),l=a(2),j=a(5),b=a(4),h=(a(86),a(31)),p=a.n(h),f=(a(92),a(0)),v=function(e){var t=e.data,a=t.confirmed,n=t.deaths,r=t.recovered,c=t.lastUpdate;return console.log(a),a?Object(f.jsxs)("div",{className:"mb-5",children:[Object(f.jsxs)("div",{class:"card text-white bg-primary mb-3",children:[Object(f.jsx)("div",{class:"card-header",children:"Infected"}),Object(f.jsxs)("div",{class:"card-body",children:[Object(f.jsx)("h5",{class:"card-title f2",children:Object(f.jsx)(p.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(f.jsx)("p",{class:"card-text",children:new Date(c).toDateString()}),Object(f.jsxs)("p",{children:["Number of active cases of ",Object(f.jsx)("br",{})," COVID-19"]})]})]}),Object(f.jsxs)("div",{class:"card text-white bg-success mb-3",children:[Object(f.jsx)("div",{class:"card-header",children:"Recovered"}),Object(f.jsxs)("div",{class:"card-body",children:[Object(f.jsx)("h5",{class:"card-title f2",children:Object(f.jsx)(p.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(f.jsx)("p",{class:"card-text",children:new Date(c).toDateString()}),Object(f.jsxs)("p",{children:["Number of recovered cases of",Object(f.jsx)("br",{})," COVID-19"]})]})]}),Object(f.jsxs)("div",{class:"card text-white bg-danger mb-3",children:[Object(f.jsx)("div",{class:"card-header ",children:"Deaths"}),Object(f.jsxs)("div",{class:"card-body",children:[Object(f.jsx)("h5",{class:"card-title f2",children:Object(f.jsx)(p.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(f.jsx)("p",{class:"card-text",children:new Date(c).toDateString()}),Object(f.jsxs)("p",{children:["Number of deaths from ",Object(f.jsx)("br",{})," COVID-19"]})]})]})]}):Object(f.jsx)("div",{class:"text-center",children:Object(f.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:"Loading..."})})})},x=a(19),O=a(32),m=a.n(O),g="https://covid19.mathdro.id/api",y=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n,r,c,s,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g,t&&(a="".concat(g,"/countries/").concat(t)),e.prev=2,e.next=5,m.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,s=r.recovered,o=r.deaths,d=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:s,deaths:o,lastUpdate:d});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(g,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(g,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(x.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(f.jsxs)("div",{className:"country",children:[Object(f.jsx)("label",{children:"Select a Country  "}),Object(f.jsx)("span",{className:"select",children:Object(f.jsxs)("select",{className:"select",onChange:function(e){return t(e.target.value)},"aria-label":"Default select example",children:[Object(f.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(f.jsxs)("option",{value:e,children:[e," "]},t)}))]})})]})},k=a(48),S=function(e){var t=e.data,a=t.confirmed,r=t.deaths,c=t.recovered,s=e.country;console.log(c);var o=Object(n.useState)([]),u=Object(x.a)(o,2),l=u[0],j=u[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=a?Object(f.jsx)(k.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",title:{display:!0,text:"Current state in ".concat(s)},backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","#e60d0d"],data:[a.value,c.value,r.value],font:"5px"}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null,h=l[0]?Object(f.jsx)(k.b,{data:{labels:l.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return Object(f.jsx)("div",{className:"container",children:s?b:h})},N=a.p+"static/media/image.9e5d4fc7.png",I=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleCountryChange=function(){var t=Object(d.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({data:n,country:a}),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={data:{},country:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,console.log(this.data),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(f.jsxs)("div",{className:"tc App",children:[Object(f.jsx)("img",{src:N,className:"image",alt:"covid19"}),Object(f.jsx)(v,{data:t}),Object(f.jsx)(D,{handleCountryChange:this.handleCountryChange}),Object(f.jsx)(S,{data:t,country:a})]})}}]),a}(n.Component),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,219)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),F()},84:function(e,t,a){},86:function(e,t,a){},92:function(e,t,a){}},[[218,1,2]]]);
//# sourceMappingURL=main.1c3b7045.chunk.js.map