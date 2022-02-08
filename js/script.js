const showContent = () => {
    var inputs = document.getElementById("main");
    var btn = document.getElementById("btn");

    if(inputs.style.display === "none") {
        inputs.style.display = "block";
        btn.style.display = "none"
    }
    else {
        inputs.style.display = "none";
    }
}

