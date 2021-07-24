// Déclare les variables

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
var names;
var href;

// Check si le localStorage est vide ou non

	if (localStorage.getItem("name") === null && localStorage.getItem("url") === null) {

// Complete les url par defaut

        var href = ["http://www.google.fr/",
            "https://mail.google.com/mail/",
            "https://meet.google.com/",
            "https://drive.google.com/",
            "https://ent.ac-poitiers.fr",
        ]

// Met les url dans le localStorage
	/*
	var href_mem = JSON.stringify(href);
	localStorage.setItem("url",href_mem);
	*/
// Complete les noms liés aux url par defaut
	
        var names = ["Google", "Gmail", "Google meet", "Drive", "LOL"]
	
// Met les noms dans le localStorage
	/*
	var names_mem = JSON.stringify(names);
        localStorage.setItem("name",names_mem);
	*/
    } else {

// Met les url et noms dans les variables a partir du localStorage

	var href_mem = localStorage.getItem("url");
	var href = JSON.parse(href_mem);
	var names_mem = localStorage.getItem("name");
        var names = JSON.parse(names_mem);
	
    }

    var len = href.length - 1;

	document.write("<div id=\"lien\">");

// Affiche les differents liens

    for (var i = 0; i <= len; i++) {
	document.write("<div class=\"liens\"><input type=\"checkbox\" id=\"box" + i + "\" class=\"box\"><a class=\"lien\" title=\"" + href[i] + "\" href=\"" + href[i] + "\">" + names[i] + "</a></div>")
    }
    
    document.write("<div class=\"liens\"><input type=\"button\" class=\"lien\" id=\"plus\" value='+' onClick=\"plus()\" ></div>");
    
    document.write("</div>");

// Affiche les differents parametres que l'utisilateur peut modifier

	/*document.write("<div style=\"text-align:center;\">")*/

	document.write("<div id=\"param\">");

    document.write("<p class=\"in\">Entrez le nom du site : </p><input type=\"textarea\" id=\"name\" class=\"suppr\">");

    document.write("<p class=\"in\">Entrez l'url du site : </p><input type=\"textarea\" id=\"url\" class=\"suppr\">");

    document.write("<input type=\"button\" value=\"Ajouter\" onClick=\"add()\" class=\"supprim\">");

	document.write("<input type=\"button\" id=\"supron\" value=\"Activer la supression\" onClick=\"supron()\" class=\"supprim\">");

	document.write("<input type=\"button\" id=\"suproff\" style=\"display:none\" value=\"Désactiver la supression\" onClick=\"suproff()\" class=\"supprim\">");

	document.write("<input type=\"button\" id=\"supr\" style=\"display:none\" value=\"Supprimer les éléments sélectionnés\" onClick=\"supr()\" class=\"supprim\">");

	document.write("<input type=\"button\" value=\"Annuler toutes les modifications\" onClick=\"annul()\" class=\"supprim\">");

	document.write("<p>(Toute modification sera appliquée en local)</p>");
	
	document.write("</div>");

	/*document.write("</div>")*/

// Fonction pour ajouter des liens a la liste

    function add() {
	if (document.getElementById("name").value=="" || document.getElementById("url").value=="https://"){
		alert("Vous ne pouvez pas rien ajouter !!!")
		} else {
        var name = document.getElementById("name").value
        var url = document.getElementById("url").value
        document.getElementById("name").value = ""
        document.getElementById("url").value = ""
        names.push(name)
	href.push(url)
	localStorage.clear()
	var href_mem = JSON.stringify(href);
        localStorage.setItem("url",href_mem);
	var names_mem = JSON.stringify(names);
        localStorage.setItem("name",names_mem);
	location.reload()
		}
    }

// Fonction pour supprimer les liens selectionnes

    function supr() {
        if (confirm("Etes vous sûr de vouloir supprimer les sites sélectionnés ?")) {
            /*names.pop()
            href.pop()*/
			       var t = 0
			       for (i=0; i < names.length; i++) {
			       if (document.getElementById("box" + i).checked == true){
				names.splice(i-t,1)
			       href.splice(i-t,1)
			        t = t + 1
			       }
			       }
	    localStorage.clear()
	    var href_mem = JSON.stringify(href);
            localStorage.setItem("url",href_mem);
    	    var names_mem = JSON.stringify(names);
   	    localStorage.setItem("name",names_mem);
	    location.reload()
        }
    }

// Fonctions pour afficher ou cacher les differents button (supprimer lien, activer modifications...)

	function supron() {
		for (i=0; i < names.length; i++) {
			document.getElementById("box" + i).style.display = "flex";
			}
		document.getElementById("suproff").style.display = "flex";
		document.getElementById("supron").style.display = "none";
		document.getElementById("supr").style.display = "flex";
	}

	function suproff() {
		for (i=0; i < names.length; i++) {
                        document.getElementById("box" + i).style.display = "none";
                        }
		document.getElementById("suproff").style.display = "none";
                document.getElementById("supron").style.display = "flex";
		document.getElementById("supr").style.display = "none";
	}

// Fonction pour remettre les valeurs (noms et url) par defaut (comme definis au debut)

    function annul() {
		    if (confirm("Etes vous sûr de vouloir annuler toutes les modifications ?")) {
		localStorage.clear()
		location.reload()
			    }
    }
    
    async function plus() {
    if (document.getElementById("param").style.display == "flex") {
    document.getElementById("param").style.animationDuration = "1s"
    document.getElementById("param").style.animationName = "disparition"
    await sleep(990)
    document.getElementById("param").style.display = "none"
    } else {
    document.getElementById("param").style.display = "flex"
    document.getElementById("param").style.animationDuration = "1s"
    document.getElementById("param").style.animationName = "apparition"
    }
    }
