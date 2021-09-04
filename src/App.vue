<template>
  <div>
    <div class="bar-point"></div>
    <div class="container">
      <div class="container-top">
        <!-- <h1>프론트엔드 개발자로 도약을 꿈꾸는 <br>6년차 퍼블리셔, 정수진입니다.</h1> -->
        <h1>ABCDEF</h1>
        <p>
          웹 에이전시는 다양한 경험을 할 수 있다는 것이 큰 장점이지만,<br>
          자사 서비스가 아닌만큼 작업에 적극적으로 참여하기엔 한계가 있다고 느꼈습니다.<br>
          작업에 애정을 가지고 적극적으로 보완, 개선에 대한 의견을 내며 능동적으로 일하고 싶습니다.
        </p>
        <p>
          회사 내부 스터디에 참여하며 Vanilla JS 및 프레임 워크들을 살펴보았습니다.<br>
          실무에서 Vanilla JS를 적용해 보기도 하고, 토이 프로젝트들을 진행해보면서 지식을 쌓을 수 있었습니다. <br>
          그렇게 현재 운영중인 Vue.js 프로젝트에 투입될 수 있었고,<br>
          프론트엔드 개발 영역까지 조금이나마 유지보수 및 개선 작업을 진행할 수 있었습니다.
        </p>
        <p>
          크고 작은 규모의 다양한 웹사이트 작업 경험이 있습니다.<br>
          <!-- 소형 사이트 구축을 하며  -->
          대형 사이트 운영을 하면서 클린코드와 지속적인 리팩토링의 중요성을 느끼고,<br>
          정확한 커뮤니케이션이 업무 효율에 미치는 영향도 느낄 수 있었습니다. <br><br>

          더 나은 유지보수를 위해,<br>
          <!-- 전체적인 가이드를 고려하며 차곡차곡 소스를 쌓아  -->
          재사용이 가능하도록 작업하는 것을 중요하게 생각합니다.<br>
          부끄럽지 않은 코드를 작성하기위해 고민하고 노력합니다.<br><br>
          
          주어진 업무를 수동적으로 진행하기보다, 능동적으로 고민하고 제안하며 작업할 때 활력을 얻습니다.<br><br>

          낯선 작업을 탐색하고, 시도해보는 과정에 재미를 느낍니다.
        </p>
        <dl>
          <dt>email</dt>
          <dd><a href="mailto:sssjsjj@gmail.com">sssjsjj@gmail.com</a></dd>
          <dt>phone</dt>
          <dd>010 6342 3621</dd>
          <dt>github</dt>
          <dd><a href="https://github.com/sssjsjj">https://github.com/sssjsjj</a></dd>
          <dt>blog</dt>
          <dd><a href="https://dribbles.tistory.com/">https://dribbles.tistory.com/</a></dd>
        </dl>
      </div>
      <section class="section">
        <div class="section-top">
          <h2>Skills<span class="dot-point"><span class="dot-point">.</span></span></h2>
          <ul class="list-col-right">
            <li><small><span class="badge bg-main light-2">1</span> : 기초 수준 </small></li>
            <li><small><span class="badge bg-main light-1">2</span> : 유지보수 가능 수준 </small></li>
            <li><small><span class="badge bg-main">3</span> : Production 개발 가능 수준</small></li>
          </ul>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Front-end</h3>
          </div>
          <div class="col">
            <ul class="list-badge list-col-4">
              <li><span class="badge bg-main">3</span> HTML/CSS</li>
              <li><span class="badge bg-main">3</span> Javascript</li>
              <li><span class="badge bg-main">3</span> Jqeury</li>
              <li><span class="badge bg-main">3</span> SCSS</li>
              <li><span class="badge bg-main light-1">2</span> Vue.js</li>
              <!-- <li><span class="badge bg-main light-2">1</span> React.js</li>
              <li><span class="badge bg-main light-2">1</span> Angular.js</li> -->
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Etc</h3>
          </div>
          <div class="col">
            <ul class="list-basic list-col-4">
              <li>VS Code</li>
              <li>Git / Github</li>
              <li>SVN</li>
              <li>Jira</li>
              <li>Jenkins</li>
              <li>Zeplin</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-top">
          <h2>career<span class="dot-point">.</span></h2>
          <p><span class="badge">{{ returnCareerPeriod() }}</span></p>
        </div>
        <section 
          v-for="(exp, expIndex) in career"
          :key="`exp${expIndex}`"
          :class="['wrap-company']"
          ref="wrapCompany"
        >
          <div class="col col-title">
            <h3>{{ exp.en }}</h3>
            <p class="text-big-1">{{ exp.period.start.join('.') }} ~ {{ exp.period.end.length > 0 ? exp.period.end.join('.') : '' }}</p>
            <p><span class="badge">
              {{ returnPeriodText(exp.period.start, exp.period.end) }}
            </span></p>
            <div class="col">
              <p>{{ exp.job }} | {{ exp.team }}</p>
              <ul class="list-basic">
                <li
                  v-for="(desc, descIndex) in exp.descriptions"
                  :key="`companyDesc${descIndex}`"
                >
                  {{ desc }}
                </li>
              </ul>
              <ul>
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
          <div class="wrap-projects">
            <div
              v-for="(prj, prjIndex) in exp.projects"
              :key="`project${expIndex}-${prjIndex}`"
              class="row"
            >
              <div class="col">
                <h3>{{ prj.title }}</h3>
                <p>
                  <a
                    v-for="(link, linkIndex) in prj.links"
                    :key="`link${prjIndex}-${linkIndex}`"
                    :href="link.url"
                    target="_blank"
                    title="새창"
                  >
                    {{ link.title }}
                  </a>
                </p>
                <p>
                  {{ prj.period.start.join('.') }} ~ {{ prj.period.end.join('.') }}
            
                  <span class="badge">{{ returnPeriodText(prj.period.start, prj.period.end) }}</span>
                </p>
                <p>
                  <span class="badge">{{ prj.members }}인</span> {{ prj.type }}
                </p>
                <ul class="list-basic">
                  <li
                    v-for="(prjDesc, prjDescIndex) in prj.descriptions"
                    :key="`prjDesc${prjIndex}-${prjDescIndex}`"
                  >
                    {{ prjDesc }}
                  </li>
                </ul>
                <ul>
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
          <h2>Education<span class="dot-point">.</span></h2>
        </div>
        <div class="row">
          <div class="col col-title">
            2016.04 ~ 2016.06
          </div>
          <div class="col">
            <h3>Javascript/JQuery</h3>
            <p>그린컴퓨터아카데미</p>
            <ul class="list-basic">
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
            2015.06 ~ 2015.09
          </div>
          <div class="col">
            <h3>[NCS기반] 디지털 웹 디자인(웹퍼블리셔) </h3>
            <p>그린컴퓨터아카데미</p>
            <ul class="list-basic">
              <li>그래픽 디자인</li>
              <li>html5, css3, scss, jquery</li>
              <li>웹표준 디자인 기획 및 모델설계, 제작</li>
              <li>포트폴리오 제작</li>
              <li>학업성취최우수로 졸업</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            2010.03 ~ 2014.02
          </div>
          <div class="col">
            <h3>상명대학교 사진영상미디어학과</h3>
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
      }
    }
  }
</script>

<style lang="scss">
@import "./assets/style/reset";
@import "./assets/style/resume";
</style>