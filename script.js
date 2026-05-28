const WACHTWOORD_A = "A2006"; // Volledige versie
const WACHTWOORD_B = "R2007"; // Beperkte versie

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-msg");

  if (input === WACHTWOORD_A) {
    toonCheatsheet("a");
  } else if (input === WACHTWOORD_B) {
    toonCheatsheet("b");
  } else {
    error.style.display = "block";
    document.getElementById("password-input").value = "";
  }
}

function toonCheatsheet(versie) {
  // Verberg login scherm
  document.getElementById("login-screen").style.display = "none";

  // Toon cheatsheet
  document.getElementById("cheatsheet").classList.remove("hidden");

  // Toon juiste versie kaarten
  if (versie === "a") {
    document.querySelectorAll(".version-a").forEach(el => el.style.display = "block");
    document.querySelectorAll(".version-b").forEach(el => el.style.display = "none");
    document.getElementById("subtitle").textContent = "Volledige versie";
  } else {
    document.querySelectorAll(".version-a").forEach(el => el.style.display = "none");
    document.querySelectorAll(".version-b").forEach(el => el.style.display = "block");
    document.getElementById("subtitle").textContent = "Examen voorbereiding";
  }
}

function openTab(event, tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}

// Enter toets werkt ook op het wachtwoordveld
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("password-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") checkPassword();
  });
});
