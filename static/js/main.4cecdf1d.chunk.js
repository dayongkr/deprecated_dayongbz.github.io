(window["webpackJsonpbang-gu-seok"]=window["webpackJsonpbang-gu-seok"]||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),l=a.n(o),c=(a(21),a(22),a(3)),i=a(4),s=a.n(i),m=a(1),u=a.n(m);function d(e){var t=e.weather,a=e.score,o=e.position;return Object(r.useEffect)(function(){},[t]),n.a.createElement("div",{className:"weatherCardWrap"},n.a.createElement("p",null,"\ud604\uc7ac \ub0a0\uc528"),n.a.createElement("div",{className:"weatherCardMain"},n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\uae30\uc628"),t&&t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>-900&&(a[0]>=50?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(22, 160, 133, 1)"}},t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue," \u2103"),n.a.createElement("div",{className:"greenLight"})):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(231, 76, 60, 1)"}},t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue," \u2103"),n.a.createElement("div",{className:"redLight"}))),t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=-900)&&n.a.createElement("p",{className:"details"},"\uad00\uce21\uc2e4\ud328")),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\ube44\uc624\ub098?\ub208\uc624\ub098?"),t&&(t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue<=-900)&&n.a.createElement("p",{className:"details"},"\uad00\uce21\uc2e4\ud328"),t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&0===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(22, 160, 133, 1)"}},"\ub458\ub2e4 \uc548\uc634!"),n.a.createElement("div",{className:"greenLight"})),t&&1===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(231, 76, 60, 1)"}},"\ub098\uc774\uc2a4! \ube44\uc628\ub2e4!"),n.a.createElement("div",{className:"redLight"})),t&&2===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(231, 76, 60, 1)"}},"\uc6b0\uc640~ \ube44\ub791 \ub208 \ub458\ub2e4!"),n.a.createElement("div",{className:"redLight"})),t&&3===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(241, 196, 15, 1)"}},"\ub098\uc774\uc2a4! \ub208\uc628\ub2e4!"),n.a.createElement("div",{className:"yellowLight"})),t&&4===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(231, 76, 60, 1)"}},"\uc624! \uc18c\ub098\uae30\ub2e4!"),n.a.createElement("div",{className:"redLight"}))),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\uc2b5\ub3c4"),t&&t.item.filter(function(e){return"REH"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"REH"===e.category})[0].obsrValue>-900&&(a[2]>=50?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(22, 160, 133, 1)"}},t.item.filter(function(e){return"REH"===e.category})[0].obsrValue," %"),n.a.createElement("div",{className:"greenLight"})):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(231, 76, 60, 1)"}},t.item.filter(function(e){return"REH"===e.category})[0].obsrValue," %"),n.a.createElement("div",{className:"redLight"}))),t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"REH"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"REH"===e.category})[0].obsrValue<=-900)&&n.a.createElement("p",{className:"details"},"\uad00\uce21\uc2e4\ud328")),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\ud48d\uc18d"),t&&t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue>-900&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"details",style:{color:"rgba(241, 196, 15, 1)"}},t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue," m/s"),n.a.createElement("div",{className:"yellowLight"})),t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue<=-900)&&n.a.createElement("p",{className:"details"},"\uad00\uce21\uc2e4\ud328")),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\uc9c0\uc5ed\uae30\uc900"),n.a.createElement("p",{className:"details"},t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&t.dong,o&&!0===o.ip&&n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"small",style:{color:"#c3c3d3"}},"\uc608\uc0c1\uc704\uce58 \uc785\ub2c8\ub2e4")))),n.a.createElement("div",{className:"weatherCard"},n.a.createElement("p",{className:"title"},"\ub0a0\uc9dc\uae30\uc900"),n.a.createElement("p",{className:"details"},t?"":n.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&"".concat("".concat(t.item[0].baseTime).substring(0,2)," \uc2dc"),t&&n.a.createElement("span",{className:"small"},t.date)))))}function g(e){e.weather;var t=e.score;return n.a.createElement("div",{id:"weatherMain"},t&&0!==t.length&&(+(t.reduce(function(e,t){return e+t})/3).toFixed(2)>=50?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"scoreWrapper",style:{color:"rgba(22, 160, 133, 1)"}},n.a.createElement("span",{className:"score"}," ".concat((t.reduce(function(e,t){return e+t})/3).toFixed(2)," ")),n.a.createElement("span",{className:"scoreSub"},"/100"),n.a.createElement("div",{className:"details"},n.a.createElement("p",{style:{color:"rgba(22, 160, 133, 1)"}},'"\ub098\uac00\uae30 \uc88b\uc740 \ub0a0\uc785\ub2c8\ub2e4!"'),n.a.createElement("div",{className:"bar",style:{backgroundImage:'url("images/bar.png")'}})))):n.a.createElement("div",{className:"scoreWrapper",style:{color:"rgba(231, 76, 60, 1)"}},n.a.createElement("span",{className:"score"}," ".concat((t.reduce(function(e,t){return e+t})/3).toFixed(2)," ")),n.a.createElement("span",{className:"scoreSub"},"/100"),n.a.createElement("div",{className:"details"},n.a.createElement("p",{style:{color:"rgba(231, 76, 60, 1)"}},"\ub098\uac00\uba74 \uc8fd\uae30 \uc88b\uc740 \ub0a0\uc785\ub2c8\ub2e4!"),n.a.createElement("div",{className:"bar",style:{backgroundImage:'url("images/bar.png")'}})))),n.a.createElement("div",{className:"help"},"?"),n.a.createElement("div",{className:"helpDetails"},n.a.createElement("p",null,"\uc810\uc218\ub294 \uae30\uc628, \ube44, \ub208 \uc5ec\ubd80, \uc2b5\ub3c4\uc5d0 \ub530\ub77c \uc815\ud574\uc9d1\ub2c8\ub2e4."),n.a.createElement("div",{className:"bar",style:{backgroundImage:'url("images/bar.png")'}})))}function f(e){var t=e.time,a=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)();return Object(r.useEffect)(function(){a&&t&&(a.current.style.transform="rotate(".concat(6*+t.minute-90,"deg)")),o&&t&&(o.current.style.transform="rotate(".concat(6*+t.seconds-90,"deg)")),l&&t&&(l.current.style.transform="rotate(".concat(30*+t.hour-90,"deg)"))},[t]),n.a.createElement("div",{className:"weatherCardWrap"},n.a.createElement("p",null,"\ud604\uc7ac \uc2dc\uac04"),n.a.createElement("div",{className:"weatherCardMain"},n.a.createElement("div",{id:"clockWrap"},n.a.createElement("div",{id:"hours",ref:l}),n.a.createElement("div",{id:"minute",ref:a}),n.a.createElement("div",{id:"seconds",ref:o}),n.a.createElement("div",{className:"helpDetails"},n.a.createElement("p",null,t&&"".concat(t.hour,"\uc2dc ").concat(t.minute,"\ubd84 ").concat(t.seconds,"\ucd08")),n.a.createElement("div",{className:"bar",style:{backgroundImage:'url("images/bar.png")'}})))))}var p=6371.00877,E=5,b=30,h=60,y=126,N=38,w=43,S=136;function v(){var e=Object(r.useState)(),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)(),i=Object(c.a)(l,2),m=i[0],v=i[1],M=Object(r.useState)(),H=Object(c.a)(M,2),V=H[0],I=H[1],O=Object(r.useState)(!0),Y=Object(c.a)(O,2),F=Y[0],T=Y[1],A=Object(r.useState)([]),P=Object(c.a)(A,2),D=P[0],j=P[1];return Object(r.useEffect)(function(){function e(e,t,a){s.a.get("https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=".concat(t.toFixed(4),",").concat(+e.toFixed(4),"&orders=admcode&output=json"),{headers:{"X-NCP-APIGW-API-KEY-ID":"y6syzp2el8","X-NCP-APIGW-API-KEY":"oGUQ22oSWOEDf44apBf9QSZVKanLLauMgr5CnBDy"}}).then(function(r){o({latitude:+e.toFixed(4),longitude:+t.toFixed(4),dong:r.data.results[0].region.area3.name,ip:a}),window.localStorage.setItem("position",JSON.stringify({latitude:+e.toFixed(4),longitude:+t.toFixed(4),dong:r.data.results[0].region.area3.name,ip:a}))})}navigator.geolocation.getCurrentPosition(function(t){window.localStorage.getItem("position")?JSON.parse(window.localStorage.getItem("position")).latitude&&JSON.parse(window.localStorage.getItem("position")).longitude&&(JSON.parse(window.localStorage.getItem("position")).latitude!==+t.coords.latitude.toFixed(4)||JSON.parse(window.localStorage.getItem("position")).longitude!==+t.coords.longitude.toFixed(4)?e(t.coords.latitude,t.coords.longitude):o(JSON.parse(window.localStorage.getItem("position")))):e(t.coords.latitude,t.coords.longitude)},function(t){s.a.get("https://cors-anywhere.herokuapp.com/https://api.ipify.org/?format=jso").then(function(t){s.a.get("https://geo.ipify.org/api/v1?apiKey=at_z90410K91sSrKLz1jegiLyV3MV3ek&ipAddress=".concat(t.data)).then(function(t){window.localStorage.getItem("position")?JSON.parse(window.localStorage.getItem("position")).latitude&&JSON.parse(window.localStorage.getItem("position")).longitude&&(JSON.parse(window.localStorage.getItem("position")).latitude!==+t.data.location.lat||JSON.parse(window.localStorage.getItem("position")).longitude!==+t.data.location.lng?e(t.data.location.lat,t.data.location.lng,!0):o(JSON.parse(window.localStorage.getItem("position")))):e(t.data.location.lat,t.data.location.lng,!0)})})}),setInterval(function(){v({date:u.a.tz("Asia/Seoul").format("YYYY.MM.DD"),hour:u.a.tz("Asia/Seoul").format("hh"),minute:u.a.tz("Asia/Seoul").format("mm"),seconds:u.a.tz("Asia/Seoul").format("ss"),ampm:u.a.tz("Asia/Seoul").format("A")})},300)},[]),Object(r.useEffect)(function(){function e(){if(T(!1),"00"===u.a.tz("Asia/Seoul").format("HH")&&+u.a.tz("Asia/Seoul").format("mm")<40)T(!0);else{var e,t=function(e,t){var a=Math.PI/180,r=p/E,n=b*a,o=h*a,l=y*a,c=N*a,i=Math.tan(.25*Math.PI+.5*o)/Math.tan(.25*Math.PI+.5*n);i=Math.log(Math.cos(n)/Math.cos(o))/Math.log(i);var s=Math.tan(.25*Math.PI+.5*n);s=Math.pow(s,i)*Math.cos(n)/i;var m=Math.tan(.25*Math.PI+.5*c);m=r*s/Math.pow(m,i);var u={};u.lat=e,u.lng=t;var d=Math.tan(.25*Math.PI+e*a*.5);d=r*s/Math.pow(d,i);var g=t*a-l;return g>Math.PI&&(g-=2*Math.PI),g<-Math.PI&&(g+=2*Math.PI),g*=i,u.x=Math.floor(d*Math.sin(g)+w+.5),u.y=Math.floor(m-d*Math.cos(g)+S+.5),u}(a.latitude,a.longitude),r=t.x,n=t.y;e=+u.a.tz("Asia/Seoul").format("mm")>=40?u.a.tz("Asia/Seoul").format("HH00"):+u.a.tz("Asia/Seoul").format("HH")<11?"0".concat(+u.a.tz("Asia/Seoul").format("HH00")-100):"".concat(+u.a.tz("Asia/Seoul").format("HH00")-100),s.a.get("https://cors-anywhere.herokuapp.com/http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastGrib?ServiceKey=AgUmvb8tXYH2nBf2mgAOubgkr%2BqNvPU34C1VcEXlTuSHLAoUc09DB1urM1%2FNNYac6dquC7qM5Gdt%2FZdKu67cBw%3D%3D&base_date=".concat(u.a.tz("Asia/Seoul").format("YYYYMMDD"),"&base_time=").concat(e,"&nx=").concat(r,"&ny=").concat(n,"&_type=json")).then(function(e){I({time:u.a.tz("Asia/Seoul").format("HHmm"),date:u.a.tz("Asia/Seoul").format("YYYYMMDD"),item:e.data.response.body.items.item,dong:a.dong}),window.localStorage.setItem("weather",JSON.stringify({time:u.a.tz("Asia/Seoul").format("HHmm"),date:u.a.tz("Asia/Seoul").format("YYYYMMDD"),item:e.data.response.body.items.item,dong:a.dong})),T(!0)}).catch(function(e){T(!0)})}}a&&F&&(window.localStorage.getItem("weather")?V||(a.dong!==JSON.parse(window.localStorage.getItem("weather")).dong?e():I(JSON.parse(window.localStorage.getItem("weather")))):e(),V&&Math.abs(+u.a.tz("Asia/Seoul").format("YYYYMMDDHHmm")-+"".concat(V.item[0].baseDate).concat(V.item[0].baseTime))>=140&&e())},[a,V,m,F]),Object(r.useEffect)(function(){var e=[];if(V){switch(V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=900&&V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=-900?V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=16&&V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=20?e[0]=100:V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=40&&V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>20?e[0]=(100-5*Math.abs(V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue-20))/10*9:V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<16&&V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=-34?e[0]=100-2*(16-V.item.filter(function(e){return"T1H"===e.category})[0].obsrValue):e[0]=0:e[0]=50,V.item.filter(function(e){return"PTY"===e.category})[0].obsrValue){case 0:e[1]=100;break;case 1:e[1]=30;break;case 2:e[1]=50;break;case 3:e[1]=70;break;case 4:e[1]=0;break;default:e[1]=50}V.item.filter(function(e){return"REH"===e.category})[0].obsrValue>=40&&V.item.filter(function(e){return"REH"===e.category})[0].obsrValue<=70?e[2]=100:(V.item.filter(function(e){return"REH"===e.category})[0].obsrValue>=0&&V.item.filter(function(e){return"REH"===e.category})[0].obsrValue,e[2]=30)}j(e)},[V]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"weatherWrapper"},n.a.createElement(g,{weather:V,score:D}),n.a.createElement(d,{weather:V,score:D,position:a}),n.a.createElement(f,{time:m})))}var M=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{id:"headerWrap"},"\ubc29\uad6c\uc11d")),n.a.createElement(v,null))};l.a.render(n.a.createElement(M,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4cecdf1d.chunk.js.map