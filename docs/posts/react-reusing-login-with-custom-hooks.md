원문: https://react.dev/learn/reusing-logic-with-custom-hooks

# Custom Hook으로 로직 재사용하기
리액트는 useState, useContext, useEffect와 같은 몇가지 빌트인 Hook들이 있다.
가끔 어떠한 특별한 목적을 위한 Hook이 필요할 수 있다. 예를 들어 data를 fetch할때, 유저가 온라인 상태인지 추적할때, 또는 채팅방에 연결할때가 있다. 이런 Hook들은 React에는 없다. 하지만 당신의 앱을 위해 당신만의 Hook을 만들 수 있다.

> ### 이런 것들을 배웁니다.
> - 커스텀 훅이 뭔지, 어떻게 작성 하는지
> - 컴포넌트 간 로직을 어떻게 재사용 하는지
> - 커스텀 훅 네이밍과 구조 잡는 방법
> - 언제, 왜 커스텀 훅을 사용해야 하는지

## 커스텀 훅: 컴포넌트간 로직 공유

당신이 네트워크에 크게 의존하는 앱을 개발하고 있다고 상상해보세요.(많은 앱들이 그렇듯) 당신은 유저들이 앱 사용 중에 네트워크 연결이 갑자기 끊기게 됐을때 그들에게 경고하고 싶습니다. 이럴때 어떻게 할까요? 당신의 컴포넌트에서 2가지가 필요할겁니다.

1. 네트워크가 온라인인지 추적하는 state
2. 전역으로 온라인, 오프라인 이벤트를 구독하고 state를 업데이트하기 위한 Effect

위 내용들은 네트워크 상태와 컴포넌트를 동기화 시키게 됩니다. 아래와 같이 코드를 작성해 볼 수 있습니다.

<iframe src="https://codesandbox.io/embed/youthful-carson-nsny83?fontsize=13&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="youthful-carson-nsny83"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

네트워크 연결 상태를 껐다 켰다 해보세요. 그리고 그 변화에 따라 이 `StatusBar`가 업데이트 되는지 확인해보세요.

이제 다른 컴포넌트에서 이것과 같은 로직을 사용해야한다고 상상해보세요. 네트워크가 연결되지 않은 상태일때 'Save' 대신에 'Reconnecting...'이 표시되고 disabled된 버튼을 구현해야합니다. 그러기 위해서 `SaveButton`컴포넌트에 `isOnline` state와 Effect를 복사 붙여넣기 할 수 있습니다.

<iframe src="https://codesandbox.io/embed/solitary-fast-b99g0g?fontsize=13&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="solitary-fast-b99g0g"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

네트워크가 끊긴 상태일때 버튼 모양이 변경되는지 확인해보세요.

이 2개의 컴포넌트는 정상적으로 작동합니다. 하지만 같은 로직들이 복사되어 있는것은 좋지 않습니다. 이 컴포넌트들이 비쥬얼적인 외형은 서로 다르지만, 특정 로직은 재사용하고 싶습니다.

## 컴포넌트에서 커스텀 훅 추출하기

잠깐 상상해봅시다. 