(function(t){function e(e){for(var i,l,o=e[0],n=e[1],c=e[2],p=0,u=[];p<o.length;p++)l=o[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&u.push(r[l][0]),r[l]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,o=1;o<s.length;o++){var n=s[o];0!==r[n]&&(i=!1)}i&&(a.splice(e--,1),t=l(l.s=s[0]))}return t}var i={},r={app:0},a=[];function l(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(s,i,function(e){return t[e]}.bind(null,i));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/resume/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=n;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bar-point"}),s("div",{staticClass:"container"},[t._m(0),t._m(1),s("section",{staticClass:"section"},[s("div",{staticClass:"section-top"},[s("div",[t._m(2),s("p",[s("span",{staticClass:"badge dark"},[t._v("총 "+t._s(t.returnCareerPeriod()))])])])]),t._l(t.career,(function(e,i){return s("section",{key:"exp"+i,ref:"wrapCompany",refInFor:!0,class:["wrap-company"]},[s("div",{staticClass:"col col-title"},[s("h3",[t._v(t._s(e.en))]),s("p",{staticClass:"job-position"},[t._v(" "+t._s(e.job)+" "),e.team?[t._v("| "+t._s(e.team))]:t._e()],2),s("p",[s("span",{staticClass:"text-gray"},[t._v(" "+t._s(e.period.start.join("."))+" - "+t._s(e.period.end.length>0?e.period.end.join("."):"현재")+" ")]),s("span",{staticClass:"badge"},[t._v(t._s(t.returnPeriodText(e.period.start,e.period.end)))]),0===e.period.end.length?s("span",{staticClass:"badge point"},[t._v("재직중")]):t._e()]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-dot"},t._l(e.descriptions,(function(e,i){return s("li",{key:"companyDesc"+i,domProps:{innerHTML:t._s(e)}})})),0),s("ul",{staticClass:"list-badge"},t._l(e.works,(function(e,i){return s("li",{key:"companyWorks"+i,staticClass:"badge"},[t._v(" "+t._s(e)+" ")])})),0)])]),s("div",{staticClass:"wrap-projects"},t._l(e.projects,(function(e,r){return s("div",{key:"project"+i+"-"+r,staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"area-title"},[s("h4",[e.links&&!e.links[1]?s("a",{attrs:{href:e.links[0].url,target:"_blank",title:"새창"}},[t._v(" "+t._s(e.title)+" ")]):[t._v(" "+t._s(e.title)+" ")]],2),s("p",{staticClass:"links-inline"},[e.links&&e.links.length>1?t._l(e.links,(function(e,i){return s("a",{key:"link"+r+"-"+i,attrs:{href:e.url,target:"_blank",title:"새창"}},[t._v(" "+t._s(e.title)+" ")])})):t._e()],2)]),s("p",[s("span",{staticClass:"text-gray"},[t._v(" "+t._s(e.period.start.join("."))+" - "+t._s(e.period.end.length>0?e.period.end.join("."):"현재")+" ")]),s("span",{staticClass:"badge"},[t._v(t._s(t.returnPeriodText(e.period.start,e.period.end)))]),s("span",{staticClass:"badge dark"},[t._v(t._s(e.type))])]),s("ul",{staticClass:"list-dot"},t._l(e.descriptions,(function(e,i){return s("li",{key:"prjDesc"+r+"-"+i,domProps:{innerHTML:t._s(e)}})})),0),s("ul",{staticClass:"list-badge"},t._l(e.keywords,(function(e,i){return s("li",{key:"prjKeyword"+r+"-"+i,staticClass:"badge"},[t._v(" "+t._s(e)+" ")])})),0)])])})),0)])}))],2),t._m(3),t._m(4)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-top"},[s("h1",[t._v("7년차 웹퍼블리셔"),s("br"),t._v(" 프론트엔드 개발자로 ")]),s("p",[t._v(" 크고 작은 규모의 다양한 웹사이트를 퍼블리싱 하며 코드 가독성과 확장성, 유지보수성에 대해 항상 고민해왔습니다."),s("br"),t._v(" 웹 표준, 웹 접근성, 웹 호환성 등 주어진 퍼블리싱 업무에서 나아가"),s("br"),t._v(" 더 많은 기회를 만들어 작업 영역을 확장해가면서 JS에 대한 경험을 쌓고자 노력하였습니다."),s("br")]),s("p",[t._v(" 팀 내 스터디에 참여하여 Vanilla JS, 프레임 워크, 라이브러리들을 익히면서 토이 프로젝트로 차근차근 흡수하고 있습니다."),s("br"),t._v(" 그렇게 현재 운영 중인 Vue.js 프로젝트에 투입되어 기능 구현 위주의 업무를 맡을 수 있었고"),s("br"),t._v(" 기존 소스들을 파악해가면서 프론트엔드 개발 영역까지 조금씩 경험하고 있습니다. ")]),s("p",[t._v(" 다양한 프로젝트를 맡으며 성장과 재미를 느껴왔지만"),s("br"),t._v(" 대기업 사이트 운영 위주로 익숙해진 업무와 수직적인 워크플로우로 적극적인 참여에 한계를 느꼈습니다."),s("br"),t._v(" 계속 공부만 하다보니 금방 날아가고. 완벽하게 흡수가되지 않는다. 일단 주어진 업무는 끝까지 물고 늘어져서 어떻게든 해내려고 노력하고 그 과정이 너무 신나기 때문에, 직접 부딪치면서 일하고 싶다. 새로운 도전과제를 직면했을때 에너지가 분출되고 어떻게든 해내려고 하기 때문에 그러한 과정들을 통해 크게 성장해왔다고 생각한다. 내가 진짜 흥미가 가는 서비스, 키워보고 싶은 서비스를 운영하는 회사에 들어가서 고난과 역경을 헤쳐나가며 빛나는 미래를 꿈꾸며 개발하고 싶다. 이제 한 단계 나아가 프론트엔드 개발자로서 비즈니스에 깊게 뛰어들어 함께 성장하고자 합니다. 도전적인 업무.시너지.추진력 ")]),s("dl",[s("dt",[t._v("github")]),s("dd",[s("a",{attrs:{href:"https://github.com/sssjsjj",target:"_blank",title:"새창"}},[t._v("https://github.com/sssjsjj")])]),s("dt",[t._v("blog")]),s("dd",[s("a",{attrs:{href:"https://dribbles.tistory.com/",target:"_blank",title:"새창"}},[t._v("https://dribbles.tistory.com/")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"section-top"},[s("h2",[t._v("Skills"),s("span",{staticClass:"dot-point"},[s("span",{staticClass:"dot-point"},[t._v(".")])])]),s("ul",{staticClass:"list-col-right"},[s("li",[s("small",[s("span",{staticClass:"badge bg-main light-2"},[t._v("1")]),t._v("학습 경험")])]),s("li",[s("small",[s("span",{staticClass:"badge bg-main light-1"},[t._v("2")]),t._v("유지보수 가능 수준 ")])]),s("li",[s("small",[s("span",{staticClass:"badge bg-main"},[t._v("3")]),t._v("Production 개발 가능 수준")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-title"},[s("h3",[t._v("Front-end")])]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-badge list-col-4"},[s("li",[s("span",{staticClass:"badge bg-main"},[t._v("3")]),t._v(" HTML/CSS")]),s("li",[s("span",{staticClass:"badge bg-main"},[t._v("3")]),t._v(" JavaScript")]),s("li",[s("span",{staticClass:"badge bg-main"},[t._v("3")]),t._v(" Jqeury")]),s("li",[s("span",{staticClass:"badge bg-main"},[t._v("3")]),t._v(" SCSS")]),s("li",[s("span",{staticClass:"badge bg-main light-1"},[t._v("2")]),t._v(" Vue.js")]),s("li",[s("span",{staticClass:"badge bg-main light-1"},[t._v("2")]),t._v(" WAI-ARIA")]),s("li",[s("span",{staticClass:"badge bg-main light-2"},[t._v("1")]),t._v(" React.js")]),s("li",[s("span",{staticClass:"badge bg-main light-2"},[t._v("1")]),t._v(" Angular.js")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-title"},[s("h3",[t._v("Etc")])]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-dot list-col-4"},[s("li",[t._v("VS Code")]),s("li",[t._v("Git/Github")]),s("li",[t._v("AEM")]),s("li",[t._v("SVN")]),s("li",[t._v("Jenkins")]),s("li",[t._v("Zeplin")]),s("li",[t._v("GA/GTM")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[t._v("Career"),s("span",{staticClass:"dot-point"},[t._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section education"},[s("div",{staticClass:"section-top"},[s("h2",[t._v("Education"),s("span",{staticClass:"dot-point"},[t._v(".")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-title"},[s("h3",[t._v("Javascript/JQuery")]),s("p",{staticClass:"text-gray"},[t._v("2016.04 - 2016.06")])]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-dot"},[s("li",[t._v("자바 스크립트의 개요 및 기본 문법(출력, 변수, 자료형, 입력, 배열, 형변화)")]),s("li",[t._v("제어문의 구조(조건문과 반복문)")]),s("li",[t._v("내장 함수, 사용자 정의 함수의 선언과 호출")]),s("li",[t._v("j-query 기초 문법 및 명령어")]),s("li",[t._v("j-query 플러그인의 종류와 적용 방법, j-query approach 플러그인")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-title"},[s("h3",[t._v("[NCS기반] 디지털 웹 디자인(웹퍼블리셔) ")]),s("p",{staticClass:"text-gray"},[t._v("2015.06 - 2015.09")])]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-dot"},[s("li",[t._v("그래픽 디자인")]),s("li",[t._v("html5, css3, scss, jquery")]),s("li",[t._v("웹표준 디자인 기획 및 모델설계, 제작")]),s("li",[t._v("포트폴리오 제작")]),s("li",[t._v("학업성취최우수로 졸업")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-title"},[s("h3",[t._v("상명대학교 사진영상미디어학과")]),s("p",{staticClass:"text-gray"},[t._v("2010.03 - 2014.02")])]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-dot"},[s("li",[t._v("광고 사진 전공")]),s("li",[t._v("html5, css3, scss, jquery")]),s("li",[t._v("웹표준 디자인 기획 및 모델설계, 제작")]),s("li",[t._v("포트폴리오 제작")]),s("li",[t._v("학업성취최우수로 졸업")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section study"},[s("div",{staticClass:"section-top"},[s("h2",[t._v("Toy Projects"),s("span",{staticClass:"dot-point"},[t._v(".")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col col-title"},[s("h3",[t._v("팀 스터디")]),s("p",{staticClass:"text-gray"},[t._v("2016.04 - 2016.06")])]),s("div",{staticClass:"col"},[s("ul",{staticClass:"list-dot"},[s("li",[t._v("https://github.com/sssjsjj/study/tree/master/poll-bar-graph")]),s("li",[t._v("https://github.com/sssjsjj/study/tree/master/gallery-slider")]),s("li",[t._v("https://github.com/sssjsjj/study/tree/master/customize-favorite-homeMenu")]),s("li",[t._v("https://github.com/sssjsjj/study/tree/master/calendar")])])])])])}],l=s("b85c"),o=(s("99af"),[{en:"IPARTNERS",kor:"아이파트너즈",team:"UX",job:"웹퍼블리셔",period:{start:[2017,3],end:[]},descriptions:["웹 에이전시","대기업 웹 사이트 위주"],works:["사이트 유지보수","사이트 리뉴얼","사이트 구축","웹표준","웹접근성","SEO"],projects:[{title:"현대닷컴",links:[{title:"현대닷컴",url:"https://www.hyundai.com/kr/ko/e"}],period:{start:[2020,4],end:[]},members:3,type:"운영",descriptions:["웹 접근성 인증 갱신 작업","[개선] 다국어 차량 상세 페이지 node.js 환경 적용",'[개선] <a href="https://www.hyundai.com/kr/ko/e/vehicles/grandeur/intro" title="새창" tartget="_blank">차량 상세 페이지</a> 디자인 개편 작업<br> - PC는 Full page Carousel, Mobile에서는 스크롤 구동으로 변환<br> - 여러 컴포넌트들과 편리한 상태 공유를 위해 Vuex store 이용',"[개선] 차량 상세 페이지 <br>- 반복되는 단순 작업 자동화 제안 후 작업<br> - pc 소스 기준으로 mobile 소스 자동 삽입","[개선] 내 차 만들기/차량 상세 페이지 - 선택한 차량 및 옵션 바탕으로 전시차량 조회 기능 추가",'[개선] <a href="https://www.hyundai.com/kr/ko/e/vehicles/comparison" title="새창" tartget="_blank">모델비교</a>/<a href="https://www.hyundai.com/kr/ko/e/vehicles/comparison/popup/my_comparison?carCodes=DN08,DN09&purposeCodes=J,J" title="새창" tartget="_blank">트림비교</a> 페이지 모바일 UI/UX 개선 <br> - 모바일 스와이프, 차량 순서 이동 기능 추가<br>- 반복되는 기존 소스 컴포넌트로 리팩토링하여 코드 용량 및 유지 보수성 개선'],keywords:["Vue.js","Vuex","Nuxt.js","javascript","SCSS","Git","Git lab","Jenkins","SVN","AEM","HTML/CSS"]},{title:"현대 월드와이드",links:[{title:"현대 월드와이드",url:"https://www.hyundai.com/worldwide/en"},{title:"현대 WWN 3.0(28개 해외 사이트)",url:"https://org3-www.hyundai.com/template_ar/ar"}],period:{start:[2019,4],end:[2020,3]},members:1,type:"운영",descriptions:["AEM 컴포넌트 관리 및 업데이트","월드와이드 기준으로 WWN 3.0 확산 적용","컨텐츠 페이지 정기 업데이트","인도 개발자와 협업","[개선] 디자인 개편에 따른 신규 컴포넌트 생성 (독일 디자인 업체와 협업)","[개선] 현대 월드와이드 타 업체 개편 이후 WWN 3.0 사이트 확산 작업"],keywords:["javascript","jQuery","Zeplin","AEM","HTML/CSS"]},{title:"기아 브랜드 사이트",links:[{title:"기아닷컴",url:"https://www.kia.com/kr/main.html"},{title:"기아 월드와이드",url:"http://www.kia.com/worldwide/main.do"},{title:"플레이 기아",url:"https://play.kia.com/main.do"},{title:"기아 CSR",url:"https://csr.kia.com:444/usr/ma/ma100Det.kcsr"},{title:"기아 PR",url:"https://pr.kia.com/ko/main.do"},{title:"기아 군수",url:"https://military.kia.com/kr/main.do"}],period:{start:[2019,3],end:[2020,3]},members:2,type:"운영",descriptions:["보안 문제로 개발에서만 배포 진행 가능하여 소스 내 주석과 함께 작업 내용 문서화 하여 개발에 전달","웹 접근성 인증 갱신 작업","[개선] 플레이 기아 이벤트 페이지 웹표준 개선","[개선] 기아 CSR 컨텐츠 페이지 웹표준 개선"],keywords:["javascript","jQuery","HTML/CSS"]},{title:"삼성자산운용·삼성코덱스",links:[{title:"삼성 자산 운용",url:"http://www.samsungfund.com/main.action"},{title:"mobile",url:"http://m.samsungfund.com/main.action"},{title:"EN",url:"http://www.eng.samsungfund.com/main.do"},{title:"EN mobile",url:"http://m.eng.samsungfund.com/main.do"},{title:"코덱스",url:"http://www.kodex.com/main.do"},{title:"mobile",url:"http://m.kodex.com/main.do"},{title:"EN",url:"http://www.eng.kodex.com/main.do"},{title:"EN mobile",url:"http://m.eng.kodex.com/main.do"}],period:{start:[2020,1],end:[2020,4]},members:3,type:"접근성",descriptions:["웹 접근성 인증 취득 작업","국문/영문, PC/MOBILE 총 8개 사이트 작업","Highcharts, bx slider, date picker 등 플러그인 접근성이 주요 이슈"],keywords:["jQuery","WAI-ARIA","HTML/CSS"]},{title:"현대 N brand",links:[{title:"현대 N brand",url:"https://www.hyundai-n.com/"}],period:{start:[2019,7],end:[2020,4]},members:1,type:"Google Tag Manager",descriptions:["Google Tag Manager 신규 적용 및 운영","Youtube 관련 커스텀 태그 작업이 주요 이슈"],keywords:["javascript","HTML/CSS","Google Tag Manager","Google Analytics"]},{title:"소니 G Master",links:[{title:"소니 G Master",url:"https://www.sony.co.kr/alpha/handler/alphaCommon-Start?PageName=jsp/alpha/gmaster/index.jsp"}],period:{start:[2019,2],end:[2019,3]},members:1,type:"리뉴얼 구축",descriptions:["소니 본사에 약 1달간 파견","플러그인 없이 기능 구현","parallax, animation 등 스크롤 이벤트에 따른 효과 제안하여 작업 진행","갤러리 페이지 내 사진 자세히 보기 팝업(PC) 세로형 디자인 > 가로형으로 제안하여 작업 진행"],keywords:["jQuery","HTML/CSS"]},{title:"아모레 퍼시픽 브랜드 사이트",links:[{title:"설화수",url:"https://www.sulwhasoo.com/kr/ko/index.html"},{title:"아모레 퍼시픽",url:"https://www.amorepacific.com/kr/ko/index.html"},{title:"아이오페",url:"https://www.iope.com/kr/ko/index.html"},{title:"헤라",url:"https://www.hera.com/kr/ko/index.html"},{title:"마몽드",url:"https://www.mamonde.com/kr/ko/index.html"},{title:"한율",url:"https://www.hanyul.com/kr/ko/index.html"},{title:"미쟝센",url:"http://www.miseenscene.com/main.do"},{title:"려",url:"https://www.ryo.com/kr/ko/index.html"},{title:"바이탈뷰티",url:"https://www.vitalbeautie.com/kr/ko/index.html"},{title:"프리메라",url:"https://www.primerabeauty.com/kr/ko/index.html"},{title:"해피바스",url:"https://www.happybath.com/kr/ko/index.html"}],period:{start:[2017,3],end:[2019,2]},members:2,type:"운영",descriptions:["정기 상품 상세 업데이트, 이벤트 페이지 작업","AEM 컴포넌트 관리 및 업데이트","웹 접근성 인증 갱신 작업","[개선] 설화수 스파 예약 시스템 개선","[개선] 한율 메인 페이지 디자인 개선","[개선] 미쟝센 신규 이벤트 템플릿 작업","[개선] 마몽드 상품 상세페이지 개선"],keywords:["jQuery","AEM","Eclipse","HTML/CSS"]}]},{en:"RZA",kor:"RZA",team:"",job:"웹디자이너",period:{start:[2016,7],end:[2017,3]},descriptions:["웹 에이전시","소규모 웹 사이트 위주","메일, 블로그 컨텐츠 제작"],works:["사이트 유지보수","사이트 구축","웹표준","웹디자인"],projects:[{title:"DUVIVIER",links:[{title:"DUVIVIER",url:"http://duvivier.co.kr/"}],period:{start:[2017,1],end:[2017,2]},members:"1",type:"구축",descriptions:["프랑스 침대 브랜드 DUVIVIER의 브랜드 사이트 구축","one page scroll"],keywords:["jQuery","HTML/CSS"]},{title:"목일가",links:[{title:"목일가",url:"http://wdshop.co.kr/"}],period:{start:[2016,12],end:[2017,1]},members:"1",type:"구축",descriptions:["가구 브랜드 목일가 브랜드 사이트 구축","one page scroll"],keywords:["jQuery","HTML/CSS"]},{title:"청년희망재단 동남본부 모바일",links:[{title:"청년희망재단 동남본부 모바일",url:"https://www.yhf.kr/m/dongnam/index.do"}],period:{start:[2016,7],end:[2017,3]},members:"1",type:"운영",descriptions:["정기 메일 컨텐츠 디자인, 퍼블리싱","블로그 컨텐츠 작업"],keywords:["jQuery","HTML/CSS"]},{title:"성형외과·쇼핑몰",links:[{title:"성형외과",url:"http://www.1004sky.co.kr/new2018/index.php"},{title:"쇼핑몰",url:"http://dualforms.co.kr/"}],period:{start:[2016,7],end:[2017,3]},members:"2",type:"운영",descriptions:["유지보수 및 소규모 개선"],keywords:["jQuery","HTML/CSS"]}]},{en:"LAWKET",kor:"로켓",team:"시스템개발팀",job:"웹디자이너",period:{start:[2015,10],end:[2016,6]},descriptions:["법률 o2o 플랫폼 스타트업","자회사 플랫폼 유지보수 및 버전업","운영 종료"],works:["사이트 유지보수","사이트 구축","웹표준","웹디자인"],projects:[{title:"로켓닷컴",period:{start:[2015,10],end:[2016,6]},members:"2",type:"운영/리뉴얼",descriptions:["법률 o2o 플랫폼","상시 사이트 테스트 진행, 버그 및 개선 사항 작업","1ver > 1.5ver 버전업 작업"],keywords:["jQuery","HTML/CSS"]},{title:"LAWKET 기업 사이트",period:{start:[2015,10],end:[2015,12]},members:"1",type:"구축",descriptions:["첫 회사 첫 프로젝트","기획부터 사이트에 사용 될 직원들 사진 촬영, 디자인, 퍼블리싱까지 모두 재미있게 진행했던 1인 프로젝트"],keywords:["jQuery","HTML/CSS"]}]}]),n={data:function(){return{career:{},isCompanyActive:!1}},computed:{},watch:{},created:function(){this.career=o},mounted:function(){},beforeDestroy:function(){},methods:{scrollFixTitle:function(t){var e,s=Math.ceil(window.pageYOffset)+30,i=Object(l["a"])(t);try{for(i.s();!(e=i.n()).done;){var r=e.value,a=r.offsetTop<s,o=r.offsetTop+t.offsetHeight<s;a&&!o?r.classList.add("active"):(r.classList.remove("active"),r.style="")}}catch(n){i.e(n)}finally{i.f()}},returnPeriod:function(t,e){var s=new Date,i=e.length?e[0]:s.getFullYear(),r=e.length?e[1]:s.getMonth(),a=i-t[0],l=r-t[1]+1,o=l<0?a-1:a,n=l<0?12+l:l,c=o;return[c,n]},returnPeriodText:function(t,e){var s=this.returnPeriod(t,e),i=s[0],r=s[1],a=i>0?i+"년":"",l=r>0?r+"개월":"";return"".concat(a," ").concat(l)},returnCareerPeriod:function(){var t,e=0,s=0,i=Object(l["a"])(this.career);try{for(i.s();!(t=i.n()).done;){var r=t.value,a=r.period,o=this.returnPeriod(a.start,a.end);e+=o[0],s+=o[1]}}catch(d){i.e(d)}finally{i.f()}e+=Math.floor(s/12),s%=12;var n=e>0?e+"년":"",c=s>0?s+"개월":"";return"".concat(n," ").concat(c)}}},c=n,d=(s("5c0b"),s("2877")),p=Object(d["a"])(c,r,a,!1,null,null,null),u=p.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9c0c":function(t,e,s){}});
//# sourceMappingURL=app.659945db.js.map