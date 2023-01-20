// js
// https://ko.javascript.info/script-async-defer
// 내부이든 외부이든 스크립트가 존재하는 경우 스크립트를 모두 다운받고 실행해야함
// 즉 용량이 큰 script라면 읽어내려가는 중에 그 밑의 요소를 보여주지 못할 수 있음 즉, 그리하여 script를 body안쪽의 맨 마지막에 놓는 것 - 완전한 해결 책은 아님
// 즉 defer 지연 스크릡트를 다운로드 하는 중에도 HTML 파싱이 멈추지 않음
// defer는 외부 스크립트에만 사용 가능
  const titleText = document.querySelector('h1');

  // change 폼 컨트롤(value의 값)의 값이 변경 되었을 때 발생하는 이벤트 
  document.getElementById('input').addEventListener('change', ()=> {
    // classList에 toggle 추가하는 방식으로도 js 코드 수정 가능
    // document.body.classList.toggle('dark'); 형태로도 if 문 없이 가능
    // indexOf의 경우 
    if (document.body.className.indexOf('dark') === -1) {
      // className에 dark라는 문자열이 있는가, 문자열이 없으므로 -1을 반환 즉, dark라는 문자열이 없을 경우는 dark라는 classList를 추가해주고
      document.body.classList.add('dark');
      titleText.innerText = "DARK MODE"
    } else { // 그게 아니라면 dark라는 classList를 제거
      document.body.classList.remove('dark');
      titleText.innerText = "LIGHT MODE"
    }
  });
