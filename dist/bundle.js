(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap);"]),i.push([n.id,'* {\n  font-family: "Oswald", sans-serif;\n  font-weight: 500;\n}\n\nhtml{\n  height: 100%;\n  font-size: 62.5%;\n}\n\nbody{\n  height: 100%;\n  background: rgb(0,0,63);\n  background: radial-gradient(circle, rgba(0,0,63,1) 35%, rgba(0,0,0,1) 100%);\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#homepage{\n  width: 100%;\n  height: 55%;\n  /* background-color: aliceblue; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  opacity: 0;\n}\n\n#player-name-form{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 50%;\n  height: 50%;\n  /* background-color: aqua; */\n  font-size: 2rem;\n  color: #DDDDDD;\n}\n\n#logo{\n  position: absolute;\n  top: -70px;\n}\n\n#player-name{\n  width: 250px;\n  height: 55px;\n  font-size: 2rem;\n  box-sizing: border-box;\n  padding-left: 10px;\n  padding-bottom: 5px;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton{\n  width: 150px;\n  height: 70px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton:hover{\n  filter: brightness(80%);\n  cursor: pointer;\n}\n\n#name-req\n{\n  font-size: 0;\n  color: rgb(212, 17, 17);\n}\n\nlegend{\n  font-size: 4rem;\n  color: #DDDDDD;\n}\n\n#placement-page{\n  visibility: hidden;\n  background-color: transparent;\n  width: 50%;\n  height: 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  top: 100px;\n}\n\n#axis-btn{\n  width: 100px;\n  height: 50px;\n}\n\n#fields-table{\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: auto;\n  gap: 2px;\n  background-color: transparent;\n}\n\n.field{\n  width: 46px;\n  height: 46px;\n  background-color: transparent;\n  border: 1px solid white;\n  border-radius: 2px;\n}\n\n.available, .unavailable{\n  transition: 0.3s ease-in-out;\n}\n\n.available:hover{\n  background-color: #b8b7b7;\n  cursor: pointer;\n}\n\n.unavailable:hover{\n  background-color: #c51e1e;\n  cursor: not-allowed;\n}\n',""]);const s=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),o=t.n(r),a=t(176),i=t.n(a),s=t(120),l=t.n(s),c=t(808),d=t.n(c),u=t(936),p=t.n(u),f=t(904),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.c,h),f.c&&f.c.locals&&f.c.locals;const m=document.getElementById("logo"),b=document.getElementById("homepage"),v=document.getElementById("player-name"),g=document.getElementById("start-game-btn"),y=document.getElementById("name-req"),x=document.getElementById("placement-page"),L=document.getElementById("placement-txt"),w=document.getElementById("axis-btn"),E=document.getElementsByClassName("field");let I=Array(10),S=0;for(let n=0;n<10;n++){I[n]=Array(10);for(let e=0;e<10;e++)I[n][e]=E[S++]}function A(n,e,t,r,o=0){if(5===o)return null;T(r,n,t,o),e.innerHTML=n.name+", PLACE YOUR "+n.board.boardShips[o].name+":",e.innerHTML=e.innerHTML.toUpperCase(),t.addEventListener("click",(()=>{"AXIS: Y"===t.innerHTML?t.innerHTML="AXIS: X":"AXIS: X"===t.innerHTML&&(t.innerHTML="AXIS: Y"),T(r,n,t,o)})),r.forEach(((a,i)=>{a.forEach(((a,s)=>{if(a.addEventListener("click",(()=>{A(n,e,t,r,++o)})),a.classList.contains("available")){let e;a.addEventListener("mouseover",(()=>{k(r,n,t,o,i,s,e="#b8b7b7")})),a.addEventListener("mouseout",(()=>{k(r,n,t,o,i,s,e="transparent")}))}else a.classList.contains("unavailable")&&(a.addEventListener("mouseover",(()=>{a.style.backgroundColor="#c51e1e"})),a.addEventListener("mouseout",(()=>{a.style.backgroundColor="transparent"})))}))}))}function T(n,e,t,r){if("AXIS: X"===t.innerHTML)for(let t=0;t<10;t++)for(let o=0;o<10;o++)o<=10-e.board.boardShips[r].length?(n[t][o].classList.remove("unavailable"),n[t][o].classList.add("available")):(n[t][o].classList.add("unavailable"),n[t][o].classList.remove("available"));else if("AXIS: Y"===t.innerHTML)for(let t=0;t<10;t++)for(let o=0;o<10;o++)t<=10-e.board.boardShips[r].length?(n[t][o].classList.remove("unavailable"),n[t][o].classList.add("available")):(n[t][o].classList.add("unavailable"),n[t][o].classList.remove("available"))}function k(n,e,t,r,o,a,i){if("AXIS: X"===t.innerHTML)for(let t=0;t<e.board.boardShips[r].length;t++)n[o][a+t].style.backgroundColor=i;else if("AXIS: Y"===t.innerHTML)for(let t=0;t<e.board.boardShips[r].length;t++)n[o+t][a].style.backgroundColor=i}class M{constructor(n,e){this.name=e,this.length=n,this.numberOfHit=0,this.sunk=!1}hit(){return++this.numberOfHit}isSunk(){if(this.length-this.numberOfHit==0)return this.sunk=!0}}class C{constructor(){this.boardShips=[new M(5,"CARRIER"),new M(4,"BATTLESHIP"),new M(3,"DESTROYER"),new M(3,"SUBMARINE"),new M(2,"PATROL BOAT")],this.dimensions=10,this.board=Array(this.dimensions);for(let n=0;n<this.board.length;n++)this.board[n]=Array(this.dimensions).fill(null)}placeAShip(n,e,t,r){if("x"===t)for(let t=0;t<e.length;t++)r[n[0]][n[1]+t]=e.name;for(let t=0;t<e.length;t++)r[n[0]][n[1]]=e.name;return r}receiveAttack(n,e){for(let t=0;t<e.dimensions;t++)for(let r=0;r<e.dimensions;r++)if(e.board[n[0]][n[1]]===e.board[t][r])for(let n=0;n<e.boardShips.length;n++)if(e.boardShips[n].name===e.board[n][r])return e.boardShips[n].hit(),e.board[n][r]=null,e.board}}new C;class H{constructor(n){this.name=n,this.board=new C}}new H("AI");const D=new H;document.addEventListener("DOMContentLoaded",(()=>{!function(n){let e=0;const t=setInterval((()=>{n.style.opacity=`${e}`,e+=.01,e>=1&&clearInterval(t)}),35)}(b)})),g.addEventListener("click",(()=>{""===v.value?y.style.fontSize="2rem":(D.name=v.value,function(n,e){let t=1;const r=setInterval((()=>{n.style.opacity=`${t}`,t-=.01,t<=0&&(n.style.visibility="hidden",n.style.height="0",m.style.width="250px",m.style.top="-10px",e.style.visibility="visible",e.style.height="80%",clearInterval(r))}),25)}(b,x),g.style.pointerEvents="none",A(D,L,w,I))}))})()})();