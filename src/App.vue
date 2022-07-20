<template>
  <div>
    <div class="bar-point"></div>
    <div class="container">
      <ul class="list-icon">
        <li>
          <a href="https://github.com/yemsu" target="_blank" title="새창">
            github
          </a>
        </li>
        <li>
          <a href="https://yemsu.github.io/" target="_blank" title="새창">
            blog
          </a>
        </li>
      </ul>
      <div class="container-top">
        <div class="wrap-title">
          <!-- <div class="wrap-image profile">
            <img src="./assets/images/profile-1.jpg" alt="먼 하늘을 보며 바람을 느끼는 정수진">
          </div> -->
          <h1>
            <span class="smaller-1 weight-normal">7년차 퍼블리싱 경력</span><br>
            <span class="bigger-1">프론트엔드 개발자 정수진입니다. </span>
          </h1>
        </div>
        <div class="wrap-contents">
          <div class="wrap-text">
            <p>
              크고 작은 규모의 다양한 웹사이트를 작업하며 코드 가독성과 확장성, 유지보수성에 대해 고민해왔습니다.<br>
              웹표준, 웹 접근성, 반응형 개발 등의 주어진 업무에서 나아가 더 많은 기회를 만들어 작업 영역을 확장해가면서 자바스크립트에 대한 실무 경험을 쌓았습니다.
            </p>
            <p>
              익혀왔던 내용들을 바탕으로 현재 운영 중인 Vue.js 프로젝트에 투입될 수 있었고 기능 구현 위주의 업무를 맡고 있습니다.<br>
              스터디와 프로젝트 소스 파악을 병행하며 프론트엔드 개발자 영역까지 조금씩 넓혀가며 작업하고 있습니다.
            </p>
            <!-- <h3>인프런 지원 동기</h3>
            <p>
              현재는 자회사 서비스가 아닌 고객의 사이트를 주로 작업합니다. 때문에 거쳐야 하는 커뮤니케이션 단계들이 많고 고객 요청에 의해 작업이 진행되고있습니다. 작업에 대한 내용이 정해진 후 요청이 오기 때문에 작업자가 의견을 제시할 수 경우가 많지 않았습니다. <br>
              그래서 이런 회사에서 일해보고 싶다고 생각했습니다. 
            </p>
            <ul class="list-bullet dot">
              <li>수동적인 프로세스에서 벗어나, 더 나은 방법에 대해 고민하는 팀에 합류해 함께 생각을 공유하며 작업 할 수 있는 곳</li>
              <li>능동적인 자세가 큰 장점이 될 수 있는 곳</li>
            </ul>
            <p>
              그러다 유튜브를 통해 향로님을 알게되었고, 더 나은 개발 문화에 대해 항상 고민하시는 분이라는 생각이 들었습니다. 인프랩 CTO님이신 것을 알게되면서 인프랩 대해 좀 더 알아보았고 원하던 회사상과 부합해 멤버가 되고싶어 지원하게 되었습니다.
            </p> -->
          </div>
        </div>
      </div>
      <section class="section">
        <div class="section-top">
          <div class="wrap-title">
            <h2>Career<span class="dot-point">.</span></h2>
            <p><span class="badge">총 {{ returnCareerPeriod() }}</span></p>
          </div>
        </div>
        <section 
          v-for="(exp, expIndex) in career"
          :key="`exp${expIndex}`"
          class="wrap-company"
          ref="wrapCompany"
        >
          <div class="col col-title sticky">
            <h3>{{ exp.en }}</h3>
            <p class="job-position">              
              {{ exp.job }} <template v-if="exp.team">| {{ exp.team }}</template>            
            </p>
            <p>
              <span class="text-gray">
                {{ exp.period.start.join('.') }}
                -
                {{ exp.period.end.length > 0 ? exp.period.end.join('.') : '현재' }}
              </span>
              <span class="badge">{{ returnPeriodText(exp.period.start, exp.period.end) }}</span>              
              <span v-if="exp.period.end.length === 0" class="badge point">재직중</span>   
            </p>
            <div class="col">
              <ul class="list-bullet dot">
                <li
                  v-for="(desc, descIndex) in exp.descriptions"
                  :key="`companyDesc${descIndex}`"
                  v-html="desc"
                >
                </li>
              </ul>
              <ul class="list-badge">
                <li
                  v-for="(work, workIndex) in exp.works"
                  :key="`companyWorks${workIndex}`"
                  class="badge"
                >
                  {{ work }}
                </li>
              </ul>
            </div>            
          </div>
          <div class="wrap-row">
            <div
              v-for="(prj, prjIndex) in exp.projects"
              :key="`project${expIndex}-${prjIndex}`"
              class="row"
            >
              <div class="col">
                <div class="area-title">
                  <h4>
                    <a v-if="prj.links && !prj.links[1]" :href="prj.links[0].url"
                      target="_blank" 
                      title="새창"
                    >
                      {{ prj.title }}
                    </a>
                    <template v-else>
                      {{ prj.title }}
                    </template>
                  </h4>
                  <p class="links-inline">
                    <template v-if="prj.links && prj.links.length > 1">
                      <a
                        v-for="(link, linkIndex) in prj.links"
                        :key="`link${prjIndex}-${linkIndex}`"
                        :href="link.url"
                        target="_blank"
                        title="새창"
                      >
                        {{ link.title }}
                      </a>                      
                    </template>
                  </p>
                </div>
                <p>
                  <span class="text-gray">
                    {{ prj.period.start.join('.') }}
                    -
                    {{ prj.period.end.length > 0 ? prj.period.end.join('.') : '현재'}}
                  </span>            
                  <span class="badge">{{ returnPeriodText(prj.period.start, prj.period.end) }}</span>
                  <span class="badge dark">{{ prj.type }}</span> 
                </p>
                <ul class="list-bullet dot">
                  <li
                    v-for="(prjDesc, prjDescIndex) in prj.descriptions"
                    :key="`prjDesc${prjIndex}-${prjDescIndex}`"
                  >
                    <span v-html="prjDesc.title || prjDesc"></span>
                    <ul
                      v-if="prjDesc.desc"
                      class="list-bullet hyphen"
                    >
                      <li
                        v-for="(prjDesc2, prjDesc2Index) in prjDesc.desc"                    
                        :key="`prjDesc${prjDesc2Index}`"
                      >
                        {{ prjDesc2 }}
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="list-badge">
                  <li
                    v-for="(prjKeyword, prjKeywordIndex) in prj.keywords"
                    :key="`prjKeyword${prjIndex}-${prjKeywordIndex}`"
                    class="badge"
                  >
                    {{ prjKeyword }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="section">
        <div class="section-top">
          <h2>Skills<span class="dot-point"><span class="dot-point">.</span></span></h2>
          <!-- <ul class="list-col-right">
            <li><small><span class="badge bg-main light-2">1</span>학습 경험</small></li>
            <li><small><span class="badge bg-main light-1">2</span>유지보수 가능 수준 </small></li>
            <li><small><span class="badge bg-main">3</span>Production 개발 가능 수준</small></li>
          </ul> -->
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Overall</h3>
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <li>코드의 재사용과 확장성, 가독성을 고려하며 작업합니다.</li>
              <li>다양한 브라우저/디바이스 지원 경험이 다수 있습니다.</li>
              <li>비효율적인 프로세스 개선 방안을 제시하고 보완하는 것을 좋아합니다.</li>
              <li>적절한 커뮤니케이션이 업무 효율을 높여준다고 믿습니다.</li>
              <li>능숙한 분야가 아니더라도 적극적으로 탐색하여 최선의 결과를 낼 수 있도록 노력합니다.</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>HTML/CSS</h3>
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <li>웹표준을 준수하며 시맨틱한 마크업을 작성합니다.</li>
              <li>Search Engine Optimization(SEO) 작업 경험이 있습니다.</li>
              <li>웹 접근성 취득 경험이 다수 있습니다.</li>
              <li>컴포넌트 단위 작업 경험이 다수 있습니다.</li>
              <li>반응형 작업 경험이 다수 있습니다.</li>
              <li>다양한 브라우저, 디바이스 호환 작업 경험이 있습니다.</li>
              <li>Sass와 같은 CSS Preprocessor를 사용할 수 있습니다.</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>JavaScript</h3>
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <li>ES6 이상 문법을 적극적으로 사용합니다.</li>
              <li>Vanilla JS 를 이용해 DOM 을 조작할 수 있습니다.</li>
              <li>응집도와 단일책임을 고려하며 작업하려 노력합니다.</li>
              <li>생성자 함수를 이용한 모듈 개발 경험이 있습니다.</li>
              <li>Polyfill을 이용해 구형 브라우저를 지원한 경험이 있습니다.</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Vue.js</h3>
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <li>기존 컴포넌트 기능 추가 및 리팩토링 경험이 있습니다.</li>
              <li>slot을 이용한 신규 컴포넌트 작업 경험이 있습니다.</li>
              <li>Vuex Store 사용 경험이 있습니다.</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Etc</h3>
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <li>VS Code 단축키와 스니펫을 이용하여 효율적으로 개발하는 것을 좋아합니다.</li>
              <li>Git을 사용한 워크플로우에 익숙하며, 히스토리 파악에 용이하도록 커밋 내용을 작성하려고 노력합니다.</li>
              <li>Adobe Experience Manager(AEM) 기반의 웹사이트 운영 경험이 있습니다.</li>
              <li>Zeplin을 이용한 협업 경험이 있습니다.</li>
              <li>Google Tag Manage 커스텀 태그 작업 경험이 있습니다.</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section study">
        <div class="section-top">
          <h2>Personal Project<span class="dot-point">.</span></h2>
        </div>
        <div class="row">
          <div class="col col-title">
            <img src="./assets/images/oner-try-main.jpg" alt="">
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <h3><a href="https://onertry.fun/" target="_blank" title="새창">ONER TRY</a></h3>
              <li>게임 정보 제공 사이트</li>
              <li>
                프론트엔드(1명): 데이터 출력/입력, UI 개발 등<br>
                백엔드(1명): API 제공, 크롤링, DB 관리 등
              </li>
              <li>SEO / GA 데이터 분석을 위해 Nuxt.js 사용</li>
              <li>
                <strong>주요 기능</strong>
                <ul class="list-bullet hyphen">
                  <li>[공통] 검색, 검색 순위, 자동 완성 기능 구현</li>
                  <li>[캐릭터] 보유 캐릭터별 장착 아이템</li>
                  <li>[조합법] 아이템 조합 트리, 필요 재료 총계, 상위 조합 아이템</li>
                  <li>[랭킹] infinite scroll</li>
                  <li>[아이템 도감] 선택 옵션에 따른 아이템 필터링, 선택 옵션 하이라이트</li>
                </ul>
              </li>
            </ul>
            <ul class="list-badge">
              <li class="badge"> Nuxt.js </li>
              <li class="badge"> Vue.js </li>
              <li class="badge"> Vuex </li>
              <li class="badge"> JavaScript </li>
              <li class="badge"> SCSS </li>
              <li class="badge"> Git </li>
              <li class="badge"> Netlify </li>
              <li class="badge"> Google Analytics </li>
              <li class="badge"> HTML/CSS </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section education">
        <div class="section-top">
          <h2>Education<span class="dot-point">.</span></h2>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>JavaScript/JQuery</h3>
            <p class="text-gray">2016.04 - 2016.06</p>
            <!-- <p>그린컴퓨터아카데미</p> -->
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <li>자바 스크립트의 개요 및 기본 문법(출력, 변수, 자료형, 입력, 배열, 형변화)</li>
              <li>제어문의 구조(조건문과 반복문)</li>
              <li>내장 함수, 사용자 정의 함수의 선언과 호출</li>
              <li>j-query 기초 문법 및 명령어</li>
              <li>j-query 플러그인의 종류와 적용 방법, j-query approach 플러그인</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>[NCS기반] 디지털 웹 디자인(웹퍼블리셔) </h3>
            <p class="text-gray">2015.06 - 2015.09</p>
            <!-- <p>그린컴퓨터아카데미</p> -->
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <li>그래픽 디자인</li>
              <li>html5, css3, scss, jquery</li>
              <li>웹표준 디자인 기획 및 모델설계, 제작</li>
              <li>포트폴리오 제작</li>
              <li>학업 성취 최우수로 졸업</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>상명대학교 사진영상미디어학과</h3>
            <p class="text-gray">2010.03 - 2014.02</p>
          </div>
          <div class="col">
            <ul class="list-bullet dot">
              <li>광고 사진 전공</li>
              <li>[자원봉사] 마음으로 보는 세상 - 시각장애우와 사진촬영 및 전시</li>
              <li>[인턴] 크래커 매거진 - 스트릿 패션 및 컨텐츠 촬영</li>
              <li>[인턴] BoLee 스튜디오 - 패션촬영 보조</li>
              <li>[인턴] 일산 킨텍스 마크리부 전시장 - 관람객 스튜디오 사진 촬영 및 안내</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import career from './data/career'
  export default {
    data() {
      return {
        career: {},
        isCompanyActive: false,
      }
    },
    computed: {

    },
    watch: {

    },
    created() {
      this.career = career
    },
    mounted() {
      // console.log(this.career)
    },
    beforeDestroy() {

    },
    methods: {
      scrollFixTitle(elems) {
        const crrScrT = Math.ceil(window.pageYOffset) + 30        
        for(const elem of elems) {
          const isOnScroll = elem.offsetTop < crrScrT
          const isOutScroll = elem.offsetTop + elems.offsetHeight < crrScrT
          if(isOnScroll && !isOutScroll) {
            elem.classList.add('active')
          } else {
            elem.classList.remove('active')
            elem.style = ''
          }
        }
      },
      returnPeriod(start, end) {
        const today = new Date()
        const endYear = end.length ? end[0] : today.getFullYear()
        const endMonth = end.length ? end[1] : today.getMonth()

        const calcYear = endYear - start[0]
        const calcMonth = endMonth - start[1] + 1

        const periodYear = calcMonth < 0 ? calcYear - 1 : calcYear
        const periodMonth = calcMonth < 0 ? 12 + calcMonth : calcMonth
        
        const checkYear = periodYear != 0 ? periodYear : periodYear
        return [checkYear, periodMonth]
      },
      returnPeriodText(start, end) {
        const period = this.returnPeriod(start, end)
        const year = period[0]
        const month = period[1]

        const yearText = year > 0 ? year + '년' : ''
        const monthText = month > 0 ? month + '개월' : ''

        return `${yearText} ${monthText}`
      },
      returnCareerPeriod() {
        let year = 0
        let month = 0

        for(const career of this.career) {
          const careerPeriod = career.period
          const period = this.returnPeriod(careerPeriod.start, careerPeriod.end)
          year += period[0]
          month += period[1]
        }

        year += Math.floor(month / 12)
        month = month % 12
        
        const yearText = year > 0 ? year + '년' : ''
        const monthText = month > 0 ? month + '개월' : ''
        
        return `${yearText} ${monthText}`
      },
    }
  }
</script>

<style lang="scss">
@import "./assets/style/reset";
@import "./assets/style/resume";
</style>