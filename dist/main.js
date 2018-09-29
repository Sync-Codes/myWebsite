function openSlideMenu() {
    document.getElementById("side-nav").style.width = "250px";
    document.getElementById("toggle-nav").style.display = "none";
    document.getElementById("toggle-nav").style.transition = "1s";
}

function closeSlideMenu() {
    document.getElementById("side-nav").style.width = "0";
    document.getElementById("toggle-nav").style.transition = "1s";
    document.getElementById("toggle-nav").style.display = "inline-block";
}