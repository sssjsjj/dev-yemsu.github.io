[GTM] 버튼 클릭해야 호출되는 유튜브 GTM 태깅 커스텀으로 적용하기

GTM 에 youtube 관련 data를 수집할 수 있도록 기본 메뉴가 있는데,

iframe이 애초에 source 내 존재하고 있어야 한다는 것이 기본 조건이다.

 

 

하지만 작업해야 하는 사이트 source 상에는 src값이 지정되어있지 않은 빈껍데기 iframe만 존재하고,

디자인된 썸네일을을 클릭하면 썸네일에 지정된 data값의 youtube영상을 호출하도록 되어있다.

사이트는 반응형으로 모바일에서는 또 썸네일 없이 바로 iframe영상이 존재한다.

 

 

현재 사이트 구조를 바꿔버리는게 제일 쉽기야 하겠지만,

주어진 문제를 해결해보고 싶은 마음이 생겨 custom으로 만들고 싶었다.

 

 

예전에 사이트에 있는 유튜브 영상을 트래킹 하기 위해서는 youtube iframe api를 사용하여 모두 맞춤 자바스크립트로 작업을 했다고 한다.

관련 가이드를 찾아서 우선 적용한 다음에 일부 내 상황에 맞게 수정했다.

참고한 블로그 - http://analyticsmarketing.co.kr/digital-analytics/google-tag-manager/1153/

 

 

작성한 태그, 트리거, 변수는 아래와 같다.

 

 

 

> 태그

 

Youtube Event - custom : 이벤트 발생 시 ga로 보낼 내용(카테고리, 작업, 라벨)
Youtube Event - listener : 추적할 유튜브를 선택하고, 트래킹 할 내용을 데이터 레이어에 youtube라는 이벤트 명으로 리스트업한다.
 

 

> 트리거

 

Youtube Event - custom : 데이터 레이어에 youtube라는 이벤트가 들어왔을 때 해당 트리거 발동 > 태그 실행
Youtube Event - listener : {{Youtube - check}} 변수 내용이 true일때 해당 트리거 발동 > 태그 실행
 

 

> 변수

 

Youtube - check : 페이지 내 재생할 수 있는 영상이 존재하면 true 반환, 존재하지 않으면 false 반환
Video Percent - custom : 데이터 변수
Video Status - custom : 데이터 변수
Video Title - custom : 데이터 변수
 

 

참고 사이트와 거의 동일하게 진행했다.

변수 명칭만 조금씩 다르고, 나는 썸네일에 따로 덮여있는 유튜브 이기 때문에 스크립트를 아래와 같이 와장창 변경했다.

 

 

 

1. Youtube - check 변수를 수정했다.

function () {
  var e = document.getElementsByTagName('html')[0].className.indexOf('no-handy') != -1 ?
  document.getElementsByClassName('o-btn__type--youtube') :
  document.getElementsByTagName('iframe')
  ;
  var pcCheck = document.getElementsByTagName('html')[0].className.indexOf('no-handy') != -1;
  for(x = e.length; x--;){
    var vidSrc = e[x].tagName == "BUTTON" ? e[x].dataset.url : e[x].src;
    if (/youtube.com\/embed/.test(vidSrc) && pcCheck) return true;
    return false;
  }
}
2. check 후 Youtube - listener를 수정했다.

<script>
	var gtmYTListeners = [];

	var thumbBtns = document.getElementsByClassName('o-btn__type--youtube'),
      closeBtn = document.getElementsByClassName('c-modal__close')[0],
      clickedBtn;
      
  var videoTitle,
      videoCurrent,
      videoDuration,
      coverImg;

  function onYouTubeIframeAPIReady() {					
    for (x = thumbBtns.length; x--;) {      
      thumbBtns[x].addEventListener('click', function (e){
        sequence = [];   
        var iframe;
        clickedBtn = e.target.tagName =="I" ? e.target.parentElement : e.target;
        // 키 비쥬얼에 삽입된 youtube
        if(clickedBtn.parentElement.parentElement.className.indexOf("key-visual__item") > -1){
          setTimeout(function(){
            iframes = document.querySelectorAll('.key-visual__video iframe');
            for(var i=0; i<iframes.length; i++){
              addYouTubeEvents(iframes[i]);		
            }		
          },200);      
        // 레이어 팝업으로 노출되는 youtube
        }else{
          iframes = document.querySelectorAll('.video-area iframe');
          for(var i=0; i<iframes.length; i++){
            addYouTubeEvents(iframes[i]);		
          }	
        }        
      });
    }		
  }

  // 추적 리스트에 유튜브 삽입
  function addYouTubeEvents(video){
    gtmYTListeners.unshift(new YT.Player(video, {
      events: {
        'onStateChange': onPlayerStateChange1,
        'onError': onPlayerError
      }
    }));	
    YT.gtmLastAction = "p";
  }
  function findData(target){
    videoTitle = target.playerInfo.videoData.title;
    videoCurrent = target.playerInfo.currentTime;
    videoDuration = target.playerInfo.duration;
  }

  var checkPercent;
	function onPlayerStateChange1(e) {  
    // 재생 중일때 퍼센트 체크.
    if(e.data == YT.PlayerState.PLAYING){
      checkPercent = setInterval(onPlayerPercent, 1000, e);
    }else{
      clearInterval(checkPercent);
    }

    findData(e.target);
    var t = Math.round(videoCurrent / videoDuration *100); //영상 퍼센트값
    switch(e.data){
      case YT.PlayerState.BUFFERING:
        youTubeTrackingGate({type: e.data, title: videoTitle, per: t});
        break;
      case YT.PlayerState.ENDED:
        if(t === 100){
          dataLayer.push({
            'event': 'youtube',
            'videoTitleCustom': videoTitle,
            'videoStatusCustom': "end",
            'videoPercentCustom': t
          });
          // 200324 add : onStateChange 이벤트 중복되어 프론트 관련 소스 gtm에 삽입
          var btnWrap = clickedBtn.parentElement,
              coverImg = btnWrap.parentElement.querySelector(".youtube-screen__img");
          clickedBtn.dataset.gtm  === "cover" && btnWrap.classList.add("cover"); coverImg.classList.add("cover");
          closeBtn && closeBtn.click(); 
        }
        YT.gtmLastAction = "p";
        break;
      case YT.PlayerState.PLAYING:
        youTubeTrackingGate({type: e.data, title: videoTitle, per: t});
        break;
      case YT.PlayerState.PAUSED:
        youTubeTrackingGate({type: e.data, title: videoTitle, per: t});
        break;
    }
  }

  // 기록된 상태에 따라 찍히는 데이터 설정
  var
  sequence = [],
  data,
  timeout;
  function youTubeTrackingGate(obj) {
    // console.log(obj);    
    sequence.unshift(obj.type);    
    // console.log(sequence);  
    /*
    obj.type ( video status) 
    1 : start 
    2 : pause
    3 : buffer
    */
   
    // 구간 이동 ( 정지 > 버퍼링 > 시작 )
    if( sequence[0] == 1 && sequence[1] == 3 && sequence[2] == 2 ){
      dataLayer.push({
        'event': 'youtube',
        'videoTitleCustom': obj.title,
        'videoStatusCustom': "seek",
        'videoPercentCustom': obj.per 
      });
      sequence = [];
    }
    clearTimeout(timeout);
    data = obj.event;
    timeout = setTimeout(function () {
      // 영상 시작 플레이만 찍힘
      if ( sequence[0] == 1 && sequence[1] !== 2) {
        dataLayer.push({
          'event': 'youtube',
          'videoTitleCustom': obj.title,
          'videoStatusCustom': "start",
          'videoPercentCustom': obj.per 
        });
        // sequence = [];
      }
      // 정지 눌렀을 때 : 2번째 플레이버튼 클릭 후 비디오 팝업 떴을 때, pause 0 태깅 넘어가서 재생 비율 0일떄 pause찍히지 않도록 조건 추가.
      if( sequence[0] == 2 && obj.per != 0){
        dataLayer.push({
          'event': 'youtube',
          'videoTitleCustom': obj.title,
          'videoStatusCustom': "pause",
          'videoPercentCustom': obj.per 
        });
      }
    }, 600);
  
    // 버퍼링 이후 '시작','멈춤'은 무시 (최초 시작이 아닌 케이스)
    if (obj.type === 3) {      
      if (sequence == [-1, 3]) {// 최초 실행 아닌 경우
        sequence = [];
      }
    }
  }

	function onPlayerError(e) {
    dataLayer.push({
      'videoStatusCustom': 'error',
      'videoTitleCustom': videoTitle,
      'eventAction': 'GTM',
      'eventLabel': "youtube:" + e.target.src + "-" + e.data
    });
  }

  // 상태 체크하여 0%, 25%, 50%, 75%, 재생완료 데이터 전송
  var pushComplete = [];
	function onPlayerPercent(e) {
    if(e.data == YT.PlayerState.ENDED || e.data == YT.PlayerState.PAUSED ){
      clearInterval(checkPercent);
    }
      
    findData(e.target)
    var t =  videoDuration - videoCurrent <= 1.5 ? 1 : (Math.floor(videoCurrent / videoDuration * 4) / 4).toFixed(2); //영상 퍼센트값
    var nowT = (videoCurrent / videoDuration).toFixed(2);
    if (nowT == t && pushComplete[0] != t){   
      e.target.lastP = t;
      if(t != 0 && t != 1){
        dataLayer.push({
        'event': 'youtube',
        'videoTitleCustom': videoTitle,
        'videoStatusCustom': "progress",
        'videoPercentCustom': t * 100
        });
        pushComplete.unshift(t);
      }
    }
	}

	// load the Youtube JS api 
	var j = document.createElement("script"),
		f = document.getElementsByTagName("script")[0];
	j.src = "https://www.youtube.com/iframe_api";
	j.async = true;
	f.parentNode.insertBefore(j, f);
</script>
 

썸네일을 클릭하면 팝업이 뜨면서 그 안에 있는 iframe틀에 해당 src를 삽입하기 때문에 막상 진행하다 보니 이슈가 많았다..................... ㅠ_ㅠ

시간될때 다시 한번 훑어보면서 소스를 정리해보아야겠다.

 

 

+20190916 소스 수정

작업 후 모바일 기기 테스트까지 전부 진행해보니 모바일은 기기별로 다른 이슈가 있었다.

기기 하나하나 맞추기에는 너무나 비효율적이고 어차피 모바일에는 썸네일 버튼 없이 바로 iframe이 노출되기 때문에 모바일에는 커스텀 적용되지 않도록 변경하고,

모바일에만 GTM 에서 제공하고 있는 기본 유튜브 태그 적용하였다.

 

+20200324 소스 수정

프론트단에서 유튜브 api의 onStateChange를 사용하면 함수가 중복되어 GTM이 정상적으로 구동되지 않는다.

해당 이벤트를 GTM내부로 옮김.


https://dribbles.tistory.com/12