<template>
  <div>
    <div class="bar-point"></div>
    <div class="container">
      <div class="container-top">
        <!-- <h1>6년의 퍼블리셔 경력으로 기초를 다진, </h1> -->
        <h1>7년차 웹퍼블리셔<br>
          프론트엔드 개발자로
        </h1>
        <p>
          크고 작은 규모의 다양한 웹사이트를 퍼블리싱 하며 코드 가독성과 확장성, 유지보수성에 대해 항상 고민해왔습니다.<br>
          웹 표준, 웹 접근성, 웹 호환성 등 주어진 퍼블리싱 업무에서 나아가<br>
          더 많은 기회를 만들어 작업 영역을 확장해가면서 JS에 대한 경험을 쌓고자 노력하였습니다.<br>
        </p>
        <p>
          팀 내 스터디에 참여하여 Vanilla JS, 프레임 워크, 라이브러리들을 익히면서 토이 프로젝트로 차근차근 흡수하고 있습니다.<br>
          그렇게 현재 운영 중인 Vue.js 프로젝트에 투입되어 기능 구현 위주의 업무를 맡을 수 있었고<br>
          기존 소스들을 파악해가면서 프론트엔드 개발 영역까지 조금씩 경험하고 있습니다.
        </p>
        <p>
          다양한 프로젝트를 맡으며 성장과 재미를 느껴왔지만<br>
          대기업 사이트 운영 위주로 익숙해진 업무와 수직적인 워크플로우로 적극적인 참여에 한계를 느꼈습니다.<br>
          
          계속 공부만 하다보니 금방 날아가고. 공부는 지루하고. 완벽하게 흡수가되지 않는다. 
          일단 주어진 업무는 끝까지 물고 늘어져서 어떻게든 해내려고 노력하고 그 과정이 너무 신나기 때문에, 직접 부딪치면서 일하고 싶다. 
          새로운 도전과제를 직면했을때 에너지가 분출되고 어떻게든 해내려고 하기 때문에 그러한 과정들을 통해 크게 성장해왔다고 생각한다.
          내가 진짜 흥미가 가는 서비스, 키워보고 싶은 서비스를 운영하는 회사에 들어가서 고난과 역경을 헤쳐나가며 빛나는 미래를 꿈꾸며 개발하고 싶다.

          이제 한 단계 나아가 프론트엔드 개발자로서 비즈니스에 깊게 뛰어들어 함께 성장하고자 합니다.

          도전적인 업무.시너지.추진력
        </p>
        <dl>
          <dt>github</dt>
          <dd><a href="https://github.com/sssjsjj" target="_blank" title="새창">https://github.com/sssjsjj</a></dd>
          <dt>blog</dt>
          <dd><a href="https://dribbles.tistory.com/" target="_blank" title="새창">https://dribbles.tistory.com/</a></dd>
        </dl>
      </div>
      <section class="section">
        <div class="section-top">
          <h2>Skills<span class="dot-point"><span class="dot-point">.</span></span></h2>
          <ul class="list-col-right">
            <li><small><span class="badge bg-main light-2">1</span>학습 경험</small></li>
            <li><small><span class="badge bg-main light-1">2</span>유지보수 가능 수준 </small></li>
            <li><small><span class="badge bg-main">3</span>Production 개발 가능 수준</small></li>
          </ul>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Front-end</h3>
          </div>
          <div class="col">
            <ul class="list-badge list-col-4">
              <li><span class="badge bg-main">3</span> HTML/CSS</li>
              <li><span class="badge bg-main">3</span> JavaScript</li>
              <li><span class="badge bg-main">3</span> Jqeury</li>
              <li><span class="badge bg-main">3</span> SCSS</li>
              <li><span class="badge bg-main light-1">2</span> Vue.js</li>
              <li><span class="badge bg-main light-1">2</span> WAI-ARIA</li>
              <li><span class="badge bg-main light-2">1</span> React.js</li>
              <li><span class="badge bg-main light-2">1</span> Angular.js</li>
              <!-- <li><span class="badge bg-main light-2">1</span> Node.js</li> -->
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Etc</h3>
          </div>
          <div class="col">
            <ul class="list-dot list-col-4">
              <li>VS Code</li>
              <li>Git/Github</li>
              <li>AEM</li>
              <li>SVN</li>
              <!-- <li>Jira</li> -->
              <li>Jenkins</li>
              <li>Zeplin</li>
              <li>GA/GTM</li>
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
              <ul class="list-dot">
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
                <ul class="list-dot">
                  <li
                    v-for="(prjDesc, prjDescIndex) in prj.descriptions"
                    :key="`prjDesc${prjIndex}-${prjDescIndex}`"
                    v-html="prjDesc"
                  >
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
      <section class="section study">
        <div class="section-top">
          <h2>Study<span class="dot-point">.</span></h2>
        </div>
        <div class="row">
          <div class="col col-title">
            <h3>Javascript/JQuery</h3>
            <p class="text-gray">2016.04 - 2016.06</p>
            <!-- <p>그린컴퓨터아카데미</p> -->
          </div>
          <div class="col">
            <ul class="list-dot">
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
            <ul class="list-dot">
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
            <ul class="list-dot">
              <li>광고 사진 전공</li>
              <li>html5, css3, scss, jquery</li>
              <li>웹표준 디자인 기획 및 모델설계, 제작</li>
              <li>포트폴리오 제작</li>
              <li>학업성취최우수로 졸업</li>
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
            <h3>Javascript/JQuery</h3>
            <p class="text-gray">2016.04 - 2016.06</p>
            <!-- <p>그린컴퓨터아카데미</p> -->
          </div>
          <div class="col">
            <ul class="list-dot">
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
            <ul class="list-dot">
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
            <ul class="list-dot">
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
      },
    }
  }
</script>

<style lang="scss">
@import "./assets/style/reset";
@import "./assets/style/resume";
</style>