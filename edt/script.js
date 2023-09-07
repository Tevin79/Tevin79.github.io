function l2_info() {
    document.getElementById("l2_info").style.display = "flex";
    document.getElementById("l3_info").style.display = "none";
    document.getElementById("l3_maths").style.display = "none";
}

function l3_info() {
    document.getElementById("l2_info").style.display = "none";
    document.getElementById("l3_info").style.display = "flex";
    document.getElementById("l3_maths").style.display = "none";
}

function l3_maths() {
    document.getElementById("l2_info").style.display = "none";
    document.getElementById("l3_info").style.display = "none";
    document.getElementById("l3_maths").style.display = "flex";
}

function load() {
    l2_info();
}