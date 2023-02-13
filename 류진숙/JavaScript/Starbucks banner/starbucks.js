const titleText = document.querySelector('.section__banner-textarea--title'); // pick your favorite title 문구
    const contentText = document.querySelector('.section__banner-textarea--content'); // 설명 문구 
    const detailBtn = document.querySelector('.section__banner-textarea-btn'); // 자세히 보기 문구

    window.addEventListener('scroll', ()=> {
      heightY = window.scrollY; // scroll을 내렸을때 그 scroll의 Y좌표 즉 높이 값이 얼마인지 알려줌
      if (heightY > 300) { // heightY가 300일 경우는 애니메이션 효과들이 사라지게끔 하고
        titleText.style.animation = "hideTitle 1s ease-out forwards";
        contentText.style.animation = "hideContent 2s ease-out forwards";
        detailBtn.style.animation = "hideBtn 1s ease forwards";
      } else { // 그 이외에는 애니메이션 효과들이 나타나게끔 만들어준다
        titleText.style.animation = "showTitle 1s ease-out forwards";
        contentText.style.animation = "showContent 2s ease-out forwards";
        detailBtn.style.animation = "showBtn 3s ease forwards";
      }
    });
