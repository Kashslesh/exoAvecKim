const alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];
// initiliation des variables
const username = document.querySelector("#username");
let password = document.querySelector("#password");
const comfirmPassword = document.querySelector("#comfirm-password");
const parag = document.querySelector("p");

document.querySelector("form").addEventListener("submit", () => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation
  if (password.value.length <= 1 && password.value.length <= 4) {
    parag.innerText = "faible";
    return;
  } else if (password.value != comfirmPassword.value) {
    parag.innerText = "le login et le mot de passe ne sont pas les mêmes";
    return;
  }
  for (let profils of alreadyRegisteredUsernames) {
    if (profils == username.value) {
      parag.innerText = "Ce profil deja existe";
      return;
    }
  }
  // on n'envoie pas vraiment les données pour l'exercice
  document.querySelector("main").innerHTML = "Compte créé :)";
});

// logique pour un condition des liens
password.addEventListener("keydown", (line) => {
  let montreLine = line.currentTarget.value.length;
  if (montreLine <= 4) {
    parag.innerText = "faible";
  } else if (montreLine >= 5 && montreLine < 8) {
    parag.innerText = "très faible";
  } else if (montreLine >= 9 && montreLine < 12) {
    parag.innerText = "bonne";
  } else if (montreLine >= 13) {
    parag.innerText = "trés bonne";
  }
});

// color picker logique
const colorPicker = document.querySelector("#colorpicker");
const btn = document.querySelector("#btn");
const bodyHtml = document.querySelector("body");
// console.log(bodyHtml,btn,colorPicker);
btn.addEventListener("click", function () {
  bodyHtml.style.backgroundColor = colorPicker.value;
});
