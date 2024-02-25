(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),i=t.n(r),a=t(312),o=t.n(a)()(i());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap);"]),o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);"]),o.push([n.id,'* {\n  font-family: "Oswald", sans-serif;\n  font-weight: 500;\n}\n\nhtml{\n  height: 100%;\n  font-size: 62.5%;\n}\n\nbody{\n  height: 100%;\n  background: rgb(0,0,63);\n  background: radial-gradient(circle, rgba(0,0,63,1) 35%, rgba(0,0,0,1) 100%);\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-repeat: no-repeat;\n}\n\nh1{\n  width: 500px;\n  color: white;\n  font-size: 3rem;\n  text-wrap: nowrap;\n  text-align: center;\n}\n\nh2{\n  font-family: "Black Ops One", system-ui;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 2rem;\n  color: white;\n}\n\n#orders-results{\n  width: 800px;\n  height: 0px;\n  position: absolute;\n  border: 1px solid white;\n  border-radius: 15px;\n  background-color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#orders-results-txt\n{\n\n}\n\n#waters-txt{\n  display: flex;\n  flex-wrap: wrap;\n  width: 1100px;\n  gap: 100px;\n  justify-content: space-evenly;\n  position: relative;\n  top: 0px;\n  visibility: hidden;\n}\n\n#homepage{\n  width: 100%;\n  height: 55%;\n  /* background-color: aliceblue; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  opacity: 0;\n}\n\n#player-name-form{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 50%;\n  height: 50%;\n  /* background-color: aqua; */\n  font-size: 2rem;\n  color: #DDDDDD;\n}\n\n#logo{\n  position: absolute;\n  top: -70px;\n}\n\n#player-name{\n  width: 250px;\n  height: 55px;\n  font-size: 2rem;\n  box-sizing: border-box;\n  padding-left: 10px;\n  padding-bottom: 5px;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton{\n  width: 150px;\n  height: 70px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton:hover{\n  filter: brightness(80%);\n  cursor: pointer;\n}\n\n#name-req\n{\n  font-size: 0;\n  color: rgb(212, 17, 17);\n}\n\nlegend{\n  font-size: 4rem;\n  color: #DDDDDD;\n}\n\n#placement-page{\n  visibility: hidden;\n  background-color: transparent;\n  width: 50%;\n  height: 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  top: 100px;\n}\n\n#axis-btn{\n  width: 100px;\n  height: 50px;\n}\n\n#both-fields{\n  width: auto;\n  height: auto;\n  display: flex;\n}\n\n#fields-table, #fields-table-ai{\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: auto;\n  gap: 2px;\n  background-color: transparent;\n}\n\n#fields-table-ai{\n  position: absolute;\n  top: -10000px;\n  visibility: hidden;\n  width: 0px;\n  height: 0px;\n}\n\n.field, .fields-ai{\n  width: 46px;\n  height: 46px;\n  background-color: transparent;\n  border: 1px solid white;\n  border-radius: 2px;\n}\n\n.available, .unavailable{\n  transition: 0.3s ease-in-out;\n}\n\n.available:hover{\n  background-color: #b8b7b7;\n  cursor: pointer;\n}\n\n.unavailable:hover{\n  background-color: #c51e1e;\n  cursor: not-allowed;\n}\n\n.carrierx{\n  width: 240px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  left: 7px;\n  bottom: -5px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.carriery{\n  width: 240px;\n  height: 35px;\n  rotate: 90deg;\n  position: relative;\n  left: -97px;\n  bottom: -105px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.battleshipx{\n  width: 192px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n  left: 4px;\n  bottom: -5px;\n}\n\n\n.battleshipy{\n  width: 192px;\n  height: 35px;\n  rotate: 90deg;\n  box-sizing: border-box;\n  position: relative;\n  left: -73px;\n  bottom: -80px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.destroyerx{\n  width: 145px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n  left: 4px;\n  bottom: -5px;\n}\n\n\n.destroyery{\n  width: 145px;\n  height: 35px;\n  rotate: 90deg;\n  box-sizing: border-box;\n  position: relative;\n  left: -50px;\n  bottom: -58px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.submarinex{\n  width: 140px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n  left: 4px;\n  bottom: -5px;\n}\n\n\n.submariney{\n  width: 140px;\n  height: 35px;\n  rotate: 90deg;\n  box-sizing: border-box;\n  position: relative;\n  left: -48px;\n  bottom: -58px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.patrol_boatx{\n  width: 90px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n  left: 4px;\n  bottom: -5px;\n}\n\n\n.patrol_boaty{\n  width: 90px;\n  height: 35px;\n  rotate: 90deg;\n  box-sizing: border-box;\n  position: relative;\n  left: -22px;\n  bottom: -32px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}',""]);const s=o},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var l=n[s],d=r.base?l[0]+r.base:l[0],c=a[d]||0,p="".concat(d," ").concat(c);a[d]=c+1;var u=t(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var b=i(h,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:b,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var l=r(n,i),d=0;d<a.length;d++){var c=t(a[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=l}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),i=t.n(r),a=t(176),o=t.n(a),s=t(120),l=t.n(s),d=t(808),c=t.n(d),p=t(936),u=t.n(p),h=t(904),b={};b.styleTagTransform=u(),b.setAttributes=l(),b.insert=o().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=c(),e()(h.c,b),h.c&&h.c.locals&&h.c.locals;const f=document.getElementById("logo"),g=document.getElementById("homepage"),m=document.getElementById("player-name"),v=document.getElementById("start-game-btn"),x=document.getElementById("name-req"),y=document.getElementById("placement-page"),w=document.getElementById("placement-txt"),L=document.getElementById("axis-btn"),E=document.getElementsByClassName("field"),S=document.getElementById("both-fields"),I=document.getElementById("fields-table-ai"),A=document.getElementById("waters-txt"),T=document.getElementById("orders-results");document.getElementById("orders-results-txt");let k=Array(10),M=0;for(let n=0;n<10;n++){k[n]=Array(10);for(let e=0;e<10;e++)k[n][e]=E[M++]}function C(n){let e=0;const t=setInterval((()=>{n.style.opacity=`${e}`,e+=.01,e>=1&&clearInterval(t)}),35)}function H(n,e){let t=1;const r=setInterval((()=>{if(n.style.opacity=`${t}`,t-=.01,t<=0)if(n!==e)n.style.visibility="hidden",n.style.height="0",f.style.width="250px",f.style.top="-10px",e.style.visibility="visible",e.style.height="80%",clearInterval(r);else{for(;y.firstChild!==S&&y.firstChild!==A;)y.removeChild(y.firstChild);S.style.gap="100px",I.style.width="500px",I.style.height="auto",I.style.visibility="visible",I.style.position="static",T.style.position="static",T.style.height="60px",A.style.visibility="visible",C(n),clearInterval(r)}}),25)}function z(n,e,t,r){if("AXIS: X"===t.innerHTML){for(let t=0;t<10;t++)for(let i=0;i<10;i++)for(let a=0;a<e.board.boardShips[r].length;a++)if(i+a<10&&null!==e.board.board[t][i+a]){n[t][i].classList.add("unavailable"),n[t][i].classList.remove("available");break}}else if("AXIS: Y"===t.innerHTML)for(let t=0;t<10;t++)for(let i=0;i<10;i++)for(let a=0;a<e.board.boardShips[r].length;a++)if(t+a<10&&null!==e.board.board[t+a][i]){n[t][i].classList.add("unavailable"),n[t][i].classList.remove("available");break}}function B(n,e,t,r){if("AXIS: X"===t.innerHTML)for(let t=0;t<10;t++)for(let i=0;i<10;i++)null!==e.board.board[t][i]?(n[t][i].classList.add("unavailable"),n[t][i].classList.remove("available")):i<=10-e.board.boardShips[r].length?(n[t][i].classList.remove("unavailable"),n[t][i].classList.add("available")):(n[t][i].classList.add("unavailable"),n[t][i].classList.remove("available"));else if("AXIS: Y"===t.innerHTML)for(let t=0;t<10;t++)for(let i=0;i<10;i++)null!==e.board.board[t][i]?(n[t][i].classList.add("unavailable"),n[t][i].classList.remove("available")):t<=10-e.board.boardShips[r].length?(n[t][i].classList.remove("unavailable"),n[t][i].classList.add("available")):(n[t][i].classList.add("unavailable"),n[t][i].classList.remove("available"))}function O(n,e,t,r,i,a,o){if("AXIS: X"===t.innerHTML)for(let t=0;t<e.board.boardShips[r].length;t++)n[i][a+t].style.backgroundColor=o;else if("AXIS: Y"===t.innerHTML)for(let t=0;t<e.board.boardShips[r].length;t++)n[i+t][a].style.backgroundColor=o}class X{constructor(n,e){this.name=e,this.length=n,this.numberOfHit=0,this.sunk=!1}hit(){return++this.numberOfHit}isSunk(){if(this.length-this.numberOfHit==0)return this.sunk=!0}}class D{constructor(){this.boardShips=[new X(5,"CARRIER"),new X(4,"BATTLESHIP"),new X(3,"DESTROYER"),new X(3,"SUBMARINE"),new X(2,"PATROL BOAT")],this.dimensions=10,this.board=Array(this.dimensions);for(let n=0;n<this.board.length;n++)this.board[n]=Array(this.dimensions).fill(null)}placeAShip(n,e,t,r){if("AXIS: X"===t)for(let t=0;t<e.length;t++)r[n[0]][n[1]+t]=e.name;else if("AXIS: Y"===t)for(let t=0;t<e.length;t++)r[n[0]+t][n[1]]=e.name;return r}receiveAttack(n,e){for(let t=0;t<e.dimensions;t++)for(let r=0;r<e.dimensions;r++)if(e.board[n[0]][n[1]]===e.board[t][r])for(let n=0;n<e.boardShips.length;n++)if(e.boardShips[n].name===e.board[n][r])return e.boardShips[n].hit(),e.board[n][r]=null,e.board}}new D;class R{constructor(n){this.name=n,this.board=new D}}new R("AI");const Y=new R;document.addEventListener("DOMContentLoaded",(()=>{C(g)})),v.addEventListener("click",(()=>{""===m.value?x.style.fontSize="2rem":(Y.name=m.value,H(g,y),v.style.pointerEvents="none",function(n,e,t,r,i=0){B(r,n,t,i),e.innerHTML=n.name+", PLACE YOUR "+n.board.boardShips[i].name+":",e.innerHTML=e.innerHTML.toUpperCase(),t.addEventListener("click",(()=>{"AXIS: Y"===t.innerHTML?t.innerHTML="AXIS: X":"AXIS: X"===t.innerHTML&&(t.innerHTML="AXIS: Y"),B(r,n,t,i),z(r,n,t,i)})),r.forEach(((a,o)=>{a.forEach(((a,s)=>{a.addEventListener("click",(()=>{a.classList.contains("available")&&i<5&&(r.forEach((n=>{n.forEach((n=>{n.style.backgroundColor="transparent"}))})),n.board.placeAShip([o,s],n.board.boardShips[i],t.innerHTML,n.board.board),function(n,e,t,r){let i;i=4===e?"patrol_boat"+r.charAt(r.length-1).toLowerCase():n.board.boardShips[e].name.toLowerCase()+r.charAt(r.length-1).toLowerCase(),t.innerHTML=`<img class="${i}" src="/dist/images/${n.board.boardShips[e].name.toLowerCase()}.png" alt="">`}(n,i,a,t.innerHTML),5==++i?(r.forEach((n=>{n.forEach((n=>{n.classList.remove("available","unavailable")}))})),H(y,y)):(B(r,n,t,i),z(r,n,t,i),e.innerHTML=n.name+", PLACE YOUR "+n.board.boardShips[i].name+":",e.innerHTML=e.innerHTML.toUpperCase()))})),a.addEventListener("mouseover",(()=>{a.classList.contains("available")&&i<5&&O(r,n,t,i,o,s,"#b8b7b7")})),a.addEventListener("mouseout",(()=>{a.classList.contains("available")&&i<5&&O(r,n,t,i,o,s,"transparent")})),a.addEventListener("mouseover",(()=>{a.classList.contains("unavailable")&&null===n.board.board[o][s]&&i<5&&(a.style.backgroundColor="#c51e1e")})),a.addEventListener("mouseout",(()=>{a.classList.contains("unavailable")&&i<5&&(a.style.backgroundColor="transparent")}))}))}))}(Y,w,L,k))}))})()})();