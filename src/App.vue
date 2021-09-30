<template>
  <div>
    <div class="bar-point"></div>
    <div class="container">
      <div class="container-top">
        <!-- <h1>프론트엔드 개발자로 도약을 꿈꾸는 <br>6년차 퍼블리셔, 정수진입니다.</h1> -->
        <h1>ABCDEF</h1>
        <p>
          크고 작은 규모의 다양한 웹사이트를 퍼블리싱하며 클린코드와 확장성에 대해 고민하고 있습니다.<br>
          웹표준, 웹접근성, 웹호환성 등 기본적인 퍼블리싱 업무를 시작으로<br>
          더 많은 기회를 만들어 작업 영역을 확장하며 JavaScript와 Vue.js에 대한 경험을 쌓았습니다.<br>
        </p>
        <p>
          사내 스터디에 참여하여 Vanilla JS 및 프레임 워크들을 학습하며,<br>
          실무에 Vanilla JS를 점진적으로 적용해보고, 토이 프로젝트들을 진행했습니다. <br>
          그렇게 현재 운영중인 Vue.js 프로젝트에 투입될 수 있었고,<br>
          프론트엔드 개발 영역까지 조금이나마 유지보수 및 개선 작업을 진행할 수 있었습니다.
        </p>
        <p>
          웹 에이전시는 다양한 경험을 할 수 있다는 것이 장점이지만,<br>
          자사 서비스가 아닌만큼 작업에 적극적으로 참여하는데 한계를 느꼈습니다.<br>
          더 나은 방향에 대해 고민하고 함께 의논하며 적극적으로 참여하며 비즈니스와 함께 성장하고 싶습니다.
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
              <li>Git/Github</li>
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
          <div>
            <h2>Career<span class="dot-point">.</span></h2>
            <p><span class="badge dark">총 {{ returnCareerPeriod() }}</span></p>
          </div>
        </div>
        <section 
          v-for="(exp, expIndex) in career"
          :key="`exp${expIndex}`"
          :class="['wrap-company']"
          ref="wrapCompany"
        >
          <div class="col col-title">
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
              <ul class="list-basic">
                <li
                  v-for="(desc, descIndex) in exp.descriptions"
                  :key="`companyDesc${descIndex}`"
                >
                  {{ desc }}
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
          <div class="wrap-projects">
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
                <ul class="list-basic">
                  <li
                    v-for="(prjDesc, prjDescIndex) in prj.descriptions"
                    :key="`prjDesc${prjIndex}-${prjDescIndex}`"
                  >
                    {{ prjDesc }}
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
      <section class="section education">
        <div class="section-top">
          <h2>Education<span class="dot-point">.</span></h2>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Javascript/JQuery</h3>
            <p class="text-gray">2016.04 - 2016.06</p>
            <!-- <p>그린컴퓨터아카데미</p> -->
          </div>
          <div class="col">
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
            <h3>[NCS기반] 디지털 웹 디자인(웹퍼블리셔) </h3>
            <p class="text-gray">2015.06 - 2015.09</p>
            <!-- <p>그린컴퓨터아카데미</p> -->
          </div>
          <div class="col">
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
            <h3>상명대학교 사진영상미디어학과</h3>
            <p class="text-gray">2010.03 - 2014.02</p>
          </div>
          <div class="col">
            <ul class="list-basic">
              <li>광고 사진 전공</li>
              <li>html5, css3, scss, jquery</li>
              <li>웹표준 디자인 기획 및 모델설계, 제작</li>
              <li>포트폴리오 제작</li>
              <li>학업성취최우수로 졸업</li>
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
      }
    }
  }
</script>

<style lang="scss">
@import "./assets/style/reset";
@import "./assets/style/resume";
</style>