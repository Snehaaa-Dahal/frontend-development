function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("themeBtn");

  // classList.toggle() adds the class if it's not there, removes it if it is
  body.classList.toggle("dark-mode");

  // Check if dark mode is currently active, and update button text accordingly
  if (body.classList.contains("dark-mode")) {
    btn.textContent = "Switch to Light Mode";
  } else {
    btn.textContent = "Switch to Dark Mode";
  }
}