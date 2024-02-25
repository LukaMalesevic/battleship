(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),a=t.n(r),o=t(312),i=t.n(o)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap);"]),i.push([n.id,'* {\n  font-family: "Oswald", sans-serif;\n  font-weight: 500;\n}\n\nhtml{\n  height: 100%;\n  font-size: 62.5%;\n}\n\nbody{\n  height: 100%;\n  background: rgb(0,0,63);\n  background: radial-gradient(circle, rgba(0,0,63,1) 35%, rgba(0,0,0,1) 100%);\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#homepage{\n  width: 100%;\n  height: 55%;\n  /* background-color: aliceblue; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  opacity: 0;\n}\n\n#player-name-form{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  width: 50%;\n  height: 50%;\n  /* background-color: aqua; */\n  font-size: 2rem;\n  color: #DDDDDD;\n}\n\n#logo{\n  position: absolute;\n  top: -70px;\n}\n\n#player-name{\n  width: 250px;\n  height: 55px;\n  font-size: 2rem;\n  box-sizing: border-box;\n  padding-left: 10px;\n  padding-bottom: 5px;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton{\n  width: 150px;\n  height: 70px;\n  font-size: 2rem;\n  border: none;\n  border-radius: 5px;\n}\n\nbutton:hover{\n  filter: brightness(80%);\n  cursor: pointer;\n}\n\n#name-req\n{\n  font-size: 0;\n  color: rgb(212, 17, 17);\n}\n\nlegend{\n  font-size: 4rem;\n  color: #DDDDDD;\n}\n\n#placement-page{\n  visibility: hidden;\n  background-color: transparent;\n  width: 50%;\n  height: 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  top: 100px;\n}\n\n#axis-btn{\n  width: 100px;\n  height: 50px;\n}\n\n#fields-table{\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: auto;\n  gap: 2px;\n  background-color: transparent;\n}\n\n.field{\n  width: 46px;\n  height: 46px;\n  background-color: transparent;\n  border: 1px solid white;\n  border-radius: 2px;\n}\n\n.available, .unavailable{\n  transition: 0.3s ease-in-out;\n}\n\n.available:hover{\n  background-color: #b8b7b7;\n  cursor: pointer;\n}\n\n.unavailable:hover{\n  background-color: #c51e1e;\n  cursor: not-allowed;\n}\n\n.carrierx{\n  width: 240px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  left: 7px;\n  bottom: -5px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.carriery{\n  width: 240px;\n  height: 35px;\n  rotate: 90deg;\n  position: relative;\n  left: -97px;\n  bottom: -105px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.battleshipx{\n  width: 192px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n  left: 4px;\n  bottom: -5px;\n}\n\n\n.battleshipy{\n  width: 192px;\n  height: 35px;\n  rotate: 90deg;\n  box-sizing: border-box;\n  position: relative;\n  left: -73px;\n  bottom: -80px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.destroyerx{\n  width: 145px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n  left: 4px;\n  bottom: -5px;\n}\n\n\n.destroyery{\n  width: 145px;\n  height: 35px;\n  rotate: 90deg;\n  box-sizing: border-box;\n  position: relative;\n  left: -50px;\n  bottom: -58px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.submarinex{\n  width: 140px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n  left: 4px;\n  bottom: -5px;\n}\n\n\n.submariney{\n  width: 140px;\n  height: 35px;\n  rotate: 90deg;\n  box-sizing: border-box;\n  position: relative;\n  left: -48px;\n  bottom: -58px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}\n\n.patrol_boatx{\n  width: 90px;\n  height: 35px;\n  box-sizing: border-box;\n  position: relative;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n  left: 4px;\n  bottom: -5px;\n}\n\n\n.patrol_boaty{\n  width: 90px;\n  height: 35px;\n  rotate: 90deg;\n  box-sizing: border-box;\n  position: relative;\n  left: -22px;\n  bottom: -32px;\n  filter: invert(81%) sepia(70%) saturate(6220%) hue-rotate(192deg) brightness(100%) contrast(91%);\n  opacity: 0.75;\n}',""]);const s=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var l=n[s],d=r.base?l[0]+r.base:l[0],c=o[d]||0,p="".concat(d," ").concat(c);o[d]=c+1;var u=t(p),b={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(b);else{var h=a(b,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var l=r(n,a),d=0;d<o.length;d++){var c=t(o[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=l}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),a=t.n(r),o=t(176),i=t.n(o),s=t(120),l=t.n(s),d=t(808),c=t.n(d),p=t(936),u=t.n(p),b=t(904),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=c(),e()(b.c,h),b.c&&b.c.locals&&b.c.locals;const f=document.getElementById("logo"),g=document.getElementById("homepage"),m=document.getElementById("player-name"),v=document.getElementById("start-game-btn"),x=document.getElementById("name-req"),y=document.getElementById("placement-page"),L=document.getElementById("placement-txt"),w=document.getElementById("axis-btn"),S=document.getElementsByClassName("field");let E=Array(10),A=0;for(let n=0;n<10;n++){E[n]=Array(10);for(let e=0;e<10;e++)E[n][e]=S[A++]}function I(n,e,t,r){if("AXIS: X"===t.innerHTML){for(let t=0;t<10;t++)for(let a=0;a<10;a++)for(let o=0;o<e.board.boardShips[r].length;o++)if(a+o<10&&null!==e.board.board[t][a+o]){n[t][a].classList.add("unavailable"),n[t][a].classList.remove("available");break}}else if("AXIS: Y"===t.innerHTML)for(let t=0;t<10;t++)for(let a=0;a<10;a++)for(let o=0;o<e.board.boardShips[r].length;o++)if(t+o<10&&null!==e.board.board[t+o][a]){n[t][a].classList.add("unavailable"),n[t][a].classList.remove("available");break}}function T(n,e,t,r){if("AXIS: X"===t.innerHTML)for(let t=0;t<10;t++)for(let a=0;a<10;a++)null!==e.board.board[t][a]?(n[t][a].classList.add("unavailable"),n[t][a].classList.remove("available")):a<=10-e.board.boardShips[r].length?(n[t][a].classList.remove("unavailable"),n[t][a].classList.add("available")):(n[t][a].classList.add("unavailable"),n[t][a].classList.remove("available"));else if("AXIS: Y"===t.innerHTML)for(let t=0;t<10;t++)for(let a=0;a<10;a++)null!==e.board.board[t][a]?(n[t][a].classList.add("unavailable"),n[t][a].classList.remove("available")):t<=10-e.board.boardShips[r].length?(n[t][a].classList.remove("unavailable"),n[t][a].classList.add("available")):(n[t][a].classList.add("unavailable"),n[t][a].classList.remove("available"))}function M(n,e,t,r,a,o,i){if("AXIS: X"===t.innerHTML)for(let t=0;t<e.board.boardShips[r].length;t++)n[a][o+t].style.backgroundColor=i;else if("AXIS: Y"===t.innerHTML)for(let t=0;t<e.board.boardShips[r].length;t++)n[a+t][o].style.backgroundColor=i}class H{constructor(n,e){this.name=e,this.length=n,this.numberOfHit=0,this.sunk=!1}hit(){return++this.numberOfHit}isSunk(){if(this.length-this.numberOfHit==0)return this.sunk=!0}}class k{constructor(){this.boardShips=[new H(5,"CARRIER"),new H(4,"BATTLESHIP"),new H(3,"DESTROYER"),new H(3,"SUBMARINE"),new H(2,"PATROL BOAT")],this.dimensions=10,this.board=Array(this.dimensions);for(let n=0;n<this.board.length;n++)this.board[n]=Array(this.dimensions).fill(null)}placeAShip(n,e,t,r){if("AXIS: X"===t)for(let t=0;t<e.length;t++)r[n[0]][n[1]+t]=e.name;else if("AXIS: Y"===t)for(let t=0;t<e.length;t++)r[n[0]+t][n[1]]=e.name;return r}receiveAttack(n,e){for(let t=0;t<e.dimensions;t++)for(let r=0;r<e.dimensions;r++)if(e.board[n[0]][n[1]]===e.board[t][r])for(let n=0;n<e.boardShips.length;n++)if(e.boardShips[n].name===e.board[n][r])return e.boardShips[n].hit(),e.board[n][r]=null,e.board}}new k;class C{constructor(n){this.name=n,this.board=new k}}new C("AI");const X=new C;document.addEventListener("DOMContentLoaded",(()=>{!function(n){let e=0;const t=setInterval((()=>{n.style.opacity=`${e}`,e+=.01,e>=1&&clearInterval(t)}),35)}(g)})),v.addEventListener("click",(()=>{""===m.value?x.style.fontSize="2rem":(X.name=m.value,function(n,e){let t=1;const r=setInterval((()=>{n.style.opacity=`${t}`,t-=.01,t<=0&&(n.style.visibility="hidden",n.style.height="0",f.style.width="250px",f.style.top="-10px",e.style.visibility="visible",e.style.height="80%",clearInterval(r))}),25)}(g,y),v.style.pointerEvents="none",function(n,e,t,r,a=0){T(r,n,t,a),e.innerHTML=n.name+", PLACE YOUR "+n.board.boardShips[a].name+":",e.innerHTML=e.innerHTML.toUpperCase(),t.addEventListener("click",(()=>{"AXIS: Y"===t.innerHTML?t.innerHTML="AXIS: X":"AXIS: X"===t.innerHTML&&(t.innerHTML="AXIS: Y"),T(r,n,t,a),I(r,n,t,a)})),r.forEach(((o,i)=>{o.forEach(((o,s)=>{o.addEventListener("click",(()=>{o.classList.contains("available")&&(r.forEach((n=>{n.forEach((n=>{n.style.backgroundColor="transparent"}))})),n.board.placeAShip([i,s],n.board.boardShips[a],t.innerHTML,n.board.board),function(n,e,t,r){let a;a=4===e?"patrol_boat"+r.charAt(r.length-1).toLowerCase():n.board.boardShips[e].name.toLowerCase()+r.charAt(r.length-1).toLowerCase(),t.innerHTML=`<img class="${a}" src="/dist/images/${n.board.boardShips[e].name.toLowerCase()}.png" alt="">`}(n,a,o,t.innerHTML),a<4&&a++,T(r,n,t,a),I(r,n,t,a),e.innerHTML=n.name+", PLACE YOUR "+n.board.boardShips[a].name+":",e.innerHTML=e.innerHTML.toUpperCase(),console.log(r),console.log(n.board.board))})),o.addEventListener("mouseover",(()=>{o.classList.contains("available")&&M(r,n,t,a,i,s,"#b8b7b7")})),o.addEventListener("mouseout",(()=>{o.classList.contains("available")&&M(r,n,t,a,i,s,"transparent")})),o.addEventListener("mouseover",(()=>{o.classList.contains("unavailable")&&null===n.board.board[i][s]&&(o.style.backgroundColor="#c51e1e")})),o.addEventListener("mouseout",(()=>{o.classList.contains("unavailable")&&(o.style.backgroundColor="transparent")}))}))}))}(X,L,w,E))}))})()})();