const numberPhone = document.getElementById("number_phone");
const packageCode = document.getElementById("package_code");
const form = document.getElementById("form");
const error = document.getElementById("err");
const button = document.getElementById("submit");

function validatePhoneNumber(input_str) {
    var regexNuberPhone = /^[0-9]{9}$/;

    return regexNuberPhone.test(input_str);
}

function validatePackageCode(input_str) {
    var regexPackageCode = /^[0-9]{4}$/;

    return regexPackageCode.test(input_str);
}

form.addEventListener('keyup', (e) => {
    e.preventDefault();

    if((validatePhoneNumber(numberPhone.value) && validatePackageCode(packageCode.value))) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})

button.addEventListener('click', (e) => {
    let messages = [];
    if((validatePhoneNumber(numberPhone.value) && validatePackageCode(packageCode.value))) {
        messages.push("git")
    } else {
        messages.push("bad")
    }

    if(messages.length > 0) {
        e.preventDefault();
        error.innerText = messages.join(', ')
    }
})
