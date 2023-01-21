const togglePassword = (button) => {
    button.classList.toggle("showing");
    const input = document.getElementById("password");
    // if 연산자
    input.type = input.type === "password" ? "text" : "password";
};
