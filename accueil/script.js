function color() {
    var select = document.getElementById("select");
    var choice = select.selectedIndex;
    var colorAll = select.options[choice].value;
    localStorage.setItem("choice", choice);
    localStorage.setItem("color", colorAll);
    location.reload()
}
document.getElementById("select").selectedIndex = localStorage.getItem("choice");

