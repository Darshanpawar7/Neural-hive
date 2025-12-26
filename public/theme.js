(function () {
  const root = document.documentElement;
  const button = document.getElementById("themeToggle");

  function setTheme(mode) {
    if (mode === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  // Load theme on first load
  const saved = localStorage.getItem("theme");
  if (saved) {
    setTheme(saved);
  } else {
    // AUTO MATCH SYSTEM THEME FIRST VISIT
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  // Toggle button click handler
  if (button) {
    button.addEventListener("click", () => {
      const isDark = root.classList.contains("dark");
      setTheme(isDark ? "light" : "dark");
    });
  }
})();
