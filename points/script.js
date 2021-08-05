class Players {
    constructor(name, newname, totalPoints, points, pointsHistoryText, pointsHistoryArray, distrib) {
        this.name = name;
        this.newname = newname;
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
let player_selected;

if (localStorage.getItem("name0") === null) {
    player_selected = 3;
    players = [
        new Players("Player_1", "Player_1", 0, 0, "", [], 1),
        new Players("Player_2", "Player_2", 0, 0, "", [], 0),
        new Players("Player_3", "Player_3", 0, 0, "", [], 0)
    ];
    write();
} else {
    getLocalStorage();
    write();
    document.getElementById("cancel").disabled = false;
}

function addLocalStorage() {
    localStorage.clear();
    for (let player of players) {
        if (document.getElementById(player.name + "_box").checked === true) {
            player.distrib = 1
        } else {
            player.distrib = 0
        }
    }
    for (let i in players) {
        let name = players[i].name;
        localStorage.setItem("name" + i, name);
        let newname = players[i].newname;
        localStorage.setItem("newname" + i, newname);
        let totalPoints = players[i].totalPoints;
        localStorage.setItem("totalPoints" + i, totalPoints);
        let points = players[i].points;
        localStorage.setItem("points" + i, points);
        let pointsHistoryText = JSON.stringify(players[i].pointsHistoryText);
        localStorage.setItem("pointsHistoryText" + i, pointsHistoryText);
        let pointsHistoryArray = JSON.stringify(players[i].pointsHistoryArray);
        localStorage.setItem("pointsHistoryArray" + i, pointsHistoryArray);
        let distrib = JSON.stringify(players[i].distrib);
        localStorage.setItem("distrib" + i, distrib);
    }

    localStorage.setItem("player_selected", player_selected)
}

function getLocalStorage() {

    player_selected = localStorage.getItem("player_selected");

    player_selected = parseInt(player_selected);

    console.log(player_selected);

    while (i < player_selected) {

        let j = i+1;

        if (localStorage.getItem("name" + i) === null){

            let name = "player_" + j;
            let newname = "player_" + j;
            let totalPoints = 0;
            let points = 0;
            let pointsHistoryText = "";
            let pointsHistoryArray = [];
            let distrib = 0;

            players[i] = new Players(name, newname, totalPoints, points, pointsHistoryText, pointsHistoryArray, distrib);

        } else {

            let name = localStorage.getItem("name" + i);

            let newname = localStorage.getItem("newname" + i);

            let totalPoints = localStorage.getItem("totalPoints" + i);

            let points = localStorage.getItem("points" + i);

            let pointsHistoryText = localStorage.getItem("pointsHistoryText" + i);
            pointsHistoryText = JSON.parse(pointsHistoryText);

            let pointsHistoryArray = localStorage.getItem("pointsHistoryArray" + i);
            pointsHistoryArray = JSON.parse(pointsHistoryArray);

            let distrib = localStorage.getItem("distrib" + i);
            distrib = JSON.parse(distrib);

            players[i] = new Players(name, newname, totalPoints, points, pointsHistoryText, pointsHistoryArray, distrib);

        }

        i++;
    }
}

function clearLocalStorage() {
    for (let player of players) {
        player.totalPoints = 0;
        player.points = 0;
        player.pointsHistoryText = "";
        player.pointsHistoryArray = [];
        if (player.name === players[0].name) {
            player.distrib = 1;
        } else {
            player.distrib = 0;
        }
        addLocalStorage();
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
    let i = 0;
    for (let player of players) {
        if (document.getElementById(player.name + "_box").checked === true){
            if (i === players.length - 1){
                document.getElementById(players[0].name + "_box").checked = true;
                document.getElementById(player.name + "_box").checked = false;
                addLocalStorage();
                break
            } else {
                document.getElementById(players[i+1].name + "_box").checked = true;
                document.getElementById(player.name + "_box").checked = false;
                addLocalStorage();
                break
            }
        }
        i++;
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
        let i = 0;
        for (let player of players) {
            if (document.getElementById(player.name + "_box").checked === true){
                if (i === 0){
                    document.getElementById(players[players.length - 1].name + "_box").checked = true;
                    document.getElementById(player.name + "_box").checked = false;
                    addLocalStorage();
                    break
                } else {
                    document.getElementById(players[i-1].name + "_box").checked = true;
                    document.getElementById(player.name + "_box").checked = false;
                    addLocalStorage();
                    break
                }
            }
            i++;
        }
        if (players[0].pointsHistoryArray.length === 0) {
            document.getElementById("cancel").disabled = true;
            clearLocalStorage();
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

        for (let i in players) {
            i = parseInt(i);
            if (i === 0) {
                document.getElementById(players[i].name + "_box").checked = true;
            } else {
                document.getElementById(players[i].name + "_box").checked = false;
            }
        }

        if(confirm("Voulez vous reinitialiser les noms ?")) {
            localStorage.clear()
        } else {
            clearLocalStorage()
        }

        location.reload();
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
        newP1.innerText = player.newname;

        let newInput = document.createElement("input");
        newInput.type = "number";
        newInput.classList.add("inputPoints");
        newInput.id = player.name + "_input";

        let newBox = document.createElement("input");
        newBox.type = "radio";
        newBox.classList.add("box");
        newBox.id = player.name + "_box";
        newBox.disabled = true;
        newBox.name = "distrib";
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
        newDiv.append(newBox);
        newDiv.append(newP2);
        newDiv.append(newTextArea);

        body.append(newDiv);
    }



    let newDivParam = document.createElement("div");
    newDivParam.classList.add("param");
    newDivParam.id = "param";
    newDivParam.style.display = "none";

    let newH2Name = document.createElement("h2");
    newH2Name.textContent = "Modifier le nom des joueurs";

    newDivParam.append(newH2Name);

    let newList = document.createElement("select");
    newList.classList.add("selectname");
    newList.id = "selectname";

    for (let player of players) {
        let newOption = document.createElement("option");
        newOption.classList.add("option");
        newOption.id = player.name + "_option";
        newOption.value = player.newname;
        newOption.textContent = player.newname;

        newList.append(newOption);
    }

    newDivParam.append(newList);

    function change_name() {
        var selectname = document.getElementById("selectname");
                var choicename = selectname.selectedIndex;
                var name = selectname.options[choicename].value;
                let newname = document.getElementById("modifname").value;
                document.getElementById("modifname").value = "";
                for (let player of players) {
                    if (name === player.newname) {
                        player.newname = newname;
                        addLocalStorage();
                        location.reload();
            }
        }
    }

    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.id = "modifname";
    newInput.classList.add("inputname");

    newDivParam.append(newInput);

    let newButton = document.createElement("input");
    newButton.type = "button";
    newButton.classList.add("button");
    newButton.value = "Enregistrer";
    newButton.onclick = change_name;

    newDivParam.append(newButton);

    let newH2Number = document.createElement("h2");
    newH2Number.textContent = "Modifier le nombre de joueurs";

    newDivParam.append(newH2Number);

    let newSelectNumber = document.createElement("select");
    newSelectNumber.classList.add("selectname");
    newSelectNumber.id = "selectnumber";

    for (let i = 1; i <= 10; i++) {
        let newOption = document.createElement("option");
        newOption.id = i;
        newOption.value = i;
        newOption.textContent = i + " joueurs";
        if (i === player_selected) {
            newOption.selected = true
        } else {
            newOption.selected = false
        }

        newSelectNumber.append(newOption);
    }

    newDivParam.append(newSelectNumber);

    let newButtonPlayer = document.createElement("input");
    newButtonPlayer.type = "button";
    newButtonPlayer.value = "Confirmer";
    newButtonPlayer.classList.add("button");
    newButtonPlayer.onclick = playernumber;

    newDivParam.append(newButtonPlayer);

    function playernumber() {
        var selectnumber = document.getElementById("selectnumber");
        var choicenumber = selectnumber.selectedIndex;
        player_selected = selectnumber.options[choicenumber].value;
        addLocalStorage();
        location.reload();
    }

    let newP = document.createElement("h2");
    newP.textContent = "Afficher qui distribue";

    newDivParam.append(newP);

    let newBox = document.createElement("input");
    newBox.type = "checkbox";
    newBox.classList.add("box");
    newBox.onclick = box;
    newBox.checked = true;
    newBox.id = "boxDistrib";

    newDivParam.append(newBox);

    function box() {
        if (document.getElementById("boxDistrib").checked === false) {
            for (let player of players) {
                document.getElementById(player.name + "_box").style.display = "none";
                document.getElementById("pModif").style.display = "none";
                document.getElementById("boxDistribModif").style.display = "none";
            }
        } else {
            for (let player of players) {
                document.getElementById(player.name + "_box").style.display = "inline-block";
                document.getElementById("pModif").style.display = "inline-block";
                document.getElementById("boxDistribModif").style.display = "inline-block";
            }
        }
    }

    newP = document.createElement("h2");
    newP.textContent = "Activer la modification de qui distribue";
    newP.id = "pModif";

    newDivParam.append(newP);

    newBox = document.createElement("input");
    newBox.type = "checkbox";
    newBox.classList.add("box");
    newBox.onclick = boxModif;
    newBox.checked = false;
    newBox.id = "boxDistribModif";

    newDivParam.append(newBox);

    function boxModif() {
        if (document.getElementById("boxDistribModif").checked === false) {
            for (let player of players) {
                document.getElementById(player.name + "_box").disabled = true;
            }
        } else {
            for (let player of players) {
                document.getElementById(player.name + "_box").disabled = false;
            }
        }
    }



    let newDiv = document.createElement("div");
    newDiv.classList.add("buttons");
    newDiv.id = "buttons";

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

    let newButtonParam = document.createElement("input");
    newButtonParam.classList.add("button");
    newButtonParam.id = "settings";
    newButtonParam.value = "Paramètres";
    newButtonParam.type = "button";
    newButtonParam.onclick = param;

    newDiv.append(newButtonCancel);
    newDiv.append(newButtonAdd);
    newDiv.append(newButtonReset);
    newDiv.append(newButtonParam);
    body.append(newDiv);
    body.append(newDivParam);
    
    
    function param() {
        if (document.getElementById("param").style.display === "none") {
            document.getElementById("param").style.display = "flex";
        } else {
            document.getElementById("param").style.display = "none";
        }
    }
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