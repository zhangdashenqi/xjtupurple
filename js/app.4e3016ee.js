(function(e){function t(t){for(var o,i,c=t[0],u=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},r={app:0},n=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"211d":function(e,t,a){},4692:function(e,t,a){"use strict";a("67af")},"4ab6":function(e,t,a){"use strict";a("f548")},"51dd":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23"),r={id:"app"};function n(e,t,a,n,i,c){var u=Object(o["resolveComponent"])("router-view"),l=Object(o["resolveComponent"])("Menu");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(u,{personalData:i.personalData,modelValue:i.personalData,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.personalData=e})},null,8,["personalData","modelValue"]),Object(o["createVNode"])(l)])}a("13d5"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("96cf");var i=a("1da1"),c=Object(o["withScopeId"])("data-v-7c659dd8");Object(o["pushScopeId"])("data-v-7c659dd8");var u={class:"bottomBar"},l=Object(o["createVNode"])("p",null,"交大校园码",-1),s=Object(o["createVNode"])("p",null,"返校申请",-1),d=Object(o["createVNode"])("p",null,"外出申请",-1),p=Object(o["createVNode"])("p",null,"转码申请",-1);Object(o["popScopeId"])();var m=c((function(e,t,a,r,n,i){var m=this,g=Object(o["resolveComponent"])("MenuIcon"),h=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createBlock"])("div",u,[Object(o["createVNode"])(h,{to:"/",class:"button","active-class":"active",onClick:t[1]||(t[1]=function(e){return m.activeButton=0})},{default:c((function(){return[Object(o["createVNode"])(g,{class:"icon",active:0===m.activeButton}),l]})),_:1}),Object(o["createVNode"])(h,{to:"/settings",class:"button","active-class":"active",onClick:t[2]||(t[2]=function(e){return m.activeButton=1})},{default:c((function(){return[Object(o["createVNode"])(g,{class:"icon",active:1===m.activeButton}),s]})),_:1}),Object(o["createVNode"])(h,{class:"button",to:"/about","active-class":"active",onClick:t[3]||(t[3]=function(e){return m.activeButton=2})},{default:c((function(){return[Object(o["createVNode"])(g,{class:"icon",active:2===m.activeButton}),d]})),_:1}),Object(o["createVNode"])(h,{to:"/github",class:"button","active-class":"active",onClick:t[4]||(t[4]=function(){m.activeButton=3})},{default:c((function(){return[Object(o["createVNode"])(g,{class:"icon",active:3===m.activeButton}),p]})),_:1})])})),g={t:"1602655872097",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2290","data-spm-anchor-id":"a313x.7781069.0.i0"};function h(e,t,a,r,n,i){return Object(o["openBlock"])(),Object(o["createBlock"])("svg",g,[Object(o["createVNode"])("path",{d:"M697.138092 186.688913c-13.334703-39.629579-38.176484-75.815733-84.856643-75.815733L411.717528 110.87318c-46.680159 0-71.522963 36.186154-84.856643 75.815733-92.414783 6.284123-165.847236 88.171132-165.847236 188.240245l0 349.32092c0 104.167454 79.472006 188.875718 177.157839 188.875718l347.658048 0c97.68481 0 177.156816-84.708264 177.156816-188.875718L862.986351 374.929158C862.985328 274.860045 789.552875 192.972013 697.138092 186.688913zM411.717528 161.015184l200.563922 0c37.688367 0 50.060139 92.77294 50.14098 133.708258L361.576547 294.723442C361.659435 253.788124 374.031207 161.015184 411.717528 161.015184zM812.827975 724.250078c0 76.483952-56.964386 138.736784-126.999462 138.736784l-347.658048 0c-70.037123 0-126.999462-62.252833-126.999462-138.736784L211.171002 374.929158c0-67.802222 44.802392-124.307144 103.773482-136.270617-3.231601 23.340591-3.507894 50.51551-3.507894 56.0649l-33.42732 0 0 50.14098 467.981461 0 0-50.14098-33.42732 0c0-5.54939-0.277316-32.724309-3.508917-56.0649 58.969043 11.963473 103.773482 68.468394 103.773482 136.270617L812.827975 724.250078zM311.43659 512.001023l401.12682 0 0-50.14098L311.43659 461.860043 311.43659 512.001023zM311.43659 662.423965l200.561875 0 0-50.142004L311.43659 612.281961 311.43659 662.423965z","p-id":"2291",fill:a.active?" rgb(106, 207, 209)":"#92969c"},null,8,["fill"])])}var f={props:{active:Boolean}};a("e0f2");f.render=h;var b=f,v={name:"Menu",components:{MenuIcon:b},data:function(){return{activeButton:0}}};a("9d80");v.render=m,v.__scopeId="data-v-7c659dd8";var D=v,O=a("72bf"),j=a.n(O),V=a("bc3a"),S=a.n(V),N={name:"App",components:{Menu:D},data:function(){return{personalData:{stuNo:"1234567890",stuName:"弗拉基米尔",stuPosition:"俄罗斯莫斯科/克林姆林宫",stuDegree:"本科生",reportDate:"2020-05-01",reportTime:"11:45:14",outTimeFrom:"00:00",outTimeTo:"23:59",photoURL:"/default.jpg",photoBorderWidth:8,qrCode:"",generateColorOfCode:"紫码"},timingInterval:null}},methods:{changeImage:function(){var e=new FileReader,t=document.getElementById("imageUploadInput").files[0];e.readAsDataURL(t);var a=this;e.addEventListener("load",(function(){a.photoURL=e.result}),!1)},getDefaultProfilePhoto:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("/staticFile/image/people/"+e.personalData.stuNo+".jpg",{crossdomain:!0,responseType:"arraybuffer"});case 3:return a=t.sent,t.abrupt("return","data:image/png;base64,"+btoa(new Uint8Array(a.data).reduce((function(e,t){return e+String.fromCharCode(t)}),"")));case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",e.personalData.photoURL);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getInformationFromUrl:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=document.URL,e.personalData.qrCode=j.a.parseUrl(a).query.qrCode||e.generateCode(),e.personalData.stuNo=j.a.parseUrl(a).query.stuNo||e.personalData.stuNo,e.personalData.stuName=j.a.parseUrl(a).query.stuName||e.personalData.stuName,e.personalData.stuPosition=j.a.parseUrl(a).query.stuPosition||e.personalData.stuPosition,e.personalData.stuDegree=j.a.parseUrl(a).query.stuDegree||e.personalData.stuDegree,e.personalData.reportDate=j.a.parseUrl(a).query.reportDate||e.personalData.reportDate,e.personalData.reportTime=j.a.parseUrl(a).query.reportTime||e.personalData.reportTime,e.personalData.outTimeFrom=j.a.parseUrl(a).query.outTimeFrom||e.personalData.outTimeFrom,e.personalData.outTimeTo=j.a.parseUrl(a).query.outTimeTo||e.personalData.outTimeTo,t.t0=j.a.parseUrl(a).query.photoUrl||localStorage.getItem("photoURL"),t.t0){t.next=15;break}return t.next=14,e.getDefaultProfilePhoto();case 14:t.t0=t.sent;case 15:e.personalData.photoURL=t.t0,e.personalData.generateColorOfCode=j.a.parseUrl(a).query.generateColorOfCode||e.personalData.generateColorOfCode,e.personalData.photoBorderWidth=j.a.parseUrl(a).query.photoBorderWidth||e.personalData.photoBorderWidth;case 18:case"end":return t.stop()}}),t)})))()},getPersonalDataFromCache:function(){this.personalData.qrCode=localStorage.getItem("qrCode")||this.personalData.qrCode,this.personalData.stuNo=localStorage.getItem("stuNo")||this.personalData.stuNo,this.personalData.stuName=localStorage.getItem("stuName")||this.personalData.stuName,this.personalData.stuPosition=localStorage.getItem("stuPosition")||this.personalData.stuPosition,this.personalData.stuDegree=localStorage.getItem("stuDegree")||this.personalData.stuDegree,this.personalData.reportDate=localStorage.getItem("reportDate")||this.personalData.reportDate,this.personalData.reportTime=localStorage.getItem("reportTime")||this.personalData.reportTime,this.personalData.outTimeFrom=localStorage.getItem("outTimeFrom")||this.personalData.outTimeFrom,this.personalData.outTimeTo=localStorage.getItem("outTimeTo")||this.personalData.outTimeTo,this.personalData.photoURL=localStorage.getItem("photoUrl")||this.personalData.photoURL,this.personalData.generateColorOfCode=localStorage.getItem("generateColorOfCode")||this.personalData.generateColorOfCode,this.personalData.photoBorderWidth=localStorage.getItem("photoBorderWidth")||this.personalData.photoBorderWidth},generateCode:function(){for(var e="",t="0123456789ABCDEF",a=0;a<32;a++)e+=""+t[Math.floor(16*Math.random())];return e}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.getPersonalDataFromCache(),t.next=3,e.getInformationFromUrl();case 3:localStorage.getItem("logined")||(alert('1. 本系统仅供学习交流使用, 切勿做实际用途, 否则后果自负! \n2. 目前系统已经改版, 请点击"返校申请"进行数据修改!'),localStorage.setItem("logined",!0));case 4:case"end":return t.stop()}}),t)})))()}};a("64be");N.render=n;var C=N,B=(a("a9e3"),a("6c02")),T={class:"home"};function y(e,t,a,r,n,i){var c=Object(o["resolveComponent"])("Banner"),u=Object(o["resolveComponent"])("QRCodeInterface");return Object(o["openBlock"])(),Object(o["createBlock"])("div",T,[Object(o["createVNode"])(c,{personalData:a.personalData,computedData:i.computedData},null,8,["personalData","computedData"]),Object(o["createVNode"])(u,{personalData:a.personalData,computedData:i.computedData},null,8,["personalData","computedData"])])}var I=Object(o["withScopeId"])("data-v-4af3ee6c");Object(o["pushScopeId"])("data-v-4af3ee6c");var k={class:"textContainer"},w={class:"smallText"};Object(o["popScopeId"])();var U=I((function(e,t,a,r,n,i){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:["topContainer",{undergraduateBackground:a.computedData.isUndergraduate,graduateBackground:a.computedData.isGraduate,overseaBackground:a.computedData.isOversea}]},[Object(o["createVNode"])("img",{src:a.personalData.photoURL,class:"photograph",alt:"this is your photo",style:{borderWidth:a.personalData.photoBorderWidth+"px"}},null,12,["src"]),Object(o["createVNode"])("div",k,[Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(a.personalData.stuNo)+" "+Object(o["toDisplayString"])(a.personalData.stuName)+" ",1),Object(o["createVNode"])("small",w,Object(o["toDisplayString"])(a.personalData.stuDegree),1)]),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(a.personalData.stuPosition),1)])],2)})),P={name:"Banner",props:{personalData:{stuNo:String,stuName:String,stuPosition:String,stuDegree:String,reportDate:String,reportTime:String,outTimeFrom:String,outTimeTo:String,photoURL:String,photoBorderWidth:Number,qrCode:String,generateColorOfCode:String},computedData:{isUndergraduate:Boolean,isGraduate:Boolean,isOversea:Boolean,isPurple:Boolean,colorOfCode:Boolean}},computed:{}};a("b5fe");P.render=U,P.__scopeId="data-v-4af3ee6c";var x=P,F=Object(o["withScopeId"])("data-v-167cca21");Object(o["pushScopeId"])("data-v-167cca21");var R={class:"mainContentContainer"},L={class:"dataContainer"},q=Object(o["createVNode"])("div",{class:"title"},[Object(o["createVNode"])("h3",null,"当前时间：")],-1),M={class:"timeDate"},A={id:"date"},$={id:"time"},W={key:0},_=Object(o["createTextVNode"])(" 外出时间"),G={class:"green"},z=Object(o["createTextVNode"])("至"),E={class:"green"},H={class:"qrContainer"},J=Object(o["createVNode"])("div",{id:"qrCodeDisplay"},null,-1),Q={key:0,class:"propaganda"},X={key:1,class:"propaganda"};Object(o["popScopeId"])();var Y=F((function(e,t,a,r,n,i){return Object(o["openBlock"])(),Object(o["createBlock"])("div",R,[Object(o["createVNode"])("div",L,[q,Object(o["createVNode"])("div",M,[Object(o["createVNode"])("div",A,Object(o["toDisplayString"])(n.nowDate),1),Object(o["createVNode"])("div",$,Object(o["toDisplayString"])(n.nowTime),1),Object(o["createVNode"])("p",null," 已于 "+Object(o["toDisplayString"])(a.personalData.reportDate)+" "+Object(o["toDisplayString"])(a.personalData.reportTime)+" 完成报到登记 ",1),a.computedData.isPurple?(Object(o["openBlock"])(),Object(o["createBlock"])("p",W,[_,Object(o["createVNode"])("span",G,Object(o["toDisplayString"])(n.today)+" "+Object(o["toDisplayString"])(a.personalData.outTimeFrom),1),z,Object(o["createVNode"])("span",E,Object(o["toDisplayString"])(n.today)+" "+Object(o["toDisplayString"])(a.personalData.outTimeTo),1)])):Object(o["createCommentVNode"])("",!0)])]),Object(o["createVNode"])("div",H,[Object(o["createVNode"])("div",{class:["degreeBar",{undergraduateBackground:a.computedData.isUndergraduate,graduateBackground:a.computedData.isGraduate,overseaBackground:a.computedData.isOversea}]},null,2),Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(a.personalData.stuDegree),1),J]),a.computedData.isPurple?(Object(o["openBlock"])(),Object(o["createBlock"])("div",Q," 校园最安全，外出有风险 ")):Object(o["createCommentVNode"])("",!0),a.computedData.isPurple?(Object(o["openBlock"])(),Object(o["createBlock"])("div",X," 其他必须外出的情况 ")):Object(o["createCommentVNode"])("",!0)])})),K={name:"QRCodeInterface",props:{personalData:{stuNo:String,stuName:String,stuPosition:String,stuDegree:String,reportDate:String,reportTime:String,outTimeFrom:String,outTimeTo:String,photoURL:String,photoBorderWidth:Number,qrCode:String,generateColorOfCode:String},computedData:{isUndergraduate:Boolean,isGraduate:Boolean,isOversea:Boolean,isPurple:Boolean,colorOfCode:String}},data:function(){return{nowDate:"",nowTime:"",today:"",timingInterval:null}},methods:{getTimeData:function(){var e=new Date;this.nowDate=(e.getMonth()+1<=9?"0"+(e.getMonth()+1):e.getMonth()+1)+"月"+(e.getDate()<=9?"0"+e.getDate():e.getDate())+"日",this.nowTime=(e.getHours()<=9?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<=9?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<=9?"0"+e.getSeconds():e.getSeconds()),this.today=e.getFullYear()+"-"+(e.getMonth()+1<=9?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<=9?"0"+e.getDate():e.getDate())},timer:function(){var e=this;return setInterval((function(){e.getTimeData()}),100)}},mounted:function(){this.timingInterval=this.timer()}};a("4ab6");K.render=Y,K.__scopeId="data-v-167cca21";var Z=K,ee=a("d044"),te=a.n(ee),ae={name:"Home",components:{Banner:x,QRCodeInterface:Z},props:{personalData:{stuNo:String,stuName:String,stuPosition:String,stuDegree:String,reportDate:String,reportTime:String,outTimeFrom:String,outTimeTo:String,photoURL:String,photoBorderWidth:Number,qrCode:String,generateColorOfCode:String}},computed:{isUndergraduate:function(){return"研究生"!==this.personalData.stuDegree&&"留学生"!==this.personalData.stuDegree},isGraduate:function(){return"研究生"===this.personalData.stuDegree},isOversea:function(){return"留学生"===this.personalData.stuDegree},isPurple:function(){return"紫码"===this.personalData.generateColorOfCode},colorOfCode:function(){switch(this.personalData.generateColorOfCode){case"紫码":return"#F97AFB";case"绿码":return"#2BAA66";default:return"#F97AFB"}},computedData:function(){return{isUndergraduate:this.isUndergraduate,isGraduate:this.isGraduate,isOversea:this.isOversea,isPurple:this.isPurple,colorOfCode:this.colorOfCode}}},mounted:function(){var e=document.getElementById("qrCodeDisplay");while(e.hasChildNodes())e.removeChild(e.lastChild);new te.a("qrCodeDisplay",{text:"               "+this.personalData.qrCode+"               ",width:150,height:150,colorDark:this.computedData.colorOfCode,correctLevel:te.a.CorrectLevel.H})}};a("dfd4");ae.render=y;var oe=ae,re=Object(o["withScopeId"])("data-v-701f1671");Object(o["pushScopeId"])("data-v-701f1671");var ne={class:"fullsize"},ie={class:"formContainer"},ce=Object(o["createVNode"])("div",{class:"placeTaker start"},null,-1),ue=Object(o["createVNode"])("span",null,"学号",-1),le=Object(o["createVNode"])("span",null,"姓名",-1),se=Object(o["createVNode"])("span",null,"书院和班级",-1),de=Object(o["createVNode"])("span",null,"学位",-1),pe=Object(o["createVNode"])("option",{value:"本科生"},"本科生",-1),me=Object(o["createVNode"])("option",{value:"研究生"},"研究生",-1),ge=Object(o["createVNode"])("option",{value:"留学生"},"留学生",-1),he=Object(o["createVNode"])("span",null,"生成码颜色",-1),fe=Object(o["createVNode"])("option",{value:"紫码"},"紫码",-1),be=Object(o["createVNode"])("option",{value:"绿码"},"绿码",-1),ve=Object(o["createVNode"])("span",null,"报到日期",-1),De={key:0,class:"warn"},Oe=Object(o["createVNode"])("span",null,"报到时间",-1),je={key:1,class:"warn"},Ve=Object(o["createVNode"])("span",null,"离校时间",-1),Se={key:2,class:"warn"},Ne=Object(o["createVNode"])("span",null,"返校时间",-1),Ce={key:3,class:"warn"},Be=Object(o["createVNode"])("span",null,"自定义二维码内容(留空以随机生成)",-1),Te=Object(o["createVNode"])("span",null,"照片边框宽度",-1),ye=Object(o["createVNode"])("span",null,"任意访问URL:",-1),Ie={class:"inputWithCopyButton"},ke=Object(o["createVNode"])("button",{id:"copyButton","data-clipboard-target":"#copyUrlTarget"}," 复制 ",-1),we=Object(o["createVNode"])("label",{class:"uploadPhotoButton",for:"imageUploadinput"},"上传照片",-1);Object(o["popScopeId"])();var Ue=re((function(e,t,a,r,n,i){var c=this,u=Object(o["resolveComponent"])("vue-slider"),l=Object(o["resolveComponent"])("Banner");return Object(o["openBlock"])(),Object(o["createBlock"])("div",ne,[Object(o["createVNode"])("div",ie,[ce,ue,Object(o["createVNode"])("input",{class:"inputBox",value:a.modelValue.stuNo,onInput:t[1]||(t[1]=function(t){e.$emit("update:modelValue",c.modifiedPersonalDatas({stuNo:t.target.value}))}),onFocusout:t[2]||(t[2]=function(t){i.getDefaultProfilePhoto(t.target.value).then((function(t){e.$emit("update:modelValue",i.modifiedPersonalDatas({photoURL:t||a.modelValue.photoURL}))}))})},null,40,["value"]),le,Object(o["createVNode"])("input",{class:"inputBox",value:a.modelValue.stuName,onInput:t[3]||(t[3]=function(t){return e.$emit("update:modelValue",i.modifiedPersonalData("stuName",t.target.value))})},null,40,["value"]),se,Object(o["createVNode"])("input",{class:"inputBox",value:a.modelValue.stuPosition,onInput:t[4]||(t[4]=function(t){return e.$emit("update:modelValue",i.modifiedPersonalData("stuPosition",t.target.value))})},null,40,["value"]),de,Object(o["createVNode"])("select",{class:"inputBox",value:a.modelValue.stuDegree,onInput:t[5]||(t[5]=function(t){return e.$emit("update:modelValue",i.modifiedPersonalData("stuDegree",t.target.value))})},[pe,me,ge],40,["value"]),he,Object(o["createVNode"])("select",{class:"inputBox",value:a.modelValue.generateColorOfCode,onInput:t[6]||(t[6]=function(t){return e.$emit("update:modelValue",i.modifiedPersonalData("generateColorOfCode",t.target.value))})},[fe,be],40,["value"]),ve,n.validated.reportDate?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("span",De,"报到日期不合法! 格式: yyyy-MM-dd")),Object(o["createVNode"])("input",{class:"inputBox",value:a.modelValue.reportDate,onInput:t[7]||(t[7]=function(t){e.$emit("update:modelValue",i.modifiedPersonalData("reportDate",t.target.value)),i.validateData("reportDate",/^\d{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])$/,t.target.value)})},null,40,["value"]),Oe,n.validated.reportTime?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("span",je,"报到时间不合法! 格式: hh:mm:ss(注意使用英文冒号)")),Object(o["createVNode"])("input",{class:"inputBox",placehoder:"11:45:14",value:a.modelValue.reportTime,onInput:t[8]||(t[8]=function(t){e.$emit("update:modelValue",i.modifiedPersonalData("reportTime",t.target.value)),i.validateData("reportTime",/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,t.target.value)})},null,40,["value"]),Ve,n.validated.outTimeFrom?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("span",Se,"离校时间不合法! 格式hh:mm(注意使用英文冒号)")),Object(o["createVNode"])("input",{class:"inputBox",value:a.modelValue.outTimeFrom,onInput:t[9]||(t[9]=function(t){e.$emit("update:modelValue",i.modifiedPersonalData("outTimeFrom",t.target.value)),i.validateData("outTimeFrom",/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,t.target.value)})},null,40,["value"]),Ne,n.validated.outTimeTo?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("span",Ce,"返校时间不合法! 格式hh:mm(注意使用英文冒号)")),Object(o["createVNode"])("input",{class:"inputBox",value:a.modelValue.outTimeTo,onInput:t[10]||(t[10]=function(t){e.$emit("update:modelValue",i.modifiedPersonalData("outTimeTo",t.target.value)),i.validateData("outTimeTo",/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,t.target.value)})},null,40,["value"]),Be,Object(o["createVNode"])("input",{class:"inputBox",value:a.modelValue.qrCode,onInput:t[11]||(t[11]=function(t){e.$emit("update:modelValue",i.modifiedPersonalData("qrCode",t.target.value))}),onFocusout:t[12]||(t[12]=function(t){t.target.value||e.$emit("update:modelValue",i.modifiedPersonalData("qrCode",i.generateCode()))})},null,40,["value"]),Te,Object(o["createVNode"])(u,{class:"widthSlider",modelValue:a.modelValue.photoBorderWidth,onChange:t[13]||(t[13]=function(e){return i.modifiedPersonalData("photoBorderWidth",e)}),contained:!0,min:0,max:18},null,8,["modelValue"]),Object(o["createVNode"])(l,{class:["preview",{undergraduateBackground:i.isUndergraduate,graduateBackground:i.isGraduate,overseaBackground:i.isOversea}],personalData:a.modelValue,computedData:i.computedData},null,8,["class","personalData","computedData"]),ye,Object(o["createVNode"])("span",Ie,[Object(o["createVNode"])("input",{id:"copyUrlTarget",class:"inputBox",type:"text",readonly:"readonly",value:i.computedURL},null,8,["value"]),ke]),we,Object(o["createVNode"])("input",{type:"file",name:"imageUpload",id:"imageUploadinput",accept:"image/*",onChange:t[14]||(t[14]=function(e){return i.changeImage(e)})},null,32),Object(o["createVNode"])("button",{class:"submitButton",id:"submitButton",onClick:t[15]||(t[15]=function(){return i.writeInfoToCache.apply(i,arguments)})}," 保存 ")])])})),Pe=(a("ac1f"),a("1276"),a("4971")),xe=a.n(Pe),Fe=(a("3e39"),a("b311")),Re=a.n(Fe),Le={name:"Settings",components:{VueSlider:xe.a,Banner:x},props:{modelValue:{stuNo:String,stuName:String,stuPosition:String,stuDegree:String,reportDate:String,reportTime:String,outTimeFrom:String,outTimeTo:String,photoURL:String,photoBorderWidth:Number,qrCode:String,generateColorOfCode:String}},data:function(){return{validated:{reportDate:!1,reportTime:!1,outTimeFrom:!1,outTimeTo:!1}}},mounted:function(){new Re.a("#copyButton")},created:function(){this.validateData("reportDate",/^\d{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])$/,this.modelValue.reportDate),this.validateData("reportTime",/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,this.modelValue.reportTime),this.validateData("outTimeFrom",/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,this.modelValue.outTimeFrom),this.validateData("outTimeTo",/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,this.modelValue.outTimeTo)},methods:{getDefaultProfilePhoto:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("/staticFile/image/people/"+e+".jpg",{crossdomain:!0,responseType:"arraybuffer"});case 3:return a=t.sent,t.abrupt("return","data:image/png;base64,"+btoa(new Uint8Array(a.data).reduce((function(e,t){return e+String.fromCharCode(t)}),"")));case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return","/default.jpg");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},modifiedPersonalData:function(e,t){var a=this.modelValue;return a[e]=t,a},modifiedPersonalDatas:function(e){var t=this.modelValue;for(var a in e)t[a]=e[a];return t},changeImage:function(e){var t=this,a=new FileReader;a.readAsDataURL(e.target.files[0]),a.addEventListener("load",(function(){e.target.$emit("update:modelValue",t.modifiedPersonalData("photoURL",a.result))}))},validateData:function(e,t,a){var o=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:o.validated[e]=t.test(a);case 1:case"end":return r.stop()}}),r)})))()},generateCode:function(){for(var e="",t="0123456789ABCDEF",a=0;a<32;a++)e+=""+t[Math.floor(16*Math.random())];return e},writeInfoToCache:function(){localStorage.setItem("stuNo",this.modelValue.stuNo),localStorage.setItem("stuName",this.modelValue.stuName),localStorage.setItem("stuPosition",this.modelValue.stuPosition),localStorage.setItem("stuDegree",this.modelValue.stuDegree),localStorage.setItem("reportDate",this.modelValue.reportDate),localStorage.setItem("reportTime",this.modelValue.reportTime),localStorage.setItem("outTimeFrom",this.modelValue.outTimeFrom),localStorage.setItem("outTimeTo",this.modelValue.outTimeTo),localStorage.setItem("qrCode",this.modelValue.qrCode),localStorage.setItem("photoUrl",this.modelValue.photoURL),localStorage.setItem("generateColorOfCode",this.modelValue.generateColorOfCode),localStorage.setItem("photoBorderWidth",this.modelValue.photoBorderWidth),alert("保存成功!")}},computed:{computedURL:function(){var e={};for(var t in this.modelValue)"photoURL"!=t&&(e[t]=this.modelValue[t]);return document.URL.split("/")[0]+"//"+document.URL.split("/")[2]+"/?"+j.a.stringify(e)},isUndergraduate:function(){return"研究生"!==this.modelValue.stuDegree&&"留学生"!==this.modelValue.stuDegree},isGraduate:function(){return"研究生"===this.modelValue.stuDegree},isOversea:function(){return"留学生"===this.modelValue.stuDegree},isPurple:function(){return"紫码"===this.modelValue.generateColorOfCode},colorOfCode:function(){switch(this.modelValue.generateColorOfCode){case"紫码":return"#F97AFB";case"绿码":return"#2BAA66";default:return"#F97AFB"}},computedData:function(){return{isUndergraduate:this.isUndergraduate,isGraduate:this.isGraduate,isOversea:this.isOversea,isPurple:this.isPurple,colorOfCode:this.colorOfCode}}}};a("7db7");Le.render=Ue,Le.__scopeId="data-v-701f1671";var qe=Le,Me=Object(o["withScopeId"])("data-v-16ed5114");Object(o["pushScopeId"])("data-v-16ed5114");var Ae={class:"container"},$e=Object(o["createVNode"])("a",{href:"https://github.com/endaytrer/xjtupurple"},[Object(o["createVNode"])("svg",{t:"1602687815805",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2467",width:"100",height:"100"},[Object(o["createVNode"])("path",{d:"M960 512a435.2 435.2 0 0 1-85.76 263.36 440 440 0 0 1-220.48 161.92 26.88 26.88 0 0 1-23.04-4.16 22.72 22.72 0 0 1-7.04-17.6v-122.88a104.64 104.64 0 0 0-30.4-82.88 416 416 0 0 0 59.52-10.24 218.24 218.24 0 0 0 54.72-23.04 164.8 164.8 0 0 0 47.04-38.4 184 184 0 0 0 32-61.44 293.76 293.76 0 0 0 12.16-88 168.64 168.64 0 0 0-46.4-120 154.88 154.88 0 0 0-4.48-119.04 76.48 76.48 0 0 0-47.04 6.4 300.48 300.48 0 0 0-53.76 25.6l-22.08 13.76a416 416 0 0 0-224 0c-6.4-4.48-14.4-9.28-24.64-15.68A326.08 326.08 0 0 0 326.4 256a82.88 82.88 0 0 0-50.24-8 156.8 156.8 0 0 0-4.16 120 173.76 173.76 0 0 0-46.08 120.64A288 288 0 0 0 238.08 576a196.48 196.48 0 0 0 32 61.44 152 152 0 0 0 47.04 39.04 267.84 267.84 0 0 0 54.72 23.04 414.08 414.08 0 0 0 59.84 10.24 92.48 92.48 0 0 0-28.8 60.16 99.2 99.2 0 0 1-26.56 8.32 167.36 167.36 0 0 1-32 2.88A69.12 69.12 0 0 1 303.36 768a109.44 109.44 0 0 1-32-36.48 96 96 0 0 0-28.16-30.4 80.64 80.64 0 0 0-28.8-14.08h-11.52a41.6 41.6 0 0 0-16.96 2.56q-4.8 2.88-2.88 6.72a44.16 44.16 0 0 0 5.44 8 55.36 55.36 0 0 0 7.68 7.36l4.16 2.56a78.08 78.08 0 0 1 25.6 22.08 157.76 157.76 0 0 1 18.24 29.44l5.76 13.44a72.32 72.32 0 0 0 25.6 36.16 96 96 0 0 0 38.72 16.64 196.16 196.16 0 0 0 40.32 4.16 182.08 182.08 0 0 0 32-2.24l13.44-2.24v83.84a23.04 23.04 0 0 1-7.68 17.6 27.84 27.84 0 0 1-23.36 4.16 438.08 438.08 0 0 1-219.2-162.88A427.84 427.84 0 0 1 64 512a437.44 437.44 0 0 1 60.16-224A443.52 443.52 0 0 1 288 124.16 437.44 437.44 0 0 1 512 64a437.44 437.44 0 0 1 224 60.16A443.52 443.52 0 0 1 899.84 288 436.8 436.8 0 0 1 960 512z","p-id":"2468",fill:"#7182c1"})])],-1),We=Object(o["createStaticVNode"])('<a href="https://github.com/endaytrer/xjtupurple" data-v-16ed5114><h1 data-v-16ed5114>XJTUPurple</h1></a><p data-v-16ed5114>👆 View this repository on GitHub 👆</p><div class="horizontalStack" data-v-16ed5114><img src="https://img.shields.io/github/forks/endaytrer/xjtupurple.svg?color=green" data-v-16ed5114><img src="https://img.shields.io/github/stars/endaytrer/xjtupurple.svg" data-v-16ed5114></div><div class="footnote" data-v-16ed5114> 希望你能给这个项目一颗Star! 你的支持是我最大的动力<code data-v-16ed5114>:)</code></div>',4);Object(o["popScopeId"])();var _e=Me((function(e,t,a,r,n,i){return Object(o["openBlock"])(),Object(o["createBlock"])("div",Ae,[$e,We])})),Ge={};a("4692");Ge.render=_e,Ge.__scopeId="data-v-16ed5114";var ze=Ge,Ee=Object(o["createStaticVNode"])("<h1>XJTUPurple</h1><h3>为了没有紫码的你更方便地出校</h3><span><b>作者</b> Endaytrer</span><br><span><b>联系方式</b></span><br><ul><li><b>电子邮件</b> endaytrer@gmail.com</li><li><b>备用电子邮件</b> endaytrer@outlook.com</li><li><b>Github</b> endaytrer</li></ul><span><b>鸣谢</b> @zhang570221322 GitHub</span>",8);function He(e,t,a,r,n,i){return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Ee])}var Je={};a("7a63");Je.render=He;var Qe=Je,Xe=[{path:"/",name:"Code",component:oe,props:{personalData:{stuNo:String,stuName:String,stuPosition:String,stuDegree:String,reportDate:String,reportTime:String,outTimeFrom:String,outTimeTo:String,photoURL:String,photoBorderWidth:Number,qrCode:String,generateColorOfCode:String}}},{path:"/settings",name:"Settings",component:qe,props:{personalData:{stuNo:String,stuName:String,stuPosition:String,stuDegree:String,reportDate:String,reportTime:String,outTimeFrom:String,outTimeTo:String,photoURL:String,photoBorderWidth:Number,qrCode:String,generateColorOfCode:String}}},{path:"/about",name:"About",component:Qe,props:!0},{path:"/github",name:"Github",component:ze}],Ye=Object(B["a"])({history:Object(B["b"])(),routes:Xe}),Ke=Ye,Ze=Object(o["createApp"])(C).use(Ke);Ze.mount("#app")},"64be":function(e,t,a){"use strict";a("c894")},"67af":function(e,t,a){},6890:function(e,t,a){},"7a63":function(e,t,a){"use strict";a("51dd")},"7db7":function(e,t,a){"use strict";a("e830")},9730:function(e,t,a){},"9d80":function(e,t,a){"use strict";a("9ec0")},"9ec0":function(e,t,a){},b5fe:function(e,t,a){"use strict";a("9730")},c894:function(e,t,a){},dfd4:function(e,t,a){"use strict";a("211d")},e0f2:function(e,t,a){"use strict";a("6890")},e830:function(e,t,a){},f548:function(e,t,a){}});
//# sourceMappingURL=app.4e3016ee.js.map