(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(13),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("header"),r.a.createElement("div",null,r.a.createElement("h1",null,"Monster's storage"))}}]),t}(a.Component),d=(n(14),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(15),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"Monster",src:"https://robohash.org/".concat(a,"?set=set2&size=180x180")}),r.a.createElement("h2",null,t),r.a.createElement("p",null,n))}),p=(n(16),function(e){var t=e.items;return console.log("CardList"),r.a.createElement("div",{className:"card-list"},t.map((function(e,t){return r.a.createElement(f,{key:t,id:e.id,name:e.name,email:e.email})})))}),g=function(e){return console.log("Scroll"),r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return console.log("ErrorBoundary"),this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(a.Component),E=(n(17),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onHandleChange=function(t){e.setState({searchFilter:t.target.value})},e.state={string:"hello",monsters:[],searchFilter:"",showChild:!0,isPending:!0},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t,isPending:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchFilter,a=e.isPending,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log(o),r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(d,{placeholder:"Enter search criteria",handleChange:this.onHandleChange}),r.a.createElement(g,null,a?r.a.createElement("h1",null,"Loading"):r.a.createElement(v,null,r.a.createElement(p,{items:o}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fb4ddcf9.chunk.js.map