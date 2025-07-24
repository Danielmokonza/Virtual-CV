

function loadSection(fileName) {
  fetch(fileName)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then(html => {
      document.getElementById('mainContent').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('mainContent').innerHTML = `<p>Error loading content.</p>`;
      console.error('Error loading section:', error);
    });
}

// Attach event listeners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nav-home").addEventListener("click", () => loadSection("home.html"));
  document.getElementById("nav-about").addEventListener("click", () => loadSection("about.html"));
  document.getElementById("nav-work").addEventListener("click", () => loadSection("work.html"));
  document.getElementById("nav-portfolio").addEventListener("click", () => loadSection("portfolio.html"));
  document.getElementById("nav-education").addEventListener("click", () => loadSection("education.html"));

  // Load default tab
  loadSection("home.html");
});
