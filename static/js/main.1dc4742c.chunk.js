(this.webpackJsonpsapper=this.webpackJsonpsapper||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),l=(a(98),a(99),a(100),a(101),a(102),a(14)),o=a(26),s=(a(103),a(168)),u=a(154),m=a(7);function d(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((function(e){return navigator.userAgent.match(e)}))}var g=a(86),f=a(8),b=Object(f.createAction)("startGame")(),E=Object(f.createAction)("cellClicked")(),v=Object(f.createAction)("cellRightClicked")(),h=Object(f.createAction)("cellClickFailed")(),p=Object(f.createAction)("gameWon")(),O=Object(f.createAction)("incrementTime")(),y=Object(f.createAction)("dragNDropFlag")(),j=Object(f.createAction)("selectFlag")(),S=Object(f.createAction)("selectCrossedFlag")(),A=Object(f.createAction)("selectQuestion")(),N=Object(f.createAction)("selectCrossedQuestion")(),w=Object(f.createAction)("selectMagicWand")(),F=Object(f.createAction)("openMenuAction")(),_=Object(f.createAction)("closeMenuAction")(),C=Object(f.createAction)("openLevelDialog")(),T=Object(f.createAction)("closeLevelDialog")(),x=Object(f.createAction)("changeLevel")(),W="flag",G=function(e){var t=e.cellPosition,a=Object(m.c)(),n=Object(s.a)({item:{type:W,position:e.cellPosition},end:function(e,n){var c=!n.getDropResult();t&&c&&function(e,t){e(y({cellToRemoveFlag:t}))}(a,t)},collect:function(e){return{isDragging:e.isDragging()}}}),r=Object(o.a)(n,3),i=r[0].isDragging,l=r[1],g=r[2];return c.a.createElement(c.a.Fragment,null,d()?c.a.createElement(I,null):c.a.createElement(u.a,{connect:g,src:"flag_24x24.png"}),c.a.createElement("img",{ref:l,width:"22",height:"22",src:"flag_24x24.png",style:{opacity:t&&i?.5:1},alt:"F"}))};var I=function(){var e=Object(g.a)(),t=e.display,a=e.itemType,n=(e.item,e.style);return t&&a===W?c.a.createElement("img",{width:"50",height:"50",src:"flag_big.png",alt:"F",style:Object(l.a)({},n,{zIndex:50,top:-10,left:-10})}):null},M=function(){return c.a.createElement("div",{id:"drag_n_drop_flags_container_id",className:"drag_n_drop_flags_container"},c.a.createElement("div",{className:"drag_n_drop_flag_1"},c.a.createElement(G,null)),c.a.createElement("div",{className:"drag_n_drop_flag_2"},c.a.createElement(G,null)),c.a.createElement("div",{className:"drag_n_drop_flag_3"},c.a.createElement(G,null)),c.a.createElement("div",{className:"drag_n_drop_flag_4"},c.a.createElement(G,null)))},D=a(10),L=a(77),Q=(a(108),a(109),function(e){var t=e.width,a=void 0===t?30:t,n=e.height,r=void 0===n?30:n,i=e.children;return c.a.createElement("div",{className:"button_container",style:{width:a,height:r}},c.a.createElement("div",{className:P(e)+" content",style:{width:a,height:r}},i))});function P(e){var t=e.isPressed,a=e.isFailed,n=e.isOver;return(t?"open":"initial")+" "+(a?"failedCell":"")+" "+(!t&&n?"over":"")}a(110);var k=function(e){var t=e.symbol,a=e.fontSize;return c.a.createElement("span",{className:z(t),style:{fontSize:a+"pt"}},t)};function z(e){return"?"===e?"question":"number_"+e}var R,U=a(169);!function(e){e[e.INITIAL=0]="INITIAL",e[e.FLAGGED=1]="FLAGGED",e[e.QUESTIONED=2]="QUESTIONED",e[e.OPEN=3]="OPEN"}(R||(R={}));var q=function e(t,a){Object(L.a)(this,e),this.position=void 0,this.number=void 0,this.state=void 0,this.isFailed=void 0,this.position=t,this.number=a,this.state=R.INITIAL,this.isFailed=!1},B=Object(n.memo)((function(e){var t=e.position,a=e.number,r=e.state,i=e.isFailed,l=Object(m.c)();Object(n.useEffect)((function(){i&&l(h())}),[l,i]);var s=Object(U.a)({accept:W,drop:function(e){return function(e,t,a,n){var c=e.position;if(function(e,t){return e&&e.x===t.x&&e.y===t.y}(c,t)||a===R.OPEN)return;!function(e,t,a){e(y({cellToAddFlag:t,cellToRemoveFlag:a}))}(n,t,c)}(e,t,r,l)},collect:function(e){return{isOver:e.isOver()}}}),u=Object(o.a)(s,2),d=u[0].isOver,g=u[1];return c.a.createElement("div",{id:t.x+"_"+t.y,className:"gridCell",onClick:J(t,l),onContextMenu:H(t,l)},c.a.createElement("div",{ref:g},c.a.createElement(Q,{isPressed:r===R.OPEN,isFailed:i,isOver:d},function(e,t,a){switch(e){case R.INITIAL:return null;case R.OPEN:return-1===t?c.a.createElement("img",{className:"bomb",width:"33",height:"33",src:"bomb.svg",alt:"bomb"}):t>0?function(e){return c.a.createElement(k,{symbol:e,fontSize:18})}(t):null;case R.FLAGGED:return function(e){return c.a.createElement(G,{cellPosition:e})}(a);case R.QUESTIONED:return c.a.createElement(k,{symbol:"?",fontSize:18})}}(r,a,t))))}));function H(e,t){return function(a){a.preventDefault(),t(v(e))}}function J(e,t){return function(){t(E(e))}}var $=Object(m.b)((function(e,t){return{position:t.position,number:ae(t.position)(e),state:ne(t.position)(e),isFailed:ce(t.position)(e)}}))(B),K=function(e){return e.gameState},V=Object(D.a)([K],(function(e){return e.grid})),X=Object(D.a)([K],(function(e){return e.isGameFailed})),Y=Object(D.a)([K],(function(e){return e.isGameWon})),Z=Object(D.a)([K],(function(e){return e.isGridCalculated})),ee=Object(D.a)([V],(function(e){return e.cells})),te=function(e){return Object(D.a)([ee],(function(t){return t[e.y][e.x]}))},ae=function(e){return Object(D.a)([te(e)],(function(e){return e.number}))},ne=function(e){return Object(D.a)([te(e)],(function(e){return e.state}))},ce=function(e){return Object(D.a)([te(e)],(function(e){return e.isFailed}))},re=Object(D.a)([V],(function(e){return e.cells.flat().filter((function(e){return-1===e.number})).length})),ie=Object(D.a)([V],(function(e){return e.cells.flat().filter((function(e){return e.state===R.FLAGGED})).length})),le=Object(D.a)([K],(function(e){return e.gameTime})),oe=Object(D.a)([K],(function(e){return e.isFlagSelected})),se=Object(D.a)([K],(function(e){return e.isFlagCrossedSelected})),ue=Object(D.a)([K],(function(e){return e.isQuestionSelected})),me=Object(D.a)([K],(function(e){return e.isRemoveQuestionSelected})),de=Object(D.a)([K],(function(e){return e.isMagicWandSelected})),ge=Object(D.a)([K],(function(e){return e.isMenuOpened})),fe=Object(D.a)([K],(function(e){return e.magicWandCounter})),be=Object(D.a)([K],(function(e){return e.isLevelDialogOpened})),Ee=Object(D.a)([K],(function(e){return e.level})),ve=(a(111),function(){var e=Object(m.d)(re),t=Object(m.d)(ie);return c.a.createElement("div",null,c.a.createElement("div",{className:"bomb_amount_container"},c.a.createElement("span",{className:"bomb_amount"},e-t)),c.a.createElement("div",{className:"image_container"},c.a.createElement("img",{className:"bomb_image",src:"bomb.svg",alt:"bomb"})))});function he(e){return 0===e.length?"00":1===e.length?"0"+e:e}a(112);var pe,Oe=function(){var e=Object(m.d)(le),t=Object(m.c)();return Object(n.useEffect)((function(){return pe=setInterval((function(){return t(O())}),1e3),function(){clearInterval(pe)}}),[t]),c.a.createElement("div",null,c.a.createElement("span",{className:"timer_span"},function(e){var t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%3600%60;return he(t.toString())+":"+he(a.toString())+":"+he(n.toString())}(e)))},ye=a(46),je=a.n(ye),Se=function(){var e=Object(m.c)(),t=Object(m.d)(Ee),a=Object(m.d)(Y),n=function(e,t,a,n){return e?"failed.png":t?"win.png":a<n?"laugh.png":"start.png"}(Object(m.d)(X),a,Object(m.d)(re),Object(m.d)(ie));return c.a.createElement("div",{className:"central-navbar"},c.a.createElement("div",{className:"flags"},d()?c.a.createElement(je.a,{fontSize:"large",style:{paddingTop:10},color:"action",onClick:function(){return e(F())}}):c.a.createElement(M,null)),c.a.createElement("div",{className:"counter"},c.a.createElement(ve,null)),c.a.createElement("div",{className:"smile"},c.a.createElement("img",{className:"smile_image",src:"smiles/"+n,alt:":)",onClick:Ae(e,t)})),c.a.createElement("div",{className:"timer"},c.a.createElement(Oe,null)))};function Ae(e,t){return function(){return e(b(t))}}var Ne=function(){var e=Object(m.c)();return c.a.createElement("div",{className:"header"},!d()&&c.a.createElement("div",{className:"left_box"},c.a.createElement(je.a,{fontSize:"large",style:{paddingTop:10,paddingLeft:10,cursor:"pointer"},color:"action",onClick:function(){return e(F())}})),c.a.createElement("div",{className:"centered_box"},c.a.createElement(Se,null)),!d()&&c.a.createElement("div",{className:"right_box"}))},we=(a(114),a(115),Object(D.b)({grid:V,isGameFailed:X,isGameWon:Y,isGridCalculated:Z,gameTime:le,isFlagSelected:oe,isFlagCrossedSelected:se,isQuestionSelected:ue,isRemoveQuestionSelected:me,isMagicWandSelected:de,isMenuOpened:ge,magicWandCounter:fe,isLevelDialogOpened:be,level:Ee})),Fe=Object(m.b)(we)((function(e){var t=e.isGameWon,a=e.isGameFailed,r=e.grid,i=e.level,l=Object(m.c)();Object(n.useEffect)((function(){t&&l(p())}),[l,t]);var o=i.width,s=i.height;return c.a.createElement("div",{className:"grid"+(a||t?" disabled":""),style:{gridTemplateColumns:"repeat(".concat(o,", 33px)"),gridTemplateRows:"repeat(".concat(s,", 33px)")}},r.cells.map((function(e){return e.map((function(e){return c.a.createElement($,Object.assign({key:e.position.x+"x"+e.position.y},e))}))})))})),_e=function(){return c.a.createElement("div",{className:"body_container"},c.a.createElement("div",{className:"body",style:d()?{marginBottom:"80px"}:{}},c.a.createElement(Fe,null)))},Ce=(a(116),function(){var e=Object(m.c)(),t=Object(m.d)(oe),a=Object(m.d)(se),n=Object(m.d)(ue),r=Object(m.d)(me),i=Object(m.d)(de),l=Object(m.d)(fe);return c.a.createElement("div",{className:"bottom_panel"},c.a.createElement("div",{className:"questions"},c.a.createElement("div",{className:"add_question",onClick:function(){return e(A())}},c.a.createElement(Q,{isPressed:n,height:60,width:60},c.a.createElement("img",{width:"44",height:"44",src:"question.png",alt:"?"}))),c.a.createElement("div",{className:"remove_question small_button",onClick:function(){return e(N())}},c.a.createElement(Q,{isPressed:r,height:30,width:30},c.a.createElement("img",{width:"22",height:"22",src:"crossed_question.png",alt:"?x"})))),c.a.createElement("div",{className:"magic_wand",onClick:function(){return e(w())},style:Te(l)},c.a.createElement(Q,{isPressed:i,height:60,width:60},c.a.createElement("img",{width:"44",height:"44",src:"magic_wand.png",alt:"Magic"}),c.a.createElement("span",{className:"magic_wand_counter"},l))),c.a.createElement("div",{className:"flags"},c.a.createElement("div",{className:"remove_flag small_button",onClick:function(){return e(S())}},c.a.createElement(Q,{isPressed:a,height:30,width:30},c.a.createElement("img",{width:"22",height:"22",src:"crossed_flag.png",alt:"Fx"}))),c.a.createElement("div",{className:"add_flag",onClick:function(){return e(j())}},c.a.createElement(Q,{isPressed:t,height:60,width:60},c.a.createElement("img",{width:"44",height:"44",src:"flag_big.png",alt:"F"})))))});function Te(e){return e<=0?{pointerEvents:"none",opacity:.5}:{}}a(117);var xe=a(157),We=a(32),Ge=a(171),Ie=a(158),Me=a(159),De=a(52),Le=a.n(De),Qe=a(83),Pe=a.n(Qe),ke=a(84),ze=a.n(ke),Re=a(82),Ue=a.n(Re),qe=a(81),Be=a.n(qe),He=function(){var e=Object(m.c)(),t=Object(m.d)(ge);return c.a.createElement(Be.a,{className:"drawer-menu",open:t,onChange:function(t){return e(t?F():_())},overlayColor:"rgba(0, 0, 0, 0.4)",width:250},c.a.createElement(xe.a,null,c.a.createElement(We.a,{variant:"h6"},"Menu"),c.a.createElement(Ue.a,{fontSize:"large",color:"action",style:{marginLeft:"auto",cursor:"pointer"},onClick:function(){return e(_())}})),c.a.createElement(Ge.a,null,c.a.createElement(Ie.a,null,c.a.createElement(Le.a,{fontSize:"small"})),c.a.createElement(Me.a,{primary:"Level",onClick:function(){return e(C())}})),c.a.createElement(Ge.a,null,c.a.createElement(Ie.a,null,c.a.createElement(Pe.a,{fontSize:"small"})),c.a.createElement(Me.a,{primary:"Settings"})),c.a.createElement(Ge.a,null,c.a.createElement(Ie.a,null,c.a.createElement(ze.a,{fontSize:"small"})),c.a.createElement(Me.a,{primary:"Help"})))},Je=(a(130),a(166)),$e=a(160),Ke=a(161),Ve=a(172),Xe=a(173),Ye=a(170),Ze=a(162),et=a(167),tt=a(163),at=a(164),nt=function(){var e=Object(n.useState)("small"),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("easy"),l=Object(o.a)(i,2),s=l[0],u=l[1],d=Object(m.c)(),g=Object(m.d)(be);return c.a.createElement(Je.a,{open:g,onClose:function(){return d(T())},"aria-labelledby":"form-dialog-title",fullWidth:!0},c.a.createElement($e.a,{id:"form-dialog-title"},c.a.createElement(xe.a,null,c.a.createElement(Ie.a,null,c.a.createElement(Le.a,{fontSize:"small"})),c.a.createElement(We.a,{variant:"h6"},"Level"))),c.a.createElement(Ke.a,null,c.a.createElement("div",{className:"dialog_content"},c.a.createElement("div",{className:"radio_group"},c.a.createElement(Ve.a,{component:"fieldset"},c.a.createElement(Xe.a,{component:"legend"},"Field scale"),c.a.createElement(Ye.a,{"aria-label":"scale",name:"scale",value:a,onChange:function(e){r(e.target.value)}},c.a.createElement(Ze.a,{value:"small",control:c.a.createElement(et.a,{color:"primary"}),label:"Small"}),c.a.createElement(Ze.a,{value:"medium",control:c.a.createElement(et.a,{color:"primary"}),label:"Medium"}),c.a.createElement(Ze.a,{value:"big",control:c.a.createElement(et.a,{color:"primary"}),label:"Big"}),c.a.createElement(Ze.a,{value:"huge",control:c.a.createElement(et.a,{color:"secondary"}),label:"Huge"})))),c.a.createElement("div",{className:"radio_group"},c.a.createElement(Ve.a,{component:"fieldset"},c.a.createElement(Xe.a,{component:"legend"},"Complexity"),c.a.createElement(Ye.a,{"aria-label":"complexity",name:"complexity",value:s,onChange:function(e){u(e.target.value)}},c.a.createElement(Ze.a,{value:"easy",control:c.a.createElement(et.a,{color:"primary"}),label:"Easy"}),c.a.createElement(Ze.a,{value:"medium",control:c.a.createElement(et.a,{color:"primary"}),label:"Medium"}),c.a.createElement(Ze.a,{value:"hard",control:c.a.createElement(et.a,{color:"primary"}),label:"Hard"}),c.a.createElement(Ze.a,{value:"crazy",control:c.a.createElement(et.a,{color:"secondary"}),label:"I'm crazy"}))))),c.a.createElement(tt.a,null,c.a.createElement(at.a,{onClick:function(){return d(T())},color:"primary"},"Cancel"),c.a.createElement(at.a,{onClick:function(){return d(x({scale:a,complexity:s}))},color:"primary"},"Save"))))},ct=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(He,null),c.a.createElement(Ne,null),c.a.createElement(_e,null),d()&&c.a.createElement(Ce,null),c.a.createElement(nt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=a(19);function it(e,t){if(!lt(e,t)){var a=e[t.y][t.x];if(a.state!==R.OPEN&&(a.state=R.OPEN,0===a.number))for(var n=t.x-1;n<=t.x+1;n++)for(var c=t.y-1;c<=t.y+1;c++)n===t.x&&c===t.y||it(e,{x:n,y:c})}}function lt(e,t){return t.x<0||t.y<0||t.x>=e.length||t.y>=e[0].length}function ot(e){var t=e.width,a=e.height;return function(e){for(var t=new Array,a=0;a<e.length;a++){for(var n=new Array,c=0;c<e[0].length;c++)n.push(new q({x:c,y:a},e[a][c]));t.push(n)}return t}(function(e){return e.map((function(e){return e.map((function(e){return e?-1:0}))}))}(function(e,t,a){for(var n=new Array,c=0;c<a;c++)n.push(e.slice(t*c,t*(c+1)));return n}(function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(function(e,t,a){for(var n=e*t,c=new Array,r=0;r<n;r++)r<a?c.push(!0):c.push(!1);return c}(t,a,e.bombAmount)),t,a)))}function st(e,t){var a,n=function(e,t){for(var a=e.x-1;a<=e.x+1;a++)for(var n=e.y-1;n<=e.y+1;n++)if(!lt(t,{x:n,y:a})){var c=t[n][a];if(-1===c.number){var r=void 0,i=void 0;do{r=dt(0,t[0].length-1),i=dt(0,t.length-1)}while(mt(r,i,e)||ut(r,i,t));c.number=0,t[i][r].number=-1}}return t}(t,e);return(a=n).forEach((function(e){return e.forEach((function(e){-1===e.number&&function(e,t){for(var a=e.x-1;a<=e.x+1;a++)for(var n=e.y-1;n<=e.y+1;n++)if((a!==e.x||n!==e.y)&&!lt(t,{x:n,y:a})){var c=t[n][a];-1!==c.number&&(c.number+=1)}}(e.position,a)}))})),a}function ut(e,t,a){return-1===a[t][e].number}function mt(e,t,a){return e>=a.x-1&&e<=a.x+1&&t>=a.y-1&&t<=a.y+1}function dt(e,t){return e+Math.floor((t-e)*Math.random())}var gt,ft=new Map([["small",new Map([["easy",{width:10,height:10,bombAmount:15,magicWandAmount:3}],["medium",{width:10,height:10,bombAmount:20,magicWandAmount:3}],["hard",{width:10,height:10,bombAmount:25,magicWandAmount:3}],["crazy",{width:10,height:10,bombAmount:30,magicWandAmount:3}]])],["medium",new Map([["easy",{width:20,height:20,bombAmount:60,magicWandAmount:6}],["medium",{width:20,height:20,bombAmount:80,magicWandAmount:6}],["hard",{width:20,height:20,bombAmount:100,magicWandAmount:6}],["crazy",{width:20,height:20,bombAmount:120,magicWandAmount:6}]])],["big",new Map([["easy",{width:30,height:30,bombAmount:135,magicWandAmount:10}],["medium",{width:30,height:30,bombAmount:180,magicWandAmount:10}],["hard",{width:30,height:30,bombAmount:225,magicWandAmount:10}],["crazy",{width:30,height:30,bombAmount:270,magicWandAmount:10}]])],["huge",new Map([["easy",{width:50,height:50,bombAmount:375,magicWandAmount:15}],["medium",{width:50,height:50,bombAmount:500,magicWandAmount:15}],["hard",{width:50,height:50,bombAmount:625,magicWandAmount:15}],["crazy",{width:50,height:50,bombAmount:750,magicWandAmount:15}]])]]),bt=null===(gt=ft.get("small"))||void 0===gt?void 0:gt.get("easy"),Et={isGameWon:!1,isGameFailed:!1,isGridCalculated:!1,gameTime:0,isFlagSelected:!1,isFlagCrossedSelected:!1,isQuestionSelected:!1,isRemoveQuestionSelected:!1,isMagicWandSelected:!1,magicWandCounter:bt.magicWandAmount,isMenuOpened:!1,isLevelDialogOpened:!1,level:bt,grid:{cells:ot(bt)}};function vt(e){return Object(l.a)({},Et,{magicWandCounter:e.magicWandAmount,level:e,grid:{cells:ot(e)}})}function ht(e,t,a){return a&&function(e,t){var a=e[t.y][t.x];a.state!==R.OPEN&&(a.state=R.INITIAL)}(e,a),t&&function(e,t){var a=e[t.y][t.x];a.state!==R.INITIAL&&a.state!==R.QUESTIONED||(a.state=R.FLAGGED)}(e,t),e}function pt(e){return e.isGridCalculated&&!e.isGameFailed&&!e.isGameWon}function Ot(e){return function(e){return e.flat().filter((function(e){return-1!==e.number})).every((function(e){return e.state===R.OPEN}))}(e)}function yt(e){return function(e){e.cells.forEach((function(e){return e.forEach((function(e){-1===e.number&&e.state!==R.FLAGGED&&(e.state=R.OPEN)}))}))}(e),e}function jt(e,t){var a=e.grid.cells;if(e.isFlagSelected)!function(e,t){var a=e[t.y][t.x];a.state!==R.OPEN&&(a.state=R.FLAGGED)}(a,t);else if(e.isFlagCrossedSelected)!function(e,t){var a=e[t.y][t.x];a.state===R.FLAGGED&&(a.state=R.INITIAL)}(a,t);else if(e.isQuestionSelected)!function(e,t){var a=e[t.y][t.x];a.state!==R.OPEN&&(a.state=R.QUESTIONED)}(a,t);else if(e.isRemoveQuestionSelected)!function(e,t){var a=e[t.y][t.x];a.state===R.QUESTIONED&&(a.state=R.INITIAL)}(a,t);else if(e.isMagicWandSelected){(function(e,t){var a=e[t.y][t.x];return a.state!==R.OPEN&&a.state!==R.FLAGGED&&(-1===a.number?a.state=R.FLAGGED:it(e,a.position),!0)})(a,t)&&e.magicWandCounter--}else e.isGridCalculated||(a=st(a,t),e.isGridCalculated=!0),function(e,t){var a=e[t.y][t.x];a.state!==R.FLAGGED&&a.state!==R.QUESTIONED&&(-1===a.number&&(a.isFailed=!0),it(e,a.position))}(a,t);return a}function St(e,t){return function(e,t){var a=e[t.y][t.x];switch(a.state){case R.INITIAL:a.state=R.FLAGGED;break;case R.FLAGGED:a.state=R.QUESTIONED;break;case R.QUESTIONED:a.state=R.INITIAL}}(e,t),e}var At=Object(rt.c)({gameState:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Object(f.getType)(b):return vt(a.payload);case Object(f.getType)(E):var n=jt(t,a.payload);return Object(l.a)({},t,{grid:{cells:n},isGameWon:Ot(n),isFlagSelected:!1,isFlagCrossedSelected:!1,isQuestionSelected:!1,isRemoveQuestionSelected:!1,isMagicWandSelected:!1});case Object(f.getType)(h):return Object(l.a)({},t,{grid:yt(t.grid),isGameFailed:!0});case Object(f.getType)(v):return Object(l.a)({},t,{grid:{cells:St(t.grid.cells,a.payload)}});case Object(f.getType)(p):return Object(l.a)({},t,{grid:yt(t.grid)});case Object(f.getType)(O):return Object(l.a)({},t,{gameTime:pt(t)?t.gameTime+1:t.gameTime});case Object(f.getType)(y):return Object(l.a)({},t,{grid:{cells:ht(t.grid.cells,a.payload.cellToAddFlag,a.payload.cellToRemoveFlag)}});case Object(f.getType)(j):return Object(l.a)({},t,{isFlagSelected:!t.isFlagSelected,isFlagCrossedSelected:!1,isQuestionSelected:!1,isRemoveQuestionSelected:!1,isMagicWandSelected:!1});case Object(f.getType)(S):return Object(l.a)({},t,{isFlagCrossedSelected:!t.isFlagCrossedSelected,isFlagSelected:!1,isQuestionSelected:!1,isRemoveQuestionSelected:!1,isMagicWandSelected:!1});case Object(f.getType)(A):return Object(l.a)({},t,{isQuestionSelected:!t.isQuestionSelected,isFlagSelected:!1,isFlagCrossedSelected:!1,isRemoveQuestionSelected:!1,isMagicWandSelected:!1});case Object(f.getType)(N):return Object(l.a)({},t,{isRemoveQuestionSelected:!t.isRemoveQuestionSelected,isFlagSelected:!1,isFlagCrossedSelected:!1,isQuestionSelected:!1,isMagicWandSelected:!1});case Object(f.getType)(w):return Object(l.a)({},t,{isMagicWandSelected:!t.isMagicWandSelected&&(t.isGridCalculated&&t.magicWandCounter>0),isFlagSelected:!1,isFlagCrossedSelected:!1,isQuestionSelected:!1,isRemoveQuestionSelected:!1});case Object(f.getType)(F):return Object(l.a)({},t,{isMenuOpened:!0});case Object(f.getType)(_):return Object(l.a)({},t,{isMenuOpened:!1});case Object(f.getType)(C):return Object(l.a)({},t,{isLevelDialogOpened:!0,isMenuOpened:!1});case Object(f.getType)(T):return Object(l.a)({},t,{isLevelDialogOpened:!1});case Object(f.getType)(x):var c=null===(e=ft.get(a.payload.scale))||void 0===e?void 0:e.get(a.payload.complexity);return vt(c);default:return Et}}}),Nt=(a(131),a(165)),wt=a(85);var Ft=Object(rt.d)(At,rt.a.apply(void 0,[]));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{store:Ft},c.a.createElement(Nt.a,{backend:wt.a},c.a.createElement(ct,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a(132)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.1dc4742c.chunk.js.map