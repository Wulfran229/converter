let euros = document.getElementById("euros");
let dollars = document.getElementById("dollars");
let oxf = document.getElementById("oxf");

euros.addEventListener("input", function() { convMonnaie(this.id, this.value); });
dollars.addEventListener("input", function() { convMonnaie(this.id, this.value); });
oxf.addEventListener("input", function() { convMonnaie(this.id, this.value); });

function convMonnaie(id, valeur) {
    if (id == "euros") {
        dollars.value = valeur * 1.21;
        oxf.value = valeur * 665;
    } else if (id == "dollars") {
        euros.value = valeur / 1.21;
        oxf.value = valeur * 550;
    } else if (id == "oxf") {
        euros.value = valeur / 665;
        dollars.value = valeur / 550;
    }
}

let grammes = document.getElementById("grammes");
let kilos = document.getElementById("kilos");
let livres = document.getElementById("livres");

grammes.addEventListener("input", function() { convPoids(this.id, this.value); });
kilos.addEventListener("input", function() { convPoids(this.id, this.value); });
livres.addEventListener("input", function() { convPoids(this.id, this.value); });

function convPoids(id, valeur) {
    if (id == "grammes") {
        kilos.value = valeur / 1000;
        livres.value = valeur * 0.0022046;
    } else if (id == "kilos") {
        grammes.value = valeur * 1000;
        livres.value = valeur * 2.2046;
    } else if (id == "livres") {
        grammes.value = valeur / 0.0022046;
        kilos.value = valeur / 2.2046;
    }
}