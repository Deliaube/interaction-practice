console.log("game_repo_one_test1");
/*
function selectIcon(iconType) {
    // Rimuovi la classe "selected-icon" da tutte le icone
    document.getElementById("sheepIcon").classList.remove("selected-icon");
    document.getElementById("wolfIcon").classList.remove("selected-icon");
    document.getElementById("lettuceIcon").classList.remove("selected-icon");
  
    // Aggiungi la classe "selected-icon" all'icona selezionata
    document.getElementById(`${iconType}Icon`).classList.add("selected-icon");
  
    // Memorizza l'icona selezionata
    selectedIcon = iconType;
  } */
  /*
  function confirmChoice() {
    const sheepIconElement = document.getElementById("sheepIcon");
    const wolfIconElement = document.getElementById("wolfIcon");
    const lettuceIconElement = document.getElementById("lettuceIcon");
    const selectedChoiceTextElement = document.getElementById("selectedChoiceText");
  
    if (selectedIcon === "sheepIcon" && wolfIconElement.classList.contains("selected-icon")) {
      selectedChoiceTextElement.innerText = "Il lupo mangerà la pecora!";
    } else if (selectedIcon === "wolfIcon" && lettuceIconElement.classList.contains("selected-icon")) {
      selectedChoiceTextElement.innerText = "Good! Il lupo protegge l'insalata.";
    } else if (selectedIcon === "sheepIcon" && lettuceIconElement.classList.contains("selected-icon")) {
      alert("Bad! Addio insalata.");
    } else {
      alert("Scelta non valida. Riprova.");
    }
  }
  */
/*
  function confirmedChoice() {
    const sheepIconElement = document.getElementById("sheepIcon");
    const wolfIconElement = document.getElementById("wolfIcon");
    const lettuceIconElement = document.getElementById("lettuceIcon");
  
    const selectedIcons = [sheepIconElement, wolfIconElement, lettuceIconElement].filter(icon => icon.classList.contains("selected-icon"));
  
    if (selectedIcons.length === 2) {
      if (selectedIcons.includes(wolfIconElement) && selectedIcons.includes(sheepIconElement)) {
        return "Il lupo mangerà la pecora";
      } else if (selectedIcons.includes(sheepIconElement) && selectedIcons.includes(lettuceIconElement)) {
        return "La pecora mangerà l'insalata";
      } else if (selectedIcons.includes(wolfIconElement) && selectedIcons.includes(lettuceIconElement)) {
        return "Nessuno mangia nessuno";
      }
    }
  
    return "Scelta non valida. Seleziona esattamente due icone.";
  }*/

  let selectedElements = [];

function handleChoiceSelection(element) {
  const elementId = element.id;

  // Se l'elemento è già selezionato, rimuovilo dalla selezione
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    selectedElements = selectedElements.filter(selectedElement => selectedElement !== elementId);
  } else {
    // Se l'elemento non è già selezionato e abbiamo meno di 2 elementi selezionati, aggiungilo alla selezione
    if (selectedElements.length < 2) {
      element.classList.add('selected');
      selectedElements.push(elementId);
    }
  }
}

function confirmChoice() {
  if (selectedElements.length === 2) {
    const [firstSelected, secondSelected] = selectedElements;

    if (firstSelected === "wolfIcon" && secondSelected === "sheepIcon") {
      alert("Il lupo mangerà la pecora");
    } else if (firstSelected === "sheepIcon" && secondSelected === "lettuceIcon") {
      alert("La pecora mangerà l'insalata");
    } else if (firstSelected === "wolfIcon" && secondSelected === "lettuceIcon") {
      alert("Nessuno mangia nessuno");
    }
  } else {
    alert("Seleziona esattamente due opzioni.");
  }
}


  