/**
 * @param {number} stat
 */
function getStatBonus(stat) {
  	return Math.floor((stat - 10) / 2);
}

class CharacterSheet {
  	static _init() {
		this._initStats();
		this._initProf();
		this._initDropdown();
  }

	static _initProf() {
		const levelInput = document.getElementById("level");
		const profDisplay = document.getElementById("profBonus");

		/**
		 * @param {number} level
		 */
		function getProfBonus(level) {
			return Math.floor((level - 1) / 4) + 2;
		}

		function renderProfBonus() {
			const level = Number(levelInput.value);
			const prof = getProfBonus(level);

			profDisplay.textContent = "+" + prof;
		}

		levelInput.addEventListener("input", renderProfBonus);

		renderProfBonus();
  	}

	static _initStats() {
		var statInput = document.getElementsByClassName("sheet__input-stat");
		var i;

		/**
		 * @param {number} stat
		 */
		function getStatBonus(stat) {
		return Math.floor((stat - 10) / 2);
		}

		for (i = 0; i < statInput.length; i++) {
		/**
		 * @param {Element} stat
		 */
		function renderStatBonus(stat) {
			const statDisplay = stat.previousElementSibling;
			const statBonus = getStatBonus(stat.value);

			statDisplay.textContent = statBonus > 0 ? "+" + statBonus : statBonus;
		}

		statInput[i].addEventListener("input", function() {
			renderStatBonus(this);
		});

		renderStatBonus(statInput[i]);
		}
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

CharacterSheet._init();