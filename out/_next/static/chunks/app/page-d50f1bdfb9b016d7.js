(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6285:function(e,t,n){Promise.resolve().then(n.bind(n,3159)),Promise.resolve().then(n.t.bind(n,1028,23))},3159:function(e,t,n){"use strict";let a;n.r(t),n.d(t,{default:function(){return s}});var r=n(9268),c=n(4096),o=n(6006);n(2784),n(5025);var l=n(2668),i=n.n(l);function s(e){let t=e.data;function n(e){let t=e.split("/"),n=new Date("".concat(t[1],"/").concat(t[2],"/").concat(t[0])),a=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0"),c=n.getFullYear();return"".concat(r,"/").concat(a,"/").concat(c)}let l=(e,t)=>a=new c.kL(document.getElementById("chart"),{type:"line",data:{labels:e,datasets:[{label:"Temperature battery",fill:!1,borderColor:"rgb(75, 192, 192)",tension:.5,data:t,hoverBackgroundColor:"rgb(75, 192, 192)",hoverBorderColor:"#357878"}]},options:{legend:{display:!1},title:{display:!0,text:"Temperature battery"}}});function s(e,t){for(let n=e.length-1;n>=0;n--)if(e[n]===t)return n}let d=[],p=[];for(let e in t)d.push(t[e].date_time),p.push(t[e].temp);let u=(d=d.map(e=>(function(e){let[t,n]=e.split(" "),[a,r,c]=t.split("-");r=r.padStart(2,"0"),c=c.padStart(2,"0");let[o,l]=n.split(":");return o=o.padStart(2,"0"),l=l.padStart(2,"0"),"".concat(a,"-").concat(r,"-").concat(c," ").concat(o,":").concat(l)})(e))).map(e=>(function(e){let[t,n,a]=e.split("-");return n<10&&(n="0"+parseInt(n)),a<10&&(a="0"+parseInt(a)),"".concat(t,"-").concat(n,"-").concat(a)})(e).slice(0,10).replace(/\s+/g,""));t.length;let f=d,g=p,Y=(0,o.useRef)(null);return(0,o.useEffect)(()=>(l(f,g),()=>{a.destroy()}),[f,g]),(0,o.useEffect)(()=>(i()("#range").daterangepicker({minYear:2022,timePicker24Hour:!0,autoApply:!0,startDate:"".concat(n(d[0].slice(0,10).replace(/\s+/g,"").replaceAll("-","/"))),endDate:"".concat(n(d[d.length-1].slice(0,10).replace(/\s+/g,"").replaceAll("-","/")))},function(e,t,n){let r=e.format("YYYY-MM-DD"),c=t.format("YYYY-MM-DD");console.log(r),console.log(f=d.slice(u.indexOf(r),s(u,c))),console.log(g=p.slice(u.indexOf(r),s(u,c))),a.destroy(),l(f,g),console.log("New date range selected: "+e.format("YYYY-MM-DD")+" to "+t.format("YYYY-MM-DD")+" (predefined range: "+n+")")}),()=>{a.destroy()}),[g,f,Y]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{id:"",children:(0,r.jsx)("canvas",{id:"chart"})}),(0,r.jsx)("input",{type:"text",name:"daterange",id:"range"})]})}n(5326),n(4835)},1028:function(){}},function(e){e.O(0,[804,550,180,491,566,253,769,744],function(){return e(e.s=6285)}),_N_E=e.O()}]);