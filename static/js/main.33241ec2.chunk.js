(this["webpackJsonpmy-soccer-app"]=this["webpackJsonpmy-soccer-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),o=(n(15),n(1));n(16);function u(e){var t=e.name;return r.a.createElement("footer",null,r.a.createElement("p",null,t," is a junior club in Hamilton."))}function i(e){return r.a.createElement("header",null,e.name," 2021",r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("img",{alt:"Glenview United Team",src:"/images/logo.png",width:"200",height:"130"}))))}function s(){return r.a.createElement("div",{className:"lds-container"},r.a.createElement("div",{className:"lds-dual-ring"}))}var m=n(2),E=n.n(m),p=n(5),v=Object({NODE_ENV:"production",PUBLIC_URL:"/my-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_BASE_URL;function d(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],c=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),r=n[0],l=n[1],c=Object(a.useState)(null),u=Object(o.a)(c,2),i=u[0],s=u[1],m=Object(a.useState)(!0),d=Object(o.a)(m,2),f=d[0],h=d[1];return Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(E.a.mark((function t(){var n,a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(v+e);case 3:if(!(n=t.sent).ok){t.next=11;break}return t.next=7,n.json();case 7:a=t.sent,l(a),t.next=12;break;case 11:throw n;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),s(t.t0);case 17:return t.prev=17,h(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:r,error:i,loading:f}}("players?category=glenview"),m=c.data,d=c.loading,f=c.error;var h=n?m.filter((function(e){return e.goals>=parseInt(n)})):m;if(f)throw f;return d?r.a.createElement(s,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(i,{name:"Glenview United"}),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement("label",null,"Filter by Goals Scored:")," ",r.a.createElement("select",{value:n,onChange:function(e){return l(e.target.value)}},r.a.createElement("option",{value:""},"All goals"),r.a.createElement("option",{value:"5"},"5+"),r.a.createElement("option",{value:"3"},"3+"),r.a.createElement("option",{value:"2"},"2+")),n&&r.a.createElement("h2",null,"Found ",h.length," players")),r.a.createElement("div",null,h.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h4",{className:"players"},e.name),r.a.createElement("p",{className:"goals"},"Scored - ",e.goals," \xa0 \xa0 ",e.description))}))))),r.a.createElement(u,{name:"Glenview United"}))}var f=n(6),h=n(7),b=n(9),g=n(8),O=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(h.a)(n,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.a.Component);c.a.render(r.a.createElement(O,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.33241ec2.chunk.js.map