"use strict";(self.webpackChunkstudentapp=self.webpackChunkstudentapp||[]).push([[695],{695:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});var l=a(2),n=a(611),i=(a(508),a(152)),r=a(791),o=a(871),c=a(184);var t=function(){var e=(0,o.s0)(),s=(0,r.useState)([]),a=(0,i.Z)(s,2),l=a[0],n=a[1],t=(0,r.useState)(),d=(0,i.Z)(t,2),m=d[0],g=d[1],u=(0,r.useState)(),h=(0,i.Z)(u,2),x=h[0],p=h[1],j=(0,r.useState)([]),v=(0,i.Z)(j,2);return v[0],v[1],(0,r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userList"));console.log(e),e&&n(e)}),[]),null!==JSON.parse(sessionStorage.getItem("loginDetails"))?(window.location.href="#/loginpage/dashboard",(0,c.jsx)("div",{})):(0,c.jsx)("div",{className:"loginForm",children:(0,c.jsxs)("form",{children:[(0,c.jsxs)("div",{className:"row mb-3",children:[(0,c.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label",children:"Username"}),(0,c.jsx)("div",{className:"col-sm-10",children:(0,c.jsx)("input",{type:"text",className:"form-control",id:"inputEmail3",placeholder:"UserID",required:!0,onChange:function(e){return g(e.target.value)}})})]}),(0,c.jsxs)("div",{className:"row mb-3",children:[(0,c.jsx)("label",{htmlFor:"inputPassword3",className:"col-sm-2 col-form-label",children:"Password"}),(0,c.jsx)("div",{className:"col-sm-10",children:(0,c.jsx)("input",{type:"password",className:"form-control",id:"inputPassword3",required:!0,onChange:function(e){return p(e.target.value)}})})]}),(0,c.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(s){console.log("userlist in fn  ",l),console.log("username is ",m),l.map((function(s,a){console.log("jjj",s),console.log("jjj",s.username),console.log("jjj",s.password),console.log("index is ",a);var l={username:m,password:x,index:a};m===s.username&&x===s.password?sessionStorage.setItem("loginDetails",JSON.stringify(l)):console.log("invalid user"),m===s.username&&x===s.password&&e("/loginpage/dashboard")})),s.preventDefault()},children:"Sign in"}),(0,c.jsxs)("p",{className:"signup",children:["Create Account ",(0,c.jsx)("a",{href:"#/loginpage/register",children:"Click Here"})]})]})})},d=(a(632),a(371),a(504));var m=function(){return(0,c.jsxs)("div",{className:"App",children:[(0,c.jsx)("nav",{className:"navbar navbar-expand-lg ",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("img",{src:n}),(0,c.jsx)("div",{id:"navbarResponsive",children:(0,c.jsxs)("ul",{className:"navbar-nav",children:[(0,c.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:(0,c.jsx)(d.rU,{to:"/",className:"li",style:{color:"white"},children:"Home"})}),(0,c.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:(0,c.jsx)(d.rU,{to:"/loginpage/login",className:"li",style:{color:"white"},children:"Login"})}),(0,c.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:(0,c.jsx)(d.rU,{to:"/loginpage/register",className:"li",style:{color:"white"},children:"Register"})}),(0,c.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:(0,c.jsx)(d.rU,{to:"/loginpage/dashboard",className:"li",style:{color:"white"},children:"Dashboard"})})]})})]})}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-6",children:(0,c.jsx)("img",{src:l,width:"700px",height:"600px"})}),(0,c.jsxs)("div",{className:"col-6 login",children:[(0,c.jsx)("h2",{className:"heading",children:"LogIn Here"}),(0,c.jsx)(t,{})]})]})]})}},2:function(e,s,a){e.exports=a.p+"static/media/img1.bef297f81da57125500a.png"}}]);
//# sourceMappingURL=695.e766fd75.chunk.js.map