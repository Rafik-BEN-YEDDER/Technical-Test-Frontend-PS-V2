(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(52)},49:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),o=a(22),u=a(12),l=a(39),m=a(37),d=a(26),s=a(21),p=a(27),f="RECEIVE_CATEGORIES";var E=a(11),g=[{id:1,name:"TV",rating:9,featured:!0,itemsInStock:2,receiptDate:null,brand:"JVC",categories:[1,2,9],expirationDate:null,createdAt:"2019-04-30T16:00:40+03:00"},{id:2,name:"iPhone",rating:2,featured:!1,itemsInStock:0,receiptDate:"2019-06-14",brand:"Apple",categories:[5,4,3],expirationDate:"2019-05-20",createdAt:"2019-05-14T16:00:40+03:00"},{id:3,name:"laptop",rating:5,featured:!1,itemsInStock:10,receiptDate:null,brand:"HP",categories:[2],expirationDate:null,createdAt:"2019-05-20T16:00:40+03:00"}],b=new function e(){Object(E.a)(this,e),this.getProducts=function(){return g}},h="RECEIVE_PRODUCTS",v="DELETE_PRODUCT",O="UPDATE_PRODUCT",j="CREATE_PRODUCT",D=function(e,t){return{type:O,productId:e,data:t}},y=function(e){return function(t,a,n){var r=n.history;t(function(e){return{type:j,data:e}}(e)),r.push("/")}};var k=a(8),S=a.n(k),C=function(e){var t=e.rating,a=e.featured;return t>8||a};function I(e,t){return e.products.find(function(e){return e.id===t})}var x=Object(o.combineReducers)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(p.a)(t.categories);default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)(t.products);case v:return e.filter(function(e){return e.id!==t.productId});case O:return e.map(function(e){return e.id===t.productId?Object(s.a)({},e,t.data,{featured:C(t.data)}):e});case j:return e.concat([Object(s.a)({},t.data,{id:Date.now().toString(10),featured:C(t.data),createdAt:S()().format()})]);default:return e}}}),A=(a(49),a(50),a(16)),T=a(18),R=a(17),w=a(19),P=a(6),Y=function(e){var t=e.children;return r.a.createElement("div",null,t)},N=a(10),M=function(e){var t=e.name;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},r.a.createElement("h2",{className:"h3"},t),r.a.createElement(N.a,{to:"/add"},"Add product")),r.a.createElement("hr",null))},F=a(53),U=a(54),_=a(55),H=a(56),V=a(57),B=a(58),J=a(59),G=function(e){var t=e.product,a=e.onDelete,n=t.receiptDate?S()(t.receiptDate).format("MM/DD/YYYY"):"-",c=t.expirationDate?S()(t.expirationDate).format("MM/DD/YYYY"):"-",i=t.createdAt?S()(t.createdAt).format("MM/DD/YYYY hh:mm a"):"-";return r.a.createElement(F.a,null,r.a.createElement(U.a,null,r.a.createElement(_.a,null,r.a.createElement(N.a,{to:"/edit/".concat(t.id)},t.name),r.a.createElement(H.a,{close:!0,onClick:function(){return a(t.id)}})),r.a.createElement(V.a,{tag:"div"},r.a.createElement(B.a,null,r.a.createElement(J.a,null,"Brand: ",t.brand),r.a.createElement(J.a,null,"Rating: ",t.rating),r.a.createElement(J.a,null,"Featured: ",t.featured?"Yes":"No"),r.a.createElement(J.a,null,"Items In Stock: ",t.itemsInStock),r.a.createElement(J.a,null,"Categories:",r.a.createElement("ul",null,t.categories.map(function(e){return r.a.createElement("li",{key:e.id},e.name)}))),r.a.createElement(J.a,null,"Receipt Date: ",n),r.a.createElement(J.a,null,"Expiration Date: ",c),r.a.createElement(J.a,null,"Created At: ",i)))))},L=a(60),Q=a(61),W=a(62),q=a(38),z=function(e){var t=e.products,a=e.onDelete,n=Object(q.chunk)(t,3);return r.a.createElement(L.a,null,n.map(function(e,t){return r.a.createElement(Q.a,{key:t,className:"mb-5"},e.map(function(e){return r.a.createElement(W.a,{sm:"4",key:e.id},r.a.createElement(G,{product:e,onDelete:a}))}))}))},K=function(e){function t(){return Object(E.a)(this,t),Object(T.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.dispatch;return r.a.createElement(n.Fragment,null,r.a.createElement(M,{name:"Products"}),r.a.createElement(z,{products:t,onDelete:function(e){return a(function(e){return{type:v,productId:e}}(e))}}))}}]),t}(n.Component),X=Object(u.b)(function(e){var t=function(e){return e.categories.reduce(function(e,t){return Object(s.a)({},e,Object(d.a)({},t.id,t))},{})}(e);return{products:e.products.map(function(e){var a=e.categories.map(function(e){return t[e]});return Object(s.a)({},e,{categories:a})})}})(K),Z=function(){return r.a.createElement("h1",null,"Not Found")},$=a(14),ee=a(63),te=a(64),ae=a(65),ne=a(66),re=a(67),ce=function(e){return e.length>0&&e.length<=5},ie=function(e){var t,a,c=e.product,i=void 0===c?{}:c,o=Object(n.useState)(i.name||""),l=Object($.a)(o,2),m=l[0],d=l[1],s=Object(n.useState)(i.brand||""),p=Object($.a)(s,2),f=p[0],E=p[1],g=Object(n.useState)(i.rating||0),b=Object($.a)(g,2),h=b[0],v=b[1],O=Object(n.useState)(i.categories||[]),j=Object($.a)(O,2),k=j[0],C=j[1],I=Object(n.useState)(i.itemsInStock||0),x=Object($.a)(I,2),A=x[0],T=x[1],R=Object(n.useState)(i.receiptDate||""),w=Object($.a)(R,2),P=w[0],Y=w[1],M=Object(n.useState)(i.expirationDate||""),F=Object($.a)(M,2),U=F[0],_=F[1],V=Object(n.useState)(i.featured),B=Object($.a)(V,2),J=B[0],G=B[1],L=Object(u.c)();return r.a.createElement(ee.a,{onSubmit:function(t){t.preventDefault(),e.onSave({name:m,brand:f,rating:h,categories:k,itemsInStock:A,receiptDate:P,expirationDate:U,featured:J})}},r.a.createElement(te.a,null,r.a.createElement(ae.a,{for:"name"},"Name"),r.a.createElement(ne.a,{invalid:(a=m,!(a.trim().length>0&&a.trim().length<=200)),type:"text",name:"name",id:"name",placeholder:"Name",value:m,onChange:function(e){var t=e.target;return d(t.value)}}),r.a.createElement(re.a,null,"Name is required, the length must not be greater than 200")),r.a.createElement(te.a,null,r.a.createElement(ae.a,{for:"brand"},"Brand"),r.a.createElement(ne.a,{type:"text",name:"brand",id:"brand",placeholder:"Brand",value:f,onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement(te.a,null,r.a.createElement(ae.a,{for:"rating"},"Rating"),r.a.createElement(ne.a,{type:"select",name:"rating",id:"rating",value:h,onChange:function(e){var t=e.target;return v(t.value)}},(t=11,Array.from(Array(t).keys())).map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement(te.a,null,r.a.createElement(ae.a,{for:"categories"},"Categories"),r.a.createElement(ne.a,{invalid:!ce(k),type:"select",name:"categories",id:"categories",multiple:!0,value:k,onChange:function(e){var t=e.target;return C(function(e){return Array.from(e.options).reduce(function(e,t){var a=t.selected,n=t.value;return a&&e.push(n),e},[])}(t))}},e.categories.map(function(e){var t=e.id,a=e.name;return r.a.createElement("option",{key:t,value:t},a)})),r.a.createElement(re.a,null,"A product must have from 1 to 5 categories")),r.a.createElement(te.a,null,r.a.createElement(ae.a,{for:"itemsInStock"},"Items In Stock"),r.a.createElement(ne.a,{type:"number",name:"itemsInStock",id:"itemsInStock",value:A,onChange:function(e){var t=e.target;return T(t.value)}})),r.a.createElement(te.a,null,r.a.createElement(ae.a,{for:"expirationDate"},"Expiration date"),r.a.createElement(ne.a,{type:"date",name:"expirationDate",id:"expirationDate",value:U,onChange:function(e){var t=e.target;return _(t.value)}}),r.a.createElement(re.a,null,"If a product has an expiration date it must expire not less than 30 days since now")),r.a.createElement(te.a,null,r.a.createElement(ae.a,{for:"receiptDate"},"Receipt date"),r.a.createElement(ne.a,{type:"date",name:"receiptDate",id:"receiptDate",value:P,onChange:function(e){var t=e.target;return Y(t.value)}})),r.a.createElement(te.a,{check:!0},r.a.createElement(ae.a,{check:!0},r.a.createElement(ne.a,{type:"checkbox",checked:h>8,onChange:function(e){var t=e.target;return G(t.checked)}})," ","Featured")),r.a.createElement(N.a,{to:"/"},r.a.createElement(H.a,{onClick:function(){return i.id?L(D(i.id,{name:m,rating:h,featured:J,itemsInStock:A,receiptDate:P,brand:f,categories:k,expirationDate:""===U?"":S.a.max(S()().add(30,"days"),S()(U)).calendar()})):L(y({name:m,rating:h,featured:J,itemsInStock:A,receiptDate:P,brand:f,categories:k,expirationDate:""===U?"":S.a.max(S()().add(30,"days"),S()(U)).calendar()}))}},"Submit")))},oe=function(e){function t(){return Object(E.a)(this,t),Object(T.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.categories;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{to:"/"},"Home"),r.a.createElement(ie,{onSave:function(e){},product:t,categories:a})):null}}]),t}(n.Component),ue=Object(u.b)(function(e,t){return{product:I(e,t.productId),categories:e.categories}})(oe),le=function(e){function t(){return Object(E.a)(this,t),Object(T.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.categories;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{to:"/"},"Home"),r.a.createElement(ie,{onSave:function(e){},categories:e}))}}]),t}(n.Component),me=Object(u.b)(function(e){return{categories:e.categories}})(le),de=function(e){function t(){return Object(E.a)(this,t),Object(T.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/",component:X}),",",r.a.createElement(P.a,{path:"/edit/:productId",render:function(e){var t=e.match;return r.a.createElement(ue,{productId:parseInt(t.params.productId)})}}),",",r.a.createElement(P.a,{path:"/add",component:me}),",",r.a.createElement(P.a,{path:"*",component:Z}),","))}}]),t}(n.Component),se=a(7),pe=[{id:1,name:"TV & Home Cinema"},{id:2,name:"Laptops"},{id:3,name:"Watches"},{id:4,name:"Headphones"},{id:5,name:"Phones"},{id:6,name:"Desktops"},{id:7,name:"Monitors"},{id:8,name:"Printers"},{id:9,name:"Monitors"},{id:10,name:"Camera & Photo"},{id:11,name:"Audio & HiFi"}],fe=new function e(){Object(E.a)(this,e),this.getCategories=function(){return pe}},Ee=Object(se.b)(),ge={history:Ee,categoryApi:fe},be=Object(o.createStore)(x,Object(m.composeWithDevTools)(Object(o.applyMiddleware)(l.a.withExtraArgument(ge))));be.dispatch(function(e,t,a){var n=a.categoryApi;e({type:"REQUEST_CATEGORIES"}),e(function(e){return{type:f,categories:e.map(function(e){return e})}}(n.getCategories()))}),be.dispatch(function(e){e({type:"REQUEST_PRODUCTS"}),e(function(e){return{type:h,products:e.map(function(e){return e})}}(b.getProducts()))}),i.a.render(r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement(u.a,{store:be},r.a.createElement(P.b,{history:Ee},r.a.createElement(de,null))))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0735be28.chunk.js.map