function load() {
    if (localStorage.getItem("color")!= null){
        let color = localStorage.getItem("color");
        var nav = document.getElementsByClassName("nav-lien-start-active");
        for (var i = 0; i < nav.length; i++) {
            if (color == "yellow" || color == "pink" || color == "aqua") {
                nav[i].style.color = "black"
            } else {
                nav[i].style.color = "white"
            }
            nav[i].style.backgroundColor = color;
            nav[i].style.borderColor = color;
            if (color == "") {
                nav[i].style.backgroundColor = "blue";
                nav[i].style.borderColor = "blue";
                nav[i].style.color = "white"
            }
        }
        var nav = document.getElementsByClassName("nav-lien-active");
        for (var i = 0; i < nav.length; i++) {
            if (color == "yellow" || color == "pink" || color == "aqua") {
                nav[i].style.color = "black"
            } else {
                nav[i].style.color = "white"
            }
            nav[i].style.backgroundColor = color;
            nav[i].style.borderColor = color;
            if (color == "") {
                nav[i].style.backgroundColor = "blue";
                nav[i].style.borderColor = "blue";
                nav[i].style.color = "white"
            }
        }
        var nav = document.getElementsByClassName("nav-lien-end-active");
        for (var i = 0; i < nav.length; i++) {
            if (color == "yellow" || color == "pink" || color == "aqua") {
                nav[i].style.color = "black"
            } else {
                nav[i].style.color = "white"
            }
            nav[i].style.backgroundColor = color;
            nav[i].style.borderColor = color;
            if (color == "") {
                nav[i].style.backgroundColor = "blue";
                nav[i].style.borderColor = "blue";
                nav[i].style.color = "white"
            }
        }
    } else {
        var nav = document.getElementsByClassName("nav-lien-start-active");
        for (var i = 0; i < nav.length; i++) {
            nav[i].style.color = "white";
            nav[i].style.backgroundColor = "blue";
            nav[i].style.borderColor = "blue";
        }
        var nav = document.getElementsByClassName("nav-lien-active");
        for (var i = 0; i < nav.length; i++) {
            nav[i].style.color = "white";
            nav[i].style.backgroundColor = "blue";
            nav[i].style.borderColor = "blue";
        }
        var nav = document.getElementsByClassName("nav-lien-end-active");
        for (var i = 0; i < nav.length; i++) {
            nav[i].style.color = "white";
            nav[i].style.backgroundColor = "blue";
            nav[i].style.borderColor = "blue";
        }
    }
}