HTML·CSS/접근성
[WAI-ARIA] 레이어팝업에 적용

```
<!-- 레이어 팝업 열기 버튼 : 레이어 팝업 오픈 시 aria-expanded="true"-->
<button aria-control="popup1" aria-expanded="false" aria-haspopup="true">
  자세히 보기
</button>

<!-- 레이어 팝업 열기 버튼 -->
<div id="popup1">
  레이어팝업 내용
</div>
```