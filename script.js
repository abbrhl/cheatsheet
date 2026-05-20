function openTab(event, tabId) {
  // Verberg alle tab-content
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Verwijder 'active' van alle knoppen
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Toon het geselecteerde tabblad
  document.getElementById(tabId).classList.add('active');

  // Markeer de knop als actief
  event.currentTarget.classList.add('active');
}
