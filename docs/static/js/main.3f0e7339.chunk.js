(this["webpackJsonpreact-journal-app"]=this["webpackJsonpreact-journal-app"]||[]).push([[0],{157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(31),s=n.n(r),i=n(7),o=n(8),u=n.n(o),l=n(11),d=n(19),j=n(20),b=n(10),p=n(29);n(72),n(75);p.a.initializeApp({apiKey:"AIzaSyCDdW9QNsfpNO2SrvjcmYejw6qgSTSYBco",authDomain:"react-journal-app-5a5df.firebaseapp.com",databaseURL:"https://react-journal-app-5a5df.firebaseio.com",projectId:"react-journal-app-5a5df",storageBucket:"react-journal-app-5a5df.appspot.com",messagingSenderId:"702352382023",appId:"1:702352382023:web:aac1299292aae89dc67962"});var h=p.a.firestore(),f=new p.a.auth.GoogleAuthProvider,m=n(21),O=n.n(m),x="[Auth] Login",v="[Auth] Logout",_="[UI] Set Error",g="[UI] Remove Error",y="[UI] Start loading",N="[UI] Finish loading",w="[Notes] New note",k="[Notes] Set active note",S="[Notes] Load notes",C="[Notes] Updated note",E="[Notes] Delete note",I="[Notes] Logout cleaning",A=n(5),L=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dfatvsuac/upload",(n=new FormData).append("upload_preset","react-journal-app"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dfatvsuac/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=25;break;case 20:return e.prev=20,e.t0=e.catch(4),e.next=24,e.t0;case 24:throw e.sent;case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(A.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e,t){return{type:k,payload:Object(A.a)({id:e},t)}},U=function(e,t){return{type:w,payload:Object(A.a)({id:e},t)}},R=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:a=t.sent,n(Y(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Y=function(e){return{type:S,payload:e}},M=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(A.a)({},e)).id,t.next=6,h.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(T(e.id,e)),O.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},T=function(e,t){return{type:C,payload:{id:e,note:Object(A.a)({id:e},t)}}},W=function(e){return{type:E,payload:e}},q=function(e){return{type:_,payload:e}},z=function(){return{type:N}},B=function(e,t){return function(n){n({type:y}),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(z()),n(G(t.uid,t.displayName))})).catch((function(e){console.log(e),n(z()),O.a.fire("Error",e.message,"error")}))}},G=function(e,t){return{type:x,payload:{uid:e,displayName:t}}},F=function(){return{type:v}},J=n(34),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(A.a)(Object(A.a)({},a),{},Object(J.a)({},t.name,t.value)))};return[a,i,s]},H=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,n=X({email:"",password:""}),c=Object(d.a)(n,2),r=c[0],s=c[1],o=r.email,u=r.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Login"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(B(o,u))},className:"animate__animated animate__fadeIn",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:s}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:s}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:t?"Loading":"Login"}),Object(a.jsxs)("div",{className:"auth__social-networks",children:[Object(a.jsx)("p",{children:"Login with social networks"}),Object(a.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){p.a.auth().signInWithPopup(f).then((function(t){var n=t.user;e(G(n.uid,n.displayName))}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with google"})})]})]}),Object(a.jsx)(j.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},K=n(60),Q=n.n(K),V=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError,n=X({name:"",email:"",password:"",password2:""}),c=Object(d.a)(n,2),r=c[0],s=c[1],o=r.name,b=r.email,h=r.password,f=r.password2,m=function(){return 0===o.trim().length?(e(q("Name is required")),!1):Q.a.isEmail(b)?h!==f||h<5?(e(q("Password should be at least 6 characters and match each other")),!1):(e({type:g}),!0):(e(q("Email is not valid")),!1)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Register"}),t&&Object(a.jsx)("div",{className:"auth__alert-error",children:t}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()&&e(function(e,t,n){return function(a){p.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(G(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),O.a.fire("Error",e.message,"error")}))}}(b,h,o))},className:"animate__animated animate__fadeIn",children:[Object(a.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:o,onChange:s}),Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:b,onChange:s}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:h,onChange:s}),Object(a.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",className:"auth__input",value:f,onChange:s}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(a.jsx)(j.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},Z=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth_box-container",children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/auth/login",component:H}),Object(a.jsx)(b.b,{exact:!0,path:"/auth/register",component:V}),Object(a.jsx)(b.a,{to:"/auth/login"})]})})})},$=n(35),ee=n.n($),te=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,n=ee()(t.date);return Object(a.jsxs)("div",{className:"notes__appbar",children:[Object(a.jsx)("span",{children:n.format("MMMM Do YYYY")}),Object(a.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,O.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,willOpen:function(){O.a.showLoading()}}),t.next=4,L(e);case 4:r=t.sent,c.url=r,n(M(c)),O.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(M(t))},children:"Save"})]})]})},ne=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,n=X(t),r=Object(d.a)(n,3),s=r[0],o=r[1],j=r[2],b=s.title,p=s.body,f=s.id,m=Object(c.useRef)(t.id);Object(c.useEffect)((function(){t.id!==m.current&&(j(t),m.current=t.id)}),[t,j]),Object(c.useEffect)((function(){e(D(s.id,Object(A.a)({},s)))}),[s,e]);return Object(a.jsxs)("div",{className:"notes__main-content",children:[Object(a.jsx)(te,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",value:b,name:"title",onChange:o}),Object(a.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",value:p,name:"body",onChange:o}),t.url&&Object(a.jsx)("div",{className:"notes__image",children:Object(a.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,h.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(W(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(f))},children:"Delete"})]})},ae=function(e){var t=e.id,n=e.date,c=e.title,r=e.body,s=e.url,o=ee()(n),u=Object(i.b)();return Object(a.jsxs)("div",{className:"journal__entry pointer animate__animated animate__backInLeft",onClick:function(){u(D(t,{id:t,date:n,title:c,body:r,url:s}))},children:[s&&Object(a.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(s,")")}}),Object(a.jsxs)("div",{className:"journal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title",children:c}),Object(a.jsx)("p",{className:"journal__entry-content",children:r})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:o.format("dddd")}),Object(a.jsx)("h4",{children:o.format("Do")})]})]})},ce=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return Object(a.jsx)("div",{className:"journal__entries animate__animated animate__backInLeft",children:e.map((function(e){return Object(a.jsx)(ae,Object(A.a)({},e),e.id)}))})},re=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).name;return Object(a.jsxs)("aside",{className:"journal__sidebar",children:[Object(a.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(a.jsxs)("h3",{className:"mt-5",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsxs)("span",{children:[" Hola ",t]})]}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:t(F()),t({type:I});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(a.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,h.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(D(r.id,c)),t(U(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(a.jsx)("p",{className:"mt-5",children:"New Entry"})]}),Object(a.jsx)(ce,{})]})},se=function(){return Object(a.jsxs)("div",{className:"nothing__main-content animate__animated animate__backInRight",children:[Object(a.jsxs)("p",{children:["Select something",Object(a.jsx)("br",{}),"create an entry!"]}),Object(a.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},ie=function(){var e=Object(i.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn",children:[Object(a.jsx)(re,{}),Object(a.jsx)("main",{children:e?Object(a.jsx)(ne,{}):Object(a.jsx)(se,{})})]})},oe=n(36),ue=function(e){var t=e.isAuthenticated,n=e.component,c=Object(oe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(b.b,Object(A.a)(Object(A.a)({},c),{},{component:function(e){return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)(n,Object(A.a)({},e))}}))},le=function(e){var t=e.isAuthenticated,n=e.component,c=Object(oe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(b.b,Object(A.a)(Object(A.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(A.a)({},e)):Object(a.jsx)(b.a,{to:"/auth/login"})}}))},de=function(){var e=Object(i.b)(),t=Object(c.useState)(!0),n=Object(d.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(!1),h=Object(d.a)(o,2),f=h[0],m=h[1];return Object(c.useEffect)((function(){p.a.auth().onAuthStateChanged(function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(G(n.uid,n.displayName)),m(!0),e(R(n.uid))):m(!1),s(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,s,m]),r?Object(a.jsx)("div",{className:"loading show",children:Object(a.jsx)("div",{className:"spin"})}):Object(a.jsx)(j.a,{children:Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(ue,{path:"/auth",component:Z,isAuthenticated:f}),Object(a.jsx)(le,{exact:!0,path:"/",component:ie,isAuthenticated:f}),Object(a.jsx)(b.a,{to:"/auth/login"})]})})})})},je=n(22),be=n(61),pe={loading:!1,msgError:null},he=n(45),fe={notes:[],active:null},me="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,Oe=Object(je.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{uid:t.payload.uid,name:t.payload.displayName};case v:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(A.a)(Object(A.a)({},e),{},{msgError:t.payload});case g:return Object(A.a)(Object(A.a)({},e),{},{msgError:null});case y:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});case N:return Object(A.a)(Object(A.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(A.a)(Object(A.a)({},e),{},{active:Object(A.a)({},t.payload)});case w:return Object(A.a)(Object(A.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case S:return Object(A.a)(Object(A.a)({},e),{},{notes:Object(he.a)(t.payload)});case C:return Object(A.a)(Object(A.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case E:return Object(A.a)(Object(A.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case I:return Object(A.a)(Object(A.a)({},e),{},{active:null,notes:[]});default:return e}}}),xe=Object(je.e)(Oe,me(Object(je.a)(be.a))),ve=function(){return Object(a.jsx)(i.a,{store:xe,children:Object(a.jsx)(de,{})})};n(157);s.a.render(Object(a.jsx)(ve,{}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.3f0e7339.chunk.js.map