!function(t){var e={};function i(n){if(e[n])return e[n].exports;var h=e[n]={i:n,l:!1,exports:{}};return t[n].call(h.exports,h,h.exports,i),h.l=!0,h.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var h in t)i.d(n,h,function(e){return t[e]}.bind(null,h));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0);function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e,i,n,h){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.height=h,this.width=n,this.context=i,this.canvas=e,this.platforms=new Map}var e,i,h;return e=t,(i=[{key:"define",value:function(t,e,i){var n={x:this.canvas.width-e,y:this.canvas.height-i,width:this.width,height:this.height};this.platforms.set(t,n)}},{key:"draw_platforms",value:function(t){this.context.fillStyle="blue";var e=this.platforms.get(t);this.context.fillRect(e.x,e.y,e.width,e.height)}}])&&n(e.prototype,i),h&&n(e,h),t}(),r=document.getElementById("game"),o=r.getContext("2d"),l=new h(r,o,120,10),u=!1,a=[],d={x:5,y:r.height-20,width:20,height:20,speed:5,velX:0,velY:0,color:"#ff0000",jumping:!1,grounded:!1,jumpStrength:7,draw:function(){o.fillStyle=this.color,o.fillRect(this.x,this.y,this.width,this.height)}};function f(t,e){var i=t.x+t.width/2-(e.x+e.width/2),n=t.y+t.height/2-(e.y+e.height/2),h=t.width/2+e.width/2,r=t.height/2+e.height/2,o=null;if(Math.abs(i)<h&&Math.abs(n)<r){var l=h-Math.abs(i),u=r-Math.abs(n);l<u?i>0?(o="left",t.x+=l):(o="right",t.x-=l):n>0?(o="top",t.y+=u):(o="bottom",t.y-=u)}return o}function s(){!function(){o.fillStyle="#333333";for(var t=0;t<l.length;t++)o.fillRect(l[t].x,l[t].y,l[t].width,l[t].height)}(),d.draw(),(a[38]||a[32])&&(d.jumping||(d.velY=2*-d.jumpStrength,d.jumping=!0)),a[39]&&d.velX<d.speed&&d.velX++,a[37]&&d.velX>-d.speed&&d.velX--,d.x+=d.velX,d.y+=d.velY,d.velX*=.8,d.velY+=.98,d.grounded=!1;for(var t=0;t<l.length;t++){var e=f(d,l[t]);"left"==e||"right"==e?d.velX=0:"bottom"==e?(d.jumping=!1,d.grounded=!0):"top"==e&&(d.velY*=-1)}d.grounded&&(d.velY=0)}function c(){o.clearRect(0,0,r.width,r.height)}(l=[]).push({x:r.width-170,y:40,width:120,height:10}),l.push({x:r.width-170,y:r.height-50,width:120,height:10}),l.push({x:r.width-380,y:r.height-120,width:120,height:10}),l.push({x:r.width-380,y:r.height-240,width:120,height:10}),l.push({x:r.width-590,y:r.height-180,width:120,height:10}),l.push({x:0,y:r.height-5,width:r.width,height:10}),document.body.addEventListener("keydown",(function(t){13!=t.keyCode||u||(u=!0,c(),setInterval((function(){c(),s()}),1e3/30)),a[t.keyCode]=!0})),document.body.addEventListener("keyup",(function(t){a[t.keyCode]=!1})),function(t,e){e.font="50px Impact",e.fillStyle="orange",e.textAlign="center",e.fillText("Banana Dash",t.width/2,t.height/2),e.font="20px Arial",e.fillText("Press Enter To Start",t.width/2,t.height/2+50)}(r,o)}]);
//# sourceMappingURL=main.js.map