console.log("game_repo_one");
let selectedIcon = null;

function handleChoiceSelection(iconType) {
  // Rimuovi la classe "selected-icon" da tutte le icone
  document.getElementById("sheepIcon").classList.remove("selected-icon");
  document.getElementById("wolfIcon").classList.remove("selected-icon");
  document.getElementById("lettuceIcon").classList.remove("selected-icon");

  // Aggiungi la classe "selected-icon" all'icona selezionata
  document.getElementById(`${iconType}Icon`).classList.add("selected-icon");

  // Memorizza l'icona selezionata
  selectedIcon = iconType;
}
/*
function confirmChoice() {
    if (selectedIcon) {
      const selectedChoiceText = `Hai scelto: ${selectedIcon}`;
      document.getElementById("selectedChoiceText").innerText = selectedChoiceText;
      alert(selectedChoiceText);
    } else {
      alert("Si prega di selezionare un'icona prima di confermare la scelta.");
    }
  }
  */
/*
function confirmChoice (){ //MIO CODICE SBAGLIATO
    if (selectedIcon === sheepIcon + wolfIcon) {
      return selectedChoiceText = `Hai scelto: ${selectedIcon}`;
    } else if (selectedIcon === wolfIcon + lettuceIcon) {
      alert("Good! Il lupo protegge l'insalata.");
      else (selectedIcon === sheepIconIcon + lettuceIcon) {
        alert("Bad! goodbay insalata");
    } 
}
}
*/

function confirmChoice() {
    const sheepIconElement = document.getElementById("sheepIcon");
    const wolfIconElement = document.getElementById("wolfIcon");
    const lettuceIconElement = document.getElementById("lettuceIcon");
  
    if (
      selectedIcon === sheepIconElement ||
      selectedIcon === wolfIconElement
    ) {
      alert(`Hai scelto: ${selectedIcon.alt}`);
    } else if (
      selectedIcon === wolfIconElement &&
      selectedIcon === lettuceIconElement
    ) {
      alert("Good! Il lupo protegge l'insalata.");
    } else if (
      selectedIcon === sheepIconElement &&
      selectedIcon === lettuceIconElement
    ) {
      alert("Bad! Addio insalata.");
    } else {
      alert("Scelta non valida. Riprova.");
    }

    selectedIcon = iconType; 
  }
  

/*
  function confirmChoice() {
    const { sheep, wolf, lettuce } = selectedIcons;
  
    if ((sheep && lettuce) || (wolf && sheep)) {
      alert("Bad! Il lupo mangerebbe la pecora o la pecora mangerebbe l'insalata.");
    } else if (wolf && lettuce) {
      alert("Good! Il lupo protegge l'insalata.");
    } else {
      alert("Scelta non valida. Riprova.");
    }
  } 
  */
