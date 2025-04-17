document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les éléments avec la classe "animate-text"
  const textElements = document.querySelectorAll(".animate-text");
  const textred = document.querySelector(".style");

  // Fonction pour animer un élément
  function animateText(element) {
    const text = element.textContent; // Récupère le texte de l'élément
    element.textContent = ""; // Vide le contenu de l'élément

    // Divise le texte en lettres et ajoute chaque lettre dans un span
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0"; // Masque la lettre initialement
      span.style.transition = `opacity 0.5s ${index * 0.1}s`;
      textred.style.color = "red"; // Animation avec délai
      element.appendChild(span);

      // Rend la lettre visible après un délai
      setTimeout(() => {
        span.style.opacity = "1";
      }, index * 100); // Délai entre chaque lettre
    });

    // Réinitialise l'animation après la fin
    setTimeout(() => {
      element.textContent = text; // Réinitialise le texte
      animateText(element); // Relance l'animation
    }, text.length * 100 + 2000); // Délai total avant de recommencer
  }

  // Applique l'animation à chaque élément
  textElements.forEach((element) => {
    animateText(element);
  });
});

const elementFrame = document.getElementById("frame");
const link = document.querySelectorAll("#table a");

link.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const url = this.getAttribute("data-url");
    elementFrame.src = url;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Sélection des éléments
  const toggleReduceButton = document.getElementById("toggleButton");
  const toggleThemeButton = document.querySelector(".btn-toggle");
  const body = document.body;
  const gaucheSection = document.querySelector(".gauche");
  const tableRows = document.querySelectorAll(".table tr");
  const logo = document.querySelector(".logo img");

  // Gestion de la réduction du contenu
  toggleReduceButton.addEventListener("click", function () {
    gaucheSection.classList.toggle("reduced");

    // Masquer ou afficher le texte dans les lignes du tableau
    tableRows.forEach((row) => {
      const textSpan = row.querySelector("span:not(.material-symbols-rounded)");
      if (textSpan) {
        textSpan.style.display = gaucheSection.classList.contains("reduced")
          ? "none"
          : "inline";
        logo.src = "./logo K Fokam upscale Zepoh 1 (1).png";
      }
    });
    if (gaucheSection.classList.toggle("inline")) {
      logo.src = "./logo K Fokam only picto.png";
    }
  });
  // document.addEventListener("DOMContentLoaded", function (){
  //   const toggleReduceButton = document.getElementById("toggleButton");
  // })
  function checkWindowSize() {
    if (window.innerWidth <= 650) {
      const toggleReduceButton = document.getElementById("toggleButton");
      toggleReduceButton.style.display = "none";
      const gaucheSection = document.querySelector(".gauche");
      gaucheSection.classList.toggle("reduced");

      const textSpan = document.querySelectorAll(
        "span:not(.material-symbols-rounded)"
      );
      textSpan.forEach((text) => {
      

        const logo = document.querySelector(".logo img");
        text.style.display = "none";
        logo.src = "./logo K Fokam only picto.png";
      });
    } else {
      console.log("La fenêtre est supérieure à 768px");
    }
  }

  // Appeler la fonction au chargement de la page
  checkWindowSize();

  // Surveiller les changements de taille de la fenêtre
  window.addEventListener("resize", checkWindowSize);

  // Gestion du changement de mode
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark-mode") {
    body.classList.add("dark-mode");
    toggleThemeButton.querySelector("span").textContent = "light_mode"; // Changer l'icône
    toggleThemeButton.querySelector("span:last-child").textContent =
      "Mode Clair"; // Changer le texte
  } else {
    body.classList.add("light-mode");
  }

  toggleThemeButton.addEventListener("click", function () {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
      toggleThemeButton.querySelector("span").textContent = "light_mode"; // Changer l'icône
      toggleThemeButton.querySelector("span:last-child").textContent =
        "Mode Clair"; // Changer le texte
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light-mode");
      toggleThemeButton.querySelector("span").textContent = "dark_mode"; // Changer l'icône
      toggleThemeButton.querySelector("span:last-child").textContent =
        "Mode Sombre"; // Changer le texte
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeButton = document.querySelector(".btn-toggle");
  const body = document.body;

  // Vérifier le mode actuel dans le localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark-mode") {
    body.classList.add("dark-mode");
    toggleThemeButton.querySelector("span").textContent = "light_mode"; // Changer l'icône
  } else {
    body.classList.add("light-mode");
  }

  // Basculer entre les modes
  toggleThemeButton.addEventListener("click", function () {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
      toggleThemeButton.querySelector("span").textContent = "light_mode"; // Changer l'icône
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light-mode");
      toggleThemeButton.querySelector("span").textContent = "dark_mode"; // Changer l'icône
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeButton = document.querySelector(".btn-toggle");
  const body = document.body;

  // Vérifier le mode actuel dans le localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark-mode") {
    body.classList.add("dark-mode");
    toggleThemeButton.querySelector("span").textContent = "light_mode"; // Changer l'icône
  } else {
    body.classList.add("light-mode");
  }

  // Basculer entre les modes
  toggleThemeButton.addEventListener("click", function () {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
      toggleThemeButton.querySelector("span").textContent = "light_mode"; // Changer l'icône
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light-mode");
      toggleThemeButton.querySelector("span").textContent = "dark_mode"; // Changer l'icône
    }
  });
});
