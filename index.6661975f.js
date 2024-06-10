class e{constructor(e,t,i){let l=document.createElement("div");l.classList.add("game-board__cell"),e.append(l),this.x=t,this.y=i}static getScore(){return t}linkTile(e){e.setXY(this.x,this.y),this.linkedTile=e}unlinkTile(){this.linkedTile=null}isEmpty(){return!this.linkedTile}linkTileForMerge(e){e.setXY(this.x,this.y),this.linkedTileForMerge=e}unlinkTileForMerge(){this.linkedTileForMerge=null}hasTileForMerge(){return!!this.linkedTileForMerge}canAccept(e){return this.isEmpty()||!this.hasTileForMerge()&&this.linkedTile.value===e.value}mergeTiles(){this.linkedTile.setValue(this.linkedTile.value+this.linkedTile.value),t+=this.linkedTile.value,this.linkedTileForMerge.removeFromDOM(),this.unlinkTileForMerge(),l()}resetScore(){t=0,l()}}let t=0;const i=document.querySelector(".game-score");function l(){i.textContent=`${t}`}class s{constructor(e){this.tileElement=document.createElement("div"),this.tileElement.classList.add("tile"),this.setValue(Math.random()>.1?2:4),e.append(this.tileElement)}setXY(e,t){this.x=e,this.y=t,this.tileElement.style.setProperty("--x",e),this.tileElement.style.setProperty("--y",t)}setValue(e){this.value=e,this.tileElement.textContent=this.value;let t=function(e){switch(e){case 2:return"#fff";case 4:return"#fffbd7";case 8:return"#fff6a3";case 16:return"#ffec36";case 32:return"#ffc800";case 64:return"#ffa400";case 128:return"#ff7600";case 256:return"#ff5200";case 512:return"#ff0000";case 1024:return"#af0000";case 2048:return"#00ff37"}}(e);this.tileElement.style.setProperty("--tile-color",t),2048===this.value&&document.querySelector(".message-win").classList.remove("hidden")}removeFromDOM(){this.tileElement.remove()}waitForTransitionEnd(){return new Promise(e=>{this.tileElement.addEventListener("transitionend",e,{once:!0})})}waitForAnimationEnd(){return new Promise(e=>{this.tileElement.addEventListener("animationend",e,{once:!0})})}}const n=document.getElementById("game-board"),r=new class{constructor(t){this.cells=[],this.score=e.getScore();for(let i=0;i<16;i++)this.cells.push(new e(t,i%4,Math.floor(i/4)));this.cellsGroupedByColumn=this.groupCellsByColumn(),this.cellsGroupedByReversedColumn=this.cellsGroupedByColumn.map(e=>[...e].reverse()),this.cellsGroupedByRow=this.groupCellsByRow(),this.cellsGroupedByReversedRow=this.cellsGroupedByRow.map(e=>[...e].reverse())}getScore(){this.score=e.getScore()}getRandomEmptyCell(){let e=this.cells.filter(e=>e.isEmpty()),t=Math.floor(Math.random()*e.length);return e[t]}groupCellsByColumn(){return this.cells.reduce((e,t)=>(e[t.x]=e[t.x]||[],e[t.x][t.y]=t,e),[])}groupCellsByRow(){return this.cells.reduce((e,t)=>(e[t.y]=e[t.y]||[],e[t.y][t.x]=t,e),[])}resetScore(){this.cells[0].resetScore()}}(n),o=document.querySelector("#ourButton"),a=document.querySelector(".message-start"),c=document.querySelector(".message-lose"),u=document.querySelector(".message-win");function d(){u.classList.contains("hidden")&&window.addEventListener("keydown",m,{once:!0}),r.getScore()}async function m(e){switch(e.key){case"ArrowUp":if(!g()){d();return}await h();break;case"ArrowDown":if(!k()){d();return}await y();break;case"ArrowLeft":if(!T()){d();return}await f();break;case"ArrowRight":if(!E()){d();return}await p();break;default:d();return}let t=new s(n);if(r.getRandomEmptyCell().linkTile(t),!g()&&!k()&&!T()&&!E()){await t.waitForAnimationEnd(),c.classList.remove("hidden");return}d()}async function h(){await w(r.cellsGroupedByColumn)}async function y(){await w(r.cellsGroupedByReversedColumn)}async function f(){await w(r.cellsGroupedByRow)}async function p(){await w(r.cellsGroupedByReversedRow)}async function w(e){let t=[];e.forEach(e=>(function(e,t){for(let i=1;i<e.length;i++){let l;if(e[i].isEmpty())continue;let s=e[i],n=i-1;for(;n>=0&&e[n].canAccept(s.linkedTile);)l=e[n],n--;l&&(t.push(s.linkedTile.waitForTransitionEnd()),l.isEmpty()?l.linkTile(s.linkedTile):l.linkTileForMerge(s.linkedTile),s.unlinkTile())}})(e,t)),await Promise.all(t),r.cells.forEach(e=>{e.hasTileForMerge()&&e.mergeTiles()})}function g(){return v(r.cellsGroupedByColumn)}function k(){return v(r.cellsGroupedByReversedColumn)}function T(){return v(r.cellsGroupedByRow)}function E(){return v(r.cellsGroupedByReversedRow)}function v(e){return e.some(e=>e.some((t,i)=>!(0===i||t.isEmpty())&&e[i-1].canAccept(t.linkedTile)))}o.addEventListener("click",()=>{o.classList.contains("start")?(o.classList.remove("start"),o.classList.add("restart"),a.classList.add("hidden"),r.getRandomEmptyCell().linkTile(new s(n)),r.getRandomEmptyCell().linkTile(new s(n)),o.textContent="Restart"):o.classList.contains("restart")&&(r.cells.forEach(e=>{e.isEmpty()||(e.linkedTile.removeFromDOM(),e.unlinkTile())}),r.resetScore(),r.getRandomEmptyCell().linkTile(new s(n)),r.getRandomEmptyCell().linkTile(new s(n))),c.classList.contains("hidden")||(c.classList.add("hidden"),d()),u.classList.contains("hidden")||(u.classList.add("hidden"),d())}),d();
//# sourceMappingURL=index.6661975f.js.map