import"../chunks/Bg9kRutz.js";import{f as h,$ as M,e as _,s,r as u,t as O,n as S,j as P,k as b}from"../chunks/Df3_wIAr.js";import{s as V}from"../chunks/cH138Czs.js";import{i as q}from"../chunks/D60o7wjF.js";import{c as z,a as m,t as l}from"../chunks/DHU9EYRn.js";import{h as A}from"../chunks/DTVdssgg.js";import{s as E}from"../chunks/q2Q9Fb5O.js";import{a as $,P as F}from"../chunks/BhrJqHhU.js";import{s as G,p as n}from"../chunks/US9B9zQq.js";var H=l('<meta data-key="description">'),I=l("<h1> <br> <small> </small></h1> <!> <!> <!>",1),J=l('<h1>Oops!</h1> <p>Sorry, no posts to show here.</p> <a href="/blog">Back to blog</a>',1);function Z(y,x){const{page:e,category:o,totalPosts:r,posts:p}=x.data;let k=b(()=>e*n-(n-1)||1),B=b(()=>Math.min(e*n,r));var g=z();A(a=>{var t=H();M.title=`Blog category ${o??""} - page ${e??""}`,E(t,"name",G),m(a,t)});var w=h(g);{var j=a=>{var t=I(),i=h(t),f=_(i);f.nodeValue=`Category: ${o??""} `;var c=s(f,3),D=_(c);u(c),u(i);var v=s(i,2);$(v,{currentPage:e,totalPosts:r,path:`/blog/category/${o??""}/page`});var d=s(v,2);F(d,{posts:p});var L=s(d,2);$(L,{currentPage:e,totalPosts:r,path:`/blog/category/${o??""}/page`}),O(()=>V(D,`Posts ${P(k)??""}–${P(B)??""} of ${r??""}`)),m(a,t)},C=a=>{var t=J();S(4),m(a,t)};q(w,a=>{p&&p.length?a(j):a(C,!1)})}m(y,g)}export{Z as component};
