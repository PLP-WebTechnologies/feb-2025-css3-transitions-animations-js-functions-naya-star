document.addEventListener("DOMContentLoaded", () => {
    const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
    const resetBtn = document.getElementById("resetBookmarks");
    const themeToggle = document.getElementById("toggleTheme");
    const saved = JSON.parse(localStorage.getItem("bookmarked")) || [];
    const body = document.body;
  
    // Load bookmarks from localStorage
    bookmarkButtons.forEach(btn => {
      const card = btn.closest(".card");
      const id = card.dataset.id;
  
      if (saved.includes(id)) {
        card.classList.add("bookmarked");
        btn.textContent = "Bookmarked ✔";
      }
  
      btn.addEventListener("click", () => {
        if (!saved.includes(id)) {
          saved.push(id);
          localStorage.setItem("bookmarked", JSON.stringify(saved));
          card.classList.add("bookmarked");
          btn.textContent = "Bookmarked ✔";
        }
      });
    });
  
    // Reset bookmarks
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem("bookmarked");
      location.reload();
    });
  
    // Theme toggle
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
    });
  
    // Load theme preference
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-theme");
    }
  });
  