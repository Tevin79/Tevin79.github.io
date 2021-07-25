function color() {

    var select = document.getElementById("select");
    var choice = select.selectedIndex;
    var colorAll = select.options[choice].value;
    /*var colorAll = document.getElementById("color").value;*/
    localStorage.setItem("color", colorAll)
}

