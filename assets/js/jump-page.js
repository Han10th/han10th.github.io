function toggleTags() {
  const list = document.getElementById('tagList');
  list.style.display = (list.style.display === "block") ? "none" : "block";
}

// Close menu if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('#tagBtn')) {
    const dropdown = document.getElementById("tagList");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
}
