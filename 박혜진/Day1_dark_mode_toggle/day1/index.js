// change 폼 컨트롤(value의 값)의 값이 변경 되었을 때 발생하는 이벤트
document.getElementById('input').addEventListener('change', () => {
    // 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴
    if (document.body.className.indexOf('dark') === -1) { 
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });