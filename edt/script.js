function l3_info() {
    document.getElementById("m1_info").style.display = "none";
    if (document.getElementById("m1-info-button").classList.contains("active")){
        document.getElementById("m1-info-button").classList.remove("active");
    }
    document.getElementById("l3_info").style.display = "flex";
    document.getElementById("l3-info-button").classList.add("active");
}

function m1_info() {
    document.getElementById("l3_info").style.display = "none";
    if (document.getElementById("l3-info-button").classList.contains("active")){
        document.getElementById("l3-info-button").classList.remove("active");
    }
    document.getElementById("m1_info").style.display = "flex";
    document.getElementById("m1-info-button").classList.add("active");
}

function load() {
    l3_info();
}

if (screen.height > screen.width){
    document.getElementById("style").setAttribute("href", "../styleblue_small.css");
}