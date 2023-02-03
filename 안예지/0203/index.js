let fileInput = document.querySelector('#file-input');
let numOfFiles = document.querySelector('#num-of-files');
let filesList = document.querySelector('#files-list');
let container = document.querySelector('.container')

fileInput.addEventListener('change', () => {
    filesList.textContent = '';
    numOfFiles.textContent = `파일 ${fileInput.files.length}개가 선택되었습니다.`
    console.log(container.style.height)

    // for문 문법
    for (i of fileInput.files) {
        let listItem = document.createElement('li')
        let fileName = i.name
        let fileSize = (i.size / 1024).toFixed(1)

        listItem.insertAdjacentHTML('beforeend', `<p>${fileName}</p>
        <p>${fileSize}KB</p>`)

        if (fileSize > 1024) {
            listItem.lastChild.textContent = `${(fileSize / 1024).toFixed(1)}MB`
        }

        filesList.appendChild(listItem)
    }
})
