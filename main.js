function redirectToHome() {
    location.href = "home.htm";
}

function readyScanToggle() {
    const div = document.getElementById("ready-scan");
    const overlay = document.getElementById("overlay");
    if (div.classList.contains("show")) {
        div.classList.add("hide");
        div.classList.remove("show");
        overlay.classList.remove("overlay");
    } else {
        div.classList.add("show");
        div.classList.remove("hide");
        overlay.classList.add("overlay");
    }
}
