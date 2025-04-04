var characterHolder = document.getElementById("characterHolder");
var pageNumber = 1;
var loadingBar = document.getElementById("loadingBar");

const loadCharacter = async () => {
  var startingCount = 1 + (pageNumber - 1) * 20;
  var characterCount = startingCount + 19;

  for (var i = startingCount; i <= characterCount; i++) {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/" + i
    );
    const character = await response.json();
    characterHolder.innerHTML +=
      ` <div class="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
      <a href="view.html?characterName=` +
      character.name +
      `">
          <div class="card">
            <img class="cardImg" src="` +
      character.image +
      `" />
            <div class="textOverlay">
              <h3>` +
      character.name +
      `</h3>
            </div>
          </div>
          </a>
        </div>`;
    loadingBar.style.width = ((i - startingCount + 1) / 20) * 100 + "%";
  }
};

loadCharacter();

function nextPage() {
  characterHolder.innerHTML = "";
  loadingBar.style.width = "0%";
  pageNumber += 1;
  loadCharacter();
}

function prevPage() {
  characterHolder.innerHTML = "";
  loadingBar.style.width = "0%";
  pageNumber -= 1;
  loadCharacter();
}

var bgColorMode = "light";
function changeBgColorMode() {
  if (bgColorMode == "light") {
    document.getElementById("body").setAttribute("data-bs-theme", "dark");
    document.getElementById("btnMode").innerHTML = "Light Mode";
    bgColorMode = "dark";
  } else {
    document.getElementById("body").setAttribute("data-bs-theme", "light");
    document.getElementById("btnMode").innerHTML = "Dark Mode";
    bgColorMode = "light";
  }
}

let goTop = document.getElementById("goTop");
goTop.style.display = "none";
window.addEventListener("scroll", () => {
  if (this.scrollY > 500) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
});
goTop.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
