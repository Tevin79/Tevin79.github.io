// Déclare les variables

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
let names;
let href;

// Check si le localStorage est vide ou non

	if (localStorage.getItem("name") === null && localStorage.getItem("url") === null) {

// Complete les url par defaut

        href = ["http://www.google.fr/",
            "https://mail.google.com/mail/",
            "https://meet.google.com/",
            "https://drive.google.com/",
            "https://ent.ac-poitiers.fr",
        ];

// Met les url dans le localStorage
	/*
	var href_mem = JSON.stringify(href);
	localStorage.setItem("url",href_mem);
	*/
// Complete les noms liés aux url par defaut
	
        names = ["Google", "Gmail", "Google meet", "Drive", "LOL"]
	
// Met les noms dans le localStorage
	/*
	var names_mem = JSON.stringify(names);
        localStorage.setItem("name",names_mem);
	*/
    } else {

// Met les url et noms dans les variables a partir du localStorage

	let href_mem = localStorage.getItem("url");
	href = JSON.parse(href_mem);
	let names_mem = localStorage.getItem("name");
	names = JSON.parse(names_mem);
	
    }

    let len = href.length - 1;

	const body = document.querySelector("#body");

	//document.write("<div id=\"lien\">");
	let newDivLien = document.createElement("div");
	newDivLien.id = "lien";

// Affiche les differents liens

    for (let i = 0; i <= len; i++) {
    	let newDivLiens = document.createElement("div");
    	newDivLiens.classList.add("liens");
    	let newInputBox = document.createElement("input");
    	newInputBox.type = "checkbox";
    	newInputBox.classList.add("box");
    	newInputBox.id = "box" + i;
    	let newALien = document.createElement("a");
    	newALien.classList.add("lien");
    	newALien.title = href[i];
    	newALien.href = href[i];
    	newALien.text = names[i];

		newDivLiens.append(newALien);
    	newDivLiens.append(newInputBox);
    	newDivLien.append(newDivLiens);
	//document.write("<div class=\"liens\"><input type=\"checkbox\" id=\"box" + i + "\" class=\"box\"><a class=\"lien\" title=\"" + href[i] + "\" href=\"" + href[i] + "\">" + names[i] + "</a></div>")
    }

    let newDivLiens = document.createElement("div");
    newDivLiens.classList.add("liens");
newDivLiens.style.display = "block";
newDivLiens.style.width = "100%";
newDivLiens.style.textAlign = "center";
    let newInputButton = document.createElement("input");
    newInputButton.type = "button";
    newInputButton.classList.add("lien");
    newInputButton.id = "plus";
    newInputButton.value = "Paramètres";
    newInputButton.onclick = plus;
    
    //document.write("<div class=\"liens\"><input type=\"button\" class=\"lien\" id=\"plus\" value='+' onClick=\"plus()\" ></div>");

    newDivLiens.append(newInputButton);
    newDivLien.append(newDivLiens);
    body.append(newDivLien);

let newDivLienModif = document.createElement("div");
newDivLienModif.id = "liens";
newDivLienModif.style.display = "none";

for (let i = 0; i <= len; i++) {
	let newPLienName = document.createElement("p");
	newPLienName.textContent = "Nom du site :";
	newDivLiens = document.createElement("div");
	newDivLiens.classList.add("liens");
	let newDivName = document.createElement("input");
	newDivName.type = "textarea";
	newDivName.classList.add("suppr");
	newDivName.id = "names" + i;
	newDivName.value = names[i];
	newDivName.style.textAlign = "center";
	let newPLienUrl = document.createElement("p");
	newPLienUrl.textContent = "URL du site :";
	let newDivUrl = document.createElement("input");
	newDivUrl.type = "textarea";
	newDivUrl.classList.add("suppr");
	newDivUrl.id = "href" + i;
	newDivUrl.value = href[i];
	newDivUrl.style.textAlign = "center";

	newDivLiens.append(newPLienName);
	newDivLiens.append(newDivName);
	newDivLiens.append(newPLienUrl);
	newDivLiens.append(newDivUrl);
	newDivLienModif.append(newDivLiens);
}

newDivLien = document.createElement("div");
newDivLien.classList.add("liens");
newDivLien.style.display = "block";
newDivLien.style.width = "100%";
newDivLien.style.textAlign = "center";
newInputButton = document.createElement("input");
newInputButton.type = "button";
newInputButton.classList.add("lien");
newInputButton.id = "plus";
newInputButton.value = "Paramètres";
newInputButton.onclick = plus;

newDivLien.append(newInputButton);
newDivLienModif.append(newDivLien);
body.append(newDivLienModif);


    //document.write("</div>");



// Affiche les differents parametres que l'utilisateur peut modifier

	/*document.write("<div style=\"text-align:center;\">")*/

	let newDivParam = document.createElement("div");
	newDivParam.id = "param";

	let newPName = document.createElement("p");
	newPName.classList.add("in");
	newPName.id = "namep";
	newPName.textContent = "Entrez le nom du site : ";

	newDivParam.append(newPName);

	let newInputName = document.createElement("input");
	newInputName.type = "textarea";
	newInputName.id = "name";
	newInputName.classList.add("suppr");

	newDivParam.append(newInputName);

	let newPUrl = document.createElement("p");
	newPUrl.classList.add("in");
	newPUrl.id = "urlp";
	newPUrl.textContent = "Entrez l'url du site : ";

	newDivParam.append(newPUrl);

	let newInputUrl = document.createElement("input");
	newInputUrl.type = "textarea";
	newInputUrl.id = "url";
	newInputUrl.classList.add("suppr");

	newDivParam.append(newInputUrl);

	let newInputButtonAdd = document.createElement("input");
	newInputButtonAdd.type = "button";
	newInputButtonAdd.value = "Ajouter";
	newInputButtonAdd.onclick = add;
	newInputButtonAdd.classList.add("supprim");

	newDivParam.append(newInputButtonAdd);

	let newInputButtonSupprOn = document.createElement("input");
	newInputButtonSupprOn.type = "button";
	newInputButtonSupprOn.id = "supron";
	newInputButtonSupprOn.value = "Activer la suppression";
	newInputButtonSupprOn.onclick = supron;
	newInputButtonSupprOn.classList.add("supprim");

	newDivParam.append(newInputButtonSupprOn);

	let newInputButtonSupprOff = document.createElement("input");
	newInputButtonSupprOff.type = "button";
	newInputButtonSupprOff.id = "suproff";
	newInputButtonSupprOff.style.display = "none";
	newInputButtonSupprOff.value = "Désactiver la supression";
	newInputButtonSupprOff.onclick = suproff;
	newInputButtonSupprOff.classList.add("supprim");

	newDivParam.append(newInputButtonSupprOff);

	let newInputButtonSuppr = document.createElement("input");
	newInputButtonSuppr.type = "button";
	newInputButtonSuppr.id = "supr";
	newInputButtonSuppr.style.display = "none";
	newInputButtonSuppr.value = "Supprimer les éléments sélectionnés";
	newInputButtonSuppr.onclick = supr;
	newInputButtonSuppr.classList.add("supprim");

	newDivParam.append(newInputButtonSuppr);
	
	let newInputButtonModifOn = document.createElement("input");
	newInputButtonModifOn.type = "button";
	newInputButtonModifOn.id = "modifon";
	newInputButtonModifOn.value = "Activer la modification des sites";
	newInputButtonModifOn.onclick = modifon;
	newInputButtonModifOn.classList.add("supprim");

	newDivParam.append(newInputButtonModifOn);

	let newInputButtonModifOff = document.createElement("input");
	newInputButtonModifOff.type = "button";
	newInputButtonModifOff.id = "modifoff";
	newInputButtonModifOff.style.display = "none";
	newInputButtonModifOff.value = "Désactiver la modification des sites";
	newInputButtonModifOff.onclick = modifoff;
	newInputButtonModifOff.classList.add("supprim");

	newDivParam.append(newInputButtonModifOff);

	let newInputButtonModifSave = document.createElement("input");
	newInputButtonModifSave.type = "button";
	newInputButtonModifSave.id = "modifsave";
	newInputButtonModifSave.style.display = "none";
	newInputButtonModifSave.value = "Enregistrer les modifications";
	newInputButtonModifSave.onclick = modifsave;
	newInputButtonModifSave.classList.add("supprim");

	newDivParam.append(newInputButtonModifSave);

	let newInputButtonAnnul = document.createElement("input");
	newInputButtonAnnul.type = "button";
	newInputButtonAnnul.value = "Annuler toutes les modifications";
	newInputButtonAnnul.onclick = annul;
	newInputButtonAnnul.classList.add("supprim");

	newDivParam.append(newInputButtonAnnul);

	let newP = document.createElement("p");
	newP.textContent = "(Toute modification sera appliquée en local)";

	newDivParam.append(newP);

	body.append(newDivParam);

	//document.write("<div id=\"param\">");

    //document.write("<p class=\"in\">Entrez le nom du site : </p><input type=\"textarea\" id=\"name\" class=\"suppr\">");

    //document.write("<p class=\"in\">Entrez l'url du site : </p><input type=\"textarea\" id=\"url\" class=\"suppr\">");

    //document.write("<input type=\"button\" value=\"Ajouter\" onClick=\"add()\" class=\"supprim\">");

	//document.write("<input type=\"button\" id=\"supron\" value=\"Activer la supression\" onClick=\"supron()\" class=\"supprim\">");

	//document.write("<input type=\"button\" id=\"suproff\" style=\"display:none\" value=\"Désactiver la supression\" onClick=\"suproff()\" class=\"supprim\">");

	//document.write("<input type=\"button\" id=\"supr\" style=\"display:none\" value=\"Supprimer les éléments sélectionnés\" onClick=\"supr()\" class=\"supprim\">");

	//document.write("<input type=\"button\" value=\"Annuler toutes les modifications\" onClick=\"annul()\" class=\"supprim\">");

	//document.write("<p>(Toute modification sera appliquée en local)</p>");
	
	//document.write("</div>");

	/*document.write("</div>")*/

// Fonction pour ajouter des liens a la liste

    function add() {
	if (document.getElementById("name").value==="" || document.getElementById("url").value===""){
		alert("Vous ne pouvez pas rien ajouter !!!")
		} else {
        let name = document.getElementById("name").value;
        let url = document.getElementById("url").value;
        document.getElementById("name").value = "";
        document.getElementById("url").value = "";
        names.push(name);
	href.push(url);
		localStorage.removeItem("name");
		localStorage.removeItem("url");
	let href_mem = JSON.stringify(href);
        localStorage.setItem("url",href_mem);
	let names_mem = JSON.stringify(names);
        localStorage.setItem("name",names_mem);
	location.reload()
		}
    }

// Fonction pour supprimer les liens selectionnes

    function supr() {
        if (confirm("Etes vous sûr de vouloir supprimer les sites sélectionnés ?")) {
            /*names.pop()
            href.pop()*/
			       let t = 0;
			       for (let i=0; i < names.length; i++) {
			       if (document.getElementById("box" + i).checked === true){
				names.splice(i-t,1);
			       href.splice(i-t,1);
			        t = t + 1
			       }
			       }
			localStorage.removeItem("name");
			localStorage.removeItem("url");
	    let href_mem = JSON.stringify(href);
            localStorage.setItem("url",href_mem);
    	    let names_mem = JSON.stringify(names);
   	    localStorage.setItem("name",names_mem);
	    location.reload()
        }
    }

// Fonctions pour afficher ou cacher les differents button (supprimer lien, activer modifications...)

	function supron() {
    	modifoff();
		for (let i=0; i < names.length; i++) {
			document.getElementById("box" + i).style.display = "flex";
			}
		document.getElementById("suproff").style.display = "flex";
		document.getElementById("supron").style.display = "none";
		document.getElementById("supr").style.display = "flex";
		document.getElementById("namep").style.display = "none";
		document.getElementById("name").style.display = "none";
		document.getElementById("urlp").style.display = "none";
		document.getElementById("url").style.display = "none";
	}

	function suproff() {
		for (let i=0; i < names.length; i++) {
                        document.getElementById("box" + i).style.display = "none";
                        }
		document.getElementById("suproff").style.display = "none";
                document.getElementById("supron").style.display = "flex";
		document.getElementById("supr").style.display = "none";
		document.getElementById("namep").style.display = "inline-block";
		document.getElementById("name").style.display = "inline-block";
		document.getElementById("urlp").style.display = "inline-block";
		document.getElementById("url").style.display = "inline-block";
	}
	
	function modifon() {
    	suproff();
		document.getElementById("modifon").style.display = "none";
		document.getElementById("modifoff").style.display = "inline-block";
		document.getElementById("modifsave").style.display = "inline-block";
		document.getElementById("liens").style.display = "flex";
		document.getElementById("lien").style.display = "none";
		document.getElementById("namep").style.display = "none";
		document.getElementById("name").style.display = "none";
		document.getElementById("urlp").style.display = "none";
		document.getElementById("url").style.display = "none";
	}

	function modifoff() {
		document.getElementById("modifon").style.display = "inline-block";
		document.getElementById("modifoff").style.display = "none";
		document.getElementById("modifsave").style.display = "none";
		document.getElementById("liens").style.display = "none";
		document.getElementById("lien").style.display = "flex";
		document.getElementById("namep").style.display = "inline-block";
		document.getElementById("name").style.display = "inline-block";
		document.getElementById("urlp").style.display = "inline-block";
		document.getElementById("url").style.display = "inline-block";
	}

	function modifsave() {
		for (let i=0; i < names.length; i++) {
			names[i] = document.getElementById("names" + i).value;
			href[i] = document.getElementById("href" + i).value;
		}
		localStorage.removeItem("name");
		localStorage.removeItem("url");
		let href_mem = JSON.stringify(href);
		localStorage.setItem("url",href_mem);
		let names_mem = JSON.stringify(names);
		localStorage.setItem("name",names_mem);
		location.reload();
	}

// Fonction pour remettre les valeurs (noms et url) par defaut (comme definis au debut)

    function annul() {
		    if (confirm("Etes vous sûr de vouloir annuler toutes les modifications ?")) {
				localStorage.removeItem("name");
				localStorage.removeItem("url");
		location.reload()
			    }
    }
    
    async function plus() {
    if (document.getElementById("param").style.display === "flex") {
    document.getElementById("param").style.display = "none"
    } else {
    document.getElementById("param").style.display = "flex";
    }
    }
