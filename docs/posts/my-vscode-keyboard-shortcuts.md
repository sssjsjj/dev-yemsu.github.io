적절한 단축키 사용은 효율 상승은 물론이고 휴먼 에러도 줄여준다. 
초반에 적응을 위한 노력이 필요하지만, 익숙해지면 개발이 훨씬 즐거워진다. 나의 개발 생활을 한 층 윤택하게 해준 단축키들을 정리해보았다.

- **Default**: VScode 기본 단축키
- **User**: 내가 지정한 단축키

---

### Users Shortcuts

VS Code에 default 단축키 설정이 되어있지 않아 유저가 직접 단축키를 설정해야하는 커맨드들이다. 

#### 선택 영역 태그로 감싸기

영역 선택 후 해당 커맨드 실행하면 상단에 태그 입력창이 노출된다. 원하는 태그 입력 후 엔터를 누르면 해당 태그로 선택 영역이 감싸진다.

<code>Emmet : Wrap with Abbreviation - [docs](https://docs.emmet.io/</code>actions/wrap-with-abbreviation/)
```
Default   :   null
User      :   Ctrl + Shift + A
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/emmet-wrap-with-abbreviation.gif" alt="VS Code - cursorColumnSelectDown 단축키 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여  선택 영역을 <code>span.text</code>로 감쌌다.</figcaption>
</figure>

#### 태그 제거

 <code>Emmet: Remove Tag</code>

```
Default :  null
User    :  Ctrl + Shift + K
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/emmet-remove-tag.gif" alt="VS Code - Emmet Remove Tag 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 <code>span</code>태그를 일괄 제거 하였다.</figcaption>
</figure>

#### 짝꿍 태그로 이동

 <code>Emmet: Go to Matching Pair</code>

```
Default :  null
User    :  Ctrl + Shift + T
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/emmet-go-to-matching-pair.gif" alt="VS Code - emmet go to matching pair 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 <code>ul</code>끝 태그에서 시작태그로 커서를 이동하였다.</figcaption>
</figure>

#### 태그 내부 선택

누를수록 선택 영역 확장

 <code>Emmet: Balance (outward)</code>

```
Default :  null
User    :  Ctrl + Alt + A
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/emmet-balance-outward.gif" alt="VS Code - emmet balance (outward) 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 태그 내부를 선택 하였다. 여러번 사용할수록 선택 범위가 넓어진다.</figcaption>
</figure>

#### 여러줄을 한줄로 병합

 <code>Emmet: Merge Lines</code>

```
Default :  null
User    :  Ctrl + Alt + E
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/emmet-merge-lines.gif" alt="VS Code - emmet merge lines 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 <code>li</code>태그를 한줄로 변경하였다.</figcaption>
</figure>

#### 이전/다음 편집점으로 이동

편집점은 따옴표 사이, 태그 내부 등이 비어있는 곳을 말한다.

 <code>Emmet: Go to Next Edit Point / Go to Previous Edit Point</code>

``` 
Default :  null
User    :  Ctrl + .  /  Ctrl + ,
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/emmet-go-to-edit-point.gif" alt="VS Code - emmet go to next/previous edit point 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 편집 지점으로 이동하였다.</figcaption>
</figure>

---

### vscode-input-sequence ([extension](https://marketplace.visualstudio.com/items?itemName=tomoki1207.vscode-input-sequence))

#### 연속된 숫자 자동 입력

정말 유용하게 잘 쓰고 있는 키보드이다. 특히 스크립트 분석 할때, 어디가 실행된건지 어디가 문제인지 찾고 싶을때, 특정 함수명 일괄 선택 후 하단에 <code>console.log()</code> 삽입해서 괄호에 연속된 숫자 입력하고 콘솔창에 찍힌 숫자를 확인하면 된다.

 <code>Insert Sequential number </code>

```
User    :  Ctrl + Alt + 0
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/insert-sequential-number.gif" alt="VS Code - Insert Sequential number 사용 예시">
  <figcaption>숫자를 입력될 위치에 커서를 두고, 단축키로 커맨드를 실행하면 숫자 입력 창이 뜬다. <br>입력 창에 숫자를 입력하면 연속된 숫자가 자동으로 입력된다.</figcaption>
</figure>

---

### Quick Select ([extension](https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-quick-select))

따옴표 및 괄호 내부를 선택 커맨드를 제공한다.

#### 따옴표 내부 선택

두번 실행하면 따옴표까지 선택한다.

 <code>Quick Select : Select inside either quote</code>

```
Default :  Ctrl + K ;
User    :  Ctrl + Shift + '
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/quick-select-inside-either-quote.gif" alt="VS Code - Quick Select -  Select inside either quote 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 따옴표 내부에 있는 이미지 src 값을 선택 후, 새로운 경로를 붙여넣었다.</figcaption>
</figure>

#### 괄호 내부 선택

두번 실행하면 괄호까지 선택한다.

 <code>Quick Select : Select inside parenthesis</code>

```
Default :  Ctrl + K Shift + 9
User    :  Ctrl + Shift + 9
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/quick-select-select-inside-parenthesis.gif" alt="VS Code - Quick Select - Select inside parenthesis 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 괄호 내부를 선택 후, 값을 수정하였다.</figcaption>
</figure>

#### 대괄호 내부 선택

두번 실행하면 대괄호까지 선택한다.

 <code>Quick Select : Select inside square brackets</code>

```
Default :  Ctrl + K [
User    :  Ctrl + Shift + [
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/quick-select-select-inside-square-brackets.gif" alt="VS Code - Quick Select - Select inside square brackets 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 대괄호 내부를 선택 후, 값을 수정하였다.</figcaption>
</figure>

#### 중괄호 내부 선택

두번 실행하면 중괄호까지 선택한다.

 <code>Quick Select : Select inside curly brackets</code>

```
Default :  Ctrl + K Shift + [
User    :  Ctrl + Alt + [
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/quick-select-select-inside-curly-brackets.gif" alt="VS Code - Quick Select - Select inside curly brackets 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 중괄호 내부를 선택 후, 값을 수정하였다.</figcaption>
</figure>

---

---

### View

작업 창과 관련된 단축키이다.

#### 창 분할

 <code>View : Split Editor</code>

```
Default :  Ctrl + \
```

#### 분할 창 사이즈 리셋

 <code>View : Reset Editor Group Sizes</code>

```
Default :  null
User    :  Ctrl + Alt + \
```

#### 활성 창 사이즈 늘리기 토글

 <code>View : Toggle Editor Group Sizes </code>

```
Default :  null
User    :  Ctrl + Alt + ]
```


#### 모든 창 닫기

 <code>View : Close All Editors </code>

```
Default :  Ctrl + K W
```

### Default Shortcuts

VS Code에 기본으로 설정되어있는 단축키이다.

#### 하단 라인에 커서 추가

 <code>cursorColumnSelectDown</code>

```
Default :  Ctrl + Shift + Alt + DownArrow
User    :  Shift + Alt + DownArrow
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/cursor-column-select-down.gif" alt="VS Code - cursorColumnSelectDown 단축키 사용 예시">
  <figcaption>단축키를 실행하여 하단 라인에 커서 추가 후, 텍스트를 추가했다.</figcaption>
</figure>


#### 라인 가장 앞 / 끝으로 커서 이동

<code>VS Code</code>의 <code>word wrap</code>설정이 <code>on</code>으로 되어있는 경우 긴 라인은 자동으로 줄이 바뀌어 보이는데, 이때 <code>Go Forward</code>를 한번만 실행하면 보이는 라인의 끝으로 이동하고, 한번 더 실행해야 실제 라인의 끝으로 커서가 이동한다. 반대도 마찬가지이다.

 <code>Go Back / Go Forward</code>

```
Default :  Alt + LeftArrow / RightArrow
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/go-back-go-forward.gif" alt="VS Code - Copy Line Down 단축키 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 동일한 내용의 리스트를 2개 추가하였다.</figcaption>
</figure>

#### 커서 위치 하단에 공백 라인 추가

 <code>Insert Line Below</code>

```
Default :  Ctrl + Enter
```

#### 현재 라인 복사하여 하단에 추가

 <code>Copy Line Down</code>

```
Default :  Shift + Alt + DownArrow
User    :  Ctrl + D
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/copy-line-down.gif" alt="VS Code - Copy Line Down 단축키 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 동일한 내용의 리스트를 2개 추가하였다.</figcaption>
</figure>

#### 코드 모두 접기 / 펼치기

 <code>Fold / Unfold All</code>

```
Default :  Ctrl + K Ctrl + 0 / Ctrl + K Ctrl + J
User    :  Alt + 1 / Alt + Ctrl + 1
```


#### 선택한 부분만 코드 접기 / 펼치기

 <code>Fold / Unfold Recursively</code>

```
Default :  Ctrl + K  Ctrl + [ / Ctrl + K  Ctrl + ]
```

#### 파일 언어 설정

잠깐 빈 창에 소스 붙여놓고 확인할 때 유용하다.

 <code>Change Language Mode </code>

```
Default :  Ctrl + K M
User    :  Ctrl + Alt + Q
```


#### 선택된 내용과 동일한 내용 모두 선택

 <code>Search Editor: Select All Matches </code>

```
Default :  Ctrl + Shift + L
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/search-editor-select-all-matches.gif" alt="VS Code - Emmet Remove Tag 단축키를 이용하여 '텍스트'와 동일한 내용을 한번에 선택하였다.">
  <figcaption>단축키로 커맨드를 실행하여 '텍스트'와 동일한 내용을 한번에 선택하였다.<br> <code>Replace</code>기능과 용도 차이를 보여주기 위해 뒤쪽에 <code>sequence number</code>도 삽입해보았다.</figcaption>
</figure>


#### 선택한 내용과 같은 내용 추가 선택

 <code>Add Selection To Insert Find Match </code>

```
Default :  Ctrl + D
User    :  Ctrl + Shift + C
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/add-selection-to-insert-find-match.gif" alt="VS Code - Add Selection To Insert Find Match 사용 예시">
  <figcaption>텍스트를 선택 후 단축키로 커맨드를 실행하여 같은 텍스트를 한개씩 추가 선택하여 수정하였다.</figcaption>
</figure>

#### 괄호(소,중,대) 짝꿍에게 커서 이동

 <code>Go to Bracket </code>

```
Default :  Ctrl + D
User    :  Ctrl + Shift + C
```

<figure>
  <img src="/posts/images/my-vscode-keyboard-shortcuts/go-to-bracket.gif" alt="VS Code - Go to Bracket 사용 예시">
  <figcaption>단축키로 커맨드를 실행하여 괄호의 시작과 끝을 이동하였다.</figcaption>
</figure>

----------------------

### 번외: 브라우저 단축키

#### 브라우저 캐시 삭제

<code>Ctrl + Shift + L</code>

#### 시크릿 모드

<code>Ctrl + Shift + N</code>

#### 개발자 도구 - 조사할 엘리먼트 선택

<code>Ctrl + Shift + C</code>

#### 방금 종료한 창 다시 열기

<code>Ctrl + Shift + T</code>
