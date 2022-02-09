const numberPhone = document.getElementById("number_phone");
const packageCode = document.getElementById("package_code");
const form = document.getElementById("form");
const error = document.getElementById("err");
const button = document.getElementById("btn-submit");
const popUp = document.getElementById("popup_window");

function validatePhoneNumber(input_str) {
    var regexNuberPhone = /^[0-9]{9}$/;

    return regexNuberPhone.test(input_str);
}

function validatePackageCode(input_str) {
    var regexPackageCode = /^[0-9]{4}$/;

    return regexPackageCode.test(input_str);
}

function validateData(e) {
    let messages = [];

    if((validatePhoneNumber(numberPhone.value) && validatePackageCode(packageCode.value))) {
        button.disabled = false;
        messages.push("dobrze")
    } else {
        button.disabled = true;
        messages.push("zle")
    }

    console.log(numberPhone.value)
    console.log(packageCode.value)

    if(messages.length > 0) {
        e.preventDefault();
        error.innerText = messages.join(', ')
    }
}

form.addEventListener('keyup', (e) => {
   validateData(e);
})

function togglePopUp() {
    if (popUp.style.display === "none") {
        popUp.style.display = "block";
      } else {
        popUp.style.display = "none";
      }
} 


