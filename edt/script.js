function l2_info() {
    document.getElementById("l2_info").style.display = "flex";
    document.getElementById("l2-info-button").classList.add("active");
    document.getElementById("l3_info").style.display = "none";
    if (document.getElementById("l3-info-button").classList.contains("active")){
        document.getElementById("l3-info-button").classList.remove("active");
    }
    document.getElementById("l3_maths").style.display = "none";
    if (document.getElementById("l3-maths-button").classList.contains("active")){
        document.getElementById("l3-maths-button").classList.remove("active");
    }
}

function l3_info() {
    document.getElementById("l2_info").style.display = "none";
    if (document.getElementById("l2-info-button").classList.contains("active")){
        document.getElementById("l2-info-button").classList.remove("active");
    }
    document.getElementById("l3_info").style.display = "flex";
    document.getElementById("l3-info-button").classList.add("active");
    document.getElementById("l3_maths").style.display = "none";
    if (document.getElementById("l3-maths-button").classList.contains("active")){
        document.getElementById("l3-maths-button").classList.remove("active");
    }
}

function l3_maths() {
    document.getElementById("l2_info").style.display = "none";
    if (document.getElementById("l2-info-button").classList.contains("active")){
        document.getElementById("l2-info-button").classList.remove("active");
    }
    document.getElementById("l3_info").style.display = "none";
    if (document.getElementById("l3-info-button").classList.contains("active")){
        document.getElementById("l3-info-button").classList.remove("active");
    }
    document.getElementById("l3_maths").style.display = "flex";
    document.getElementById("l3-maths-button").classList.add("active");
}

function load() {
    l2_info();
}