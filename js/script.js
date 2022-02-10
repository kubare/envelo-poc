const showContent = () => {
    var inputs = document.getElementById("main");
    var btn = document.getElementById("btn");

        inputs.style.display = "block";
        btn.style.display = "none"

        validateData();
}

const showFirstScreen = () => {
    window.location.reload();
}

const showSecondScreen = () => {
    const popUp = document.getElementById("popup_window");
    popUp.style.display = "none";
    clearInputForm();
    validateData();
}

const clearInputForm = () => {
    const packageCode = document.getElementById("package_code");
    packageCode.value = '';
}
