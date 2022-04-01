작업하다보면 다른 브랜치끼리 소스가 어떻게 다른지 확인하고 싶을때가 있다.  

### Gitlens 설치
혹시 [Gitlens 확장프로그램](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)이 깔려있지 않다면 먼저 설치한다.
<figure>
  <img src="/posts/images/compare-two-git-branches-vscode/gitlens-compare-branch-step0.jpg" alt="vscode의 확장프로그램 탭에서 gitlens를 검색한 화면">
  <figcaption>vscode의 확장프로그램 탭에서 gitlens를 검색 후 설치한다</figcaption>
</figure>

### 메뉴 선택
<ol>
  <li>좌측에 깃렌즈 아이콘 탭 클릭</li>
  <li><strong>SEARCH & COMPARE</strong> 탭 클릭</li>
  <li><strong>Compare References..</strong>. 버튼 클릭</li>
</ol>
<figure>
  <img src="/posts/images/compare-two-git-branches-vscode/gitlens-compare-branch-step1.jpg" alt="좌측 깃렌즈 아이콘 탭 클릭 후 SEARCH &amp; COMPARE 탭 클릭해서 나오는 Compare Reference 버튼 클릭하여 브랜치 비교를 시작한다.">
  <figcaption>브랜치 비교 메뉴 선택 화면</figcaption>
</figure>

### 비교 브랜치 선택
<ol>
  <li>브랜치 선택 창이 상단 가운데 뜨면 <strong>비교브랜치1</strong> 선택</li>
  <li>브랜치 선택 창이 한번 더 뜨면 <strong>비교브랜치2</strong> 선택</li>
</ol>
<figure>
  <img src="/posts/images/compare-two-git-branches-vscode/gitlens-compare-branch-step2.jpg" alt="vscode의 확장프로그램 탭에서 gitlens를 검색한 화면">
  <figcaption>브랜치 선택창이 떠있는 VScode</figcaption>
</figure>

### 비교 확인
<strong>SEARCH & COMPARE</strong> 탭에서 원하는 파일 찾아 확인 가능하다.
<figure>
  <img src="/posts/images/compare-two-git-branches-vscode/gitlens-compare-branch-step3.jpg" alt="선택한 두 브랜치를 비교한 Gitlens 결과 화면">
  <figcaption><code>develop</code>과 <code>develop_release</code>, 두 브랜치의 변경된 내용이 리스트로 노출되고 있다.</figcaption>
</figure>