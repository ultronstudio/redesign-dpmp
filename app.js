(() => {
  const searchToggle = document.querySelector(".search-toggle");
  const searchPanel = document.querySelector(".search-panel");

  searchToggle?.addEventListener("click", () => {
    searchPanel.hidden = !searchPanel.hidden;
    if (!searchPanel.hidden) document.getElementById("siteSearch")?.focus();
  });

  const tabs = document.querySelectorAll(".planner-tab");
  const panels = document.querySelectorAll(".planner-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(item => item.classList.remove("active"));
      panels.forEach(panel => panel.hidden = true);

      tab.classList.add("active");
      document.getElementById(tab.dataset.panel).hidden = false;
    });
  });

  const from = document.getElementById("from");
  const to = document.getElementById("to");

  document.getElementById("swapStops")?.addEventListener("click", () => {
    const tmp = from.value;
    from.value = to.value;
    to.value = tmp;
  });

  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");

  const date = document.getElementById("date");
  const time = document.getElementById("time");

  if (date) date.value = `${yyyy}-${mm}-${dd}`;
  if (time) time.value = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;

  document.getElementById("connectionForm")?.addEventListener("submit", e => {
    e.preventDefault();
    bootstrap.Toast.getOrCreateInstance(document.getElementById("demoToast")).show();
  });

  document.querySelector(".site-search-form")?.addEventListener("submit", e => e.preventDefault());
})();
