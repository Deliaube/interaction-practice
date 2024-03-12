console.log("game_repo_one_test2");

let selectedChoices = [];

function handleChoiceSelection(element) {
    if (selectedChoices.length < 2) {
        element.classList.toggle("selected");
    } //questo if potrebbe dover contenere l'intera condizione anche sotto

    const iconSrc = element.querySelector("img").src;
    console.log("Selected Icon Source:", iconSrc);
   // const iconAlt = element.querySelector("img").alt;
    const index = selectedChoices.indexOf(iconSrc);
    if (index > -1) {
        selectedChoices.splice(index, 1);
    } else {
        selectedChoices.push(iconSrc);
    }
    console.log("Selected Choices:", selectedChoices);
}

function compareIcons(icon1, icon2) {
  console.log("Comparing Icons:", icon1, icon2);
     // Restituisci un valore che rappresenta la relazione tra le icone
  // Personalizza questa logica in base alle tue esigenze specifiche
  if (icon1.includes("pecora") && icon2.includes("lupo")) {
    return "sheepWolf";
  } else if (icon1.includes("lupo") && icon2.includes("insalata")) {
    return "wolfLettuce";
  } else if (icon1.includes("pecora") && icon2.includes("insalata")) {
    return "sheepLettuce";
  } else if (icon1.includes("lupo") && icon2.includes("pecora")) {
    return "wolfSheep";
  } else if (icon1.includes("insalata") && icon2.includes("pecora")) {
    return "lettuceSheep";
  } else if (icon1.includes("insalata") && icon2.includes("lupo")) {
     return "lettuceWolf";
    } 
    
  else {
    // Ritorna un valore che indica che le icone non formano una coppia valida
   // console.log("Risultato di pairType:", compareIcons("media/Asheep.png", "media/Awolf.png"));
   console.log("Risultato di pairType:", "invalidPair");
   return"invalidPair";
    //return "pairType";
  }

}

function confirmChoice() {
    const resultTextElement = document.getElementById("resultText");

    if (selectedChoices.length === 2) {  // 2. Verifica se sono state selezionate esattamente due icone
       // const [firstSelected, secondSelected] = selectIcon;
       const [icon1, icon2] = selectedChoices; // 3. Estrai le due icone dalla lista delle selezioni
       //ottieni il tipo di coppia
       const pairType = compareIcons(icon1, icon2);

       //mostra risultati differenti in base alla coppia
       switch (pairType) {
          case "sheepWolf":
            resultTextElement.innerText = "La percora verrà mangiata dal lupo";
            break;
          case "wolfLettuce":
            resultTextElement.innerText = "Il lupo non mangerà l'insalata"; 
            break;
          case "sheepLettuce":
            resultTextElement.innerText = "La pecora mangerà l'insalata";
            break;
          case "wolfSheep":
            resultTextElement.innerText = "Il lupo mangerà la pecora";
            break;
          case "lettuceSheep":
            resultTextElement.innerText = "L'insalata verrà mangiata dalla pecora";
            break;
        case "lettuceWolf":
           resultTextElement.innerText = "L'insalata non verrà mangiata dal lupo";
           break;
        default:
         resultTextElement.innerText = "Nessuno mangia nessuno";
        }
    }

    //resetta le selezioni 
selectedChoices = [];
document.querySelectorAll(".game-icon").forEach(element => {
  element.classList.remove("selected");
});
}

