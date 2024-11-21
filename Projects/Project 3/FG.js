var displayDosnoventa = "none";
var displayEngine = "none";
var displaySkream = "none";

function addHoverEffect(id) {
    var card = document.getElementById(id);

    card.onmouseover = function () {
        card.style.transition = "transform 0.3s ease";
        card.style.transform = "scale(1.05)";
        card.classList.add("shadow");
    };
    card.onmouseout = function () {
        card.style.transform = "scale(1)";
        card.classList.remove("shadow");
    };
}



function showDosnoventaItems() {
    var dosnoventaContainer = document.getElementById("dosnoventaContainer");
    var dosnoventaItemContainer = document.getElementById("dosnoventaItemContainer");
    var btnShowDosnoventa = document.getElementById("btnShowDosnoventa");

    if (displayDosnoventa == "none") {
        dosnoventaContainer.style.display = "block";
        displayDosnoventa = "block";
        btnShowDosnoventa.innerHTML = "X";

        dosnoventaItemContainer.innerHTML = "";

        var images = ["dos1.JPG", "dos3.JPG", "dos2.JPG", "dos4.JPG"];
        var brands = ["Dosnoventa Barcelona", "Dosnoventa Los Angeles", "Dosnoventa Detroit", "Dosnoventa Tokyo"];

        for (var i = 0; i < brands.length; i++) {
            dosnoventaItemContainer.innerHTML +=
                `<div class="col-xl-3 col-md-4 col-sm-6 col-12 my-3">
            <div class="card" id="dosCard` + i + `" onmouseenter="addHoverEffect('dosCard` + i + `')" onmouseleave="removeHoverEffect('dosCard` + i + `')">
                <img src="images/` + images[i] + `" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">` + brands[i] + `</h5>
                </div>
            </div>
        </div>`;
        }

    } else {
        dosnoventaContainer.style.display = "none";
        displayDosnoventa = "none";
        btnShowDosnoventa.innerHTML = "DOSNOVENTA";
    }
}

function showEngineItems() {
    var engineContainer = document.getElementById("engineContainer");
    var engineItemContainer = document.getElementById("engineItemContainer");
    var btnShow = document.getElementById("btnShowEngine");

    if (displayEngine == "none") {
        engineContainer.style.display = "block";
        displayEngine = "block";
        btnShowEngine.innerHTML = "X";

        engineItemContainer.innerHTML = "";

        var images = ["en1.JPG", "en2.JPG", "en3.JPG", "en4.JPG"];
        var brands = ["Engine11 Sprinter", "Engine11 Vortex", "Engine11 Deluxe", "Engine11 Crit-D"];

        for (var i = 0; i < brands.length; i++) {
            engineItemContainer.innerHTML +=
                ` <div class="col-xl-3 col-md-4 col-sm-6 col-12 my-3">
<div class="card" id="engineCard` + i + `" onmouseenter="addHoverEffect('engineCard` + i + `')" onmouseleave="removeHoverEffect('engineCard` + i + `')">
    <img src="images/` + images[i] + `" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">` + brands[i] + `</h5>
    </div>
</div>
</div>`;
        }

    } else {
        engineContainer.style.display = "none";
        displayEngine = "none";
        btnShowEngine.innerHTML = "ENGINE11";
    }
}

function showSkreamItems() {
    var SkreamContainer = document.getElementById("skreamContainer");
    var skreamItemContainer = document.getElementById("skreamItemContainer");
    var btnShowSkream = document.getElementById("btnShowSkream");

    if (displaySkream == "none") {
        skreamContainer.style.display = "block";
        displaySkream = "block";
        btnShowSkream.innerHTML = "X";

        skreamItemContainer.innerHTML = "";

        var images = ["sm1.JPG", "sm2.JPG", "sm3.JPG", "sm4.JPG"];
        var brands = ["Skream Ranger", "Skream Magnum 20", "Skream Magnum 22", "Skream Magnum 24"];

        for (var i = 0; i < brands.length; i++) {
            skreamItemContainer.innerHTML +=
                ` <div class="col-xl-3 col-md-4 col-sm-6 col-12 my-3">
<div class="card" id="skreamCard` + i + `" onmouseenter="addHoverEffect('skreamCard` + i + `')" onmouseleave="removeHoverEffect('skreamCard` + i + `')">
    <img src="images/` + images[i] + `" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">` + brands[i] + `</h5>
    </div>
</div>
</div>`;
        }

    } else {
        skreamContainer.style.display = "none";
        displaySkream = "none";
        btnShowSkream.innerHTML = "SKREAM";
    }
}

var bgColorMode = "light";
function changeBgColorMode() {
    if (bgColorMode == "light") {
        document.getElementById("body").setAttribute("data-bs-theme", "dark");
        document.getElementById("btnMode").innerHTML = "L."
        bgColorMode = "dark";
    } else {
        document.getElementById("body").setAttribute("data-bs-theme", "light");
        document.getElementById("btnMode").innerHTML = "D"
        bgColorMode = "light";
    }
}