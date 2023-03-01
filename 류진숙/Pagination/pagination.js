const li = document.querySelectorAll('li');
const pages = document.querySelector('.pages-num');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dropDown = document.querySelector('.dropdown');

let divNum = 5;
const startPageNum = 1;
let endPageNum;
let currentPage;


const createBtn = (value) => {
  for (let i=1; i < value + 1; i++) {
    const numBtn = document.createElement('button');
    numBtn.className = 'btn';
    numBtn.innerText = i;
    numBtn.value = i;
    // console.log(numBtn);
    pages.appendChild(numBtn);
}};

const selectDropdown = () => {
  endPageNum = Math.ceil(li.length / divNum);
  const btnList = document.querySelectorAll('.btn');
  if (pages.hasChildNodes()) {
    btnList.forEach((page) => {
      pages.removeChild(page);
    });
  }
  createBtn(endPageNum);
  setCurrentPage(1);
}


// 버튼 부분 클릭 이벤트 발생했을때, class 추가해서 그 값들의 color값, background-color 바꿔주기 단, 클릭된 값 말고 다른 값들은 선택된다면 active될 친구말고는 다 class가 remove 되어야함


const changeBtnStyle = () => {
  console.log('시작');
  const btnList = document.querySelectorAll('.btn');
  // 필터가 바뀔 경우 btnList를 받아오지를 못함.. 실행안됨
  btnList.forEach((btn, idx) => {
    btn.classList.remove('active');
    if (currentPage === (idx + 1)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

const disabledBtn = (button) => {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
}

const enabledBtn = (button) => {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
}

// current라는 인자를 받아서, 각 값을 돌면서 우선 다 지워준다음 current, idx가 일치한다면 active를 더해주는 것

// 버튼 부분 클릭 이벤트 발생 시, 맨 처음 번호와 맨 뒷번호 클릭한다면 prev나 next 버튼 애초에 비활성화 시키기
// 버튼 부분 클릭 이벤트 발생 시, 해당 활성화되어 있는 버튼은 눌러도 눌리지 않게끔 비활성화 시켜주기 disabled 속성 사용할 것

const handleClick = () => {
  // prevBtn 맨 첫 페이지 일 경우 비활성화, 활성화
  if (currentPage === 1) { 
    disabledBtn(prevBtn);
  } else {
    enabledBtn(prevBtn);
  }
  // console.log(typeof(endPageNum), endPageNum);
  // nextBtn 맨 마지막 페이지 일 경우 비활성화, 활성화
  if (endPageNum === currentPage) { 
    disabledBtn(nextBtn);
  } else {
    enabledBtn(nextBtn);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  // console.log(typeof(currentPage), currentPage);

  // console.log(currentPage);

  changeBtnStyle();
  handleClick();
  
  const prevRange = (pageNum - 1) * divNum;
  const currRange = pageNum * divNum;

  li.forEach((list, index) => {
    list.classList.add('hidden');
    if ( prevRange <= index && index < currRange ) {
      list.classList.remove('hidden');
    }
  });

  // console.log(prevRange, currRange);
  // 만약, currentPage를 변경했을때, prev, next 버튼눌렀을떄 setCurrentPage에 전달되는 인자는 바뀌어야함

}

dropDown.addEventListener('change', (e) => {
  const select = e.target.value;
  divNum = select;
  selectDropdown(divNum);
});


window.addEventListener('load', () => {
  selectDropdown(divNum);

  prevBtn.addEventListener('click', () => {
    setCurrentPage((currentPage - 1));
  });
  
  nextBtn.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });


  const btnList = document.querySelectorAll('.btn');
  console.log(btnList);
  btnList.forEach((button) => {
    button.addEventListener('click', (e) => {
      const page = Number(e.target.value);
        setCurrentPage(page);
    });
  });

  
  // 5개씩을 클릭한다면 divNum이 5, 15개 클릭하면 15개씩 보여지기
  
});
