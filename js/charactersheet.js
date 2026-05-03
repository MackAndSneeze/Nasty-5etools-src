/**
 * @param {number} level
 */
function getProfBonus(level) {
	return Math.floor((level - 1) / 4) + 2;
}

/**
 * @param {number} stat
 */
function getStatBonus(stat) {
  return Math.floor((stat - 10) / 2);
}

class CharacterSheet {
  static _init() {
    this._initStats();
    this._initDropdown();
  }

  static _initStats() {

  }
  static _initDropdown() {
    var statBoxBtn = document.getElementsByClassName("sheet__box-btn");
    var i;

    for (i = 0; i < statBoxBtn.length; i++) {
      statBoxBtn[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var collapsible = this.previousElementSibling;
        var caret_btn = this.lastElementChild;
        if (collapsible.style.display === "block") {
          collapsible.style.display = "none";
          caret_btn.style.transform = "rotate(0deg)";
        } else {
          collapsible.style.display = "block";
          caret_btn.style.transform = "rotate(180deg)";
        }
      });
    }
  }
}


const levelInput = document.getElementById("level");
const strInput = document.getElementById("str");
const dexInput = document.getElementById("dex");
const conInput = document.getElementById("con");
const intInput = document.getElementById("int");
const wisInput = document.getElementById("wis");
const chaInput = document.getElementById("cha");
const profDisplay = document.getElementById("profBonus");
const strDisplay = document.getElementById("strBonus");
const dexDisplay = document.getElementById("dexBonus");
const conDisplay = document.getElementById("conBonus");
const intDisplay = document.getElementById("intBonus");
const wisDisplay = document.getElementById("wisBonus");
const chaDisplay = document.getElementById("chaBonus");



function renderProfBonus() {
  const level = Number(levelInput.value);
  const prof = getProfBonus(level);

  profDisplay.textContent = "+" + prof;
}

function renderStrBonus() {
  const str = Number(strInput.value);
  const strBonus = getStatBonus(str);

  strDisplay.textContent = "+" + strBonus;
  if (strBonus <= 0) strDisplay.textContent = strBonus;
}

function renderDexBonus() {
  const dex = Number(dexInput.value);
  const dexBonus = getStatBonus(dex);

  dexDisplay.textContent = "+" + dexBonus;
  if (dexBonus <= 0) dexDisplay.textContent = dexBonus;
}

function renderConBonus() {
  const con = Number(conInput.value);
  const conBonus = getStatBonus(con);

  conDisplay.textContent = "+" + conBonus;
  if (conBonus <= 0) conDisplay.textContent = conBonus;
}

function renderIntBonus() {
  const int = Number(intInput.value);
  const intBonus = getStatBonus(int);

  intDisplay.textContent = "+" + intBonus;
  if (intBonus <= 0) intDisplay.textContent = intBonus;
}

function renderWisBonus() {
  const wis = Number(wisInput.value);
  const wisBonus = getStatBonus(wis);

  wisDisplay.textContent = "+" + wisBonus;
  if (wisBonus <= 0) wisDisplay.textContent = wisBonus;
}

function renderChaBonus() {
  const cha = Number(chaInput.value);
  const chaBonus = getStatBonus(cha);

  chaDisplay.textContent = "+" + chaBonus;
  if (chaBonus <= 0) chaDisplay.textContent = chaBonus;
}

levelInput.addEventListener("input", render);
strInput.addEventListener("input", renderStrBonus);
dexInput.addEventListener("input", renderDexBonus);
conInput.addEventListener("input", renderConBonus);
intInput.addEventListener("input", renderIntBonus);
wisInput.addEventListener("input", renderWisBonus);
chaInput.addEventListener("input", renderChaBonus);

function render() {
  renderProfBonus();
  renderStrBonus();
  renderDexBonus();
  renderConBonus();
  renderIntBonus();
  renderWisBonus();
  renderChaBonus();
}

render();

CharacterSheet._init();