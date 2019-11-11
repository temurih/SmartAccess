function redirectToHome() {
    location.href = "home.htm";
}

function readyScanToggle() {
    const div = document.getElementsByClassName("ready-scan")[0];
    const overlay = document.getElementById("overlay");
    if (div.classList.contains("show")) {
        div.classList.add("hide");
        div.classList.remove("show");
        overlay.style.display = "none";
    } else {
        overlay.style.display = "block";
        div.classList.add("show");
        div.classList.remove("hide");
    }
}
