let fileInput = document.getElementById('file-input');
let numOfFiles = document.getElementById('num-of-files');
let filesList = document.getElementById('files-list');

fileInput.addEventListener('change', () => {
    filesList.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} 개의 파일이 선택되었습니다.`;

    for (i of fileInput.files) {
        let reader = new FileReader();
        let listItem = document.createElement('li');
        let fileName = i.name;
        let fileSize = (i.size / 1024).toFixed(1);

        if (fileSize < 1024) {
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`
        } else {
            listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`
        }

        filesList.appendChild(listItem)
    }
});
