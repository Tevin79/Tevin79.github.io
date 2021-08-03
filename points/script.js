class Players {
    constructor(name, totalPoints, points, pointsHistoryText, pointsHistoryArray, distrib) {
        this.name = name;
        this.totalPoints = totalPoints;
        this.points = points;
        this.pointsHistoryText = pointsHistoryText;
        this.pointsHistoryArray = pointsHistoryArray;
        this.distrib = distrib;
    }
}

let players = [];
let pts;
let i = 0;

if (localStorage.getItem("name0") === null) {
    players = [
        new Players("Player_1", 0, 0, "", [], 1),
        new Players("Player_2", 0, 0, "", [], 0),
        new Players("Player_3", 0, 0, "", [], 0)
    ];
    write();
} else {
    getLocalStorage();
    write();
    document.getElementById("cancel").disabled = false;
}

function addLocalStorage() {
    localStorage.clear();
    for (let i in players) {
        let name = players[i].name;
        localStorage.setItem("name" + i, name);
        let totalPoints = players[i].totalPoints;
        localStorage.setItem("totalPoints" + i, totalPoints);
        let points = players[i].points;
        localStorage.setItem("points" + i, points);
        let pointsHistoryText = JSON.stringify(players[i].pointsHistoryText);
        localStorage.setItem("pointsHistoryText" + i, pointsHistoryText);
        let pointsHistoryArray = JSON.stringify(players[i].pointsHistoryArray);
        localStorage.setItem("pointsHistoryArray" + i, pointsHistoryArray);
        let distrib = players[i].distrib;
        localStorage.setItem("distrib" + i, distrib);
    }
}

function getLocalStorage() {
    while (localStorage.getItem("name" + i) != null) {

        let name = localStorage.getItem("name" + i);

        let totalPoints = localStorage.getItem("totalPoints" + i);

        let points = localStorage.getItem("points" + i);

        let pointsHistoryText = localStorage.getItem("pointsHistoryText" + i);
        pointsHistoryText = JSON.parse(pointsHistoryText);

        let pointsHistoryArray = localStorage.getItem("pointsHistoryArray" + i);
        pointsHistoryArray = JSON.parse(pointsHistoryArray);

        let distrib = localStorage.getItem("distrib" + i);

        players[i] = new Players(name, totalPoints, points, pointsHistoryText, pointsHistoryArray, distrib);
        i++;
    }
}

function add() {
    for (let i in players) {
        if (document.getElementById(players[i].name + "_input").value < 0) {
            alert("Un des nombres est négatif");
            break
        }
    }
    for (let player of players) {
        if (document.getElementById(player.name + "_input").value >= 0) {
            if (document.getElementById(player.name + "_input").value === "") {
                player.points = 0;
                player.pointsHistoryArray.push(0);
                document.getElementById(player.name + "_hist").value = "+"+0+"\n"+document.getElementById(player.name + "_hist").value;
                player.pointsHistoryText = document.getElementById(player.name + "_hist").value;
            } else {
                let ptsInput = document.getElementById(player.name + "_input").value;
                ptsInput = parseInt(ptsInput);
                document.getElementById(player.name + "_hist").value = "+"+ptsInput+"\n"+document.getElementById(player.name + "_hist").value;
                player.pointsHistoryText = document.getElementById(player.name + "_hist").value;
                player.points = ptsInput;
                player.pointsHistoryArray.push(player.points);
                let ptsTotal = player.totalPoints;
                ptsTotal = parseInt(ptsTotal);
                pts = ptsInput + ptsTotal;
                player.totalPoints = pts;
                document.getElementById(player.name + "_totalPoints").textContent = player.totalPoints;
                document.getElementById(player.name + "_input").value = "";
            }
            document.getElementById("cancel").disabled = false;
            addLocalStorage()
        } else {
            alert("Un des nombres est négatif");
            break;
        }
    }
}

function cancel() {
    if (confirm("Voulez vous vraiment annuler ?")) {
        for (let player of players) {
            player.points = player.pointsHistoryArray.pop();
            let ptsTotal = player.totalPoints;
            ptsTotal = parseInt(ptsTotal);
            document.getElementById(player.name + "_input").value = player.points;
            let pts = ptsTotal - player.points;
            pts = pts.toString();
            player.totalPoints = pts;
            document.getElementById(player.name + "_totalPoints").textContent = player.totalPoints;
            document.getElementById(player.name + "_hist").value = "-"+player.points+"\n"+document.getElementById(player.name + "_hist").value;
            player.pointsHistoryText = document.getElementById(player.name + "_hist").value;
        addLocalStorage()
        }
        if (players[0].pointsHistoryArray.length === 0) {
            document.getElementById("cancel").disabled = true;
            localStorage.clear();
        }
    }
}

function reset() {
    if (confirm("Voulez vous vraiment reinitialiser ?")) {
        for (let player of players) {
            player.points = 0;
            player.totalPoints = 0;
            player.pointsHistoryArray = [];
            player.pointsHistoryText = "";
            document.getElementById(player.name + "_totalPoints").textContent = player.points;
            document.getElementById(player.name + "_input").value = "";
            document.getElementById(player.name + "_hist").value = "";
        }
        document.getElementById("cancel").disabled = true;
        localStorage.clear();
    }
}

function write() {
    const body = document.querySelector("div");

    for (let player of players) {

        let newDiv = document.createElement("div");
        newDiv.classList.add("player");

        let newP1 = document.createElement("p");
        newP1.classList.add("playerName");
        newP1.id = player.name + "_points";
        newP1.innerText = player.name;

        let newInput = document.createElement("input");
        newInput.type = "number";
        newInput.classList.add("inputPoints");
        newInput.id = player.name + "_input";

        let newBox = document.createElement("input");
        newBox.type = "checkbox";
        newBox.classList.add("box");
        newBox.id = player.name + "_box";
        newBox.disabled = true;
        if (player.distrib === 1) {
            newBox.checked = true;
        } else if (player.distrib === 0) {
            newBox.checked = false;
        }

        let newP2 = document.createElement("p");
        newP2.classList.add("playerTotalPoints");
        newP2.id = player.name + "_totalPoints";
        newP2.innerText = player.totalPoints;

        let newTextArea = document.createElement("textarea");
        /*newTextArea.type = "textarea";*/
        newTextArea.classList.add("histText");
        newTextArea.id = player.name + "_hist";
        newTextArea.disabled = true;
        newTextArea.innerHTML = player.pointsHistoryText;


        newDiv.append(newP1);
        newDiv.append(newInput);
        //newDiv.append(newBox);
        newDiv.append(newP2);
        newDiv.append(newTextArea);

        body.append(newDiv);
    }

    let newDiv = document.createElement("div");
    newDiv.classList.add("buttons");

    let newButtonCancel = document.createElement("input");
    newButtonCancel.classList.add("button");
    newButtonCancel.id = "cancel";
    newButtonCancel.value = "Annuler";
    newButtonCancel.type = "button";
    newButtonCancel.onclick = cancel;
    newButtonCancel.disabled = true;

    let newButtonAdd = document.createElement("input");
    newButtonAdd.classList.add("button");
    newButtonAdd.id = "add";
    newButtonAdd.value = "Calculer";
    newButtonAdd.type = "button";
    newButtonAdd.onclick = add;

    let newButtonReset = document.createElement("input");
    newButtonReset.classList.add("button");
    newButtonReset.id = "reset";
    newButtonReset.value = "Reinitialiser";
    newButtonReset.type = "button";
    newButtonReset.onclick = reset;

    newDiv.append(newButtonCancel);
    newDiv.append(newButtonAdd);
    newDiv.append(newButtonReset);
    body.append(newDiv);
/*
    let reNewDiv = document.createElement("div");
    reNewDiv.classList.add("histDiv");

    let newTextAreaP1 = document.createElement("input");
    newTextAreaP1.classList.add("histText");
    newTextAreaP1.id = "ta1";
    newTextAreaP1.type = "textarea";

    let newTextAreaP2 = document.createElement("input");
    newTextAreaP2.classList.add("histText");
    newTextAreaP2.id = "ta2";
    newTextAreaP2.type = "textarea";

    let newTextAreaP3 = document.createElement("input");
    newTextAreaP3.classList.add("histText");
    newTextAreaP3.id = "ta3";
    newTextAreaP3.type = "textarea";

    reNewDiv.append(newTextAreaP1);
    reNewDiv.append(newTextAreaP2);
    reNewDiv.append(newTextAreaP3);
    body.append(reNewDiv);*/
}