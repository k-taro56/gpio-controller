(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8385:function(e,t,l){Promise.resolve().then(l.bind(l,6805))},6805:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return n}});var s=l(6724),a=l(8776),r=e=>{let{value:t,onChange:l}=e,a=100-(t+100)/2;return(0,s.jsxs)("div",{className:"relative w-1/2 h-full",children:[(0,s.jsx)("div",{className:"track absolute h-full w-4 bg-gray-300 left-1/2 transform -translate-x-1/2"}),0<=t?(0,s.jsx)("div",{className:"highlight absolute w-4 bg-green-500 left-1/2 transform -translate-x-1/2",style:{top:"".concat(a,"%"),bottom:"50%"}}):(0,s.jsx)("div",{className:"highlight absolute w-4 bg-red-500 left-1/2 transform -translate-x-1/2 translate-y-full",style:{top:"".concat(50+t/2,"%"),bottom:"50%"}}),(0,s.jsx)("div",{className:"thumb absolute w-16 h-16 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2",style:{top:"calc(".concat(a,"% - 0.5rem)")}}),(0,s.jsx)("input",{type:"range",min:"-100",max:"100",value:t,className:"absolute h-full w-full input-range opacity-0 cursor: pointer;",step:"0.1",style:{appearance:"slider-vertical"},onChange:e=>l(Number(e.target.value))})]})};function n(){let[e,t]=(0,a.useState)(0),[l,n]=(0,a.useState)(0);function i(e,t){fetch("http://raspberrypi.local:8000",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sliderId:e,value:t})}).then(e=>{e.ok||console.error("Error sending data:",e.statusText)})}return(0,s.jsx)("div",{className:"flex justify-center items-center h-screen dark:bg-gray-800",children:(0,s.jsxs)("div",{className:"flex flex-col items-center space-y-4 dark:text-white h-full w-96 p-8",children:[(0,s.jsxs)("div",{className:"flex h-full w-full",children:[(0,s.jsx)(r,{value:e,onChange:e=>{t(e),i("left",e)}}),(0,s.jsx)(r,{value:l,onChange:e=>{n(e),i("right",e)}})]}),(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsxs)("div",{className:"flex w-1/2 justify-center",children:[(0,s.jsx)("div",{className:"mr-1",children:"Left:"}),(0,s.jsx)("div",{children:e.toFixed(1)})]}),(0,s.jsxs)("div",{className:"flex w-1/2 justify-center",children:[(0,s.jsx)("div",{className:"mr-1",children:"Right:"}),(0,s.jsx)("div",{children:l.toFixed(1)})]})]}),(0,s.jsx)("button",{className:"w-full bg-blue-400 rounded-lg",onClick:()=>{t(0),n(0),i("left",0),i("right",0)},children:"Stop"})]})})}}},function(e){e.O(0,[833,117,744],function(){return e(e.s=8385)}),_N_E=e.O()}]);