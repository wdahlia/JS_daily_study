const togglePassword = (button) => {
    button.classList.toggle("showing");
    const input = document.getElementById("password");
    // if 연산자
    input.type = input.type === "password" ? "text" : "password";
};

const btns = document.querySelectorAll('.toggle');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
            question.classList.toggle('show-icon');
    });
});