Flutter를 세팅하고 Preview 화면이 뜨는 것까지 확인하는 과정.  
전반적으로 [Flutter 공식 문서](https://docs.flutter.dev/get-started/install/windows)와 [[Flutter]시작하기(윈도우) - velog](https://velog.io/@qkrtnfks128/Flutter%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0%EC%9C%88%EB%8F%84%EC%9A%B0)를 참고했다.

---


### 시스템 요구 사항

공식문서에 나와있는 시스템 요구 사항이다.

> - **운영 체제**: 윈도우7 SP1 이상 (64-bit)  
> - **저장 공간**: 400 MB (IDE나 개발 도구 용량은 별도).  
> - **도구**: Flutter는 윈도우 환경에서 아래 도구가 필요합니다.  
>     - Git for Windows 2.x, 설치하실 때, **Use Git from the Windows Command Prompt** 옵션을 설정해주세요.  
>     - 윈도우 파워셸 5.0 또는 그 이상 버전 (윈도우10에 내장되어 있음)  
>
> 윈도우용 Git이 이미 설치되어 있다면, git 명령을 명령 프롬프트나 파워셸에서 실행되는지 확인하세요.

### Flutter 다운로드
다운받으려고 보니까 버튼이 (failed)로 표시된다..?  클릭해도 반응이 없다.

<figure>
  <img src="/posts/images/flutter-get-started/i24g-230109-152455.png" alt="In the Flutter Korean document, the SDK download button is not working" />
  <figcaption>
    <a href="https://flutter-ko.dev/docs/get-started/install/windows">flutter 한국 공식 문서</a> Flutter SDK 다운로드 버튼에 에러가 있다.
  </figcaption>
</figure>

> 🗨 한국 공식문서는 최근 운영되지 않고 있는 것으로 확인되어 영문 가이드를 보면서 진행했다.


영문 공식 문서에는 정상적으로 뜨고 있다. 다운로드가 잘 된다.

<figure>
  <img src="/posts/images/flutter-get-started/i29g-230109-152949.png" alt="flutter 영문 공식 문서 일부">
  <figcaption><a href="https://docs.flutter.dev/get-started/install/windows">영문 공식 문서</a> Flutter SDK 다운로드 버튼이 잘 노출되고 있다.</figcaption>
</figure>



압축을 푼다. 용량이 꽤 크다. 6분 정도 걸렸다.
압축 해제가 완료되면 flutter 폴더를 원하는 위치에 두면 된다.

<figure>
  <img src="/posts/images/flutter-get-started/i32g-230109-153237.png" alt="압축 푸는 중 - 6%">
  <figcaption>압축 푸는 중</figcaption>
</figure>


### Flutter Window 환경 변수 설정
환경 변수를 설정하여 일반 윈도우 콘솔에서 Flutter 명령을 실행할 수 있게 된다.  

path 환경변수 설정은 구글링해서 상단에 있는 결과 페이지를 확인했다.

- [윈도우(Windows) 환경변수 PATH 설정하는 방법](https://aitconomy.tistory.com/210)

**고급 시스템 설정 보기 > 고급 탭 > 환경 변수 > 시스템 변수 > Path 더블클릭**하여 환경 변수 편집 창을 띄운다. 공식 문서에 나와있는대로 bin폴더까지 지정해서 <code>flutter/bin</code>을 환경 변수에 추가해줬다.  
실행파일이 있는 폴더를 지정해줘야 한다는데 flutter의 실행파일은 bin 폴더에 있나보다.

<figure>
  <img src="/posts/images/flutter-get-started/i13g-230110-161334.png" alt="flutter/bin 환경 변수 설정 과정">
  <figcaption>flutter/bin 환경 변수 설정</figcaption>
</figure>

환경 변수 설정이 잘 되었는지 확인하기 위해 CMD 창을 켜서 <code>flutter</code>를 입력했다.

```
C:\Users\user>flutter
```

이것저것 커맨드에 대한 정보들이 떴다. 우선 환경 변수 설정이 잘 된 것만 확인하고 넘어간다.

<figure>
  <img src="/posts/images/flutter-get-started/i41g-230110-144140.png" alt="CMD에 flutter 커맨드 입력 결과">
  <figcaption>CMD에 flutter 커맨드를 입력하니 flutter와 관련된 commands들이 쫘락 나온다.</figcaption>
</figure>

### Flutter doctor

그 다음은 Flutter 개발에 필요한 환경설정이나 다른 프로그램들이 잘 설치되어 있는지 확인하기 위해 <code>Flutter doctor</code>를 실행한다. 어느 경로에서나 실행해도 된다.

```
D:\_utils\flutter_windows_3.3.10-stable\flutter>flutter doctor
```

플러터 닥터께서 진단을 내려주셨다.

나는 안드로이드 툴체인, 비쥬얼 스튜디오, 안드로이드 스튜디오를 설치해야 한다고 진단이 나왔다.
```
Doctor summary (to see all details, run flutter doctor -v):
[√] Flutter (Channel stable, 3.3.10, on Microsoft Windows [Version 10.0.19044.2364], locale ko-KR)
[X] Android toolchain - develop for Android devices
    X Unable to locate Android SDK.
      Install Android Studio from: https://developer.android.com/studio/index.html
      On first launch it will assist you in installing the Android SDK components.
      (or visit https://flutter.dev/docs/get-started/install/windows#android-setup for detailed instructions).
      If the Android SDK has been installed to a custom location, please use
      `flutter config --android-sdk` to update to that location.

[√] Chrome - develop for the web
[X] Visual Studio - develop for Windows
    X Visual Studio not installed; this is necessary for Windows development.
      Download at https://visualstudio.microsoft.com/downloads/.
      Please install the "Desktop development with C++" workload, including all of its default components
[!] Android Studio (not installed)
[√] VS Code (version 1.74.2)
[√] Connected device (3 available)
[√] HTTP Host Availability
```


### Android Studio 설치

[Android Studio](https://developer.android.com/studio) 부터 설치한다.

설치하고 세팅창이 처음에 뜨는데 모르니까.. 가장 일반적인 default 세팅으로 쭉쭉 다음으로 넘어갔다.

<figure>
  <img src="/posts/images/flutter-get-started/i49g-230109-174946.png" alt="Android Studio Setup Wizard - Install Type">
  <figcaption>기본 선택인 Standard</figcaption>
</figure>

마지막 단계에서는 각 라이센스 Accept 해주고 Finish 버튼을 눌렀다.

<figure>
  <img src="/posts/images/flutter-get-started/i50g-230109-175050.png" alt="Android Studio Setup Wizard - License Agreement">
  <figcaption>상위 항목만 Accept 해주면 하위 항목들은 일괄 처리된다.</figcaption>
</figure>

설치주르릉

<figure>
  <img src="/posts/images/flutter-get-started/i51g-230109-175137.png" alt="Android Studio Setup Wizard - Downloading Components - Start download">
  <figcaption>설치주르릉</figcaption>
</figure>


<figure>
  <img src="/posts/images/flutter-get-started/i54g-230109-175408.png" alt="Android Studio Setup Wizard - Downloading Components - finish download">
  <figcaption>Finish!</figcaption>
</figure>

<figure>
  <img src="/posts/images/flutter-get-started/i54g-230109-175446.png" alt="Android Studio First View">
  <figcaption>예이!</figcaption>
</figure>



### 다시 flutter doctor

안드로이드 스튜디오를 깔았으니까 다시 <code>flutter doctor</code>로 확인해본다. Android toolchain 쪽이 X에서 !로 바뀌었다. 안드로이드 라이센스가 수락되지 않았다고 떴다.

```
Doctor summary (to see all details, run flutter doctor -v):
[√] Flutter (Channel stable, 3.3.10, on Microsoft Windows [Version 10.0.19044.2364], locale ko-KR)
[!] Android toolchain - develop for Android devices (Android SDK version 33.0.1)
    ! Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses
[√] Chrome - develop for the web
[X] Visual Studio - develop for Windows
    X Visual Studio not installed; this is necessary for Windows development.
      Download at https://visualstudio.microsoft.com/downloads/.
      Please install the "Desktop development with C++" workload, including all of its default components
[√] Android Studio (version 2021.3)
[√] VS Code (version 1.74.2)
[√] Connected device (3 available)
[√] HTTP Host Availability

! Doctor found issues in 2 categories.
```

라이센스 수락을 위해 위에서 알려준 커맨드 실행

```
flutter doctor --android-licenses
```

하얀 글자들이 쭈르르르륵 뜨고 나는 y 엔터를 갈겼다 ㅎ. 이렇게 라이센스 수락도 무사히 끝났다.

<figure>
  <img src="/posts/images/flutter-get-started/i13g-230110-141355.png" alt="CMD에 뜬 android 라이센스에 대한 내용">
  <figcaption>예. 예. 예. 예.</figcaption>
</figure>

다시 <code>flutter doctor</code>. Android toolchain 항목이 체크로 바뀌었다! 하지만 Visual Studio가 남았다.  

<figure>
  <img src="/posts/images/flutter-get-started/i17g-230110-141755.png" alt="flutter doctor 진단 결과 화면">
  <figcaption>알겠습니다.</figcaption>
</figure>

### Visual Studio 다운로드

[닥터가 알려준 Visual Studio 다운로드 페이지](https://visualstudio.microsoft.com/downloads/)로 접속해서 시키는대로 다운로드 해보자.

학생인 나는 커뮤니티 버전을 다운로드 받는다.^^

<figure>
  <img src="/posts/images/flutter-get-started/i36g-230110-143616.png" alt="Visual Studio 2022 다운로드 페이지">
  <figcaption>열심히 배우면 다 학생아닌가요?</figcaption>
</figure>

다운 후 실행하면, 아래같이 창이 뜬다. 그렇지.. C++ 버전을 설치하라고 했지.. 

<figure>
  <img src="/posts/images/flutter-get-started/i51g-230110-145154.png" alt="Visual Studio Community 2022 워크로드 선택 화면">
  <figcaption>C++ 선택</figcaption>
</figure>

설치 완료 후 다시 선생님을 불렀다. 모두 준비 완료 되었다!

<figure>
  <img src="/posts/images/flutter-get-started/i56g-230110-145610.png" alt="flutter doctor 진단 결과 모두 통과">
  <figcaption>고생하셨습니다!</figcaption>
</figure>


### Android Studio 세팅

**Plugins > Flutter**를 설치해 준다.

<figure>
  <img src="/posts/images/flutter-get-started/i57g-230110-165700.png" alt="Android Studio Plugins list">
  <figcaption>Flutter 플러그인 설치</figcaption>
</figure>

**Projects > More Actions > SDK Manager**를 클릭

<figure>
  <img src="/posts/images/flutter-get-started/i58g-230110-165830.png" alt="click more actions dropdown on Android Studio Projects Menu">
</figure>

**Android SDK Command-line Tools (lates)** 체크 후 **Apply**

<figure>
  <img src="/posts/images/flutter-get-started/i1g-230110-170141.png" alt="Android Studio SDK Manager Menu">
</figure>

설정 변경하려면 무언가 추가 설치 되어야 한다고 하니 OK

<figure>
  <img src="/posts/images/flutter-get-started/i2g-230110-170207.png" alt="Android Studio Confirm Change popup">
</figure>

안드로이드 스튜디오 세팅 완료!

### 프로젝트 생성

**Projects > New Flutter Project** 클릭

<figure>
  <img src="/posts/images/flutter-get-started/i55g-230110-175530.png" alt="">
</figure>

Flutter SDK 경로 지정해준다.

<figure>
  <img src="/posts/images/flutter-get-started/i4g-230110-170428.png" alt="">
</figure>

Flutter 왕초보인 나는 우선 기본 옵션들은 냅두고 프로젝트 이름, 위치, 설명에 대한것만 작성했다. Finish

<figure>
  <img src="/posts/images/flutter-get-started/i5g-230110-170547.png" alt="">
</figure>

상단 드롭다운 메뉴에서 브라우저를 선택하고 실행 버튼을 누르면

<figure>
  <img src="/posts/images/flutter-get-started/i9g-230110-170953.png" alt="">
</figure>

> 혹시 브라우저 선택 드롭다운이 떠있지 않다면, Android Studio 오픈 경로 확인이 필요하다.

> 처음에 상위 폴더 기준으로 오픈되어 있어서 프리뷰 기능이 되지 않았다.

짝짝짝. 프리뷰 페이지가 뜬다!

<figure>
  <img src="/posts/images/flutter-get-started/i10g-230110-171034.png" alt="flutter 최초 프리뷰 페이지">
  <figcaption>크</figcaption>
</figure>

---

### 별첨: 처음 해본 Issue 제보

나는 문득 한국 공식 문서에 문제가 있는걸 알려줘야겠다는 생각이 들어서, 버그 제보로 보이는 벌레 아이콘을 눌렀다.

<figure>
  <img src="/posts/images/flutter-get-started/i7g-230110-100738.png" alt="flutter 공식 문서 버그 제보 버튼">
  <figcaption>우측 상단에 버그 제보 벌레 아이콘!</figcaption>
</figure>

github issue 작성 페이지로 넘어갔다. 타이틀과 페이지에 대한 기본적인 정보들은 자동으로 작성되어있다. 
<figure>
  <img src="/posts/images/flutter-get-started/i10g-230110-101033.png" alt="flutter website github issue 작성 페이지">
  <figcaption>Page URL, Source 경로 자동으로 작성된거 멋지다</figcaption>
</figure>

아 처음에 작성란 우측에 첫 이슈 생성이라면서 팝업이 떴었는데, [기여에 대한 가이드](https://github.com/flutter/website/blob/edbd5c1cfc55e3fd8c9e5d33c188f4faeafdbe61/CONTRIBUTING.md)가 있어서 한번 살짝 읽어봤다.
기여할 수 있는 방법에 대해 나와있고, 질문이 있는 경우엔 다른 페이지를 이용해 달라며 stack overflow로 연결됐다.

나는 우선 공식 페이지에서 벌레를 눌러 바로 작성페이지로 연결됐으니, 큰 문제는 없겠다고 판단했다.

떨리는 첫 이슈 작성 전 어느정도 참고를 위해 다른 사람들이 올린 이슈들을 확인해보았다.
page issue는 가독성이 좋게 [PAGE ISSUE]로 앞쪽에 표시하고, 뒤에 작은 따옴표에는 자동으로 들어가던 페이지 타이틀이 있는 것으로 보여서 눈치보며 컨벤션을 지키려고 노력했다.

<figure>
  <img src="/posts/images/flutter-get-started/i21g-230110-102157.png" alt="flutter website github issues">
  <figcaption>컨벤션을 파악해보기 위해 확인한 이슈 리스트</figcaption>
</figure>

음.. 자동으로 작성되어있는 타이틀이 한글로 되어있어 바꿀까 살짝 고민 했는데, 룰이 있을 것 같아 그대로 두기로 했다. 
그리도 열심히. 파파고의 도움을 받아! 처음 해보는거라 꽤 용기를 내서 작성했다.

[[PAGE ISSUE] '윈도우에서 설치' #8093](https://github.com/flutter/website/issues/8093)

<figure>
  <img src="/posts/images/flutter-get-started/i25g-230110-102503.png" alt="내가 작성한 flutter website github issue">
  <figcaption>할 수 있다</figcaption>
</figure>

핫..! 그런데 보이시는지! Closed. 지금 이 포스팅을 작성하는 도중, 이슈를 연지 10분만에, 바로 이슈가 닫혔다.
어머나 벌써 해결될리는 없고 답변을 확인해보니. 한국 사이트는 한국 커뮤니티 멤버가 운영중이라면서 한국 flutter 공식문서 깃헙 주소를 첨부해주셨다.

<figure>
  <img src="/posts/images/flutter-get-started/i26g-230110-102602.png" alt="내가 작성한 flutter website github issue 답변">
  <figcaption>flutter 한글 웹사이트에 대한 이슈는 한국 커뮤니티에서 관리되고 있어서 그쪽 github에 이슈를 등록해야한다는 답변</figcaption>
</figure>

그렇다면 한국 깃헙 이슈쪽으로 연결이 됐어야 하겠다. 이 링크값 바꾸는 것도 이슈 제보를 하면 좋겠다.

고 생각해서 했다.

[[PAGE ISSUE] '윈도우에서 설치' #93](https://github.com/flutter-korea/website/issues/93)

[[PAGE ISSUE] 버그 제보 버튼 연결 URL #94](https://github.com/flutter-korea/website/issues/94)

<figure>
  <img src="/posts/images/flutter-get-started/i30g-230110-173049.png" alt="flutter korea website github에 등록된 나의 issue">
  <figcaption>flutter korea website github에 등록된 나의 issue. 묘하게 뿌듯하다.</figcaption>
</figure>


그런데 작년 9월 이슈도 그대로 있고 언제 해결될지는 모르겠다.

두근두근 이슈 등록하기 끝.