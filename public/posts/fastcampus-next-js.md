왜 Next.js 인가.

프론트엔드 개발자들이 가진 고민에 대한 적절한 해결책을 제공한다.
- 규모가 있는 서비스 구조 설계를 어떻게 할 것인가?
- 개발환경 / 코드 분할 / 파일 기반 구조
- SEO
- 프론트엔드에 필요한 간단한 API 구성
- 손쉬운 배포 시스템 Vercel (Vercel에서 만듬)

대체재로는 Gatsby/Remix 등이 있음.



## CSR, SSR, SSG, ISR
- CSR : useState
- SSR : getServerSideProps
- SSG : getStaticProps, getStaticPaths(page path 까지 외부 데이터에 의존하는 경우)
- ISR : getStaticProps (with revalidate)

## Nuxt.js는 모든 페이지를 기본적으로 pre-render한다
JS 제외한 기본적인 UI를 pre-render한다.

Nuxt.js는 SSG, SSR을 이용하여 pre-render하고 SSG를 더 추천한다.

## Image 컴포넌트
lazyload 기본 제공,
load 전에 blur 형태 제공
빠른 로드
화면 사이즈에 맞는 이미지가 로드됨.


### 생각할것
- 폴더구조
- prettier
