let filesInput = document.getElementById('files-upload');
let filesNum = document.querySelector('.files-num');
let filesList = document.querySelector('.files-list');

filesInput.addEventListener('change', () => {
  filesList.innerText = "";
  filesNum.textContent = `${filesInput.files.length}개의 파일이 업로드 되었습니다.`;

  for (file of filesInput.files) {
    // fileInput.files
    // 이미지 name, 이미지 업로드 길이, 이미지 size
    let listOfFile = document.createElement('li');
    let nameOfFile = file.name;
    let sizeOfFile = (file.size / 1024).toFixed(1);
    if (sizeOfFile > 1024) {
      listOfFile.innerHTML = `<p>${nameOfFile}</p><p>${sizeOfFile}MB</p>`
    } else {
      listOfFile.innerHTML = `<p>${nameOfFile}</p><p>${sizeOfFile}KB</p>`
    }

    filesList.appendChild(listOfFile);
  }

  console.log(filesList.style.height);
});