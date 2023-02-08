let textArea = document.getElementById('text-area');
const submitBtn = document.querySelector('.input-text');
const resumeBtn = document.querySelector('.resume');
const pauseBtn = document.querySelector('.pause');

// submitBtn을 눌렀을때, clickevent 발생
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let textContent = textArea.value;
  let voices = speechSynthesis.getVoices();
  let textToVoice = new SpeechSynthesisUtterance();
  textToVoice.text = textContent;
  textToVoice.voice = voices[124];
  textToVoice.lang = 'en-US';
  speechSynthesis.speak(textToVoice);
});

// pauseBtn
pauseBtn.addEventListener('click', () => {
  pauseBtn.style.display = 'none';
  resumeBtn.style.display = 'block';
  speechSynthesis.speaking ? speechSynthesis.pause() : "";
});

// resumeBtn
resumeBtn.addEventListener('click', () => {
  resumeBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
  if (speechSynthesis.pause) {
    speechSynthesis.resume(); // 일시정지가 되어있다 다시 재생
  };
});