let uploadBtn = document.querySelector('#upload-button');
let chosenImage = document.querySelector('#chosen-image');
let fileName = document.querySelector("file-name");
let container = document.querySelector(".container");
let error = document.querySelector('#error');
let imageDisplay = document.querySelector('#image-display');

const fileHandler = (file, name, type) => {
    if (type.split("/")[0] !== "image") {
        error.innerText = "이미지 파일만 업로드 가능해요!";
        return false;
    }
    error.innerText = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader)
    reader.addEventListener('loadend', () => {
        let imageContainer = document.createElement('figure');
        let img = document.createElement('img');
        img.src = reader.result;
        imageContainer.appendChild(img);
        imageContainer.insertAdjacentHTML('beforeend', `<figcaption>${name}</figcaption>`);
        // figure 태그 안에 image컨테이너 추가
        imageDisplay.appendChild(imageContainer);
    })
    /* 
    reader.onloadend = () => {
        let imageContainer = document.createElement('figure');
        let img = document.createElement('img');
        img.src = reader.result;
        imageContainer.appendChild(img);
        imageContainer.insertAdjacentHTML('beforeend', `<figcaption>${name}</figcaption>`);
        // figure 태그 안에 image컨테이너 추가
        imageDisplay.appendChild(imageContainer);
 
    }   
    */
}
uploadBtn.addEventListener('change', () => {
    imageDisplay.textContent = "";
    Array.from(uploadBtn.files).forEach((file) => {
        fileHandler(file, file.name, file.type);
    })

});

// drag & drop
container.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add('active');
}, false)