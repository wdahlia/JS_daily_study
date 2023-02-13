const container = document.querySelector('.container');
const errorMessage = document.getElementById('error');
let fileUploadBtn = document.getElementById('files-upload');
let imgFilesList = document.getElementById('image-files');

let FilesInputInfo = (file, name, type) => {
  // console.log(type); 을 해보았을때 image/png 라는 형식으로 들어옴
  if (type.split('/')[0] !== 'image') {
    errorMessage.innerText = '이미지 파일을 업로드 해주세요';
    return false;
  }
  errorMessage.innerText = '';
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    let imageContainer = document.createElement('figure');
    let img = document.createElement('img');
    img.src = reader.result;
    imageContainer.appendChild(img);
    imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
    imgFilesList.appendChild(imageContainer);
  }

}

// fileUploadBtn에 files를 첨부했을 때

fileUploadBtn.addEventListener('change', () => {
  // fileUploadBtn 이라는 친구는 input의 꾸며주는 label 버튼이기 때문에
  // fileUploadBtn.files 라는 친구 역시도 console에 찍히게 됨
  imgFilesList.innerHTML = '';
  Array.from(fileUploadBtn.files).forEach((file) => {
    FilesInputInfo(file, file.name, file.type);
    // fileUploadBtn의 files들을 array 객체로 만들고 각각을 돌면서 그 각각의
    // file, file.name, file.type을 인자로 fileHander에 전달
  });
});

// drag and drop으로 files를 첨부했을 때
// drag로 container영역에 진입했을때 이벤트
container.addEventListener('dragenter', (e) => {
  e.preventDefault();
  e.stopPropagation();
  container.classList.add('active');
},
false
);

// drag로 container영역에 올려져있을 때의 이벤트
container.addEventListener('dragover', (e) => { 
  e.preventDefault();
  e.stopPropagation();
  container.classList.add('active');
},
false
);


// 파일들이 drop되었을때
container.addEventListener('drop', (e) => {
  e.preventDefault();
  e.stopPropagation();
  container.classList.remove('active');
  let draggedData = e.dataTransfer;
  let filesList = draggedData.files;
  imgFilesList.innerHTML = ''; // 사진이 또 다시 들어왔을 때 초기화 해준다
  Array.from(filesList).forEach((file) => {
    // 들어온 filesList의 정보들을 인자로 보내준다
    FilesInputInfo(file, file.name, file.type);
  });
}, 
false
);

// drag가 container영역을 벗어날 때의 이벤트
container.addEventListener('dragleave', (e) => {
  e.preventDefault();
  e.stopPropagation();
  container.classList.remove('active')
});